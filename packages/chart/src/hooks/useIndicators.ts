import { useEffect, useRef } from 'react';
import {
  LineSeries,
  HistogramSeries,
} from 'lightweight-charts';
import type {
  IChartApi,
  ISeriesApi,
  IPaneApi,
  Time,
  UTCTimestamp,
  DeepPartial,
  LineSeriesOptions,
  HistogramSeriesOptions,
} from 'lightweight-charts';
import type { OHLCV, IndicatorConfig, IndicatorOutput } from '@hopcharts/core';
import {
  sma,
  ema,
  rsi,
  macd,
  bb,
  stoch,
  atr,
  cci,
  obv,
} from 'indicatorts';

// Default indicator colors
const DEFAULT_COLORS: Record<string, string> = {
  sma: '#2196F3',
  ema: '#FF9800',
  rsi: '#E91E63',
  macd: '#9C27B0',
  bb: '#00BCD4',
  stoch: '#4CAF50',
  atr: '#FF5722',
  cci: '#607D8B',
  obv: '#795548',
  adx: '#3F51B5',
};

interface ManagedSeries {
  indicatorType: string;
  series: ISeriesApi<'Line' | 'Histogram'>[];
  paneIndex?: number; // For sub-pane indicators
}

function calculateIndicator(
  type: string,
  data: OHLCV[],
  params: Record<string, number>,
  color?: string,
): IndicatorOutput | null {
  const times = data.map((d) => d.timestamp);
  const resolvedColor = color || DEFAULT_COLORS[type] || '#2196F3';

  // Lazy helpers — only allocate arrays that the requested indicator needs
  const closes = () => data.map((d) => d.close);
  const highs = () => data.map((d) => d.high);
  const lows = () => data.map((d) => d.low);
  const volumes = () => data.map((d) => d.volume);

  switch (type) {
    case 'sma': {
      const values = sma(closes(), { period: params.period ?? 20 });
      return {
        type,
        lines: [{
          name: `SMA(${params.period ?? 20})`,
          data: values.map((v, i) => ({ time: times[i], value: v })),
          color: resolvedColor,
          seriesType: 'line',
        }],
      };
    }
    case 'ema': {
      const values = ema(closes(), { period: params.period ?? 20 });
      return {
        type,
        lines: [{
          name: `EMA(${params.period ?? 20})`,
          data: values.map((v, i) => ({ time: times[i], value: v })),
          color: resolvedColor,
          seriesType: 'line',
        }],
      };
    }
    case 'rsi': {
      const values = rsi(closes(), { period: params.period ?? 14 });
      return {
        type,
        lines: [{
          name: `RSI(${params.period ?? 14})`,
          data: values.map((v, i) => ({ time: times[i], value: v })),
          color: resolvedColor,
          seriesType: 'line',
        }],
      };
    }
    case 'macd': {
      const result = macd(closes(), {
        fast: params.fast ?? 12,
        slow: params.slow ?? 26,
        signal: params.signal ?? 9,
      });
      // Compute histogram: MACD line - Signal line
      const histogram = result.macdLine.map((v, i) => v - result.signalLine[i]);
      return {
        type,
        lines: [
          {
            name: 'MACD',
            data: result.macdLine.map((v, i) => ({ time: times[i], value: v })),
            color: '#2196F3',
            seriesType: 'line',
          },
          {
            name: 'Signal',
            data: result.signalLine.map((v, i) => ({ time: times[i], value: v })),
            color: '#FF9800',
            seriesType: 'line',
          },
          {
            name: 'Histogram',
            data: histogram.map((v, i) => ({ time: times[i], value: v })),
            color: '#26A69A',
            seriesType: 'histogram',
          },
        ],
      };
    }
    case 'bb': {
      const result = bb(closes(), { period: params.period ?? 20 });
      return {
        type,
        lines: [
          {
            name: 'BB Upper',
            data: result.upper.map((v, i) => ({ time: times[i], value: v })),
            color: resolvedColor,
            seriesType: 'line',
          },
          {
            name: 'BB Middle',
            data: result.middle.map((v, i) => ({ time: times[i], value: v })),
            color: resolvedColor,
            seriesType: 'line',
          },
          {
            name: 'BB Lower',
            data: result.lower.map((v, i) => ({ time: times[i], value: v })),
            color: resolvedColor,
            seriesType: 'line',
          },
        ],
      };
    }
    case 'stoch': {
      const result = stoch(highs(), lows(), closes(), {
        kPeriod: params.kPeriod ?? 14,
        dPeriod: params.dPeriod ?? 3,
      });
      return {
        type,
        lines: [
          {
            name: '%K',
            data: result.k.map((v, i) => ({ time: times[i], value: v })),
            color: '#2196F3',
            seriesType: 'line',
          },
          {
            name: '%D',
            data: result.d.map((v, i) => ({ time: times[i], value: v })),
            color: '#FF9800',
            seriesType: 'line',
          },
        ],
      };
    }
    case 'atr': {
      const result = atr(highs(), lows(), closes(), { period: params.period ?? 14 });
      return {
        type,
        lines: [{
          name: `ATR(${params.period ?? 14})`,
          data: result.atrLine.map((v, i) => ({ time: times[i], value: v })),
          color: resolvedColor,
          seriesType: 'line',
        }],
      };
    }
    case 'cci': {
      const values = cci(highs(), lows(), closes(), { period: params.period ?? 20 });
      return {
        type,
        lines: [{
          name: `CCI(${params.period ?? 20})`,
          data: values.map((v, i) => ({ time: times[i], value: v })),
          color: resolvedColor,
          seriesType: 'line',
        }],
      };
    }
    case 'obv': {
      const values = obv(closes(), volumes());
      return {
        type,
        lines: [{
          name: 'OBV',
          data: values.map((v, i) => ({ time: times[i], value: v })),
          color: resolvedColor,
          seriesType: 'line',
        }],
      };
    }
    default:
      return null;
  }
}

