import { ColorType, CrosshairMode } from 'lightweight-charts';
import type { ChartOptions, DeepPartial } from 'lightweight-charts';

export interface ChartColors {
  background: string;
  text: string;
  gridLine: string;
  border: string;
  crosshair: string;
  candleUp: string;
  candleDown: string;
}

/**
 * Reads chart colors from CSS custom properties at runtime.
 * Never hardcode hex values — all colors derive from --hc-* tokens.
 */
export function getChartColors(): ChartColors {
  const s = getComputedStyle(document.documentElement);
  return {
    background: s.getPropertyValue('--hc-chart-bg').trim() || '#ffffff',
    text: s.getPropertyValue('--hc-chart-grid-text').trim() || '#8e8e93',
    gridLine: s.getPropertyValue('--hc-chart-grid').trim() || '#efeff4',
    border: s.getPropertyValue('--hc-border').trim() || '#efeff4',
    crosshair: s.getPropertyValue('--hc-chart-crosshair').trim() || '#babac1',
    candleUp: s.getPropertyValue('--hc-green').trim() || '#09977e',
    candleDown: s.getPropertyValue('--hc-red').trim() || '#f26d60',
  };
}

export function getDefaultOptions(): DeepPartial<ChartOptions> {
  const colors = getChartColors();

  return {
    layout: {
      background: { type: ColorType.Solid, color: colors.background },
      textColor: colors.text,
      attributionLogo: false,
    },
    grid: {
      vertLines: { color: colors.gridLine },
      horzLines: { color: colors.gridLine },
    },
    crosshair: {
      mode: CrosshairMode.Normal,
    },
    timeScale: {
      borderColor: colors.border,
      timeVisible: true,
      secondsVisible: false,
    },
    rightPriceScale: {
      borderColor: colors.border,
    },
  };
}
