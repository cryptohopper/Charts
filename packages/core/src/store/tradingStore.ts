import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import type { Position, Order, OrderHistoryEntry } from '../types/trading.js';

export interface TradingStore {
  positions: Position[];
  orders: Order[];
  orderHistory: OrderHistoryEntry[];
  showPositionOverlay: boolean;
  showOrderMarkers: boolean;

  setPositions: (positions: Position[]) => void;
  setOrders: (orders: Order[]) => void;
  setOrderHistory: (history: OrderHistoryEntry[]) => void;
  togglePositionOverlay: () => void;
  toggleOrderMarkers: () => void;
}

function positionsEqual(a: Position[], b: Position[]): boolean {
  if (a.length !== b.length) return false;
  const map = new Map(a.map((p) => [p.id, p]));
  return b.every((p) => {
    const prev = map.get(p.id);
    return prev !== undefined && prev.unrealizedPnl === p.unrealizedPnl;
  });
}

function ordersEqual(a: Order[], b: Order[]): boolean {
  if (a.length !== b.length) return false;
  const map = new Map(a.map((o) => [o.id, o]));
  return b.every((o) => {
    const prev = map.get(o.id);
    return prev !== undefined && prev.status === o.status && prev.filledAmount === o.filledAmount;
  });
}

function historyEqual(a: OrderHistoryEntry[], b: OrderHistoryEntry[]): boolean {
  if (a.length !== b.length) return false;
  const ids = new Set(a.map((h) => h.id));
  return b.every((h) => ids.has(h.id));
}

export const useTradingStore = create<TradingStore>()(
  devtools(
    immer((set, get) => ({
      positions: [],
      orders: [],
      orderHistory: [],
      showPositionOverlay: true,
      showOrderMarkers: true,

      setPositions: (positions) => {
        if (positionsEqual(get().positions, positions)) return;
        set({ positions });
      },
      setOrders: (orders) => {
        if (ordersEqual(get().orders, orders)) return;
        set({ orders });
      },
      setOrderHistory: (history) => {
        if (historyEqual(get().orderHistory, history)) return;
        set({ orderHistory: history });
      },
      togglePositionOverlay: () =>
        set((state) => {
          state.showPositionOverlay = !state.showPositionOverlay;
        }),
      toggleOrderMarkers: () =>
        set((state) => {
          state.showOrderMarkers = !state.showOrderMarkers;
        }),
    })),
    { name: 'TradingStore' },
  ),
);
