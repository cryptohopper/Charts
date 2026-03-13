import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, LineChart, Pencil, Clock, Settings, 
  ChevronDown, Search, Star, BarChart2, Activity,
  PenTool, Crosshair, ArrowUpRight, Maximize, X
} from "lucide-react";

/* ─── Types ─── */
type DrawerType = "market" | "tools" | "hub" | null;

interface MobileBottomBarProps {
  // Pass props if needed for integrating with App state
  activeTimeframe?: string;
  onTimeframeSelect?: (tf: string) => void;
  activeTool?: number;
  onToolSelect?: (toolId: number) => void;
}

const TIMEFRAMES = ["1m", "5m", "15m", "1H", "4H", "1D", "1W", "1M"];
const MARKETS = [
  { pair: "BTC/USDT", price: "64,230.50", change: "+2.4%" },
  { pair: "ETH/USDT", price: "3,450.20", change: "+1.8%" },
  { pair: "SOL/USDT", price: "145.80", change: "-0.5%" },
  { pair: "XRP/USDT", price: "1.12", change: "+5.2%" },
  { pair: "ADA/USDT", price: "0.58", change: "-1.2%" },
];

const DRAWING_TOOLS = [
  { id: 1, name: "Crosshair", icon: <Crosshair size={20} /> },
  { id: 2, name: "Trend Line", icon: <ArrowUpRight size={20} /> },
  { id: 3, name: "Fib Retracement", icon: <Activity size={20} /> },
  { id: 15, name: "Text", icon: <PenTool size={20} /> },
  { id: 5, name: "Short Position", icon: <BarChart2 size={20} /> },
  { id: 6, name: "Long Position", icon: <LineChart size={20} /> },
];

/* ─── Components ─── */

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

function DrawerContainer({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={`fixed bottom-0 left-0 right-0 z-[101] bg-[var(--hc-modal-bg)] border-t border-[var(--hc-border)] rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col ${className}`}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      <div className="w-full flex justify-center py-3 shrink-0">
        <div className="w-12 h-1.5 rounded-full bg-[var(--hc-border-strong)] opacity-50" />
      </div>
      {children}
    </motion.div>
  );
}

