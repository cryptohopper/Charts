import { apiRequest } from './client.js';
import type { Exchange, ExchangeId } from '../types/exchange.js';
import type { TradingPair } from '../types/pair.js';
import type { OHLCV, Timeframe } from '../types/ohlcv.js';
import type { ChartState } from '../types/chart-state.js';
import type { DetectedPattern } from '../types/pattern.js';

export const chartsApi = {
  getExchanges(): Promise<Exchange[]> {
    return apiRequest<Exchange[]>('/v1/charts/exchanges');
  },

  getPairs(exchangeId: ExchangeId): Promise<TradingPair[]> {
    return apiRequest<TradingPair[]>(`/v1/charts/exchanges/${exchangeId}/pairs`);
  },

  getOHLCV(params: {
    exchangeId: ExchangeId;
    pair: string;
    timeframe: Timeframe;
    from: number;
    to: number;
  }): Promise<OHLCV[]> {
    const qs = new URLSearchParams({
      pair: params.pair,
      timeframe: params.timeframe,
      from: String(params.from),
      to: String(params.to),
    });
    return apiRequest<OHLCV[]>(
      `/v1/charts/exchanges/${params.exchangeId}/ohlcv?${qs}`,
    );
  },

  saveChartState(state: ChartState): Promise<void> {
    return apiRequest<void>('/v1/charts/state', {
      method: 'PUT',
      body: JSON.stringify(state),
    });
  },

  loadChartState(): Promise<ChartState | null> {
    return apiRequest<ChartState | null>('/v1/charts/state');
  },

  getAIPatterns(params: {
    exchangeId: ExchangeId;
    pair: string;
    timeframe: Timeframe;
  }): Promise<DetectedPattern[]> {
    const qs = new URLSearchParams({
      pair: params.pair,
      timeframe: params.timeframe,
    });
    return apiRequest<DetectedPattern[]>(
      `/v1/charts/exchanges/${params.exchangeId}/patterns?${qs}`,
    );
  },
};
