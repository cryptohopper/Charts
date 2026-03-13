import { useEffect, useRef } from 'react';
import type { ISeriesApi, SeriesMarker, UTCTimestamp, Time } from 'lightweight-charts';
import { createSeriesMarkers } from 'lightweight-charts';
import type { ISeriesMarkersPluginApi } from 'lightweight-charts';
import type { OrderHistoryEntry } from '@hopcharts/core';
import { useThemeColorsRef } from './useThemeColorsRef.js';

/**
 * Renders completed trades as LWC series markers on the candlestick chart.
 * Buys = up-arrow (green), Sells = down-arrow (red).
 */
export function useOrderMarkers(
  series: ISeriesApi<'Candlestick'> | null,
  orderHistory: OrderHistoryEntry[],
): void {
  const markersRef = useRef<ISeriesMarkersPluginApi<Time> | null>(null);
  const colorsRef = useThemeColorsRef();

  // Plugin lifecycle — only recreate when series changes
  useEffect(() => {
    if (!series) return;

    markersRef.current = createSeriesMarkers(series);

    return () => {
      if (markersRef.current) {
        markersRef.current.detach();
        markersRef.current = null;
      }
    };
  }, [series]);

  // Marker data — update in place without destroying the plugin
  useEffect(() => {
    const markersApi = markersRef.current;
    if (!markersApi) return;

    if (orderHistory.length === 0) {
      markersApi.setMarkers([]);
      return;
    }

    const colors = colorsRef.current;

    // LWC requires markers sorted by time ascending
    const sorted = [...orderHistory].sort((a, b) => a.filledAt - b.filledAt);

    const markers: SeriesMarker<Time>[] = sorted.map((entry) => ({
      time: (entry.filledAt / 1000) as UTCTimestamp,
      position: entry.side === 'buy' ? 'belowBar' : 'aboveBar',
      color: entry.side === 'buy' ? colors.candleUp : colors.candleDown,
      shape: entry.side === 'buy' ? 'arrowUp' : 'arrowDown',
      text: `${entry.side.toUpperCase()} ${entry.amount} @ ${entry.price}`,
    }));

    markersApi.setMarkers(markers);
  }, [series, orderHistory, colorsRef]);
}
