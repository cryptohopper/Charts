export function formatPrice(price: number, decimals: number): string {
  return price.toFixed(decimals);
}

export function formatVolume(volume: number): string {
  if (volume >= 1_000_000_000) return `${(volume / 1_000_000_000).toFixed(2)}B`;
  if (volume >= 1_000_000) return `${(volume / 1_000_000).toFixed(2)}M`;
  if (volume >= 1_000) return `${(volume / 1_000).toFixed(2)}K`;
  return volume.toFixed(2);
}

export function formatPercentage(value: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

import type { Timeframe } from '../types/ohlcv.js';

export function formatTimestamp(ts: number, timeframe: Timeframe): string {
  const date = new Date(ts);
  switch (timeframe) {
    case '1m':
    case '5m':
    case '15m':
      return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    case '1h':
    case '4h':
      return date.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    case '1D':
    case '1W':
      return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    default:
      return date.toLocaleString();
  }
}
