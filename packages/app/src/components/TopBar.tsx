import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useAuth, useChartStore, useAIStore, useUIStore } from "@hopcharts/core";
import { Sparkles } from "lucide-react";
import type { ExchangeId, IndicatorConfig, Timeframe } from "@hopcharts/core";
import { SaveMenu } from "./SaveMenu";
import { ShareMenu } from "./ShareMenu";
import { LoginButton } from "../auth/LoginButton";
import { topBarSvgPaths as svgPaths } from "./topBarSvgPaths";
import {
  CurrencySelector,
  type TradingPair,
} from "./CurrencySelector";
import {
  ExchangeSelector,
  type Exchange,
} from "./ExchangeSelector";
import {
  TimeframeSelector,
  type Timeframe as SelectorTimeframe,
} from "./TimeframeSelector";
import {
  ChartTypeSelector,
  ChartTypeToolbarIcon,
  type ChartType,
} from "./ChartTypeSelector";
import { IndicatorsPanel } from "./IndicatorsPanel";

function Divider() {
  return (
    <div className="flex h-[40px] shrink-0 items-center justify-center px-[4px]">
      <div
        className="h-[24px] w-px rounded-md"
        style={{ backgroundColor: "var(--hc-border)" }}
      />
    </div>
  );
}

function LockedSaveButton({ variant }: { variant: 'desktop' | 'mobile' }) {
  const isDesktop = variant === 'desktop';
  return (
    <button
      className={`flex h-full items-center ${isDesktop ? 'gap-[6px] px-[12px]' : 'shrink-0 gap-[5px] px-[10px]'}`}
      style={{ opacity: 0.5, cursor: 'default' }}
      title="Upgrade to Explorer to save charts"
    >
      <svg width={isDesktop ? 20 : 16} height={isDesktop ? 18 : 14} viewBox="0 0 20 18" fill="none">
        <path d={svgPaths.pddfdb80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.67 8V15.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p7426d70} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={`${isDesktop ? 'text-[14px]' : 'text-[13px]'} font-['Source_Sans_3',sans-serif]`} style={{ color: "var(--hc-text)" }}>
        Save
      </span>
      <svg width={isDesktop ? 12 : 10} height={isDesktop ? 12 : 10} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="var(--hc-text-muted)" strokeWidth="1.5" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="var(--hc-text-muted)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

const EXCHANGES: Record<string, Exchange> = {
  bitpanda: {
    id: "bitpanda",
    name: "Bitpanda",
    color: "#076CDB",
    letterIcon: "B",
    status: "connected",
    pairs: 214,
    type: "cex",
  },
  binance: {
    id: "binance",
    name: "Binance",
    color: "#F0B90B",
    letterIcon: "B",
    status: "available",
    pairs: 1642,
    type: "cex",
  },
  coinbase: {
    id: "coinbase",
    name: "Coinbase Pro",
    color: "#0052FF",
    letterIcon: "C",
    status: "available",
    pairs: 534,
    type: "cex",
  },
  kraken: {
    id: "kraken",
    name: "Kraken",
    color: "#5741D9",
    letterIcon: "K",
    status: "available",
    pairs: 687,
    type: "cex",
  },
  kucoin: {
    id: "kucoin",
    name: "KuCoin",
    color: "#23AF91",
    letterIcon: "K",
    status: "available",
    pairs: 1205,
    type: "cex",
  },
};

const TIMEFRAME_META: Record<string, SelectorTimeframe> = {
  "1m": { id: "1m", label: "1 minute", shortLabel: "1m" },
  "3m": { id: "3m", label: "3 minutes", shortLabel: "3m" },
  "5m": { id: "5m", label: "5 minutes", shortLabel: "5m" },
  "15m": { id: "15m", label: "15 minutes", shortLabel: "15m" },
  "30m": { id: "30m", label: "30 minutes", shortLabel: "30m" },
  "45m": { id: "45m", label: "45 minutes", shortLabel: "45m" },
  "1h": { id: "1h", label: "1 hour", shortLabel: "1H" },
  "2h": { id: "2h", label: "2 hours", shortLabel: "2H" },
  "3h": { id: "3h", label: "3 hours", shortLabel: "3H" },
  "4h": { id: "4h", label: "4 hours", shortLabel: "4H" },
  "1D": { id: "1d", label: "1 day", shortLabel: "D" },
  "1W": { id: "1w", label: "1 week", shortLabel: "W" },
  "1M": { id: "1M", label: "1 month", shortLabel: "M" },
};

const CHART_TYPES: ChartType[] = [
  { id: "candles", label: "Candles", icon: null },
  { id: "hollow", label: "Hollow Candles", icon: null },
  { id: "bar", label: "Bar (OHLC)", icon: null },
  { id: "line", label: "Line", icon: null },
  { id: "area", label: "Area", icon: null },
  { id: "baseline", label: "Baseline", icon: null },
  { id: "heikin", label: "Heikin Ashi", icon: null },
  { id: "renko", label: "Renko", icon: null },
];

const OVERLAY_INDICATORS = new Set(["sma", "ema", "bb"]);
const INDICATOR_DEFAULTS: Record<string, Record<string, number>> = {
  sma: { period: 20 },
  ema: { period: 20 },
  rsi: { period: 14 },
  macd: { fast: 12, slow: 26, signal: 9 },
  bb: { period: 20 },
  stoch: { kPeriod: 14, dPeriod: 3 },
  atr: { period: 14 },
  adx: { period: 14 },
  cci: { period: 20 },
  obv: {},
};

function toStoreTimeframe(id: string): Timeframe {
  if (id === "1d") return "1D";
  if (id === "1w") return "1W";
  return id as Timeframe;
}

function getSelectedExchange(exchangeId: ExchangeId): Exchange {
  return EXCHANGES[exchangeId] ?? EXCHANGES.binance;
}

function getSelectedTimeframe(timeframe: string): SelectorTimeframe {
  return TIMEFRAME_META[timeframe] ?? TIMEFRAME_META["1h"];
}

function getSelectedChartType(chartType: string): ChartType {
  return CHART_TYPES.find((item) => item.id === chartType) ?? CHART_TYPES[0];
}

function createIndicatorConfig(id: string): IndicatorConfig {
  return {
    type: id,
    params: INDICATOR_DEFAULTS[id] ?? { period: 14 },
    visible: true,
    placement: OVERLAY_INDICATORS.has(id) ? "overlay" : "sub-pane",
  };
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await document.documentElement.requestFullscreen();
  } catch {
    // Ignore browser fullscreen failures.
  }
}

export interface TopBarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onExpandChart?: () => void;
}

