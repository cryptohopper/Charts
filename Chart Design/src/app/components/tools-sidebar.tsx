import React, { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-7shvdqa2zb";
import svgPaths2 from "../../imports/svg-mftxr52rhv";

// Merge both SVG path sources for convenience
const S = { ...svgPaths, ...svgPaths2 };

/* ─── Tooltip Component ──────────────────────────────────── */

interface TooltipProps {
  text: string;
  visible: boolean;
  anchorRect: DOMRect | null;
}

function Tooltip({ text, visible, anchorRect }: TooltipProps) {
  if (!visible || !anchorRect) return null;
  const top = anchorRect.top + anchorRect.height / 2;
  const left = anchorRect.right + 4;
  return (
    <div
      className="fixed z-[9999] flex items-center pointer-events-none"
      style={{ top, left, transform: "translateY(-50%)" }}
    >
      {/* Arrow */}
      <svg width="7" height="14" viewBox="0 0 7 14" fill="none" className="shrink-0 -mr-px">
        <path
          d="M0.58 7.87C0.26 7.56 0.09 7.4 0.04 7.22C-0.01 7.08 -0.01 6.92 0.04 6.78C0.09 6.6 0.26 6.44 0.58 6.13L7 0V14L0.58 7.87Z"
          fill="var(--hc-tooltip-bg)"
        />
      </svg>
      {/* Label */}
      <div className="px-[15px] py-[8px] rounded-[3px] whitespace-nowrap" style={{ backgroundColor: 'var(--hc-tooltip-bg)' }}>
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-tooltip-text)' }}>{text}</span>
      </div>
    </div>
  );
}

/* ─── Tool Button ──────────────────────────────────── */

interface ToolButtonProps {
  isSelected?: boolean;
  onClick?: () => void;
  name: string;
  children: React.ReactNode;
}

function ToolButton({ isSelected, onClick, name, children }: ToolButtonProps) {
  const [hovered, setHovered] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseEnter={() => { setHovered(true); setRect(btnRef.current?.getBoundingClientRect() ?? null); }}
      onMouseLeave={() => setHovered(false)}
      className="relative w-[36px] h-[36px] md:w-[48px] md:h-[48px] flex items-center justify-center shrink-0"
    >
      {isSelected && (
        <>
          {/* Subtle tinted background */}
          <div className="absolute inset-[10.42%] rounded" style={{ backgroundColor: 'var(--hc-accent-bg)' }} />
        </>
      )}
      {hovered && !isSelected && (
        <div className="absolute inset-[10.42%] rounded" style={{ backgroundColor: 'var(--hc-surface-hover)' }} />
      )}
      <div className="relative z-10">{children}</div>
      <Tooltip text={name} visible={hovered} anchorRect={rect} />
    </button>
  );
}

/* ─── Remove Button with Dropdown ──────────────────── */

interface RemoveButtonProps {
  onRemoveDrawings?: () => void;
  onRemoveIndicators?: () => void;
  onRemoveAll?: () => void;
}

