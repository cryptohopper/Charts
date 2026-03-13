import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
} from 'lightweight-charts';
import {
  type AIOverlayTheme,
  type RendererData,
  getAIOverlayTheme,
  isBullish,
  isVisible,
  toPixels,
  formatPatternLabel,
  hexToRgba,
  lerp,
  CONFIDENCE_OPACITY_RANGE,
} from './types.js';
import { BaseAIPrimitive } from './BaseAIPrimitive.js';

// ── Renderer ───────────────────────────────────────────────────────

class AIPatternRenderer implements IPrimitivePaneRenderer {
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
        if (!isVisible(pattern, visibleRange)) continue;

        const pixels = toPixels(pattern.region, timeScale, series);
        if (pixels.length < 3) continue;

        const bullish = isBullish(pattern.type);
        const baseColor = bullish ? theme.bullishFill : theme.bearishFill;
        const strokeColor = bullish ? theme.bullishStroke : theme.bearishStroke;
        let opacity = lerp(
          CONFIDENCE_OPACITY_RANGE[0],
          CONFIDENCE_OPACITY_RANGE[1],
          pattern.confidence,
        );
        let lineWidth = 1;

        // Highlight state
        if (highlightedId !== null) {
          if (pattern.id === highlightedId) {
            opacity = 0.5;
            lineWidth = 2;
          } else {
            opacity *= 0.5;
          }
        }

        ctx.save();
        this._drawFilledRegion(ctx, pixels, baseColor, opacity);
        this._drawDashedOutline(ctx, pixels, strokeColor, opacity, lineWidth);

        const labelPos = this._getLabelPosition(pixels);
        if (labelPos) {
          this._drawLabel(ctx, formatPatternLabel(pattern), labelPos, theme);
        }
        ctx.restore();
      }
    });
  }

  private _drawFilledRegion(
    ctx: CanvasRenderingContext2D,
    pixels: Array<{ x: number; y: number }>,
    color: string,
    opacity: number,
  ): void {
    let minY = Infinity;
    let maxY = -Infinity;
    for (const p of pixels) {
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }

    const gradient = ctx.createLinearGradient(0, minY, 0, maxY);
    gradient.addColorStop(0, hexToRgba(color, opacity));
    gradient.addColorStop(1, hexToRgba(color, opacity * 0.3));

    ctx.beginPath();
    ctx.moveTo(pixels[0].x, pixels[0].y);
    for (let i = 1; i < pixels.length; i++) {
      ctx.lineTo(pixels[i].x, pixels[i].y);
    }
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  private _drawDashedOutline(
    ctx: CanvasRenderingContext2D,
    pixels: Array<{ x: number; y: number }>,
    color: string,
    opacity: number,
    lineWidth = 1,
  ): void {
    ctx.beginPath();
    ctx.moveTo(pixels[0].x, pixels[0].y);
    for (let i = 1; i < pixels.length; i++) {
      ctx.lineTo(pixels[i].x, pixels[i].y);
    }
    ctx.closePath();
    ctx.setLineDash([4, 3]);
    ctx.strokeStyle = hexToRgba(color, Math.min(opacity + 0.15, 1));
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  private _getLabelPosition(
    pixels: Array<{ x: number; y: number }>,
  ): { x: number; y: number } | null {
    if (pixels.length === 0) return null;
    let top = pixels[0];
    for (const p of pixels) {
      if (p.y < top.y) top = p;
    }
    return { x: top.x, y: top.y - 8 };
  }

  private _drawLabel(
    ctx: CanvasRenderingContext2D,
    text: string,
    pos: { x: number; y: number },
    theme: AIOverlayTheme,
  ): void {
    ctx.font = '11px sans-serif';
    const metrics = ctx.measureText(text);
    const padding = 4;
    const w = metrics.width + padding * 2;
    const h = 16;

    const x = pos.x - w / 2;
    const y = pos.y - h;

    ctx.globalAlpha = 0.85;
    ctx.fillStyle = theme.labelBackground;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 3);
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.fillStyle = theme.labelColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, pos.x, y + h / 2);
  }
}

// ── Pane View ──────────────────────────────────────────────────────

class AIPatternPaneView implements IPrimitivePaneView {
  private _data: RendererData;

  constructor(data: RendererData) {
    this._data = data;
  }

  renderer(): IPrimitivePaneRenderer {
    return new AIPatternRenderer(this._data);
  }
}

// ── Primitive ──────────────────────────────────────────────────────

export class AIPatternPrimitive extends BaseAIPrimitive {
  protected createPaneView(data: RendererData): IPrimitivePaneView {
    return new AIPatternPaneView(data);
  }
}
