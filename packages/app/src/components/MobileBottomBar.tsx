import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, LineChart, Pencil, Clock, Settings,
  ChevronDown, Search, Star, Maximize, X, Sparkles,
  TrendingUp, Minus, ArrowUpRight, Type, ArrowDownUp,
} from "lucide-react";
import { useChartStore, useDrawingStore } from "@hopcharts/core";
import type { Timeframe, DrawingToolType } from "@hopcharts/core";
import { MobileAIInsightsDrawer } from "./MobileAIInsightsDrawer";

/* ─── Constants ─── */
const TIMEFRAMES: Timeframe[] = ["1m", "5m", "15m", "1h", "4h", "1D", "1W"];

const DRAWING_TOOLS: { type: DrawingToolType; name: string; icon: React.ReactNode }[] = [
  { type: "trendline", name: "Trend Line", icon: <TrendingUp size={20} /> },
  { type: "horizontal_line", name: "Horizontal", icon: <Minus size={20} /> },
  { type: "vertical_line", name: "Vertical", icon: <ArrowUpRight size={20} /> },
  { type: "fibonacci_retracement", name: "Fibonacci", icon: <ArrowDownUp size={20} /> },
  { type: "text_label", name: "Text", icon: <Type size={20} /> },
  { type: "measure", name: "Measure", icon: <LineChart size={20} /> },
];

type DrawerType = "market" | "tools" | "hub" | "ai" | null;

/* ─── Shared Drawer Parts ─── */

function DrawerOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    />
  );
}

function DrawerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`fixed bottom-0 left-0 right-0 z-[101] rounded-t-2xl border-t overflow-hidden flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.2)] ${className}`}
      style={{ backgroundColor: "var(--hc-modal-bg)", borderColor: "var(--hc-border)" }}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      <div className="w-full flex justify-center py-3 shrink-0">
        <div className="w-12 h-1.5 rounded-full opacity-50" style={{ backgroundColor: "var(--hc-border-strong)" }} />
      </div>
      {children}
    </motion.div>
  );
}

function DrawerHeader({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="px-5 pb-4 flex items-center justify-between shrink-0">
      <h2 className="text-xl font-bold font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>{title}</h2>
      <button
        onClick={onClose}
        className="p-2 rounded-full"
        style={{ color: "var(--hc-text-secondary)", backgroundColor: "var(--hc-hover-bg)" }}
      >
        <X size={20} />
      </button>
    </div>
  );
}

/* ─── Hub Action Row ─── */

function HubAction({ icon, title, subtitle, onClick }: { icon: React.ReactNode; title: string; subtitle: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 p-4 w-full rounded-xl border border-transparent text-left group transition-colors"
      style={{ backgroundColor: "var(--hc-surface)" }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: "var(--hc-input-bg)", color: "var(--hc-text-secondary)" }}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>{title}</h4>
        <p className="text-xs mt-0.5 font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-secondary)" }}>{subtitle}</p>
      </div>
    </button>
  );
}

/* ─── Main Component ─── */

