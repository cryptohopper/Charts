import { useEffect, useRef, useState, useCallback } from 'react';
import {
  createChart,
  CandlestickSeries,
  HistogramSeries,
} from 'lightweight-charts';
import type {
  IChartApi,
  ISeriesApi,
} from 'lightweight-charts';
import { getDefaultOptions } from '../config/chartOptions.js';
import { getCandlestickOptions, getVolumeOptions } from '../config/seriesOptions.js';

export interface UseChartReturn {
  chart: IChartApi | null;
  candleSeries: ISeriesApi<'Candlestick'> | null;
  volumeSeries: ISeriesApi<'Histogram'> | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
  applyTheme: () => void;
}

export function useChart(): UseChartReturn {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [chart, setChart] = useState<IChartApi | null>(null);
  const [candleSeries, setCandleSeries] = useState<ISeriesApi<'Candlestick'> | null>(null);
  const [volumeSeries, setVolumeSeries] = useState<ISeriesApi<'Histogram'> | null>(null);

  // Keep refs in sync for imperative access in callbacks
  const chartRef = useRef<IChartApi | null>(null);
  const candleSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

  const applyTheme = useCallback(() => {
    const c = chartRef.current;
    if (!c) return;
    c.applyOptions(getDefaultOptions());
    candleSeriesRef.current?.applyOptions(getCandlestickOptions());
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const c = createChart(container, {
      ...getDefaultOptions(),
      width: container.clientWidth,
      height: container.clientHeight,
    });
    chartRef.current = c;

    const cs = c.addSeries(CandlestickSeries, getCandlestickOptions());
    candleSeriesRef.current = cs;

    const vs = c.addSeries(HistogramSeries, { ...getVolumeOptions() });
    c.priceScale('volume').applyOptions({
      scaleMargins: { top: 0.8, bottom: 0 },
    });

    // Set state to trigger re-render so downstream hooks get non-null values
    setChart(c);
    setCandleSeries(cs);
    setVolumeSeries(vs);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        c.resize(width, height);
      }
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      c.remove();
      chartRef.current = null;
      candleSeriesRef.current = null;
      setChart(null);
      setCandleSeries(null);
      setVolumeSeries(null);
    };
  }, []);

  return { chart, candleSeries, volumeSeries, containerRef, applyTheme };
}
