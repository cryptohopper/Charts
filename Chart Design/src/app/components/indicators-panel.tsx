import { useState, useMemo, useRef, useEffect } from "react";

export interface Indicator {
  id: string;
  name: string;
  shortName: string;
  description: string;
  category: IndicatorCategory;
}

type IndicatorCategory = "trend" | "oscillators" | "volatility" | "volume" | "moving_averages" | "custom";

const CATEGORY_LABELS: Record<IndicatorCategory, string> = {
  trend: "Trend",
  oscillators: "Oscillators",
  volatility: "Volatility",
  volume: "Volume",
  moving_averages: "Moving Averages",
  custom: "Custom",
};

const SIDEBAR_ITEMS = [
  { id: "favorites", label: "Favorites", icon: "star" },
  { id: "all", label: "Technicals", icon: "technicals" },
  { id: "trend", label: "Trend", icon: "trend" },
  { id: "oscillators", label: "Oscillators", icon: "oscillators" },
  { id: "volatility", label: "Volatility", icon: "volatility" },
  { id: "volume", label: "Volume", icon: "volume" },
  { id: "moving_averages", label: "Moving Averages", icon: "ma" },
  { id: "custom", label: "Custom", icon: "custom" },
] as const;

const MOCK_INDICATORS: Indicator[] = [
  { id: "sma", name: "Simple Moving Average", shortName: "SMA", description: "Calculates the average price over a set number of periods", category: "moving_averages" },
  { id: "ema", name: "Exponential Moving Average", shortName: "EMA", description: "A weighted moving average giving more weight to recent prices", category: "moving_averages" },
  { id: "wma", name: "Weighted Moving Average", shortName: "WMA", description: "Assigns linearly increasing weights to more recent data", category: "moving_averages" },
  { id: "dema", name: "Double Exponential Moving Average", shortName: "DEMA", description: "Reduces lag compared to a single EMA", category: "moving_averages" },
  { id: "tema", name: "Triple Exponential Moving Average", shortName: "TEMA", description: "Attempts to remove lag inherent in standard moving averages", category: "moving_averages" },
  { id: "vwma", name: "Volume Weighted Moving Average", shortName: "VWMA", description: "Weighted average price based on volume", category: "moving_averages" },
  { id: "rsi", name: "Relative Strength Index", shortName: "RSI", description: "Measures the speed and magnitude of price changes", category: "oscillators" },
  { id: "macd", name: "Moving Average Convergence Divergence", shortName: "MACD", description: "Shows the relationship between two moving averages", category: "oscillators" },
  { id: "stoch", name: "Stochastic Oscillator", shortName: "Stoch", description: "Compares closing price to the range over a given period", category: "oscillators" },
  { id: "stochrsi", name: "Stochastic RSI", shortName: "StochRSI", description: "Applies the Stochastic formula to RSI values", category: "oscillators" },
  { id: "cci", name: "Commodity Channel Index", shortName: "CCI", description: "Measures current price relative to the average price over a period", category: "oscillators" },
  { id: "williams", name: "Williams %R", shortName: "%R", description: "Oscillator showing the current closing price relative to the high-low range", category: "oscillators" },
  { id: "mfi", name: "Money Flow Index", shortName: "MFI", description: "Volume-weighted RSI measuring buying and selling pressure", category: "oscillators" },
  { id: "apo", name: "Absolute Price Oscillator", shortName: "APO", description: "Shows the difference between a fast and slow exponential moving average", category: "oscillators" },
  { id: "ao", name: "Awesome Oscillator", shortName: "AO", description: "Measures market momentum using the difference of 5 and 34 period simple moving averages of median price", category: "oscillators" },
  { id: "abands", name: "Acceleration Bands", shortName: "ABands", description: "Plots upper and lower bands based on the acceleration factor around a moving average", category: "volatility" },
  { id: "bb", name: "Bollinger Bands", shortName: "BB", description: "Plots upper and lower bands at standard deviations from a moving average", category: "volatility" },
  { id: "atr", name: "Average True Range", shortName: "ATR", description: "Measures market volatility over a given period", category: "volatility" },
  { id: "kc", name: "Keltner Channels", shortName: "KC", description: "Volatility-based bands set above and below an EMA", category: "volatility" },
  { id: "dc", name: "Donchian Channels", shortName: "DC", description: "Plots the highest high and lowest low over N periods", category: "volatility" },
  { id: "stddev", name: "Standard Deviation", shortName: "StdDev", description: "Measures the dispersion of price data from its mean", category: "volatility" },
  { id: "obv", name: "On-Balance Volume", shortName: "OBV", description: "Uses volume flow to predict price changes", category: "volume" },
  { id: "vwap", name: "Volume Weighted Average Price", shortName: "VWAP", description: "The average price weighted by volume for the day", category: "volume" },
  { id: "ad", name: "Accumulation/Distribution", shortName: "A/D", description: "Assesses cumulative flow of money into and out of a security", category: "volume" },
  { id: "cmf", name: "Chaikin Money Flow", shortName: "CMF", description: "Measures volume-weighted average of accumulation and distribution", category: "volume" },
  { id: "adx", name: "Average Directional Index", shortName: "ADX", description: "Measures the strength of a trend regardless of direction", category: "trend" },
  { id: "ichimoku", name: "Ichimoku Cloud", shortName: "Ichimoku", description: "A comprehensive indicator showing support/resistance, momentum, and trend direction", category: "trend" },
  { id: "psar", name: "Parabolic SAR", shortName: "PSAR", description: "Used to determine the direction of an asset's momentum and reversal points", category: "trend" },
  { id: "supertrend", name: "Supertrend", shortName: "ST", description: "Trend-following indicator based on ATR", category: "trend" },
  { id: "aroon", name: "Aroon", shortName: "Aroon", description: "Identifies trend changes and the strength of a trend", category: "trend" },
  { id: "dmi", name: "Directional Movement Index", shortName: "DMI", description: "Shows whether a security is trending and the direction of the trend", category: "trend" },
];

