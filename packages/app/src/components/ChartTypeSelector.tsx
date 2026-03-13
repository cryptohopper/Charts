import { useEffect, useRef } from "react";

export interface ChartType {
  id: string;
  label: string;
  icon: React.ReactNode;
}

function CandlestickIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5 16.5V1.5" stroke={color} strokeLinecap="round" />
      <rect x="3" y="4" width="4" height="10" rx="0.5" fill="none" stroke={color} />
      <path d="M13 14V1.5" stroke={color} strokeLinecap="round" />
      <rect x="11" y="4" width="4" height="7.5" rx="0.5" fill="none" stroke={color} />
    </svg>
  );
}

function HollowCandleIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5 16.5V1.5" stroke={color} strokeLinecap="round" />
      <rect x="3" y="4" width="4" height="10" rx="0.5" stroke={color} strokeDasharray="2 1" />
      <path d="M13 14V1.5" stroke={color} strokeLinecap="round" />
      <rect x="11" y="4" width="4" height="7.5" rx="0.5" stroke={color} />
    </svg>
  );
}

function BarIcon({ color }: { color: string }) {
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
}

function LineIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1 13L5 8L9 10.5L13 4L17 7" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AreaIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1 13L5 8L9 10.5L13 4L17 7V16H1V13Z" fill={color} fillOpacity="0.12" />
      <path d="M1 13L5 8L9 10.5L13 4L17 7" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BaselineIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1 10H17" stroke={color} strokeOpacity="0.3" strokeDasharray="2 2" />
      <path d="M1 13L4 8L7 11L10 5L13 9L17 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeikinAshiIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5 16V1.5" stroke={color} strokeLinecap="round" />
      <rect x="3" y="5" width="4" height="8" rx="0.5" fill={color} fillOpacity="0.2" stroke={color} />
      <path d="M13 15V2" stroke={color} strokeLinecap="round" />
      <rect x="11" y="4" width="4" height="7" rx="0.5" fill={color} fillOpacity="0.2" stroke={color} />
    </svg>
  );
}

function RenkoIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="10" width="4" height="4" stroke={color} />
      <rect x="5" y="6" width="4" height="4" stroke={color} />
      <rect x="9" y="10" width="4" height="4" stroke={color} />
      <rect x="13" y="6" width="4" height="4" stroke={color} />
    </svg>
  );
}

const CHART_TYPES: ChartType[] = [
  { id: "candles", label: "Candles", icon: <CandlestickIcon color="currentColor" /> },
  { id: "hollow", label: "Hollow Candles", icon: <HollowCandleIcon color="currentColor" /> },
  { id: "bar", label: "Bar (OHLC)", icon: <BarIcon color="currentColor" /> },
  { id: "line", label: "Line", icon: <LineIcon color="currentColor" /> },
  { id: "area", label: "Area", icon: <AreaIcon color="currentColor" /> },
  { id: "baseline", label: "Baseline", icon: <BaselineIcon color="currentColor" /> },
  { id: "heikin", label: "Heikin Ashi", icon: <HeikinAshiIcon color="currentColor" /> },
  { id: "renko", label: "Renko", icon: <RenkoIcon color="currentColor" /> },
];

interface ChartTypeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selected: string;
  onSelect: (ct: ChartType) => void;
}

