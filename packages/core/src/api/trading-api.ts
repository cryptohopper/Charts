import { apiRequest } from './client.js';
import type { ExchangeId } from '../types/exchange.js';
import type { Position, Order, OrderHistoryEntry, TradeSide, OrderType } from '../types/trading.js';

export interface PlaceOrderParams {
  exchangeId: ExchangeId;
  pair: string;
  side: TradeSide;
  type: OrderType;
  amount: number;
  price?: number; // required for limit/stop, omitted for market
}

export const tradingApi = {
  getPositions(exchangeId: ExchangeId): Promise<Position[]> {
    const qs = new URLSearchParams({ exchangeId });
    return apiRequest<Position[]>(`/v1/trading/positions?${qs}`);
  },

  getOrders(exchangeId: ExchangeId): Promise<Order[]> {
    const qs = new URLSearchParams({ exchangeId });
    return apiRequest<Order[]>(`/v1/trading/orders?${qs}`);
  },

  getOrderHistory(params: {
    exchangeId: ExchangeId;
    pair: string;
    from?: number;
    to?: number;
  }): Promise<OrderHistoryEntry[]> {
    const qs = new URLSearchParams({
      exchangeId: params.exchangeId,
      pair: params.pair,
    });
    if (params.from !== undefined) qs.set('from', String(params.from));
    if (params.to !== undefined) qs.set('to', String(params.to));
    return apiRequest<OrderHistoryEntry[]>(`/v1/trading/history?${qs}`);
  },

  placeOrder(params: PlaceOrderParams): Promise<Order> {
    return apiRequest<Order>('/v1/trading/orders', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },

  cancelOrder(exchangeId: ExchangeId, orderId: string): Promise<void> {
    return apiRequest<void>(`/v1/trading/orders/${orderId}?exchangeId=${exchangeId}`, {
      method: 'DELETE',
    });
  },
};
