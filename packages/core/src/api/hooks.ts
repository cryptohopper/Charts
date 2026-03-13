import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query';
import { chartsApi } from './charts-api.js';
import { tradingApi } from './trading-api.js';
import type { PlaceOrderParams } from './trading-api.js';
import type { ExchangeId } from '../types/exchange.js';
import type { Timeframe } from '../types/ohlcv.js';
import type { ChartState } from '../types/chart-state.js';

export const queryKeys = {
  exchanges: ['exchanges'] as const,
  pairs: (exchangeId: ExchangeId) => ['pairs', exchangeId] as const,
  ohlcv: (exchangeId: ExchangeId, pair: string, timeframe: Timeframe, from: number, to: number) =>
    ['ohlcv', exchangeId, pair, timeframe, from, to] as const,
  aiPatterns: (exchangeId: ExchangeId, pair: string, timeframe: Timeframe) =>
    ['aiPatterns', exchangeId, pair, timeframe] as const,
  chartState: ['chartState'] as const,
  positions: (exchangeId: ExchangeId) => ['positions', exchangeId] as const,
  orders: (exchangeId: ExchangeId) => ['orders', exchangeId] as const,
  orderHistory: (exchangeId: ExchangeId, pair: string, from?: number, to?: number) =>
    ['orderHistory', exchangeId, pair, from, to] as const,
};

export function useExchanges() {
  return useQuery({
    queryKey: queryKeys.exchanges,
    queryFn: () => chartsApi.getExchanges(),
    staleTime: 5 * 60 * 1000, // Exchanges rarely change
  });
}

export function usePairs(exchangeId: ExchangeId) {
  return useQuery({
    queryKey: queryKeys.pairs(exchangeId),
    queryFn: () => chartsApi.getPairs(exchangeId),
    enabled: !!exchangeId,
    staleTime: 60 * 1000,
  });
}

export function useOHLCV(
  exchangeId: ExchangeId,
  pair: string,
  timeframe: Timeframe,
  from: number,
  to: number,
) {
  return useQuery({
    queryKey: queryKeys.ohlcv(exchangeId, pair, timeframe, from, to),
    queryFn: () => chartsApi.getOHLCV({ exchangeId, pair, timeframe, from, to }),
    enabled: !!exchangeId && !!pair,
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
  });
}

export function useAIPatterns(
  exchangeId: ExchangeId,
  pair: string,
  timeframe: Timeframe,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: queryKeys.aiPatterns(exchangeId, pair, timeframe),
    queryFn: () => chartsApi.getAIPatterns({ exchangeId, pair, timeframe }),
    enabled: !!exchangeId && !!pair && options?.enabled !== false,
    staleTime: 30 * 1000, // WS pushes updates; REST is for initial load + fallback
  });
}

export function useSaveChartState() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (state: ChartState) => chartsApi.saveChartState(state),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.chartState });
    },
  });
}

export function useLoadChartState() {
  return useQuery({
    queryKey: queryKeys.chartState,
    queryFn: () => chartsApi.loadChartState(),
  });
}

// --- Trading hooks ---

export function usePositions(exchangeId: ExchangeId) {
  return useQuery({
    queryKey: queryKeys.positions(exchangeId),
    queryFn: () => tradingApi.getPositions(exchangeId),
    enabled: !!exchangeId,
    staleTime: 10 * 1000,
  });
}

export function useOrders(exchangeId: ExchangeId) {
  return useQuery({
    queryKey: queryKeys.orders(exchangeId),
    queryFn: () => tradingApi.getOrders(exchangeId),
    enabled: !!exchangeId,
    staleTime: 10 * 1000,
  });
}

export function useOrderHistory(
  exchangeId: ExchangeId,
  pair: string,
  from?: number,
  to?: number,
) {
  return useQuery({
    queryKey: queryKeys.orderHistory(exchangeId, pair, from, to),
    queryFn: () => tradingApi.getOrderHistory({ exchangeId, pair, from, to }),
    enabled: !!exchangeId && !!pair,
    staleTime: 30 * 1000,
  });
}

export function usePlaceOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: PlaceOrderParams) => tradingApi.placeOrder(params),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.orders(variables.exchangeId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.positions(variables.exchangeId) });
    },
  });
}

export function useCancelOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: { exchangeId: ExchangeId; orderId: string }) =>
      tradingApi.cancelOrder(params.exchangeId, params.orderId),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.orders(variables.exchangeId) });
    },
  });
}
