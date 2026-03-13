import type { HopChartsConfig, ParentMessage, ChildMessage } from "./types.js";

export type { HopChartsConfig } from "./types.js";

export interface HopChartsInstance {
  /** Update the chart exchange */
  setExchange(exchange: string): void;
  /** Update the chart pair */
  setPair(pair: string): void;
  /** Update the chart timeframe */
  setTimeframe(timeframe: string): void;
  /** Switch theme */
  setTheme(theme: "light" | "dark"): void;
  /** Bulk-update config */
  update(config: Partial<HopChartsConfig>): void;
  /** Register a callback for when the iframe chart is ready */
  onReady(callback: () => void): void;
  /** Register a callback for state changes inside the chart. Returns unsubscribe function. */
  onStateChange(callback: (state: HopChartsConfig) => void): () => void;
  /** Remove the iframe and clean up listeners */
  destroy(): void;
}

export interface CreateHopChartOptions extends HopChartsConfig {
  /** URL to the iframe entry HTML. Defaults to relative './iframe/index.html' */
  src?: string;
  /** Width of the iframe. Defaults to '100%' */
  width?: string;
  /** Height of the iframe. Defaults to '100%' */
  height?: string;
}

/**
 * Create an embedded HopCharts instance via iframe + PostMessage bridge.
 *
 * @example
 * ```ts
 * const chart = createHopChart(document.getElementById('chart')!, {
 *   exchange: 'binance',
 *   pair: 'BTC/USDT',
 *   timeframe: '1h',
 *   theme: 'dark',
 * });
 * chart.onReady(() => console.log('Chart ready!'));
 * chart.setPair('ETH/USDT');
 * ```
 */
export function createHopChart(
  container: HTMLElement,
  options: CreateHopChartOptions = {},
): HopChartsInstance {
  const { src, width = "100%", height = "100%", ...config } = options;

  // Build iframe URL with config as hash params
  const hashParams = new URLSearchParams();
  if (config.exchange) hashParams.set("exchange", config.exchange);
  if (config.pair) hashParams.set("pair", config.pair);
  if (config.timeframe) hashParams.set("timeframe", config.timeframe);
  if (config.theme) hashParams.set("theme", config.theme);
  if (config.showToolbar !== undefined)
    hashParams.set("show-toolbar", String(config.showToolbar));
  if (config.showAIOverlay !== undefined)
    hashParams.set("show-ai-overlay", String(config.showAIOverlay));

  const baseSrc = src ?? "./iframe/index.html";
  const hash = hashParams.toString();
  const iframeSrc = hash ? `${baseSrc}#${hash}` : baseSrc;

  // Create iframe element
  const iframe = document.createElement("iframe");
  iframe.src = iframeSrc;
  iframe.style.width = width;
  iframe.style.height = height;
  iframe.style.border = "none";
  iframe.setAttribute("allowfullscreen", "");
  container.appendChild(iframe);

  // Callback registries
  let readyCallbacks: Array<() => void> = [];
  let stateCallbacks: Array<(state: HopChartsConfig) => void> = [];
  let isReady = false;

  function postToIframe(message: ParentMessage): void {
    iframe.contentWindow?.postMessage(message, "*");
  }

  function onMessage(event: MessageEvent<ChildMessage>): void {
    // Only accept messages from our iframe
    if (event.source !== iframe.contentWindow) return;

    const data = event.data;
    if (!data || typeof data.type !== "string") return;

    switch (data.type) {
      case "hopcharts:ready":
        isReady = true;
        readyCallbacks.forEach((cb) => cb());
        readyCallbacks = [];
        break;
      case "hopcharts:stateChange":
        stateCallbacks.forEach((cb) => cb(data.payload));
        break;
    }
  }

  window.addEventListener("message", onMessage);

  return {
    setExchange(exchange: string) {
      postToIframe({ type: "hopcharts:update", payload: { exchange } });
    },
    setPair(pair: string) {
      postToIframe({ type: "hopcharts:update", payload: { pair } });
    },
    setTimeframe(timeframe: string) {
      postToIframe({ type: "hopcharts:update", payload: { timeframe } });
    },
    setTheme(theme: "light" | "dark") {
      postToIframe({ type: "hopcharts:update", payload: { theme } });
    },
    update(cfg: Partial<HopChartsConfig>) {
      postToIframe({ type: "hopcharts:update", payload: cfg });
    },
    onReady(callback: () => void) {
      if (isReady) {
        callback();
      } else {
        readyCallbacks.push(callback);
      }
    },
    onStateChange(callback: (state: HopChartsConfig) => void) {
      stateCallbacks.push(callback);
      return () => {
        stateCallbacks = stateCallbacks.filter((cb) => cb !== callback);
      };
    },
    destroy() {
      window.removeEventListener("message", onMessage);
      readyCallbacks = [];
      stateCallbacks = [];
      iframe.remove();
    },
  };
}
