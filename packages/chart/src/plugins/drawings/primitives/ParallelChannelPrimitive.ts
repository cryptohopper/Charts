import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  PrimitiveHoveredItem,
} from 'lightweight-charts';
import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import { BaseDrawingPrimitive } from '../base-drawing';
import type {
  DrawingData,
  PixelPoint,
} from '../types';
import {
  pointToSegmentDistance,
  drawLine,
  drawSelectionHandle,
  isPointInRect,
  HIT_THRESHOLD,
} from '../utils';

// ─── Helpers ──────────────────────────────────────────────────────────────

/**
 * Compute the signed perpendicular distance from point P to the infinite
 * line through A and B. The sign indicates which side of the line P is on.
 */
function signedPerpendicularDistance(
  p: PixelPoint,
  a: PixelPoint,
  b: PixelPoint,
): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  if (len === 0) return 0;
  // Cross-product gives signed distance * length
  return (dy * (p.x - a.x) - dx * (p.y - a.y)) / len;
}

/**
 * Return the two endpoints of the parallel line, offset from the primary
 * line (p0→p1) by the perpendicular distance of anchor p2.
 */
function computeParallelLine(
  p0: PixelPoint,
  p1: PixelPoint,
  p2: PixelPoint,
): { a: PixelPoint; b: PixelPoint } {
  const dx = p1.x - p0.x;
  const dy = p1.y - p0.y;
  const len = Math.hypot(dx, dy);
  if (len === 0) return { a: { ...p0 }, b: { ...p1 } };

  // Unit normal (perpendicular to the primary line)
  const nx = -dy / len;
  const ny = dx / len;

  // Signed offset from the primary line to p2
  const offset = signedPerpendicularDistance(p2, p0, p1);

  return {
    a: { x: p0.x + nx * offset, y: p0.y + ny * offset },
    b: { x: p1.x + nx * offset, y: p1.y + ny * offset },
  };
}

/**
 * Check if a point lies inside the parallelogram formed by the two
 * parallel lines (p0→p1 and parallel a→b).
 */
function isInsideChannel(
  point: PixelPoint,
  p0: PixelPoint,
  p1: PixelPoint,
  pa: PixelPoint,
  pb: PixelPoint,
): boolean {
  const d1 = signedPerpendicularDistance(point, p0, p1);
  const d2 = signedPerpendicularDistance(point, pa, pb);
  // Point is between the two lines if the signed distances have opposite signs
  // (or one is zero, meaning on a line)
  return d1 * d2 <= 0;
}

// ─── Renderer ─────────────────────────────────────────────────────────────

class ParallelChannelRenderer implements IPrimitivePaneRenderer {
  private readonly _primitive: ParallelChannelPrimitive;

  constructor(primitive: ParallelChannelPrimitive) {
    this._primitive = primitive;
  }

  draw(target: CanvasRenderingTarget2D): void {
    const data = this._primitive.data;
    const state = this._primitive.state;

    if (!data.visible) return;

    const pixelAnchors = this._primitive.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;
    const p1 = pixelAnchors[1] ?? null;
    const p2 = pixelAnchors[2] ?? null;

    target.useMediaCoordinateSpace(({ context: ctx }) => {
      // ── Preview during creation ───────────────────────────────────
      if (state.creating) {
        const preview = this._primitive.getPreviewPixel();

        if (p0 && p1 && preview) {
          // Two anchors placed, preview for the third (channel width)
          const parallel = computeParallelLine(p0, p1, preview);
          this._drawChannel(ctx, p0, p1, parallel.a, parallel.b, data, true);
          return;
        }

        if (p0 && !p1 && preview) {
          // One anchor placed, preview for the second (primary line)
          drawLine(ctx, p0, preview, data.style.color, data.style.lineWidth, data.style.lineStyle);
          return;
        }

        return;
      }

      // ── Normal rendering: need all three anchors ──────────────────
      if (!p0 || !p1 || !p2) return;

      const parallel = computeParallelLine(p0, p1, p2);
      this._drawChannel(ctx, p0, p1, parallel.a, parallel.b, data, state.selected);

      // Selection handles
      if (state.selected) {
        drawSelectionHandle(ctx, p0.x, p0.y, data.style.color);
        drawSelectionHandle(ctx, p1.x, p1.y, data.style.color);
        drawSelectionHandle(ctx, p2.x, p2.y, data.style.color);
      }
    });
  }

  private _drawChannel(
    ctx: CanvasRenderingContext2D,
    p0: PixelPoint,
    p1: PixelPoint,
    pa: PixelPoint,
    pb: PixelPoint,
    data: DrawingData,
    showMiddle: boolean,
  ): void {
    const { color, lineWidth, lineStyle, fillColor, fillOpacity } = data.style;

    // Fill between the two parallel lines
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(pb.x, pb.y);
    ctx.lineTo(pa.x, pa.y);
    ctx.closePath();
    ctx.fillStyle = fillColor ?? color;
    ctx.globalAlpha = fillOpacity ?? 0.1;
    ctx.fill();
    ctx.restore();

    // Primary line
    drawLine(ctx, p0, p1, color, lineWidth, lineStyle);

    // Parallel line
    drawLine(ctx, pa, pb, color, lineWidth, lineStyle);

    // Optional middle line
    if (data.extra?.showMiddleLine) {
      const mid0: PixelPoint = {
        x: (p0.x + pa.x) / 2,
        y: (p0.y + pa.y) / 2,
      };
      const mid1: PixelPoint = {
        x: (p1.x + pb.x) / 2,
        y: (p1.y + pb.y) / 2,
      };
      drawLine(ctx, mid0, mid1, color, Math.max(1, lineWidth - 1), 'dashed');
    }
  }
}

// ─── Pane view ────────────────────────────────────────────────────────────

class ParallelChannelPaneView implements IPrimitivePaneView {
  private readonly _renderer: ParallelChannelRenderer;

  constructor(primitive: ParallelChannelPrimitive) {
    this._renderer = new ParallelChannelRenderer(primitive);
  }

  zOrder(): 'bottom' | 'normal' | 'top' {
    return 'normal';
  }

  renderer(): IPrimitivePaneRenderer | null {
    return this._renderer;
  }
}

// ─── Primitive ────────────────────────────────────────────────────────────

export class ParallelChannelPrimitive extends BaseDrawingPrimitive {
  // ─── BaseDrawingPrimitive implementation ──────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new ParallelChannelPaneView(this);
  }

  protected _hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    const pixelAnchors = this.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;
    const p1 = pixelAnchors[1] ?? null;
    const p2 = pixelAnchors[2] ?? null;

    if (!p0 || !p1 || !p2) return null;

    const parallel = computeParallelLine(p0, p1, p2);

    // Check anchor proximity first (highest priority)
    if (
      this._isNearAnchor(x, y, p0) ||
      this._isNearAnchor(x, y, p1) ||
      this._isNearAnchor(x, y, p2)
    ) {
      return {
        cursorStyle: 'grab',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Check proximity to either line segment
    const cursor: PixelPoint = { x, y };
    const distPrimary = pointToSegmentDistance(cursor, p0, p1);
    const distParallel = pointToSegmentDistance(cursor, parallel.a, parallel.b);

    if (distPrimary <= HIT_THRESHOLD || distParallel <= HIT_THRESHOLD) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Check if inside the channel region
    if (isInsideChannel(cursor, p0, p1, parallel.a, parallel.b)) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    return null;
  }
}
