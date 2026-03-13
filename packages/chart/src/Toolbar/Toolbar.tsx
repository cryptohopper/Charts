import React, { useState } from 'react';
import type { ITimeScaleApi, Time } from 'lightweight-charts';

import { Divider } from './Divider';
import { ExchangeSelector } from './ExchangeSelector';
import { PairSelector } from './PairSelector';
import { TimeframeSelector } from './TimeframeSelector';
import { ChartTypeSelector } from './ChartTypeSelector';
import { DrawingToolsMenu } from './DrawingToolsMenu';
import { IndicatorMenu } from './IndicatorMenu';
import { AIToggle } from './AIToggle';
import { FullscreenButton } from './FullscreenButton';
import { RangeSelector } from './RangeSelector';

export interface ToolbarProps {
  timeScale?: ITimeScaleApi<Time>;
}

export function Toolbar({ timeScale }: ToolbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ════════ DESKTOP TOP BAR ════════ */}
      <div
        className="hidden md:flex h-[40px] items-center relative transition-colors duration-200"
        style={{
          backgroundColor: 'var(--hc-surface)',
          borderBottom: '1px solid var(--hc-border)',
        }}
      >
        {/* ===== LEFT SIDE ===== */}
        <div className="flex items-center h-full">
          <ExchangeSelector />
          <Divider />
          <PairSelector />
          <Divider />
          <TimeframeSelector />
          <Divider />
          <ChartTypeSelector />
          <Divider />
          <DrawingToolsMenu />
          <Divider />
          <IndicatorMenu />
          <Divider />
          <AIToggle />
          <Divider />
          <RangeSelector timeScale={timeScale} />
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="ml-auto flex items-center h-full">
          <Divider />
          <FullscreenButton />
        </div>
      </div>

      {/* ════════ MOBILE TOP BAR ════════ */}
      <div
        className="flex md:hidden h-[48px] items-center relative transition-colors duration-200"
        style={{
          backgroundColor: 'var(--hc-surface)',
          borderBottom: '1px solid var(--hc-border)',
        }}
      >
        {/* Hamburger */}
        <button
          className="flex items-center justify-center w-[48px] h-full shrink-0"
          style={{ borderRight: '1px solid var(--hc-border)' }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path
              d="M1 1H17M1 7H17M1 13H17"
              stroke="var(--hc-text)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Pair display */}
        <PairSelector />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Indicators (compact) */}
        <div
          className="w-px h-[24px] shrink-0"
          style={{ backgroundColor: 'var(--hc-border)' }}
        />
        <IndicatorMenu />

        {/* Fullscreen */}
        <div
          className="w-px h-[24px] shrink-0"
          style={{ backgroundColor: 'var(--hc-border)' }}
        />
        <FullscreenButton />
      </div>

      {/* ════════ MOBILE HAMBURGER DRAWER ════════ */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9990] md:hidden"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <div
            className="fixed top-0 left-0 bottom-0 z-[9991] w-[280px] flex flex-col md:hidden"
            style={{
              backgroundColor: 'var(--hc-surface)',
              borderRight: '1px solid var(--hc-border)',
              boxShadow: '4px 0 24px rgba(0,0,0,0.2)',
            }}
          >
            {/* Close */}
            <div
              className="flex items-center justify-between h-[44px] px-[16px] shrink-0"
              style={{ borderBottom: '1px solid var(--hc-border)' }}
            >
              <span
                className="text-[15px] font-['Source_Sans_3',sans-serif]"
                style={{ color: 'var(--hc-text)', fontWeight: 600 }}
              >
                Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-[28px] h-[28px] flex items-center justify-center rounded-md"
                style={{ backgroundColor: 'var(--hc-surface-hover)' }}
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="var(--hc-text)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-[6px]">
              <MobileDrawerItem
                label="Exchange"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileDrawerItem
                label="Symbol"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileDrawerItem
                label="Timeframe"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileDrawerItem
                label="Chart Type"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileDrawerItem
                label="Drawing Tools"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileDrawerItem
                label="Indicators"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileDrawerItem
                label="AI Overlay"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

function MobileDrawerItem({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[12px] w-full px-[16px] py-[11px] transition-colors"
    >
      <span
        className="text-[14px] font-['Source_Sans_3',sans-serif] flex-1 text-left"
        style={{ color: 'var(--hc-text)' }}
      >
        {label}
      </span>
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="shrink-0">
        <path
          d="M1 1L5 5L1 9"
          stroke="var(--hc-text-muted)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
