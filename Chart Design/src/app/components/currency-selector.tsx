import { useState, useMemo, useRef, useEffect } from "react";

export interface TradingPair {
  symbol: string;
  base: string;
  quote: string;
  description: string;
  exchange: string;
  lastPrice: number;
  change: number;
  type: "crypto" | "forex" | "stock" | "index" | "futures";
}

const MOCK_PAIRS: TradingPair[] = [
  { symbol: "BTC/USD", base: "BTC", quote: "USD", description: "Bitcoin / U.S. Dollar", exchange: "COINBASE", lastPrice: 10654.00, change: 1.24, type: "crypto" },
  { symbol: "ETH/USD", base: "ETH", quote: "USD", description: "Ethereum / U.S. Dollar", exchange: "COINBASE", lastPrice: 3422.15, change: -0.87, type: "crypto" },
  { symbol: "BTC/EUR", base: "BTC", quote: "EUR", description: "Bitcoin / Euro", exchange: "KRAKEN", lastPrice: 9812.50, change: 1.12, type: "crypto" },
  { symbol: "ETH/BTC", base: "ETH", quote: "BTC", description: "Ethereum / Bitcoin", exchange: "BINANCE", lastPrice: 0.0541, change: -2.14, type: "crypto" },
  { symbol: "XRP/USD", base: "XRP", quote: "USD", description: "Ripple / U.S. Dollar", exchange: "BINANCE", lastPrice: 0.5842, change: 3.41, type: "crypto" },
  { symbol: "SOL/USD", base: "SOL", quote: "USD", description: "Solana / U.S. Dollar", exchange: "COINBASE", lastPrice: 142.67, change: 5.23, type: "crypto" },
  { symbol: "ADA/USD", base: "ADA", quote: "USD", description: "Cardano / U.S. Dollar", exchange: "KRAKEN", lastPrice: 0.4521, change: -1.56, type: "crypto" },
  { symbol: "DOT/USD", base: "DOT", quote: "USD", description: "Polkadot / U.S. Dollar", exchange: "BINANCE", lastPrice: 7.34, change: 2.18, type: "crypto" },
  { symbol: "DOGE/USD", base: "DOGE", quote: "USD", description: "Dogecoin / U.S. Dollar", exchange: "BINANCE", lastPrice: 0.0832, change: -3.27, type: "crypto" },
  { symbol: "LINK/USD", base: "LINK", quote: "USD", description: "Chainlink / U.S. Dollar", exchange: "COINBASE", lastPrice: 14.58, change: 0.95, type: "crypto" },
  { symbol: "AVAX/USD", base: "AVAX", quote: "USD", description: "Avalanche / U.S. Dollar", exchange: "COINBASE", lastPrice: 35.21, change: 4.67, type: "crypto" },
  { symbol: "MATIC/USD", base: "MATIC", quote: "USD", description: "Polygon / U.S. Dollar", exchange: "BINANCE", lastPrice: 0.8912, change: -0.34, type: "crypto" },
  { symbol: "UNI/USD", base: "UNI", quote: "USD", description: "Uniswap / U.S. Dollar", exchange: "COINBASE", lastPrice: 6.78, change: 1.89, type: "crypto" },
  { symbol: "LTC/USD", base: "LTC", quote: "USD", description: "Litecoin / U.S. Dollar", exchange: "KRAKEN", lastPrice: 72.45, change: -0.12, type: "crypto" },
  { symbol: "ATOM/USD", base: "ATOM", quote: "USD", description: "Cosmos / U.S. Dollar", exchange: "KRAKEN", lastPrice: 9.34, change: 2.56, type: "crypto" },
  { symbol: "EUR/USD", base: "EUR", quote: "USD", description: "Euro / U.S. Dollar", exchange: "OANDA", lastPrice: 1.0842, change: 0.12, type: "forex" },
  { symbol: "GBP/USD", base: "GBP", quote: "USD", description: "British Pound / U.S. Dollar", exchange: "OANDA", lastPrice: 1.2634, change: -0.08, type: "forex" },
  { symbol: "USD/JPY", base: "USD", quote: "JPY", description: "U.S. Dollar / Japanese Yen", exchange: "OANDA", lastPrice: 149.82, change: 0.34, type: "forex" },
  { symbol: "AAPL", base: "AAPL", quote: "USD", description: "Apple Inc.", exchange: "NASDAQ", lastPrice: 178.72, change: 1.45, type: "stock" },
  { symbol: "GOOGL", base: "GOOGL", quote: "USD", description: "Alphabet Inc.", exchange: "NASDAQ", lastPrice: 141.80, change: -0.62, type: "stock" },
  { symbol: "TSLA", base: "TSLA", quote: "USD", description: "Tesla, Inc.", exchange: "NASDAQ", lastPrice: 248.42, change: 3.21, type: "stock" },
];

const TABS = [
  { id: "all", label: "All" },
  { id: "crypto", label: "Crypto" },
  { id: "forex", label: "Forex" },
  { id: "stock", label: "Stocks" },
];

interface CurrencySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (pair: TradingPair) => void;
  selectedSymbol: string;
}

