import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CandleData } from "./chart-data";

/* ─── BB Calculation ─────────────────────── */

type BBSource = "close" | "open" | "high" | "low" | "hl2" | "hlc3" | "ohlc4";

function getSourceValues(candles: CandleData[], source: BBSource): number[] {
  return candles.map((c) => {
    switch (source) {
      case "close": return c.close;
      case "open": return c.open;
      case "high": return c.high;
      case "low": return c.low;
      case "hl2": return (c.high + c.low) / 2;
      case "hlc3": return (c.high + c.low + c.close) / 3;
      case "ohlc4": return (c.open + c.high + c.low + c.close) / 4;
    }
  });
}

function computeSMA(data: number[], period: number): number[] {
  const result: number[] = new Array(data.length).fill(NaN);
  if (data.length < period) return result;
  let sum = 0;
  for (let i = 0; i < period; i++) sum += data[i];
  result[period - 1] = sum / period;
  for (let i = period; i < data.length; i++) {
    sum += data[i] - data[i - period];
    result[i] = sum / period;
  }
  return result;
}

export interface BBData {
  upper: number[];
  middle: number[];
  lower: number[];
}

export function computeBB(
  candles: CandleData[],
  length: number,
  stdDev: number,
  source: BBSource,
  offset: number
): BBData {
  const src = getSourceValues(candles, source);
  const sma = computeSMA(src, length);

  const upper: number[] = new Array(src.length).fill(NaN);
  const lower: number[] = new Array(src.length).fill(NaN);

  for (let i = length - 1; i < src.length; i++) {
    let sumSq = 0;
    for (let j = i - length + 1; j <= i; j++) {
      const diff = src[j] - sma[i];
      sumSq += diff * diff;
    }
    // Population std dev (÷N, not ÷N−1): matches TradingView and Pine Script BB.
    // Use this divisor when computing reference values for unit tests.
    const sd = Math.sqrt(sumSq / length);
    upper[i] = sma[i] + stdDev * sd;
    lower[i] = sma[i] - stdDev * sd;
  }

  // Apply offset (shift the arrays)
  if (offset !== 0) {
    const shift = (arr: number[]) => {
      const r = new Array(arr.length).fill(NaN);
      for (let i = 0; i < arr.length; i++) {
        const si = i - offset;
        if (si >= 0 && si < arr.length) r[i] = arr[si];
      }
      return r;
    };
    return { upper: shift(upper), middle: shift(sma), lower: shift(lower) };
  }

  return { upper, middle: sma, lower };
}

/* ─── BB Settings ─────────────────────────── */

export type BBLineStyle = "solid" | "dashed" | "dotted";

export interface BBSettings {
  length: number;
  source: BBSource;
  stdDev: number;
  offset: number;
  resolution: string;
  basisColor: string;
  upperColor: string;
  lowerColor: string;
  basisLineWidth: number;
  upperLineWidth: number;
  lowerLineWidth: number;
  basisLineStyle: BBLineStyle;
  upperLineStyle: BBLineStyle;
  lowerLineStyle: BBLineStyle;
  showBasis: boolean;
  showUpper: boolean;
  showLower: boolean;
  showBackground: boolean;
  backgroundColor: string;
  backgroundOpacity: number;
  precision: string;
  visible: boolean;
}

export const DEFAULT_BB_SETTINGS: BBSettings = {
  length: 20,
  source: "close",
  stdDev: 2,
  offset: 0,
  resolution: "same_as_symbol",
  basisColor: "#DE5537",
  upperColor: "#2962FF",
  lowerColor: "#00B1C7",
  basisLineWidth: 1.5,
  upperLineWidth: 1.5,
  lowerLineWidth: 1.5,
  basisLineStyle: "solid",
  upperLineStyle: "solid",
  lowerLineStyle: "solid",
  showBasis: true,
  showUpper: true,
  showLower: true,
  showBackground: true,
  backgroundColor: "#2962FF",
  backgroundOpacity: 0.08,
  precision: "Default",
  visible: true,
};

/* ─── BB Canvas Drawing ──────────────────── */

