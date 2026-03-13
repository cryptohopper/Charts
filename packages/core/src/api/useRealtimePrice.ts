import { useEffect, useRef, useState } from 'react';
import { getWebSocketClient } from './websocket.js';
import type { ExchangeId } from '../types/exchange.js';
import type { OHLCV } from '../types/ohlcv.js';

export function useRealtimePrice(
  exchangeId: ExchangeId,
  pair: string,
  onTick: (data: OHLCV) => void,
): { isConnected: boolean; error: string | null } {
  const onTickRef = useRef(onTick);
  onTickRef.current = onTick;

  const client = getWebSocketClient();
  const [isConnected, setIsConnected] = useState(() => client.isConnected);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!exchangeId || !pair) return;
    client.connect();

    const offConnected = client.on('connected', () => {
      setIsConnected(true);
      setError(null);
    });

    const offDisconnected = client.on('disconnected', () => {
      setIsConnected(false);
    });

    const offError = client.on('error', (msg) => {
      setError(msg);
    });

    const offTick = client.on('tick', ({ exchange, pair: tickPair, ohlcv }) => {
      if (exchange === exchangeId && tickPair === pair) {
        onTickRef.current(ohlcv);
      }
    });

    client.subscribe(exchangeId, [pair]);

    return () => {
      client.unsubscribe(exchangeId, [pair]);
      offConnected();
      offDisconnected();
      offError();
      offTick();
    };
  }, [exchangeId, pair, client]);

  return { isConnected, error };
}
