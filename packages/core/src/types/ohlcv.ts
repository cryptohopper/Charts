export type Timeframe = '1m' | '5m' | '15m' | '1h' | '4h' | '1D' | '1W';

export interface OHLCV {
  timestamp: number;  // Unix ms
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