const COIN_COLORS: Record<string, string> = {
  BTC: "#F7931A", ETH: "#627EEA", XRP: "#23292F", SOL: "#9945FF",
  ADA: "#0033AD", DOT: "#E6007A", DOGE: "#C2A633", LINK: "#2A5ADA",
  AVAX: "#E84142", MATIC: "#8247E5", UNI: "#FF007A", LTC: "#345D9D",
  ATOM: "#2E3148", EUR: "#003399", GBP: "#012169", USD: "#2E7D32",
  JPY: "#BC002D", AAPL: "#555555", GOOGL: "#4285F4", TSLA: "#CC0000",
};

function CoinIcon({ symbol, size = 24 }: { symbol: string; size?: number }) {
  const color = COIN_COLORS[symbol] || "#8e8e93";
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0"
      style={{ width: size, height: size, backgroundColor: color }}
    >
      <span className="text-white font-['Source_Sans_3',sans-serif]" style={{ fontSize: size * 0.4 }}>
        {symbol.slice(0, 2)}
      </span>
    </div>
  );
}

export function CurrencySelector({ isOpen, onClose, onSelect, selectedSymbol }: CurrencySelectorProps) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const panelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setSearch("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const filtered = useMemo(() => {
    let items = MOCK_PAIRS;
    if (activeTab !== "all") items = items.filter((p) => p.type === activeTab);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((p) =>
        p.symbol.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.exchange.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeTab, search]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="absolute top-[44px] left-0 z-50 rounded-lg flex flex-col"
      style={{ width: 680, maxHeight: "min(580px, calc(100vh - 100px))", backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
    >
      {/* Search bar */}
      <div className="px-[16px] pt-[16px] pb-[8px] shrink-0">
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
            placeholder="Search symbol, name, or exchange..."
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

      {/* Category tabs */}
      <div className="flex items-center gap-[4px] px-[16px] pb-[8px] shrink-0">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="px-[12px] py-[6px] rounded-md text-[13px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{
              backgroundColor: activeTab === tab.id ? 'var(--hc-accent-bg)' : undefined,
              color: activeTab === tab.id ? '#00b1c7' : 'var(--hc-text-secondary)',
            }}
            onMouseEnter={(e) => { if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'; }}
            onMouseLeave={(e) => { if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = ''; }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="h-px mx-[16px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Table header */}
      <div className="grid items-center px-[16px] py-[8px] shrink-0" style={{ gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 1fr)" }}>
        {["Symbol", "Description", "Exchange", "Last Price", "Chg %"].map((h, i) => (
          <span key={h} className={`text-[12px] font-['Source_Sans_3',sans-serif] ${i >= 3 ? "text-right" : ""}`} style={{ color: 'var(--hc-text-muted)' }}>{h}</span>
        ))}
      </div>

      <div className="h-px mx-[16px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Pair list */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center py-[40px]">
            <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>No results found</span>
          </div>
        ) : (
          filtered.map((pair) => {
            const isSelected = pair.symbol === selectedSymbol;
            const isUp = pair.change >= 0;
            return (
              <button
                key={pair.symbol + pair.exchange}
                onClick={() => { onSelect(pair); onClose(); }}
                className="w-full grid items-center px-[16px] py-[10px] transition-colors cursor-pointer"
                style={{
                  gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 1fr)",
                  backgroundColor: isSelected ? 'var(--hc-selected-bg)' : undefined,
                }}
                onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'; }}
                onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = isSelected ? 'var(--hc-selected-bg)' : ''; }}
              >
                <div className="flex items-center gap-[8px]">
                  <CoinIcon symbol={pair.base} size={22} />
                  <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: isSelected ? '#00b1c7' : 'var(--hc-text)' }}>
                    {pair.symbol}
                  </span>
                </div>
                <span className="text-[13px] font-['Source_Sans_3',sans-serif] truncate text-left" style={{ color: 'var(--hc-text-secondary)' }}>{pair.description}</span>
                <span className="text-[13px] font-['Source_Sans_3',sans-serif] text-left" style={{ color: 'var(--hc-text-secondary)' }}>{pair.exchange}</span>
                <span className="text-[14px] font-['Source_Sans_3',sans-serif] text-right tabular-nums" style={{ color: 'var(--hc-text)' }}>
                  {pair.lastPrice < 1 ? pair.lastPrice.toFixed(4) : pair.lastPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <div className="flex justify-end">
                  <span className={`text-[13px] font-['Source_Sans_3',sans-serif] tabular-nums px-[6px] py-[2px] rounded ${isUp ? "text-[#09977e] bg-[#09977e]/8" : "text-[#f26d60] bg-[#f26d60]/8"}`}>
                    {isUp ? "+" : ""}{pair.change.toFixed(2)}%
                  </span>
                </div>
              </button>
            );
          })
        )}
      </div>

      <div className="h-px mx-[16px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />
      <div className="flex items-center justify-between px-[16px] py-[10px] shrink-0">
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </span>
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>
          Press <kbd className="px-[4px] py-[1px] rounded text-[11px]" style={{ backgroundColor: 'var(--hc-kbd-bg)', border: '1px solid var(--hc-border)' }}>ESC</kbd> to close
        </span>
      </div>
    </div>
  );
}
