import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CandleData } from "./chart-data";

/* ─── ABands Calculation ─────────────────────── */

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

export interface ABandsData {
  upper: number[];
  middle: number[];
  lower: number[];
}

export function computeABands(
  candles: CandleData[],
  period: number,
  width: number
): ABandsData {
  const upperRaw: number[] = [];
  const middleRaw: number[] = [];
  const lowerRaw: number[] = [];

  for (const c of candles) {
    const hl = c.high + c.low;
    const factor = hl > 0 ? ((c.high - c.low) / (hl / 2)) * width : 0;
    upperRaw.push(c.high * (1 + factor));
    middleRaw.push(c.close);
    lowerRaw.push(c.low * (1 - factor));
  }

  return {
    upper: computeSMA(upperRaw, period),
    middle: computeSMA(middleRaw, period),
    lower: computeSMA(lowerRaw, period),
  };
}

/* ─── ABands Settings ─────────────────────────── */

export interface ABandsSettings {
  period: number;
  width: number;
  upperColor: string;
  middleColor: string;
  lowerColor: string;
  lineWidth: number;
  fillArea: boolean;
  fillOpacity: number;
  visible: boolean;
}

export const DEFAULT_ABANDS_SETTINGS: ABandsSettings = {
  period: 20,
  width: 4,
  upperColor: "#f26d60",
  middleColor: "#00B1C7",
  lowerColor: "#f26d60",
  lineWidth: 1.5,
  fillArea: false,
  fillOpacity: 0.08,
  visible: true,
};

/* ─── ABands Canvas Drawing ──────────────────── */

export function drawABandsOnCanvas(
  ctx: CanvasRenderingContext2D,
  bandsData: ABandsData,
  startIdx: number,
  visibleCount: number,
  candleStep: number,
  scaledCW: number,
  priceToY: (p: number) => number,
  chartWidth: number,
  settings: ABandsSettings
) {
  if (!settings.visible) return;

  const { upper, middle, lower } = bandsData;
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
  if (settings.fillArea) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].uY);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].uY);
    for (let i = pts.length - 1; i >= 0; i--) ctx.lineTo(pts[i].x, pts[i].lY);
    ctx.closePath();
    ctx.fillStyle = settings.upperColor + Math.round(settings.fillOpacity * 255).toString(16).padStart(2, "0");
    ctx.fill();
  }

  // Upper band
  ctx.beginPath();
  ctx.strokeStyle = settings.upperColor;
  ctx.lineWidth = settings.lineWidth;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  for (let i = 0; i < pts.length; i++) {
    if (i === 0) ctx.moveTo(pts[i].x, pts[i].uY);
    else ctx.lineTo(pts[i].x, pts[i].uY);
  }
  ctx.stroke();

  // Middle band
  ctx.beginPath();
  ctx.strokeStyle = settings.middleColor;
  ctx.lineWidth = settings.lineWidth;
  for (let i = 0; i < pts.length; i++) {
    if (i === 0) ctx.moveTo(pts[i].x, pts[i].mY);
    else ctx.lineTo(pts[i].x, pts[i].mY);
  }
  ctx.stroke();

  // Lower band
  ctx.beginPath();
  ctx.strokeStyle = settings.lowerColor;
  ctx.lineWidth = settings.lineWidth;
  for (let i = 0; i < pts.length; i++) {
    if (i === 0) ctx.moveTo(pts[i].x, pts[i].lY);
    else ctx.lineTo(pts[i].x, pts[i].lY);
  }
  ctx.stroke();

  ctx.restore();
}

/* ─── ABands Settings Modal ──────────────────── */

interface ABandsSettingsModalProps {
  open: boolean;
  onClose: () => void;
  settings: ABandsSettings;
  onApply: (s: ABandsSettings) => void;
}

