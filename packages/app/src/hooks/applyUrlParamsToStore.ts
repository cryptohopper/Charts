import { useChartStore } from "@hopcharts/core";
import type { Timeframe } from "@hopcharts/core";

const VALID_TIMEFRAMES = new Set<string>(["1m", "5m", "15m", "1h", "4h", "1D", "1W"]);

/**
 * Read exchange/pair/tf from URL search params and apply to chartStore.
 * Returns the store setters for convenience.
 */
export function applyUrlParamsToStore(searchParams: URLSearchParams) {
  const { setExchange, setPair, setTimeframe } = useChartStore.getState();

  const exchange = searchParams.get("exchange");
  const pair = searchParams.get("pair");
  const tf = searchParams.get("tf");

  if (exchange) setExchange(exchange);
  if (pair) setPair(pair);
  if (tf && VALID_TIMEFRAMES.has(tf)) setTimeframe(tf as Timeframe);
}

export { VALID_TIMEFRAMES };
