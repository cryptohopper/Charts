import React, { useEffect, useRef, useMemo, useState } from 'react';
import type { UTCTimestamp } from 'lightweight-charts';
import {
  useChartStore,
  useTradingStore,
  useUIStore,
  useOHLCV,
  useRealtimePrice,
  toLWCCandlestickData,
  toLWCVolumeData,
  timeframeToMs,
} from '@hopcharts/core';
import type { Timeframe, OHLCV } from '@hopcharts/core';
import { Toolbar } from './Toolbar/index.js';
import { TradingPanel } from './Panels/index.js';
import { useChart } from './hooks/useChart.js';
import { useIndicators } from './hooks/useIndicators.js';
import { useDrawings } from './hooks/useDrawings.js';
import { useAIOverlay } from './hooks/useAIOverlay.js';
import { usePriceLines } from './hooks/usePriceLines.js';
import { usePositionOverlay } from './hooks/usePositionOverlay.js';
import { useOrderMarkers } from './hooks/useOrderMarkers.js';
import { getChartColors } from './config/chartOptions.js';
import { logoLight, logoDark } from './config/branding.js';

export interface HopChartProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  initialExchange?: string;
  initialPair?: string;
  initialTimeframe?: Timeframe;
  showToolbar?: boolean;
  showAIOverlay?: boolean;
  showTrading?: boolean;
  readOnly?: boolean;
}

export const HopChart: React.FC<HopChartProps> = ({
  width = '100%',
  height = '100%',
  className,
  initialExchange,
  initialPair,
  initialTimeframe,
  showToolbar = true,
  showAIOverlay = true,
  showTrading = false,
  readOnly = false,
}) => {
  // Apply initial props to store (once on mount)
  useEffect(() => {
    const store = useChartStore.getState();
    if (initialExchange) store.setExchange(initialExchange);
    if (initialPair) store.setPair(initialPair);
    if (initialTimeframe) store.setTimeframe(initialTimeframe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Read current state from stores
  const exchangeId = useChartStore((s) => s.exchangeId);
  const pair = useChartStore((s) => s.pair);
  const timeframe = useChartStore((s) => s.timeframe);
  const indicators = useChartStore((s) => s.indicators);
  const stopLossPrice = useChartStore((s) => s.stopLossPrice);
  const takeProfitPrice = useChartStore((s) => s.takeProfitPrice);

  // 1. Chart lifecycle (returns state values — triggers re-render when ready)
  const { chart, candleSeries, volumeSeries, containerRef, applyTheme } = useChart();

  // Stabilize time range — only recompute when exchange/pair/timeframe changes
  const timeRange = useMemo(() => {
    const now = Date.now();
    const tfMs = timeframeToMs(timeframe);
    return { from: now - 300 * tfMs, to: now };
  }, [exchangeId, pair, timeframe]);

  // 2. Fetch OHLCV data via REST (stable query key)
  const { data: ohlcvData } = useOHLCV(exchangeId, pair, timeframe, timeRange.from, timeRange.to);

  // Track OHLCV in ref for real-time updates
  const ohlcvRef = useRef<OHLCV[]>([]);

  // 3. Set candle + volume data when REST data arrives
  useEffect(() => {
    if (!ohlcvData || !candleSeries || !volumeSeries) return;

    ohlcvRef.current = ohlcvData;
    candleSeries.setData(toLWCCandlestickData(ohlcvData));
    volumeSeries.setData(toLWCVolumeData(ohlcvData));

    chart?.timeScale().fitContent();
  }, [ohlcvData, candleSeries, volumeSeries, chart]);

  // 4. Cache theme colors for tick handler (refreshed on theme change)
  const themeColorsRef = useRef(getChartColors());

  // 5. Real-time WebSocket updates
  const onTickRef = useRef<(data: OHLCV) => void>(() => {});
  onTickRef.current = (tick: OHLCV) => {
    if (!candleSeries || !volumeSeries) return;

    candleSeries.update({
      time: (tick.timestamp / 1000) as UTCTimestamp,
      open: tick.open,
      high: tick.high,
      low: tick.low,
      close: tick.close,
    });

    const colors = themeColorsRef.current;
    volumeSeries.update({
      time: (tick.timestamp / 1000) as UTCTimestamp,
      value: tick.volume,
      color: tick.close >= tick.open
        ? `${colors.candleUp}80`
        : `${colors.candleDown}80`,
    });
  };

  useRealtimePrice(exchangeId, pair, (tick) => {
    onTickRef.current(tick);
  });

  // 6. Theme changes — observe .dark class on <html>
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark'),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      themeColorsRef.current = getChartColors();
      applyTheme();
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, [applyTheme]);

  // 7. Indicators
  useIndicators(
    chart,
    candleSeries,
    ohlcvRef.current.length > 0 ? ohlcvRef.current : (ohlcvData ?? []),
    indicators,
  );

  // 8. Price lines (SL/TP)
  usePriceLines(candleSeries, stopLossPrice, takeProfitPrice);

  // 9. Drawing tools
  useDrawings(
    readOnly ? null : chart,
    readOnly ? null : candleSeries,
    readOnly ? null : containerRef.current,
  );

  // 10. AI overlay
  useAIOverlay(showAIOverlay ? candleSeries : null);

  // 11. Trading overlays
  const positions = useTradingStore((s) => s.positions);
  const orderHistory = useTradingStore((s) => s.orderHistory);
  const showPositionOverlay = useTradingStore((s) => s.showPositionOverlay);
  const showOrderMarkers = useTradingStore((s) => s.showOrderMarkers);
  const activeSidePanel = useUIStore((s) => s.activeSidePanel);

  usePositionOverlay(
    showTrading && showPositionOverlay ? candleSeries : null,
    positions,
  );
  useOrderMarkers(
    showTrading && showOrderMarkers ? candleSeries : null,
    orderHistory,
  );

  return (
    <div
      className={className}
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {showToolbar && (
        <Toolbar timeScale={chart?.timeScale()} />
      )}
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <div
          ref={containerRef}
          style={{ width: '100%', height: '100%' }}
        />
        <a
          href="https://www.cryptohopper.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            display: 'flex',
            alignItems: 'center',
            padding: '6px 14px',
            borderRadius: 9999,
            backgroundColor: 'var(--hc-surface)',
            border: '1px solid var(--hc-border)',
            boxShadow: 'var(--hc-shadow)',
            zIndex: 3,
            textDecoration: 'none',
          }}
        >
          <img
            src={isDark ? logoLight : logoDark}
            alt="Cryptohopper"
            style={{ height: 12, objectFit: 'contain' }}
          />
        </a>
      </div>
      {showTrading && activeSidePanel === 'orders' && (
        <div style={{ height: 220, minHeight: 0 }}>
          <TradingPanel />
        </div>
      )}
    </div>
  );
};
