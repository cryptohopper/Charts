import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useChartStore } from "@hopcharts/core";
import { applyUrlParamsToStore } from "./applyUrlParamsToStore";

/**
 * Two-way sync between URL search params and chartStore.
 * URL format: /?exchange=binance&pair=BTC/USDT&tf=1h
 */
export function useUrlStateSync() {
  const [searchParams, setSearchParams] = useSearchParams();
  const exchangeId = useChartStore((s) => s.exchangeId);
  const pair = useChartStore((s) => s.pair);
  const timeframe = useChartStore((s) => s.timeframe);
  const initialized = useRef(false);

  // On mount: read URL params and apply to store (URL wins)
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    applyUrlParamsToStore(searchParams);
  }, [searchParams]);

  // On store change: update URL params (store -> URL)
  useEffect(() => {
    if (!initialized.current) return;

    const current = new URLSearchParams(window.location.search);
    if (
      current.get("exchange") === exchangeId &&
      current.get("pair") === pair &&
      current.get("tf") === timeframe
    ) return;

    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("exchange", exchangeId);
        next.set("pair", pair);
        next.set("tf", timeframe);
        return next;
      },
      { replace: true },
    );
  }, [exchangeId, pair, timeframe, setSearchParams]);
}
