import { useState, useRef, useEffect, useCallback } from "react";
import svgPaths from "../../imports/svg-2jlpmarha3";

/* ─── Types ─────────────────────────────────────── */

export interface ToolMenuSettings {
  color: string;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  opacity: number;
  locked: boolean;
}

interface ToolMenuProps {
  visible: boolean;
  extended?: boolean;
  settings: ToolMenuSettings;
  onSettingsChange: (s: ToolMenuSettings) => void;
  onDelete?: () => void;
  /** Container ref for clamping drag bounds */
  containerRef?: React.RefObject<HTMLDivElement | null>;
  /** Callback when the settings button is clicked (for text drawings) */
  onSettingsClick?: () => void;
}

/* ─── Divider ───────────────────────────────────── */

function MenuDivider({ white }: { white?: boolean }) {
  return (
    <div className="flex h-[32px] items-center justify-center w-px shrink-0">
      <div
        className="h-px rounded-[6px] w-[32px] -rotate-90"
        style={{ backgroundColor: white ? "white" : "var(--hc-border)" }}
      />
    </div>
  );
}

/* ─── Drag handle (6-dot grip) ──────────────────── */

function DragHandle({ onMouseDown }: { onMouseDown: (e: React.MouseEvent) => void }) {
  return (
    <div
      className="size-[24px] relative shrink-0 cursor-grab active:cursor-grabbing"
      onMouseDown={onMouseDown}
    >
      {[
        [8, 11],
        [14, 11],
        [8, 4],
        [14, 4],
        [8, 18],
        [14, 18],
      ].map(([x, y], i) => (
        <svg
          key={i}
          className="absolute"
          style={{ left: x - 1.5, top: y - 1.5 }}
          width="3"
          height="3"
          viewBox="0 0 3 3"
          fill="none"
        >
          <path
            d={svgPaths.p31427a00}
            stroke="#BABAC1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

/* ─── Color swatch button ───────────────────────── */

function ColorSwatch({
  color,
  active,
  onClick,
}: {
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="h-[38px] w-[48px] relative shrink-0 cursor-pointer flex items-center justify-center"
      style={{ backgroundColor: active ? "var(--hc-surface-hover)" : "var(--hc-surface)" }}
      onClick={onClick}
    >
      <div
        className="rounded-[2px] size-[24px]"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

/* ─── Thickness/Style item with chevron ─────────── */

function LineStyleItem({
  thickness,
  style,
  active,
  onClick,
}: {
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  active: boolean;
  onClick: () => void;
}) {
  const dashArray =
    style === "dashed" ? "4 3" : style === "dotted" ? "1 3" : "none";

  return (
    <div
      className="h-[38px] w-[62px] relative shrink-0 cursor-pointer flex items-center"
      style={{ backgroundColor: active ? "var(--hc-surface-hover)" : "var(--hc-surface)" }}
      onClick={onClick}
    >
      <div className="flex-1 flex items-center justify-center">
        <svg width="24" height={Math.max(thickness, 1)} viewBox={`0 0 25 ${Math.max(thickness, 1)}`} fill="none">
          <line
            x1="0.5"
            y1={Math.max(thickness, 1) / 2}
            x2="24.5"
            y2={Math.max(thickness, 1) / 2}
            stroke="var(--hc-text)"
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeDasharray={dashArray}
          />
        </svg>
      </div>
      <div className="size-[24px] flex items-center justify-center shrink-0 mr-[-2px]">
        <svg width="7" height="4" viewBox="0 0 7 4" fill="none">
          <path
            d="M0.5 0.5L3.5 3.5L6.5 0.5"
            stroke="var(--hc-text-secondary)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* ─── Settings icon button ──────────────────────── */

function SettingsButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="h-[38px] w-[56px] relative shrink-0 cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d={svgPaths.p69c8570} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p218d9280} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─── Layers icon button ────────────────────────── */

function LayersButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="h-[38px] w-[66px] relative shrink-0 cursor-pointer flex items-center"
      onClick={onClick}
    >
      <div className="flex-1 flex items-center justify-center">
        <svg width="19" height="19" viewBox="0 0 19.0002 19" fill="none">
          <path d={svgPaths.p30a1f900} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3e0a8300} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p117f6920} stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="size-[24px] flex items-center justify-center shrink-0 mr-[-2px]">
        <svg width="7" height="4" viewBox="0 0 7 4" fill="none">
          <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="var(--hc-text-secondary)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Lock button ───────────────────────────────── */

function LockButton({
  locked,
  onClick,
}: {
  locked: boolean;
  onClick: () => void;
}) {
  const color = locked ? "#00B1C7" : "var(--hc-text)";
  const bg = locked ? "#dcf5f7" : "transparent";

  return (
    <div
      className="h-[38px] w-[56px] relative shrink-0 cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      {locked && (
        <div className="absolute inset-[10.53%_21.43%] rounded-[4px] bg-[#dcf5f7]" />
      )}
      <svg width="15" height="17" viewBox="0 0 15 17" fill="none" className="relative z-10">
        <path
          d={svgPaths.pbbda80}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p6a25a00}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ─── Delete button ─────────────────────────────── */

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="h-[38px] w-[56px] relative shrink-0 cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      <svg width="15" height="17" viewBox="0 0 15 17" fill="none">
        <path
          d="M0.5 3.70001H2.05556H14.5"
          stroke="var(--hc-text)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p2649000}
          stroke="var(--hc-text)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5.94446 7.70001V12.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.05566 7.70001V12.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─── Color Picker Dropdown ─────────────────────── */

const PRESET_COLORS = [
  "#FFFFFF", "#FDF368", "#F2C847", "#DE5537",
  "#E6E6E6", "#D4E560", "#9FCE62", "#C72C63",
  "#808080", "#61CAD2", "#4EA48B", "#8728A6",
  "#1A1A1A", "#519BE9", "#424EAC", "#5D34AD",
  "#A6A6A6", "#04073D", "#5E9F55", "#A08FDD",
  "#5E5E5E", "#E93323", "#F88922",
];

function ColorPicker({
  selectedColor,
  opacity,
  onColorChange,
  onOpacityChange,
}: {
  selectedColor: string;
  opacity: number;
  onColorChange: (c: string) => void;
  onOpacityChange: (o: number) => void;
}) {
  const opacityRef = useRef<HTMLDivElement>(null);

  const handleOpacityDrag = (e: React.MouseEvent) => {
    if (!opacityRef.current) return;
    const rect = opacityRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    onOpacityChange(Math.round(x * 100));
  };

  const handleOpacityMouseDown = (e: React.MouseEvent) => {
    handleOpacityDrag(e);
    const onMove = (ev: MouseEvent) => {
      if (!opacityRef.current) return;
      const rect = opacityRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
      onOpacityChange(Math.round(x * 100));
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <div className="rounded-[4px] w-[164px] p-[12px] transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
      {/* Opacity bar */}
      <div
        ref={opacityRef}
        className="h-[8px] w-full rounded-[6px] relative cursor-pointer mb-[12px]"
        style={{
          background: `linear-gradient(to right, transparent, ${selectedColor})`,
          border: "0.5px solid #babac1",
        }}
        onMouseDown={handleOpacityMouseDown}
      >
        <div
          className="absolute top-[-3px] size-[14px] rounded-full border-[0.5px] border-[#babac1]"
          style={{
            left: `calc(${opacity}% - 7px)`,
            backgroundColor: 'var(--hc-surface)',
          }}
        >
          <div
            className="absolute inset-[3px] rounded-full"
            style={{ backgroundColor: selectedColor, opacity: opacity / 100 }}
          />
        </div>
      </div>

      {/* Color grid */}
      <div className="grid grid-cols-4 gap-[8px]">
        {PRESET_COLORS.map((c) => (
          <div
            key={c}
            className="size-[26px] rounded-[2px] cursor-pointer relative"
            style={{
              backgroundColor: c,
              border: c === "#FFFFFF" ? "1px solid #f0f0f9" : "none",
            }}
            onClick={() => onColorChange(c)}
          >
            {c.toUpperCase() === selectedColor.toUpperCase() && (
              <div className="absolute inset-[2px] rounded-[2px] border border-white" />
            )}
          </div>
        ))}
        {/* Add color button */}
        <div className="size-[26px] rounded-[2px] cursor-pointer bg-white border border-[#f0f0f9] flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d={svgPaths.p3fc86600} fill="var(--hc-text)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Thickness Dropdown ────────────────────────── */

const THICKNESS_OPTIONS = [1, 2, 3, 4];

function ThicknessDropdown({
  selected,
  onChange,
}: {
  selected: number;
  onChange: (t: number) => void;
}) {
  return (
    <div className="rounded-[4px] w-[62px] py-[4px] transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
      {THICKNESS_OPTIONS.map((t) => (
        <div
          key={t}
          className="h-[32px] flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: t === selected ? "var(--hc-surface-active)" : undefined }}
          onMouseEnter={(e) => t !== selected && (e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)')}
          onMouseLeave={(e) => t !== selected && (e.currentTarget.style.backgroundColor = '')}
          onClick={() => onChange(t)}
        >
          <svg width="24" height={Math.max(t, 1)} viewBox={`0 0 25 ${Math.max(t, 1)}`} fill="none">
            <line
              x1="0.5"
              y1={Math.max(t, 1) / 2}
              x2="24.5"
              y2={Math.max(t, 1) / 2}
              stroke="var(--hc-text)"
              strokeWidth={t}
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ─── Style Dropdown ────────────────────────────── */

const STYLE_OPTIONS: { id: "solid" | "dashed" | "dotted"; dash: string }[] = [
  { id: "solid", dash: "none" },
  { id: "dashed", dash: "4 3" },
  { id: "dotted", dash: "1 3" },
];

function StyleDropdown({
  selected,
  onChange,
}: {
  selected: "solid" | "dashed" | "dotted";
  onChange: (s: "solid" | "dashed" | "dotted") => void;
}) {
  return (
    <div className="rounded-[4px] w-[62px] py-[4px] transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
      {STYLE_OPTIONS.map((s) => (
        <div
          key={s.id}
          className="h-[32px] flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: s.id === selected ? "var(--hc-surface-active)" : undefined }}
          onMouseEnter={(e) => s.id !== selected && (e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)')}
          onMouseLeave={(e) => s.id !== selected && (e.currentTarget.style.backgroundColor = '')}
          onClick={() => onChange(s.id)}
        >
          <svg width="24" height="1" viewBox="0 0 25 1" fill="none">
            <line
              x1="0.5"
              y1="0.5"
              x2="24.5"
              y2="0.5"
              stroke="var(--hc-text)"
              strokeLinecap="round"
              strokeDasharray={s.dash}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ─── Main ToolMenu Component ───────────────────── */

type ActiveDropdown = null | "color" | "thickness" | "style";

export function ToolMenu({
  visible,
  extended = false,
  settings,
  onSettingsChange,
  onDelete,
  containerRef,
  onSettingsClick,
}: ToolMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 18, y: 12 });
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Drag handlers
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    const menuEl = menuRef.current;
    if (!menuEl) return;
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    // Need to capture position at drag start for offset calc
    const startPos = { ...position };
    const offsetX = e.clientX - startPos.x;
    const offsetY = e.clientY - startPos.y;

    const onMove = (ev: MouseEvent) => {
      let newX = ev.clientX - offsetX;
      let newY = ev.clientY - offsetY;

      // Clamp to container bounds if available
      if (containerRef?.current && menuEl) {
        const container = containerRef.current.getBoundingClientRect();
        const menu = menuEl.getBoundingClientRect();
        const maxX = container.width - menu.width;
        const maxY = container.height - menu.height;
        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));
      }

      setPosition({ x: newX, y: newY });
    };
    const onUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [position, containerRef]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!activeDropdown) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [activeDropdown]);

  // Close dropdown when menu hides
  useEffect(() => {
    if (!visible) setActiveDropdown(null);
  }, [visible]);

  // Reset position when menu appears
  useEffect(() => {
    if (visible) setPosition({ x: 18, y: 12 });
  }, [visible]);

  if (!visible) return null;

  const toggleDropdown = (dd: ActiveDropdown) => {
    setActiveDropdown((prev) => (prev === dd ? null : dd));
  };

  return (
    <div
      ref={menuRef}
      className="absolute z-50"
      style={{ left: position.x, top: position.y }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Menu bar */}
      <div
        className="flex items-center py-px rounded-[6px] relative transition-colors duration-200"
        style={{
          backgroundColor: 'var(--hc-surface)',
          border: "1px solid var(--hc-border)",
          boxShadow: "var(--hc-shadow)",
        }}
      >
        {/* Drag handle */}
        <DragHandle onMouseDown={handleDragStart} />

        <MenuDivider white={activeDropdown === "color"} />

        {/* Color */}
        <ColorSwatch
          color={settings.color}
          active={activeDropdown === "color"}
          onClick={() => toggleDropdown("color")}
        />

        <MenuDivider white={activeDropdown === "color" || activeDropdown === "thickness"} />

        {/* Thickness */}
        <LineStyleItem
          thickness={settings.thickness}
          style="solid"
          active={activeDropdown === "thickness"}
          onClick={() => toggleDropdown("thickness")}
        />

        <MenuDivider white={activeDropdown === "thickness" || activeDropdown === "style"} />

        {/* Style */}
        <LineStyleItem
          thickness={1}
          style={settings.style}
          active={activeDropdown === "style"}
          onClick={() => toggleDropdown("style")}
        />

        {/* Extended items */}
        {extended && (
          <>
            <MenuDivider />
            <SettingsButton onClick={() => onSettingsClick?.()} />
            <MenuDivider />
            <LayersButton onClick={() => {}} />
            <MenuDivider />
            <LayersButton onClick={() => {}} />
            <MenuDivider />
            <LockButton
              locked={settings.locked}
              onClick={() =>
                onSettingsChange({ ...settings, locked: !settings.locked })
              }
            />
            <MenuDivider />
            <DeleteButton onClick={() => onDelete?.()} />
          </>
        )}
      </div>

      {/* Dropdowns — positioned 4px below the menu bar */}
      {activeDropdown === "color" && (
        <div className="absolute top-[44px] left-[24px]">
          <ColorPicker
            selectedColor={settings.color}
            opacity={settings.opacity}
            onColorChange={(c) => {
              onSettingsChange({ ...settings, color: c });
            }}
            onOpacityChange={(o) => {
              onSettingsChange({ ...settings, opacity: o });
            }}
          />
        </div>
      )}

      {activeDropdown === "thickness" && (
        <div className="absolute top-[44px]" style={{ left: extended ? 112 : 74 }}>
          <ThicknessDropdown
            selected={settings.thickness}
            onChange={(t) => {
              onSettingsChange({ ...settings, thickness: t });
              setActiveDropdown(null);
            }}
          />
        </div>
      )}

      {activeDropdown === "style" && (
        <div className="absolute top-[44px]" style={{ left: extended ? 176 : 138 }}>
          <StyleDropdown
            selected={settings.style}
            onChange={(s) => {
              onSettingsChange({ ...settings, style: s });
              setActiveDropdown(null);
            }}
          />
        </div>
      )}
    </div>
  );
}