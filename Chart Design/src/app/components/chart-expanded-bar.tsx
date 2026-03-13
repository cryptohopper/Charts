import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./theme-context";
import { type Timeframe } from "./timeframe-selector";
import { IndicatorsPanel } from "./indicators-panel";

/* ─── Types ─────────────────────────────────── */

type DrawerType = "market" | "timeframe" | "tools" | "more" | null;

interface ChartExpandedBarProps {
  selectedTool: number;
  onToolSelect: (id: number) => void;
  isZoomed: boolean;
  onZoomOut: () => void;
  onRemoveDrawings: () => void;
  onRemoveIndicators: () => void;
  onRemoveAll: () => void;
  activeIndicators: string[];
  onToggleIndicator: (id: string) => void;
  onCollapse: () => void;
}

/* ─── Tool definitions ─────────────────────── */

interface ToolDef {
  id: number;
  name: string;
  category: "general" | "lines" | "fibonacci" | "positions" | "shapes" | "measure";
}

const ALL_TOOLS: ToolDef[] = [
  { id: 0, name: "Cursor", category: "general" },
  { id: 1, name: "Trend Line", category: "lines" },
  { id: 2, name: "Horizontal Line", category: "lines" },
  { id: 14, name: "Channel", category: "lines" },
  { id: 3, name: "Fib Retracement", category: "fibonacci" },
  { id: 4, name: "Fib Extension", category: "fibonacci" },
  { id: 5, name: "Short Position", category: "positions" },
  { id: 6, name: "Long Position", category: "positions" },
  { id: 7, name: "Projection", category: "shapes" },
  { id: 12, name: "Date & Price Range", category: "shapes" },
  { id: 15, name: "Text", category: "shapes" },
  { id: 16, name: "Measure", category: "measure" },
  { id: 17, name: "Zoom In", category: "measure" },
];

const TOOL_CATEGORIES = [
  { key: "general", label: "General" },
  { key: "lines", label: "Lines" },
  { key: "fibonacci", label: "Fibonacci" },
  { key: "positions", label: "Positions" },
  { key: "shapes", label: "Shapes & Annotation" },
  { key: "measure", label: "Measurement" },
] as const;

/* ─── Timeframe definitions ─────────────────── */

const TIMEFRAME_GROUPS: { title: string; items: Timeframe[] }[] = [
  {
    title: "Minutes",
    items: [
      { id: "1m", label: "1 minute", shortLabel: "1m" },
      { id: "3m", label: "3 minutes", shortLabel: "3m" },
      { id: "5m", label: "5 minutes", shortLabel: "5m" },
      { id: "15m", label: "15 minutes", shortLabel: "15m" },
      { id: "30m", label: "30 minutes", shortLabel: "30m" },
      { id: "45m", label: "45 minutes", shortLabel: "45m" },
    ],
  },
  {
    title: "Hours",
    items: [
      { id: "1h", label: "1 hour", shortLabel: "1H" },
      { id: "2h", label: "2 hours", shortLabel: "2H" },
      { id: "3h", label: "3 hours", shortLabel: "3H" },
      { id: "4h", label: "4 hours", shortLabel: "4H" },
    ],
  },
  {
    title: "Days",
    items: [{ id: "1d", label: "1 day", shortLabel: "D" }],
  },
  {
    title: "Weeks",
    items: [{ id: "1w", label: "1 week", shortLabel: "W" }],
  },
  {
    title: "Months",
    items: [{ id: "1M", label: "1 month", shortLabel: "M" }],
  },
];

/* ─── Market data ───────────────────────────── */

interface MarketPair {
  symbol: string;
  description: string;
  exchange: string;
  color: string;
}

