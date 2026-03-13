import { useEffect, useRef } from "react";

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
      { id: "5m", label: "5 minutes", shortLabel: "5m" },
      { id: "15m", label: "15 minutes", shortLabel: "15m" },
    ],
  },
  {
    title: "Hours",
    items: [
      { id: "1h", label: "1 hour", shortLabel: "1H" },
      { id: "4h", label: "4 hours", shortLabel: "4H" },
    ],
  },
  {
    title: "Days",
    items: [{ id: "1d", label: "1 day", shortLabel: "D" }],
  },
  {
    title: "Weeks",
    items: [{ id: "1w", label: "1 week", shortLabel: "W" }],
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
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose();
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
      className="absolute left-0 top-[44px] z-50 flex flex-col rounded-lg py-[8px]"
      style={{
        width: 200,
        backgroundColor: "var(--hc-modal-bg)",
        border: "1px solid var(--hc-border)",
        boxShadow: "var(--hc-shadow)",
      }}
    >
      {TIMEFRAME_GROUPS.map((group, groupIndex) => (
        <div key={group.title}>
          <div className="px-[16px] pb-[4px] pt-[8px]">
            <span className="text-[11px] uppercase tracking-wider font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-muted)" }}>
              {group.title}
            </span>
          </div>

          {group.items.map((timeframe) => {
            const isSelected = timeframe.id === selected;
            return (
              <button
                key={timeframe.id}
                onClick={() => {
                  onSelect(timeframe);
                  onClose();
                }}
                className="flex w-full cursor-pointer items-center justify-between px-[16px] py-[7px] transition-colors"
                style={{ backgroundColor: isSelected ? "var(--hc-selected-bg)" : undefined }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = "var(--hc-hover-bg)";
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = "";
                }}
              >
                <span
                  className="text-[13px] font-['Source_Sans_3',sans-serif]"
                  style={{ color: isSelected ? "#00b1c7" : "var(--hc-text)" }}
                >
                  {timeframe.label}
                </span>
                <span
                  className="text-[13px] tabular-nums font-['Source_Sans_3',sans-serif]"
                  style={{ color: isSelected ? "#00b1c7" : "var(--hc-text-muted)" }}
                >
                  {timeframe.shortLabel}
                </span>
              </button>
            );
          })}

          {groupIndex < TIMEFRAME_GROUPS.length - 1 ? (
            <div className="mx-[16px] my-[4px] h-px" style={{ backgroundColor: "var(--hc-border)" }} />
          ) : null}
        </div>
      ))}
    </div>
  );
}
