import { useEffect, useRef } from 'react';
import type { ISeriesApi, IPriceLine } from 'lightweight-charts';
import { LineStyle } from 'lightweight-charts';
import type { Position } from '@hopcharts/core';
import { useThemeColorsRef } from './useThemeColorsRef.js';

/**
 * Renders position entry prices as LWC price lines with P&L in the title.
 * Each open position gets a dashed line at its entry price.
 */
export function usePositionOverlay(
  series: ISeriesApi<'Candlestick'> | null,
  positions: Position[],
): void {
  const linesRef = useRef<Map<string, IPriceLine>>(new Map());
  const seriesRef = useRef(series);
  seriesRef.current = series;
  const colorsRef = useThemeColorsRef();

  // Sync position price lines (differential — only adds/removes/updates what changed)
  useEffect(() => {
    if (!series) return;

    const colors = colorsRef.current;
    const currentIds = new Set(positions.map((p) => p.id));
    const existing = linesRef.current;

    // Remove lines for closed positions
    for (const [id, line] of existing) {
      if (!currentIds.has(id)) {
        try { series.removePriceLine(line); } catch { /* series may be destroyed */ }
        existing.delete(id);
      }
    }

    // Create or update lines for open positions
    for (const pos of positions) {
      const pnlSign = pos.unrealizedPnl >= 0 ? '+' : '';
      const pnlText = `${pnlSign}${pos.unrealizedPnl.toFixed(2)}`;
      const title = `${pos.side.toUpperCase()} ${pos.amount} @ ${pos.entryPrice} (${pnlText})`;
      const color = pos.unrealizedPnl >= 0 ? colors.candleUp : colors.candleDown;

      const existingLine = existing.get(pos.id);
      if (existingLine) {
        existingLine.applyOptions({ price: pos.entryPrice, color, title });
      } else {
        const line = series.createPriceLine({
          price: pos.entryPrice,
          color,
          lineWidth: 1,
          lineStyle: LineStyle.Dashed,
          axisLabelVisible: true,
          title,
        });
        existing.set(pos.id, line);
      }
    }
  }, [series, positions, colorsRef]);

  // Cleanup all lines on unmount — uses ref to get current series
  useEffect(() => {
    return () => {
      const existing = linesRef.current;
      const currentSeries = seriesRef.current;
      for (const [, line] of existing) {
        try { currentSeries?.removePriceLine(line); } catch { /* series may be destroyed */ }
      }
      existing.clear();
    };
  }, []);
}