const MARKET_PAIRS: MarketPair[] = [
  { symbol: "BTC/USD", description: "Bitcoin / U.S. Dollar", exchange: "COINBASE", color: "#F7931A" },
  { symbol: "ETH/USD", description: "Ethereum / U.S. Dollar", exchange: "COINBASE", color: "#627EEA" },
  { symbol: "BTC/EUR", description: "Bitcoin / Euro", exchange: "KRAKEN", color: "#F7931A" },
  { symbol: "ETH/BTC", description: "Ethereum / Bitcoin", exchange: "BINANCE", color: "#627EEA" },
  { symbol: "XRP/USD", description: "Ripple / U.S. Dollar", exchange: "BINANCE", color: "#23292F" },
  { symbol: "SOL/USD", description: "Solana / U.S. Dollar", exchange: "COINBASE", color: "#9945FF" },
  { symbol: "ADA/USD", description: "Cardano / U.S. Dollar", exchange: "KRAKEN", color: "#0033AD" },
  { symbol: "DOT/USD", description: "Polkadot / U.S. Dollar", exchange: "BINANCE", color: "#E6007A" },
  { symbol: "DOGE/USD", description: "Dogecoin / U.S. Dollar", exchange: "BINANCE", color: "#C2A633" },
  { symbol: "LINK/USD", description: "Chainlink / U.S. Dollar", exchange: "COINBASE", color: "#2A5ADA" },
  { symbol: "AVAX/USD", description: "Avalanche / U.S. Dollar", exchange: "COINBASE", color: "#E84142" },
  { symbol: "LTC/USD", description: "Litecoin / U.S. Dollar", exchange: "KRAKEN", color: "#345D9D" },
  { symbol: "EUR/USD", description: "Euro / U.S. Dollar", exchange: "OANDA", color: "#003399" },
  { symbol: "GBP/USD", description: "British Pound / U.S. Dollar", exchange: "OANDA", color: "#012169" },
];

/* ─── Tool Icon SVGs ────────────────────────── */

function ToolIcon({ toolId, active }: { toolId: number; active?: boolean }) {
  const s = active ? "var(--hc-accent)" : "var(--hc-text-secondary)";
  const f = active ? "var(--hc-accent-bg)" : "none";

  const map: Record<number, React.ReactNode> = {
    0: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 2L4 16L8.5 11.5L13 17L15 16L10.5 10.5L16 10L4 2Z" stroke={s} fill={f} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    1: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17L17 3" stroke={s} strokeLinecap="round" />
        <circle cx="3" cy="17" r="2" fill={f} stroke={s} /><circle cx="17" cy="3" r="2" fill={f} stroke={s} />
      </svg>
    ),
    2: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 10H18" stroke={s} strokeLinecap="round" /><circle cx="10" cy="10" r="2" fill={f} stroke={s} />
      </svg>
    ),
    3: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 4H18M2 8.5H18M2 13H18M2 17H18" stroke={s} strokeLinecap="round" strokeOpacity=".6" />
        <path d="M5 4V17" stroke={s} strokeLinecap="round" />
      </svg>
    ),
    4: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5H18M2 10H18M2 15H18" stroke={s} strokeLinecap="round" strokeOpacity=".6" />
        <path d="M5 5L10 10L7 15" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    5: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="4" width="12" height="4" rx="1" fill="rgba(242,109,96,.15)" stroke="rgba(242,109,96,.8)" />
        <rect x="4" y="10" width="12" height="6" rx="1" fill="rgba(9,151,126,.15)" stroke="rgba(9,151,126,.8)" />
        <path d="M10 2V18M10 18L7.5 15.5M10 18L12.5 15.5" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    6: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="4" width="12" height="6" rx="1" fill="rgba(9,151,126,.15)" stroke="rgba(9,151,126,.8)" />
        <rect x="4" y="12" width="12" height="4" rx="1" fill="rgba(242,109,96,.15)" stroke="rgba(242,109,96,.8)" />
        <path d="M10 18V2M10 2L7.5 4.5M10 2L12.5 4.5" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    7: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 15L10 5L14 10L18 3" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="3" cy="15" r="1.5" fill={f} stroke={s} /><circle cx="10" cy="5" r="1.5" fill={f} stroke={s} /><circle cx="14" cy="10" r="1.5" fill={f} stroke={s} />
      </svg>
    ),
    12: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="12" rx="1.5" fill={f} stroke={s} />
        <path d="M10 2V4M10 16V18M1 10H3M17 10H19" stroke={s} strokeLinecap="round" />
      </svg>
    ),
    14: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 14L18 6" stroke={s} strokeLinecap="round" />
        <path d="M2 18L18 10" stroke={s} strokeLinecap="round" strokeOpacity=".5" />
      </svg>
    ),
    15: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 5V3H16V5M10 3V17M7 17H13" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    16: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17L17 3" stroke={s} strokeLinecap="round" />
        <path d="M13 3H17V7" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17H3V13" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    17: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="5.5" stroke={s} /><path d="M13 13L17.5 17.5" stroke={s} strokeLinecap="round" /><path d="M7 9H11M9 7V11" stroke={s} strokeLinecap="round" />
      </svg>
    ),
  };

  return (map[toolId] ?? (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke={s} /></svg>
  )) as React.ReactElement;
}

