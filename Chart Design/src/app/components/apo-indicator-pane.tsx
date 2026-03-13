import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CandleData } from "./chart-data";
import { useTheme } from "./theme-context";

/* ─── APO Calculation ─────────────────────────── */

function computeEMA(data: number[], period: number): number[] {
  const result: number[] = [];
  if (data.length === 0) return result;
  const k = 2 / (period + 1);
  result[0] = data[0];
  for (let i = 1; i < data.length; i++) {
    result[i] = data[i] * k + result[i - 1] * (1 - k);
  }
  return result;
}

function computeAPO(
  candles: CandleData[],
  fastLen: number,
  slowLen: number,
  source: "close" | "open" | "high" | "low" | "hl2"
): number[] {
  const srcData = candles.map((c) => {
    switch (source) {
      case "open": return c.open;
      case "high": return c.high;
      case "low": return c.low;
      case "hl2": return (c.high + c.low) / 2;
      default: return c.close;
    }
  });
  const fastEMA = computeEMA(srcData, fastLen);
  const slowEMA = computeEMA(srcData, slowLen);
  return fastEMA.map((f, i) => f - slowEMA[i]);
}

/* ─── APO Settings Modal ─────────────────────── */

export interface APOSettings {
  fastLength: number;
  slowLength: number;
  source: "close" | "open" | "high" | "low" | "hl2";
  color: string;
  lineWidth: number;
}

const DEFAULT_APO_SETTINGS: APOSettings = {
  fastLength: 12,
  slowLength: 26,
  source: "close",
  color: "#00B1C7",
  lineWidth: 1.5,
};

interface APOSettingsModalProps {
  open: boolean;
  onClose: () => void;
  settings: APOSettings;
  onApply: (s: APOSettings) => void;
}

