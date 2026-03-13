import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  PrimitiveHoveredItem,
} from 'lightweight-charts';
import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import { BaseDrawingPrimitive } from '../base-drawing';
import type {
  DrawingContext,
  PixelPoint,
} from '../types';
import {
  FIB_LEVELS,
  FIB_LEVEL_COLORS,
} from '../types';
import {
  setLineDash,
  drawSelectionHandle,
  HIT_THRESHOLD,
} from '../utils';

// ─── Types ──────────────────────────────────────────────────────────────

interface FibLevel {
  ratio: number;
  price: number;
  y: number;
  lineColor: string;
  fillColor: string;
}

// ─── Renderer ───────────────────────────────────────────────────────────

class FibonacciRenderer implements IPrimitivePaneRenderer {
  private readonly _primitive: FibonacciPrimitive;

  constructor(primitive: FibonacciPrimitive) {
    this._primitive = primitive;
  }

  draw(target: CanvasRenderingTarget2D): void {
    const data = this._primitive.data;
    const state = this._primitive.state;

    if (!data.visible) return;

    const context = this._primitive.getContext();
    if (!context) return;

    const pixelAnchors = this._primitive.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;

    target.useMediaCoordinateSpace(({ context: ctx, mediaSize }) => {
      const { width, height } = mediaSize;

      // Determine the two anchor points (supporting preview during creation)
      let startAnchor = p0;
      let endAnchor = pixelAnchors[1] ?? null;

      if (state.creating && p0 && state.previewAnchor) {
        endAnchor = this._primitive.getPreviewPixel();
      }

      if (!startAnchor || !endAnchor) return;

      // Determine prices from anchors
      const startPrice = data.anchors[0].price;
      const endPrice = state.creating && state.previewAnchor
        ? state.previewAnchor.price
        : data.anchors[1]?.price;

      if (startPrice === undefined || endPrice === undefined) return;

      // Compute x-range: from leftmost anchor to right edge of chart
      const xLeft = Math.min(startAnchor.x, endAnchor.x);
      const xRight = width;

      // Compute fib levels with pixel coordinates
      const levels = this._computeLevels(context, startPrice, endPrice);
      if (levels.length === 0) return;

      ctx.save();

      // Draw fills between adjacent levels
      for (let i = 0; i < levels.length - 1; i++) {
        const upper = levels[i];
        const lower = levels[i + 1];
        const fillColor = upper.fillColor;

        ctx.fillStyle = fillColor;
        ctx.fillRect(
          xLeft,
          Math.min(upper.y, lower.y),
          xRight - xLeft,
          Math.abs(lower.y - upper.y),
        );
      }

      // Draw level lines and labels
      for (const level of levels) {
        // Draw the level line
        ctx.beginPath();
        ctx.strokeStyle = level.lineColor;
        ctx.lineWidth = data.style.lineWidth;
        setLineDash(ctx, data.style.lineStyle);
        ctx.moveTo(xLeft, level.y);
        ctx.lineTo(xRight, level.y);
        ctx.stroke();

        // Draw label
        this._drawLabel(ctx, level, xRight, height);
      }

      // Draw selection handles at both anchor points
      if (state.selected) {
        drawSelectionHandle(ctx, startAnchor.x, startAnchor.y, data.style.color);
        drawSelectionHandle(ctx, endAnchor.x, endAnchor.y, data.style.color);
      }

      ctx.restore();
    });
  }

  private _computeLevels(
    context: DrawingContext,
    startPrice: number,
    endPrice: number,
  ): FibLevel[] {
    const levels: FibLevel[] = [];
    const priceRange = endPrice - startPrice;

    for (const ratio of FIB_LEVELS) {
      const price = startPrice + priceRange * ratio;
      const yCoord = context.series.priceToCoordinate(price);
      if (yCoord === null) continue;

      const colors = FIB_LEVEL_COLORS[ratio];
      if (!colors) continue;

      levels.push({
        ratio,
        price,
        y: yCoord as number,
        lineColor: colors.line,
        fillColor: colors.fill,
      });
    }

    return levels;
  }

  private _drawLabel(
    ctx: CanvasRenderingContext2D,
    level: FibLevel,
    xRight: number,
    _chartHeight: number,
  ): void {
    const labelText = `${(level.ratio * 100).toFixed(1)}% ($${level.price.toFixed(2)})`;
    const padding = 4;
    const marginRight = 8;

    ctx.font = '11px sans-serif';
    const textMetrics = ctx.measureText(labelText);
    const textWidth = textMetrics.width;
    const textHeight = 14; // approximate height for 11px font

    const labelX = xRight - textWidth - padding * 2 - marginRight;
    const labelY = level.y - textHeight / 2 - padding;
    const labelWidth = textWidth + padding * 2;
    const labelHeight = textHeight + padding * 2;

    // Draw label background
    ctx.fillStyle = level.fillColor.replace(/[\d.]+\)$/, '0.6)');
    ctx.beginPath();
    ctx.roundRect(labelX, labelY, labelWidth, labelHeight, 3);
    ctx.fill();

    // Draw label text
    ctx.fillStyle = level.lineColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText(labelText, labelX + padding, level.y);
  }
}

// ─── Pane view ──────────────────────────────────────────────────────────

class FibonacciPaneView implements IPrimitivePaneView {
  private readonly _renderer: FibonacciRenderer;

  constructor(primitive: FibonacciPrimitive) {
    this._renderer = new FibonacciRenderer(primitive);
  }

  zOrder(): 'bottom' | 'normal' | 'top' {
    return 'bottom';
  }

  renderer(): IPrimitivePaneRenderer | null {
    return this._renderer;
  }
}

// ─── Primitive ──────────────────────────────────────────────────────────

export class FibonacciPrimitive extends BaseDrawingPrimitive {
  // ─── BaseDrawingPrimitive implementation ─────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new FibonacciPaneView(this);
  }

  protected _hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    if (!this._context) return null;

    const pixelAnchors = this.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;
    const p1 = pixelAnchors[1] ?? null;

    if (!p0 || !p1) return null;

    // Check anchor proximity first (highest priority)
    if (this._isNearAnchor(x, y, p0) || this._isNearAnchor(x, y, p1)) {
      return {
        cursorStyle: 'grab',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Compute fib level y-coordinates for hit testing
    const startPrice = this._data.anchors[0].price;
    const endPrice = this._data.anchors[1].price;
    const priceRange = endPrice - startPrice;

    const xLeft = Math.min(p0.x, p1.x);

    // Check if x is within the fib region's horizontal extent (from left anchor to infinity right)
    if (x < xLeft - HIT_THRESHOLD) return null;

    const levelYs: number[] = [];
    for (const ratio of FIB_LEVELS) {
      const price = startPrice + priceRange * ratio;
      const yCoord = this._context.series.priceToCoordinate(price);
      if (yCoord !== null) {
        levelYs.push(yCoord as number);
      }
    }

    if (levelYs.length === 0) return null;

    // Check if cursor is near any level line
    for (const levelY of levelYs) {
      if (Math.abs(y - levelY) <= HIT_THRESHOLD) {
        return {
          cursorStyle: 'move',
          externalId: this._data.id,
          zOrder: 'normal',
        };
      }
    }

    // Check if cursor is inside the fib region (between first and last level)
    const minY = Math.min(...levelYs);
    const maxY = Math.max(...levelYs);

    if (y >= minY && y <= maxY) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    return null;
  }
}