export function ChartTypeSelector({ isOpen, onClose, selected, onSelect }: ChartTypeSelectorProps) {
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
      className="absolute left-0 top-[44px] z-50 flex flex-col rounded-lg py-[6px]"
      style={{
        width: 200,
        backgroundColor: "var(--hc-modal-bg)",
        border: "1px solid var(--hc-border)",
        boxShadow: "var(--hc-shadow)",
      }}
    >
      {CHART_TYPES.map((chartType) => {
        const isSelected = chartType.id === selected;
        return (
          <button
            key={chartType.id}
            onClick={() => {
              onSelect(chartType);
              onClose();
            }}
            className="flex w-full cursor-pointer items-center gap-[10px] px-[14px] py-[8px] transition-colors"
            style={{
              backgroundColor: isSelected ? "var(--hc-selected-bg)" : undefined,
              color: isSelected ? "#00b1c7" : "var(--hc-text)",
            }}
            onMouseEnter={(e) => {
              if (!isSelected) e.currentTarget.style.backgroundColor = "var(--hc-hover-bg)";
            }}
            onMouseLeave={(e) => {
              if (!isSelected) e.currentTarget.style.backgroundColor = "";
            }}
          >
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center">
              {chartType.icon}
            </span>
            <span className="flex-1 text-left text-[13px] font-['Source_Sans_3',sans-serif]">
              {chartType.label}
            </span>
            {isSelected ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path d="M2.5 7L5.5 10L11.5 4" stroke="#00b1c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export function ChartTypeToolbarIcon({ chartTypeId }: { chartTypeId: string }) {
  const iconStroke = "var(--hc-icon-stroke)";
  switch (chartTypeId) {
    case "candles":
      return (
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
          <path d="M3 17.5V0.5" stroke={iconStroke} strokeLinecap="round" strokeLinejoin="round" />
          <rect x="1" y="3.3" width="4" height="11.3" fill="var(--hc-surface)" stroke={iconStroke} />
          <path d="M9 14.5V0.5" stroke={iconStroke} strokeLinecap="round" strokeLinejoin="round" />
          <rect x="7" y="3.3" width="4" height="8.4" fill="var(--hc-surface)" stroke={iconStroke} />
        </svg>
      );
    case "hollow":
      return (
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
          <path d="M3 17.5V0.5" stroke={iconStroke} strokeLinecap="round" />
          <rect x="1" y="3.3" width="4" height="11.3" stroke={iconStroke} strokeDasharray="2 1" />
          <path d="M9 14.5V0.5" stroke={iconStroke} strokeLinecap="round" />
          <rect x="7" y="3.3" width="4" height="8.4" stroke={iconStroke} />
        </svg>
      );
    case "bar":
      return (
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
          <path d="M4 1V17" stroke={iconStroke} strokeLinecap="round" />
          <path d="M4 4H1" stroke={iconStroke} strokeLinecap="round" />
          <path d="M4 14H7" stroke={iconStroke} strokeLinecap="round" />
          <path d="M10 3V15" stroke={iconStroke} strokeLinecap="round" />
          <path d="M10 5H7" stroke={iconStroke} strokeLinecap="round" />
          <path d="M10 13H13" stroke={iconStroke} strokeLinecap="round" />
        </svg>
      );
    case "line":
      return (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M1 11L5 6L9 8.5L13 2L17 5" stroke={iconStroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "area":
      return (
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
          <path d="M1 11L5 6L9 8.5L13 2L17 5V15H1V11Z" fill={iconStroke} fillOpacity="0.08" />
          <path d="M1 11L5 6L9 8.5L13 2L17 5" stroke={iconStroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "baseline":
      return (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M1 8H17" stroke={iconStroke} strokeOpacity="0.2" strokeDasharray="2 2" />
          <path d="M1 11L4 6L7 9L10 3L13 7L17 4" stroke={iconStroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "heikin":
      return (
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
          <path d="M3 17V1" stroke={iconStroke} strokeLinecap="round" />
          <rect x="1" y="4" width="4" height="9" fill={iconStroke} fillOpacity="0.1" stroke={iconStroke} />
          <path d="M9 15V1.5" stroke={iconStroke} strokeLinecap="round" />
          <rect x="7" y="3.5" width="4" height="7" fill={iconStroke} fillOpacity="0.1" stroke={iconStroke} />
        </svg>
      );
    case "renko":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="0.5" y="8.5" width="3.5" height="3.5" stroke={iconStroke} />
          <rect x="4" y="4.5" width="3.5" height="3.5" stroke={iconStroke} />
          <rect x="7.5" y="8.5" width="3.5" height="3.5" stroke={iconStroke} />
          <rect x="11" y="4.5" width="3.5" height="3.5" stroke={iconStroke} />
        </svg>
      );
    default:
      return <CandlestickIcon color={iconStroke} />;
  }
}
