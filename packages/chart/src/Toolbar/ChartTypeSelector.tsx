import React, { useState, useRef } from 'react';
import { useChartStore } from '@hopcharts/core';
import { useDropdownClose } from './useDropdownClose';

interface ChartTypeOption {
  id: string;
  label: string;
}

const CHART_TYPES: ChartTypeOption[] = [
  { id: 'candles', label: 'Candles' },
  { id: 'hollow', label: 'Hollow Candles' },
  { id: 'bar', label: 'Bar (OHLC)' },
  { id: 'line', label: 'Line' },
  { id: 'area', label: 'Area' },
  { id: 'baseline', label: 'Baseline' },
  { id: 'heikin', label: 'Heikin Ashi' },
  { id: 'renko', label: 'Renko' },
];

function ChartTypeIcon({ id, color }: { id: string; color: string }) {
  switch (id) {
    case 'candles':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M5 16.5V1.5" stroke={color} strokeLinecap="round" />
          <rect x="3" y="4" width="4" height="10" rx="0.5" stroke={color} />
          <path d="M13 14V1.5" stroke={color} strokeLinecap="round" />
          <rect x="11" y="4" width="4" height="7.5" rx="0.5" stroke={color} />
        </svg>
      );
    case 'hollow':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M5 16.5V1.5" stroke={color} strokeLinecap="round" />
          <rect x="3" y="4" width="4" height="10" rx="0.5" stroke={color} strokeDasharray="2 1" />
          <path d="M13 14V1.5" stroke={color} strokeLinecap="round" />
          <rect x="11" y="4" width="4" height="7.5" rx="0.5" stroke={color} />
        </svg>
      );
    case 'bar':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M5 2V16" stroke={color} strokeLinecap="round" />
          <path d="M5 5H2" stroke={color} strokeLinecap="round" />
          <path d="M5 13H8" stroke={color} strokeLinecap="round" />
          <path d="M13 4V14" stroke={color} strokeLinecap="round" />
          <path d="M13 6H10" stroke={color} strokeLinecap="round" />
          <path d="M13 12H16" stroke={color} strokeLinecap="round" />
        </svg>
      );
    case 'line':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M1 13L5 8L9 10.5L13 4L17 7" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'area':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M1 13L5 8L9 10.5L13 4L17 7V16H1V13Z" fill={color} fillOpacity="0.12" />
          <path d="M1 13L5 8L9 10.5L13 4L17 7" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'baseline':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M1 10H17" stroke={color} strokeOpacity="0.3" strokeDasharray="2 2" />
          <path d="M1 13L4 8L7 11L10 5L13 9L17 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'heikin':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M5 16V1.5" stroke={color} strokeLinecap="round" />
          <rect x="3" y="5" width="4" height="8" rx="0.5" fill={color} fillOpacity="0.2" stroke={color} />
          <path d="M13 15V2" stroke={color} strokeLinecap="round" />
          <rect x="11" y="4" width="4" height="7" rx="0.5" fill={color} fillOpacity="0.2" stroke={color} />
        </svg>
      );
    case 'renko':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="10" width="4" height="4" stroke={color} />
          <rect x="5" y="6" width="4" height="4" stroke={color} />
          <rect x="9" y="10" width="4" height="4" stroke={color} />
          <rect x="13" y="6" width="4" height="4" stroke={color} />
        </svg>
      );
    default:
      return null;
  }
}

/** Toolbar button icon for the currently selected chart type */
export function ChartTypeToolbarIcon({ chartTypeId }: { chartTypeId: string }) {
  const IC = 'var(--hc-icon-stroke)';
  return <ChartTypeIcon id={chartTypeId} color={IC} />;
}

export function ChartTypeSelector() {
  const chartType = useChartStore((s) => s.chartType);
  const setChartType = useChartStore((s) => s.setChartType);

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useDropdownClose(panelRef, isOpen, () => setIsOpen(false));

  return (
    <div className="relative h-full" ref={panelRef}>
      <button
        className="flex items-center justify-center w-[56px] h-full"
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
        <ChartTypeToolbarIcon chartTypeId={chartType} />
      </button>

      {isOpen && (
        <div
          className="absolute top-[44px] left-0 z-50 rounded-lg flex flex-col py-[6px]"
          style={{
            width: 200,
            backgroundColor: 'var(--hc-modal-bg)',
            border: '1px solid var(--hc-border)',
            boxShadow: 'var(--hc-shadow)',
          }}
        >
          {CHART_TYPES.map((ct) => {
            const isSelected = ct.id === chartType;
            return (
              <button
                key={ct.id}
                onClick={() => {
                  setChartType(ct.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-[10px] px-[14px] py-[8px] transition-colors cursor-pointer"
                style={{
                  backgroundColor: isSelected
                    ? 'var(--hc-selected-bg)'
                    : undefined,
                  color: isSelected ? 'var(--hc-accent)' : 'var(--hc-text)',
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
                <span className="shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                  <ChartTypeIcon
                    id={ct.id}
                    color={isSelected ? 'var(--hc-accent)' : 'currentColor'}
                  />
                </span>
                <span className="text-[13px] font-['Source_Sans_3',sans-serif] flex-1 text-left">
                  {ct.label}
                </span>
                {isSelected && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0"
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
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
