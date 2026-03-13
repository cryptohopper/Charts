import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  Time,
} from 'lightweight-charts';
import type { DetectedPattern } from '@hopcharts/core';
import {
  type AIOverlayTheme,
  type RendererData,
  getAIOverlayTheme,
  isBullish,
  isVisible,
  toPixels,
  hexToRgba,
} from './types.js';
import { BaseAIPrimitive } from './BaseAIPrimitive.js';

// ── Renderer ───────────────────────────────────────────────────────

class AIProjectionRenderer implements IPrimitivePaneRenderer {
  private _data: RendererData;

  constructor(data: RendererData) {
    this._data = data;
  }

  draw(target: CanvasRenderingTarget2D): void {
    const { patterns, chart, series } = this._data;
    if (patterns.length === 0) return;

    const timeScale = chart.timeScale();
    const theme = getAIOverlayTheme();
    const visibleRange = timeScale.getVisibleRange();
    if (!visibleRange) return;

    const { highlightedId } = this._data;

    target.useMediaCoordinateSpace(({ context: ctx }) => {
      for (const pattern of patterns) {
        if (!pattern.projection) continue;
        if (!isVisible(pattern, visibleRange)) continue;

        const { targetPrice, projectedPoints } = pattern.projection;
        if (projectedPoints.length < 2) continue;

        const bullish = isBullish(pattern.type);
        const baseColor = bullish ? theme.bullishStroke : theme.bearishStroke;

        // Highlight state: compute opacity multiplier
        let opacityMul = 1;
        if (highlightedId !== null) {
          opacityMul = pattern.id === highlightedId ? 1.3 : 0.5;
        }

        const lastPatternPoint = pattern.points[pattern.points.length - 1];
        if (!lastPatternPoint) continue;

        const pixels = toPixels(projectedPoints, timeScale, series);
        if (pixels.length < 2) continue;

        const originX = timeScale.timeToCoordinate(
          lastPatternPoint.timestamp as unknown as Time,
        );
        const originY = series.priceToCoordinate(lastPatternPoint.price);
        if (originX === null || originY === null) continue;

        ctx.save();

        this._drawProjectionCurve(
          ctx,
          { x: originX as number, y: originY as number },
          pixels,
          baseColor,
          opacityMul,
        );

        const targetY = series.priceToCoordinate(targetPrice);
        if (targetY !== null) {
          const lastPixel = pixels[pixels.length - 1];
          this._drawTargetMarker(
            ctx,
            lastPixel.x,
            targetY as number,
            targetPrice,
            baseColor,
            theme,
            opacityMul,
          );
        }

        ctx.restore();
      }
    });
  }

  private _drawProjectionCurve(
    ctx: CanvasRenderingContext2D,
    origin: { x: number; y: number },
    pixels: Array<{ x: number; y: number }>,
    color: string,
    opacityMul = 1,
  ): void {
    ctx.beginPath();
    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = hexToRgba(color, Math.min(0.7 * opacityMul, 1));
    ctx.lineWidth = 1.5;
    ctx.moveTo(origin.x, origin.y);

    if (pixels.length === 1) {
      ctx.lineTo(pixels[0].x, pixels[0].y);
    } else if (pixels.length === 2) {
      ctx.quadraticCurveTo(pixels[0].x, pixels[0].y, pixels[1].x, pixels[1].y);
    } else {
      let i = 0;
      while (i < pixels.length) {
        const remaining = pixels.length - i;
        if (remaining >= 3) {
          ctx.bezierCurveTo(
            pixels[i].x, pixels[i].y,
            pixels[i + 1].x, pixels[i + 1].y,
            pixels[i + 2].x, pixels[i + 2].y,
          );
          i += 3;
        } else if (remaining === 2) {
          ctx.quadraticCurveTo(
            pixels[i].x, pixels[i].y,
            pixels[i + 1].x, pixels[i + 1].y,
          );
          i += 2;
        } else {
          ctx.lineTo(pixels[i].x, pixels[i].y);
          i += 1;
        }
      }
    }

    ctx.stroke();
  }

  private _drawTargetMarker(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    price: number,
    color: string,
    theme: AIOverlayTheme,
    opacityMul = 1,
  ): void {
    const lineWidth = 60;
    ctx.beginPath();
    ctx.setLineDash([3, 2]);
    ctx.strokeStyle = hexToRgba(color, Math.min(0.5 * opacityMul, 1));
    ctx.lineWidth = 1;
    ctx.moveTo(x - lineWidth / 2, y);
    ctx.lineTo(x + lineWidth / 2, y);
    ctx.stroke();

    const size = 4;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size, y);
    ctx.closePath();
    ctx.fillStyle = hexToRgba(color, Math.min(0.8 * opacityMul, 1));
    ctx.fill();

    const label = price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 8,
    });
    ctx.font = '10px sans-serif';
    const metrics = ctx.measureText(label);
    const padding = 3;
    const lw = metrics.width + padding * 2;
    const lh = 14;
    const lx = x + size + 4;
    const ly = y - lh / 2;

    ctx.globalAlpha = 0.85;
    ctx.fillStyle = theme.labelBackground;
    ctx.beginPath();
    ctx.roundRect(lx, ly, lw, lh, 2);
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.fillStyle = theme.labelColor;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, lx + padding, y);
  }
}

// ── Pane View ──────────────────────────────────────────────────────

class AIProjectionPaneView implements IPrimitivePaneView {
  private _data: RendererData;

  constructor(data: RendererData) {
    this._data = data;
  }

  renderer(): IPrimitivePaneRenderer {
    return new AIProjectionRenderer(this._data);
  }
}

// ── Primitive ──────────────────────────────────────────────────────

export class AIProjectionPrimitive extends BaseAIPrimitive {
  protected filterPatterns(patterns: DetectedPattern[]): DetectedPattern[] {
    return patterns.filter(p => p.projection != null);
  }

  protected createPaneView(data: RendererData): IPrimitivePaneView {
    return new AIProjectionPaneView(data);
  }
}