export function MobileBottomBar({ 
  activeTimeframe = "1D", 
  onTimeframeSelect = () => {},
  activeTool = 0,
  onToolSelect = () => {} 
}: MobileBottomBarProps) {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const closeDrawer = () => setActiveDrawer(null);

  return (
    <>
      {/* ─── Main Bottom Bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] bg-[var(--hc-surface)] border-t border-[var(--hc-border)] pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        
        {/* Timeframes Row (Scrollable) */}
        <div className="w-full border-b border-[var(--hc-border)]/50 px-2 py-1.5 overflow-x-auto no-scrollbar flex items-center gap-1.5">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              onClick={() => onTimeframeSelect(tf)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0 ${
                activeTimeframe === tf 
                  ? "bg-[#00b1c7] text-white shadow-sm" 
                  : "bg-[var(--hc-input-bg)] text-[var(--hc-text-secondary)] border border-[var(--hc-border)]"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={() => setActiveDrawer("market")}
            className="flex items-center gap-2 text-[var(--hc-text)] hover:text-[#00b1c7] transition-colors"
          >
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold leading-none">BTC/USDT</span>
              <span className="text-[10px] text-[#09977e] leading-none mt-1">+2.4%</span>
            </div>
            <ChevronDown size={16} className="text-[var(--hc-text-secondary)]" />
          </button>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setActiveDrawer("tools")}
              className="flex flex-col items-center gap-1 text-[var(--hc-text-secondary)] hover:text-[#00b1c7] transition-colors"
            >
              <Pencil size={20} className={activeTool !== 0 ? "text-[#00b1c7]" : ""} />
            </button>
            <button 
              className="flex flex-col items-center gap-1 text-[var(--hc-text-secondary)] hover:text-[#00b1c7] transition-colors"
            >
              <LineChart size={20} />
            </button>
            <button 
              onClick={() => setActiveDrawer("hub")}
              className="flex flex-col items-center gap-1 text-[var(--hc-text-secondary)] hover:text-[#00b1c7] transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Drawers ─── */}
      <AnimatePresence>
        {activeDrawer && <DrawerOverlay onClose={closeDrawer} />}
        
        {/* Market Selector Drawer */}
        {activeDrawer === "market" && (
          <DrawerContainer className="h-[80vh]">
            <div className="px-5 pb-4 flex items-center justify-between shrink-0">
              <h2 className="text-xl font-bold text-[var(--hc-text)]">Markets</h2>
              <button onClick={closeDrawer} className="p-2 text-[var(--hc-text-secondary)] bg-[var(--hc-hover-bg)] rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <div className="px-5 mb-4 shrink-0">
              <div className="relative flex items-center w-full h-12 bg-[var(--hc-input-bg)] border border-[var(--hc-border)] rounded-xl px-3 focus-within:border-[#00b1c7] transition-colors">
                <Search size={18} className="text-[var(--hc-text-muted)]" />
                <input 
                  type="text" 
                  placeholder="Search pairs..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-full bg-transparent outline-none pl-3 text-sm text-[var(--hc-text)]"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-8 no-scrollbar">
              <div className="flex flex-col gap-2">
                {MARKETS.map((market) => (
                  <button 
                    key={market.pair}
                    onClick={closeDrawer}
                    className="flex items-center justify-between p-4 rounded-xl bg-[var(--hc-surface)] border border-[var(--hc-border)] hover:border-[#00b1c7] active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Star size={18} className="text-[var(--hc-text-muted)]" />
                      <span className="font-bold text-[var(--hc-text)]">{market.pair}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-medium text-[var(--hc-text)]">{market.price}</span>
                      <span className={`text-xs ${market.change.startsWith('+') ? 'text-[#09977e]' : 'text-[#f26d60]'}`}>
                        {market.change}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </DrawerContainer>
        )}

        {/* Tools Grid Drawer */}
        {activeDrawer === "tools" && (
          <DrawerContainer className="h-[60vh]">
            <div className="px-5 pb-4 flex items-center justify-between shrink-0">
              <h2 className="text-xl font-bold text-[var(--hc-text)]">Drawing Tools</h2>
              <button onClick={closeDrawer} className="p-2 text-[var(--hc-text-secondary)] bg-[var(--hc-hover-bg)] rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-5 pb-8 no-scrollbar">
              <div className="grid grid-cols-3 gap-3">
                {DRAWING_TOOLS.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => {
                      onToolSelect(tool.id);
                      closeDrawer();
                    }}
                    className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all ${
                      activeTool === tool.id 
                        ? "bg-[#dcf5f7] border-[#00b1c7] text-[#00b1c7] dark:bg-[rgba(0,178,200,0.15)]" 
                        : "bg-[var(--hc-surface)] border-[var(--hc-border)] text-[var(--hc-text)] hover:border-[#00b1c7]/50"
                    }`}
                  >
                    <div className={activeTool === tool.id ? "text-[#00b1c7]" : "text-[var(--hc-text-secondary)]"}>
                      {tool.icon}
                    </div>
                    <span className="text-[11px] font-medium text-center leading-tight">
                      {tool.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </DrawerContainer>
        )}

        {/* Analysis Hub / More Menu Drawer */}
        {activeDrawer === "hub" && (
          <DrawerContainer className="h-[auto] max-h-[85vh]">
            <div className="px-5 pb-4 flex items-center justify-between shrink-0">
              <h2 className="text-xl font-bold text-[var(--hc-text)]">Analysis Hub</h2>
              <button onClick={closeDrawer} className="p-2 text-[var(--hc-text-secondary)] bg-[var(--hc-hover-bg)] rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <div className="px-5 pb-8 flex flex-col gap-2">
              <HubAction icon={<LineChart />} title="Indicators" subtitle="Add technical indicators" />
              <HubAction icon={<Clock />} title="Alerts" subtitle="Manage price alerts" />
              <HubAction icon={<Maximize />} title="Full Screen" subtitle="Enter immersive mode" />
              <div className="h-px bg-[var(--hc-border)] my-2" />
              <HubAction icon={<Settings />} title="Chart Settings" subtitle="Colors, scales, margins" />
            </div>
          </DrawerContainer>
        )}
      </AnimatePresence>
    </>
  );
}

function HubAction({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <button className="flex items-center gap-4 p-4 w-full rounded-xl bg-[var(--hc-surface)] hover:bg-[var(--hc-hover-bg)] border border-transparent hover:border-[var(--hc-border)] transition-colors text-left group">
      <div className="w-10 h-10 rounded-full bg-[var(--hc-input-bg)] flex items-center justify-center text-[var(--hc-text-secondary)] group-hover:text-[#00b1c7] group-hover:bg-[#dcf5f7] dark:group-hover:bg-[rgba(0,178,200,0.15)] transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-[var(--hc-text)] text-sm">{title}</h4>
        <p className="text-[var(--hc-text-secondary)] text-xs mt-0.5">{subtitle}</p>
      </div>
    </button>
  );
}