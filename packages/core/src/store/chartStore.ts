import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, devtools } from 'zustand/middleware';
import type {
  ExchangeId,
  Timeframe,
  IndicatorConfig,
  ChartState,
} from '../types/index.js';

export interface ChartStore {
  // Current selection
  exchangeId: ExchangeId;
  pair: string;
  timeframe: Timeframe;
  chartType: string;

  // Indicators
  indicators: IndicatorConfig[];
  addIndicator: (config: IndicatorConfig) => void;
  removeIndicator: (type: string) => void;
  updateIndicator: (type: string, params: Partial<IndicatorConfig>) => void;

  // SL/TP
  stopLossPrice: number | null;
  takeProfitPrice: number | null;
  setStopLoss: (price: number | null) => void;
  setTakeProfit: (price: number | null) => void;

  // Actions
  setExchange: (id: ExchangeId) => void;
  setPair: (pair: string) => void;
  setTimeframe: (tf: Timeframe) => void;
  setChartType: (type: string) => void;

  // Serialization
  toChartState: () => ChartState;
  fromChartState: (state: ChartState) => void;
}

export const useChartStore = create<ChartStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        exchangeId: 'binance',
        pair: 'BTC/USDT',
        timeframe: '1h',
        chartType: 'candles',

        indicators: [],
        addIndicator: (config) =>
          set((state) => {
            state.indicators.push(config);
          }),
        removeIndicator: (type) =>
          set((state) => {
            state.indicators = state.indicators.filter((i) => i.type !== type);
          }),
        updateIndicator: (type, params) =>
          set((state) => {
            const indicator = state.indicators.find((i) => i.type === type);
            if (indicator) {
              Object.assign(indicator, params);
            }
          }),

        stopLossPrice: null,
        takeProfitPrice: null,
        setStopLoss: (price) => set({ stopLossPrice: price }),
        setTakeProfit: (price) => set({ takeProfitPrice: price }),

        setExchange: (id) => set({ exchangeId: id }),
        setPair: (pair) => set({ pair }),
        setTimeframe: (tf) => set({ timeframe: tf }),
        setChartType: (type) => set({ chartType: type }),

        toChartState: () => {
          const s = get();
          return {
            exchangeId: s.exchangeId,
            pair: s.pair,
            timeframe: s.timeframe,
            indicators: s.indicators,
            drawings: [], // Drawings live in drawingStore
            slPrice: s.stopLossPrice ?? undefined,
            tpPrice: s.takeProfitPrice ?? undefined,
          };
        },
        fromChartState: (state) =>
          set({
            exchangeId: state.exchangeId,
            pair: state.pair,
            timeframe: state.timeframe,
            indicators: state.indicators,
            stopLossPrice: state.slPrice ?? null,
            takeProfitPrice: state.tpPrice ?? null,
          }),
      })),
      {
        name: 'hopcharts-chart',
        partialize: (state) => ({
          exchangeId: state.exchangeId,
          pair: state.pair,
          timeframe: state.timeframe,
          chartType: state.chartType,
          indicators: state.indicators,
          stopLossPrice: state.stopLossPrice,
          takeProfitPrice: state.takeProfitPrice,
        }),
      },
    ),
    { name: 'ChartStore' },
  ),
);
