import type { CandlestickSeriesOptions, HistogramSeriesOptions, DeepPartial } from 'lightweight-charts';
import { getChartColors } from './chartOptions.js';

export function getCandlestickOptions(): DeepPartial<CandlestickSeriesOptions> {
  const colors = getChartColors();
  return {
    upColor: colors.candleUp,
    downColor: colors.candleDown,
    borderUpColor: colors.candleUp,
    borderDownColor: colors.candleDown,
    wickUpColor: colors.candleUp,
    wickDownColor: colors.candleDown,
  };
}

export function getVolumeOptions(): DeepPartial<HistogramSeriesOptions> {
  return {
    priceFormat: { type: 'volume' },
    priceScaleId: 'volume',
  };
}