function SidebarIcon({ type }: { type: string }) {
  switch (type) {
    case "star":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L9.8 5.2L14 5.8L11 8.7L11.7 12.9L8 11L4.3 12.9L5 8.7L2 5.8L6.2 5.2L8 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /></svg>);
    case "technicals":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12L5.5 6.5L9 9L14 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
    case "trend":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 13L14 3M14 3H9M14 3V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
    case "oscillators":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8C3 4 5 12 8 8C11 4 13 12 15 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>);
    case "volatility":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H4L6 3L8 13L10 5L12 10L14 8H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
    case "volume":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="7" width="2.5" height="7" rx="0.5" stroke="currentColor" strokeWidth="1" /><rect x="6" y="3" width="2.5" height="11" rx="0.5" stroke="currentColor" strokeWidth="1" /><rect x="10" y="5" width="2.5" height="9" rx="0.5" stroke="currentColor" strokeWidth="1" /></svg>);
    case "ma":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 12C4 10 6 4 8 6C10 8 12 3 15 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><path d="M1 13C4 11.5 7 7 9 8C11 9 13 5 15 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" /></svg>);
    case "custom":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>);
    default:
      return null;
  }
}

interface IndicatorsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  activeIndicators: string[];
  onToggleIndicator: (id: string) => void;
}

