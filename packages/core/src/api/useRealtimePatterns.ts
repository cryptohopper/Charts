import { useEffect, useRef } from 'react';
import { getWebSocketClient } from './websocket.js';
import type { ExchangeId } from '../types/exchange.js';
import type { Timeframe } from '../types/ohlcv.js';
import type { DetectedPattern } from '../types/pattern.js';

export function useRealtimePatterns(
  exchangeId: ExchangeId,
  pair: string,
  timeframe: Timeframe,
  onPatterns: (patterns: DetectedPattern[]) => void,
): void {
  const onPatternsRef = useRef(onPatterns);
  onPatternsRef.current = onPatterns;

  useEffect(() => {
    if (!exchangeId || !pair) return;

    const client = getWebSocketClient();
    client.connect();
    client.subscribe(exchangeId, [pair]);

    const offPattern = client.on('pattern', ({ exchange, pair: patternPair, patterns }) => {
      if (exchange === exchangeId && patternPair === pair) {
        const relevant = patterns.filter((p) => p.timeframe === timeframe);
        if (relevant.length > 0) {
          onPatternsRef.current(relevant);
        }
      }
    });

    return () => {
      client.unsubscribe(exchangeId, [pair]);
      offPattern();
    };
  }, [exchangeId, pair, timeframe]);
}
