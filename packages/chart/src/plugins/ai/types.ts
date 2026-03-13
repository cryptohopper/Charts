import type { DetectedPattern, PatternPoint } from '@hopcharts/core';
import { isBullish as _isBullish } from '@hopcharts/core';
import type {
  Time,
  SeriesType,
  IChartApiBase,
  ISeriesApi,
} from 'lightweight-charts';

export interface AIOverlayTheme {
  bullishFill: string;
  bearishFill: string;
  bullishStroke: string;
  bearishStroke: string;
  labelColor: string;
  labelBackground: string;
  projectionColor: string;
}

/**
 * Reads the current theme colors from CSS custom properties.
 * Cached per animation frame — all renderers within one frame share the result,
 * avoiding repeated getComputedStyle calls on the hot path.
 *
 * Light tokens: --hc-green: #09977e, --hc-red: #f26d60
 * Dark tokens:  --hc-green: #10CD72, --hc-red: #EF5350
 */
let _cachedTheme: AIOverlayTheme | null = null;
let _cacheFrameId = -1;

export function getAIOverlayTheme(): AIOverlayTheme {
  const frameId = _currentFrameId();
  if (_cachedTheme && frameId === _cacheFrameId) return _cachedTheme;

  const s = getComputedStyle(document.documentElement);
  const green = s.getPropertyValue('--hc-green').trim() || '#09977e';
  const red = s.getPropertyValue('--hc-red').trim() || '#f26d60';
  const text = s.getPropertyValue('--hc-text').trim() || '#1f1f1f';
  const tooltipBg = s.getPropertyValue('--hc-tooltip-bg').trim() || '#1f1f1f';
  const tooltipText = s.getPropertyValue('--hc-tooltip-text').trim() || '#ffffff';

  _cachedTheme = {
    bullishFill: green,
    bearishFill: red,
    bullishStroke: green,
    bearishStroke: red,
    labelColor: tooltipText,
    labelBackground: tooltipBg,
    projectionColor: text,
  };
  _cacheFrameId = frameId;
  return _cachedTheme;
}

/** Monotonically increasing frame counter — incremented once per rAF cycle. */
let _frameCounter = 0;
let _rafScheduled = false;

function _currentFrameId(): number {
  if (!_rafScheduled && typeof requestAnimationFrame !== 'undefined') {
    _rafScheduled = true;
    requestAnimationFrame(() => {
      _frameCounter++;
      _rafScheduled = false;
    });
  }
  return _frameCounter;
}

/** Opacity range for confidence-based rendering: [min, max] */
export const CONFIDENCE_OPACITY_RANGE: [number, number] = [0.12, 0.45];

/** Very low opacity range for heatmap background layer */
export const HEATMAP_OPACITY_RANGE: [number, number] = [0.03, 0.10];

export const isBullish = _isBullish;

export function formatPatternLabel(pattern: DetectedPattern): string {
  const name = pattern.type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const pct = Math.round(pattern.confidence * 100);
  return `${name} ${pct}%`;
}

/** Linearly interpolate between min and max based on t (0–1) */
export function lerp(min: number, max: number, t: number): number {
  return min + (max - min) * Math.max(0, Math.min(1, t));
}

/** Convert hex color string to rgba with given alpha */
export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/** Shared data passed from primitives to renderers */
export interface RendererData {
  patterns: DetectedPattern[];
  chart: IChartApiBase<Time>;
  series: ISeriesApi<SeriesType, Time>;
  highlightedId: string | null;
}

/** Check if a pattern overlaps the visible time range (UTCTimestamp) */
export function isVisible(
  pattern: DetectedPattern,
  visibleRange: { from: Time; to: Time },
): boolean {
  const from = Number(visibleRange.from);
  const to = Number(visibleRange.to);
  let minT = Infinity;
  let maxT = -Infinity;
  for (const p of pattern.region) {
    if (p.timestamp < minT) minT = p.timestamp;
    if (p.timestamp > maxT) maxT = p.timestamp;
  }
  return maxT >= from && minT <= to;
}

/** Convert PatternPoints to canvas pixel coordinates.
 *  PatternPoint.timestamp is a UNIX epoch in seconds (UTCTimestamp). */
export function toPixels(
  points: PatternPoint[],
  timeScale: ReturnType<IChartApiBase<Time>['timeScale']>,
  series: ISeriesApi<SeriesType, Time>,
): Array<{ x: number; y: number }> {
  const result: Array<{ x: number; y: number }> = [];
  for (const pt of points) {
    const x = timeScale.timeToCoordinate(pt.timestamp as unknown as Time);
    const y = series.priceToCoordinate(pt.price);
    if (x === null || y === null) continue;
    result.push({ x: x as number, y: y as number });
  }
  return result;
}
