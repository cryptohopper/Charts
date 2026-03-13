import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CandleData } from "./chart-data";
import { useTheme } from "./theme-context";

/* ─── A/D Calculation ─────────────────────────── */

function computeAD(candles: CandleData[]): number[] {
  const result: number[] = [];
  let cumulative = 0;
  for (let i = 0; i < candles.length; i++) {
    const c = candles[i];
    const hl = c.high - c.low;
    const mfm = hl === 0 ? 0 : ((c.close - c.low) - (c.high - c.close)) / hl;
    const mfv = mfm * c.volume;
    cumulative += mfv;
    result.push(cumulative);
  }
  return result;
}

/* ─── A/D Settings Modal ─────────────────────── */

export interface ADSettings {
  color: string;
  lineWidth: number;
  plotStyle: "line" | "line_with_breaks" | "step_line" | "histogram" | "cross" | "area" | "area_with_breaks" | "columns" | "circles";
  resolution: "same_as_symbol" | "1_second" | "5_seconds" | "30_seconds" | "1_minute" | "5_minutes" | "15_minutes" | "30_minutes" | "45_minutes" | "1_hour" | "2_hours" | "3_hours" | "4_hours" | "1_day" | "1_week" | "1_month";
  precision: string;
}

const DEFAULT_AD_SETTINGS: ADSettings = {
  color: "#DE5537",
  lineWidth: 1.5,
  plotStyle: "line",
  resolution: "same_as_symbol",
  precision: "Default",
};

