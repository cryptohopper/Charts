import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  PrimitiveHoveredItem,
} from 'lightweight-charts';
import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import { BaseDrawingPrimitive } from '../base-drawing';
import type { PixelPoint } from '../types';
import {
  pointToSegmentDistance,
  drawLine,
  drawSelectionHandle,
  HIT_THRESHOLD,
} from '../utils';

// ─── Renderer ───────────────────────────────────────────────────────────

class TrendlineRenderer implements IPrimitivePaneRenderer {
  private readonly _primitive: TrendlinePrimitive;

  constructor(primitive: TrendlinePrimitive) {
    this._primitive = primitive;
  }

  draw(target: CanvasRenderingTarget2D): void {
    const data = this._primitive.data;
    const state = this._primitive.state;

    if (!data.visible) return;

    const pixelAnchors = this._primitive.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;
    const p1 = pixelAnchors[1] ?? null;

    target.useMediaCoordinateSpace(({ context: ctx, mediaSize }) => {
      // During creation: draw preview line from first anchor to cursor
      if (state.creating && p0 && state.previewAnchor) {
        const preview = this._primitive.getPreviewPixel();
        if (preview) {
          drawLine(ctx, p0, preview, data.style.color, data.style.lineWidth, data.style.lineStyle);
        }
        return;
      }

      // Normal rendering: need both anchors
      if (!p0 || !p1) return;

      drawLine(ctx, p0, p1, data.style.color, data.style.lineWidth, data.style.lineStyle);

      // Draw selection handles when selected
      if (state.selected) {
        drawSelectionHandle(ctx, p0.x, p0.y, data.style.color);
        drawSelectionHandle(ctx, p1.x, p1.y, data.style.color);
      }
    });
  }
}

// ─── Pane view ──────────────────────────────────────────────────────────

class TrendlinePaneView implements IPrimitivePaneView {
  private readonly _renderer: TrendlineRenderer;

  constructor(primitive: TrendlinePrimitive) {
    this._renderer = new TrendlineRenderer(primitive);
  }

  zOrder(): 'bottom' | 'normal' | 'top' {
    return 'normal';
  }

  renderer(): IPrimitivePaneRenderer | null {
    return this._renderer;
  }
}

// ─── Primitive ──────────────────────────────────────────────────────────

export class TrendlinePrimitive extends BaseDrawingPrimitive {
  // ─── BaseDrawingPrimitive implementation ─────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new TrendlinePaneView(this);
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
