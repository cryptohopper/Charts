import React from "react";
import ReactDOM from "react-dom/client";
import { HopChart } from "@hopcharts/chart";
import type { HopChartProps } from "@hopcharts/chart";
import widgetStyles from "./widget.css?inline";

// ── Theme CSS vars to inject on document.documentElement ──
// The chart library reads colors via getComputedStyle(document.documentElement),
// so we mirror the active theme vars onto :root for compatibility.
const LIGHT_VARS: Record<string, string> = {
  "--hc-page-bg": "#f8f8ff",
  "--hc-surface": "#ffffff",
  "--hc-chart-bg": "#ffffff",
  "--hc-chart-grid": "#efeff4",
  "--hc-chart-grid-text": "#8e8e93",
  "--hc-chart-crosshair": "#babac1",
  "--hc-border": "#efeff4",
  "--hc-green": "#09977e",
  "--hc-red": "#f26d60",
  "--hc-text": "#1f1f1f",
  "--hc-text-secondary": "#8e8e93",
  "--hc-accent": "#00b1c7",
  "--hc-icon-stroke": "#1F1F1F",
};

const DARK_VARS: Record<string, string> = {
  "--hc-page-bg": "#12181A",
  "--hc-surface": "#1A2426",
  "--hc-chart-bg": "#12181A",
  "--hc-chart-grid": "#26353A",
  "--hc-chart-grid-text": "#94A3B8",
  "--hc-chart-crosshair": "#5A7A85",
  "--hc-border": "#26353A",
  "--hc-green": "#10CD72",
  "--hc-red": "#EF5350",
  "--hc-text": "#F7FCFD",
  "--hc-text-secondary": "#94A3B8",
  "--hc-accent": "#00B2C8",
  "--hc-icon-stroke": "#F7FCFD",
};

/**
 * Inject --hc-* CSS custom properties onto document.documentElement.
 * This is needed because Lightweight Charts + our chart hooks read theme
 * colors via getComputedStyle(document.documentElement).
 * Skips vars that are already defined by the host page.
 */
function applyThemeToDocument(vars: Record<string, string>): void {
  const root = document.documentElement;
  for (const [prop, value] of Object.entries(vars)) {
    root.style.setProperty(prop, value);
  }
}

// ── Custom Element ──────────────────────────────────────────

const OBSERVED_ATTRS = [
  "exchange",
  "pair",
  "timeframe",
  "theme",
  "api-key",
  "show-toolbar",
  "show-ai-overlay",
  "height",
  "width",
] as const;

export class HopChartsElement extends HTMLElement {
  static get observedAttributes(): readonly string[] {
    return OBSERVED_ATTRS;
  }

  private _root: ReactDOM.Root | null = null;
  private _shadow: ShadowRoot;
  private _container: HTMLDivElement;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });

    // Inject processed Tailwind + theme CSS into shadow DOM
    const styleEl = document.createElement("style");
    styleEl.textContent = widgetStyles;
    this._shadow.appendChild(styleEl);

    // React mount point
    this._container = document.createElement("div");
    this._container.style.width = "100%";
    this._container.style.height = "100%";
    this._shadow.appendChild(this._container);
  }

  connectedCallback(): void {
    // Apply theme vars to document.documentElement for chart lib compat
    const isDark = this.getAttribute("theme") === "dark";
    applyThemeToDocument(isDark ? DARK_VARS : LIGHT_VARS);
    if (isDark) {
      this.classList.add("dark");
    }

    // Mount React
    this._root = ReactDOM.createRoot(this._container);
    this._render();

    // Dispatch ready event
    this.dispatchEvent(
      new CustomEvent("hopcharts:ready", { bubbles: true, composed: true }),
    );
  }

  disconnectedCallback(): void {
    this._root?.unmount();
    this._root = null;
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (oldValue === newValue) return;

    if (name === "theme") {
      const isDark = newValue === "dark";
      applyThemeToDocument(isDark ? DARK_VARS : LIGHT_VARS);
      if (isDark) {
        this.classList.add("dark");
      } else {
        this.classList.remove("dark");
      }
    }

    // Re-render with updated props
    this._render();

    // Notify consumers of attribute changes
    this.dispatchEvent(
      new CustomEvent("hopcharts:attributeChange", {
        bubbles: true,
        composed: true,
        detail: { attribute: name, oldValue, newValue },
      }),
    );
  }

  // ── Public API methods ──

  setExchange(exchange: string): void {
    this.setAttribute("exchange", exchange);
  }

  setPair(pair: string): void {
    this.setAttribute("pair", pair);
  }

  setTimeframe(timeframe: string): void {
    this.setAttribute("timeframe", timeframe);
  }

  setTheme(theme: "light" | "dark"): void {
    this.setAttribute("theme", theme);
  }

  // ── Private ──

  private _render(): void {
    if (!this._root) return;

    const props: HopChartProps = {
      width: this.getAttribute("width") ?? "100%",
      height: this.getAttribute("height") ?? "100%",
      initialExchange: this.getAttribute("exchange") ?? undefined,
      initialPair: this.getAttribute("pair") ?? undefined,
      initialTimeframe:
        (this.getAttribute("timeframe") as HopChartProps["initialTimeframe"]) ??
        undefined,
      showToolbar: this.getAttribute("show-toolbar") !== "false",
      showAIOverlay: this.getAttribute("show-ai-overlay") !== "false",
    };

    this._root.render(React.createElement(HopChart, props));
  }
}

// ── Register ──

if (!customElements.get("hop-charts")) {
  customElements.define("hop-charts", HopChartsElement);
}
