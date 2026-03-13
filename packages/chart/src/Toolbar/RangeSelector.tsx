import React, { useState } from 'react';
import type { ITimeScaleApi, Time } from 'lightweight-charts';

const RANGES = [
  { id: '1D', label: '1D', ms: 1 * 24 * 60 * 60 * 1000 },
  { id: '1W', label: '1W', ms: 7 * 24 * 60 * 60 * 1000 },
  { id: '1M', label: '1M', ms: 30 * 24 * 60 * 60 * 1000 },
  { id: '3M', label: '3M', ms: 90 * 24 * 60 * 60 * 1000 },
  { id: '6M', label: '6M', ms: 180 * 24 * 60 * 60 * 1000 },
  { id: '1Y', label: '1Y', ms: 365 * 24 * 60 * 60 * 1000 },
  { id: 'ALL', label: 'All', ms: 0 },
] as const;

export interface RangeSelectorProps {
  timeScale?: ITimeScaleApi<Time>;
}

export function RangeSelector({ timeScale }: RangeSelectorProps) {
  const [activeRange, setActiveRange] = useState('3M');

  const handleSelect = (range: (typeof RANGES)[number]) => {
    setActiveRange(range.id);
    if (!timeScale) return;

    if (range.id === 'ALL') {
      timeScale.fitContent();
      return;
    }

    const now = Math.floor(Date.now() / 1000);
    const from = now - Math.floor(range.ms / 1000);
    timeScale.setVisibleRange({
      from: from as Time,
      to: now as Time,
    });
  };

  return (
    <div className="flex items-center h-full">
      {RANGES.map((range) => {
        const isActive = range.id === activeRange;
        return (
          <button
            key={range.id}
            onClick={() => handleSelect(range)}
            className="px-[8px] h-[28px] rounded text-[12px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{
              backgroundColor: isActive ? 'var(--hc-accent-bg)' : undefined,
              color: isActive ? 'var(--hc-accent)' : 'var(--hc-text-secondary)',
            }}
            onMouseEnter={(e) => {
              if (!isActive)
                e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.backgroundColor = '';
            }}
          >
            {range.label}
          </button>
        );
      })}
    </div>
  );
}