function applyLineStyle(ctx: CanvasRenderingContext2D, style: BBLineStyle) {
  switch (style) {
    case "solid": ctx.setLineDash([]); break;
    case "dashed": ctx.setLineDash([6, 4]); break;
    case "dotted": ctx.setLineDash([2, 2]); break;
  }
}

export function drawBBOnCanvas(
  ctx: CanvasRenderingContext2D,
  bbData: BBData,
  startIdx: number,
  visibleCount: number,
  candleStep: number,
  scaledCW: number,
  priceToY: (p: number) => number,
  chartWidth: number,
  settings: BBSettings
) {
  if (!settings.visible) return;

  const { upper, middle, lower } = bbData;
  const endIdx = Math.min(startIdx + visibleCount + 1, upper.length);

  // Collect visible points
  const pts: { x: number; uY: number; mY: number; lY: number }[] = [];
  for (let i = startIdx; i < endIdx; i++) {
    if (isNaN(upper[i]) || isNaN(middle[i]) || isNaN(lower[i])) continue;
    const localI = i - startIdx;
    const x = localI * candleStep + scaledCW / 2;
    if (x < -candleStep || x > chartWidth + candleStep) continue;
    pts.push({
      x,
      uY: priceToY(upper[i]),
      mY: priceToY(middle[i]),
      lY: priceToY(lower[i]),
    });
  }

  if (pts.length < 2) return;

  ctx.save();

  // Fill area between upper and lower
  if (settings.showBackground) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].uY);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].uY);
    for (let i = pts.length - 1; i >= 0; i--) ctx.lineTo(pts[i].x, pts[i].lY);
    ctx.closePath();
    ctx.fillStyle = settings.backgroundColor + Math.round(settings.backgroundOpacity * 255).toString(16).padStart(2, "0");
    ctx.fill();
  }

  // Upper band
  if (settings.showUpper) {
    ctx.beginPath();
    ctx.strokeStyle = settings.upperColor;
    ctx.lineWidth = settings.upperLineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    applyLineStyle(ctx, settings.upperLineStyle);
    for (let i = 0; i < pts.length; i++) {
      if (i === 0) ctx.moveTo(pts[i].x, pts[i].uY);
      else ctx.lineTo(pts[i].x, pts[i].uY);
    }
    ctx.stroke();
  }

  // Basis (middle)
  if (settings.showBasis) {
    ctx.beginPath();
    ctx.strokeStyle = settings.basisColor;
    ctx.lineWidth = settings.basisLineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    applyLineStyle(ctx, settings.basisLineStyle);
    for (let i = 0; i < pts.length; i++) {
      if (i === 0) ctx.moveTo(pts[i].x, pts[i].mY);
      else ctx.lineTo(pts[i].x, pts[i].mY);
    }
    ctx.stroke();
  }

  // Lower band
  if (settings.showLower) {
    ctx.beginPath();
    ctx.strokeStyle = settings.lowerColor;
    ctx.lineWidth = settings.lowerLineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    applyLineStyle(ctx, settings.lowerLineStyle);
    for (let i = 0; i < pts.length; i++) {
      if (i === 0) ctx.moveTo(pts[i].x, pts[i].lY);
      else ctx.lineTo(pts[i].x, pts[i].lY);
    }
    ctx.stroke();
  }

  ctx.setLineDash([]);
  ctx.restore();
}

/* ─── BB Settings Modal ──────────────────── */

const SOURCES: { value: BBSource; label: string }[] = [
  { value: "close", label: "close" },
  { value: "open", label: "open" },
  { value: "high", label: "high" },
  { value: "low", label: "low" },
  { value: "hl2", label: "hl2" },
  { value: "hlc3", label: "hlc3" },
  { value: "ohlc4", label: "ohlc4" },
];

