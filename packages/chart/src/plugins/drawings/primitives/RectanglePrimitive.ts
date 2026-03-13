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
  setLineDash,
  drawSelectionHandle,
  isPointInRect,
  pointToRectEdgeDistance,
  HIT_THRESHOLD,
} from '../utils';

// ─── Helpers ──────────────────────────────────────────────────────────────

/** Derive the four corners and normalised top-left / bottom-right from two anchor pixels. */
function normaliseRect(
  a: PixelPoint,
  b: PixelPoint,
): { topLeft: PixelPoint; bottomRight: PixelPoint; topRight: PixelPoint; bottomLeft: PixelPoint } {
  const minX = Math.min(a.x, b.x);
  const maxX = Math.max(a.x, b.x);
  const minY = Math.min(a.y, b.y);
  const maxY = Math.max(a.y, b.y);

  return {
    topLeft: { x: minX, y: minY },
    topRight: { x: maxX, y: minY },
    bottomLeft: { x: minX, y: maxY },
    bottomRight: { x: maxX, y: maxY },
  };
}

/** Determine which edge of a rectangle is closest to the given point. */
function closestEdge(
  p: PixelPoint,
  tl: PixelPoint,
  br: PixelPoint,
): 'top' | 'bottom' | 'left' | 'right' {
  const dTop = Math.abs(p.y - tl.y);
  const dBottom = Math.abs(p.y - br.y);
  const dLeft = Math.abs(p.x - tl.x);
  const dRight = Math.abs(p.x - br.x);

  const min = Math.min(dTop, dBottom, dLeft, dRight);
  if (min === dTop) return 'top';
  if (min === dBottom) return 'bottom';
  if (min === dLeft) return 'left';
  return 'right';
}

/** Map an edge name to a CSS cursor style. */
function edgeCursor(edge: 'top' | 'bottom' | 'left' | 'right'): string {
  switch (edge) {
    case 'top':
    case 'bottom':
      return 'ns-resize';
    case 'left':
    case 'right':
      return 'ew-resize';
  }
}

// ─── Renderer ─────────────────────────────────────────────────────────────

class RectangleRenderer implements IPrimitivePaneRenderer {
  private readonly _primitive: RectanglePrimitive;

  constructor(primitive: RectanglePrimitive) {
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
          this._drawRect(ctx, p0, preview, data, false);
        }
        return;
      }

      // ── Normal rendering: need both anchors ───────────────────────
      if (!p0 || !p1) return;

      this._drawRect(ctx, p0, p1, data, state.selected);
    });
  }

  private _drawRect(
    ctx: CanvasRenderingContext2D,
    a: PixelPoint,
    b: PixelPoint,
    data: DrawingData,
    selected: boolean,
  ): void {
    const { topLeft, bottomRight, topRight, bottomLeft } = normaliseRect(a, b);
    const w = bottomRight.x - topLeft.x;
    const h = bottomRight.y - topLeft.y;
    const { color, lineWidth, lineStyle, fillColor, fillOpacity } = data.style;

    // Fill
    ctx.save();
    ctx.fillStyle = fillColor ?? color;
    ctx.globalAlpha = fillOpacity ?? 0.15;
    ctx.fillRect(topLeft.x, topLeft.y, w, h);
    ctx.restore();

    // Stroke
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    setLineDash(ctx, lineStyle);
    ctx.strokeRect(topLeft.x, topLeft.y, w, h);
    ctx.restore();

    // Selection handles at all four corners
    if (selected) {
      drawSelectionHandle(ctx, topLeft.x, topLeft.y, color);
      drawSelectionHandle(ctx, topRight.x, topRight.y, color);
      drawSelectionHandle(ctx, bottomLeft.x, bottomLeft.y, color);
      drawSelectionHandle(ctx, bottomRight.x, bottomRight.y, color);
    }
  }
}

// ─── Pane view ────────────────────────────────────────────────────────────

class RectanglePaneView implements IPrimitivePaneView {
  private readonly _renderer: RectangleRenderer;

  constructor(primitive: RectanglePrimitive) {
    this._renderer = new RectangleRenderer(primitive);
  }

  zOrder(): 'bottom' | 'normal' | 'top' {
    return 'normal';
  }

  renderer(): IPrimitivePaneRenderer | null {
    return this._renderer;
  }
}

// ─── Primitive ────────────────────────────────────────────────────────────

export class RectanglePrimitive extends BaseDrawingPrimitive {
  // ─── BaseDrawingPrimitive implementation ──────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new RectanglePaneView(this);
  }

  protected _hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    const pixelAnchors = this.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;
    const p1 = pixelAnchors[1] ?? null;

    if (!p0 || !p1) return null;

    const { topLeft, bottomRight, topRight, bottomLeft } = normaliseRect(p0, p1);

    // Check all four corner anchors first (highest priority)
    const corners = [topLeft, topRight, bottomLeft, bottomRight];
    for (const corner of corners) {
      if (this._isNearAnchor(x, y, corner)) {
        return {
          cursorStyle: 'grab',
          externalId: this._data.id,
          zOrder: 'normal',
        };
      }
    }

    // Check proximity to rectangle edges
    const cursor: PixelPoint = { x, y };
    const edgeDist = pointToRectEdgeDistance(cursor, topLeft, bottomRight);

    if (edgeDist <= HIT_THRESHOLD) {
      const edge = closestEdge(cursor, topLeft, bottomRight);
      return {
        cursorStyle: edgeCursor(edge),
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Check if inside the rectangle body
    if (isPointInRect(cursor, topLeft, bottomRight)) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    return null;
  }
}
