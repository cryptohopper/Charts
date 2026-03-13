import { useEffect, useMemo, useRef, useState } from "react";

export interface TradingPair {
  symbol: string;
  base: string;
  quote: string;
  description: string;
  exchange: string;
  lastPrice: number;
  change: number;
  type: "crypto" | "forex" | "stock";
}

const MOCK_PAIRS: TradingPair[] = [
  { symbol: "BTC/USDT", base: "BTC", quote: "USDT", description: "Bitcoin / Tether", exchange: "BINANCE", lastPrice: 82654.0, change: 1.24, type: "crypto" },
  { symbol: "ETH/USDT", base: "ETH", quote: "USDT", description: "Ethereum / Tether", exchange: "BINANCE", lastPrice: 4222.15, change: -0.87, type: "crypto" },
  { symbol: "SOL/USDT", base: "SOL", quote: "USDT", description: "Solana / Tether", exchange: "BINANCE", lastPrice: 182.67, change: 5.23, type: "crypto" },
  { symbol: "XRP/USDT", base: "XRP", quote: "USDT", description: "Ripple / Tether", exchange: "BINANCE", lastPrice: 0.5842, change: 3.41, type: "crypto" },
  { symbol: "BTC/USD", base: "BTC", quote: "USD", description: "Bitcoin / U.S. Dollar", exchange: "COINBASE", lastPrice: 82654.0, change: 0.94, type: "crypto" },
  { symbol: "ETH/USD", base: "ETH", quote: "USD", description: "Ethereum / U.S. Dollar", exchange: "COINBASE", lastPrice: 4228.13, change: -0.44, type: "crypto" },
  { symbol: "SOL/USD", base: "SOL", quote: "USD", description: "Solana / U.S. Dollar", exchange: "COINBASE", lastPrice: 181.42, change: 2.11, type: "crypto" },
  { symbol: "DOGE/USD", base: "DOGE", quote: "USD", description: "Dogecoin / U.S. Dollar", exchange: "COINBASE", lastPrice: 0.0832, change: -3.27, type: "crypto" },
  { symbol: "BTC/USD", base: "BTC", quote: "USD", description: "Bitcoin / U.S. Dollar", exchange: "KRAKEN", lastPrice: 82620.25, change: 1.12, type: "crypto" },
  { symbol: "ETH/USD", base: "ETH", quote: "USD", description: "Ethereum / U.S. Dollar", exchange: "KRAKEN", lastPrice: 4219.8, change: -0.12, type: "crypto" },
  { symbol: "XRP/USD", base: "XRP", quote: "USD", description: "Ripple / U.S. Dollar", exchange: "KRAKEN", lastPrice: 0.5921, change: 1.07, type: "crypto" },
  { symbol: "ADA/USDT", base: "ADA", quote: "USDT", description: "Cardano / Tether", exchange: "KUCOIN", lastPrice: 0.4521, change: -1.56, type: "crypto" },
  { symbol: "TON/USDT", base: "TON", quote: "USDT", description: "Toncoin / Tether", exchange: "KUCOIN", lastPrice: 4.912, change: 1.89, type: "crypto" },
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
  BTC: "#F7931A",
  ETH: "#627EEA",
  XRP: "#23292F",
  SOL: "#9945FF",
  ADA: "#0033AD",
  DOGE: "#C2A633",
  TON: "#0098EA",
};

