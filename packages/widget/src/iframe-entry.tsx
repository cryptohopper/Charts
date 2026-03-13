import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { HopChart } from "@hopcharts/chart";
import type { Timeframe } from "@hopcharts/core";
import type { HopChartsConfig, ParentMessage } from "./types.js";
import "./iframe-entry.css";

/** Parse initial config from URL hash: #exchange=binance&pair=BTC/USDT&... */
function parseHash(): HopChartsConfig {
  const hash = window.location.hash.slice(1);
  const params = new URLSearchParams(hash);
  return {
    exchange: params.get("exchange") ?? undefined,
    pair: params.get("pair") ?? undefined,
    timeframe: params.get("timeframe") ?? undefined,
    theme: (params.get("theme") as "light" | "dark") ?? undefined,
    showToolbar: params.has("show-toolbar")
      ? params.get("show-toolbar") !== "false"
      : undefined,
    showAIOverlay: params.has("show-ai-overlay")
      ? params.get("show-ai-overlay") !== "false"
      : undefined,
  };
}

/** Shallow-compare two config objects to avoid no-op updates */
function configChanged(a: HopChartsConfig, b: HopChartsConfig): boolean {
  return (
    a.exchange !== b.exchange ||
    a.pair !== b.pair ||
    a.timeframe !== b.timeframe ||
    a.theme !== b.theme ||
    a.showToolbar !== b.showToolbar ||
    a.showAIOverlay !== b.showAIOverlay
  );
}

function IframeApp() {
  const [config, setConfig] = useState<HopChartsConfig>(parseHash);
  const isReady = useRef(false);

  // Apply theme class to document root
  useEffect(() => {
    if (config.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [config.theme]);

  // Listen for PostMessage commands from parent
  useEffect(() => {
    function onMessage(event: MessageEvent<ParentMessage>) {
      const data = event.data;
      if (!data || typeof data.type !== "string") return;

      switch (data.type) {
        case "hopcharts:init":
          setConfig(data.payload);
          break;
        case "hopcharts:update":
          setConfig((prev) => {
            const next = { ...prev, ...data.payload };
            return configChanged(prev, next) ? next : prev;
          });
          break;
      }
    }

    window.addEventListener("message", onMessage);

    // Signal ready to parent
    window.parent.postMessage({ type: "hopcharts:ready" }, "*");
    isReady.current = true;

    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Notify parent of state changes (skip initial mount)
  useEffect(() => {
    if (!isReady.current) return;
    window.parent.postMessage(
      { type: "hopcharts:stateChange", payload: config },
      "*",
    );
  }, [config]);

  return (
    <HopChart
      width="100%"
      height="100%"
      initialExchange={config.exchange}
      initialPair={config.pair}
      initialTimeframe={config.timeframe as Timeframe}
      showToolbar={config.showToolbar ?? true}
      showAIOverlay={config.showAIOverlay ?? true}
    />
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IframeApp />
  </React.StrictMode>,
);
