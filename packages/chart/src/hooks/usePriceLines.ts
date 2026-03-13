import { useEffect, useRef } from 'react';
import type { ISeriesApi, IPriceLine } from 'lightweight-charts';
import { getChartColors } from '../config/chartOptions.js';

function syncPriceLine(
  series: ISeriesApi<'Candlestick'>,
  lineRef: React.RefObject<IPriceLine | null>,
  price: number | null,
  color: string,
  title: string,
): void {
  if (price !== null) {
    if (lineRef.current) {
      lineRef.current.applyOptions({ price, color });
    } else {
      (lineRef as React.MutableRefObject<IPriceLine | null>).current = series.createPriceLine({
        price,
        color,
        lineWidth: 1,
        lineStyle: 2, // Dashed
        axisLabelVisible: true,
        title,
      });
    }
  } else if (lineRef.current) {
    series.removePriceLine(lineRef.current);
    (lineRef as React.MutableRefObject<IPriceLine | null>).current = null;
  }
}

export function usePriceLines(
  series: ISeriesApi<'Candlestick'> | null,
  stopLossPrice: number | null,
  takeProfitPrice: number | null,
): void {
  const slLineRef = useRef<IPriceLine | null>(null);
  const tpLineRef = useRef<IPriceLine | null>(null);
  const colorsRef = useRef(getChartColors());

  // Expose a way for HopChart's theme observer to refresh colors
  // by accepting the cached ref from getChartColors() calls.
  // Colors are refreshed via the dependency on series (which changes on theme if chart is recreated)
  // and explicitly when theme toggles via MutationObserver in HopChart.

  useEffect(() => {
    if (!series) return;

    const colors = getChartColors();
    colorsRef.current = colors;

    syncPriceLine(series, slLineRef, stopLossPrice, colors.candleDown, 'SL');
    syncPriceLine(series, tpLineRef, takeProfitPrice, colors.candleUp, 'TP');

    return () => {
      if (slLineRef.current) {
        series.removePriceLine(slLineRef.current);
        slLineRef.current = null;
      }
      if (tpLineRef.current) {
        series.removePriceLine(tpLineRef.current);
        tpLineRef.current = null;
      }
    };
  }, [series, stopLossPrice, takeProfitPrice]);
}