export function TopBar({ isDark, toggleTheme, onExpandChart }: TopBarProps) {
  const exchangeId = useChartStore((s) => s.exchangeId);
  const pair = useChartStore((s) => s.pair);
  const timeframe = useChartStore((s) => s.timeframe);
  const chartType = useChartStore((s) => s.chartType);
  const indicators = useChartStore((s) => s.indicators);
  const setExchange = useChartStore((s) => s.setExchange);
  const setPair = useChartStore((s) => s.setPair);
  const setTimeframe = useChartStore((s) => s.setTimeframe);
  const setChartType = useChartStore((s) => s.setChartType);
  const addIndicator = useChartStore((s) => s.addIndicator);
  const removeIndicator = useChartStore((s) => s.removeIndicator);
  const showOverlay = useAIStore((s) => s.showOverlay);
  const toggleOverlay = useAIStore((s) => s.toggleOverlay);
  const activeSidePanel = useUIStore((s) => s.activeSidePanel);
  const setSidePanel = useUIStore((s) => s.setSidePanel);
  const { isAuthenticated, login, canAccess } = useAuth();
  const canSaveCharts = canAccess('save_charts');
  const insightsPanelOpen = activeSidePanel === 'ai-insights';

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [indicatorsOpen, setIndicatorsOpen] = useState(false);
  const [exchangeOpen, setExchangeOpen] = useState(false);
  const [timeframeOpen, setTimeframeOpen] = useState(false);
  const [chartTypeOpen, setChartTypeOpen] = useState(false);
  const [saveMenuOpen, setSaveMenuOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!desktopMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(e.target as Node)) {
        setDesktopMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [desktopMenuOpen]);

  const handleSaved = () => {
    setShowSaved(true);
    window.setTimeout(() => setShowSaved(false), 2000);
  };

  const handleSelectPair = (selectedPair: TradingPair) => {
    setPair(selectedPair.symbol);
  };

  const handleToggleIndicator = (id: string) => {
    const isActive = indicators.some((indicator) => indicator.type === id && indicator.visible);
    if (isActive) {
      removeIndicator(id);
      return;
    }
    addIndicator(createIndicatorConfig(id));
  };

  const activeIndicators = useMemo(
    () => indicators.filter((indicator) => indicator.visible).map((indicator) => indicator.type),
    [indicators],
  );

  const selectedExchange = getSelectedExchange(exchangeId);
  const selectedTimeframe = getSelectedTimeframe(timeframe);
  const selectedChartType = getSelectedChartType(chartType);

  const handleExpand = async () => {
    onExpandChart?.();
    await toggleFullscreen();
  };

  return (
    <>
      <div
        className="relative hidden h-[40px] items-center transition-colors duration-200 md:flex"
        style={{ backgroundColor: "var(--hc-surface)" }}
      >
        <div className="flex h-full items-center">
          <div className="relative h-full" ref={desktopMenuRef}>
            <button
              className="flex h-full w-[48px] items-center justify-center"
              style={{ backgroundColor: desktopMenuOpen ? "var(--hc-surface-hover)" : undefined }}
              onMouseEnter={(e) => {
                if (!desktopMenuOpen) e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
              }}
              onMouseLeave={(e) => {
                if (!desktopMenuOpen) e.currentTarget.style.backgroundColor = "";
              }}
              onClick={() => setDesktopMenuOpen((value) => !value)}
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path
                  d="M1 1H15M1 6H15M1 11H15"
                  stroke="var(--hc-text)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <AnimatePresence>
              {desktopMenuOpen ? (
                <motion.div
                  className="absolute left-0 top-[calc(100%+4px)] z-[9999] min-w-[260px] overflow-hidden rounded-[6px]"
                  style={{
                    backgroundColor: "var(--hc-surface)",
                    border: "1px solid var(--hc-border)",
                    boxShadow: "var(--hc-shadow)",
                  }}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="py-[4px]">
                    <DesktopMenuItem
                      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--hc-text)" /><path d="M1 8H15M8 1C6 4 6 12 8 15M8 1C10 4 10 12 8 15" stroke="var(--hc-text)" strokeLinecap="round" /></svg>}
                      label="Language"
                      sublabel="English"
                      onClick={() => setDesktopMenuOpen(false)}
                    />
                    <DesktopMenuItem
                      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--hc-text)" /><path d="M8 5V8.5" stroke="var(--hc-text)" strokeLinecap="round" /><circle cx="8" cy="11" r="0.5" fill="var(--hc-text)" /></svg>}
                      label="Help Center"
                      onClick={() => setDesktopMenuOpen(false)}
                    />
                    <div className="mx-[12px] my-[4px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />
                    <DesktopMenuItem
                      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="var(--hc-text)" /><path d="M5 1V3M11 1V3" stroke="var(--hc-text)" strokeLinecap="round" /><path d="M6 8L5 10H11L10 8" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      label="Download Desktop App"
                      onClick={() => setDesktopMenuOpen(false)}
                    />
                    <DesktopMenuItem
                      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="8" rx="1.5" stroke="var(--hc-text)" /><path d="M5 7.5H11M5 7.5V9.5M11 7.5V9.5" stroke="var(--hc-text)" strokeLinecap="round" /></svg>}
                      label="Keyboard Shortcuts"
                      sublabel="?"
                      onClick={() => setDesktopMenuOpen(false)}
                    />
                    <div className="mx-[12px] my-[4px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />
                    <DesktopMenuItem
                      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L10 6L14 6.5L11 9.5L12 14L8 12L4 14L5 9.5L2 6.5L6 6L8 2Z" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      label="What's New"
                      onClick={() => setDesktopMenuOpen(false)}
                    />
                    <DesktopMenuItem
                      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 13C2 11 4.5 9.5 8 9.5S14 11 14 13" stroke="var(--hc-text)" strokeLinecap="round" /><circle cx="8" cy="5.5" r="3" stroke="var(--hc-text)" /></svg>}
                      label="About Hopcharts"
                      onClick={() => setDesktopMenuOpen(false)}
                    />
                    <DesktopMenuItem
                      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4L8 8L14 4" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" /><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="var(--hc-text)" /></svg>}
                      label="Contact Support"
                      onClick={() => setDesktopMenuOpen(false)}
                    />
                    <DesktopMenuItem
                      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2H12M3 5H13M2 8H14M3 11H13M4 14H12" stroke="var(--hc-text)" strokeLinecap="round" /></svg>}
                      label="Terms & Privacy"
                      onClick={() => setDesktopMenuOpen(false)}
                    />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <Divider />

          <button
            className="flex h-full items-center gap-[8px] rounded-l-md px-[16px]"
            style={{ backgroundColor: exchangeOpen ? "var(--hc-surface-hover)" : undefined }}
            onMouseEnter={(e) => {
              if (!exchangeOpen) e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(e) => {
              if (!exchangeOpen) e.currentTarget.style.backgroundColor = "";
            }}
            onClick={() => setExchangeOpen((value) => !value)}
          >
            <div
              className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: selectedExchange.color }}
            >
              <span className="text-[9px] font-semibold text-white font-['Source_Sans_3',sans-serif]">
                {selectedExchange.letterIcon}
              </span>
            </div>
            <span className="text-[14px] uppercase font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
              {selectedExchange.name}
            </span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              className={`transition-transform ${exchangeOpen ? "rotate-180" : ""}`}
            >
              <path
                d="M0.5 0.5L4 4L7.5 0.5"
                stroke="#8E8E93"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <ExchangeSelector
            isOpen={exchangeOpen}
            onClose={() => setExchangeOpen(false)}
            selectedExchange={selectedExchange.id}
            onSelect={(exchange) => {
              setExchange(exchange.id);
            }}
          />

          <Divider />

          <button
            className="flex h-full items-center gap-[6px] px-[12px]"
            style={{ backgroundColor: currencyOpen ? "var(--hc-surface-hover)" : undefined }}
            onMouseEnter={(e) => {
              if (!currencyOpen) e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(e) => {
              if (!currencyOpen) e.currentTarget.style.backgroundColor = "";
            }}
            onClick={() => setCurrencyOpen((value) => !value)}
          >
            <span
              className="text-[14px] font-semibold uppercase font-['Source_Sans_3',sans-serif]"
              style={{ color: "var(--hc-text)" }}
            >
              {pair}
            </span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              className={`transition-transform ${currencyOpen ? "rotate-180" : ""}`}
            >
              <path
                d="M0.5 0.5L4 4L7.5 0.5"
                stroke="#8E8E93"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <CurrencySelector
            isOpen={currencyOpen}
            onClose={() => setCurrencyOpen(false)}
            onSelect={handleSelectPair}
            selectedSymbol={pair}
          />

          <Divider />

          <div className="relative h-full">
            <button
              className={`flex h-full items-center gap-[6px] px-[12px] ${timeframeOpen ? "bg-[#f8f8ff]" : "hover:bg-gray-50/60"}`}
              onClick={() => setTimeframeOpen((value) => !value)}
            >
              <span className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#1f1f1f]">
                {selectedTimeframe.shortLabel}
              </span>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                className={`transition-transform ${timeframeOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M0.5 0.5L4 4L7.5 0.5"
                  stroke="#8E8E93"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <TimeframeSelector
              isOpen={timeframeOpen}
              onClose={() => setTimeframeOpen(false)}
              selected={selectedTimeframe.id}
              onSelect={(selected) => setTimeframe(toStoreTimeframe(selected.id))}
            />
          </div>

          <Divider />

          <div className="relative h-full">
            <button
              className={`flex h-full w-[56px] items-center justify-center hover:bg-gray-50/60 ${chartTypeOpen ? "bg-[#f8f8ff]" : ""}`}
              onClick={() => setChartTypeOpen((value) => !value)}
            >
              <ChartTypeToolbarIcon chartTypeId={selectedChartType.id} />
            </button>

            <ChartTypeSelector
              isOpen={chartTypeOpen}
              onClose={() => setChartTypeOpen(false)}
              selected={selectedChartType.id}
              onSelect={(selected) => setChartType(selected.id)}
            />
          </div>

          <Divider />

          <button
            className="flex h-full items-center gap-[6px] px-[12px]"
            style={{ backgroundColor: indicatorsOpen ? "var(--hc-surface-hover)" : undefined }}
            onMouseEnter={(e) => {
              if (!indicatorsOpen) e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(e) => {
              if (!indicatorsOpen) e.currentTarget.style.backgroundColor = "";
            }}
            onClick={() => setIndicatorsOpen((value) => !value)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <g transform="translate(7, 5)">
                <path d="M10.5 14.5V5.59" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.5 14.36V0.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.5 14.36V9.41" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
            <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
              Indicators
            </span>
            {activeIndicators.length > 0 ? (
              <span className="ml-[2px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#00b1c7] text-[11px] text-white font-['Source_Sans_3',sans-serif]">
                {activeIndicators.length}
              </span>
            ) : null}
          </button>

          <IndicatorsPanel
            isOpen={indicatorsOpen}
            onClose={() => setIndicatorsOpen(false)}
            activeIndicators={activeIndicators}
            onToggleIndicator={handleToggleIndicator}
          />

          <Divider />

          {/* AI Insights panel toggle */}
          <button
            className="flex h-full items-center gap-[6px] px-[12px]"
            style={{ backgroundColor: insightsPanelOpen ? "var(--hc-surface-hover)" : undefined }}
            onMouseEnter={(e) => {
              if (!insightsPanelOpen) e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(e) => {
              if (!insightsPanelOpen) e.currentTarget.style.backgroundColor = "";
            }}
            onClick={() => setSidePanel(insightsPanelOpen ? null : 'ai-insights')}
          >
            <Sparkles size={16} style={{ color: insightsPanelOpen ? "var(--hc-accent)" : "var(--hc-text)" }} />
            <span
              className="text-[14px] font-['Source_Sans_3',sans-serif]"
              style={{ color: insightsPanelOpen ? "var(--hc-accent)" : "var(--hc-text)" }}
            >
              AI Insights
            </span>
          </button>

          <Divider />
        </div>

        <div className="ml-auto flex h-full items-center">
          <Divider />

          <button
            className="flex h-full w-[36px] items-center justify-center"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g transform="translate(5.5, 5.5)">
                <path d={svgPaths.p2c236e10} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </button>

          <button
            className="flex h-full w-[36px] items-center justify-center"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g transform="translate(5.5, 5.5)">
                <path d={svgPaths.p3325e520} stroke="var(--hc-text-muted)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </button>

          <Divider />

          <div className="relative h-full">
            {canSaveCharts ? (
              <>
                <button
                  className={`flex h-full items-center gap-[6px] px-[12px] hover:bg-gray-50/60 ${saveMenuOpen ? "bg-[#f8f8ff]" : ""}`}
                  onClick={() => setSaveMenuOpen((value) => !value)}
                >
                  <AnimatePresence mode="wait">
                    {showSaved ? (
                      <motion.span
                        key="saved"
                        className="flex items-center gap-[6px]"
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.9 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none">
                          <motion.path
                            d="M15.03 5.5C16.04 5.5 16.54 5.8 17.3 6.56C18.07 7.33 18.5 8.36 18.5 9.44C18.5 10.51 18.07 11.55 17.3 12.31C16.54 13.07 15.49 13.5 14.41 13.5H7.05C5.82 13.5 4.62 13.16 3.59 12.52C2.55 11.88 1.71 10.96 1.17 9.86C0.63 8.77 0.41 7.55 0.53 6.34C0.66 5.13 1.12 3.98 1.87 3.02C2.62 2.06 3.62 1.33 4.77 0.9C5.92 0.48 7.16 0.39 8.36 0.63C9.56 0.88 10.38 1.41 11.01 2C11.63 2.59 11.51 2.5 11.51 2.5"
                            stroke="#00B1C7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          />
                          <motion.path
                            d="M12.77 4.56L8.27 9.44L6.23 7.22"
                            stroke="#00B1C7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.35, delay: 0.35 }}
                          />
                        </svg>
                        <span className="text-[14px] text-[#00b1c7] font-['Source_Sans_3',sans-serif]">Saved</span>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="save"
                        className="flex items-center gap-[6px]"
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.9 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                          <path d={svgPaths.pddfdb80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9.67 8V15.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p7426d70} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
                          Save
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <svg
                    width="7"
                    height="4"
                    viewBox="0 0 7 4"
                    fill="none"
                    className={`transition-transform ${saveMenuOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M0.5 0.5L3.5 3.5L6.5 0.5"
                      stroke="#8E8E93"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <SaveMenu
                  isOpen={saveMenuOpen}
                  onClose={() => setSaveMenuOpen(false)}
                  onSaved={handleSaved}
                />
              </>
            ) : (
              <LockedSaveButton variant="desktop" />
            )}
          </div>

          <Divider />

          <button
            className="flex h-full w-[56px] items-center justify-center"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
            }}
            onClick={handleExpand}
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d={svgPaths.p37c74100} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <Divider />

          <div className="relative h-full">
            <button
              className={`flex h-full w-[56px] items-center justify-center hover:bg-gray-50/60 ${shareOpen ? "bg-[#f8f8ff]" : ""}`}
              onClick={() => setShareOpen((value) => !value)}
            >
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
                <path d={svgPaths.p38f49c00} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p3118900} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 0.5V11.55" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <ShareMenu isOpen={shareOpen} onClose={() => setShareOpen(false)} />
          </div>

          <Divider />

          <button
            className="flex h-full w-[56px] items-center justify-center hover:bg-gray-50/60"
            onClick={toggleTheme}
          >
            {isDark ? (
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r="3.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.5 1V2.5M8.5 14.5V16M1 8.5H2.5M14.5 8.5H16M3.2 3.2L4.26 4.26M12.74 12.74L13.8 13.8M3.2 13.8L4.26 12.74M12.74 4.26L13.8 3.2" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d={svgPaths.pb3a6d80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          <Divider />

          {isAuthenticated ? (
            <div className="flex h-full items-center px-[6px]">
              <LoginButton />
            </div>
          ) : (
            <>
              <button
                className="h-full px-[12px]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                }}
                onClick={() => login(window.location.pathname)}
              >
                <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
                  Log In
                </span>
              </button>
              <div className="pr-[6px]">
                <button
                  className="h-[28px] rounded px-[16px] text-[14px] text-[#00b1c7] font-['Source_Sans_3',sans-serif]"
                  style={{ backgroundColor: "var(--hc-accent-bg)" }}
                  onClick={() => login(window.location.pathname)}
                >
                  Sign Up
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="relative flex h-[48px] items-center transition-colors duration-200 md:hidden"
        style={{ backgroundColor: "var(--hc-surface)" }}
      >
        <button
          className="flex h-full w-[48px] shrink-0 items-center justify-center"
          style={{ borderRight: "1px solid var(--hc-border)" }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M1 1H17M1 7H17M1 13H17" stroke="var(--hc-text)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>

        <button className="flex h-full w-[38px] shrink-0 items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <g transform="translate(5.5, 5.5)">
              <path d={svgPaths.p2c236e10} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </button>

        <div className="h-[24px] w-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

        <button className="flex h-full w-[38px] shrink-0 items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <g transform="translate(5.5, 5.5)">
              <path d={svgPaths.p3325e520} stroke="var(--hc-text-muted)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </button>

        <div className="h-[24px] w-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

        <div className="relative h-full">
          {canSaveCharts ? (
            <>
              <button
                className="flex h-full shrink-0 items-center gap-[5px] px-[10px]"
                style={{ backgroundColor: saveMenuOpen ? "var(--hc-surface-hover)" : undefined }}
                onClick={() => setSaveMenuOpen((value) => !value)}
              >
                <AnimatePresence mode="wait">
                  {showSaved ? (
                    <motion.span
                      key="msaved"
                      className="flex items-center gap-[5px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <svg width="16" height="12" viewBox="0 0 19 14" fill="none">
                        <path d="M12.77 4.56L8.27 9.44L6.23 7.22" stroke="#00B1C7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[13px] text-[#00b1c7] font-['Source_Sans_3',sans-serif]">Saved</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="msave"
                      className="flex items-center gap-[5px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <svg width="16" height="14" viewBox="0 0 20 18" fill="none">
                        <path d={svgPaths.pddfdb80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.67 8V15.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p7426d70} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
                        Save
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
                <svg width="6" height="4" viewBox="0 0 7 4" fill="none" className={`transition-transform ${saveMenuOpen ? "rotate-180" : ""}`}>
                  <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <SaveMenu isOpen={saveMenuOpen} onClose={() => setSaveMenuOpen(false)} onSaved={handleSaved} />
            </>
          ) : (
            <LockedSaveButton variant="mobile" />
          )}
        </div>

        <div className="flex-1" />

        <div className="h-[24px] w-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

        <button
          className="relative flex h-full w-[40px] shrink-0 items-center justify-center"
          onClick={() => setIndicatorsOpen((value) => !value)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <g transform="translate(7, 5)">
              <path d="M10.5 14.5V5.59" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 14.36V0.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 14.36V9.41" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
          {activeIndicators.length > 0 ? (
            <span className="absolute right-[4px] top-[6px] flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#00b1c7] px-[2px] text-[9px] text-white font-['Source_Sans_3',sans-serif]">
              {activeIndicators.length}
            </span>
          ) : null}
        </button>

        <div className="h-[24px] w-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

        <button className="flex h-full w-[42px] shrink-0 items-center justify-center" onClick={handleExpand}>
          <svg width="16" height="16" viewBox="0 0 17 17" fill="none">
            <path d={svgPaths.p37c74100} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="h-[24px] w-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

        <button className="flex h-full w-[42px] shrink-0 items-center justify-center" onClick={toggleTheme}>
          {isDark ? (
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none">
              <circle cx="8.5" cy="8.5" r="3.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.5 1V2.5M8.5 14.5V16M1 8.5H2.5M14.5 8.5H16M3.2 3.2L4.26 4.26M12.74 12.74L13.8 13.8M3.2 13.8L4.26 12.74M12.74 4.26L13.8 3.2" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none">
              <path d={svgPaths.pb3a6d80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-[9990] md:hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed bottom-0 left-0 top-0 z-[9991] flex w-[280px] flex-col md:hidden"
              style={{
                backgroundColor: "var(--hc-surface)",
                borderRight: "1px solid var(--hc-border)",
                boxShadow: "4px 0 24px rgba(0,0,0,0.2)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 300, bounce: 0 }}
            >
              <div className="flex h-[44px] shrink-0 items-center justify-between px-[16px]" style={{ borderBottom: "1px solid var(--hc-border)" }}>
                <span className="text-[15px] font-semibold font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-[28px] w-[28px] items-center justify-center rounded-md"
                  style={{ backgroundColor: "var(--hc-surface-hover)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="var(--hc-text)" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-[6px]">
                <MobileMenuItem
                  icon={
                    <div
                      className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: selectedExchange.color }}
                    >
                      <span className="text-[9px] font-semibold text-white font-['Source_Sans_3',sans-serif]">
                        {selectedExchange.letterIcon}
                      </span>
                    </div>
                  }
                  label={selectedExchange.name}
                  sublabel="Exchange"
                  hasChevron
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.setTimeout(() => setExchangeOpen(true), 200);
                  }}
                />

                <MobileMenuItem
                  icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1L11.5 6.5L17 7.5L13 11.5L14 17L9 14.5L4 17L5 11.5L1 7.5L6.5 6.5L9 1Z" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  label={pair}
                  sublabel="Symbol"
                  hasChevron
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.setTimeout(() => setCurrencyOpen(true), 200);
                  }}
                />

                <MobileMenuItem
                  icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="var(--hc-text)" /><path d="M9 5V9L12 11" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  label={selectedTimeframe.label}
                  sublabel="Timeframe"
                  hasChevron
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.setTimeout(() => setTimeframeOpen(true), 200);
                  }}
                />

                <MobileMenuItem
                  icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="3" height="10" rx="1" stroke="var(--hc-text)" /><rect x="7.5" y="2" width="3" height="14" rx="1" stroke="var(--hc-text)" /><rect x="13" y="6" width="3" height="8" rx="1" stroke="var(--hc-text)" /></svg>}
                  label={selectedChartType.label}
                  sublabel="Chart type"
                  hasChevron
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.setTimeout(() => setChartTypeOpen(true), 200);
                  }}
                />

                <MobileMenuItem
                  icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><g transform="translate(5, 3)"><path d="M12 18V7" stroke="var(--hc-text)" strokeLinecap="round" /><path d="M7 18V1" stroke="var(--hc-text)" strokeLinecap="round" /><path d="M2 18V11" stroke="var(--hc-text)" strokeLinecap="round" /></g></svg>}
                  label="Indicators"
                  badge={activeIndicators.length || undefined}
                  hasChevron
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.setTimeout(() => setIndicatorsOpen(true), 200);
                  }}
                />

                <div className="mx-[16px] my-[6px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />

                <MobileMenuItem
                  icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6 10.5L12 7.5M6 7.5L12 10.5" stroke="var(--hc-text)" strokeLinecap="round" /><circle cx="4" cy="9" r="2" stroke="var(--hc-text)" /><circle cx="14" cy="6" r="2" stroke="var(--hc-text)" /><circle cx="14" cy="12" r="2" stroke="var(--hc-text)" /></svg>}
                  label="Share"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.setTimeout(() => setShareOpen(true), 200);
                  }}
                />

                <div className="mx-[16px] my-[6px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />

                <MobileMenuToggle
                  icon={
                    isDark ? (
                      <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
                        <circle cx="8.5" cy="8.5" r="3.5" stroke="var(--hc-accent)" />
                        <path d="M8.5 1V2.5M8.5 14.5V16M1 8.5H2.5M14.5 8.5H16M3.2 3.2L4.26 4.26M12.74 12.74L13.8 13.8M3.2 13.8L4.26 12.74M12.74 4.26L13.8 3.2" stroke="var(--hc-accent)" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
                        <path d={svgPaths.pb3a6d80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )
                  }
                  label="Dark theme"
                  active={isDark}
                  onToggle={toggleTheme}
                />

                <div className="mx-[16px] my-[6px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />

                {!isAuthenticated ? (
                  <>
                    <MobileMenuItem
                      icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3H14C15 3 16 4 16 5V13C16 14 15 15 14 15H11" stroke="var(--hc-accent)" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 9H16M16 9L13 6M16 9L13 12" stroke="var(--hc-accent)" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      label="Sign in"
                      accent
                      onClick={() => {
                        setMobileMenuOpen(false);
                        login(window.location.pathname);
                      }}
                    />
                    <MobileMenuItem
                      icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7" cy="7" r="3.5" stroke="var(--hc-accent)" /><path d="M2 16C2 13.5 4 12 7 12S12 13.5 12 16" stroke="var(--hc-accent)" strokeLinecap="round" /><path d="M14 6V10M12 8H16" stroke="var(--hc-accent)" strokeLinecap="round" /></svg>}
                      label="Join now"
                      accent
                      onClick={() => {
                        setMobileMenuOpen(false);
                        login(window.location.pathname);
                      }}
                    />
                  </>
                ) : (
                  <div className="px-[16px] py-[8px]">
                    <LoginButton />
                  </div>
                )}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <div className="md:hidden">
        <ExchangeSelector
          isOpen={exchangeOpen}
          onClose={() => setExchangeOpen(false)}
          selectedExchange={selectedExchange.id}
          onSelect={(exchange) => setExchange(exchange.id)}
        />
        <CurrencySelector
          isOpen={currencyOpen}
          onClose={() => setCurrencyOpen(false)}
          onSelect={handleSelectPair}
          selectedSymbol={pair}
        />
        <TimeframeSelector
          isOpen={timeframeOpen}
          onClose={() => setTimeframeOpen(false)}
          selected={selectedTimeframe.id}
          onSelect={(selected) => setTimeframe(toStoreTimeframe(selected.id))}
        />
        <ChartTypeSelector
          isOpen={chartTypeOpen}
          onClose={() => setChartTypeOpen(false)}
          selected={selectedChartType.id}
          onSelect={(selected) => setChartType(selected.id)}
        />
        <ShareMenu isOpen={shareOpen} onClose={() => setShareOpen(false)} />
      </div>
    </>
  );
}

