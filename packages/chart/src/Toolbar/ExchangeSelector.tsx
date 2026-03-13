import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useExchanges, useChartStore } from '@hopcharts/core';
import type { Exchange, ExchangeId } from '@hopcharts/core';
import { useDropdownClose } from './useDropdownClose';

const EXCHANGE_COLORS: Record<string, string> = {
  binance: '#F0B90B',
  coinbase: '#0052FF',
  kraken: '#5741D9',
  kucoin: '#23AF91',
};

function ExchangeLogo({ exchange }: { exchange: Exchange }) {
  const color = EXCHANGE_COLORS[exchange.id] || '#8e8e93';
  const letter = exchange.name.charAt(0).toUpperCase();
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0"
      style={{ width: 28, height: 28, backgroundColor: color }}
    >
      {exchange.logoUrl ? (
        <img
          src={exchange.logoUrl}
          alt={exchange.name}
          className="w-[20px] h-[20px] rounded-full"
        />
      ) : (
        <span
          className="text-white font-['Source_Sans_3',sans-serif] font-semibold"
          style={{ fontSize: 12 }}
        >
          {letter}
        </span>
      )}
    </div>
  );
}

export function ExchangeSelector() {
  const exchangeId = useChartStore((s) => s.exchangeId);
  const setExchange = useChartStore((s) => s.setExchange);
  const { data: exchanges = [] } = useExchanges();

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedExchange = exchanges.find((e) => e.id === exchangeId);

  useDropdownClose(panelRef, isOpen, () => setIsOpen(false));

  useEffect(() => {
    if (isOpen) {
      const timerId = setTimeout(() => searchInputRef.current?.focus(), 50);
      return () => clearTimeout(timerId);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  const filtered = useMemo(() => {
    let items = exchanges;
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((e) => e.name.toLowerCase().includes(q));
    }
    return items;
  }, [exchanges, search]);

  const color = EXCHANGE_COLORS[exchangeId] || '#8e8e93';
  const letter = selectedExchange?.name.charAt(0).toUpperCase() ?? '?';

  return (
    <div className="relative h-full" ref={panelRef}>
      <button
        className="flex items-center gap-[8px] px-[16px] h-full"
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
        <div
          className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: color }}
        >
          <span className="text-white text-[9px] font-['Source_Sans_3',sans-serif] font-semibold">
            {letter}
          </span>
        </div>
        <span
          className="text-[14px] font-['Source_Sans_3',sans-serif] uppercase"
          style={{ color: 'var(--hc-text)' }}
        >
          {selectedExchange?.name ?? exchangeId}
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
            width: 420,
            maxHeight: 'min(560px, calc(100vh - 100px))',
            backgroundColor: 'var(--hc-modal-bg)',
            border: '1px solid var(--hc-border)',
            boxShadow: 'var(--hc-shadow)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-[16px] pt-[16px] pb-[4px] shrink-0">
            <span
              className="text-[15px] font-['Source_Sans_3',sans-serif] font-semibold"
              style={{ color: 'var(--hc-text)' }}
            >
              Select Exchange
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-[24px] h-[24px] flex items-center justify-center rounded"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 2L10 10M10 2L2 10"
                  stroke="var(--hc-text-secondary)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Search */}
          <div className="px-[16px] pt-[8px] pb-[8px] shrink-0">
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
                placeholder="Search exchange..."
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

          <div
            className="h-px mx-[16px] shrink-0"
            style={{ backgroundColor: 'var(--hc-border)' }}
          />

          {/* Exchange list */}
          <div className="flex-1 overflow-y-auto min-h-0 py-[4px]">
            {filtered.length === 0 ? (
              <div className="flex items-center justify-center py-[40px]">
                <span
                  className="text-[14px] font-['Source_Sans_3',sans-serif]"
                  style={{ color: 'var(--hc-text-muted)' }}
                >
                  No exchanges found
                </span>
              </div>
            ) : (
              filtered.map((exchange) => {
                const isSelected = exchange.id === exchangeId;
                return (
                  <button
                    key={exchange.id}
                    onClick={() => {
                      setExchange(exchange.id as ExchangeId);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-[12px] px-[16px] py-[10px] transition-colors cursor-pointer"
                    style={{
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
                    <ExchangeLogo exchange={exchange} />
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-[6px]">
                        <span
                          className="text-[14px] font-['Source_Sans_3',sans-serif]"
                          style={{
                            color: isSelected ? 'var(--hc-accent)' : 'var(--hc-text)',
                          }}
                        >
                          {exchange.name}
                        </span>
                        {isSelected && (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2.5 7L5.5 10L11.5 4"
                              stroke="var(--hc-accent)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
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
              {filtered.length}{' '}
              {filtered.length === 1 ? 'exchange' : 'exchanges'}
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