export function MobileBottomBar() {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const pair = useChartStore((s) => s.pair);
  const timeframe = useChartStore((s) => s.timeframe);
  const setPair = useChartStore((s) => s.setPair);
  const setTimeframe = useChartStore((s) => s.setTimeframe);

  const activeToolType = useDrawingStore((s) => s.activeToolType);
  const setActiveTool = useDrawingStore((s) => s.setActiveTool);

  const closeDrawer = () => {
    setActiveDrawer(null);
    setSearchQuery("");
  };

  return (
    <>
      {/* ─── Main Bottom Bar ─── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[90] border-t pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
        style={{ backgroundColor: "var(--hc-surface)", borderColor: "var(--hc-border)" }}
      >
        {/* Timeframes Row */}
        <div
          className="w-full px-2 py-1.5 overflow-x-auto no-scrollbar flex items-center gap-1.5"
          style={{ borderBottom: "1px solid var(--hc-border)" }}
        >
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className="px-4 py-1.5 rounded-full text-sm font-medium font-['Source_Sans_3',sans-serif] transition-colors shrink-0"
              style={
                timeframe === tf
                  ? { backgroundColor: "var(--hc-accent)", color: "#fff" }
                  : { backgroundColor: "var(--hc-input-bg)", color: "var(--hc-text-secondary)", border: "1px solid var(--hc-border)" }
              }
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setActiveDrawer("market")}
            className="flex items-center gap-2 transition-colors"
            style={{ color: "var(--hc-text)" }}
          >
            <span className="text-sm font-bold font-['Source_Sans_3',sans-serif] leading-none">{pair}</span>
            <ChevronDown size={16} style={{ color: "var(--hc-text-secondary)" }} />
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveDrawer("tools")}
              style={{ color: activeToolType ? "var(--hc-accent)" : "var(--hc-text-secondary)" }}
            >
              <Pencil size={20} />
            </button>
            <button style={{ color: "var(--hc-text-secondary)" }}>
              <LineChart size={20} />
            </button>
            <button
              onClick={() => setActiveDrawer("hub")}
              style={{ color: "var(--hc-text-secondary)" }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Drawers ─── */}
      <AnimatePresence>
        {activeDrawer && activeDrawer !== "ai" && <DrawerOverlay onClose={closeDrawer} />}

        {/* Market Selector */}
        {activeDrawer === "market" && (
          <DrawerContainer className="h-[80vh]">
            <DrawerHeader title="Markets" onClose={closeDrawer} />

            <div className="px-5 mb-4 shrink-0">
              <div
                className="relative flex items-center w-full h-12 rounded-xl px-3 transition-colors"
                style={{ backgroundColor: "var(--hc-input-bg)", border: "1px solid var(--hc-border)" }}
              >
                <Search size={18} style={{ color: "var(--hc-text-muted)" }} />
                <input
                  type="text"
                  placeholder="Search pairs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-full bg-transparent outline-none pl-3 text-sm font-['Source_Sans_3',sans-serif]"
                  style={{ color: "var(--hc-text)" }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-8 no-scrollbar">
              <MarketList
                searchQuery={searchQuery}
                currentPair={pair}
                onSelect={(p) => {
                  setPair(p);
                  closeDrawer();
                }}
              />
            </div>
          </DrawerContainer>
        )}

        {/* Drawing Tools */}
        {activeDrawer === "tools" && (
          <DrawerContainer className="h-[60vh]">
            <DrawerHeader title="Drawing Tools" onClose={closeDrawer} />

            <div className="flex-1 overflow-y-auto px-5 pb-8 no-scrollbar">
              <div className="grid grid-cols-3 gap-3">
                {DRAWING_TOOLS.map((tool) => {
                  const isActive = activeToolType === tool.type;
                  return (
                    <button
                      key={tool.type}
                      onClick={() => {
                        setActiveTool(isActive ? null : tool.type);
                        closeDrawer();
                      }}
                      className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all"
                      style={
                        isActive
                          ? { backgroundColor: "var(--hc-accent-bg)", borderColor: "var(--hc-accent)", color: "var(--hc-accent)" }
                          : { backgroundColor: "var(--hc-surface)", borderColor: "var(--hc-border)", color: "var(--hc-text)" }
                      }
                    >
                      <div style={{ color: isActive ? "var(--hc-accent)" : "var(--hc-text-secondary)" }}>
                        {tool.icon}
                      </div>
                      <span className="text-[11px] font-medium font-['Source_Sans_3',sans-serif] text-center leading-tight">
                        {tool.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </DrawerContainer>
        )}

        {/* Analysis Hub */}
        {activeDrawer === "hub" && (
          <DrawerContainer className="max-h-[85vh]">
            <DrawerHeader title="Analysis Hub" onClose={closeDrawer} />

            <div className="px-5 pb-8 flex flex-col gap-2">
              <HubAction
                icon={<Sparkles />}
                title="AI Insights"
                subtitle="View AI pattern analysis"
                onClick={() => {
                  setActiveDrawer("ai");
                }}
              />
              <HubAction icon={<LineChart />} title="Indicators" subtitle="Add technical indicators" />
              <HubAction icon={<Clock />} title="Alerts" subtitle="Manage price alerts" />
              <HubAction
                icon={<Maximize />}
                title="Full Screen"
                subtitle="Enter immersive mode"
                onClick={() => {
                  document.documentElement.requestFullscreen?.();
                  closeDrawer();
                }}
              />
              <div className="h-px my-2" style={{ backgroundColor: "var(--hc-border)" }} />
              <HubAction icon={<Settings />} title="Chart Settings" subtitle="Colors, scales, margins" />
            </div>
          </DrawerContainer>
        )}
        {/* AI Insights */}
        {activeDrawer === "ai" && (
          <MobileAIInsightsDrawer onClose={closeDrawer} />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Market List (placeholder — will integrate with usePairs) ─── */

const POPULAR_PAIRS = [
  "BTC/USDT", "ETH/USDT", "SOL/USDT", "XRP/USDT", "ADA/USDT",
  "DOGE/USDT", "AVAX/USDT", "DOT/USDT", "LINK/USDT", "MATIC/USDT",
];

function MarketList({ searchQuery, currentPair, onSelect }: { searchQuery: string; currentPair: string; onSelect: (pair: string) => void }) {
  const query = searchQuery.toLowerCase();
  const filtered = POPULAR_PAIRS.filter((p) =>
    p.toLowerCase().includes(query),
  );

  return (
    <div className="flex flex-col gap-2">
      {filtered.map((p) => (
        <button
          key={p}
          onClick={() => onSelect(p)}
          className="flex items-center justify-between p-4 rounded-xl border transition-all active:scale-[0.98]"
          style={{
            backgroundColor: "var(--hc-surface)",
            borderColor: p === currentPair ? "var(--hc-accent)" : "var(--hc-border)",
          }}
        >
          <div className="flex items-center gap-3">
            <Star size={18} style={{ color: p === currentPair ? "var(--hc-accent)" : "var(--hc-text-muted)" }} />
            <span className="font-bold font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>{p}</span>
          </div>
        </button>
      ))}
      {filtered.length === 0 && (
        <p className="text-center py-8 text-sm font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-secondary)" }}>
          No pairs found
        </p>
      )}
    </div>
  );
}
