import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  PrimitivePaneViewZOrder,
  Time,
  SeriesType,
  ISeriesApi,
} from 'lightweight-charts';
import type { DetectedPattern } from '@hopcharts/core';
import {
  type RendererData,
  getAIOverlayTheme,
  isBullish,
  isVisible,
  hexToRgba,
  lerp,
  HEATMAP_OPACITY_RANGE,
} from './types.js';
import { BaseAIPrimitive } from './BaseAIPrimitive.js';

// ── Pre-computed centroid data ─────────────────────────────────────

interface PatternCentroid {
  pattern: DetectedPattern;
  avgTimestamp: number;
  avgPrice: number;
  /** Max distance from centroid to any region point, in data space (approx). */
  dataRadius: number;
}

function computeCentroids(patterns: DetectedPattern[]): PatternCentroid[] {
  return patterns.map(pattern => {
    const region = pattern.region;
    let sumT = 0;
    let sumP = 0;
    for (const pt of region) {
      sumT += pt.timestamp;
      sumP += pt.price;
    }
    const avgTimestamp = sumT / region.length;
    const avgPrice = sumP / region.length;

    // Approximate "radius" using max normalized distance
    let maxDist = 0;
    for (const pt of region) {
      const dt = pt.timestamp - avgTimestamp;
      const dp = pt.price - avgPrice;
      // Use price-relative distance so timestamp and price scales are comparable
      const dist = Math.sqrt(dt * dt + dp * dp);
      if (dist > maxDist) maxDist = dist;
    }

    return { pattern, avgTimestamp, avgPrice, dataRadius: maxDist };
  });
}

// ── Renderer ───────────────────────────────────────────────────────

interface HeatmapRendererData extends RendererData {
  centroids: PatternCentroid[];
}

class AIHeatmapRenderer implements IPrimitivePaneRenderer {
  private _data: HeatmapRendererData;

  constructor(data: HeatmapRendererData) {
    this._data = data;
  }

  draw(target: CanvasRenderingTarget2D): void {
    const { centroids, chart, series } = this._data;
    if (centroids.length === 0) return;

    const timeScale = chart.timeScale();
    const theme = getAIOverlayTheme();
    const visibleRange = timeScale.getVisibleRange();
    if (!visibleRange) return;

    const { highlightedId } = this._data;

    target.useMediaCoordinateSpace(({ context: ctx }) => {
      for (const { pattern, avgTimestamp, avgPrice } of centroids) {
        if (!isVisible(pattern, visibleRange)) continue;

        // Convert centroid to pixel space
        const cx = timeScale.timeToCoordinate(avgTimestamp as unknown as Time);
        const cy = series.priceToCoordinate(avgPrice);
        if (cx === null || cy === null) continue;

        // Compute pixel radius from a nearby region point
        let pixelRadius = this._computePixelRadius(
          pattern, avgTimestamp, avgPrice,
          cx as number, cy as number,
          timeScale, series,
        );

        const bullish = isBullish(pattern.type);
        const color = bullish ? theme.bullishFill : theme.bearishFill;
        let opacity = lerp(
          HEATMAP_OPACITY_RANGE[0],
          HEATMAP_OPACITY_RANGE[1],
          pattern.confidence,
        );

        // Highlight state
        if (highlightedId !== null) {
          if (pattern.id === highlightedId) {
            opacity = Math.min(opacity * 2, 0.2);
            pixelRadius *= 1.2;
          } else {
            opacity *= 0.5;
          }
        }

        this._drawRadialGlow(ctx, cx as number, cy as number, pixelRadius, color, opacity);
      }
    });
  }

  private _computePixelRadius(
    pattern: DetectedPattern,
    avgTimestamp: number,
    avgPrice: number,
    cx: number,
    cy: number,
    timeScale: ReturnType<typeof this._data.chart.timeScale>,
    series: ISeriesApi<SeriesType, Time>,
  ): number {
    // Find the farthest region point in pixel space from the centroid
    let maxDist = 0;
    for (const pt of pattern.region) {
      const px = timeScale.timeToCoordinate(pt.timestamp as unknown as Time);
      const py = series.priceToCoordinate(pt.price);
      if (px === null || py === null) continue;
      const dx = (px as number) - cx;
      const dy = (py as number) - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > maxDist) maxDist = dist;
    }
    return Math.max(maxDist * 1.2, 30);
  }

  private _drawRadialGlow(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    radius: number,
    color: string,
    opacity: number,
  ): void {
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    gradient.addColorStop(0, hexToRgba(color, opacity));
    gradient.addColorStop(0.6, hexToRgba(color, opacity * 0.4));
    gradient.addColorStop(1, hexToRgba(color, 0));

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ── Pane View ──────────────────────────────────────────────────────

class AIHeatmapPaneView implements IPrimitivePaneView {
  private _data: HeatmapRendererData;

  constructor(data: HeatmapRendererData) {
    this._data = data;
  }

  zOrder(): PrimitivePaneViewZOrder {
    return 'bottom';
  }

  renderer(): IPrimitivePaneRenderer {
    return new AIHeatmapRenderer(this._data);
  }
}

// ── Primitive ──────────────────────────────────────────────────────

export class AIHeatmapPrimitive extends BaseAIPrimitive {
  private _centroids: PatternCentroid[] = [];

  override updatePatterns(patterns: DetectedPattern[]): void {
    this._centroids = computeCentroids(patterns);
    super.updatePatterns(patterns);
  }

  protected createPaneView(data: RendererData): IPrimitivePaneView {
    return new AIHeatmapPaneView({ ...data, centroids: this._centroids });
  }
}
