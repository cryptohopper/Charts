import { useState, useRef, useEffect, useMemo } from "react";

/* ─── Data ──────────────────────────────────── */

const TIMEFRAMES = ["1D", "5D", "1M", "3M", "6M", "YTD", "1Y", "5Y", "All"];

const TIMEZONES = [
  "UTC",
  "Exchange",
  "(UTC-10) Honolulu",
  "(UTC-8) Juneau",
  "(UTC-7) Los Angeles",
  "(UTC-7) Phoenix",
  "(UTC-7) Vancouver",
  "(UTC-6) Denver",
  "(UTC-6) Mexico City",
  "(UTC-6) San Salvador",
  "(UTC-5) Bogota",
  "(UTC-5) Chicago",
  "(UTC-5) Lima",
  "(UTC-5) New York",
  "(UTC-4) Caracas",
  "(UTC-3) Buenos Aires",
  "(UTC-3) Sao Paulo",
  "(UTC-1) Azores",
  "(UTC+0) London",
  "(UTC+1) Amsterdam",
  "(UTC+1) Berlin",
  "(UTC+1) Madrid",
  "(UTC+1) Paris",
  "(UTC+1) Rome",
  "(UTC+2) Athens",
  "(UTC+2) Helsinki",
  "(UTC+2) Istanbul",
  "(UTC+3) Moscow",
  "(UTC+3) Riyadh",
  "(UTC+4) Dubai",
  "(UTC+5) Karachi",
  "(UTC+5:30) Mumbai",
  "(UTC+7) Bangkok",
  "(UTC+8) Hong Kong",
  "(UTC+8) Shanghai",
  "(UTC+8) Singapore",
  "(UTC+9) Seoul",
  "(UTC+9) Tokyo",
  "(UTC+10) Sydney",
  "(UTC+12) Auckland",
];

type ScaleMode = "%" | "log" | "reg";

/* ─── Tooltip (bottom-pointing arrow, appears above) ──────── */

