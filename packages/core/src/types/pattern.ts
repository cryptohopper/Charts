import type { Timeframe } from './ohlcv.js';

export type PatternType =
  | 'head_and_shoulders' | 'inverse_head_and_shoulders'
  | 'double_top' | 'double_bottom'
  | 'ascending_triangle' | 'descending_triangle' | 'symmetrical_triangle'
  | 'bull_flag' | 'bear_flag'
  | 'rising_wedge' | 'falling_wedge'
  | 'cup_and_handle';

export interface PatternPoint {
  timestamp: number;
  price: number;
}

export interface DetectedPattern {
  id: string;
  type: PatternType;
  confidence: number;       // 0-1
  points: PatternPoint[];   // Key points defining the pattern shape
  region: PatternPoint[];   // Polygon outline for shaded overlay
  projection?: {
    targetPrice: number;
    projectedPoints: PatternPoint[];  // Bezier curve path
  };
  detectedAt: number;       // Timestamp when AI detected this
  timeframe: Timeframe;
}
