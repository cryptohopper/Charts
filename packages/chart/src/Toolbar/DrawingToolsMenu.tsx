import React, { useState, useRef } from 'react';
import { useDrawingStore, useUserStore, hasMinTier, getMinTierForDrawingTool, getTierDisplayName } from '@hopcharts/core';
import type { DrawingToolType, SubscriptionTier } from '@hopcharts/core';
import { useDropdownClose } from './useDropdownClose';

interface ToolGroup {
  label: string;
  tools: { type: DrawingToolType; label: string }[];
}

const TOOL_GROUPS: ToolGroup[] = [
  {
    label: 'Lines',
    tools: [
      { type: 'trendline', label: 'Trend Line' },
      { type: 'horizontal_line', label: 'Horizontal Line' },
      { type: 'vertical_line', label: 'Vertical Line' },
      { type: 'arrow', label: 'Arrow' },
    ],
  },
  {
    label: 'Fibonacci',
    tools: [{ type: 'fibonacci_retracement', label: 'Fibonacci Retracement' }],
  },
  {
    label: 'Channels',
    tools: [{ type: 'parallel_channel', label: 'Parallel Channel' }],
  },
  {
    label: 'Shapes',
    tools: [{ type: 'rectangle', label: 'Rectangle' }],
  },
  {
    label: 'Labels',
    tools: [{ type: 'text_label', label: 'Text Label' }],
  },
  {
    label: 'Measure',
    tools: [{ type: 'measure', label: 'Measure XY' }],
  },
];

const TOOL_LABEL_MAP: Record<string, string> = Object.fromEntries(
  TOOL_GROUPS.flatMap((g) => g.tools.map((t) => [t.type, t.label])),
);

function ToolIcon({ type, active }: { type: DrawingToolType; active: boolean }) {
  const stroke = active ? 'var(--hc-accent)' : 'var(--hc-text)';

  switch (type) {
    case 'trendline':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 14L14 2" stroke={stroke} strokeLinecap="round" />
          <circle cx="2" cy="14" r="1.5" stroke={stroke} />
          <circle cx="14" cy="2" r="1.5" stroke={stroke} />
        </svg>
      );
    case 'horizontal_line':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 8H15" stroke={stroke} strokeLinecap="round" />
          <circle cx="8" cy="8" r="1.5" stroke={stroke} />
        </svg>
      );
    case 'vertical_line':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1V15" stroke={stroke} strokeLinecap="round" />
          <circle cx="8" cy="8" r="1.5" stroke={stroke} />
        </svg>
      );
    case 'arrow':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 14L14 2" stroke={stroke} strokeLinecap="round" />
          <path d="M14 2L10 2M14 2L14 6" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'fibonacci_retracement':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 3H15M1 7H15M1 11H15M1 15H15" stroke={stroke} strokeLinecap="round" />
        </svg>
      );
    case 'parallel_channel':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 12L15 4" stroke={stroke} strokeLinecap="round" />
          <path d="M1 8L15 0" stroke={stroke} strokeLinecap="round" strokeOpacity="0.5" />
        </svg>
      );
    case 'rectangle':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="4" width="12" height="8" rx="0.5" stroke={stroke} />
        </svg>
      );
    case 'text_label':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4V2H14V4" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 2V14" stroke={stroke} strokeLinecap="round" />
          <path d="M5 14H11" stroke={stroke} strokeLinecap="round" />
        </svg>
      );
    case 'measure':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 14L14 2" stroke={stroke} strokeLinecap="round" />
          <path d="M10 2H14V6" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 14H2V10" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke={stroke} />
        </svg>
      );
  }
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <rect x="3.5" y="5" width="5" height="4" rx="0.5" stroke="var(--hc-text-muted)" />
      <path d="M4.5 5V3.5C4.5 2.67 5.17 2 6 2C6.83 2 7.5 2.67 7.5 3.5V5" stroke="var(--hc-text-muted)" strokeLinecap="round" />
    </svg>
  );
}

