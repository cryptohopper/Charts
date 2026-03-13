import { useEffect, useRef, useState, type ReactNode } from "react";
import { useAIStore, useChartStore, useDrawingStore } from "@hopcharts/core";
import type { DrawingToolType } from "@hopcharts/core";
import { designToolsSidebarSvgPaths as S } from "./designToolsSidebarSvgPaths";

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
      className="pointer-events-none fixed z-[9999] flex items-center"
      style={{ top, left, transform: "translateY(-50%)" }}
    >
      <svg width="7" height="14" viewBox="0 0 7 14" fill="none" className="-mr-px shrink-0">
        <path
          d="M0.58 7.87C0.26 7.56 0.09 7.4 0.04 7.22C-0.01 7.08 -0.01 6.92 0.04 6.78C0.09 6.6 0.26 6.44 0.58 6.13L7 0V14L0.58 7.87Z"
          fill="var(--hc-tooltip-bg)"
        />
      </svg>
      <div className="whitespace-nowrap rounded-[3px] px-[15px] py-[8px]" style={{ backgroundColor: "var(--hc-tooltip-bg)" }}>
        <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-tooltip-text)" }}>
          {text}
        </span>
      </div>
    </div>
  );
}

interface ToolButtonProps {
  isSelected?: boolean;
  onClick?: () => void;
  name: string;
  children: ReactNode;
}

function ToolButton({ isSelected, onClick, name, children }: ToolButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={() => {
        setHovered(true);
        setRect(buttonRef.current?.getBoundingClientRect() ?? null);
      }}
      onMouseLeave={() => setHovered(false)}
      className="relative flex h-[36px] w-[36px] shrink-0 items-center justify-center md:h-[48px] md:w-[48px]"
    >
      {isSelected ? (
        <div className="absolute inset-[10.42%] rounded" style={{ backgroundColor: "var(--hc-accent-bg)" }} />
      ) : null}
      {hovered && !isSelected ? (
        <div className="absolute inset-[10.42%] rounded" style={{ backgroundColor: "var(--hc-surface-hover)" }} />
      ) : null}
      <div className="relative z-10">{children}</div>
      <Tooltip text={name} visible={hovered} anchorRect={rect} />
    </button>
  );
}

interface RemoveButtonProps {
  onRemoveDrawings?: () => void;
  onRemoveIndicators?: () => void;
  onRemoveAll?: () => void;
}

function RemoveButton({ onRemoveDrawings, onRemoveIndicators, onRemoveAll }: RemoveButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        (!dropdownRef.current || !dropdownRef.current.contains(target))
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [menuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={buttonRef}
        onClick={() => setMenuOpen((value) => !value)}
        onMouseEnter={() => {
          setHovered(true);
          setRect(buttonRef.current?.getBoundingClientRect() ?? null);
        }}
        onMouseLeave={() => setHovered(false)}
        className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center"
      >
        {hovered ? (
          <div className="absolute inset-[10.42%] rounded" style={{ backgroundColor: "var(--hc-surface-hover)" }} />
        ) : null}
        <div className="relative z-10">
          <TrashIcon />
        </div>
        {!menuOpen ? <Tooltip text="Remove" visible={hovered} anchorRect={rect} /> : null}
      </button>

      {menuOpen && rect ? (
        <div
          ref={dropdownRef}
          className="fixed z-[9999] min-w-[200px] overflow-hidden rounded-[6px] transition-colors duration-200"
          style={{
            backgroundColor: "var(--hc-surface)",
            border: "1px solid var(--hc-border)",
            boxShadow: "var(--hc-shadow)",
            left: rect.right + 4,
            bottom: window.innerHeight - rect.bottom,
          }}
        >
          <button
            onClick={() => {
              onRemoveDrawings?.();
              setMenuOpen(false);
            }}
            className="w-full px-[20px] py-[11px] text-left text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{ color: "var(--hc-text)" }}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor = "";
            }}
          >
            Remove drawings
          </button>
          <button
            onClick={() => {
              onRemoveIndicators?.();
              setMenuOpen(false);
            }}
            className="w-full px-[20px] py-[11px] text-left text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{ color: "var(--hc-text)" }}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor = "";
            }}
          >
            Remove indicators
          </button>
          <button
            onClick={() => {
              onRemoveAll?.();
              setMenuOpen(false);
            }}
            className="w-full px-[20px] py-[11px] text-left text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
            style={{ color: "var(--hc-accent)" }}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = "var(--hc-surface-hover)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor = "";
            }}
          >
            Remove drawings &amp; indicators
          </button>
        </div>
      ) : null}
    </div>
  );
}

