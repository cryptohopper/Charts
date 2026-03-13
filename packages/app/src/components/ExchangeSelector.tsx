import { useEffect, useMemo, useRef, useState } from "react";

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
  { id: "binance", name: "Binance", color: "#F0B90B", letterIcon: "B", status: "connected", pairs: 1642, type: "cex" },
  { id: "coinbase", name: "Coinbase Pro", color: "#0052FF", letterIcon: "C", status: "available", pairs: 534, type: "cex" },
  { id: "kraken", name: "Kraken", color: "#5741D9", letterIcon: "K", status: "available", pairs: 687, type: "cex" },
  { id: "kucoin", name: "KuCoin", color: "#23AF91", letterIcon: "K", status: "available", pairs: 1205, type: "cex" },
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
    <div
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{ width: size, height: size, backgroundColor: exchange.color }}
    >
      <span className="text-white font-semibold font-['Source_Sans_3',sans-serif]" style={{ fontSize: size * 0.43 }}>
        {exchange.letterIcon}
      </span>
    </div>
  );
}

function StatusBadge({ status }: { status: Exchange["status"] }) {
  if (status === "connected") {
    return (
      <span className="flex items-center gap-[4px] rounded-full bg-[#09977e]/10 px-[8px] py-[3px] text-[11px] text-[#09977e] font-['Source_Sans_3',sans-serif]">
        <span className="h-[6px] w-[6px] rounded-full bg-[#09977e]" />
        Connected
      </span>
    );
  }
  if (status === "coming_soon") {
    return (
      <span
        className="rounded-full px-[8px] py-[3px] text-[11px] font-['Source_Sans_3',sans-serif]"
        style={{ backgroundColor: "var(--hc-surface-active)", color: "var(--hc-text-muted)" }}
      >
        Coming Soon
      </span>
    );
  }
  return null;
}

export function ExchangeSelector({ isOpen, onClose, selectedExchange, onSelect }: ExchangeSelectorProps) {
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
    let items = EXCHANGES;
    if (activeTab !== "all") items = items.filter((exchange) => exchange.type === activeTab);
    if (search.trim()) {
      const query = search.toLowerCase();
      items = items.filter((exchange) => exchange.name.toLowerCase().includes(query));
    }
    const order = { connected: 0, available: 1, coming_soon: 2 };
    return [...items].sort((a, b) => order[a.status] - order[b.status]);
  }, [activeTab, search]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="absolute left-0 top-[44px] z-50 flex flex-col rounded-lg"
      style={{
        width: 420,
        maxHeight: "min(560px, calc(100vh - 100px))",
        backgroundColor: "var(--hc-modal-bg)",
        border: "1px solid var(--hc-border)",
        boxShadow: "var(--hc-shadow)",
      }}
    >
      <div className="flex shrink-0 items-center justify-between px-[16px] pb-[4px] pt-[16px]">
        <span className="text-[15px] font-semibold font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
          Select Exchange
        </span>
        <button onClick={onClose} className="flex h-[24px] w-[24px] items-center justify-center rounded transition-colors">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 2L10 10M10 2L2 10" stroke="var(--hc-text-secondary)" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="shrink-0 px-[16px] pb-[8px] pt-[8px]">
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
            placeholder="Search exchange..."
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

      <div className="min-h-0 flex-1 overflow-y-auto py-[4px]">
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center py-[40px]">
            <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
              No exchanges found
            </span>
          </div>
        ) : (
          filtered.map((exchange) => {
            const isSelected = exchange.id === selectedExchange;
            const isDisabled = exchange.status === "coming_soon";
            return (
              <button
                key={exchange.id}
                disabled={isDisabled}
                onClick={() => {
                  if (!isDisabled) {
                    onSelect(exchange);
                    onClose();
                  }
                }}
                className={`flex w-full items-center gap-[12px] px-[16px] py-[10px] transition-colors ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                style={{ backgroundColor: isSelected ? "var(--hc-selected-bg)" : undefined }}
                onMouseEnter={(e) => {
                  if (!isDisabled && !isSelected) e.currentTarget.style.backgroundColor = "var(--hc-hover-bg)";
                }}
                onMouseLeave={(e) => {
                  if (!isDisabled && !isSelected) e.currentTarget.style.backgroundColor = "";
                }}
              >
                <ExchangeLogo exchange={exchange} size={32} />
                <div className="min-w-0 flex-1 text-left">
                  <div className="flex items-center gap-[6px]">
                    <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: isSelected ? "#00b1c7" : "var(--hc-text)" }}>
                      {exchange.name}
                    </span>
                    {isSelected ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#00b1c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : null}
                  </div>
                  <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
                    {exchange.pairs.toLocaleString()} trading pairs
                  </span>
                </div>
                <div className="shrink-0">
                  <StatusBadge status={exchange.status} />
                  {exchange.status === "available" && !isSelected ? (
                    <span
                      className="rounded-full px-[8px] py-[3px] text-[11px] font-['Source_Sans_3',sans-serif] transition-colors"
                      style={{ backgroundColor: "var(--hc-hover-bg)", color: "var(--hc-text-secondary)" }}
                    >
                      Connect
                    </span>
                  ) : null}
                </div>
              </button>
            );
          })
        )}
      </div>

      <div className="mx-[16px] h-px shrink-0" style={{ backgroundColor: "var(--hc-border)" }} />
      <div className="flex shrink-0 items-center justify-between px-[16px] py-[10px]">
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
          {filtered.length} {filtered.length === 1 ? "exchange" : "exchanges"}
        </span>
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
          Press <kbd className="rounded px-[4px] py-[1px] text-[11px]" style={{ backgroundColor: "var(--hc-kbd-bg)", border: "1px solid var(--hc-border)" }}>ESC</kbd> to close
        </span>
      </div>
    </div>
  );
}