function CoinIcon({ symbol, size = 24 }: { symbol: string; size?: number }) {
  const color = COIN_COLORS[symbol] || "#8e8e93";
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full"
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
      window.setTimeout(() => searchInputRef.current?.focus(), 50);
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
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const filtered = useMemo(() => {
    let items = MOCK_PAIRS;
    if (activeTab !== "all") items = items.filter((pair) => pair.type === activeTab);
    if (search.trim()) {
      const query = search.toLowerCase();
      items = items.filter(
        (pair) =>
          pair.symbol.toLowerCase().includes(query)
          || pair.description.toLowerCase().includes(query)
          || pair.exchange.toLowerCase().includes(query),
      );
    }
    return items;
  }, [activeTab, search]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="absolute left-0 top-[44px] z-50 flex flex-col rounded-lg"
      style={{
        width: 680,
        maxHeight: "min(580px, calc(100vh - 100px))",
        backgroundColor: "var(--hc-modal-bg)",
        border: "1px solid var(--hc-border)",
        boxShadow: "var(--hc-shadow)",
      }}
    >
      <div className="shrink-0 px-[16px] pb-[8px] pt-[16px]">
        <div
          className="flex h-[40px] items-center gap-[8px] rounded-md px-[12px]"
          style={{ backgroundColor: "var(--hc-hover-bg)" }}
        >
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
            className="flex-1 bg-transparent text-[14px] font-['Source_Sans_3',sans-serif] outline-none"
            style={{ color: "var(--hc-text)" }}
          />
          {search ? (
            <button onClick={() => setSearch("")} className="shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 3L11 11M11 3L3 11" stroke="var(--hc-text-secondary)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-[4px] px-[16px] pb-[8px]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="rounded-md px-[12px] py-[6px] text-[13px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{
              backgroundColor: activeTab === tab.id ? "var(--hc-accent-bg)" : undefined,
              color: activeTab === tab.id ? "#00b1c7" : "var(--hc-text-secondary)",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = "var(--hc-hover-bg)";
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = "";
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mx-[16px] h-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

      <div
        className="grid items-center px-[16px] py-[8px] shrink-0"
        style={{ gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 1fr)" }}
      >
        {["Symbol", "Description", "Exchange", "Last Price", "Chg %"].map((header, index) => (
          <span
            key={header}
            className={`text-[12px] font-['Source_Sans_3',sans-serif] ${index >= 3 ? "text-right" : ""}`}
            style={{ color: "var(--hc-text-muted)" }}
          >
            {header}
          </span>
        ))}
      </div>

      <div className="mx-[16px] h-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />

      <div className="min-h-0 flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center py-[40px]">
            <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
              No results found
            </span>
          </div>
        ) : (
          filtered.map((pair) => {
            const isSelected = pair.symbol === selectedSymbol;
            const isUp = pair.change >= 0;
            return (
              <button
                key={`${pair.symbol}-${pair.exchange}`}
                onClick={() => {
                  onSelect(pair);
                  onClose();
                }}
                className="grid w-full cursor-pointer items-center px-[16px] py-[10px] transition-colors"
                style={{
                  gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 1fr)",
                  backgroundColor: isSelected ? "var(--hc-selected-bg)" : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = "var(--hc-hover-bg)";
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = "";
                }}
              >
                <div className="flex items-center gap-[8px]">
                  <CoinIcon symbol={pair.base} size={22} />
                  <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: isSelected ? "#00b1c7" : "var(--hc-text)" }}>
                    {pair.symbol}
                  </span>
                </div>
                <span className="truncate text-left text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-secondary)" }}>
                  {pair.description}
                </span>
                <span className="text-left text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-secondary)" }}>
                  {pair.exchange}
                </span>
                <span className="text-right text-[14px] tabular-nums font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
                  {pair.lastPrice < 1
                    ? pair.lastPrice.toFixed(4)
                    : pair.lastPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <div className="flex justify-end">
                  <span className={`rounded px-[6px] py-[2px] text-[13px] tabular-nums font-['Source_Sans_3',sans-serif] ${isUp ? "bg-[#09977e]/8 text-[#09977e]" : "bg-[#f26d60]/8 text-[#f26d60]"}`}>
                    {isUp ? "+" : ""}
                    {pair.change.toFixed(2)}%
                  </span>
                </div>
              </button>
            );
          })
        )}
      </div>

      <div className="mx-[16px] h-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />
      <div className="flex shrink-0 items-center justify-between px-[16px] py-[10px]">
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </span>
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
          Press <kbd className="rounded px-[4px] py-[1px] text-[11px]" style={{ backgroundColor: "var(--hc-kbd-bg)", border: "1px solid var(--hc-border)" }}>ESC</kbd> to close
        </span>
      </div>
    </div>
  );
}
