import { useRef, useEffect } from "react";

export interface Timeframe {
  id: string;
  label: string;
  shortLabel: string;
}

interface TimeframeGroup {
  title: string;
  items: Timeframe[];
}

const TIMEFRAME_GROUPS: TimeframeGroup[] = [
  {
    title: "Minutes",
    items: [
      { id: "1m", label: "1 minute", shortLabel: "1m" },
      { id: "3m", label: "3 minutes", shortLabel: "3m" },
      { id: "5m", label: "5 minutes", shortLabel: "5m" },
      { id: "15m", label: "15 minutes", shortLabel: "15m" },
      { id: "30m", label: "30 minutes", shortLabel: "30m" },
      { id: "45m", label: "45 minutes", shortLabel: "45m" },
    ],
  },
  {
    title: "Hours",
    items: [
      { id: "1h", label: "1 hour", shortLabel: "1H" },
      { id: "2h", label: "2 hours", shortLabel: "2H" },
      { id: "3h", label: "3 hours", shortLabel: "3H" },
      { id: "4h", label: "4 hours", shortLabel: "4H" },
    ],
  },
  {
    title: "Days",
    items: [
      { id: "1d", label: "1 day", shortLabel: "D" },
    ],
  },
  {
    title: "Weeks",
    items: [
      { id: "1w", label: "1 week", shortLabel: "W" },
    ],
  },
  {
    title: "Months",
    items: [
      { id: "1M", label: "1 month", shortLabel: "M" },
    ],
  },
];

interface TimeframeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selected: string;
  onSelect: (tf: Timeframe) => void;
}

export function TimeframeSelector({ isOpen, onClose, selected, onSelect }: TimeframeSelectorProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
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

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="absolute top-[44px] left-0 z-50 rounded-lg flex flex-col py-[8px]"
      style={{ width: 200, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
    >
      {TIMEFRAME_GROUPS.map((group, gi) => (
        <div key={group.title}>
          {/* Group title */}
          <div className="px-[16px] pt-[8px] pb-[4px]">
            <span className="text-[11px] font-['Source_Sans_3',sans-serif] uppercase tracking-wider" style={{ color: 'var(--hc-text-muted)' }}>
              {group.title}
            </span>
          </div>

          {/* Items */}
          {group.items.map((tf) => {
            const isSelected = tf.id === selected;
            return (
              <button
                key={tf.id}
                onClick={() => {
                  onSelect(tf);
                  onClose();
                }}
                className="w-full flex items-center justify-between px-[16px] py-[7px] transition-colors cursor-pointer"
                style={{ backgroundColor: isSelected ? 'var(--hc-selected-bg)' : undefined }}
                onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'; }}
                onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = ''; }}
              >
                <span
                  className="text-[13px] font-['Source_Sans_3',sans-serif]"
                  style={{ color: isSelected ? '#00b1c7' : 'var(--hc-text)' }}
                >
                  {tf.label}
                </span>
                <span
                  className="text-[13px] font-['Source_Sans_3',sans-serif] tabular-nums"
                  style={{ color: isSelected ? '#00b1c7' : 'var(--hc-text-muted)' }}
                >
                  {tf.shortLabel}
                </span>
              </button>
            );
          })}

          {/* Separator between groups (not after last) */}
          {gi < TIMEFRAME_GROUPS.length - 1 && (
            <div className="h-px mx-[16px] my-[4px]" style={{ backgroundColor: 'var(--hc-border)' }} />
          )}
        </div>
      ))}
    </div>
  );
}