const RESOLUTIONS: { value: string; label: string }[] = [
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

const LINE_STYLES: { value: BBLineStyle; label: string; icon: React.ReactNode }[] = [
  {
    value: "solid", label: "Solid",
    icon: <svg width="24" height="2" viewBox="0 0 24 2"><line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="1.5" /></svg>,
  },
  {
    value: "dashed", label: "Dashed",
    icon: <svg width="24" height="2" viewBox="0 0 24 2"><line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" /></svg>,
  },
  {
    value: "dotted", label: "Dotted",
    icon: <svg width="24" height="2" viewBox="0 0 24 2"><line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" /></svg>,
  },
];

interface BBSettingsModalProps {
  open: boolean;
  onClose: () => void;
  settings: BBSettings;
  onApply: (s: BBSettings) => void;
}

function BBSettingsModal({ open, onClose, settings, onApply }: BBSettingsModalProps) {
  const [tab, setTab] = useState<"inputs" | "style">("inputs");
  const [local, setLocal] = useState(settings);
  const [showSrcDropdown, setShowSrcDropdown] = useState(false);
  const [showResDropdown, setShowResDropdown] = useState(false);
  const [showPrecDropdown, setShowPrecDropdown] = useState(false);
  const [showLineStyleFor, setShowLineStyleFor] = useState<"basis" | "upper" | "lower" | null>(null);
  const srcRef = useRef<HTMLDivElement>(null);
  const resRef = useRef<HTMLDivElement>(null);
  const precRef = useRef<HTMLDivElement>(null);
  const lineStyleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) { setLocal(settings); setTab("inputs"); }
  }, [open, settings]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (srcRef.current && !srcRef.current.contains(e.target as Node)) setShowSrcDropdown(false);
      if (resRef.current && !resRef.current.contains(e.target as Node)) setShowResDropdown(false);
      if (precRef.current && !precRef.current.contains(e.target as Node)) setShowPrecDropdown(false);
      if (lineStyleRef.current && !lineStyleRef.current.contains(e.target as Node)) setShowLineStyleFor(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!open) return null;

  const selectedRes = RESOLUTIONS.find(r => r.value === local.resolution);
  const selectedSrc = SOURCES.find(s => s.value === local.source);

  const renderLineRow = (
    label: string,
    showKey: "showBasis" | "showUpper" | "showLower",
    colorKey: "basisColor" | "upperColor" | "lowerColor",
    lineWidthKey: "basisLineWidth" | "upperLineWidth" | "lowerLineWidth",
    lineStyleKey: "basisLineStyle" | "upperLineStyle" | "lowerLineStyle",
    styleDropdownId: "basis" | "upper" | "lower"
  ) => {
    const currentStyle = LINE_STYLES.find(l => l.value === local[lineStyleKey]) || LINE_STYLES[0];
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <label className="flex items-center gap-[6px] cursor-pointer">
            <div className="relative w-[16px] h-[16px]">
              <input
                type="checkbox"
                checked={local[showKey]}
                onChange={(e) => setLocal((s) => ({ ...s, [showKey]: e.target.checked }))}
                className="appearance-none w-[16px] h-[16px] rounded border border-[#babac1] bg-white checked:bg-[#00b1c7] checked:border-[#00b1c7] cursor-pointer"
              />
              {local[showKey] && (
                <svg className="absolute inset-0 w-[16px] h-[16px] pointer-events-none" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">{label}</span>
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <label className="relative w-[28px] h-[28px] rounded border border-[#efeff4] cursor-pointer overflow-hidden">
            <div className="absolute inset-[3px] rounded-sm" style={{ backgroundColor: local[colorKey] }} />
            <input
              type="color"
              value={local[colorKey]}
              onChange={(e) => setLocal((s) => ({ ...s, [colorKey]: e.target.value }))}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </label>
          {/* Line style dropdown */}
          <div className="relative" ref={showLineStyleFor === styleDropdownId ? lineStyleRef : undefined}>
            <button
              onClick={() => setShowLineStyleFor(showLineStyleFor === styleDropdownId ? null : styleDropdownId)}
              className="h-[28px] px-[8px] rounded border border-[#efeff4] text-[#1f1f1f] flex items-center gap-[6px] hover:border-[#babac1]"
            >
              {currentStyle.icon}
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {showLineStyleFor === styleDropdownId && (
              <div className="absolute right-0 top-[32px] z-10 bg-white rounded-md shadow-[0px_4px_20px_rgba(49,49,49,0.1)] border border-[#f8f8ff] py-[4px]" style={{ width: 100 }}>
                {LINE_STYLES.map((ls) => (
                  <button
                    key={ls.value}
                    onClick={() => { setLocal((s) => ({ ...s, [lineStyleKey]: ls.value })); setShowLineStyleFor(null); }}
                    className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff] flex items-center gap-[8px]"
                    style={{ color: local[lineStyleKey] === ls.value ? "#00B1C7" : "#1f1f1f" }}
                  >
                    {ls.icon}
                    <span className="text-[12px]">{ls.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-[rgba(58,62,71,0.5)]" onClick={onClose} />
      <motion.div
        className="relative bg-white rounded-md shadow-[1px_8px_40px_rgba(67,67,67,0.12)] border border-[#f8f8ff] overflow-visible"
        style={{ width: 420 }}
        initial={{ scale: 0.95, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
      >
        {/* Header */}
        <div className="h-[40px] bg-[#f8f8ff] flex items-center justify-between px-[15px] rounded-t-md">
          <span className="text-[14px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600 }}>
            Bollinger Bands
          </span>
          <button onClick={onClose} className="w-[24px] h-[24px] flex items-center justify-center hover:bg-white/60 rounded">
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
                tab === t ? "text-[#00b1c7] border-b-2 border-[#00b1c7]" : "text-[#8e8e93] hover:text-[#1f1f1f]"
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
            <div className="flex flex-col gap-[14px]">
              {/* Resolution */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Resolution</span>
                <div className="relative" ref={resRef}>
                  <button
                    onClick={() => setShowResDropdown(v => !v)}
                    className="w-[160px] h-[30px] rounded border border-[#efeff4] text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] flex items-center justify-between px-[10px] hover:border-[#babac1]"
                  >
                    <span>{selectedRes?.label || "Same as symbol"}</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                      <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {showResDropdown && (
                    <div className="absolute right-0 top-[34px] z-10 bg-white rounded-md shadow-[0px_4px_20px_rgba(49,49,49,0.1)] border border-[#f8f8ff] py-[4px] max-h-[240px] overflow-y-auto" style={{ width: 160 }}>
                      {RESOLUTIONS.map(r => (
                        <button key={r.value} onClick={() => { setLocal(s => ({ ...s, resolution: r.value })); setShowResDropdown(false); }}
                          className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff]"
                          style={{ color: local.resolution === r.value ? "#00B1C7" : "#1f1f1f" }}
                        >{r.label}</button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Length */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Length</span>
                <input type="number" value={local.length}
                  onChange={e => setLocal(s => ({ ...s, length: Math.max(1, +e.target.value || 1) }))}
                  className="w-[60px] h-[30px] rounded border border-[#efeff4] text-center text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] outline-none focus:border-[#00b1c7]"
                />
              </div>

              {/* Source */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Source</span>
                <div className="relative" ref={srcRef}>
                  <button
                    onClick={() => setShowSrcDropdown(v => !v)}
                    className="w-[100px] h-[30px] rounded border border-[#efeff4] text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] flex items-center justify-between px-[10px] hover:border-[#babac1]"
                  >
                    <span>{selectedSrc?.label || "close"}</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                      <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {showSrcDropdown && (
                    <div className="absolute right-0 top-[34px] z-10 bg-white rounded-md shadow-[0px_4px_20px_rgba(49,49,49,0.1)] border border-[#f8f8ff] py-[4px]" style={{ width: 100 }}>
                      {SOURCES.map(s => (
                        <button key={s.value} onClick={() => { setLocal(st => ({ ...st, source: s.value })); setShowSrcDropdown(false); }}
                          className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff]"
                          style={{ color: local.source === s.value ? "#00B1C7" : "#1f1f1f" }}
                        >{s.label}</button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* StdDev */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">StdDev</span>
                <input type="number" value={local.stdDev} step="0.5"
                  onChange={e => setLocal(s => ({ ...s, stdDev: Math.max(0.1, +e.target.value || 0.1) }))}
                  className="w-[60px] h-[30px] rounded border border-[#efeff4] text-center text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] outline-none focus:border-[#00b1c7]"
                />
              </div>

              {/* Offset */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Offset</span>
                <input type="number" value={local.offset}
                  onChange={e => setLocal(s => ({ ...s, offset: +e.target.value || 0 }))}
                  className="w-[60px] h-[30px] rounded border border-[#efeff4] text-center text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] outline-none focus:border-[#00b1c7]"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[16px]">
              {renderLineRow("Basis", "showBasis", "basisColor", "basisLineWidth", "basisLineStyle", "basis")}
              {renderLineRow("Upper Band", "showUpper", "upperColor", "upperLineWidth", "upperLineStyle", "upper")}
              {renderLineRow("Lower Band", "showLower", "lowerColor", "lowerLineWidth", "lowerLineStyle", "lower")}

              {/* Background */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <label className="flex items-center gap-[6px] cursor-pointer">
                    <div className="relative w-[16px] h-[16px]">
                      <input type="checkbox" checked={local.showBackground}
                        onChange={e => setLocal(s => ({ ...s, showBackground: e.target.checked }))}
                        className="appearance-none w-[16px] h-[16px] rounded border border-[#babac1] bg-white checked:bg-[#00b1c7] checked:border-[#00b1c7] cursor-pointer"
                      />
                      {local.showBackground && (
                        <svg className="absolute inset-0 w-[16px] h-[16px] pointer-events-none" viewBox="0 0 16 16" fill="none">
                          <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Background</span>
                  </label>
                </div>
                <label className="relative w-[28px] h-[28px] rounded border border-[#efeff4] cursor-pointer overflow-hidden">
                  <div className="absolute inset-[3px] rounded-sm" style={{ backgroundColor: local.backgroundColor, opacity: 0.3 }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" className="absolute inset-0 opacity-30">
                      <rect x="0" y="0" width="11" height="11" fill="#ccc" />
                      <rect x="11" y="11" width="11" height="11" fill="#ccc" />
                    </svg>
                  </div>
                  <input type="color" value={local.backgroundColor}
                    onChange={e => setLocal(s => ({ ...s, backgroundColor: e.target.value }))}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </label>
              </div>

              {/* Precision */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Precision</span>
                <div className="relative" ref={precRef}>
                  <button onClick={() => setShowPrecDropdown(v => !v)}
                    className="w-[120px] h-[30px] rounded border border-[#efeff4] text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] flex items-center justify-between px-[10px] hover:border-[#babac1]"
                  >
                    <span>{local.precision}</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                      <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {showPrecDropdown && (
                    <div className="absolute right-0 top-[34px] z-10 bg-white rounded-md shadow-[0px_4px_20px_rgba(49,49,49,0.1)] border border-[#f8f8ff] py-[4px]" style={{ width: 120 }}>
                      {["Default", "0", "1", "2", "3", "4"].map(p => (
                        <button key={p} onClick={() => { setLocal(s => ({ ...s, precision: p })); setShowPrecDropdown(false); }}
                          className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff]"
                          style={{ color: local.precision === p ? "#00B1C7" : "#1f1f1f" }}
                        >{p}</button>
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
          <button onClick={() => setLocal(DEFAULT_BB_SETTINGS)}
            className="text-[12px] text-[#8e8e93] font-['Source_Sans_3',sans-serif] hover:text-[#1f1f1f]"
          >Reset Settings</button>
          <div className="flex gap-[8px]">
            <button onClick={onClose}
              className="h-[30px] px-[16px] bg-white border border-[#babac1] rounded-sm text-[13px] text-[#8e8e93] font-['Source_Sans_3',sans-serif] hover:bg-gray-50"
            >Cancel</button>
            <button onClick={() => { onApply(local); onClose(); }}
              className="h-[30px] px-[16px] bg-[#00b1c7] rounded-sm text-[13px] text-white font-['Source_Sans_3',sans-serif] hover:bg-[#009aad]"
              style={{ fontWeight: 600 }}
            >Save</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── BB Overlay Header ──────────────────── */

interface BBOverlayHeaderProps {
  settings: BBSettings;
  onSettingsChange: (s: BBSettings) => void;
  onClose: () => void;
  currentValues: { upper: number; middle: number; lower: number } | null;
}

export function BBOverlayHeader({ settings, onSettingsChange, onClose, currentValues }: BBOverlayHeaderProps) {
  const [hovered, setHovered] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const contextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (contextRef.current && !contextRef.current.contains(e.target as Node)) setShowContextMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const formatVal = (val: number) => {
    if (settings.precision === "Default") return val.toFixed(2);
    return val.toFixed(parseInt(settings.precision) || 0);
  };

  return (
    <>
      <div
        className="flex items-center gap-[6px] h-[26px] select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setShowContextMenu(false); }}
      >
        <span className="text-[12px] text-[#8e8e93] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600 }}>
          BB
        </span>
        <span className="text-[12px] text-[#babac1] font-['Source_Sans_3',sans-serif]">
          {settings.length} {settings.source} {settings.stdDev} {settings.offset}
        </span>

        {currentValues && (
          <div className="flex items-center gap-[6px]">
            {settings.showUpper && (
              <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: settings.upperColor, fontWeight: 600 }}>
                {formatVal(currentValues.upper)}
              </span>
            )}
            {settings.showBasis && (
              <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: settings.basisColor, fontWeight: 600 }}>
                {formatVal(currentValues.middle)}
              </span>
            )}
            {settings.showLower && (
              <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: settings.lowerColor, fontWeight: 600 }}>
                {formatVal(currentValues.lower)}
              </span>
            )}
          </div>
        )}

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="flex items-center gap-[1px] relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <button onClick={() => setSettingsOpen(true)} className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#f0f0f5] rounded" title="Settings">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="2" stroke="#8E8E93" strokeWidth="1.2" />
                  <path d="M7 1V3M7 11V13M1 7H3M11 7H13M2.76 2.76L4.17 4.17M9.83 9.83L11.24 11.24M2.76 11.24L4.17 9.83M9.83 4.17L11.24 2.76" stroke="#8E8E93" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
              <button
                onClick={() => onSettingsChange({ ...settings, visible: !settings.visible })}
                className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#f0f0f5] rounded"
                title={settings.visible ? "Hide" : "Show"}
              >
                {settings.visible ? (
                  <svg width="14" height="10" viewBox="0 0 16 12" fill="none">
                    <path d="M1 6C1 6 3.5 1 8 1C12.5 1 15 6 15 6C15 6 12.5 11 8 11C3.5 11 1 6 1 6Z" stroke="#8E8E93" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="8" cy="6" r="2" stroke="#8E8E93" strokeWidth="1.2" />
                  </svg>
                ) : (
                  <svg width="14" height="12" viewBox="0 0 16 14" fill="none">
                    <path d="M1 7C1 7 3.5 2 8 2C12.5 2 15 7 15 7C15 7 12.5 12 8 12C3.5 12 1 7 1 7Z" stroke="#BABAC1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 13L14 1" stroke="#BABAC1" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                )}
              </button>
              <button onClick={onClose} className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#f0f0f5] rounded" title="Remove">
                <svg width="9" height="9" viewBox="0 0 11 11" fill="none">
                  <path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* Context menu trigger */}
              <div className="relative" ref={contextRef}>
                <button
                  onClick={() => setShowContextMenu(v => !v)}
                  className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#f0f0f5] rounded"
                  title="More"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="2" cy="6" r="1" fill="#8E8E93" />
                    <circle cx="6" cy="6" r="1" fill="#8E8E93" />
                    <circle cx="10" cy="6" r="1" fill="#8E8E93" />
                  </svg>
                </button>
                {showContextMenu && (
                  <div className="absolute top-[26px] left-0 z-20 bg-white rounded-md shadow-[0px_4px_20px_rgba(49,49,49,0.1)] border border-[#f8f8ff] py-[4px] w-[140px]">
                    <button onClick={() => { onSettingsChange({ ...settings, visible: !settings.visible }); setShowContextMenu(false); }}
                      className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff] text-[#1f1f1f]"
                    >{settings.visible ? "Hide" : "Show"}</button>
                    <button onClick={() => { setSettingsOpen(true); setShowContextMenu(false); }}
                      className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff] text-[#1f1f1f]"
                    >Settings</button>
                    <button onClick={() => { onClose(); setShowContextMenu(false); }}
                      className="w-full h-[30px] px-[10px] text-left text-[13px] font-['Source_Sans_3',sans-serif] hover:bg-[#f8f8ff] text-[#DE5537]"
                    >Remove</button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BBSettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onApply={onSettingsChange}
      />
    </>
  );
}
