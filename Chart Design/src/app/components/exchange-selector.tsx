import { useState, useMemo, useRef, useEffect } from "react";

export interface Exchange {
  id: string;
  name: string;
  color: string;
  letterIcon: string;
  status: "connected" | "available" | "coming_soon";
  pairs: number;
  type: "cex" | "dex";
}

const EXCHANGES: Exchange[] = [
  { id: "bitpanda", name: "Bitpanda", color: "#076CDB", letterIcon: "B", status: "connected", pairs: 214, type: "cex" },
  { id: "binance", name: "Binance", color: "#F0B90B", letterIcon: "B", status: "available", pairs: 1642, type: "cex" },
  { id: "coinbase", name: "Coinbase Pro", color: "#0052FF", letterIcon: "C", status: "available", pairs: 534, type: "cex" },
  { id: "kraken", name: "Kraken", color: "#5741D9", letterIcon: "K", status: "available", pairs: 687, type: "cex" },
  { id: "kucoin", name: "KuCoin", color: "#23AF91", letterIcon: "K", status: "available", pairs: 1205, type: "cex" },
  { id: "bitvavo", name: "Bitvavo", color: "#2962FF", letterIcon: "B", status: "available", pairs: 231, type: "cex" },
  { id: "okx", name: "OKX", color: "#000000", letterIcon: "O", status: "available", pairs: 892, type: "cex" },
  { id: "bybit", name: "Bybit", color: "#F7A600", letterIcon: "B", status: "available", pairs: 756, type: "cex" },
  { id: "huobi", name: "HTX (Huobi)", color: "#1C6EF2", letterIcon: "H", status: "available", pairs: 1034, type: "cex" },
  { id: "gateio", name: "Gate.io", color: "#2354E6", letterIcon: "G", status: "available", pairs: 1876, type: "cex" },
  { id: "bitfinex", name: "Bitfinex", color: "#16B157", letterIcon: "B", status: "available", pairs: 412, type: "cex" },
  { id: "poloniex", name: "Poloniex", color: "#00E07B", letterIcon: "P", status: "available", pairs: 345, type: "cex" },
  { id: "crypto_com", name: "Crypto.com", color: "#002D74", letterIcon: "C", status: "available", pairs: 478, type: "cex" },
  { id: "bitget", name: "Bitget", color: "#00B2A9", letterIcon: "B", status: "available", pairs: 623, type: "cex" },
  { id: "mexc", name: "MEXC", color: "#1972E2", letterIcon: "M", status: "available", pairs: 1432, type: "cex" },
  { id: "uniswap", name: "Uniswap", color: "#FF007A", letterIcon: "U", status: "available", pairs: 2100, type: "dex" },
  { id: "pancakeswap", name: "PancakeSwap", color: "#D1884F", letterIcon: "P", status: "available", pairs: 1800, type: "dex" },
  { id: "sushiswap", name: "SushiSwap", color: "#FA52A0", letterIcon: "S", status: "coming_soon", pairs: 920, type: "dex" },
];

const TABS = [
  { id: "all", label: "All" },
  { id: "cex", label: "Centralized" },
  { id: "dex", label: "Decentralized" },
];

interface ExchangeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedExchange: string;
  onSelect: (exchange: Exchange) => void;
}

