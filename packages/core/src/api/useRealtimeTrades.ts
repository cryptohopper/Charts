import { useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getWebSocketClient } from './websocket.js';
import { queryKeys } from './hooks.js';
import type { ExchangeId } from '../types/exchange.js';

/**
 * Listens for position_update / order_update WS events and
 * invalidates the relevant React Query caches so panels auto-refresh.
 */
export function useRealtimeTrades(exchangeId: ExchangeId): void {
  const queryClient = useQueryClient();
  const exchangeRef = useRef(exchangeId);
  exchangeRef.current = exchangeId;

  useEffect(() => {
    if (!exchangeId) return;

    const client = getWebSocketClient();
    client.connect();

    const offPosition = client.on('position_update', ({ exchange }) => {
      if (exchange === exchangeRef.current) {
        queryClient.invalidateQueries({ queryKey: queryKeys.positions(exchange) });
      }
    });

    const offOrder = client.on('order_update', ({ exchange }) => {
      if (exchange === exchangeRef.current) {
        queryClient.invalidateQueries({ queryKey: queryKeys.orders(exchange) });
      }
    });

    return () => {
      offPosition();
      offOrder();
    };
  }, [exchangeId, queryClient]);
}
