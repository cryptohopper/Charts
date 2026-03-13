import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  PrimitiveHoveredItem,
} from 'lightweight-charts';
import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import { BaseDrawingPrimitive } from '../base-drawing';
import type {
  DrawingData,
  DrawingState,
  PixelPoint,
} from '../types';
import {
  pointToSegmentDistance,
  drawSelectionHandle,
  isPointInRect,
  pointToRectEdgeDistance,
  HIT_THRESHOLD,
} from '../utils';

// ─── Time formatting helper ──────────────────────────────────────────────

function formatTimeDiff(seconds: number): string {
  const abs = Math.abs(seconds);
  if (abs < 3600) return `${Math.round(abs / 60)}m`;
  if (abs < 86400) return `${Math.round(abs / 3600)}h`;
  const days = Math.floor(abs / 86400);
  const hours = Math.round((abs % 86400) / 3600);
  return hours > 0 ? `${days}d ${hours}h` : `${days}d`;
}

// ─── Renderer ────────────────────────────────────────────────────────────

class MeasureRenderer implements IPrimitivePaneRenderer {
  private readonly _primitive: MeasurePrimitive;

  constructor(primitive: MeasurePrimitive) {
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
      // During creation: draw preview from first anchor to cursor
      if (state.creating && p0 && state.previewAnchor) {
        const preview = this._primitive.getPreviewPixel();
        if (preview) {
          this._drawMeasure(ctx, p0, preview, data, state, true);
        }
        return;
      }

      // Normal rendering: need both anchors
      if (!p0 || !p1) return;

      this._drawMeasure(ctx, p0, p1, data, state, false);
    });
  }

  private _drawMeasure(
    ctx: CanvasRenderingContext2D,
    p0: PixelPoint,
    p1: PixelPoint,
    data: DrawingData,
    state: DrawingState,
    isPreview: boolean,
  ): void {
    const color = data.style.color;
    const lineWidth = data.style.lineWidth;

    ctx.save();

    // Draw dashed rectangle outline
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash([4, 4]);
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(p0.x, p1.y);
    ctx.closePath();
    ctx.stroke();

    // Semi-transparent fill
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.06;
    ctx.fill();
    ctx.globalAlpha = 1.0;

    // Draw diagonal dashed line from anchor[0] to anchor[1]
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash([4, 4]);
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();

    // Calculate measurements
    const anchor0 = data.anchors[0];
    const anchor1 = data.anchors[1] ?? (state.previewAnchor || null);
    if (anchor0 && anchor1) {
      const priceDiff = anchor1.price - anchor0.price;
      const pctChange = anchor0.price !== 0
        ? (priceDiff / anchor0.price) * 100
        : 0;
      const timeDiff = (anchor1.time as number) - (anchor0.time as number);

      this._drawInfoLabel(ctx, p0, p1, priceDiff, pctChange, timeDiff);
    }

    // Draw selection handles when selected
    if (state.selected && !isPreview) {
      drawSelectionHandle(ctx, p0.x, p0.y, color);
      drawSelectionHandle(ctx, p1.x, p1.y, color);
    }

    ctx.restore();
  }

  private _drawInfoLabel(
    ctx: CanvasRenderingContext2D,
    p0: PixelPoint,
    p1: PixelPoint,
    priceDiff: number,
    pctChange: number,
    timeDiffSec: number,
  ): void {
    const isPositive = priceDiff >= 0;
    const arrow = isPositive ? '\u25B2' : '\u25BC';
    const signColor = isPositive ? '#26a69a' : '#ef5350';
    const sign = isPositive ? '+' : '';

    const line1 = `${arrow} $${Math.abs(priceDiff).toFixed(2)}`;
    const line2 = `${sign}${pctChange.toFixed(2)}%`;
    const line3 = formatTimeDiff(timeDiffSec);

    const fontSize = 11;
    const lineHeight = fontSize + 4;
    const font = `${fontSize}px sans-serif`;
    const paddingH = 10;
    const paddingV = 8;

    ctx.font = font;
    const textWidth = Math.max(
      ctx.measureText(line1).width,
      ctx.measureText(line2).width,
      ctx.measureText(line3).width,
    );

    const boxWidth = textWidth + paddingH * 2;
    const boxHeight = lineHeight * 3 + paddingV * 2;

    // Center the label in the rectangle
    const centerX = (p0.x + p1.x) / 2;
    const centerY = (p0.y + p1.y) / 2;
    const boxX = centerX - boxWidth / 2;
    const boxY = centerY - boxHeight / 2;

    // Background
    ctx.fillStyle = 'rgba(30, 30, 30, 0.85)';
    const radius = 4;
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxWidth, boxHeight, radius);
    ctx.fill();

    // Text lines
    const textX = boxX + paddingH;
    let textY = boxY + paddingV + fontSize;

    // Line 1: price diff with colored arrow
    ctx.fillStyle = signColor;
    ctx.font = font;
    ctx.fillText(arrow, textX, textY);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(` $${Math.abs(priceDiff).toFixed(2)}`, textX + ctx.measureText(arrow).width, textY);

    // Line 2: percentage
    textY += lineHeight;
    ctx.fillStyle = signColor;
    ctx.fillText(line2, textX, textY);

    // Line 3: time duration
    textY += lineHeight;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(line3, textX, textY);
  }
}

// ─── Pane View ───────────────────────────────────────────────────────────

class MeasurePaneView implements IPrimitivePaneView {
  private readonly _renderer: MeasureRenderer;

  constructor(primitive: MeasurePrimitive) {
    this._renderer = new MeasureRenderer(primitive);
  }

  zOrder(): 'bottom' | 'normal' | 'top' {
    return 'normal';
  }

  renderer(): IPrimitivePaneRenderer | null {
    return this._renderer;
  }
}

// ─── Primitive ───────────────────────────────────────────────────────────

export class MeasurePrimitive extends BaseDrawingPrimitive {
  // ─── BaseDrawingPrimitive implementation ─────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new MeasurePaneView(this);
  }

  protected _hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    const pixelAnchors = this.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;
    const p1 = pixelAnchors[1] ?? null;

    if (!p0 || !p1) return null;

    // Check anchors first (they take priority)
    if (this._isNearAnchor(x, y, p0) || this._isNearAnchor(x, y, p1)) {
      return {
        cursorStyle: 'grab',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Check rectangle edges
    const edgeDist = pointToRectEdgeDistance({ x, y }, p0, p1);
    if (edgeDist <= HIT_THRESHOLD) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Check diagonal line
    const diagDist = pointToSegmentDistance({ x, y }, p0, p1);
    if (diagDist <= HIT_THRESHOLD) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Check if inside the rectangle body
    if (isPointInRect({ x, y }, p0, p1)) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    return null;
  }
}