export function useIndicators(
  chart: IChartApi | null,
  mainSeries: ISeriesApi<'Candlestick'> | null,
  ohlcvData: OHLCV[],
  indicators: IndicatorConfig[],
): void {
  const managedRef = useRef<Map<string, ManagedSeries>>(new Map());
  const chartRef = useRef<IChartApi | null>(null);
  chartRef.current = chart;

  useEffect(() => {
    if (!chart || !mainSeries || ohlcvData.length === 0) return;

    const managed = managedRef.current;
    const activeTypes = new Set(indicators.filter((i) => i.visible).map((i) => i.type));

    // Remove indicators that are no longer active
    for (const [type, entry] of managed) {
      if (!activeTypes.has(type)) {
        for (const s of entry.series) {
          chart.removeSeries(s);
        }
        managed.delete(type);
      }
    }

    // Add or update indicators
    for (const config of indicators) {
      if (!config.visible) continue;

      const output = calculateIndicator(config.type, ohlcvData, config.params, config.color);
      if (!output) continue;

      const existing = managed.get(config.type);

      if (existing) {
        // Update data on existing series
        for (let i = 0; i < output.lines.length; i++) {
          const line = output.lines[i];
          const series = existing.series[i];
          if (series && line) {
            const lineData = line.data
              .filter((d) => d.value !== 0 && isFinite(d.value))
              .map((d) => ({
                time: (d.time / 1000) as UTCTimestamp,
                value: d.value,
              }));
            series.setData(lineData);
          }
        }
      } else {
        // Create new series
        const isSubPane = config.placement === 'sub-pane';
        const newSeries: ISeriesApi<'Line' | 'Histogram'>[] = [];
        let pane: IPaneApi<Time> | null = null;

        // Create a single pane for all lines of this sub-pane indicator
        if (isSubPane) {
          pane = chart.addPane();
        }

        for (const line of output.lines) {
          const lineData = line.data
            .filter((d) => d.value !== 0 && isFinite(d.value))
            .map((d) => ({
              time: (d.time / 1000) as UTCTimestamp,
              value: d.value,
            }));

          if (line.seriesType === 'histogram') {
            const opts: DeepPartial<HistogramSeriesOptions> = {
              color: line.color,
            };
            const s = pane
              ? pane.addSeries(HistogramSeries, opts)
              : chart.addSeries(HistogramSeries, opts);
            s.setData(lineData);
            newSeries.push(s);
          } else {
            const opts: DeepPartial<LineSeriesOptions> = {
              color: line.color,
              lineWidth: 1,
            };
            const s = pane
              ? pane.addSeries(LineSeries, opts)
              : chart.addSeries(LineSeries, opts);
            s.setData(lineData);
            newSeries.push(s);
          }
        }

        managed.set(config.type, {
          indicatorType: config.type,
          series: newSeries,
        });
      }
    }
  }, [chart, mainSeries, ohlcvData, indicators]);

  // Cleanup all on unmount
  useEffect(() => {
    return () => {
      const managed = managedRef.current;
      const c = chartRef.current;
      if (c) {
        for (const [, entry] of managed) {
          for (const s of entry.series) {
            c.removeSeries(s);
          }
        }
      }
      managed.clear();
    };
  }, []);
}