function FooterTooltip({ text, anchorRect }: { text: string; anchorRect: DOMRect | null }) {
  if (!anchorRect) return null;
  return (
    <div
      className="fixed z-[9999] flex flex-col items-center pointer-events-none"
      style={{
        left: anchorRect.left + anchorRect.width / 2,
        top: anchorRect.top - 8,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div className="px-[15px] py-[8px] rounded-[3px] whitespace-nowrap" style={{ backgroundColor: 'var(--hc-tooltip-bg)' }}>
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-tooltip-text)' }}>{text}</span>
      </div>
      {/* Arrow pointing down */}
      <svg width="14" height="7" viewBox="0 0 14 7" fill="none" className="shrink-0 -mt-px">
        <path
          d="M7.87 6.42C7.56 6.74 7.4 6.91 7.22 6.96C7.08 7.01 6.92 7.01 6.78 6.96C6.6 6.91 6.44 6.74 6.13 6.42L0 0H14L7.87 6.42Z"
          fill="var(--hc-tooltip-bg)"
        />
      </svg>
    </div>
  );
}

/* ─── Timezone Picker ──────────────────────────── */

interface TimezonePickerProps {
  open: boolean;
  onClose: () => void;
  selected: string;
  onSelect: (tz: string) => void;
  anchorRect: DOMRect | null;
}

function TimezonePicker({ open, onClose, selected, onSelect, anchorRect }: TimezonePickerProps) {
  const [search, setSearch] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  const filtered = useMemo(
    () =>
      search.trim()
        ? TIMEZONES.filter((tz) => tz.toLowerCase().includes(search.toLowerCase()))
        : TIMEZONES,
    [search]
  );

  if (!open || !anchorRect) return null;

  return (
    <div
      ref={panelRef}
      className="fixed z-[9999] w-[250px] rounded-[6px] flex flex-col transition-colors duration-200"
      style={{
        backgroundColor: 'var(--hc-surface)',
        border: '1px solid var(--hc-border)',
        boxShadow: 'var(--hc-shadow)',
        left: anchorRect.left + anchorRect.width / 2 - 125,
        bottom: window.innerHeight - anchorRect.top + 12,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[15px] h-[40px] rounded-t-[6px] shrink-0" style={{ backgroundColor: 'var(--hc-modal-header)' }}>
        <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600, color: 'var(--hc-text)' }}>
          Timezone
        </span>
        <button onClick={onClose} className="w-[24px] h-[24px] flex items-center justify-center">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Search */}
      <div className="px-[12px] pt-[8px] pb-[4px] shrink-0">
        <div className="flex items-center gap-[8px]">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
            <circle cx="5.56" cy="5.56" r="5.06" stroke="#BABAC1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 14.5L9.06 9.44" stroke="#BABAC1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for timezone"
            className="flex-1 text-[14px] font-['Source_Sans_3',sans-serif] placeholder:text-[#babac1] outline-none bg-transparent"
            style={{ color: 'var(--hc-text)' }}
          />
        </div>
        <div className="h-px rounded-md mt-[8px]" style={{ backgroundColor: 'var(--hc-border)' }} />
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto max-h-[380px]">
        {filtered.map((tz) => (
          <button
            key={tz}
            onClick={() => {
              onSelect(tz);
              onClose();
            }}
            className={`w-full text-left px-[14px] h-[32px] flex items-center text-[14px] font-['Source_Sans_3',sans-serif] transition-colors ${
              selected === tz
                ? "bg-[#dcf5f7] text-[#00b1c7] rounded-r-[6px]"
                : "hover:bg-[#f8f8ff]"
            }`}
            style={{ color: selected === tz ? '#00b1c7' : 'var(--hc-text)' }}
          >
            {tz}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Footer Bar ──────────────────────────────────── */

export function FooterBar() {
  const [selectedTF, setSelectedTF] = useState("6M");
  const [scaleMode, setScaleMode] = useState<ScaleMode>("reg");
  const [timezone, setTimezone] = useState("UTC");
  const [tzOpen, setTzOpen] = useState(false);
  const [hoveredScale, setHoveredScale] = useState<ScaleMode | null>(null);

  const tzBtnRef = useRef<HTMLButtonElement>(null);
  const [tzBtnRect, setTzBtnRect] = useState<DOMRect | null>(null);

  const pctRef = useRef<HTMLButtonElement>(null);
  const logRef = useRef<HTMLButtonElement>(null);
  const regRef = useRef<HTMLButtonElement>(null);
  const [hoverRect, setHoverRect] = useState<DOMRect | null>(null);

  // Build display time
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, "0");
      const m = String(now.getUTCMinutes()).padStart(2, "0");
      const s = String(now.getUTCSeconds()).padStart(2, "0");
      // Extract UTC offset label from timezone
      const match = timezone.match(/\(([^)]+)\)/);
      const label = match ? match[1] : "UTC";
      setTime(`${h}:${m}:${s} (${label})`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  const scaleTooltip: Record<ScaleMode, string> = {
    "%": "Percentage",
    log: "Logarithmic Scale",
    reg: "Regular Scale",
  };

  return (
    <div className="h-[32px] md:h-[40px] rounded-none md:rounded-md flex items-center justify-between px-[6px] md:px-[10px] transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)' }}>
      {/* Timeframes */}
      <div className="flex items-center gap-[8px] md:gap-[16px] overflow-x-auto no-scrollbar">
        {TIMEFRAMES.map((tf) => (
          <button
            key={tf}
            onClick={() => setSelectedTF(tf)}
            className="px-[6px] md:px-[8px] py-[4px] md:py-[6px] rounded-md text-[11px] md:text-[12px] font-['Source_Sans_3',sans-serif] text-right shrink-0 transition-colors"
            style={{
              backgroundColor: selectedTF === tf ? 'var(--hc-surface-hover)' : undefined,
              color: selectedTF === tf ? 'var(--hc-text)' : 'var(--hc-text-secondary)',
            }}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-[12px]">
        {/* Timezone / Clock */}
        <button
          ref={tzBtnRef}
          onClick={() => {
            setTzBtnRect(tzBtnRef.current?.getBoundingClientRect() ?? null);
            setTzOpen((v) => !v);
          }}
          className="text-[12px] font-['Source_Sans_3',sans-serif] whitespace-nowrap hover:text-[#00b1c7] transition-colors"
          style={{ color: 'var(--hc-text)' }}
        >
          {time}
        </button>

        {/* Divider */}
        <div className="w-px h-[24px] rounded-md" style={{ backgroundColor: 'var(--hc-border)' }} />

        {/* Scale options */}
        <div className="flex items-center gap-[12px]">
          {(["%" , "log", "reg"] as ScaleMode[]).map((mode) => {
            const ref = mode === "%" ? pctRef : mode === "log" ? logRef : regRef;
            const isActive = scaleMode === mode;
            return (
              <button
                key={mode}
                ref={ref}
                onClick={() => setScaleMode(mode)}
                onMouseEnter={() => {
                  setHoveredScale(mode);
                  setHoverRect(ref.current?.getBoundingClientRect() ?? null);
                }}
                onMouseLeave={() => setHoveredScale(null)}
                className={`text-[12px] font-['Source_Sans_3',sans-serif] transition-colors hover:text-[#00b1c7]${isActive && mode === "reg" ? " font-semibold" : ""}`}
                style={{ color: isActive ? '#00b1c7' : 'var(--hc-text)', ...(isActive && mode !== "reg" ? { fontWeight: 600 } : {}) }}
              >
                {mode}
              </button>
            );
          })}
        </div>

        {/* Scale tooltip */}
        {hoveredScale && (
          <FooterTooltip
            text={scaleTooltip[hoveredScale]}
            anchorRect={hoverRect}
          />
        )}
      </div>

      {/* Timezone picker */}
      <TimezonePicker
        open={tzOpen}
        onClose={() => setTzOpen(false)}
        selected={timezone}
        onSelect={setTimezone}
        anchorRect={tzBtnRect}
      />
    </div>
  );
}