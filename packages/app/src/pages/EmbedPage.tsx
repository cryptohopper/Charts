import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { HopChart } from "@hopcharts/chart";
import { applyUrlParamsToStore } from "../hooks/applyUrlParamsToStore";

/**
 * Minimal chart view for iframe embeds.
 * URL: /embed?exchange=binance&pair=BTC/USDT&tf=1h
 */
export function EmbedPage() {
  const [searchParams] = useSearchParams();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    applyUrlParamsToStore(searchParams);
  }, [searchParams]);

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: "var(--hc-chart-bg)" }}>
      <HopChart
        className="h-full w-full"
        showToolbar={false}
        readOnly
      />
    </div>
  );
}