/* ─── Bottom Drawer ────────────────────────── */

function BottomDrawer({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[9990]"
            style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[9991] rounded-t-[16px] max-h-[70vh] flex flex-col"
            style={{
              backgroundColor: "var(--hc-surface)",
              borderTop: "1px solid var(--hc-border)",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.3)",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 380, bounce: 0 }}
          >
            {/* Drag indicator */}
            <div className="flex justify-center pt-[10px] pb-[2px] shrink-0">
              <div className="w-[36px] h-[4px] rounded-full" style={{ backgroundColor: "var(--hc-border)" }} />
            </div>
            {/* Header */}
            <div className="px-[20px] pb-[12px] pt-[4px] shrink-0">
              <span
                className="text-[17px] font-['Source_Sans_3',sans-serif]"
                style={{ color: "var(--hc-text)", fontWeight: 600 }}
              >
                {title}
              </span>
            </div>
            {/* Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-[16px] pb-[28px]">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── More menu card ──────────────────────── */

function MoreCard({
  icon,
  label,
  onClick,
  accent,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  accent?: boolean;
  badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-[6px] rounded-[12px] py-[14px] px-[6px] transition-all active:scale-[0.96]"
      style={{
        backgroundColor: accent ? "var(--hc-accent-bg)" : "var(--hc-surface-hover)",
        border: accent ? "1px solid var(--hc-accent)" : "1px solid var(--hc-border)",
      }}
    >
      <div className="relative">
        {icon}
        {badge !== undefined && badge > 0 && (
          <span className="absolute -top-[5px] -right-[8px] min-w-[16px] h-[16px] rounded-full bg-[#00b1c7] text-white text-[10px] font-['Source_Sans_3',sans-serif] flex items-center justify-center px-[3px]">
            {badge}
          </span>
        )}
      </div>
      <span
        className="text-[11px] font-['Source_Sans_3',sans-serif] text-center leading-snug"
        style={{ color: accent ? "var(--hc-accent)" : "var(--hc-text)" }}
      >
        {label}
      </span>
    </button>
  );
}

/* ═══════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════ */

export function ChartExpandedBar({
  selectedTool,
  onToolSelect,
  isZoomed,
  onZoomOut,
  onRemoveDrawings,
  onRemoveIndicators,
  onRemoveAll,
  activeIndicators,
  onToggleIndicator,
  onCollapse,
}: ChartExpandedBarProps) {
  const { isDark, toggleTheme } = useTheme();
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [selectedSymbol, setSelectedSymbol] = useState("BTC/USD");
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>({
    id: "1d", label: "1 day", shortLabel: "D",
  });
  const [indicatorsOpen, setIndicatorsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openDrawer = useCallback(
    (d: DrawerType) => setActiveDrawer((prev) => (prev === d ? null : d)),
    []
  );
  const closeDrawer = useCallback(() => setActiveDrawer(null), []);

  const toolName = ALL_TOOLS.find((t) => t.id === selectedTool)?.name ?? "Cursor";

  const filteredMarkets = searchQuery.trim()
    ? MARKET_PAIRS.filter((p) =>
        p.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : MARKET_PAIRS;

  return (
    <>
      {/* ═══ Bottom Bar ═══ */}
      <motion.div
        initial={{ y: 52, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 28, stiffness: 300, bounce: 0, delay: 0.05 }}
        className="fixed bottom-0 left-0 right-0 z-[9980] flex items-center h-[48px]"
        style={{
          backgroundColor: "var(--hc-surface)",
          borderTop: "1px solid var(--hc-border)",
        }}
      >
        {/* Market selector */}
        <button
          onClick={() => openDrawer("market")}
          className="flex items-center gap-[6px] h-full px-[14px] shrink-0 transition-colors"
          style={{
            backgroundColor: activeDrawer === "market" ? "var(--hc-surface-hover)" : undefined,
          }}
        >
          {/* Coin dot */}
          <div
            className="w-[8px] h-[8px] rounded-full shrink-0"
            style={{ backgroundColor: MARKET_PAIRS.find((p) => p.symbol === selectedSymbol)?.color ?? "#F7931A" }}
          />
          <span
            className="text-[13px] font-['Source_Sans_3',sans-serif]"
            style={{
              color: activeDrawer === "market" ? "var(--hc-accent)" : "var(--hc-text)",
              fontWeight: 600,
            }}
          >
            {selectedSymbol}
          </span>
          <svg width="7" height="4" viewBox="0 0 7 4" fill="none" className={`transition-transform ${activeDrawer === "market" ? "rotate-180" : ""}`}>
            <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="var(--hc-text-muted)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-[24px] shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

        {/* Timeframe */}
        <button
          onClick={() => openDrawer("timeframe")}
          className="flex items-center gap-[4px] h-full px-[12px] shrink-0 transition-colors"
          style={{
            backgroundColor: activeDrawer === "timeframe" ? "var(--hc-surface-hover)" : undefined,
          }}
        >
          <span
            className="text-[13px] font-['Source_Sans_3',sans-serif]"
            style={{
              color: activeDrawer === "timeframe" ? "var(--hc-accent)" : "var(--hc-text)",
            }}
          >
            {selectedTimeframe.shortLabel}
          </span>
          <svg width="7" height="4" viewBox="0 0 7 4" fill="none" className={`transition-transform ${activeDrawer === "timeframe" ? "rotate-180" : ""}`}>
            <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="var(--hc-text-muted)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-[24px] shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

        {/* Three dots — More */}
        <button
          onClick={() => openDrawer("more")}
          className="flex items-center justify-center h-full px-[12px] shrink-0 transition-colors"
          style={{ backgroundColor: activeDrawer === "more" ? "var(--hc-surface-hover)" : undefined }}
        >
          <svg width="18" height="4" viewBox="0 0 18 4" fill="none">
            <circle cx="2" cy="2" r="1.4" fill={activeDrawer === "more" ? "var(--hc-accent)" : "var(--hc-text-secondary)"} />
            <circle cx="9" cy="2" r="1.4" fill={activeDrawer === "more" ? "var(--hc-accent)" : "var(--hc-text-secondary)"} />
            <circle cx="16" cy="2" r="1.4" fill={activeDrawer === "more" ? "var(--hc-accent)" : "var(--hc-text-secondary)"} />
          </svg>
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Tools button */}
        <button
          onClick={() => openDrawer("tools")}
          className="flex items-center gap-[6px] h-full px-[12px] shrink-0 transition-colors"
          style={{ backgroundColor: activeDrawer === "tools" ? "var(--hc-surface-hover)" : undefined }}
        >
          <ToolIcon toolId={selectedTool} active={activeDrawer === "tools"} />
          <span
            className="text-[12px] font-['Source_Sans_3',sans-serif] max-w-[70px] truncate"
            style={{
              color: activeDrawer === "tools" ? "var(--hc-accent)" : "var(--hc-text-secondary)",
            }}
          >
            {toolName}
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-[24px] shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

        {/* Collapse (exit fullscreen) */}
        <button
          onClick={onCollapse}
          className="flex items-center justify-center h-full px-[12px] shrink-0 transition-colors"
          style={{}}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hc-surface-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
          title="Exit expanded view"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 2V6H2M14 10H10V14M6 6L1 1M10 10L15 15" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </motion.div>

      {/* ═══ MARKET DRAWER ═══ */}
      <BottomDrawer isOpen={activeDrawer === "market"} onClose={closeDrawer} title="Select Market">
        {/* Search */}
        <div className="mb-[12px]">
          <div
            className="flex items-center gap-[8px] h-[40px] rounded-[10px] px-[12px]"
            style={{ backgroundColor: "var(--hc-hover-bg, var(--hc-surface-hover))" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <circle cx="7" cy="7" r="5.5" stroke="var(--hc-text-secondary)" strokeWidth="1.2" />
              <path d="M11.5 11.5L14.5 14.5" stroke="var(--hc-text-secondary)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search symbol..."
              className="flex-1 bg-transparent outline-none text-[14px] font-['Source_Sans_3',sans-serif]"
              style={{ color: "var(--hc-text)" }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3L11 11M11 3L3 11" stroke="var(--hc-text-secondary)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Market list */}
        <div className="flex flex-col gap-[2px]">
          {filteredMarkets.length === 0 ? (
            <div className="flex items-center justify-center py-[32px]">
              <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
                No markets found
              </span>
            </div>
          ) : (
            filteredMarkets.map((pair) => {
              const isSel = pair.symbol === selectedSymbol;
              return (
                <button
                  key={pair.symbol}
                  onClick={() => { setSelectedSymbol(pair.symbol); setSearchQuery(""); closeDrawer(); }}
                  className="flex items-center gap-[12px] px-[12px] py-[11px] rounded-[10px] transition-colors active:scale-[0.98]"
                  style={{
                    backgroundColor: isSel ? "var(--hc-accent-bg)" : undefined,
                    border: isSel ? "1px solid var(--hc-accent)" : "1px solid transparent",
                  }}
                >
                  <div
                    className="w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: pair.color }}
                  >
                    <span className="text-white text-[11px] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600 }}>
                      {pair.symbol.split("/")[0].slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex flex-col items-start flex-1 min-w-0">
                    <span
                      className="text-[14px] font-['Source_Sans_3',sans-serif]"
                      style={{ color: isSel ? "var(--hc-accent)" : "var(--hc-text)", fontWeight: 600 }}
                    >
                      {pair.symbol}
                    </span>
                    <span className="text-[11px] font-['Source_Sans_3',sans-serif] truncate w-full text-left" style={{ color: "var(--hc-text-secondary)" }}>
                      {pair.description}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-['Source_Sans_3',sans-serif] px-[7px] py-[2px] rounded-full shrink-0"
                    style={{ backgroundColor: "var(--hc-surface-hover)", color: "var(--hc-text-muted)" }}
                  >
                    {pair.exchange}
                  </span>
                  {isSel && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <path d="M3 8.5L6.5 12L13 4" stroke="var(--hc-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              );
            })
          )}
        </div>
      </BottomDrawer>

      {/* ═══ TIMEFRAME DRAWER ═══ */}
      <BottomDrawer isOpen={activeDrawer === "timeframe"} onClose={closeDrawer} title="Timeframe">
        <div className="flex flex-col gap-[16px]">
          {TIMEFRAME_GROUPS.map((group) => (
            <div key={group.title}>
              <span
                className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider block mb-[8px]"
                style={{ color: "var(--hc-text-muted)" }}
              >
                {group.title}
              </span>
              <div className="flex flex-wrap gap-[8px]">
                {group.items.map((tf) => {
                  const isSel = tf.id === selectedTimeframe.id;
                  return (
                    <button
                      key={tf.id}
                      onClick={() => { setSelectedTimeframe(tf); closeDrawer(); }}
                      className="min-w-[48px] px-[14px] py-[10px] rounded-[10px] text-[14px] font-['Source_Sans_3',sans-serif] transition-all active:scale-95"
                      style={{
                        backgroundColor: isSel ? "var(--hc-accent-bg)" : "var(--hc-surface-hover)",
                        color: isSel ? "var(--hc-accent)" : "var(--hc-text)",
                        border: isSel ? "1px solid var(--hc-accent)" : "1px solid var(--hc-border)",
                        fontWeight: isSel ? 600 : 400,
                      }}
                    >
                      {tf.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </BottomDrawer>

      {/* ═══ TOOLS DRAWER ═══ */}
      <BottomDrawer isOpen={activeDrawer === "tools"} onClose={closeDrawer} title="Drawing Tools">
        <div className="flex flex-col gap-[16px]">
          {TOOL_CATEGORIES.map((cat) => {
            const tools = ALL_TOOLS.filter((t) => t.category === cat.key);
            if (tools.length === 0) return null;
            return (
              <div key={cat.key}>
                <span
                  className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider block mb-[8px]"
                  style={{ color: "var(--hc-text-muted)" }}
                >
                  {cat.label}
                </span>
                <div className="grid grid-cols-3 gap-[8px]">
                  {tools.map((tool) => {
                    const isSel = tool.id === selectedTool;
                    return (
                      <button
                        key={tool.id}
                        onClick={() => { onToolSelect(tool.id); closeDrawer(); }}
                        className="flex flex-col items-center justify-center gap-[8px] rounded-[12px] py-[14px] px-[6px] transition-all active:scale-[0.96]"
                        style={{
                          backgroundColor: isSel ? "var(--hc-accent-bg)" : "var(--hc-surface-hover)",
                          border: isSel ? "1px solid var(--hc-accent)" : "1px solid var(--hc-border)",
                        }}
                      >
                        <ToolIcon toolId={tool.id} active={isSel} />
                        <span
                          className="text-[11px] font-['Source_Sans_3',sans-serif] text-center leading-snug"
                          style={{ color: isSel ? "var(--hc-accent)" : "var(--hc-text)" }}
                        >
                          {tool.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Zoom out */}
          {isZoomed && (
            <button
              onClick={() => { onZoomOut(); closeDrawer(); }}
              className="flex items-center justify-center gap-[8px] rounded-[12px] py-[11px] transition-colors active:scale-95"
              style={{ backgroundColor: "var(--hc-surface-hover)", border: "1px solid var(--hc-border)" }}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="5.5" stroke="var(--hc-text)" /><path d="M13 13L17.5 17.5" stroke="var(--hc-text)" strokeLinecap="round" /><path d="M7 9H11" stroke="var(--hc-text)" strokeLinecap="round" />
              </svg>
              <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>Reset Zoom</span>
            </button>
          )}

          {/* Remove section */}
          <div className="pt-[8px]" style={{ borderTop: "1px solid var(--hc-border)" }}>
            <div className="grid grid-cols-2 gap-[8px]">
              <button
                onClick={() => { onRemoveDrawings(); closeDrawer(); }}
                className="flex items-center justify-center gap-[6px] rounded-[10px] py-[10px] transition-colors active:scale-95"
                style={{ backgroundColor: "var(--hc-surface-hover)", border: "1px solid var(--hc-border)" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4H14M5.33 4V2.67H10.67V4M6 7V12M10 7V12M3.33 4L4 13.33H12L12.67 4" stroke="var(--hc-text-secondary)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-secondary)" }}>Drawings</span>
              </button>
              <button
                onClick={() => { onRemoveIndicators(); closeDrawer(); }}
                className="flex items-center justify-center gap-[6px] rounded-[10px] py-[10px] transition-colors active:scale-95"
                style={{ backgroundColor: "var(--hc-surface-hover)", border: "1px solid var(--hc-border)" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4H14M5.33 4V2.67H10.67V4M6 7V12M10 7V12M3.33 4L4 13.33H12L12.67 4" stroke="var(--hc-text-secondary)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-secondary)" }}>Indicators</span>
              </button>
            </div>
          </div>
        </div>
      </BottomDrawer>

      {/* ═══ MORE DRAWER ═══ */}
      <BottomDrawer isOpen={activeDrawer === "more"} onClose={closeDrawer} title="Analysis Hub">
        <div className="flex flex-col gap-[14px]">
          {/* Tools */}
          <div>
            <span className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider block mb-[8px]" style={{ color: "var(--hc-text-muted)" }}>
              Tools
            </span>
            <div className="grid grid-cols-2 gap-[8px]">
              <MoreCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M18.5 18.5V9.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 18.5V3.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 18.5V13" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Indicators"
                badge={activeIndicators.length}
                onClick={() => { closeDrawer(); setTimeout(() => setIndicatorsOpen(true), 280); }}
              />
              <MoreCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3 18V6L7 10L11 4L15 12L19 8V18H3Z" stroke="var(--hc-text)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Chart Type"
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Actions */}
          <div>
            <span className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider block mb-[8px]" style={{ color: "var(--hc-text-muted)" }}>
              Actions
            </span>
            <div className="grid grid-cols-3 gap-[8px]">
              <MoreCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M16 5.17V17H6V5.17" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 8V15.5" stroke="var(--hc-text)" strokeLinecap="round" />
                    <path d="M8 11L11 8L14 11" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Save"
                onClick={() => {}}
              />
              <MoreCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 14L2 11L5 8" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 11H14C16.5 11 19 9 19 6" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Undo"
                onClick={() => {}}
              />
              <MoreCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M17 14L20 11L17 8" stroke="var(--hc-text-muted)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 11H8C5.5 11 3 9 3 6" stroke="var(--hc-text-muted)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Redo"
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Appearance */}
          <div>
            <span className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider block mb-[8px]" style={{ color: "var(--hc-text-muted)" }}>
              Appearance
            </span>
            <div className="grid grid-cols-2 gap-[8px]">
              <MoreCard
                icon={
                  isDark ? (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="4" stroke="var(--hc-accent)" />
                      <path d="M11 3V5M11 17V19M3 11H5M17 11H19M5.6 5.6L7.1 7.1M14.9 14.9L16.4 16.4M5.6 16.4L7.1 14.9M14.9 7.1L16.4 5.6" stroke="var(--hc-accent)" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M19 13.6A8 8 0 118.4 3C5.2 5.4 4 9 5.2 12.2S9.8 17 13 17C15.5 17 17.7 15.7 19 13.6Z" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )
                }
                label={isDark ? "Light Mode" : "Dark Mode"}
                accent={isDark}
                onClick={toggleTheme}
              />
              <MoreCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M15 3V7H19M7 19V15H3M15 7L19 3M7 15L3 19" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Exit Expanded"
                onClick={onCollapse}
              />
            </div>
          </div>

          {/* Account */}
          <div>
            <span className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider block mb-[8px]" style={{ color: "var(--hc-text-muted)" }}>
              Account
            </span>
            <div className="grid grid-cols-2 gap-[8px]">
              <MoreCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="8" r="4" stroke="var(--hc-text)" />
                    <path d="M4 19C4 15.5 7 13.5 11 13.5S18 15.5 18 19" stroke="var(--hc-text)" strokeLinecap="round" />
                  </svg>
                }
                label="Log In"
                onClick={() => {}}
              />
              <MoreCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M15 5H17C18.1 5 19 5.9 19 7V17C19 18.1 18.1 19 17 19H15" stroke="var(--hc-accent)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 11H19M19 11L16 8M19 11L16 14" stroke="var(--hc-accent)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Sign Up"
                accent
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Remove all */}
          <button
            onClick={() => { onRemoveAll(); closeDrawer(); }}
            className="flex items-center justify-center gap-[8px] rounded-[12px] py-[11px] transition-colors active:scale-95"
            style={{ border: "1px solid rgba(242,109,96,0.3)", backgroundColor: "rgba(242,109,96,0.07)" }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 4H14M5.33 4V2.67H10.67V4M6 7V12M10 7V12M3.33 4L4 13.33H12L12.67 4" stroke="#f26d60" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: "#f26d60" }}>Remove All</span>
          </button>
        </div>
      </BottomDrawer>

      {/* ═══ Indicators Panel ═══ */}
      <IndicatorsPanel
        isOpen={indicatorsOpen}
        onClose={() => setIndicatorsOpen(false)}
        activeIndicators={activeIndicators}
        onToggleIndicator={onToggleIndicator}
      />
    </>
  );
}