import React, { useState, useRef } from 'react';
import { useChartStore } from '@hopcharts/core';
import type { Timeframe } from '@hopcharts/core';
import { useDropdownClose } from './useDropdownClose';

interface TimeframeOption {
  id: Timeframe;
  label: string;
  shortLabel: string;
}

interface TimeframeGroup {
  title: string;
  items: TimeframeOption[];
}

const TIMEFRAME_GROUPS: TimeframeGroup[] = [
  {
    title: 'Minutes',
    items: [
      { id: '1m', label: '1 minute', shortLabel: '1m' },
      { id: '5m', label: '5 minutes', shortLabel: '5m' },
      { id: '15m', label: '15 minutes', shortLabel: '15m' },
    ],
  },
  {
    title: 'Hours',
    items: [
      { id: '1h', label: '1 hour', shortLabel: '1H' },
      { id: '4h', label: '4 hours', shortLabel: '4H' },
    ],
  },
  {
    title: 'Days',
    items: [{ id: '1D', label: '1 day', shortLabel: 'D' }],
  },
  {
    title: 'Weeks',
    items: [{ id: '1W', label: '1 week', shortLabel: 'W' }],
  },
];

const SHORT_LABEL_MAP: Record<string, string> = {};
for (const group of TIMEFRAME_GROUPS) {
  for (const item of group.items) {
    SHORT_LABEL_MAP[item.id] = item.shortLabel;
  }
}

export function TimeframeSelector() {
  const timeframe = useChartStore((s) => s.timeframe);
  const setTimeframe = useChartStore((s) => s.setTimeframe);

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useDropdownClose(panelRef, isOpen, () => setIsOpen(false));

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
          className="text-[14px] font-['Source_Sans_3',sans-serif]"
          style={{ color: 'var(--hc-text)' }}
        >
          {SHORT_LABEL_MAP[timeframe] ?? timeframe}
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
          className="absolute top-[44px] left-0 z-50 rounded-lg flex flex-col py-[8px]"
          style={{
            width: 200,
            backgroundColor: 'var(--hc-modal-bg)',
            border: '1px solid var(--hc-border)',
            boxShadow: 'var(--hc-shadow)',
          }}
        >
          {TIMEFRAME_GROUPS.map((group, gi) => (
            <div key={group.title}>
              <div className="px-[16px] pt-[8px] pb-[4px]">
                <span
                  className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider"
                  style={{ color: 'var(--hc-text-muted)' }}
                >
                  {group.title}
                </span>
              </div>

              {group.items.map((tf) => {
                const isSelected = tf.id === timeframe;
                return (
                  <button
                    key={tf.id}
                    onClick={() => {
                      setTimeframe(tf.id);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-[16px] py-[7px] transition-colors cursor-pointer"
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
                    <span
                      className="text-[13px] font-['Source_Sans_3',sans-serif]"
                      style={{
                        color: isSelected ? 'var(--hc-accent)' : 'var(--hc-text)',
                      }}
                    >
                      {tf.label}
                    </span>
                    <span
                      className="text-[13px] font-['Source_Sans_3',sans-serif] tabular-nums"
                      style={{
                        color: isSelected
                          ? 'var(--hc-accent)'
                          : 'var(--hc-text-muted)',
                      }}
                    >
                      {tf.shortLabel}
                    </span>
                  </button>
                );
              })}

              {gi < TIMEFRAME_GROUPS.length - 1 && (
                <div
                  className="h-px mx-[16px] my-[4px]"
                  style={{ backgroundColor: 'var(--hc-border)' }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
