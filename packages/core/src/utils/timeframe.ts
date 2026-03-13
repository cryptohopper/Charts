import type { Timeframe } from '../types/ohlcv.js';

const TIMEFRAME_MS: Record<Timeframe, number> = {
  '1m': 60_000,
  '5m': 300_000,
  '15m': 900_000,
  '1h': 3_600_000,
  '4h': 14_400_000,
  '1D': 86_400_000,
  '1W': 604_800_000,
};

const TIMEFRAME_LABELS: Record<Timeframe, string> = {
  '1m': '1 Minute',
  '5m': '5 Minutes',
  '15m': '15 Minutes',
  '1h': '1 Hour',
  '4h': '4 Hours',
  '1D': '1 Day',
  '1W': '1 Week',
};

export function timeframeToMs(tf: Timeframe): number {
  return TIMEFRAME_MS[tf];
}

export function timeframeLabel(tf: Timeframe): string {
  return TIMEFRAME_LABELS[tf];
}