function RemoveButton({ onRemoveDrawings, onRemoveIndicators, onRemoveAll }: RemoveButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current && !menuRef.current.contains(target) &&
        (!dropdownRef.current || !dropdownRef.current.contains(target))
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={btnRef}
        onClick={() => setMenuOpen((v) => !v)}
        onMouseEnter={() => { setHovered(true); setRect(btnRef.current?.getBoundingClientRect() ?? null); }}
        onMouseLeave={() => setHovered(false)}
        className="relative w-[48px] h-[48px] flex items-center justify-center shrink-0"
      >
        {hovered && (
          <div className="absolute inset-[10.42%] rounded" style={{ backgroundColor: 'var(--hc-surface-hover)' }} />
        )}
        <div className="relative z-10">
          <TrashIcon />
        </div>
        {!menuOpen && <Tooltip text="Remove" visible={hovered} anchorRect={rect} />}
      </button>

      {menuOpen && rect && (
        <div
          className="fixed z-[9999] rounded-[6px] overflow-hidden min-w-[200px] transition-colors duration-200"
          style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)', left: rect.right + 4, bottom: window.innerHeight - rect.bottom }}
          ref={dropdownRef}
        >
          <button
            onClick={() => { onRemoveDrawings?.(); setMenuOpen(false); }}
            className="w-full text-left px-[20px] py-[11px] text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{ color: 'var(--hc-text)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            Remove drawings
          </button>
          <button
            onClick={() => { onRemoveIndicators?.(); setMenuOpen(false); }}
            className="w-full text-left px-[20px] py-[11px] text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{ color: 'var(--hc-text)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            Remove indicators
          </button>
          <button
            onClick={() => { onRemoveAll?.(); setMenuOpen(false); }}
            className="w-full text-left px-[20px] py-[11px] text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{ color: 'var(--hc-accent)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            Remove drawings &amp; indicators
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Icon theme helpers ──────────────────────────────── */
const IC_STROKE = "var(--hc-icon-stroke)";
const IC_FILL_LIGHT = "var(--hc-surface-hover)";
const IC_FILL_SURFACE = "var(--hc-surface)";
const IC_ACTIVE_STROKE = "var(--hc-accent)";
const IC_ACTIVE_FILL = "var(--hc-accent-bg)";

/* ─── Icon components ──────────────────────────────────── */

function CursorIcon({ active }: { active?: boolean }) {
  return (
    <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
      <path
        d={S.p312e4100}
        fill={active ? IC_ACTIVE_FILL : IC_FILL_SURFACE}
        stroke={active ? IC_ACTIVE_STROKE : IC_STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendLineIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_SURFACE;
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={S.p10769600} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p6353880} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p263d7500} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HorizontalLineIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_SURFACE;
  return (
    <svg width="21" height="5" viewBox="0 0 21 5" fill="none">
      <path d="M0.5 2.5L20.5 2.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p1e2ea900} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FibRetracementIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_LIGHT;
  return (
    <svg width="19" height="15" viewBox="0 0 18.9898 14.9032" fill="none">
      <path d="M0.5 8.88704L18.4362 8.88704" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 4.69358L18.4362 4.69358" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 0.5L18.4362 0.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 13.0806L18.4362 13.0806" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p830500} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p2852f280} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FibExtensionIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_LIGHT;
  return (
    <svg width="18" height="18" viewBox="0 0 18.0001 18" fill="none">
      <path d="M0.5 13.4523L17.5 13.4523" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p3ed16360} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p9817e60} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 17.5L17.5 17.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p37eada00} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p184b5df0} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p9bdec80} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.04541 6.16662V7.78567" stroke={stroke} />
    </svg>
  );
}

function ShortPositionIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_LIGHT;
  return (
    <svg width="19" height="17" viewBox="0 0 19 17" fill="none">
      <path d="M2.125 7L18.375 15.125" stroke={stroke} strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 7L18.375 7" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 2.125L18.375 2.125" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 15.125L18.375 15.125" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.peae880} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p3371f000} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p15376380} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p1230e400} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LongPositionIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_LIGHT;
  return (
    <svg width="19" height="17" viewBox="0 0 19 17" fill="none">
      <path d={S.p310d7500} stroke={stroke} strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 10.25L18.375 10.25" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 2.125L18.375 2.125" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 15.125L18.375 15.125" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.peae880} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p18bdc560} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p15376380} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p201c4080} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectionIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_LIGHT;
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d={S.p23cbed00} stroke={stroke} fill={active ? "rgba(0,177,199,0.08)" : "rgba(31,31,31,0.06)"} />
      <path d={S.peae880} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p3af6a400} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p3bbd1e00} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DatePriceRangeIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_LIGHT;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect fill={fill} height="17" rx="0.5" stroke={stroke} width="17" x="1.5" y="1.5" />
      <g>
        <path d={S.p19bebd80} fill={fill} />
        <path d={S.pb09f380} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 5.125L10 3.5L11.5 5.125" fill={fill} />
        <path d={S.pd25d700} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d={S.p1b49b1f0} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d={S.p3302e140} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChannelIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  const fill = active ? IC_ACTIVE_FILL : IC_FILL_LIGHT;
  return (
    <svg width="22" height="20" viewBox="0 0 22 4" fill="none">
      <g transform="rotate(-45, 11, 10) translate(0, 6)">
        <path d="M2.3 2.33H20.17" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d={S.p1a23180} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d={S.p233f1f80} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="rotate(-45, 11, 10) translate(3, 12)">
        <path d="M0.5 1.82L14.94 1.82" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d={S.p23ab5e00} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function TextIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <path d="M0.5 3.5V0.5H13.5V3.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 0.5V15.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 15.5H9.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MeasureIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1.5 16.5L16.5 1.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 1.5H16.5V5.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 16.5H1.5V12.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZoomInIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <circle cx="7.5" cy="7.5" r="5" stroke={stroke} fill="none" />
      <path d="M11.5 11.5L16 16" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 7.5H9.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 5.5V9.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZoomOutIcon({ active }: { active?: boolean }) {
  const stroke = active ? IC_ACTIVE_STROKE : IC_STROKE;
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <circle cx="7.5" cy="7.5" r="5" stroke={stroke} fill="none" />
      <path d="M11.5 11.5L16 16" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 7.5H9.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
      <path
        d={S.p1e289c80}
        stroke={IC_STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M0.5 4.1H16.5" stroke={IC_STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.83 8.3V14.5" stroke={IC_STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.17 8.3V14.5" stroke={IC_STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Tools data ──────────────────────────────────── */

interface Tool {
  id: number;
  name: string;
  icon: (active: boolean) => React.ReactNode;
}

// Group 1: Drawing tools (matching IDs used in candlestick-chart.tsx)
const DRAWING_TOOLS: Tool[] = [
  { id: 0,  name: "Cursor",              icon: (a) => <CursorIcon active={a} /> },
  { id: 1,  name: "Trend Line",          icon: (a) => <TrendLineIcon active={a} /> },
  { id: 2,  name: "Horizontal Line",     icon: (a) => <HorizontalLineIcon active={a} /> },
  { id: 3,  name: "Fib Retracement",     icon: (a) => <FibRetracementIcon active={a} /> },
  { id: 4,  name: "Fib Extension",       icon: (a) => <FibExtensionIcon active={a} /> },
  { id: 5,  name: "Short Position",      icon: (a) => <ShortPositionIcon active={a} /> },
  { id: 6,  name: "Long Position",       icon: (a) => <LongPositionIcon active={a} /> },
  { id: 7,  name: "Projection",          icon: (a) => <ProjectionIcon active={a} /> },
  { id: 12, name: "Date & Price Range",  icon: (a) => <DatePriceRangeIcon active={a} /> },
  { id: 14, name: "Channel",             icon: (a) => <ChannelIcon active={a} /> },
  { id: 15, name: "Text",                icon: (a) => <TextIcon active={a} /> },
];

// Group 2: View tools
const VIEW_TOOLS: Tool[] = [
  { id: 16, name: "Measure",  icon: (a) => <MeasureIcon active={a} /> },
  { id: 17, name: "Zoom In",  icon: (a) => <ZoomInIcon active={a} /> },
];

/* ─── Component ──────────────────────────────────── */

interface ToolsSidebarProps {
  selectedTool?: number;
  onToolSelect?: (toolId: number) => void;
  isZoomed?: boolean;
  onZoomOut?: () => void;
  onRemoveDrawings?: () => void;
  onRemoveIndicators?: () => void;
  onRemoveAll?: () => void;
}

export function ToolsSidebar({
  selectedTool: controlledTool,
  onToolSelect,
  isZoomed,
  onZoomOut,
  onRemoveDrawings,
  onRemoveIndicators,
  onRemoveAll,
}: ToolsSidebarProps) {
  const [internalTool, setInternalTool] = useState(0);
  const selectedTool = controlledTool ?? internalTool;

  const handleSelect = (id: number) => {
    setInternalTool(id);
    onToolSelect?.(id);
  };

  return (
    <div className="w-[36px] md:w-[48px] rounded-tr-[6px] rounded-br-[6px] flex flex-col items-center shrink-0 h-full transition-colors duration-200" style={{ overflow: "visible", backgroundColor: 'var(--hc-surface)' }}>
      {/* Group 1 — Drawing tools */}
      <div className="flex flex-col items-center shrink-0">
        {DRAWING_TOOLS.map((tool) => (
          <ToolButton
            key={tool.id}
            isSelected={selectedTool === tool.id}
            onClick={() => handleSelect(tool.id)}
            name={tool.name}
          >
            {tool.icon(selectedTool === tool.id)}
          </ToolButton>
        ))}
      </div>

      {/* Divider */}
      <div className="w-[32px] h-px rounded-md my-[8px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Group 2 — Measure & Zoom */}
      <div className="flex flex-col items-center shrink-0">
        {VIEW_TOOLS.map((tool) => (
          <ToolButton
            key={tool.id}
            isSelected={selectedTool === tool.id}
            onClick={() => handleSelect(tool.id)}
            name={tool.name}
          >
            {tool.icon(selectedTool === tool.id)}
          </ToolButton>
        ))}
        {/* Zoom Out — only visible when zoomed in */}
        {isZoomed && (
          <ToolButton
            isSelected={false}
            onClick={onZoomOut}
            name="Zoom Out"
          >
            <ZoomOutIcon />
          </ToolButton>
        )}
      </div>

      {/* Divider */}
      <div className="w-[32px] h-px rounded-md my-[8px] shrink-0" style={{ backgroundColor: 'var(--hc-border)' }} />

      {/* Remove button */}
      <div className="shrink-0">
        <RemoveButton
          onRemoveDrawings={onRemoveDrawings}
          onRemoveIndicators={onRemoveIndicators}
          onRemoveAll={onRemoveAll}
        />
      </div>
    </div>
  );
}