const PLOT_STYLES: { value: ADSettings["plotStyle"]; label: string; icon: React.ReactNode }[] = [
  { value: "line", label: "Line", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 10L5 4L9 8L13 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { value: "line_with_breaks", label: "Line with breaks", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 10L4 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M6 7L9 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M11 6L13 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg> },
  { value: "step_line", label: "Step line", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 10H4V5H7V8H10V3H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { value: "histogram", label: "Histogram", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="6" width="3" height="7" rx="0.5" stroke="currentColor" strokeWidth="1"/><rect x="5.5" y="2" width="3" height="11" rx="0.5" stroke="currentColor" strokeWidth="1"/><rect x="10" y="4" width="3" height="9" rx="0.5" stroke="currentColor" strokeWidth="1"/></svg> },
  { value: "cross", label: "Cross", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5L5 7M5 5L3 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M7 3L9 5M9 3L7 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M11 7L13 9M13 7L11 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg> },
  { value: "area", label: "Area", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 10L5 4L9 8L13 2V12H1V10Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { value: "area_with_breaks", label: "Area with breaks", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 10L4 5V12H1V10Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/><path d="M6 7L9 4V12H6V7Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg> },
  { value: "columns", label: "Columns", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="6" width="2" height="6" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8"/><rect x="6" y="3" width="2" height="9" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8"/><rect x="10" y="5" width="2" height="7" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8"/></svg> },
  { value: "circles", label: "Circles", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="3" cy="9" r="1.5" stroke="currentColor" strokeWidth="1"/><circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1"/><circle cx="11" cy="7" r="1.5" stroke="currentColor" strokeWidth="1"/></svg> },
];

const RESOLUTIONS: { value: ADSettings["resolution"]; label: string }[] = [
  { value: "same_as_symbol", label: "Same as symbol" },
  { value: "1_second", label: "1 second" },
  { value: "5_seconds", label: "5 seconds" },
  { value: "30_seconds", label: "30 seconds" },
  { value: "1_minute", label: "1 minute" },
  { value: "5_minutes", label: "5 minutes" },
  { value: "15_minutes", label: "15 minutes" },
  { value: "30_minutes", label: "30 minutes" },
  { value: "45_minutes", label: "45 minutes" },
  { value: "1_hour", label: "1 hour" },
  { value: "2_hours", label: "2 hours" },
  { value: "3_hours", label: "3 hours" },
  { value: "4_hours", label: "4 hours" },
  { value: "1_day", label: "1 day" },
  { value: "1_week", label: "1 week" },
  { value: "1_month", label: "1 month" },
];

interface ADSettingsModalProps {
  open: boolean;
  onClose: () => void;
  settings: ADSettings;
  onApply: (s: ADSettings) => void;
}

function ADSettingsModal({ open, onClose, settings, onApply }: ADSettingsModalProps) {
  const [tab, setTab] = useState<"inputs" | "style">("inputs");
  const [local, setLocal] = useState(settings);
  const [showPlotDropdown, setShowPlotDropdown] = useState(false);
  const [showResDropdown, setShowResDropdown] = useState(false);
  const [showPrecDropdown, setShowPrecDropdown] = useState(false);
  const plotRef = useRef<HTMLDivElement>(null);
  const resRef = useRef<HTMLDivElement>(null);
  const precRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setLocal(settings);
  }, [open, settings]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (plotRef.current && !plotRef.current.contains(e.target as Node)) setShowPlotDropdown(false);
      if (resRef.current && !resRef.current.contains(e.target as Node)) setShowResDropdown(false);
      if (precRef.current && !precRef.current.contains(e.target as Node)) setShowPrecDropdown(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!open) return null;

  const selectedPlotStyle = PLOT_STYLES.find(p => p.value === local.plotStyle);
  const selectedRes = RESOLUTIONS.find(r => r.value === local.resolution);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-[rgba(58,62,71,0.5)]" onClick={onClose} />
      <motion.div
        className="relative bg-white rounded-md shadow-[1px_8px_40px_rgba(67,67,67,0.12)] border border-[#f8f8ff] overflow-visible"
        style={{ width: 404 }}
        initial={{ scale: 0.95, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
      >
        {/* Header */}
        <div className="h-[40px] bg-[#f8f8ff] flex items-center justify-between px-[15px] rounded-t-md">
          <span className="text-[14px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600 }}>
            Accumulation / Distribution
          </span>
          <button
            onClick={onClose}
            className="w-[24px] h-[24px] flex items-center justify-center hover:bg-white/60 rounded"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="#1F1F1F" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#efeff4]">
          {(["inputs", "style"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 h-[36px] text-[13px] font-['Source_Sans_3',sans-serif] capitalize transition-colors ${
                tab === t
                  ? "text-[#00b1c7] border-b-2 border-[#00b1c7]"
                  : "text-[#8e8e93] hover:text-[#1f1f1f]"
              }`}
              style={tab === t ? { fontWeight: 600 } : {}}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-[15px]">
          {tab === "inputs" ? (
            <div className="flex flex-col gap-[16px]">
              {/* Resolution */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Resolution</span>
                <div className="relative" ref={resRef}>
                  <button
                    onClick={() => setShowResDropdown((v) => !v)}
                    className="w-[160px] h-[30px] rounded border border-[#efeff4] text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] flex items-center justify-between px-[10px] hover:border-[#babac1]"
                  >
                    <span>{selectedRes?.label || "Same as symbol"}</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                      <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {showResDropdown && (
                    <div className="absolute right-0 top-[34px] z-10 bg-white rounded-md shadow-[0px_4px_20px_rgba(49,49,49,0.1)] border border-[#f8f8ff] py-[4px] max-h-[240px] overflow-y-auto" style={{ width: 160 }}>
                      {RESOLUTIONS.map((r) => (
                        <button
                          key={r.value}
                          onClick={() => { setLocal((s) => ({ ...s, resolution: r.value })); setShowResDropdown(false); }}
                          className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff]"
                          style={{ color: local.resolution === r.value ? "#00B1C7" : "#1f1f1f" }}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[16px]">
              {/* Plot Line toggle + Color + Style */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <label className="flex items-center gap-[6px] cursor-pointer">
                    <div className="relative w-[16px] h-[16px]">
                      <input
                        type="checkbox"
                        checked={true}
                        readOnly
                        className="appearance-none w-[16px] h-[16px] rounded border border-[#00b1c7] bg-white checked:bg-[#00b1c7] cursor-pointer"
                      />
                      <svg className="absolute inset-0 w-[16px] h-[16px] pointer-events-none" viewBox="0 0 16 16" fill="none">
                        <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Acc / Dist</span>
                  </label>
                </div>
                <div className="flex items-center gap-[8px]">
                  {/* Color picker */}
                  <label className="relative w-[28px] h-[28px] rounded border border-[#efeff4] cursor-pointer overflow-hidden">
                    <div className="absolute inset-[3px] rounded-sm" style={{ backgroundColor: local.color }} />
                    <input
                      type="color"
                      value={local.color}
                      onChange={(e) => setLocal((s) => ({ ...s, color: e.target.value }))}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                  {/* Line width buttons */}
                  <div className="flex border border-[#efeff4] rounded overflow-hidden">
                    {[1, 1.5, 2, 3].map((w) => (
                      <button
                        key={w}
                        onClick={() => setLocal((s) => ({ ...s, lineWidth: w }))}
                        className={`w-[28px] h-[28px] flex items-center justify-center ${local.lineWidth === w ? 'bg-[#f0f0f5]' : 'hover:bg-[#fafaff]'}`}
                      >
                        <div className="rounded-full bg-[#1f1f1f]" style={{ width: 4 + w * 3, height: Math.max(1, w) }} />
                      </button>
                    ))}
                  </div>
                  {/* Plot style dropdown */}
                  <div className="relative" ref={plotRef}>
                    <button
                      onClick={() => setShowPlotDropdown((v) => !v)}
                      className="h-[28px] px-[8px] rounded border border-[#efeff4] text-[#1f1f1f] flex items-center gap-[6px] hover:border-[#babac1]"
                    >
                      {selectedPlotStyle?.icon}
                      <span className="text-[12px] font-['Source_Sans_3',sans-serif]">{selectedPlotStyle?.label || "Line"}</span>
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                        <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {showPlotDropdown && (
                      <div className="absolute right-0 top-[32px] z-10 bg-white rounded-md shadow-[0px_4px_20px_rgba(49,49,49,0.1)] border border-[#f8f8ff] py-[4px]" style={{ width: 180 }}>
                        {PLOT_STYLES.map((ps) => (
                          <button
                            key={ps.value}
                            onClick={() => { setLocal((s) => ({ ...s, plotStyle: ps.value })); setShowPlotDropdown(false); }}
                            className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff] flex items-center gap-[8px]"
                            style={{ color: local.plotStyle === ps.value ? "#00B1C7" : "#1f1f1f" }}
                          >
                            {ps.icon}
                            {ps.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Precision */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Precision</span>
                <div className="relative" ref={precRef}>
                  <button
                    onClick={() => setShowPrecDropdown((v) => !v)}
                    className="w-[120px] h-[30px] rounded border border-[#efeff4] text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] flex items-center justify-between px-[10px] hover:border-[#babac1]"
                  >
                    <span>{local.precision}</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                      <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {showPrecDropdown && (
                    <div className="absolute right-0 top-[34px] z-10 bg-white rounded-md shadow-[0px_4px_20px_rgba(49,49,49,0.1)] border border-[#f8f8ff] py-[4px]" style={{ width: 120 }}>
                      {["Default", "0", "1", "2", "3", "4", "5", "6", "7", "8"].map((p) => (
                        <button
                          key={p}
                          onClick={() => { setLocal((s) => ({ ...s, precision: p })); setShowPrecDropdown(false); }}
                          className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff]"
                          style={{ color: local.precision === p ? "#00B1C7" : "#1f1f1f" }}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-[15px] pb-[15px]">
          <button
            onClick={() => setLocal(DEFAULT_AD_SETTINGS)}
            className="text-[12px] text-[#8e8e93] font-['Source_Sans_3',sans-serif] hover:text-[#1f1f1f]"
          >
            Reset Settings
          </button>
          <div className="flex gap-[8px]">
            <button
              onClick={onClose}
              className="h-[30px] px-[16px] bg-white border border-[#babac1] rounded-sm text-[13px] text-[#8e8e93] font-['Source_Sans_3',sans-serif] hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => { onApply(local); onClose(); }}
              className="h-[30px] px-[16px] bg-[#00b1c7] rounded-sm text-[13px] text-white font-['Source_Sans_3',sans-serif] hover:bg-[#009aad]"
              style={{ fontWeight: 600 }}
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── A/D Indicator Pane ─────────────────────── */

interface ADIndicatorPaneProps {
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

export function ADIndicatorPane({
  data,
  scrollOffset,
  visibleCandles,
  chartWidth,
  candleStep,
  onClose,
  height,
  isFullScreen,
  onToggleFullScreen,
}: ADIndicatorPaneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hovered, setHovered] = useState(false);
  const [settings, setSettings] = useState<ADSettings>(DEFAULT_AD_SETTINGS);
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

  // Compute A/D values for the full dataset
  const adValues = useMemo(() => computeAD(data), [data]);

  const maxScroll = Math.max(0, data.length - visibleCandles);
  const startIdx = Math.max(0, Math.min(maxScroll, Math.round(scrollOffset)));
  const visibleAD = useMemo(
    () => adValues.slice(startIdx, startIdx + visibleCandles + 1),
    [adValues, startIdx, visibleCandles]
  );

  // Current value for header display
  const currentValue = visibleAD.length > 0 ? visibleAD[visibleAD.length - 1] : 0;

  // Precision formatting
  const formatValue = useCallback((val: number) => {
    if (settings.precision === "Default") {
      if (Math.abs(val) >= 1e9) return (val / 1e9).toFixed(2) + "B";
      if (Math.abs(val) >= 1e6) return (val / 1e6).toFixed(2) + "M";
      if (Math.abs(val) >= 1e3) return (val / 1e3).toFixed(2) + "K";
      return val.toFixed(2);
    }
    return val.toFixed(parseInt(settings.precision) || 0);
  }, [settings.precision]);

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

    if (visibleAD.length < 2) return;

    // Find min/max for visible range
    let minVal = Infinity, maxVal = -Infinity;
    for (const v of visibleAD) {
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
      ctx.fillText(formatValue(val), cw + 8, y + 4);
    }

    // Price bar separator
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cw + 0.5, 0);
    ctx.lineTo(cw + 0.5, ch);
    ctx.stroke();

    const pStyle = settings.plotStyle;

    if (pStyle === "line" || pStyle === "area") {
      // A/D line
      ctx.strokeStyle = settings.color;
      ctx.lineWidth = settings.lineWidth;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.beginPath();
      for (let i = 0; i < visibleAD.length; i++) {
        const x = i * candleStep + candleStep / 2;
        const y = valToY(visibleAD[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Fill for area
      if (pStyle === "area") {
        const gradient = ctx.createLinearGradient(0, 0, 0, ch);
        gradient.addColorStop(0, settings.color + "30");
        gradient.addColorStop(1, settings.color + "05");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(candleStep / 2, valToY(visibleAD[0]));
        for (let i = 1; i < visibleAD.length; i++) {
          ctx.lineTo(i * candleStep + candleStep / 2, valToY(visibleAD[i]));
        }
        const lastX = (visibleAD.length - 1) * candleStep + candleStep / 2;
        ctx.lineTo(lastX, ch);
        ctx.lineTo(candleStep / 2, ch);
        ctx.closePath();
        ctx.fill();
      }
    } else if (pStyle === "histogram" || pStyle === "columns") {
      const barW = Math.max(1, candleStep * 0.6);
      for (let i = 0; i < visibleAD.length; i++) {
        const x = i * candleStep + candleStep / 2 - barW / 2;
        const y = valToY(visibleAD[i]);
        const baseY = valToY(0);
        ctx.fillStyle = settings.color + (pStyle === "columns" ? "60" : "");
        ctx.fillRect(x, Math.min(y, baseY), barW, Math.abs(y - baseY));
        if (pStyle === "columns") {
          ctx.strokeStyle = settings.color;
          ctx.lineWidth = 1;
          ctx.strokeRect(x, Math.min(y, baseY), barW, Math.abs(y - baseY));
        }
      }
    } else if (pStyle === "step_line") {
      ctx.strokeStyle = settings.color;
      ctx.lineWidth = settings.lineWidth;
      ctx.beginPath();
      for (let i = 0; i < visibleAD.length; i++) {
        const x = i * candleStep + candleStep / 2;
        const y = valToY(visibleAD[i]);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          const prevX = (i - 1) * candleStep + candleStep / 2;
          ctx.lineTo(x, valToY(visibleAD[i - 1]));
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    } else if (pStyle === "circles") {
      ctx.fillStyle = settings.color;
      for (let i = 0; i < visibleAD.length; i++) {
        const x = i * candleStep + candleStep / 2;
        const y = valToY(visibleAD[i]);
        ctx.beginPath();
        ctx.arc(x, y, Math.max(2, settings.lineWidth), 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (pStyle === "cross") {
      ctx.strokeStyle = settings.color;
      ctx.lineWidth = settings.lineWidth;
      const s = 3;
      for (let i = 0; i < visibleAD.length; i++) {
        const x = i * candleStep + candleStep / 2;
        const y = valToY(visibleAD[i]);
        ctx.beginPath();
        ctx.moveTo(x - s, y - s); ctx.lineTo(x + s, y + s);
        ctx.moveTo(x + s, y - s); ctx.lineTo(x - s, y + s);
        ctx.stroke();
      }
    } else {
      // line_with_breaks, area_with_breaks - default to line
      ctx.strokeStyle = settings.color;
      ctx.lineWidth = settings.lineWidth;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.beginPath();
      for (let i = 0; i < visibleAD.length; i++) {
        const x = i * candleStep + candleStep / 2;
        const y = valToY(visibleAD[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Gradient fill under line (only for default line mode)
    if (pStyle === "line") {
      const gradient = ctx.createLinearGradient(0, 0, 0, ch);
      gradient.addColorStop(0, settings.color + "18");
      gradient.addColorStop(0.5, settings.color + "05");
      gradient.addColorStop(1, settings.color + "18");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(candleStep / 2, valToY(visibleAD[0]));
      for (let i = 1; i < visibleAD.length; i++) {
        ctx.lineTo(i * candleStep + candleStep / 2, valToY(visibleAD[i]));
      }
      const lastX = (visibleAD.length - 1) * candleStep + candleStep / 2;
      const zeroY = valToY(0);
      ctx.lineTo(lastX, zeroY);
      ctx.lineTo(candleStep / 2, zeroY);
      ctx.closePath();
      ctx.fill();
    }

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
      if (candleIdx >= 0 && candleIdx < visibleAD.length) {
        const val = visibleAD[candleIdx];
        const dotY = valToY(val);
        ctx.fillStyle = settings.color;
        ctx.beginPath();
        ctx.arc(candleIdx * candleStep + candleStep / 2, dotY, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [dimensions, visibleAD, candleStep, settings, visible, mouseX, formatValue, isDark]);

  useEffect(() => { drawChart(); }, [drawChart]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseX(null);
  }, []);

  // Hovered A/D value
  const hoveredValue = useMemo(() => {
    if (mouseX === null) return null;
    const candleIdx = Math.floor(mouseX / candleStep);
    if (candleIdx >= 0 && candleIdx < visibleAD.length) {
      return visibleAD[candleIdx];
    }
    return null;
  }, [mouseX, candleStep, visibleAD]);

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
        <div className="h-[30px] flex items-center px-[10px] gap-[6px] shrink-0 border-b border-[#efeff4] bg-white">
          <span className="text-[12px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600 }}>
            Accum / Dist
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
              {formatValue(displayValue)}
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
                A/D indicator hidden
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Settings modal */}
      <ADSettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onApply={setSettings}
      />
    </>
  );
}