function APOSettingsModal({ open, onClose, settings, onApply }: APOSettingsModalProps) {
  const [tab, setTab] = useState<"inputs" | "style">("inputs");
  const [local, setLocal] = useState(settings);
  const [showSourceDropdown, setShowSourceDropdown] = useState(false);
  const sourceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setLocal(settings);
  }, [open, settings]);

  useEffect(() => {
    if (!showSourceDropdown) return;
    const handler = (e: MouseEvent) => {
      if (sourceRef.current && !sourceRef.current.contains(e.target as Node))
        setShowSourceDropdown(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showSourceDropdown]);

  const SOURCES: { value: APOSettings["source"]; label: string }[] = [
    { value: "close", label: "Close" },
    { value: "open", label: "Open" },
    { value: "high", label: "High" },
    { value: "low", label: "Low" },
    { value: "hl2", label: "HL/2" },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--hc-modal-overlay)' }} onClick={onClose} />
      <motion.div
        className="relative rounded-md overflow-hidden"
        style={{ width: 340, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
        initial={{ scale: 0.95, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
      >
        {/* Header */}
        <div className="h-[40px] flex items-center justify-between px-[15px]" style={{ backgroundColor: 'var(--hc-modal-header)' }}>
          <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600, color: 'var(--hc-text)' }}>
            Absolute Price Oscillator
          </span>
          <button
            onClick={onClose}
            className="w-[24px] h-[24px] flex items-center justify-center rounded"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="var(--hc-icon-stroke)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex" style={{ borderBottom: '1px solid var(--hc-border)' }}>
          {(["inputs", "style"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 h-[36px] text-[13px] font-['Source_Sans_3',sans-serif] capitalize transition-colors ${
                tab === t
                  ? "text-[#00b1c7] border-b-2 border-[#00b1c7]"
                  : "hover:text-[var(--hc-text)]"
              }`}
              style={tab === t ? { fontWeight: 600, color: '#00b1c7' } : { color: 'var(--hc-text-secondary)' }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-[15px]">
          {tab === "inputs" ? (
            <div className="flex flex-col gap-[12px]">
              {/* Fast Length */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>Fast Length</span>
                <input
                  type="number"
                  value={local.fastLength}
                  onChange={(e) => setLocal((s) => ({ ...s, fastLength: Math.max(1, +e.target.value || 1) }))}
                  className="w-[60px] h-[30px] rounded text-center text-[13px] font-['Source_Sans_3',sans-serif] outline-none"
                  style={{ border: '1px solid var(--hc-border)', backgroundColor: 'var(--hc-input-bg)', color: 'var(--hc-text)' }}
                />
              </div>
              {/* Slow Length */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>Slow Length</span>
                <input
                  type="number"
                  value={local.slowLength}
                  onChange={(e) => setLocal((s) => ({ ...s, slowLength: Math.max(1, +e.target.value || 1) }))}
                  className="w-[60px] h-[30px] rounded text-center text-[13px] font-['Source_Sans_3',sans-serif] outline-none"
                  style={{ border: '1px solid var(--hc-border)', backgroundColor: 'var(--hc-input-bg)', color: 'var(--hc-text)' }}
                />
              </div>
              {/* Source */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>Source</span>
                <div className="relative" ref={sourceRef}>
                  <button
                    onClick={() => setShowSourceDropdown((v) => !v)}
                    className="w-[100px] h-[30px] rounded text-[13px] font-['Source_Sans_3',sans-serif] flex items-center justify-between px-[10px]"
                    style={{ border: '1px solid var(--hc-border)', color: 'var(--hc-text)' }}
                  >
                    <span className="capitalize">{local.source === "hl2" ? "HL/2" : local.source}</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                      <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {showSourceDropdown && (
                    <div className="absolute right-0 top-[34px] z-10 rounded-md py-[4px]" style={{ width: 100, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
                      {SOURCES.map((src) => (
                        <button
                          key={src.value}
                          onClick={() => { setLocal((s) => ({ ...s, source: src.value })); setShowSourceDropdown(false); }}
                          className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif]"
                          style={{ color: local.source === src.value ? "#00B1C7" : "var(--hc-text)" }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                        >
                          {src.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[12px]">
              {/* Color */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>Color</span>
                <div className="flex items-center gap-[8px]">
                  <label className="relative w-[28px] h-[28px] rounded cursor-pointer overflow-hidden" style={{ border: '1px solid var(--hc-border)' }}>
                    <div className="absolute inset-[3px] rounded-sm" style={{ backgroundColor: local.color }} />
                    <input
                      type="color"
                      value={local.color}
                      onChange={(e) => setLocal((s) => ({ ...s, color: e.target.value }))}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
              {/* Line Width */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text)' }}>Line Width</span>
                <input
                  type="number"
                  value={local.lineWidth}
                  step={0.5}
                  min={0.5}
                  max={5}
                  onChange={(e) => setLocal((s) => ({ ...s, lineWidth: Math.max(0.5, Math.min(5, +e.target.value || 1)) }))}
                  className="w-[60px] h-[30px] rounded text-center text-[13px] font-['Source_Sans_3',sans-serif] outline-none"
                  style={{ border: '1px solid var(--hc-border)', backgroundColor: 'var(--hc-input-bg)', color: 'var(--hc-text)' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-[15px] pb-[15px]">
          <button
            onClick={() => setLocal(DEFAULT_APO_SETTINGS)}
            className="text-[12px] font-['Source_Sans_3',sans-serif]"
            style={{ color: 'var(--hc-text-secondary)' }}
          >
            Reset Settings
          </button>
          <div className="flex gap-[8px]">
            <button
              onClick={onClose}
              className="h-[30px] px-[16px] rounded-sm text-[13px] font-['Source_Sans_3',sans-serif]"
              style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border-strong)', color: 'var(--hc-text-secondary)' }}
            >
              Cancel
            </button>
            <button
              onClick={() => { onApply(local); onClose(); }}
              className="h-[30px] px-[16px] bg-[#00b1c7] rounded-sm text-[13px] text-white font-['Source_Sans_3',sans-serif] hover:bg-[#009aad]"
              style={{ fontWeight: 600 }}
            >
              Apply
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── APO Indicator Pane ─────────────────────── */

interface APOIndicatorPaneProps {
  data: CandleData[];
  scrollOffset: number;
  visibleCandles: number;
  chartWidth: number;
  candleStep: number;
  onClose: () => void;
  height: number;
  isFullScreen: boolean;
  onToggleFullScreen: () => void;
}

export function APOIndicatorPane({
  data,
  scrollOffset,
  visibleCandles,
  chartWidth,
  candleStep,
  onClose,
  height,
  isFullScreen,
  onToggleFullScreen,
}: APOIndicatorPaneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hovered, setHovered] = useState(false);
  const [settings, setSettings] = useState<APOSettings>(DEFAULT_APO_SETTINGS);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mouseX, setMouseX] = useState<number | null>(null);

  const PRICE_BAR_WIDTH = 65;

  // Resize observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      const { width, height: h } = entries[0].contentRect;
      if (width > 0 && h > 0) setDimensions({ width, height: h });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Compute APO values for the full dataset
  const apoValues = useMemo(
    () => computeAPO(data, settings.fastLength, settings.slowLength, settings.source),
    [data, settings.fastLength, settings.slowLength, settings.source]
  );

  const maxScroll = Math.max(0, data.length - visibleCandles);
  const startIdx = Math.max(0, Math.min(maxScroll, Math.round(scrollOffset)));
  const visibleAPO = useMemo(
    () => apoValues.slice(startIdx, startIdx + visibleCandles + 1),
    [apoValues, startIdx, visibleCandles]
  );

  // Current value for header display
  const currentValue = visibleAPO.length > 0 ? visibleAPO[visibleAPO.length - 1] : 0;

  // Canvas rendering
  const drawChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || !visible) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const cw = dimensions.width - PRICE_BAR_WIDTH;
    const ch = dimensions.height;

    // Clear
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Chart background
    const rootStyle = getComputedStyle(document.documentElement);
    ctx.fillStyle = rootStyle.getPropertyValue('--hc-chart-bg').trim() || "#ffffff";
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);
    const gridColor = rootStyle.getPropertyValue('--hc-chart-grid').trim() || "#efeff4";
    const textColor = rootStyle.getPropertyValue('--hc-chart-grid-text').trim() || "#8e8e93";
    const crosshairColor = rootStyle.getPropertyValue('--hc-chart-crosshair').trim() || "#babac1";

    if (visibleAPO.length < 2) return;

    // Find min/max for visible range
    let minVal = Infinity, maxVal = -Infinity;
    for (const v of visibleAPO) {
      if (v < minVal) minVal = v;
      if (v > maxVal) maxVal = v;
    }
    const range = maxVal - minVal || 1;
    const padding = range * 0.15;
    const adjMin = minVal - padding;
    const adjMax = maxVal + padding;
    const adjRange = adjMax - adjMin;

    const valToY = (val: number) => ch - ((val - adjMin) / adjRange) * ch;

    // Grid lines (horizontal)
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
      const val = adjMin + (adjRange / gridSteps) * i;
      const y = Math.round(valToY(val)) + 0.5;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(cw, y);
      ctx.stroke();

      // Price label
      ctx.fillStyle = textColor;
      ctx.font = "12px 'Source Sans 3', sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(val.toFixed(2), cw + 8, y + 4);
    }

    // Zero line
    const zeroY = valToY(0);
    if (zeroY > 0 && zeroY < ch) {
      ctx.strokeStyle = crosshairColor;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, Math.round(zeroY) + 0.5);
      ctx.lineTo(cw, Math.round(zeroY) + 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Price bar separator
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cw + 0.5, 0);
    ctx.lineTo(cw + 0.5, ch);
    ctx.stroke();

    // APO line
    ctx.strokeStyle = settings.color;
    ctx.lineWidth = settings.lineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < visibleAPO.length; i++) {
      const x = i * candleStep + candleStep / 2;
      const y = valToY(visibleAPO[i]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Gradient fill under/over zero
    const gradient = ctx.createLinearGradient(0, 0, 0, ch);
    const baseColor = settings.color;
    gradient.addColorStop(0, baseColor + "18");
    gradient.addColorStop(0.5, baseColor + "05");
    gradient.addColorStop(1, baseColor + "18");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(candleStep / 2, valToY(visibleAPO[0]));
    for (let i = 1; i < visibleAPO.length; i++) {
      const x = i * candleStep + candleStep / 2;
      ctx.lineTo(x, valToY(visibleAPO[i]));
    }
    const lastX = (visibleAPO.length - 1) * candleStep + candleStep / 2;
    ctx.lineTo(lastX, zeroY);
    ctx.lineTo(candleStep / 2, zeroY);
    ctx.closePath();
    ctx.fill();

    // Crosshair on hover
    if (mouseX !== null && mouseX < cw) {
      ctx.strokeStyle = crosshairColor;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([4, 2]);
      ctx.beginPath();
      ctx.moveTo(mouseX + 0.5, 0);
      ctx.lineTo(mouseX + 0.5, ch);
      ctx.stroke();
      ctx.setLineDash([]);

      // Find value at mouse position
      const candleIdx = Math.floor(mouseX / candleStep);
      if (candleIdx >= 0 && candleIdx < visibleAPO.length) {
        const val = visibleAPO[candleIdx];
        const dotY = valToY(val);
        ctx.fillStyle = settings.color;
        ctx.beginPath();
        ctx.arc(candleIdx * candleStep + candleStep / 2, dotY, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [dimensions, visibleAPO, candleStep, settings, visible, mouseX, isDark]);

  useEffect(() => { drawChart(); }, [drawChart]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseX(null);
  }, []);

  // Hovered APO value
  const hoveredValue = useMemo(() => {
    if (mouseX === null) return null;
    const candleIdx = Math.floor(mouseX / candleStep);
    if (candleIdx >= 0 && candleIdx < visibleAPO.length) {
      return visibleAPO[candleIdx];
    }
    return null;
  }, [mouseX, candleStep, visibleAPO]);

  const displayValue = hoveredValue ?? currentValue;

  return (
    <>
      <div
        className="w-full rounded-md overflow-hidden flex flex-col transition-colors duration-200"
        style={{ height: isFullScreen ? "100%" : height, backgroundColor: 'var(--hc-surface)' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Header */}
        <div className="h-[30px] flex items-center px-[10px] gap-[6px] shrink-0 transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)', borderBottom: '1px solid var(--hc-border)' }}>
          <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600, color: 'var(--hc-text)' }}>
            APO
          </span>
          <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-secondary)' }}>
            {settings.fastLength} {settings.slowLength} {settings.source}
          </span>

          {/* Value badge */}
          <div className="ml-[4px] flex items-center gap-[6px]">
            <span
              className="text-[12px] font-['Source_Sans_3',sans-serif] px-[6px] py-[1px] rounded"
              style={{
                color: settings.color,
                backgroundColor: settings.color + "15",
                fontWeight: 600,
              }}
            >
              {displayValue.toFixed(2)}
            </span>
          </div>

          {/* Hover action icons */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="ml-auto flex items-center gap-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {/* Settings */}
                <button
                  onClick={() => setSettingsOpen(true)}
                  className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#f8f8ff] rounded"
                  title="Settings"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="2" stroke="#8E8E93" strokeWidth="1.2" />
                    <path d="M7 1V3M7 11V13M1 7H3M11 7H13M2.76 2.76L4.17 4.17M9.83 9.83L11.24 11.24M2.76 11.24L4.17 9.83M9.83 4.17L11.24 2.76" stroke="#8E8E93" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </button>

                {/* Visibility toggle */}
                <button
                  onClick={() => setVisible((v) => !v)}
                  className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#f8f8ff] rounded"
                  title={visible ? "Hide" : "Show"}
                >
                  {visible ? (
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path d="M1 6C1 6 3.5 1 8 1C12.5 1 15 6 15 6C15 6 12.5 11 8 11C3.5 11 1 6 1 6Z" stroke="#8E8E93" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="8" cy="6" r="2" stroke="#8E8E93" strokeWidth="1.2" />
                    </svg>
                  ) : (
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                      <path d="M1 7C1 7 3.5 2 8 2C12.5 2 15 7 15 7C15 7 12.5 12 8 12C3.5 12 1 7 1 7Z" stroke="#BABAC1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 13L14 1" stroke="#BABAC1" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  )}
                </button>

                {/* Maximize / Minimize */}
                <button
                  onClick={onToggleFullScreen}
                  className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#f8f8ff] rounded"
                  title={isFullScreen ? "Minimize" : "Maximize"}
                >
                  {isFullScreen ? (
                    <svg width="14" height="14" viewBox="0 0 17 17" fill="none">
                      <path d="M4.94444 0.5V3.16667C4.94444 3.63816 4.75714 4.09035 4.42375 4.42375C4.09035 4.75714 3.63816 4.94444 3.16667 4.94444H0.5M16.5 4.94444H13.8333C13.3618 4.94444 12.9097 4.75714 12.5763 4.42375C12.2429 4.09035 12.0556 3.63816 12.0556 3.16667V0.5M12.0556 16.5V13.8333C12.0556 13.3618 12.2429 12.9097 12.5763 12.5763C12.9097 12.2429 13.3618 12.0556 13.8333 12.0556H16.5M0.5 12.0556H3.16667C3.63816 12.0556 4.09035 12.2429 4.42375 12.5763C4.75714 12.9097 4.94444 13.3618 4.94444 13.8333V16.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 17 17" fill="none">
                      <path d="M4.94444 0.5H2.27778C1.80628 0.5 1.3541 0.687301 1.0207 1.0207C0.687301 1.3541 0.5 1.80628 0.5 2.27778V4.94444M16.5 4.94444V2.27778C16.5 1.80628 16.3127 1.3541 15.9793 1.0207C15.6459 0.687301 15.1937 0.5 14.7222 0.5H12.0556M12.0556 16.5H14.7222C15.1937 16.5 15.6459 16.3127 15.9793 15.9793C16.3127 15.6459 16.5 15.1937 16.5 14.7222V12.0556M0.5 12.0556V14.7222C0.5 15.1937 0.687301 15.6459 1.0207 15.9793C1.3541 16.3127 1.80628 16.5 2.27778 16.5H4.94444" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#f8f8ff] rounded"
                  title="Remove"
                >
                  <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
                    <path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chart canvas */}
        <div ref={containerRef} className="flex-1 min-h-0 relative cursor-crosshair">
          {visible ? (
            <canvas
              ref={canvasRef}
              className="absolute inset-0"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#fafafa]">
              <span className="text-[13px] text-[#babac1] font-['Source_Sans_3',sans-serif]">
                APO indicator hidden
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Settings modal */}
      <APOSettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onApply={setSettings}
      />
    </>
  );
}