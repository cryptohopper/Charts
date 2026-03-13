import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-7shvdqa2zb";
import { AuthModal } from "./auth-modal";
import { SaveMenu } from "./save-menu";
import { ShareMenu } from "./share-menu";
import { IndicatorsPanel } from "./indicators-panel";
import { CurrencySelector, type TradingPair } from "./currency-selector";
import { ExchangeSelector, type Exchange } from "./exchange-selector";
import { TimeframeSelector, type Timeframe } from "./timeframe-selector";
import { ChartTypeSelector, ChartTypeToolbarIcon, type ChartType } from "./chart-type-selector";
import { useTheme } from "./theme-context";

function Divider() {
  return (
    <div className="flex items-center justify-center h-[40px] px-[4px] shrink-0">
      <div className="w-px h-[24px] rounded-md" style={{ backgroundColor: 'var(--hc-border)' }} />
    </div>
  );
}

export interface TopBarProps {
  activeIndicators: string[];
  onToggleIndicator: (id: string) => void;
  onExpandChart?: () => void;
}

export function TopBar({ activeIndicators, onToggleIndicator, onExpandChart }: TopBarProps) {
  const { isDark, toggleTheme } = useTheme();
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState("BTC/USD");
  const [indicatorsOpen, setIndicatorsOpen] = useState(false);
  const [exchangeOpen, setExchangeOpen] = useState(false);
  const [selectedExchange, setSelectedExchange] = useState<Exchange>({
    id: "bitpanda", name: "Bitpanda", color: "#076CDB", letterIcon: "B", status: "connected", pairs: 214, type: "cex",
  });
  const [timeframeOpen, setTimeframeOpen] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>({
    id: "1d", label: "1 day", shortLabel: "D",
  });
  const [chartTypeOpen, setChartTypeOpen] = useState(false);
  const [selectedChartType, setSelectedChartType] = useState<ChartType>({
    id: "candles", label: "Candles", icon: null,
  });
  const [saveMenuOpen, setSaveMenuOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<"login" | "2fa" | "forgot-password" | "forgot-username">("login");
  const [showSaved, setShowSaved] = useState(false);

  // Mobile hamburger state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop hamburger state
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

  const handleSelectPair = (pair: TradingPair) => {
    setSelectedSymbol(pair.symbol);
  };

  const handleSaved = () => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  return (
    <>
    {/* ════════ DESKTOP TOP BAR ════════ */}
    <div className="hidden md:flex h-[40px] items-center relative transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)' }}>
      {/* ===== LEFT SIDE ===== */}
      <div className="flex items-center h-full">
        {/* Hamburger Menu */}
        <div className="relative h-full" ref={desktopMenuRef}>
          <button
            className="flex items-center justify-center w-[48px] h-full"
            style={{ backgroundColor: desktopMenuOpen ? 'var(--hc-surface-hover)' : undefined }}
            onMouseEnter={(e) => !desktopMenuOpen && (e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)')}
            onMouseLeave={(e) => !desktopMenuOpen && (e.currentTarget.style.backgroundColor = '')}
            onClick={() => setDesktopMenuOpen((v) => !v)}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M1 1H15M1 6H15M1 11H15" stroke="var(--hc-text)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </button>

          {/* Desktop hamburger dropdown */}
          <AnimatePresence>
            {desktopMenuOpen && (
              <motion.div
                className="absolute top-[calc(100%+4px)] left-0 z-[9999] rounded-[6px] overflow-hidden min-w-[260px]"
                style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
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
            )}
          </AnimatePresence>
        </div>

        <Divider />

        {/* Exchange */}
        <button
          className="flex items-center gap-[8px] px-[16px] h-full rounded-l-md"
          style={{ backgroundColor: exchangeOpen ? 'var(--hc-surface-hover)' : undefined }}
          onMouseEnter={(e) => !exchangeOpen && (e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)')}
          onMouseLeave={(e) => !exchangeOpen && (e.currentTarget.style.backgroundColor = '')}
          onClick={() => setExchangeOpen((v) => !v)}
        >
          {/* Exchange logo */}
          <div
            className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: selectedExchange.color }}
          >
            <span className="text-white text-[9px] font-['Source_Sans_3',sans-serif] font-semibold">
              {selectedExchange.letterIcon}
            </span>
          </div>
          <span className="text-[14px] font-['Source_Sans_3',sans-serif] uppercase" style={{ color: 'var(--hc-text)' }}>
            {selectedExchange.name}
          </span>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            className={`transition-transform ${exchangeOpen ? "rotate-180" : ""}`}
          >
            <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Exchange selector dropdown */}
        <ExchangeSelector
          isOpen={exchangeOpen}
          onClose={() => setExchangeOpen(false)}
          selectedExchange={selectedExchange.id}
          onSelect={(ex) => setSelectedExchange(ex)}
        />

        <Divider />

        {/* Symbol */}
        <button
          className="flex items-center gap-[6px] px-[12px] h-full"
          style={{ backgroundColor: currencyOpen ? 'var(--hc-surface-hover)' : undefined }}
          onMouseEnter={(e) => !currencyOpen && (e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)')}
          onMouseLeave={(e) => !currencyOpen && (e.currentTarget.style.backgroundColor = '')}
          onClick={() => setCurrencyOpen((v) => !v)}
        >
          <span className="text-[14px] font-['Source_Sans_3',sans-serif] font-semibold uppercase" style={{ color: 'var(--hc-text)' }}>
            {selectedSymbol}
          </span>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            className={`transition-transform ${currencyOpen ? "rotate-180" : ""}`}
          >
            <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Currency selector dropdown */}
        <CurrencySelector
          isOpen={currencyOpen}
          onClose={() => setCurrencyOpen(false)}
          onSelect={handleSelectPair}
          selectedSymbol={selectedSymbol}
        />

        <Divider />

        {/* Timeframe */}
        <div className="relative h-full">
          <button
            className={`flex items-center gap-[6px] px-[12px] h-full hover:bg-gray-50/60 ${timeframeOpen ? "bg-[#f8f8ff]" : ""}`}
            onClick={() => setTimeframeOpen((v) => !v)}
          >
            <span className="text-[14px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">
              {selectedTimeframe.shortLabel}
            </span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              className={`transition-transform ${timeframeOpen ? "rotate-180" : ""}`}
            >
              <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Timeframe selector dropdown */}
          <TimeframeSelector
            isOpen={timeframeOpen}
            onClose={() => setTimeframeOpen(false)}
            selected={selectedTimeframe.id}
            onSelect={(tf) => setSelectedTimeframe(tf)}
          />
        </div>

        <Divider />

        {/* Candle type */}
        <div className="relative h-full">
          <button
            className={`flex items-center justify-center w-[56px] h-full hover:bg-gray-50/60 ${chartTypeOpen ? "bg-[#f8f8ff]" : ""}`}
            onClick={() => setChartTypeOpen((v) => !v)}
          >
            <ChartTypeToolbarIcon chartTypeId={selectedChartType.id} />
          </button>

          {/* Chart type selector dropdown */}
          <ChartTypeSelector
            isOpen={chartTypeOpen}
            onClose={() => setChartTypeOpen(false)}
            selected={selectedChartType.id}
            onSelect={(ct) => setSelectedChartType(ct)}
          />
        </div>

        <Divider />

        {/* Indicators */}
        <button
          className="flex items-center gap-[6px] px-[12px] h-full"
          style={{ backgroundColor: indicatorsOpen ? 'var(--hc-surface-hover)' : undefined }}
          onMouseEnter={(e) => !indicatorsOpen && (e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)')}
          onMouseLeave={(e) => !indicatorsOpen && (e.currentTarget.style.backgroundColor = '')}
          onClick={() => setIndicatorsOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <g transform="translate(7, 5)">
              <path d="M10.5 14.5V5.59" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 14.36V0.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 14.36V9.41" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
          <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>
            Indicators
          </span>
          {activeIndicators.length > 0 && (
            <span className="ml-[2px] w-[18px] h-[18px] rounded-full bg-[#00b1c7] text-white text-[11px] font-['Source_Sans_3',sans-serif] flex items-center justify-center">
              {activeIndicators.length}
            </span>
          )}
        </button>

        {/* Indicators panel dropdown */}
        <IndicatorsPanel
          isOpen={indicatorsOpen}
          onClose={() => setIndicatorsOpen(false)}
          activeIndicators={activeIndicators}
          onToggleIndicator={onToggleIndicator}
        />

        <Divider />
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div className="ml-auto flex items-center h-full">
        <Divider />

        {/* Undo */}
        <button className="flex items-center justify-center w-[36px] h-full" style={{ }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g transform="translate(5.5, 5.5)">
              <path d={svgPaths.p2c236e10} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </button>
        {/* Redo */}
        <button className="flex items-center justify-center w-[36px] h-full" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g transform="translate(5.5, 5.5)">
              <path d={svgPaths.p3325e520} stroke="var(--hc-text-muted)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </button>

        <Divider />

        {/* Save */}
        <div className="relative h-full">
          <button
            className={`flex items-center gap-[6px] px-[12px] h-full hover:bg-gray-50/60 ${saveMenuOpen ? "bg-[#f8f8ff]" : ""}`}
            onClick={() => setSaveMenuOpen((v) => !v)}
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
                      stroke="#00B1C7" strokeLinecap="round" strokeLinejoin="round"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                    <motion.path
                      d="M12.77 4.56L8.27 9.44L6.23 7.22"
                      stroke="#00B1C7" strokeLinecap="round" strokeLinejoin="round"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
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
                  <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>Save</span>
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
              <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Save menu dropdown */}
          <SaveMenu
            isOpen={saveMenuOpen}
            onClose={() => setSaveMenuOpen(false)}
            onSaved={handleSaved}
          />
        </div>

        <Divider />

        {/* Fullscreen */}
        <button className="flex items-center justify-center w-[56px] h-full" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} onClick={onExpandChart}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d={svgPaths.p37c74100} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <Divider />

        {/* Share */}
        <div className="relative h-full">
          <button
            className={`flex items-center justify-center w-[56px] h-full hover:bg-gray-50/60 ${shareOpen ? "bg-[#f8f8ff]" : ""}`}
            onClick={() => setShareOpen((v) => !v)}
          >
            <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
              <path d={svgPaths.p38f49c00} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3118900} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 0.5V11.55" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Share menu dropdown */}
          <ShareMenu
            isOpen={shareOpen}
            onClose={() => setShareOpen(false)}
          />
        </div>

        <Divider />

        {/* Dark mode */}
        <button className="flex items-center justify-center w-[56px] h-full hover:bg-gray-50/60" onClick={toggleTheme}>
          {isDark ? (
            /* Sun icon */
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <circle cx="8.5" cy="8.5" r="3.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.5 1V2.5M8.5 14.5V16M1 8.5H2.5M14.5 8.5H16M3.2 3.2L4.26 4.26M12.74 12.74L13.8 13.8M3.2 13.8L4.26 12.74M12.74 4.26L13.8 3.2" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            /* Moon icon */
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d={svgPaths.pb3a6d80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <Divider />

        {/* Log in / Sign up */}
        <button className="px-[12px] h-full" style={{ }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} onClick={() => { setAuthView("login"); setAuthOpen(true); }}>
          <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>Log In</span>
        </button>
        <div className="pr-[6px]">
          <button className="px-[16px] h-[28px] rounded text-[14px] text-[#00b1c7] font-['Source_Sans_3',sans-serif]" style={{ backgroundColor: 'var(--hc-accent-bg)' }} onClick={() => { setAuthView("login"); setAuthOpen(true); }}>
            Sign Up
          </button>
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} initialView={authView} />
    </div>

    {/* ════════ MOBILE TOP BAR ════════ */}
    <div className="flex md:hidden h-[48px] items-center relative transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)' }}>
      {/* Hamburger */}
      <button
        className="flex items-center justify-center w-[48px] h-full shrink-0"
        style={{ borderRight: '1px solid var(--hc-border)' }}
        onClick={() => setMobileMenuOpen(true)}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M1 1H17M1 7H17M1 13H17" stroke="var(--hc-text)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      {/* Undo */}
      <button className="flex items-center justify-center w-[38px] h-full shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <g transform="translate(5.5, 5.5)">
            <path d={svgPaths.p2c236e10} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </button>

      {/* Divider */}
      <div className="w-px h-[24px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Redo */}
      <button className="flex items-center justify-center w-[38px] h-full shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <g transform="translate(5.5, 5.5)">
            <path d={svgPaths.p3325e520} stroke="var(--hc-text-muted)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </button>

      {/* Divider */}
      <div className="w-px h-[24px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Save (compact) */}
      <div className="relative h-full">
        <button
          className="flex items-center gap-[5px] px-[10px] h-full shrink-0"
          style={{ backgroundColor: saveMenuOpen ? 'var(--hc-surface-hover)' : undefined }}
          onClick={() => setSaveMenuOpen((v) => !v)}
        >
          <AnimatePresence mode="wait">
            {showSaved ? (
              <motion.span key="msaved" className="flex items-center gap-[5px]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <svg width="16" height="12" viewBox="0 0 19 14" fill="none">
                  <path d="M12.77 4.56L8.27 9.44L6.23 7.22" stroke="#00B1C7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] text-[#00b1c7] font-['Source_Sans_3',sans-serif]">Saved</span>
              </motion.span>
            ) : (
              <motion.span key="msave" className="flex items-center gap-[5px]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <svg width="16" height="14" viewBox="0 0 20 18" fill="none">
                  <path d={svgPaths.pddfdb80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.67 8V15.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p7426d70} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>Save</span>
              </motion.span>
            )}
          </AnimatePresence>
          <svg width="6" height="4" viewBox="0 0 7 4" fill="none"
            className={`transition-transform ${saveMenuOpen ? "rotate-180" : ""}`}>
            <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <SaveMenu isOpen={saveMenuOpen} onClose={() => setSaveMenuOpen(false)} onSaved={handleSaved} />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Divider */}
      <div className="w-px h-[24px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Indicators (compact) */}
      <button
        className="flex items-center justify-center w-[40px] h-full shrink-0 relative"
        onClick={() => setIndicatorsOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <g transform="translate(7, 5)">
            <path d="M10.5 14.5V5.59" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 14.36V0.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0.5 14.36V9.41" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
        {activeIndicators.length > 0 && (
          <span className="absolute top-[6px] right-[4px] min-w-[14px] h-[14px] rounded-full bg-[#00b1c7] text-white text-[9px] font-['Source_Sans_3',sans-serif] flex items-center justify-center px-[2px]">
            {activeIndicators.length}
          </span>
        )}
      </button>

      {/* Divider */}
      <div className="w-px h-[24px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Fullscreen */}
      <button className="flex items-center justify-center w-[42px] h-full shrink-0" onClick={onExpandChart}>
        <svg width="16" height="16" viewBox="0 0 17 17" fill="none">
          <path d={svgPaths.p37c74100} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Divider */}
      <div className="w-px h-[24px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Dark mode toggle (compact) */}
      <button className="flex items-center justify-center w-[42px] h-full shrink-0" onClick={toggleTheme}>
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

    {/* ════════ MOBILE HAMBURGER DRAWER ════════ */}
    <AnimatePresence>
      {mobileMenuOpen && (
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
            className="fixed top-0 left-0 bottom-0 z-[9991] w-[280px] flex flex-col md:hidden"
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
            {/* Close button */}
            <div className="flex items-center justify-between h-[44px] px-[16px] shrink-0" style={{ borderBottom: "1px solid var(--hc-border)" }}>
              <span className="text-[15px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)", fontWeight: 600 }}>Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="w-[28px] h-[28px] flex items-center justify-center rounded-md" style={{ backgroundColor: "var(--hc-surface-hover)" }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="var(--hc-text)" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-[6px]">
              {/* Exchange */}
              <MobileMenuItem
                icon={
                  <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: selectedExchange.color }}>
                    <span className="text-white text-[9px] font-['Source_Sans_3',sans-serif] font-semibold">{selectedExchange.letterIcon}</span>
                  </div>
                }
                label={selectedExchange.name}
                sublabel="Exchange"
                onClick={() => { setMobileMenuOpen(false); setTimeout(() => setExchangeOpen(true), 200); }}
                hasChevron
              />

              {/* Symbol */}
              <MobileMenuItem
                icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1L11.5 6.5L17 7.5L13 11.5L14 17L9 14.5L4 17L5 11.5L1 7.5L6.5 6.5L9 1Z" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                label={selectedSymbol}
                sublabel="Symbol"
                onClick={() => { setMobileMenuOpen(false); setTimeout(() => setCurrencyOpen(true), 200); }}
                hasChevron
              />

              {/* Timeframe */}
              <MobileMenuItem
                icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="var(--hc-text)" /><path d="M9 5V9L12 11" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                label={selectedTimeframe.label}
                sublabel="Timeframe"
                onClick={() => { setMobileMenuOpen(false); setTimeout(() => setTimeframeOpen(true), 200); }}
                hasChevron
              />

              {/* Chart type */}
              <MobileMenuItem
                icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="3" height="10" rx="1" stroke="var(--hc-text)" /><rect x="7.5" y="2" width="3" height="14" rx="1" stroke="var(--hc-text)" /><rect x="13" y="6" width="3" height="8" rx="1" stroke="var(--hc-text)" /></svg>}
                label={selectedChartType.label}
                sublabel="Chart type"
                onClick={() => { setMobileMenuOpen(false); setTimeout(() => setChartTypeOpen(true), 200); }}
                hasChevron
              />

              {/* Indicators */}
              <MobileMenuItem
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><g transform="translate(5, 3)"><path d="M12 18V7" stroke="var(--hc-text)" strokeLinecap="round" /><path d="M7 18V1" stroke="var(--hc-text)" strokeLinecap="round" /><path d="M2 18V11" stroke="var(--hc-text)" strokeLinecap="round" /></g></svg>}
                label="Indicators"
                badge={activeIndicators.length || undefined}
                onClick={() => { setMobileMenuOpen(false); setTimeout(() => setIndicatorsOpen(true), 200); }}
                hasChevron
              />

              {/* Divider */}
              <div className="mx-[16px] my-[6px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />

              {/* Share */}
              <MobileMenuItem
                icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6 10.5L12 7.5M6 7.5L12 10.5" stroke="var(--hc-text)" strokeLinecap="round" /><circle cx="4" cy="9" r="2" stroke="var(--hc-text)" /><circle cx="14" cy="6" r="2" stroke="var(--hc-text)" /><circle cx="14" cy="12" r="2" stroke="var(--hc-text)" /></svg>}
                label="Share"
                onClick={() => { setMobileMenuOpen(false); setTimeout(() => setShareOpen(true), 200); }}
              />

              {/* Divider */}
              <div className="mx-[16px] my-[6px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />

              {/* Dark theme */}
              <MobileMenuToggle
                icon={isDark ? (
                  <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
                    <circle cx="8.5" cy="8.5" r="3.5" stroke="var(--hc-accent)" />
                    <path d="M8.5 1V2.5M8.5 14.5V16M1 8.5H2.5M14.5 8.5H16M3.2 3.2L4.26 4.26M12.74 12.74L13.8 13.8M3.2 13.8L4.26 12.74M12.74 4.26L13.8 3.2" stroke="var(--hc-accent)" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
                    <path d={svgPaths.pb3a6d80} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                label="Dark theme"
                active={isDark}
                onToggle={toggleTheme}
              />

              {/* Divider */}
              <div className="mx-[16px] my-[6px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />

              {/* Sign in */}
              <MobileMenuItem
                icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3H14C15 3 16 4 16 5V13C16 14 15 15 14 15H11" stroke="var(--hc-accent)" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 9H16M16 9L13 6M16 9L13 12" stroke="var(--hc-accent)" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                label="Sign in"
                accent
                onClick={() => { setMobileMenuOpen(false); setAuthView("login"); setAuthOpen(true); }}
              />
              {/* Join now */}
              <MobileMenuItem
                icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7" cy="7" r="3.5" stroke="var(--hc-accent)" /><path d="M2 16C2 13.5 4 12 7 12S12 13.5 12 16" stroke="var(--hc-accent)" strokeLinecap="round" /><path d="M14 6V10M12 8H16" stroke="var(--hc-accent)" strokeLinecap="round" /></svg>}
                label="Join now"
                accent
                onClick={() => { setMobileMenuOpen(false); setAuthView("login"); setAuthOpen(true); }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    {/* Shared modals */}
    <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} initialView={authView} />

    {/* Mobile-only dropdowns (desktop versions are inside the desktop bar) */}
    <div className="md:hidden">
      <ExchangeSelector isOpen={exchangeOpen} onClose={() => setExchangeOpen(false)} selectedExchange={selectedExchange.id} onSelect={(ex) => setSelectedExchange(ex)} />
      <CurrencySelector isOpen={currencyOpen} onClose={() => setCurrencyOpen(false)} onSelect={handleSelectPair} selectedSymbol={selectedSymbol} />
      <TimeframeSelector isOpen={timeframeOpen} onClose={() => setTimeframeOpen(false)} selected={selectedTimeframe.id} onSelect={(tf) => setSelectedTimeframe(tf)} />
      <ChartTypeSelector isOpen={chartTypeOpen} onClose={() => setChartTypeOpen(false)} selected={selectedChartType.id} onSelect={(ct) => setSelectedChartType(ct)} />
      <ShareMenu isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </div>
    </>
  );
}

