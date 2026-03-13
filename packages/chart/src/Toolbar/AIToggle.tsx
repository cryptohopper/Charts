import { useState, useRef } from 'react';
import {
  useAIStore,
  useUIStore,
  useUserStore,
  hasMinTier,
  getAIModelTier,
  useScanUsage,
} from '@hopcharts/core';
import { useDropdownClose } from './useDropdownClose';

export function AIToggle() {
  const showOverlay = useAIStore((s) => s.showOverlay);
  const showConfidenceMap = useAIStore((s) => s.showConfidenceMap);
  const showProjections = useAIStore((s) => s.showProjections);
  const toggleOverlay = useAIStore((s) => s.toggleOverlay);
  const toggleConfidenceMap = useAIStore((s) => s.toggleConfidenceMap);
  const toggleProjections = useAIStore((s) => s.toggleProjections);
  const subscriptionTier = useUserStore((s) => s.subscriptionTier);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { scanLimit, limitReached, scansDisplay } = useScanUsage();
  const modelTier = getAIModelTier(subscriptionTier);
  const isHero = hasMinTier(subscriptionTier, 'hero');

  useDropdownClose(menuRef, menuOpen, () => setMenuOpen(false));

  return (
    <div className="relative h-full" ref={menuRef}>
      <button
        className="flex items-center gap-[6px] px-[12px] h-full"
        style={{
          backgroundColor: menuOpen ? 'var(--hc-surface-hover)' : undefined,
        }}
        onMouseEnter={(e) => {
          if (!menuOpen)
            e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)';
        }}
        onMouseLeave={(e) => {
          if (!menuOpen) e.currentTarget.style.backgroundColor = '';
        }}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 2L3 6V12L9 16L15 12V6L9 2Z"
            stroke={showOverlay ? 'var(--hc-accent)' : 'var(--hc-text)'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="9"
            cy="9"
            r="2"
            stroke={showOverlay ? 'var(--hc-accent)' : 'var(--hc-text)'}
          />
        </svg>
        <span
          className="text-[14px] font-['Source_Sans_3',sans-serif]"
          style={{ color: showOverlay ? 'var(--hc-accent)' : 'var(--hc-text)' }}
        >
          AI
        </span>
      </button>

      {menuOpen && (
        <div
          className="absolute top-[calc(100%+4px)] left-0 z-50 rounded-lg py-[6px]"
          style={{
            width: 240,
            backgroundColor: 'var(--hc-modal-bg)',
            border: '1px solid var(--hc-border)',
            boxShadow: 'var(--hc-shadow)',
          }}
        >
          <ToggleRow
            label="AI Patterns"
            active={showOverlay}
            onToggle={toggleOverlay}
            disabled={limitReached && !showOverlay}
          />
          <ToggleRow
            label="Confidence Map"
            active={showConfidenceMap}
            onToggle={toggleConfidenceMap}
            disabled={limitReached && !showOverlay}
          />
          <ToggleRow
            label="Projections"
            active={showProjections}
            onToggle={toggleProjections}
            disabled={limitReached && !showOverlay}
          />

          {/* AI Insights panel toggle */}
          <button
            onClick={() => {
              useUIStore.getState().setSidePanel('ai-insights');
              setMenuOpen(false);
            }}
            className="flex items-center w-full px-[14px] py-[8px] transition-colors"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '';
            }}
          >
            <span
              className="text-[13px] font-['Source_Sans_3',sans-serif]"
              style={{ color: 'var(--hc-text)' }}
            >
              AI Insights
            </span>
          </button>

          {/* Divider */}
          <div
            className="h-px mx-[14px] my-[6px]"
            style={{ backgroundColor: 'var(--hc-border)' }}
          />

          {/* Scan usage */}
          <div className="px-[14px] py-[6px] flex items-center justify-between">
            <span
              className="text-[12px] font-['Source_Sans_3',sans-serif]"
              style={{ color: limitReached ? 'var(--hc-red)' : 'var(--hc-text-secondary)' }}
            >
              {scansDisplay}
            </span>
            {isHero && (
              <span
                className="px-[5px] py-[1px] rounded text-[10px] font-['Source_Sans_3',sans-serif] font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: 'rgba(0,177,199,0.1)',
                  color: 'var(--hc-accent)',
                }}
              >
                Advanced AI
              </span>
            )}
          </div>

          {/* Limit reached message */}
          {limitReached && (
            <div className="px-[14px] py-[4px]">
              <span
                className="text-[11px] font-['Source_Sans_3',sans-serif]"
                style={{ color: 'var(--hc-red)' }}
              >
                Daily scan limit reached — upgrade for more scans
              </span>
            </div>
          )}

          {/* Model tier info */}
          <div className="px-[14px] py-[4px]">
            <span
              className="text-[11px] font-['Source_Sans_3',sans-serif]"
              style={{ color: 'var(--hc-text-muted)' }}
            >
              Model: {modelTier === 'advanced' ? 'Advanced' : 'Standard'}
              {!isHero && ' — Upgrade to Hero for Advanced AI'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function ToggleRow({
  label,
  active,
  onToggle,
  disabled = false,
}: {
  label: string;
  active: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={disabled ? undefined : onToggle}
      className="flex items-center justify-between w-full px-[14px] py-[8px] transition-colors"
      style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'default' : 'pointer' }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '';
      }}
    >
      <span
        className="text-[13px] font-['Source_Sans_3',sans-serif]"
        style={{ color: active ? 'var(--hc-accent)' : 'var(--hc-text)' }}
      >
        {label}
      </span>
      <div
        className="w-[34px] h-[20px] rounded-full relative shrink-0 transition-colors"
        style={{
          backgroundColor: active ? 'var(--hc-accent)' : 'var(--hc-border)',
        }}
      >
        <div
          className="w-[16px] h-[16px] rounded-full bg-white absolute top-[2px] transition-all"
          style={{
            left: active ? 16 : 2,
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </button>
  );
}