function MobileMenuItem({
  icon,
  label,
  sublabel,
  badge,
  onClick,
  hasChevron,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  badge?: number;
  onClick?: () => void;
  hasChevron?: boolean;
  accent?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-[12px] px-[16px] py-[11px] transition-colors active:scale-[0.98]"
    >
      <div className="flex w-[22px] shrink-0 items-center justify-center">{icon}</div>
      <div className="flex min-w-0 flex-1 flex-col items-start">
        <span
          className="w-full truncate text-left text-[14px] font-['Source_Sans_3',sans-serif]"
          style={{ color: accent ? "var(--hc-accent)" : "var(--hc-text)" }}
        >
          {label}
        </span>
        {sublabel ? (
          <span className="text-[11px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
            {sublabel}
          </span>
        ) : null}
      </div>
      {badge && badge > 0 ? (
        <span className="flex h-[18px] min-w-[18px] shrink-0 items-center justify-center rounded-full bg-[#00b1c7] px-[3px] text-[10px] text-white font-['Source_Sans_3',sans-serif]">
          {badge}
        </span>
      ) : null}
      {hasChevron ? (
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="shrink-0">
          <path d="M1 1L5 5L1 9" stroke="var(--hc-text-muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </button>
  );
}

function MobileMenuToggle({
  icon,
  label,
  active,
  onToggle,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center gap-[12px] px-[16px] py-[11px] transition-colors"
    >
      <div className="flex w-[22px] shrink-0 items-center justify-center">{icon}</div>
      <span className="flex-1 text-left text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
        {label}
      </span>
      <div
        className="relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors"
        style={{ backgroundColor: active ? "var(--hc-accent)" : "var(--hc-border)" }}
      >
        <div
          className="absolute top-[2px] h-[18px] w-[18px] rounded-full bg-white transition-all"
          style={{
            left: active ? 18 : 2,
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </button>
  );
}

function DesktopMenuItem({
  icon,
  label,
  sublabel,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-[10px] px-[16px] py-[9px] transition-colors"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "";
      }}
    >
      <div className="flex w-[18px] shrink-0 items-center justify-center opacity-70">{icon}</div>
      <span className="flex-1 text-left text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
        {label}
      </span>
      {sublabel ? (
        <span
          className="shrink-0 rounded px-[6px] py-[1px] text-[12px] font-['Source_Sans_3',sans-serif]"
          style={{ color: "var(--hc-text-muted)", backgroundColor: "var(--hc-kbd-bg)" }}
        >
          {sublabel}
        </span>
      ) : null}
    </button>
  );
}
