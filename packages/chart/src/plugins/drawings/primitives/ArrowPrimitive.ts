import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  PrimitiveHoveredItem,
} from 'lightweight-charts';
import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import { BaseDrawingPrimitive } from '../base-drawing';
import type { PixelPoint, LineStyleType } from '../types';
import {
  pointToSegmentDistance,
  drawLine,
  drawSelectionHandle,
  HIT_THRESHOLD,
} from '../utils';

// ─── Constants ────────────────────────────────────────────────────────────

const ARROWHEAD_LENGTH = 12;
const ARROWHEAD_ANGLE = Math.PI / 6;

// ─── Renderer ─────────────────────────────────────────────────────────────

class ArrowRenderer implements IPrimitivePaneRenderer {
  private readonly _primitive: ArrowPrimitive;

  constructor(primitive: ArrowPrimitive) {
    this._primitive = primitive;
  }

  draw(target: CanvasRenderingTarget2D): void {
    const data = this._primitive.data;
    const state = this._primitive.state;

    if (!data.visible) return;

    const pixelAnchors = this._primitive.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;
    const p1 = pixelAnchors[1] ?? null;

    target.useMediaCoordinateSpace(({ context: ctx }) => {
      // ── Preview during creation ───────────────────────────────────
      if (state.creating && p0 && state.previewAnchor) {
        const preview = this._primitive.getPreviewPixel();
        if (preview) {
          this._drawArrow(ctx, p0, preview, data.style.color, data.style.lineWidth, data.style.lineStyle);
        }
        return;
      }

      // ── Normal rendering: need both anchors ───────────────────────
      if (!p0 || !p1) return;

      this._drawArrow(ctx, p0, p1, data.style.color, data.style.lineWidth, data.style.lineStyle);

      // Selection handles
      if (state.selected) {
        drawSelectionHandle(ctx, p0.x, p0.y, data.style.color);
        drawSelectionHandle(ctx, p1.x, p1.y, data.style.color);
      }
    });
  }

  private _drawArrow(
    ctx: CanvasRenderingContext2D,
    start: PixelPoint,
    end: PixelPoint,
    color: string,
    lineWidth: number,
    lineStyle: LineStyleType,
  ): void {
    // Draw the line segment
    drawLine(ctx, start, end, color, lineWidth, lineStyle);

    // Draw arrowhead at the end point (always solid)
    const angle = Math.atan2(end.y - start.y, end.x - start.x);

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(end.x, end.y);
    ctx.lineTo(
      end.x - ARROWHEAD_LENGTH * Math.cos(angle - ARROWHEAD_ANGLE),
      end.y - ARROWHEAD_LENGTH * Math.sin(angle - ARROWHEAD_ANGLE),
    );
    ctx.moveTo(end.x, end.y);
    ctx.lineTo(
      end.x - ARROWHEAD_LENGTH * Math.cos(angle + ARROWHEAD_ANGLE),
      end.y - ARROWHEAD_LENGTH * Math.sin(angle + ARROWHEAD_ANGLE),
    );
    ctx.stroke();
    ctx.restore();
  }
}

// ─── Pane view ────────────────────────────────────────────────────────────

class ArrowPaneView implements IPrimitivePaneView {
  private readonly _renderer: ArrowRenderer;

  constructor(primitive: ArrowPrimitive) {
    this._renderer = new ArrowRenderer(primitive);
  }

  zOrder(): 'bottom' | 'normal' | 'top' {
    return 'normal';
  }

  renderer(): IPrimitivePaneRenderer | null {
    return this._renderer;
  }
}

// ─── Primitive ────────────────────────────────────────────────────────────

export class ArrowPrimitive extends BaseDrawingPrimitive {
  // ─── BaseDrawingPrimitive implementation ──────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new ArrowPaneView(this);
  }

  protected _hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    const pixelAnchors = this.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;
    const p1 = pixelAnchors[1] ?? null;

    if (!p0 || !p1) return null;

    // Check anchors first (they take priority over the line body)
    if (this._isNearAnchor(x, y, p0) || this._isNearAnchor(x, y, p1)) {
      return {
        cursorStyle: 'grab',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Check proximity to the line segment
    const distance = pointToSegmentDistance({ x, y }, p0, p1);
    if (distance <= HIT_THRESHOLD) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    return null;
  }
}
