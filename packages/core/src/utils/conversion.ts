import type { UTCTimestamp, CandlestickData, HistogramData } from 'lightweight-charts';
import type { OHLCV } from '../types/ohlcv.js';

export function toLWCCandlestickData(candles: OHLCV[]): CandlestickData<UTCTimestamp>[] {
  return candles.map((c) => ({
    time: (c.timestamp / 1000) as UTCTimestamp,
    open: c.open,
    high: c.high,
    low: c.low,
    close: c.close,
  }));
}

export function toLWCVolumeData(candles: OHLCV[]): HistogramData<UTCTimestamp>[] {
  return candles.map((c) => ({
    time: (c.timestamp / 1000) as UTCTimestamp,
    value: c.volume,
    color: c.close >= c.open ? 'rgba(38, 166, 154, 0.5)' : 'rgba(239, 83, 80, 0.5)',
  }));
}
