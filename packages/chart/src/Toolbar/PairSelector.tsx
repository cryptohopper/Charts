import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useChartStore, usePairs, useUserStore } from '@hopcharts/core';
import type { TradingPair } from '@hopcharts/core';
import { useDropdownClose } from './useDropdownClose';

const COIN_COLORS: Record<string, string> = {
  BTC: '#F7931A',
  ETH: '#627EEA',
  XRP: '#23292F',
  SOL: '#9945FF',
  ADA: '#0033AD',
  DOT: '#E6007A',
  DOGE: '#C2A633',
  LINK: '#2A5ADA',
  AVAX: '#E84142',
  MATIC: '#8247E5',
  UNI: '#FF007A',
  LTC: '#345D9D',
  ATOM: '#2E3148',
};

function CoinIcon({ symbol, size = 22 }: { symbol: string; size?: number }) {
  const color = COIN_COLORS[symbol] || '#8e8e93';
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0"
      style={{ width: size, height: size, backgroundColor: color }}
    >
      <span
        className="text-white font-['Source_Sans_3',sans-serif]"
        style={{ fontSize: size * 0.4 }}
      >
        {symbol.slice(0, 2)}
      </span>
    </div>
  );
}

export function PairSelector() {
  const exchangeId = useChartStore((s) => s.exchangeId);
  const pair = useChartStore((s) => s.pair);
  const setPair = useChartStore((s) => s.setPair);
  const favoritePairs = useUserStore((s) => s.preferences.favoritesPairs);
  const addFavoritePair = useUserStore((s) => s.addFavoritePair);
  const removeFavoritePair = useUserStore((s) => s.removeFavoritePair);
  const { data: pairs = [] } = usePairs(exchangeId);

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => searchInputRef.current?.focus(), 50);
      return () => clearTimeout(id);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  useDropdownClose(panelRef, isOpen, () => setIsOpen(false));

  const favSet = useMemo(() => new Set(favoritePairs), [favoritePairs]);

  const filtered = useMemo(() => {
    let items = pairs;
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (p) =>
          p.symbol.toLowerCase().includes(q) ||
          p.base.toLowerCase().includes(q) ||
          p.quote.toLowerCase().includes(q),
      );
    }
    // Favorites first
    return [...items].sort((a, b) => {
      const aFav = favSet.has(a.symbol) ? 0 : 1;
      const bFav = favSet.has(b.symbol) ? 0 : 1;
      return aFav - bFav;
    });
  }, [pairs, search, favSet]);

  const toggleFavorite = (symbol: string) => {
    if (favoritePairs.includes(symbol)) {
      removeFavoritePair(symbol);
    } else {
      addFavoritePair(symbol);
    }
  };

  return (
    <div className="relative h-full" ref={panelRef}>
      <button
        className="flex items-center gap-[6px] px-[12px] h-full"
        style={{
          backgroundColor: isOpen ? 'var(--hc-surface-hover)' : undefined,
        }}
        onMouseEnter={(e) => {
          if (!isOpen)
            e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)';
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.currentTarget.style.backgroundColor = '';
        }}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span
          className="text-[14px] font-['Source_Sans_3',sans-serif] font-semibold uppercase"
          style={{ color: 'var(--hc-text)' }}
        >
          {pair}
        </span>
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M0.5 0.5L4 4L7.5 0.5"
            stroke="#8E8E93"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-[44px] left-0 z-50 rounded-lg flex flex-col"
          style={{
            width: 480,
            maxHeight: 'min(560px, calc(100vh - 100px))',
            backgroundColor: 'var(--hc-modal-bg)',
            border: '1px solid var(--hc-border)',
            boxShadow: 'var(--hc-shadow)',
          }}
        >
          {/* Search */}
          <div className="px-[16px] pt-[16px] pb-[8px] shrink-0">
            <div
              className="flex items-center gap-[8px] h-[40px] rounded-md px-[12px]"
              style={{ backgroundColor: 'var(--hc-hover-bg)' }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="5.5"
                  stroke="var(--hc-text-secondary)"
                  strokeWidth="1.2"
                />
                <path
                  d="M11.5 11.5L14.5 14.5"
                  stroke="var(--hc-text-secondary)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
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
                <button onClick={() => setSearch('')} className="shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 3L11 11M11 3L3 11"
                      stroke="var(--hc-text-secondary)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Table header */}
          <div
            className="grid items-center px-[16px] py-[8px] shrink-0"
            style={{
              gridTemplateColumns: '24px minmax(0, 2fr) minmax(0, 1fr)',
            }}
          >
            <span />
            <span
              className="text-[12px] font-['Source_Sans_3',sans-serif]"
              style={{ color: 'var(--hc-text-muted)' }}
            >
              Symbol
            </span>
            <span
              className="text-[12px] font-['Source_Sans_3',sans-serif]"
              style={{ color: 'var(--hc-text-muted)' }}
            >
              Quote
            </span>
          </div>

          <div
            className="h-px mx-[16px] shrink-0"
            style={{ backgroundColor: 'var(--hc-border)' }}
          />

          {/* Pair list */}
          <div className="flex-1 overflow-y-auto min-h-0">
            {filtered.length === 0 ? (
              <div className="flex items-center justify-center py-[40px]">
                <span
                  className="text-[14px] font-['Source_Sans_3',sans-serif]"
                  style={{ color: 'var(--hc-text-muted)' }}
                >
                  No results found
                </span>
              </div>
            ) : (
              filtered.map((p) => {
                const isSelected = p.symbol === pair;
                const isFav = favSet.has(p.symbol);
                return (
                  <button
                    key={p.symbol}
                    onClick={() => {
                      setPair(p.symbol);
                      setIsOpen(false);
                    }}
                    className="w-full grid items-center px-[16px] py-[10px] transition-colors cursor-pointer"
                    style={{
                      gridTemplateColumns:
                        '24px minmax(0, 2fr) minmax(0, 1fr)',
                      backgroundColor: isSelected
                        ? 'var(--hc-selected-bg)'
                        : undefined,
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected)
                        e.currentTarget.style.backgroundColor =
                          'var(--hc-hover-bg)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected)
                        e.currentTarget.style.backgroundColor = '';
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(p.symbol);
                      }}
                      className="shrink-0 w-[20px] h-[20px] flex items-center justify-center"
                    >
                      {isFav ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8 1.5L9.8 5.2L14 5.8L11 8.7L11.7 12.9L8 11L4.3 12.9L5 8.7L2 5.8L6.2 5.2L8 1.5Z"
                            fill="#F5A623"
                            stroke="#F5A623"
                            strokeWidth="1"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8 1.5L9.8 5.2L14 5.8L11 8.7L11.7 12.9L8 11L4.3 12.9L5 8.7L2 5.8L6.2 5.2L8 1.5Z"
                            stroke="var(--hc-text-muted)"
                            strokeWidth="1"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>

                    <div className="flex items-center gap-[8px]">
                      <CoinIcon symbol={p.base} />
                      <span
                        className="text-[14px] font-['Source_Sans_3',sans-serif]"
                        style={{
                          color: isSelected ? 'var(--hc-accent)' : 'var(--hc-text)',
                        }}
                      >
                        {p.symbol}
                      </span>
                    </div>

                    <span
                      className="text-[13px] font-['Source_Sans_3',sans-serif] text-left"
                      style={{ color: 'var(--hc-text-secondary)' }}
                    >
                      {p.quote}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          <div
            className="h-px mx-[16px] shrink-0"
            style={{ backgroundColor: 'var(--hc-border)' }}
          />
          <div className="flex items-center justify-between px-[16px] py-[10px] shrink-0">
            <span
              className="text-[12px] font-['Source_Sans_3',sans-serif]"
              style={{ color: 'var(--hc-text-muted)' }}
            >
              {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            </span>
            <span
              className="text-[12px] font-['Source_Sans_3',sans-serif]"
              style={{ color: 'var(--hc-text-muted)' }}
            >
              Press{' '}
              <kbd
                className="px-[4px] py-[1px] rounded text-[11px]"
                style={{
                  backgroundColor: 'var(--hc-kbd-bg)',
                  border: '1px solid var(--hc-border)',
                }}
              >
                ESC
              </kbd>{' '}
              to close
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
