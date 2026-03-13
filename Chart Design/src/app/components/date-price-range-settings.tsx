import { useState, useRef, useEffect } from "react";
import { type DatePriceRangeDrawing } from "./drawing-types";

/* ─── Types ─────────────────────────────────────── */

interface DatePriceRangeSettingsPanelProps {
  drawing: DatePriceRangeDrawing;
  onUpdate: (updates: Partial<DatePriceRangeDrawing>) => void;
  onClose: () => void;
}

/* ─── Color Dropdown (reusable) ──────────────────── */

const PRESET_COLORS = [
  "#FFFFFF", "#FDF368", "#F2C847", "#DE5537",
  "#E6E6E6", "#D4E560", "#9FCE62", "#C72C63",
  "#808080", "#61CAD2", "#4EA48B", "#8728A6",
  "#1A1A1A", "#519BE9", "#424EAC", "#5D34AD",
  "#A6A6A6", "#04073D", "#5E9F55", "#A08FDD",
  "#5E5E5E", "#E93323", "#F88922", "#BABAC1",
];

function ColorDropdown({
  color,
  onChange,
  disabled,
}: {
  color: string;
  onChange: (c: string) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <div
        className={`size-[32px] rounded-[4px] border border-[#efeff4] flex items-center justify-center cursor-pointer ${disabled ? "opacity-40 pointer-events-none" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div
          className="size-[18px] rounded-[4px]"
          style={{ backgroundColor: color }}
        />
      </div>
      {open && (
        <div className="absolute top-[36px] right-0 z-50 rounded-[4px] p-[8px] w-[152px]" style={{ backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
          <div className="grid grid-cols-4 gap-[6px]">
            {PRESET_COLORS.map((c) => (
              <div
                key={c}
                className="size-[26px] rounded-[2px] cursor-pointer relative"
                style={{
                  backgroundColor: c,
                  border: c === "#FFFFFF" ? "1px solid #efeff4" : "none",
                }}
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                }}
              >
                {c.toUpperCase() === color.toUpperCase() && (
                  <div className="absolute inset-[2px] rounded-[2px] border border-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Checkbox ──────────────────────────────────── */

function Checkbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      className="size-[24px] flex items-center justify-center cursor-pointer shrink-0"
      onClick={() => onChange(!checked)}
    >
      <div
        className="size-[18px] rounded-[3px] border flex items-center justify-center"
        style={{
          borderColor: checked ? "#00b1c7" : "#babac1",
          backgroundColor: checked ? "#00b1c7" : "transparent",
        }}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}

/* ─── Thickness Dots ────────────────────────────── */

function ThicknessDots({
  selected,
  onChange,
}: {
  selected: number;
  onChange: (t: number) => void;
}) {
  const sizes = [
    { t: 1, r: 2, label: "XS" },
    { t: 2, r: 3, label: "S" },
    { t: 3, r: 4, label: "M" },
    { t: 4, r: 5, label: "L" },
  ];

  return (
    <div className="flex items-center gap-[28px]">
      {sizes.map(({ t, r, label }) => (
        <div
          key={label}
          className="flex items-center justify-center cursor-pointer"
          onClick={() => onChange(t)}
          title={label}
        >
          <div
            className="rounded-full"
            style={{
              width: r * 2,
              height: r * 2,
              backgroundColor: selected === t ? "#00B1C7" : "#3E3E3E",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Main Panel ────────────────────────────────── */

export function DatePriceRangeSettingsPanel({
  drawing,
  onUpdate,
  onClose,
}: DatePriceRangeSettingsPanelProps) {
  const [activeTab, setActiveTab] = useState<"style" | "coordinates">("style");

  return (
    <div
      className="rounded-[6px] w-[350px] overflow-hidden"
      style={{ backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[15px] py-[12px]" style={{ borderBottom: '1px solid var(--hc-border)' }}>
        <span className="font-['Source_Sans_3',sans-serif] text-[14px]" style={{ color: 'var(--hc-text)' }}>
          Date & Price Range
        </span>
        <div
          className="size-[24px] flex items-center justify-center cursor-pointer rounded hover:bg-[#f8f8ff]"
          onClick={onClose}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 1L9 9M9 1L1 9" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#efeff4]">
        <button
          className={`flex-1 py-[8px] text-center font-['Source_Sans_3',sans-serif] text-[13px] cursor-pointer border-b-2 ${
            activeTab === "style"
              ? "text-[#00b1c7] border-[#00b1c7]"
              : "text-[#8e8e93] border-transparent"
          }`}
          onClick={() => setActiveTab("style")}
        >
          Style
        </button>
        <button
          className={`flex-1 py-[8px] text-center font-['Source_Sans_3',sans-serif] text-[13px] cursor-pointer border-b-2 ${
            activeTab === "coordinates"
              ? "text-[#00b1c7] border-[#00b1c7]"
              : "text-[#8e8e93] border-transparent"
          }`}
          onClick={() => setActiveTab("coordinates")}
        >
          Coordinates
        </button>
      </div>

      {activeTab === "style" ? (
        <div className="px-[15px] py-[12px] flex flex-col gap-[12px]">
          {/* Color */}
          <div className="flex items-center justify-between">
            <span className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#1f1f1f]">
              Color
            </span>
            <ColorDropdown
              color={drawing.color}
              onChange={(c) => onUpdate({ color: c })}
            />
          </div>

          {/* Lines (thickness) */}
          <div className="flex items-center justify-between">
            <span className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#1f1f1f]">
              Lines
            </span>
            <ThicknessDots
              selected={drawing.thickness}
              onChange={(t) => onUpdate({ thickness: t })}
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-[#efeff4]" />

          {/* Border */}
          <div className="flex items-center gap-[8px]">
            <Checkbox
              checked={drawing.showBorder}
              onChange={(v) => onUpdate({ showBorder: v })}
            />
            <span className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#1f1f1f] flex-1">
              Border
            </span>
            <ColorDropdown
              color={drawing.color}
              onChange={(c) => onUpdate({ color: c })}
              disabled={!drawing.showBorder}
            />
          </div>

          {/* Background */}
          <div className="flex items-center gap-[8px]">
            <Checkbox
              checked={drawing.showBackground}
              onChange={(v) => onUpdate({ showBackground: v })}
            />
            <span className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#1f1f1f] flex-1">
              Background
            </span>
            <ColorDropdown
              color={drawing.color}
              onChange={(c) => onUpdate({ color: c })}
              disabled={!drawing.showBackground}
            />
          </div>

          {/* Label Background */}
          <div className="flex items-center gap-[8px]">
            <Checkbox
              checked={drawing.showLabelBackground}
              onChange={(v) => onUpdate({ showLabelBackground: v })}
            />
            <span className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#1f1f1f] flex-1">
              Label Background
            </span>
            <ColorDropdown
              color={drawing.color}
              onChange={(c) => onUpdate({ color: c })}
              disabled={!drawing.showLabelBackground}
            />
          </div>
        </div>
      ) : (
        <div className="px-[15px] py-[12px] flex flex-col gap-[12px]">
          {/* Coordinates tab content */}
          <div className="flex items-center justify-between">
            <span className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#8e8e93]">
              #1 Price (bid)
            </span>
            <div className="flex gap-[8px]">
              <div className="border border-[#efeff4] rounded-[4px] px-[8px] py-[4px] font-['Source_Sans_3',sans-serif] text-[13px] text-[#1f1f1f] bg-white w-[80px] text-right">
                {drawing.startPrice.toFixed(2)}
              </div>
              <div className="border border-[#efeff4] rounded-[4px] px-[8px] py-[4px] font-['Source_Sans_3',sans-serif] text-[13px] text-[#1f1f1f] bg-white w-[52px] text-right">
                {drawing.startIndex}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#8e8e93]">
              #2 Price (bid)
            </span>
            <div className="flex gap-[8px]">
              <div className="border border-[#efeff4] rounded-[4px] px-[8px] py-[4px] font-['Source_Sans_3',sans-serif] text-[13px] text-[#1f1f1f] bg-white w-[80px] text-right">
                {drawing.endPrice.toFixed(2)}
              </div>
              <div className="border border-[#efeff4] rounded-[4px] px-[8px] py-[4px] font-['Source_Sans_3',sans-serif] text-[13px] text-[#1f1f1f] bg-white w-[52px] text-right">
                {drawing.endIndex}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer buttons */}
      <div className="flex items-center justify-between px-[15px] py-[12px] border-t border-[#efeff4]">
        <button
          className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#8e8e93] hover:text-[#1f1f1f] cursor-pointer"
          onClick={() =>
            onUpdate({
              thickness: 1,
              showBorder: true,
              showBackground: true,
              showLabelBackground: true,
            })
          }
        >
          Reset To Default
        </button>
        <button
          className="bg-[#00b1c7] text-white font-['Source_Sans_3',sans-serif] text-[12px] px-[16px] py-[6px] rounded-[4px] cursor-pointer hover:bg-[#009fb3]"
          onClick={onClose}
        >
          Apply
        </button>
      </div>
    </div>
  );
}