export function IndicatorsPanel({
  isOpen,
  onClose,
  activeIndicators,
  onToggleIndicator,
}: IndicatorsPanelProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set(["rsi", "macd", "bb", "ema"]));
  const panelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) { setTimeout(() => searchInputRef.current?.focus(), 50); } else { setSearch(""); }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => { if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose(); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let items = MOCK_INDICATORS;
    if (activeCategory === "favorites") items = items.filter((i) => favorites.has(i.id));
    else if (activeCategory !== "all") items = items.filter((i) => i.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((i) => i.name.toLowerCase().includes(q) || i.shortName.toLowerCase().includes(q) || i.description.toLowerCase().includes(q));
    }
    return items;
  }, [activeCategory, search, favorites]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="absolute top-[44px] left-0 z-50 rounded-lg flex overflow-hidden"
      style={{ width: 720, height: "min(560px, calc(100vh - 100px))", backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
    >
      {/* LEFT SIDEBAR */}
      <div className="w-[180px] flex flex-col shrink-0" style={{ backgroundColor: 'var(--hc-modal-header)', borderRight: '1px solid var(--hc-border)' }}>
        <div className="px-[16px] pt-[16px] pb-[12px] shrink-0">
          <span className="text-[15px] font-['Source_Sans_3',sans-serif] font-semibold" style={{ color: 'var(--hc-text)' }}>Indicators</span>
        </div>
        <div className="flex-1 overflow-y-auto px-[8px] pb-[8px]">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = activeCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
                className="w-full flex items-center gap-[10px] px-[10px] py-[8px] rounded-md text-left transition-colors mb-[2px]"
                style={{
                  backgroundColor: isActive ? 'var(--hc-accent-bg)' : undefined,
                  color: isActive ? '#00b1c7' : 'var(--hc-text-secondary)',
                }}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.backgroundColor = 'var(--hc-surface-active)'; e.currentTarget.style.color = 'var(--hc-text)'; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--hc-text-secondary)'; } }}
              >
                <SidebarIcon type={item.icon} />
                <span className="text-[13px] font-['Source_Sans_3',sans-serif]">{item.label}</span>
                {item.id === "favorites" && favorites.size > 0 && (
                  <span className="ml-auto text-[11px] font-['Source_Sans_3',sans-serif]" style={{ color: isActive ? '#00b1c7' : 'var(--hc-text-muted)' }}>
                    {favorites.size}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Search bar */}
        <div className="px-[16px] pt-[16px] pb-[10px] shrink-0">
          <div className="flex items-center gap-[8px] h-[40px] rounded-md px-[12px]" style={{ backgroundColor: 'var(--hc-hover-bg)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <circle cx="7" cy="7" r="5.5" stroke="var(--hc-text-secondary)" strokeWidth="1.2" />
              <path d="M11.5 11.5L14.5 14.5" stroke="var(--hc-text-secondary)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search indicators..."
              className="flex-1 bg-transparent outline-none text-[14px] font-['Source_Sans_3',sans-serif]"
              style={{ color: 'var(--hc-text)' }}
            />
            {search && (
              <button onClick={() => setSearch("")} className="shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3L11 11M11 3L3 11" stroke="var(--hc-text-secondary)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category heading */}
        <div className="flex items-center justify-between px-[16px] pb-[8px] shrink-0">
          <span className="text-[12px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider" style={{ color: 'var(--hc-text-muted)' }}>
            {activeCategory === "all" ? "All Indicators" : activeCategory === "favorites" ? "Favorites" : CATEGORY_LABELS[activeCategory as IndicatorCategory] ?? activeCategory}
          </span>
          <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>
            {filtered.length} {filtered.length === 1 ? "indicator" : "indicators"}
          </span>
        </div>

        <div className="h-px mx-[16px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

        {/* Indicator list */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-[48px] gap-[8px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="14" cy="14" r="10" stroke="var(--hc-border)" strokeWidth="2" />
                <path d="M22 22L28 28" stroke="var(--hc-border)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>No indicators found</span>
            </div>
          ) : (
            filtered.map((indicator) => {
              const isActive = activeIndicators.includes(indicator.id);
              const isFav = favorites.has(indicator.id);
              return (
                <div
                  key={indicator.id}
                  className="flex items-center px-[16px] py-[10px] gap-[12px] transition-colors"
                  style={{ backgroundColor: isActive ? 'var(--hc-selected-bg)' : undefined }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = isActive ? 'var(--hc-selected-bg)' : ''; }}
                >
                  {/* Favorite star */}
                  <button onClick={() => toggleFavorite(indicator.id)} className="shrink-0 w-[20px] h-[20px] flex items-center justify-center">
                    {isFav ? (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L9.8 5.2L14 5.8L11 8.7L11.7 12.9L8 11L4.3 12.9L5 8.7L2 5.8L6.2 5.2L8 1.5Z" fill="#F5A623" stroke="#F5A623" strokeWidth="1" strokeLinejoin="round" /></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L9.8 5.2L14 5.8L11 8.7L11.7 12.9L8 11L4.3 12.9L5 8.7L2 5.8L6.2 5.2L8 1.5Z" stroke="var(--hc-text-muted)" strokeWidth="1" strokeLinejoin="round" /></svg>
                    )}
                  </button>

                  {/* Icon */}
                  <div className="w-[32px] h-[32px] rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: isActive ? 'rgba(0,177,199,0.1)' : 'var(--hc-surface-active)' }}>
                    <span className="text-[11px] font-['Source_Sans_3',sans-serif] font-semibold" style={{ color: isActive ? '#00b1c7' : 'var(--hc-text-secondary)' }}>
                      {indicator.shortName.slice(0, 4)}
                    </span>
                  </div>

                  {/* Name + description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[6px]">
                      <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: isActive ? '#00b1c7' : 'var(--hc-text)' }}>{indicator.name}</span>
                      <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>{indicator.shortName}</span>
                    </div>
                    <p className="text-[12px] font-['Source_Sans_3',sans-serif] truncate mt-[1px]" style={{ color: 'var(--hc-text-secondary)' }}>{indicator.description}</p>
                  </div>

                  {/* Add / Remove button */}
                  <button
                    onClick={() => onToggleIndicator(indicator.id)}
                    className="shrink-0 px-[12px] h-[30px] rounded-md text-[13px] font-['Source_Sans_3',sans-serif] transition-colors"
                    style={{
                      backgroundColor: isActive ? '#00b1c7' : 'var(--hc-surface-active)',
                      color: isActive ? 'white' : 'var(--hc-text)',
                    }}
                  >
                    {isActive ? (
                      <span className="flex items-center gap-[4px]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Added
                      </span>
                    ) : (
                      <span className="flex items-center gap-[4px]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2V10M2 6H10" stroke="var(--hc-text)" strokeWidth="1.2" strokeLinecap="round" /></svg>
                        Add
                      </span>
                    )}
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="h-px mx-[16px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />
        <div className="flex items-center justify-between px-[16px] py-[10px] shrink-0">
          <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>
            {activeIndicators.length} active {activeIndicators.length === 1 ? "indicator" : "indicators"}
          </span>
          <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>
            Press <kbd className="px-[4px] py-[1px] rounded text-[11px]" style={{ backgroundColor: 'var(--hc-kbd-bg)', border: '1px solid var(--hc-border)' }}>ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