function ABandsSettingsModal({ open, onClose, settings, onApply }: ABandsSettingsModalProps) {
  const [tab, setTab] = useState<"inputs" | "style">("inputs");
  const [local, setLocal] = useState(settings);

  useEffect(() => {
    if (open) setLocal(settings);
  }, [open, settings]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-[rgba(58,62,71,0.5)]" onClick={onClose} />
      <motion.div
        className="relative bg-white rounded-md shadow-[1px_8px_40px_rgba(67,67,67,0.12)] border border-[#f8f8ff] overflow-hidden"
        style={{ width: 380 }}
        initial={{ scale: 0.95, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
      >
        {/* Header */}
        <div className="h-[40px] bg-[#f8f8ff] flex items-center justify-between px-[15px]">
          <span className="text-[14px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600 }}>
            Acceleration Bands
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
            <div className="flex flex-col gap-[12px]">
              {/* Period */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Period</span>
                <input
                  type="number"
                  value={local.period}
                  onChange={(e) => setLocal((s) => ({ ...s, period: Math.max(1, +e.target.value || 1) }))}
                  className="w-[60px] h-[30px] rounded border border-[#efeff4] text-center text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] outline-none focus:border-[#00b1c7]"
                />
              </div>
              {/* Width */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Width</span>
                <input
                  type="number"
                  value={local.width}
                  step={0.5}
                  min={0.1}
                  onChange={(e) => setLocal((s) => ({ ...s, width: Math.max(0.1, +e.target.value || 1) }))}
                  className="w-[60px] h-[30px] rounded border border-[#efeff4] text-center text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] outline-none focus:border-[#00b1c7]"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[12px]">
              {/* Upper Band Color */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Upper Band</span>
                <div className="flex items-center gap-[8px]">
                  <label className="relative w-[28px] h-[28px] rounded border border-[#efeff4] cursor-pointer overflow-hidden">
                    <div className="absolute inset-[3px] rounded-sm" style={{ backgroundColor: local.upperColor }} />
                    <input
                      type="color"
                      value={local.upperColor}
                      onChange={(e) => setLocal((s) => ({ ...s, upperColor: e.target.value }))}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
              {/* Middle Color */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Middle</span>
                <div className="flex items-center gap-[8px]">
                  <label className="relative w-[28px] h-[28px] rounded border border-[#efeff4] cursor-pointer overflow-hidden">
                    <div className="absolute inset-[3px] rounded-sm" style={{ backgroundColor: local.middleColor }} />
                    <input
                      type="color"
                      value={local.middleColor}
                      onChange={(e) => setLocal((s) => ({ ...s, middleColor: e.target.value }))}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
              {/* Lower Band Color */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Lower Band</span>
                <div className="flex items-center gap-[8px]">
                  <label className="relative w-[28px] h-[28px] rounded border border-[#efeff4] cursor-pointer overflow-hidden">
                    <div className="absolute inset-[3px] rounded-sm" style={{ backgroundColor: local.lowerColor }} />
                    <input
                      type="color"
                      value={local.lowerColor}
                      onChange={(e) => setLocal((s) => ({ ...s, lowerColor: e.target.value }))}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
              {/* Line Width */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Line Width</span>
                <input
                  type="number"
                  value={local.lineWidth}
                  step={0.5}
                  min={0.5}
                  max={5}
                  onChange={(e) => setLocal((s) => ({ ...s, lineWidth: Math.max(0.5, Math.min(5, +e.target.value || 1)) }))}
                  className="w-[60px] h-[30px] rounded border border-[#efeff4] text-center text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif] outline-none focus:border-[#00b1c7]"
                />
              </div>
              {/* Fill Area */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]">Fill Area</span>
                <button
                  onClick={() => setLocal((s) => ({ ...s, fillArea: !s.fillArea }))}
                  className={`w-[40px] h-[22px] rounded-full transition-colors ${
                    local.fillArea ? "bg-[#00b1c7]" : "bg-[#efeff4]"
                  }`}
                >
                  <div
                    className={`w-[18px] h-[18px] rounded-full bg-white shadow transition-transform ${
                      local.fillArea ? "translate-x-[20px]" : "translate-x-[2px]"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-[15px] pb-[15px]">
          <button
            onClick={() => setLocal(DEFAULT_ABANDS_SETTINGS)}
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
              Apply
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── ABands Overlay Header ──────────────────── */

interface ABandsOverlayHeaderProps {
  settings: ABandsSettings;
  onSettingsChange: (s: ABandsSettings) => void;
  onClose: () => void;
  currentValues: { upper: number; middle: number; lower: number } | null;
}

export function ABandsOverlayHeader({
  settings,
  onSettingsChange,
  onClose,
  currentValues,
}: ABandsOverlayHeaderProps) {
  const [hovered, setHovered] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center gap-[6px] h-[26px] px-[10px] select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="text-[12px] text-[#1f1f1f] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600 }}>
          abands
        </span>
        <span className="text-[12px] text-[#8e8e93] font-['Source_Sans_3',sans-serif]">
          {settings.period} {settings.width} close
        </span>

        {/* Value badges */}
        {currentValues && (
          <div className="flex items-center gap-[4px] ml-[2px]">
            <span
              className="text-[11px] font-['Source_Sans_3',sans-serif] px-[5px] py-[0px] rounded"
              style={{ color: settings.upperColor, backgroundColor: settings.upperColor + "15", fontWeight: 600 }}
            >
              {currentValues.upper.toFixed(2)}
            </span>
            <span
              className="text-[11px] font-['Source_Sans_3',sans-serif] px-[5px] py-[0px] rounded"
              style={{ color: settings.middleColor, backgroundColor: settings.middleColor + "15", fontWeight: 600 }}
            >
              {currentValues.middle.toFixed(2)}
            </span>
            <span
              className="text-[11px] font-['Source_Sans_3',sans-serif] px-[5px] py-[0px] rounded"
              style={{ color: settings.lowerColor, backgroundColor: settings.lowerColor + "15", fontWeight: 600 }}
            >
              {currentValues.lower.toFixed(2)}
            </span>
          </div>
        )}

        {/* Hover action icons */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="flex items-center gap-[2px] ml-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {/* Settings */}
              <button
                onClick={() => setSettingsOpen(true)}
                className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#f8f8ff] rounded"
                title="Settings"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="2" stroke="#8E8E93" strokeWidth="1.2" />
                  <path d="M7 1V3M7 11V13M1 7H3M11 7H13M2.76 2.76L4.17 4.17M9.83 9.83L11.24 11.24M2.76 11.24L4.17 9.83M9.83 4.17L11.24 2.76" stroke="#8E8E93" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>

              {/* Visibility toggle */}
              <button
                onClick={() => onSettingsChange({ ...settings, visible: !settings.visible })}
                className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#f8f8ff] rounded"
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

              {/* Close */}
              <button
                onClick={onClose}
                className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#f8f8ff] rounded"
                title="Remove"
              >
                <svg width="9" height="9" viewBox="0 0 11 11" fill="none">
                  <path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Settings modal */}
      <ABandsSettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onApply={onSettingsChange}
      />
    </>
  );
}
