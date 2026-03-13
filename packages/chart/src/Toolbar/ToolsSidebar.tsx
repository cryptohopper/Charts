import React, { useState, useRef } from 'react';
import { useDrawingStore } from '@hopcharts/core';
import type { DrawingToolType } from '@hopcharts/core';
import { useDropdownClose } from './useDropdownClose';

/* ─── Tooltip ──────────────────────────── */

function Tooltip({
  text,
  visible,
  anchorRect,
}: {
  text: string;
  visible: boolean;
  anchorRect: DOMRect | null;
}) {
  if (!visible || !anchorRect) return null;
  return (
    <div
      className="fixed z-[9999] flex items-center pointer-events-none"
      style={{
        top: anchorRect.top + anchorRect.height / 2,
        left: anchorRect.right + 4,
        transform: 'translateY(-50%)',
      }}
    >
      <svg
        width="7"
        height="14"
        viewBox="0 0 7 14"
        fill="none"
        className="shrink-0 -mr-px"
      >
        <path
          d="M0.58 7.87C0.26 7.56 0.09 7.4 0.04 7.22C-0.01 7.08 -0.01 6.92 0.04 6.78C0.09 6.6 0.26 6.44 0.58 6.13L7 0V14L0.58 7.87Z"
          fill="var(--hc-tooltip-bg)"
        />
      </svg>
      <div
        className="px-[15px] py-[8px] rounded-[3px] whitespace-nowrap"
        style={{ backgroundColor: 'var(--hc-tooltip-bg)' }}
      >
        <span
          className="text-[12px] font-['Source_Sans_3',sans-serif]"
          style={{ color: 'var(--hc-tooltip-text)' }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}

/* ─── Tool Button ──────────────────────── */

function ToolButton({
  isSelected,
  onClick,
  name,
  children,
}: {
  isSelected?: boolean;
  onClick?: () => void;
  name: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseEnter={() => {
        rectRef.current = btnRef.current?.getBoundingClientRect() ?? null;
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className="relative w-[36px] h-[36px] md:w-[48px] md:h-[48px] flex items-center justify-center shrink-0"
    >
      {isSelected && (
        <div
          className="absolute inset-[10.42%] rounded"
          style={{ backgroundColor: 'var(--hc-accent-bg)' }}
        />
      )}
      {hovered && !isSelected && (
        <div
          className="absolute inset-[10.42%] rounded"
          style={{ backgroundColor: 'var(--hc-surface-hover)' }}
        />
      )}
      <div className="relative z-10">{children}</div>
      <Tooltip text={name} visible={hovered} anchorRect={rectRef.current} />
    </button>
  );
}

/* ─── Icon helpers ─────────────────────── */

const IC = 'var(--hc-icon-stroke)';
const IC_FILL = 'var(--hc-surface-hover)';
const IC_ACTIVE = 'var(--hc-accent)';
const IC_ACTIVE_FILL = 'var(--hc-accent-bg)';

/* ─── Drawing tool definitions ─────────── */

interface ToolDef {
  type: DrawingToolType | 'cursor';
  name: string;
  icon: (active: boolean) => React.ReactNode;
}

const DRAWING_TOOLS: ToolDef[] = [
  {
    type: 'cursor',
    name: 'Cursor',
    icon: (a) => (
      <svg width="5" height="5" viewBox="0 0 12 18" fill="none">
        <path
          d="M1 1L1 13L4.5 9.5L8 17L10 16L6.5 8.5L11 8.5L1 1Z"
          fill={a ? IC_ACTIVE_FILL : 'var(--hc-surface)'}
          stroke={a ? IC_ACTIVE : IC}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    type: 'trendline',
    name: 'Trend Line',
    icon: (a) => {
      const s = a ? IC_ACTIVE : IC;
      const f = a ? IC_ACTIVE_FILL : 'var(--hc-surface)';
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 15L15 3" stroke={s} strokeLinecap="round" />
          <circle cx="3" cy="15" r="2" fill={f} stroke={s} />
          <circle cx="15" cy="3" r="2" fill={f} stroke={s} />
        </svg>
      );
    },
  },
  {
    type: 'horizontal_line',
    name: 'Horizontal Line',
    icon: (a) => {
      const s = a ? IC_ACTIVE : IC;
      const f = a ? IC_ACTIVE_FILL : 'var(--hc-surface)';
      return (
        <svg width="21" height="5" viewBox="0 0 21 5" fill="none">
          <path d="M0.5 2.5L20.5 2.5" stroke={s} strokeLinecap="round" />
          <circle cx="10.5" cy="2.5" r="2" fill={f} stroke={s} />
        </svg>
      );
    },
  },
  {
    type: 'fibonacci_retracement',
    name: 'Fib Retracement',
    icon: (a) => {
      const s = a ? IC_ACTIVE : IC;
      const f = a ? IC_ACTIVE_FILL : IC_FILL;
      return (
        <svg width="19" height="15" viewBox="0 0 19 15" fill="none">
          <path d="M0.5 8.9L18.4 8.9" stroke={s} strokeLinecap="round" />
          <path d="M0.5 4.7L18.4 4.7" stroke={s} strokeLinecap="round" />
          <path d="M0.5 0.5L18.4 0.5" stroke={s} strokeLinecap="round" />
          <path d="M0.5 13.1L18.4 13.1" stroke={s} strokeLinecap="round" />
          <circle cx="9.5" cy="0.5" r="2" fill={f} stroke={s} />
          <circle cx="9.5" cy="13.1" r="2" fill={f} stroke={s} />
        </svg>
      );
    },
  },
  {
    type: 'parallel_channel',
    name: 'Channel',
    icon: (a) => {
      const s = a ? IC_ACTIVE : IC;
      const f = a ? IC_ACTIVE_FILL : IC_FILL;
      return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
          <path d="M2 16L20 4" stroke={s} strokeLinecap="round" />
          <path d="M2 12L20 0" stroke={s} strokeLinecap="round" strokeOpacity="0.5" />
          <circle cx="2" cy="16" r="2" fill={f} stroke={s} />
          <circle cx="20" cy="4" r="2" fill={f} stroke={s} />
        </svg>
      );
    },
  },
  {
    type: 'rectangle',
    name: 'Rectangle',
    icon: (a) => {
      const s = a ? IC_ACTIVE : IC;
      return (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <rect x="1" y="1" width="16" height="12" rx="0.5" stroke={s} />
        </svg>
      );
    },
  },
  {
    type: 'text_label',
    name: 'Text',
    icon: (a) => {
      const s = a ? IC_ACTIVE : IC;
      return (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path d="M0.5 3.5V0.5H13.5V3.5" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 0.5V15.5" stroke={s} strokeLinecap="round" />
          <path d="M4.5 15.5H9.5" stroke={s} strokeLinecap="round" />
        </svg>
      );
    },
  },
];

const VIEW_TOOLS: ToolDef[] = [
  {
    type: 'measure',
    name: 'Measure',
    icon: (a) => {
      const s = a ? IC_ACTIVE : IC;
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M1.5 16.5L16.5 1.5" stroke={s} strokeLinecap="round" />
          <path d="M12.5 1.5H16.5V5.5" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 16.5H1.5V12.5" stroke={s} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    },
  },
];

/* ─── Remove Button ────────────────────── */

function RemoveButton({
  onRemoveDrawings,
  onRemoveAll,
}: {
  onRemoveDrawings?: () => void;
  onRemoveAll?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useDropdownClose(menuRef, menuOpen, () => setMenuOpen(false));

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={btnRef}
        onClick={() => setMenuOpen((v) => !v)}
        onMouseEnter={() => {
          setHovered(true);
          setRect(btnRef.current?.getBoundingClientRect() ?? null);
        }}
        onMouseLeave={() => setHovered(false)}
        className="relative w-[48px] h-[48px] flex items-center justify-center shrink-0"
      >
        {hovered && (
          <div
            className="absolute inset-[10.42%] rounded"
            style={{ backgroundColor: 'var(--hc-surface-hover)' }}
          />
        )}
        <div className="relative z-10">
          <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
            <path
              d="M2.5 4.1V16.5C2.5 17.33 3.17 18 4 18H13C13.83 18 14.5 17.33 14.5 16.5V4.1"
              stroke={IC}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.5 4.1H16.5"
              stroke={IC}
              strokeLinecap="round"
            />
            <path
              d="M5.83 8.3V14.5"
              stroke={IC}
              strokeLinecap="round"
            />
            <path
              d="M11.17 8.3V14.5"
              stroke={IC}
              strokeLinecap="round"
            />
            <path
              d="M5.5 4.1V2C5.5 1.45 5.95 1 6.5 1H10.5C11.05 1 11.5 1.45 11.5 2V4.1"
              stroke={IC}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {!menuOpen && (
          <Tooltip text="Remove" visible={hovered} anchorRect={rect} />
        )}
      </button>

      {menuOpen && rect && (
        <div
          className="fixed z-[9999] rounded-[6px] overflow-hidden min-w-[200px]"
          style={{
            backgroundColor: 'var(--hc-surface)',
            border: '1px solid var(--hc-border)',
            boxShadow: 'var(--hc-shadow)',
            left: rect.right + 4,
            bottom: window.innerHeight - rect.bottom,
          }}
        >
          <button
            onClick={() => {
              onRemoveDrawings?.();
              setMenuOpen(false);
            }}
            className="w-full text-left px-[20px] py-[11px] text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{ color: 'var(--hc-text)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '';
            }}
          >
            Remove drawings
          </button>
          <button
            onClick={() => {
              onRemoveAll?.();
              setMenuOpen(false);
            }}
            className="w-full text-left px-[20px] py-[11px] text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{ color: 'var(--hc-accent)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '';
            }}
          >
            Remove all
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Main Component ───────────────────── */

export function ToolsSidebar() {
  const activeTool = useDrawingStore((s) => s.activeToolType);
  const setActiveTool = useDrawingStore((s) => s.setActiveTool);
  const clearAllDrawings = useDrawingStore((s) => s.clearAllDrawings);

  const handleSelect = (type: DrawingToolType | 'cursor') => {
    if (type === 'cursor') {
      setActiveTool(null);
    } else {
      setActiveTool(activeTool === type ? null : type);
    }
  };

  return (
    <div
      className="w-[36px] md:w-[48px] rounded-tr-[6px] rounded-br-[6px] flex flex-col items-center shrink-0 h-full transition-colors duration-200"
      style={{
        overflow: 'visible',
        backgroundColor: 'var(--hc-surface)',
      }}
    >
      {/* Drawing tools */}
      <div className="flex flex-col items-center shrink-0">
        {DRAWING_TOOLS.map((tool) => {
          const isSelected =
            tool.type === 'cursor' ? activeTool === null : activeTool === tool.type;
          return (
            <ToolButton
              key={tool.type}
              isSelected={isSelected}
              onClick={() => handleSelect(tool.type)}
              name={tool.name}
            >
              {tool.icon(isSelected)}
            </ToolButton>
          );
        })}
      </div>

      {/* Divider */}
      <div
        className="w-[32px] h-px rounded-md my-[8px] shrink-0"
        style={{ backgroundColor: 'var(--hc-border)' }}
      />

      {/* View tools */}
      <div className="flex flex-col items-center shrink-0">
        {VIEW_TOOLS.map((tool) => {
          const isSelected = activeTool === tool.type;
          return (
            <ToolButton
              key={tool.type}
              isSelected={isSelected}
              onClick={() => handleSelect(tool.type)}
              name={tool.name}
            >
              {tool.icon(isSelected)}
            </ToolButton>
          );
        })}
      </div>

      {/* Divider */}
      <div
        className="w-[32px] h-px rounded-md my-[8px] shrink-0"
        style={{ backgroundColor: 'var(--hc-border)' }}
      />

      {/* Remove */}
      <div className="shrink-0">
        <RemoveButton
          onRemoveDrawings={clearAllDrawings}
          onRemoveAll={clearAllDrawings}
        />
      </div>
    </div>
  );
}