/* ─── Mobile Menu Components ─────────────── */

function MobileMenuItem({ icon, label, sublabel, badge, onClick, hasChevron, accent }: {
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
      className="flex items-center gap-[12px] w-full px-[16px] py-[11px] transition-colors active:scale-[0.98]"
      style={{}}
    >
      <div className="w-[22px] flex items-center justify-center shrink-0">{icon}</div>
      <div className="flex flex-col items-start flex-1 min-w-0">
        <span
          className="text-[14px] font-['Source_Sans_3',sans-serif] truncate w-full text-left"
          style={{ color: accent ? "var(--hc-accent)" : "var(--hc-text)" }}
        >
          {label}
        </span>
        {sublabel && (
          <span className="text-[11px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
            {sublabel}
          </span>
        )}
      </div>
      {badge !== undefined && badge > 0 && (
        <span className="min-w-[18px] h-[18px] rounded-full bg-[#00b1c7] text-white text-[10px] font-['Source_Sans_3',sans-serif] flex items-center justify-center px-[3px] shrink-0">
          {badge}
        </span>
      )}
      {hasChevron && (
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="shrink-0">
          <path d="M1 1L5 5L1 9" stroke="var(--hc-text-muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

function MobileMenuToggle({ icon, label, active, onToggle }: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-[12px] w-full px-[16px] py-[11px] transition-colors"
    >
      <div className="w-[22px] flex items-center justify-center shrink-0">{icon}</div>
      <span className="text-[14px] font-['Source_Sans_3',sans-serif] flex-1 text-left" style={{ color: "var(--hc-text)" }}>
        {label}
      </span>
      {/* Toggle switch */}
      <div
        className="w-[38px] h-[22px] rounded-full relative shrink-0 transition-colors"
        style={{
          backgroundColor: active ? "var(--hc-accent)" : "var(--hc-border)",
        }}
      >
        <div
          className="w-[18px] h-[18px] rounded-full bg-white absolute top-[2px] transition-all"
          style={{
            left: active ? 18 : 2,
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </button>
  );
}

/* ─── Desktop Menu Components ─────────────── */

function DesktopMenuItem({ icon, label, sublabel, onClick }: {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[10px] w-full px-[16px] py-[9px] transition-colors"
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
    >
      <div className="w-[18px] flex items-center justify-center shrink-0 opacity-70">{icon}</div>
      <span
        className="text-[13px] font-['Source_Sans_3',sans-serif] flex-1 text-left"
        style={{ color: "var(--hc-text)" }}
      >
        {label}
      </span>
      {sublabel && (
        <span className="text-[12px] font-['Source_Sans_3',sans-serif] shrink-0 px-[6px] py-[1px] rounded" style={{ color: "var(--hc-text-muted)", backgroundColor: "var(--hc-kbd-bg)" }}>
          {sublabel}
        </span>
      )}
    </button>
  );
}