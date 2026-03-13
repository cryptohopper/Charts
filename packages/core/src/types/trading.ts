import type { ExchangeId } from './exchange.js';

export type TradeSide = 'buy' | 'sell';

export type OrderType = 'market' | 'limit' | 'stop';

export type OrderStatus = 'open' | 'filled' | 'cancelled' | 'partial';

export interface Position {
  id: string;
  exchangeId: ExchangeId;
  pair: string;
  side: TradeSide;
  entryPrice: number;
  amount: number;
  currentPrice: number;
  unrealizedPnl: number;
  openedAt: number; // Unix ms
}

export interface Order {
  id: string;
  exchangeId: ExchangeId;
  pair: string;
  side: TradeSide;
  type: OrderType;
  price: number;
  amount: number;
  filledAmount: number;
  status: OrderStatus;
  createdAt: number; // Unix ms
}

export interface OrderHistoryEntry {
  id: string;
  exchangeId: ExchangeId;
  pair: string;
  side: TradeSide;
  type: OrderType;
  price: number;
  amount: number;
  fee: number;
  filledAt: number; // Unix ms
}