function DrawingToolsDropdownPanel({ onClose }: { onClose: () => void }) {
  const activeTool = useDrawingStore((s) => s.activeToolType);
  const setActiveTool = useDrawingStore((s) => s.setActiveTool);
  const clearAllDrawings = useDrawingStore((s) => s.clearAllDrawings);
  const selectedDrawingId = useDrawingStore((s) => s.selectedDrawingId);
  const removeDrawing = useDrawingStore((s) => s.removeDrawing);
  const subscriptionTier = useUserStore((s) => s.subscriptionTier) as SubscriptionTier | null;

  return (
    <div
      className="absolute top-[44px] left-0 z-50 rounded-lg flex flex-col py-[4px]"
      style={{
        width: 240,
        backgroundColor: 'var(--hc-modal-bg)',
        border: '1px solid var(--hc-border)',
        boxShadow: 'var(--hc-shadow)',
      }}
    >
      {TOOL_GROUPS.map((group, gi) => (
        <div key={group.label}>
          <div className="px-[14px] pt-[8px] pb-[4px]">
            <span
              className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider"
              style={{ color: 'var(--hc-text-muted)' }}
            >
              {group.label}
            </span>
          </div>

          {group.tools.map((tool) => {
            const isActive = activeTool === tool.type;
            const requiredTier = getMinTierForDrawingTool(tool.type);
            const isLocked = !hasMinTier(subscriptionTier, requiredTier);
            return (
              <button
                key={tool.type}
                onClick={() => {
                  if (isLocked) return;
                  setActiveTool(isActive ? null : tool.type);
                  onClose();
                }}
                className="w-full flex items-center gap-[10px] px-[14px] py-[7px] transition-colors"
                style={{
                  backgroundColor: isActive
                    ? 'var(--hc-accent-bg)'
                    : undefined,
                  opacity: isLocked ? 0.5 : 1,
                  cursor: isLocked ? 'default' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive && !isLocked)
                    e.currentTarget.style.backgroundColor =
                      'var(--hc-hover-bg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isActive
                    ? 'var(--hc-accent-bg)'
                    : '';
                }}
                title={isLocked ? `Requires ${getTierDisplayName(requiredTier)}` : undefined}
              >
                <ToolIcon type={tool.type} active={isActive && !isLocked} />
                <span
                  className="text-[13px] font-['Source_Sans_3',sans-serif] flex-1 text-left"
                  style={{
                    color: isActive && !isLocked ? 'var(--hc-accent)' : 'var(--hc-text)',
                  }}
                >
                  {tool.label}
                </span>
                {isLocked && <LockIcon />}
              </button>
            );
          })}

          {gi < TOOL_GROUPS.length - 1 && (
            <div
              className="h-px mx-[14px] my-[4px]"
              style={{ backgroundColor: 'var(--hc-border)' }}
            />
          )}
        </div>
      ))}

      {/* Actions */}
      <div
        className="h-px mx-[14px] my-[4px]"
        style={{ backgroundColor: 'var(--hc-border)' }}
      />
      {selectedDrawingId && (
        <button
          onClick={() => {
            removeDrawing(selectedDrawingId);
            onClose();
          }}
          className="w-full text-left px-[14px] py-[7px] text-[13px] font-['Source_Sans_3',sans-serif] transition-colors"
          style={{ color: 'var(--hc-text)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '';
          }}
        >
          Delete selected
        </button>
      )}
      <button
        onClick={() => {
          clearAllDrawings();
          setActiveTool(null);
          onClose();
        }}
        className="w-full text-left px-[14px] py-[7px] text-[13px] font-['Source_Sans_3',sans-serif] transition-colors"
        style={{ color: 'var(--hc-accent)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '';
        }}
      >
        Clear all drawings
      </button>
    </div>
  );
}

export function DrawingToolsMenu() {
  const activeTool = useDrawingStore((s) => s.activeToolType);
  const setActiveTool = useDrawingStore((s) => s.setActiveTool);

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useDropdownClose(panelRef, isOpen, () => setIsOpen(false));

  const activeLabel = TOOL_LABEL_MAP[activeTool ?? ''] ?? 'Drawing Tools';

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
        {/* Pencil icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M11.5 1.5L14.5 4.5L5 14H2V11L11.5 1.5Z"
            stroke={activeTool ? 'var(--hc-accent)' : 'var(--hc-text)'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {activeTool && (
          <span
            className="text-[13px] font-['Source_Sans_3',sans-serif]"
            style={{ color: 'var(--hc-accent)' }}
          >
            {activeLabel}
          </span>
        )}
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

      {isOpen && <DrawingToolsDropdownPanel onClose={() => setIsOpen(false)} />}
    </div>
  );
}