const IC_STROKE = "var(--hc-icon-stroke)";
const IC_FILL_LIGHT = "var(--hc-surface-hover)";
const IC_FILL_SURFACE = "var(--hc-surface)";
const IC_ACTIVE_STROKE = "var(--hc-accent)";
const IC_ACTIVE_FILL = "var(--hc-accent-bg)";

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

interface Tool {
  id: number;
  name: string;
  icon: (active: boolean) => ReactNode;
}

const DRAWING_TOOLS: Tool[] = [
  { id: 0, name: "Cursor", icon: (active) => <CursorIcon active={active} /> },
  { id: 1, name: "Trend Line", icon: (active) => <TrendLineIcon active={active} /> },
  { id: 2, name: "Horizontal Line", icon: (active) => <HorizontalLineIcon active={active} /> },
  { id: 3, name: "Fib Retracement", icon: (active) => <FibRetracementIcon active={active} /> },
  { id: 4, name: "Fib Extension", icon: (active) => <FibExtensionIcon active={active} /> },
  { id: 5, name: "Short Position", icon: (active) => <ShortPositionIcon active={active} /> },
  { id: 6, name: "Long Position", icon: (active) => <LongPositionIcon active={active} /> },
  { id: 7, name: "Projection", icon: (active) => <ProjectionIcon active={active} /> },
  { id: 12, name: "Date & Price Range", icon: (active) => <DatePriceRangeIcon active={active} /> },
  { id: 14, name: "Channel", icon: (active) => <ChannelIcon active={active} /> },
  { id: 15, name: "Text", icon: (active) => <TextIcon active={active} /> },
];

const VIEW_TOOLS: Tool[] = [
  { id: 16, name: "Measure", icon: (active) => <MeasureIcon active={active} /> },
  { id: 17, name: "Zoom In", icon: (active) => <ZoomInIcon active={active} /> },
];

const TOOL_ID_TO_DRAWING_TYPE: Partial<Record<number, DrawingToolType | null>> = {
  0: null,
  1: "trendline",
  2: "horizontal_line",
  3: "fibonacci_retracement",
  14: "parallel_channel",
  15: "text_label",
  16: "measure",
};

const DRAWING_TYPE_TO_TOOL_ID: Partial<Record<DrawingToolType, number>> = {
  trendline: 1,
  horizontal_line: 2,
  fibonacci_retracement: 3,
  parallel_channel: 14,
  text_label: 15,
  measure: 16,
};

export function DesignToolsSidebar() {
  const activeTool = useDrawingStore((state) => state.activeToolType);
  const setActiveTool = useDrawingStore((state) => state.setActiveTool);
  const clearAllDrawings = useDrawingStore((state) => state.clearAllDrawings);
  const [selectedTool, setSelectedTool] = useState(0);

  useEffect(() => {
    if (activeTool === null) {
      if (TOOL_ID_TO_DRAWING_TYPE[selectedTool] !== undefined) {
        setSelectedTool(0);
      }
      return;
    }

    const mappedToolId = DRAWING_TYPE_TO_TOOL_ID[activeTool];
    if (mappedToolId !== undefined) {
      setSelectedTool(mappedToolId);
    }
  }, [activeTool, selectedTool]);

  const clearIndicators = () => {
    useChartStore.setState({ indicators: [] });
    useAIStore.getState().clearPatterns();
  };

  const clearAll = () => {
    clearAllDrawings();
    clearIndicators();
  };

  const handleSelect = (id: number) => {
    setSelectedTool(id);

    const mappedType = TOOL_ID_TO_DRAWING_TYPE[id];

    // Design includes tools that do not yet exist in HopChart's drawing engine.
    if (mappedType === undefined) {
      setActiveTool(null);
      return;
    }

    setActiveTool(mappedType);
  };

  return (
    <div
      className="flex h-full w-[36px] shrink-0 flex-col items-center rounded-br-[6px] rounded-tr-[6px] transition-colors duration-200 md:w-[48px]"
      style={{ overflow: "visible", backgroundColor: "var(--hc-surface)" }}
    >
      <div className="flex shrink-0 flex-col items-center">
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

      <div className="my-[8px] h-px w-[32px] shrink-0 rounded-md" style={{ backgroundColor: "var(--hc-border)" }} />

      <div className="flex shrink-0 flex-col items-center">
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
      </div>

      <div className="my-[8px] h-px w-[32px] shrink-0 rounded-md" style={{ backgroundColor: "var(--hc-border)" }} />

      <div className="shrink-0">
        <RemoveButton
          onRemoveDrawings={clearAllDrawings}
          onRemoveIndicators={clearIndicators}
          onRemoveAll={clearAll}
        />
      </div>
    </div>
  );
}