function ExchangeLogo({ exchange, size = 28 }: { exchange: Exchange; size?: number }) {
  return (
    <div className="rounded-full flex items-center justify-center shrink-0" style={{ width: size, height: size, backgroundColor: exchange.color }}>
      <span className="text-white font-['Source_Sans_3',sans-serif] font-semibold" style={{ fontSize: size * 0.43 }}>{exchange.letterIcon}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: Exchange["status"] }) {
  switch (status) {
    case "connected":
      return (
        <span className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-full bg-[#09977e]/10 text-[#09977e] text-[11px] font-['Source_Sans_3',sans-serif]">
          <span className="w-[6px] h-[6px] rounded-full bg-[#09977e]" />
          Connected
        </span>
      );
    case "coming_soon":
      return (
        <span className="px-[8px] py-[3px] rounded-full text-[11px] font-['Source_Sans_3',sans-serif]" style={{ backgroundColor: 'var(--hc-surface-active)', color: 'var(--hc-text-muted)' }}>
          Coming Soon
        </span>
      );
    default:
      return null;
  }
}

export function ExchangeSelector({ isOpen, onClose, selectedExchange, onSelect }: ExchangeSelectorProps) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
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

  const filtered = useMemo(() => {
    let items = EXCHANGES;
    if (activeTab !== "all") items = items.filter((e) => e.type === activeTab);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((e) => e.name.toLowerCase().includes(q));
    }
    const order = { connected: 0, available: 1, coming_soon: 2 };
    items = [...items].sort((a, b) => order[a.status] - order[b.status]);
    return items;
  }, [activeTab, search]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="absolute top-[44px] left-0 z-50 rounded-lg flex flex-col"
      style={{ width: 420, maxHeight: "min(560px, calc(100vh - 100px))", backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[16px] pt-[16px] pb-[4px] shrink-0">
        <span className="text-[15px] font-['Source_Sans_3',sans-serif] font-semibold" style={{ color: 'var(--hc-text)' }}>Select Exchange</span>
        <button onClick={onClose} className="w-[24px] h-[24px] flex items-center justify-center rounded transition-colors">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 2L10 10M10 2L2 10" stroke="var(--hc-text-secondary)" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Search bar */}
      <div className="px-[16px] pt-[8px] pb-[8px] shrink-0">
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
            placeholder="Search exchange..."
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

      {/* Tabs */}
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

      {/* Exchange list */}
      <div className="flex-1 overflow-y-auto min-h-0 py-[4px]">
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center py-[40px]">
            <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>No exchanges found</span>
          </div>
        ) : (
          filtered.map((exchange) => {
            const isSelected = exchange.id === selectedExchange;
            const isDisabled = exchange.status === "coming_soon";
            return (
              <button
                key={exchange.id}
                disabled={isDisabled}
                onClick={() => { if (!isDisabled) { onSelect(exchange); onClose(); } }}
                className={`w-full flex items-center gap-[12px] px-[16px] py-[10px] transition-colors ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                style={{ backgroundColor: isSelected ? 'var(--hc-selected-bg)' : undefined }}
                onMouseEnter={(e) => { if (!isDisabled && !isSelected) e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'; }}
                onMouseLeave={(e) => { if (!isDisabled && !isSelected) e.currentTarget.style.backgroundColor = isSelected ? 'var(--hc-selected-bg)' : ''; }}
              >
                <ExchangeLogo exchange={exchange} size={32} />
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-[6px]">
                    <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: isSelected ? '#00b1c7' : 'var(--hc-text)' }}>
                      {exchange.name}
                    </span>
                    {isSelected && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#00b1c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>
                    {exchange.pairs.toLocaleString()} trading pairs
                  </span>
                </div>
                <div className="shrink-0">
                  <StatusBadge status={exchange.status} />
                  {exchange.status === "available" && !isSelected && (
                    <span className="px-[8px] py-[3px] rounded-full text-[11px] font-['Source_Sans_3',sans-serif] transition-colors" style={{ backgroundColor: 'var(--hc-hover-bg)', color: 'var(--hc-text-secondary)' }}>
                      Connect
                    </span>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>

      <div className="h-px mx-[16px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />
      <div className="flex items-center justify-between px-[16px] py-[10px] shrink-0">
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>
          {filtered.length} {filtered.length === 1 ? "exchange" : "exchanges"}
        </span>
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-muted)' }}>
          Press <kbd className="px-[4px] py-[1px] rounded text-[11px]" style={{ backgroundColor: 'var(--hc-kbd-bg)', border: '1px solid var(--hc-border)' }}>ESC</kbd> to close
        </span>
      </div>
    </div>
  );
}
