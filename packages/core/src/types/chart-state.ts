import type { ExchangeId } from './exchange.js';
import type { Timeframe } from './ohlcv.js';
import type { IndicatorConfig } from './indicator.js';
import type { Drawing } from './drawing.js';

export interface ChartState {
  exchangeId: ExchangeId;
  pair: string;
  timeframe: Timeframe;
  indicators: IndicatorConfig[];
  drawings: Drawing[];           // Serialized drawing tool state
  slPrice?: number;
  tpPrice?: number;
}

export interface UserPreferences {
  theme: 'dark' | 'light';
  favoritesPairs: string[];
  defaultExchange: ExchangeId;
  showAIOverlay: boolean;
  chartLayouts: Record<string, ChartState[]>;  // Named layouts
}
