import { useState, useRef, useEffect } from "react";
import { type TextDrawing } from "./drawing-types";

/* --- Types --- */

interface TextSettingsPanelProps {
  drawing: TextDrawing;
  onUpdate: (updates: Partial<TextDrawing>) => void;
  onClose: () => void;
}

/* --- Color Swatch Dropdown --- */

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
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <div
        className={`size-[32px] rounded-[4px] flex items-center justify-center cursor-pointer ${disabled ? "opacity-40 pointer-events-none" : ""}`}
        style={{ border: '1px solid var(--hc-border)' }}
        onClick={() => setOpen(!open)}
      >
        <div className="size-[18px] rounded-[4px]" style={{ backgroundColor: color }} />
      </div>
      {open && (
        <div className="absolute top-[36px] left-0 z-50 rounded-[4px] p-[8px] w-[152px]" style={{ backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
          <div className="grid grid-cols-4 gap-[6px]">
            {PRESET_COLORS.map((c) => (
              <div
                key={c}
                className="size-[26px] rounded-[2px] cursor-pointer relative"
                style={{
                  backgroundColor: c,
                  border: c === "#FFFFFF" ? "1px solid var(--hc-border)" : "none",
                }}
                onClick={() => { onChange(c); setOpen(false); }}
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

/* --- Font Size Dropdown --- */

const FONT_SIZES = [10, 12, 14, 16, 18, 20, 24];

function FontSizeDropdown({
  value,
  onChange,
}: {
  value: number;
  onChange: (s: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <div
        className="h-[28px] w-[62px] rounded-[4px] flex items-center justify-between px-[8px] cursor-pointer"
        style={{ border: '1px solid var(--hc-border)', backgroundColor: 'var(--hc-input-bg)' }}
        onClick={() => setOpen(!open)}
      >
        <span className="font-['Source_Sans_3',sans-serif] text-[14px]" style={{ color: 'var(--hc-text)' }}>
          {value}
        </span>
        <svg width="7" height="4" viewBox="0 0 7 4" fill="none">
          <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="var(--hc-text-secondary)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {open && (
        <div className="absolute top-[32px] left-0 z-50 rounded-[4px] w-[62px] py-[4px]" style={{ backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
          {FONT_SIZES.map((s) => (
            <div
              key={s}
              className="h-[28px] flex items-center px-[12px] cursor-pointer font-['Source_Sans_3',sans-serif] text-[12px]"
              style={{ color: 'var(--hc-text)', backgroundColor: s === value ? 'var(--hc-surface-active)' : undefined }}
              onMouseEnter={(e) => { if (s !== value) e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'; }}
              onMouseLeave={(e) => { if (s !== value) e.currentTarget.style.backgroundColor = ''; }}
              onClick={() => { onChange(s); setOpen(false); }}
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* --- Checkbox --- */

function Checkbox({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="size-[24px] flex items-center justify-center cursor-pointer shrink-0" onClick={() => onChange(!checked)}>
      <div
        className="size-[18px] rounded-[3px] border flex items-center justify-center"
        style={{
          borderColor: checked ? "#00b1c7" : "var(--hc-border-strong)",
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

/* --- Text Style Button --- */

function TextStyleButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <div
      className="size-[32px] rounded-[4px] flex items-center justify-center cursor-pointer"
      style={{
        border: active ? "1px solid #00b1c7" : "1px solid var(--hc-border)",
        backgroundColor: active ? "var(--hc-accent-bg)" : "var(--hc-surface)",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/* --- Main Panel --- */

export function TextSettingsPanel({ drawing, onUpdate, onClose }: TextSettingsPanelProps) {
  return (
    <div
      className="rounded-[6px] w-[350px] overflow-hidden"
      style={{ backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[15px] py-[12px]" style={{ borderBottom: '1px solid var(--hc-border)' }}>
        <span className="font-['Source_Sans_3',sans-serif] text-[14px]" style={{ color: 'var(--hc-text)' }}>Text</span>
        <div className="size-[24px] flex items-center justify-center cursor-pointer rounded" onClick={onClose}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 1L9 9M9 1L1 9" stroke="var(--hc-text-secondary)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Font controls row */}
      <div className="px-[15px] pt-[12px] pb-[8px]">
        <div className="flex items-center gap-[8px]">
          <FontSizeDropdown value={drawing.fontSize} onChange={(s) => onUpdate({ fontSize: s })} />
          <ColorDropdown color={drawing.color} onChange={(c) => onUpdate({ color: c })} />
          <TextStyleButton active={drawing.bold} onClick={() => onUpdate({ bold: !drawing.bold })}>
            <span className="font-['Source_Sans_3',sans-serif] text-[14px]" style={{ fontWeight: 700, color: drawing.bold ? "#00b1c7" : "var(--hc-text)" }}>B</span>
          </TextStyleButton>
          <TextStyleButton active={drawing.italic} onClick={() => onUpdate({ italic: !drawing.italic })}>
            <span className="font-['Source_Sans_3',sans-serif] text-[14px]" style={{ fontStyle: "italic", color: drawing.italic ? "#00b1c7" : "var(--hc-text)" }}>I</span>
          </TextStyleButton>
        </div>
      </div>

      {/* Text area */}
      <div className="px-[15px] pb-[12px]">
        <textarea
          className="w-full h-[132px] rounded-[4px] p-[12px] font-['Source_Sans_3',sans-serif] text-[14px] resize-none outline-none"
          style={{ border: '1px solid var(--hc-border)', backgroundColor: 'var(--hc-input-bg)', color: 'var(--hc-text)' }}
          placeholder="Type here..."
          value={drawing.text}
          onChange={(e) => onUpdate({ text: e.target.value })}
          autoFocus
        />
      </div>

      {/* Options */}
      <div className="px-[15px] pb-[12px] flex flex-col gap-[8px]">
        <div className="flex items-center gap-[8px]">
          <Checkbox checked={drawing.showBackground} onChange={(v) => onUpdate({ showBackground: v })} />
          <span className="font-['Source_Sans_3',sans-serif] text-[14px] flex-1" style={{ color: 'var(--hc-text)' }}>Background</span>
          <ColorDropdown color={drawing.backgroundColor} onChange={(c) => onUpdate({ backgroundColor: c })} disabled={!drawing.showBackground} />
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox checked={drawing.showBorder} onChange={(v) => onUpdate({ showBorder: v })} />
          <span className="font-['Source_Sans_3',sans-serif] text-[14px] flex-1" style={{ color: 'var(--hc-text)' }}>Border</span>
          <ColorDropdown color={drawing.borderColor} onChange={(c) => onUpdate({ borderColor: c })} disabled={!drawing.showBorder} />
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox checked={drawing.textWrap} onChange={(v) => onUpdate({ textWrap: v })} />
          <span className="font-['Source_Sans_3',sans-serif] text-[14px]" style={{ color: 'var(--hc-text)' }}>Text Wrap</span>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="flex items-center justify-between px-[15px] py-[12px]" style={{ borderTop: '1px solid var(--hc-border)' }}>
        <button
          className="font-['Source_Sans_3',sans-serif] text-[12px] cursor-pointer"
          style={{ color: 'var(--hc-text-secondary)' }}
          onClick={() =>
            onUpdate({
              fontSize: 14,
              bold: false,
              italic: false,
              showBackground: false,
              showBorder: true,
              textWrap: true,
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
