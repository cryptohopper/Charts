import type { Timeframe } from './ohlcv.js';

export type InsightKind = 'pattern' | 'indicator' | 'line';

export interface AIInsight {
  id: string;           // Namespaced: 'pattern:${sourceId}'
  kind: InsightKind;
  sourceId: string;     // Original ID from source data (e.g., DetectedPattern.id)
  name: string;         // Display name: "Head & Shoulders", "RSI (14)"
  confidence: number;   // 0-1
  summary: string;      // Template-generated 1-2 line summary
  educationalContent: string; // Static educational text per type
  detectedAt: number;   // Unix ms
  timeframe: Timeframe;
  projection?: {
    targetPrice: number;
  };
  bullish: boolean;     // Directional bias
}
