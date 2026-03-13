import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { CandleData } from "./chart-data";
import { ChartNavigation } from "./chart-navigation";
import { type ABandsData, drawABandsOnCanvas, type ABandsSettings } from "./abands-indicator";
import { type BBData, drawBBOnCanvas, type BBSettings } from "./bb-indicator";
import { useTheme } from "./theme-context";
import logoLight from "figma:asset/d0addcaee28de26fb80efe013f584570b90b0185.png";
import logoDark from "figma:asset/9e28964ad513be026690bf1410a7716466027194.png";
import {
  type Drawing,
  type FibRetracementDrawing,
  type FibExtensionDrawing,
  type ProjectionDrawing,
  type TextDrawing,
  type DatePriceRangeDrawing,
  type ShortPositionDrawing,
  type LongPositionDrawing,
  type ChannelDrawing,
  type RulerDrawing,
  FIB_LEVELS,
  FIB_LEVEL_COLORS,
  FIB_EXT_LEVELS,
  FIB_EXT_LEVEL_COLORS,
} from "./drawing-types";

interface CandlestickChartProps {
  data: CandleData[];
  drawings?: Drawing[];
  selectedDrawingId?: string | null;
  activeToolId?: number;
  onDrawingCreate?: (price: number, candleIndex: number) => void;
  onTextCreate?: (price: number, candleIndex: number) => void;
  onTextUpdate?: (id: string, text: string) => void;
  onFibComplete?: (
    startPrice: number,
    startIndex: number,
    endPrice: number,
    endIndex: number
  ) => void;
  onFibExtComplete?: (
    pA: number,
    iA: number,
    pB: number,
    iB: number,
    pC: number,
    iC: number
  ) => void;
  onProjectionComplete?: (
    pA: number,
    iA: number,
    pB: number,
    iB: number,
    pC: number,
    iC: number
  ) => void;
  onDPRComplete?: (
    startPrice: number,
    startIndex: number,
    endPrice: number,
    endIndex: number
  ) => void;
  onDrawingSelect?: (id: string | null) => void;
  onDrawingMove?: (id: string, newPrice: number, anchor?: "start" | "end" | "body") => void;
  pendingFibStart?: { price: number; index: number } | null;
  pendingFibExtA?: { price: number; index: number } | null;
  pendingFibExtB?: { price: number; index: number } | null;
  pendingProjA?: { price: number; index: number } | null;
  pendingProjB?: { price: number; index: number } | null;
  pendingDPRStart?: { price: number; index: number } | null;
  onChannelComplete?: (pA: number, iA: number, pB: number, iB: number, pC: number, iC: number) => void;
  pendingChannelA?: { price: number; index: number } | null;
  pendingChannelB?: { price: number; index: number } | null;
  onRulerComplete?: (startPrice: number, startIndex: number, endPrice: number, endIndex: number) => void;
  pendingRulerStart?: { price: number; index: number } | null;
  onZoomChange?: (isZoomed: boolean) => void;
  resetZoomTrigger?: number;
  onViewChange?: (info: { scrollOffset: number; visibleCandles: number; candleStep: number; chartWidth: number }) => void;
  abandsData?: ABandsData | null;
  abandsSettings?: ABandsSettings | null;
  bbData?: BBData | null;
  bbSettings?: BBSettings | null;
}

interface HoveredCandle {
  index: number;
  candle: CandleData;
}

// ── Constants ──
const PRICE_BAR_WIDTH = 65;
const TIMELINE_HEIGHT = 33;
const CANDLE_WIDTH = 17;
const CANDLE_GAP = 5;
const BASE_CANDLE_WIDTH = 17;
const BASE_CANDLE_GAP = 5;
/** Ratio of candle body center within a candleStep */
const CW_RATIO = BASE_CANDLE_WIDTH / (BASE_CANDLE_WIDTH + BASE_CANDLE_GAP);
/** Helper: half candle-body width from candleStep */
function halfCW(step: number) { return step * CW_RATIO / 2; }
const PADDING_TOP = 20;
const PADDING_BOTTOM = 10;
// Theme-aware colors are read at draw time via getComputedStyle
const HIT_DIST = 6;

function getThemeColors() {
  const s = getComputedStyle(document.documentElement);
  return {
    GREEN: s.getPropertyValue('--hc-green').trim() || '#09977e',
    RED: s.getPropertyValue('--hc-red').trim() || '#f26d60',
    GRID_COLOR: s.getPropertyValue('--hc-chart-grid').trim() || '#efeff4',
    CHART_BG: s.getPropertyValue('--hc-chart-bg').trim() || '#ffffff',
    TEXT_SECONDARY: s.getPropertyValue('--hc-chart-grid-text').trim() || '#8e8e93',
    TEXT: s.getPropertyValue('--hc-text').trim() || '#1f1f1f',
    CROSSHAIR: s.getPropertyValue('--hc-chart-crosshair').trim() || '#babac1',
    SURFACE: s.getPropertyValue('--hc-surface').trim() || '#ffffff',
    BORDER: s.getPropertyValue('--hc-border').trim() || '#efeff4',
  };
}

export function CandlestickChart({
  data,
  drawings,
  selectedDrawingId,
  activeToolId,
  onDrawingCreate,
  onTextCreate,
  onTextUpdate,
  onFibComplete,
  onFibExtComplete,
  onProjectionComplete,
  onDPRComplete,
  onDrawingSelect,
  onDrawingMove,
  pendingFibStart,
  pendingFibExtA,
  pendingFibExtB,
  pendingProjA,
  pendingProjB,
  pendingDPRStart,
  onChannelComplete,
  pendingChannelA,
  pendingChannelB,
  onRulerComplete,
  pendingRulerStart,
  onZoomChange,
  resetZoomTrigger,
  onViewChange,
  abandsData,
  abandsSettings,
  bbData,
  bbSettings,
}: CandlestickChartProps) {
  const { isDark } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredCandle, setHoveredCandle] = useState<HoveredCandle | null>(
    null
  );
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [scrollOffset, setScrollOffset] = useState(0);
  const [zoomMultiplier, setZoomMultiplier] = useState(1);
  const [zoomSelecting, setZoomSelecting] = useState(false);
  const [zoomStart, setZoomStart] = useState<{ x: number; y: number } | null>(null);
  const [zoomEnd, setZoomEnd] = useState<{ x: number; y: number } | null>(null);
  // Notify parent of zoom state changes
  useEffect(() => { onZoomChange?.(zoomMultiplier !== 1); }, [zoomMultiplier, onZoomChange]);
  // Reset zoom when trigger changes
  const prevResetTrigger = useRef(resetZoomTrigger);
  useEffect(() => {
    if (resetZoomTrigger !== undefined && resetZoomTrigger !== prevResetTrigger.current) {
      prevResetTrigger.current = resetZoomTrigger;
      setZoomMultiplier(1);
    }
  }, [resetZoomTrigger]);
  const [hoveredDrawingId, setHoveredDrawingId] = useState<string | null>(null);
  const [chartHovered, setChartHovered] = useState(false);
  const draggingRef = useRef(false);
  const draggingIdRef = useRef<string | null>(null);
  const draggingAnchorRef = useRef<"start" | "end" | "body" | null>(null);
  const dragStartYRef = useRef(0);
  const dragOrigPricesRef = useRef<{ start: number; end: number }>({
    start: 0,
    end: 0,
  });

  // ── Resize observer ──
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) setDimensions({ width, height });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const chartWidth = Math.max(0, dimensions.width - PRICE_BAR_WIDTH);
  const chartHeight = Math.max(0, dimensions.height - TIMELINE_HEIGHT);
  const scaledCW = BASE_CANDLE_WIDTH * zoomMultiplier;
  const scaledCG = BASE_CANDLE_GAP * zoomMultiplier;
  const candleStep = scaledCW + scaledCG;
  // Shadow module-level CANDLE_WIDTH so all internal refs scale with zoom
  const CANDLE_WIDTH = scaledCW; // eslint-disable-line
  const visibleCandles = Math.max(1, Math.floor(chartWidth / candleStep));
  const maxScroll = Math.max(0, data.length - visibleCandles);
  const startIdx = Math.max(0, Math.min(maxScroll, Math.round(scrollOffset)));

  // Notify parent of view changes for synced indicator panes
  useEffect(() => {
    onViewChange?.({ scrollOffset, visibleCandles, candleStep, chartWidth });
  }, [scrollOffset, visibleCandles, candleStep, chartWidth, onViewChange]);

  const visibleData = useMemo(
    () => data.slice(startIdx, startIdx + visibleCandles + 1),
    [data, startIdx, visibleCandles]
  );

  const { paddedMin, paddedMax, paddedRange } = useMemo(() => {
    if (visibleData.length === 0)
      return { paddedMin: 0, paddedMax: 1, paddedRange: 1 };
    const lo = Math.min(...visibleData.map((d) => d.low));
    const hi = Math.max(...visibleData.map((d) => d.high));
    const range = hi - lo || 1;
    const pMin = lo - range * 0.06;
    const pMax = hi + range * 0.06;
    return { paddedMin: pMin, paddedMax: pMax, paddedRange: pMax - pMin };
  }, [visibleData]);

  const priceToY = useCallback(
    (price: number) =>
      PADDING_TOP +
      ((paddedMax - price) / paddedRange) *
        (chartHeight - PADDING_TOP - PADDING_BOTTOM),
    [paddedMax, paddedRange, chartHeight]
  );

  const yToPrice = useCallback(
    (y: number) =>
      paddedMax -
      ((y - PADDING_TOP) / (chartHeight - PADDING_TOP - PADDING_BOTTOM)) *
        paddedRange,
    [paddedMax, paddedRange, chartHeight]
  );

  // ══════════════════════════════════════════════
  // ──  DRAW EFFECT
  // ══════════════════════════════════════════════
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const TC = getThemeColors();
    const GREEN = TC.GREEN;
    const RED = TC.RED;
    const GRID_COLOR = TC.GRID_COLOR;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);
    const W = dimensions.width;
    const H = dimensions.height;

    // Background
    ctx.fillStyle = TC.CHART_BG;
    ctx.fillRect(0, 0, W, H);

    // ── Horizontal grid lines ──
    const priceStep = niceStep(paddedRange);
    const firstGrid = Math.ceil(paddedMin / priceStep) * priceStep;
    ctx.save();
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    for (let p = firstGrid; p <= paddedMax; p += priceStep) {
      const y = Math.round(priceToY(p)) + 0.5;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(chartWidth, y);
      ctx.stroke();
    }
    ctx.restore();

    // ── Vertical grid lines ──
    const labelEvery = Math.max(1, Math.floor(visibleCandles / 18));
    ctx.save();
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    for (let i = 0; i < visibleData.length; i += labelEvery) {
      const x = Math.round(i * candleStep + halfCW(candleStep)) + 0.5;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, chartHeight);
      ctx.stroke();
    }
    ctx.restore();

    // ══ FIB RETRACEMENT BACKGROUNDS (draw before candles so candles sit on top) ══
    if (drawings) {
      for (const d of drawings) {
        if (d.type !== "fib-retracement") continue;
        const fib = d;
        if (!fib.showBackground) continue;
        const isSel = fib.id === selectedDrawingId;
        const isHov = fib.id === hoveredDrawingId;
        const alpha = isSel || isHov ? 1 : 1;

        for (let li = 0; li < FIB_LEVELS.length - 1; li++) {
          const levelA = FIB_LEVELS[li];
          const levelB = FIB_LEVELS[li + 1];
          const priceA =
            fib.startPrice + levelA * (fib.endPrice - fib.startPrice);
          const priceB =
            fib.startPrice + levelB * (fib.endPrice - fib.startPrice);
          const yA = priceToY(priceA);
          const yB = priceToY(priceB);
          const topY = Math.min(yA, yB);
          const h = Math.abs(yB - yA);

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = FIB_LEVEL_COLORS[levelA]?.fill ?? "rgba(0,0,0,0.03)";
          ctx.fillRect(0, topY, chartWidth, h);
          ctx.restore();
        }
      }
    }

    // ── Pending fib preview background ──
    if (pendingFibStart && mousePos && mousePos.x < chartWidth) {
      const previewEndPrice = yToPrice(mousePos.y);
      for (let li = 0; li < FIB_LEVELS.length - 1; li++) {
        const levelA = FIB_LEVELS[li];
        const levelB = FIB_LEVELS[li + 1];
        const priceA =
          pendingFibStart.price +
          levelA * (previewEndPrice - pendingFibStart.price);
        const priceB =
          pendingFibStart.price +
          levelB * (previewEndPrice - pendingFibStart.price);
        const yA = priceToY(priceA);
        const yB = priceToY(priceB);
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = FIB_LEVEL_COLORS[levelA]?.fill ?? "rgba(0,0,0,0.03)";
        ctx.fillRect(0, Math.min(yA, yB), chartWidth, Math.abs(yB - yA));
        ctx.restore();
      }
    }

    // ── Acceleration Bands overlay ──
    if (abandsData && abandsSettings && abandsSettings.visible) {
      drawABandsOnCanvas(ctx, abandsData, startIdx, visibleCandles, candleStep, scaledCW, priceToY, chartWidth, abandsSettings);
    }

    // ── Bollinger Bands overlay ──
    if (bbData && bbSettings && bbSettings.visible) {
      drawBBOnCanvas(ctx, bbData, startIdx, visibleCandles, candleStep, scaledCW, priceToY, chartWidth, bbSettings);
    }

    // ── Candles ──
    for (let i = 0; i < visibleData.length; i++) {
      const c = visibleData[i];
      const bull = c.close >= c.open;
      const color = bull ? GREEN : RED;
      const x = i * candleStep;
      const bodyTop = priceToY(Math.max(c.open, c.close));
      const bodyBot = priceToY(Math.min(c.open, c.close));
      const bodyH = Math.max(1, bodyBot - bodyTop);
      const wickX = Math.round(x + scaledCW / 2) + 0.5;

      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(wickX, priceToY(c.high));
      ctx.lineTo(wickX, priceToY(c.low));
      ctx.stroke();

      ctx.fillStyle = color;
      ctx.fillRect(
        Math.round(x),
        Math.round(bodyTop),
        scaledCW,
        Math.round(bodyH)
      );
    }

    // ── Current price dashed line ──
    const lastCandle = visibleData[visibleData.length - 1];
    if (lastCandle) {
      const ly = Math.round(priceToY(lastCandle.close)) + 0.5;
      ctx.save();
      ctx.strokeStyle = GREEN;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(0, ly);
      ctx.lineTo(chartWidth, ly);
      ctx.stroke();
      ctx.restore();
    }

    // ══ ALL DRAWINGS — lines ══
    if (drawings) {
      for (const d of drawings) {
        const isSel = d.id === selectedDrawingId;
        const isHov = d.id === hoveredDrawingId;

        if (d.type === "horizontal-line") {
          const dy = Math.round(priceToY(d.price));
          if (dy < 0 || dy > chartHeight) continue;

          // Line
          ctx.save();
          ctx.strokeStyle = d.color;
          ctx.lineWidth = d.thickness;
          if (d.style === "dashed") ctx.setLineDash([8, 4]);
          else if (d.style === "dotted") ctx.setLineDash([2, 4]);
          else ctx.setLineDash([]);
          ctx.beginPath();
          ctx.moveTo(0, dy + 0.5);
          ctx.lineTo(chartWidth, dy + 0.5);
          ctx.stroke();
          ctx.restore();

          // Hover glow
          if (isHov && !isSel) {
            ctx.save();
            ctx.strokeStyle = d.color;
            ctx.globalAlpha = 0.15;
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.moveTo(0, dy + 0.5);
            ctx.lineTo(chartWidth, dy + 0.5);
            ctx.stroke();
            ctx.restore();
          }

          // Selected marker
          if (isSel) {
            drawCircleMarker(ctx, chartWidth / 2, dy + 0.5, d.color);
          }
        }

        if (d.type === "fib-retracement") {
          drawFibLines(
            ctx,
            d,
            priceToY,
            chartWidth,
            chartHeight,
            isSel,
            isHov,
            startIdx,
            candleStep
          );
        }

        if (d.type === "fib-extension") {
          drawFibExtLines(
            ctx,
            d,
            priceToY,
            chartWidth,
            chartHeight,
            isSel,
            isHov,
            startIdx,
            candleStep
          );
        }

        if (d.type === "projection") {
          drawProjectionLines(
            ctx,
            d,
            priceToY,
            chartWidth,
            chartHeight,
            isSel,
            isHov,
            startIdx,
            candleStep
          );
        }

        if (d.type === "text") {
          const dy = Math.round(priceToY(d.price));
          if (dy < 0 || dy > chartHeight) continue;

          // Calculate text box position
          const tx = (d.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
          if (tx < -200 || tx > chartWidth + 200) continue;

          const fontStyle = `${d.italic ? "italic " : ""}${d.bold ? "bold " : ""}${d.fontSize}px 'Source Sans 3', sans-serif`;
          ctx.save();
          ctx.font = fontStyle;

          // Measure text
          const displayText = d.text || "Type here...";
          const lines = d.textWrap ? wrapText(ctx, displayText, 200) : displayText.split("\n");
          const lineHeight = d.fontSize * 1.4;
          const maxLineWidth = Math.max(...lines.map(l => ctx.measureText(l).width));
          const boxW = maxLineWidth + 16;
          const boxH = lines.length * lineHeight + 16;
          const boxX = tx;
          const boxY = dy - 8;

          // Background
          if (d.showBackground) {
            ctx.fillStyle = d.backgroundColor;
            ctx.globalAlpha = 0.8;
            roundRect(ctx, boxX, boxY, boxW, boxH, 4);
            ctx.fill();
            ctx.globalAlpha = 1;
          }

          // Border
          if (d.showBorder) {
            ctx.strokeStyle = d.borderColor;
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            roundRect(ctx, boxX, boxY, boxW, boxH, 4);
            ctx.stroke();
          }

          // Text
          ctx.fillStyle = d.color;
          ctx.textAlign = "left";
          ctx.textBaseline = "top";
          ctx.globalAlpha = d.text ? 1 : 0.4;
          lines.forEach((line: string, li: number) => {
            ctx.fillText(line, boxX + 8, boxY + 8 + li * lineHeight);
          });
          ctx.restore();

          // Hover glow
          if (isHov && !isSel) {
            ctx.save();
            ctx.strokeStyle = d.color;
            ctx.globalAlpha = 0.2;
            ctx.lineWidth = 3;
            ctx.setLineDash([]);
            roundRect(ctx, boxX - 2, boxY - 2, boxW + 4, boxH + 4, 6);
            ctx.stroke();
            ctx.restore();
          }

          // Selected markers
          if (isSel) {
            drawSquareMarker(ctx, boxX, boxY, d.color);
            drawSquareMarker(ctx, boxX + boxW, boxY, d.color);
            drawSquareMarker(ctx, boxX, boxY + boxH, d.color);
            drawSquareMarker(ctx, boxX + boxW, boxY + boxH, d.color);
          }
        }

        if (d.type === "date-price-range") {
          drawDatePriceRange(ctx, d, priceToY, chartWidth, chartHeight, isSel, isHov, startIdx, candleStep, data);
        }

        if (d.type === "short-position") {
          drawShortPosition(ctx, d, priceToY, chartWidth, chartHeight, isSel, isHov, startIdx, candleStep);
        }

        if (d.type === "long-position") {
          drawLongPosition(ctx, d, priceToY, chartWidth, chartHeight, isSel, isHov, startIdx, candleStep);
        }

        if (d.type === "channel") {
          drawChannel(ctx, d, priceToY, chartWidth, chartHeight, isSel, isHov, startIdx, candleStep);
        }

        if (d.type === "ruler") {
          drawRuler(ctx, d, priceToY, chartWidth, chartHeight, isSel, isHov, startIdx, candleStep);
        }
      }
    }

    // ── Pending fib preview lines ──
    if (pendingFibStart && mousePos && mousePos.x < chartWidth) {
      const previewEndPrice = yToPrice(mousePos.y);
      for (const level of FIB_LEVELS) {
        const price =
          pendingFibStart.price +
          level * (previewEndPrice - pendingFibStart.price);
        const y = Math.round(priceToY(price)) + 0.5;
        const lc = FIB_LEVEL_COLORS[level]?.line ?? "#61CAD2";
        ctx.save();
        ctx.strokeStyle = lc;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(chartWidth, y);
        ctx.stroke();
        ctx.restore();

        // Level label
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.font = "11px 'Source Sans 3', sans-serif";
        ctx.fillStyle = lc;
        ctx.textAlign = "left";
        ctx.fillText(
          `${level.toFixed(3)}  (${price.toFixed(2)})`,
          8,
          y - 4
        );
        ctx.restore();
      }
    }

    // ── Pending fib extension preview lines ──
    if (pendingFibExtA && pendingFibExtB && mousePos && mousePos.x < chartWidth) {
      const previewEndPrice = yToPrice(mousePos.y);
      const pA = pendingFibExtA.price;
      const pB = pendingFibExtB.price;
      const iA = pendingFibExtA.index;
      const iB = pendingFibExtB.index;
      const rangeAB = pB - pA;
      const rangeBC = previewEndPrice - pB;
      const rangeAC = previewEndPrice - pA;
      const ratioBC_AB = rangeBC / rangeAB;
      const ratioAC_AB = rangeAC / rangeAB;

      for (const level of FIB_EXT_LEVELS) {
        const price =
          pB + level * rangeAB * (level < 0 ? -1 : 1);
        const y = Math.round(priceToY(price)) + 0.5;
        const lc = FIB_EXT_LEVEL_COLORS[level]?.line ?? "#61CAD2";
        ctx.save();
        ctx.strokeStyle = lc;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(chartWidth, y);
        ctx.stroke();
        ctx.restore();

        // Level label
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.font = "11px 'Source Sans 3', sans-serif";
        ctx.fillStyle = lc;
        ctx.textAlign = "left";
        ctx.fillText(
          `${level.toFixed(3)}  (${price.toFixed(2)})`,
          8,
          y - 4
        );
        ctx.restore();
      }
    }

    // ── Pending projection preview lines ──
    if (pendingProjA && pendingProjB && mousePos && mousePos.x < chartWidth) {
      const previewPriceC = yToPrice(mousePos.y);
      const xA = (pendingProjA.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
      const xB = (pendingProjB.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
      const xC = mousePos.x;
      const yA = priceToY(pendingProjA.price);
      const yB = priceToY(pendingProjB.price);
      const yC = mousePos.y;

      // Preview: filled arc triangle
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.fillStyle = "#61CAD2";
      ctx.beginPath();
      ctx.moveTo(xA, yA);
      // Curved edge from A to B
      const cpx1 = xA + (xB - xA) * 0.5;
      const cpy1 = yA;
      const cpx2 = xB;
      const cpy2 = yA + (yB - yA) * 0.5;
      ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, xB, yB);
      ctx.lineTo(xC, yC);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Preview border
      ctx.save();
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = "#61CAD2";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(xA, yA);
      ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, xB, yB);
      ctx.lineTo(xC, yC);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    } else if (pendingProjA && !pendingProjB && mousePos && mousePos.x < chartWidth) {
      // Preview line from A to mouse
      const xA = (pendingProjA.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
      const yA = priceToY(pendingProjA.price);
      ctx.save();
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = "#61CAD2";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(xA, yA);
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.stroke();
      ctx.restore();
    }

    // ── Pending date-price-range preview ──
    if (pendingDPRStart && mousePos && mousePos.x < chartWidth) {
      const x1 = (pendingDPRStart.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
      const y1 = priceToY(pendingDPRStart.price);
      const x2 = mousePos.x;
      const y2 = mousePos.y;
      const rx = Math.min(x1, x2);
      const ry = Math.min(y1, y2);
      const rw = Math.abs(x2 - x1);
      const rh = Math.abs(y2 - y1);

      // Fill
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.fillStyle = "#00B1C7";
      ctx.fillRect(rx, ry, rw, rh);
      ctx.restore();

      // Border
      ctx.save();
      ctx.globalAlpha = 0.6;
      ctx.strokeStyle = "#00B1C7";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(rx, ry, rw, rh);
      ctx.restore();
    }

    // ── Pending channel preview ──
    if (pendingChannelA && mousePos && mousePos.x < chartWidth) {
      const xA = (pendingChannelA.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
      const yA = priceToY(pendingChannelA.price);
      ctx.save();
      ctx.globalAlpha = 0.6;
      ctx.strokeStyle = "#00B1C7";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      if (pendingChannelB) {
        // Show first line A→B and preview parallel line offset by mouse
        const xB = (pendingChannelB.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
        const yB = priceToY(pendingChannelB.price);
        ctx.beginPath(); ctx.moveTo(xA, yA); ctx.lineTo(xB, yB); ctx.stroke();
        // Parallel line preview at mouse Y offset
        const off = mousePos.y - yA;
        ctx.beginPath(); ctx.moveTo(xA, yA + off); ctx.lineTo(xB, yB + off); ctx.stroke();
        // Fill preview
        ctx.globalAlpha = 0.05; ctx.fillStyle = "#00B1C7";
        ctx.beginPath();
        ctx.moveTo(xA, yA); ctx.lineTo(xB, yB);
        ctx.lineTo(xB, yB + off); ctx.lineTo(xA, yA + off);
        ctx.closePath(); ctx.fill();
      } else {
        // Preview A→mouse line
        ctx.beginPath(); ctx.moveTo(xA, yA); ctx.lineTo(mousePos.x, mousePos.y); ctx.stroke();
      }
      ctx.restore();
    }

    // ── Zoom selection rectangle ──
    if (zoomSelecting && zoomStart && zoomEnd) {
      const zx = Math.min(zoomStart.x, zoomEnd.x);
      const zy = Math.min(zoomStart.y, zoomEnd.y);
      const zw = Math.abs(zoomEnd.x - zoomStart.x);
      const zh = Math.abs(zoomEnd.y - zoomStart.y);
      ctx.save();
      ctx.fillStyle = "#00B1C7";
      ctx.globalAlpha = 0.06;
      ctx.fillRect(zx, zy, zw, zh);
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = "#00B1C7";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(zx, zy, zw, zh);
      ctx.restore();
    }

    // ── Pending ruler preview ──
    if (pendingRulerStart && mousePos && mousePos.x < chartWidth) {
      const x1 = (pendingRulerStart.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
      const y1 = priceToY(pendingRulerStart.price);
      const isUp = mousePos.y < y1;
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = isUp ? "#09977e" : "#f26d60";
      ctx.fillRect(Math.min(x1, mousePos.x), Math.min(y1, mousePos.y), Math.abs(mousePos.x - x1), Math.abs(mousePos.y - y1));
      ctx.restore();
      ctx.save();
      ctx.globalAlpha = 0.6;
      ctx.strokeStyle = isUp ? "#09977e" : "#f26d60";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(Math.min(x1, mousePos.x), Math.min(y1, mousePos.y), Math.abs(mousePos.x - x1), Math.abs(mousePos.y - y1));
      ctx.restore();
    }

    // ── Crosshair ──
    if (mousePos && mousePos.x < chartWidth && mousePos.y < chartHeight) {
      ctx.save();
      ctx.strokeStyle = TC.CROSSHAIR;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(Math.round(mousePos.x) + 0.5, 0);
      ctx.lineTo(Math.round(mousePos.x) + 0.5, chartHeight);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, Math.round(mousePos.y) + 0.5);
      ctx.lineTo(chartWidth, Math.round(mousePos.y) + 0.5);
      ctx.stroke();
      ctx.restore();

      const crossPrice = yToPrice(mousePos.y);
      ctx.fillStyle = TC.TEXT_SECONDARY;
      ctx.fillRect(
        chartWidth + 1,
        Math.round(mousePos.y) - 9,
        PRICE_BAR_WIDTH - 1,
        18
      );
      ctx.fillStyle = "#ffffff";
      ctx.font = "12px 'Source Sans 3', sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(
        crossPrice.toFixed(2),
        chartWidth + 9,
        Math.round(mousePos.y) + 4
      );
    }

    // ══ Right price bar ══
    ctx.fillStyle = TC.CHART_BG;
    ctx.fillRect(chartWidth, 0, PRICE_BAR_WIDTH, H);
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(chartWidth + 0.5, 0);
    ctx.lineTo(chartWidth + 0.5, H);
    ctx.stroke();

    ctx.font = "12px 'Source Sans 3', sans-serif";
    ctx.fillStyle = TC.TEXT_SECONDARY;
    ctx.textAlign = "left";
    for (let p = firstGrid; p <= paddedMax; p += priceStep) {
      ctx.fillText(p.toFixed(2), chartWidth + 9, priceToY(p) + 4);
    }

    // Current price tag
    if (lastCandle) {
      const ly = Math.round(priceToY(lastCandle.close));
      ctx.fillStyle = "#00b1c7";
      ctx.fillRect(chartWidth + 1, ly - 9, PRICE_BAR_WIDTH - 1, 19);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(chartWidth + 1, ly + 0.5, 4, 1);
      ctx.font = "12px 'Source Sans 3', sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(lastCandle.close.toFixed(2), chartWidth + 9, ly + 4);
    }

    // Drawing price tags on right axis
    if (drawings) {
      for (const d of drawings) {
        if (d.type === "horizontal-line") {
          const dy = Math.round(priceToY(d.price));
          if (dy < 0 || dy > chartHeight) continue;
          drawPriceTag(ctx, chartWidth, dy, d.color, d.price.toFixed(2));
        }
        if (d.type === "fib-retracement") {
          for (const level of FIB_LEVELS) {
            const price =
              d.startPrice + level * (d.endPrice - d.startPrice);
            const y = Math.round(priceToY(price));
            if (y < 0 || y > chartHeight) continue;
            const lc =
              d.useCustomColors
                ? d.color
                : FIB_LEVEL_COLORS[level]?.line ?? d.color;
            drawPriceTag(ctx, chartWidth, y, lc, price.toFixed(2));
          }
        }

        if (d.type === "fib-extension") {
          const extRange = d.priceB - d.priceA;
          for (const level of FIB_EXT_LEVELS) {
            const price = d.priceC + level * extRange;
            const y = Math.round(priceToY(price));
            if (y < 0 || y > chartHeight) continue;
            const lc =
              d.useCustomColors
                ? d.color
                : FIB_EXT_LEVEL_COLORS[level]?.line ?? d.color;
            drawPriceTag(ctx, chartWidth, y, lc, price.toFixed(2));
          }
        }

        if (d.type === "projection") {
          // Price tags at the 3 anchor points
          for (const price of [d.priceA, d.priceB, d.priceC]) {
            const y = Math.round(priceToY(price));
            if (y < 0 || y > chartHeight) continue;
            drawPriceTag(ctx, chartWidth, y, d.color, price.toFixed(2));
          }
        }

        if (d.type === "text") {
          const dy = Math.round(priceToY(d.price));
          if (dy < 0 || dy > chartHeight) continue;
          drawPriceTag(ctx, chartWidth, dy, d.color, d.price.toFixed(2));
        }

        if (d.type === "date-price-range") {
          for (const price of [d.startPrice, d.endPrice]) {
            const dy = Math.round(priceToY(price));
            if (dy < 0 || dy > chartHeight) continue;
            drawPriceTag(ctx, chartWidth, dy, d.color, price.toFixed(2));
          }
        }
      }
    }

    // Currency label
    const clx = chartWidth + 14;
    ctx.fillStyle = TC.CHART_BG;
    roundRect(ctx, clx, 6, 38, 20, 4);
    ctx.fill();
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 1;
    roundRect(ctx, clx, 6, 38, 20, 4);
    ctx.stroke();
    ctx.fillStyle = TC.TEXT;
    ctx.font = "12px 'Source Sans 3', sans-serif";
    ctx.fillText("USD", clx + 6, 20);

    // ══ Bottom timeline ══
    ctx.fillStyle = TC.CHART_BG;
    ctx.fillRect(0, chartHeight, chartWidth, TIMELINE_HEIGHT);
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, chartHeight + 0.5);
    ctx.lineTo(W, chartHeight + 0.5);
    ctx.stroke();

    ctx.font = "12px 'Source Sans 3', sans-serif";
    ctx.fillStyle = TC.TEXT_SECONDARY;
    ctx.textAlign = "center";
    for (let i = 0; i < visibleData.length; i += labelEvery) {
      const x = i * candleStep + CANDLE_WIDTH / 2;
      ctx.fillText(visibleData[i].date, x, chartHeight + 20);
    }
  }, [
    dimensions,
    visibleData,
    mousePos,
    priceToY,
    yToPrice,
    paddedMax,
    paddedMin,
    paddedRange,
    chartWidth,
    chartHeight,
    candleStep,
    visibleCandles,
    drawings,
    selectedDrawingId,
    hoveredDrawingId,
    pendingFibStart,
    pendingFibExtA,
    pendingFibExtB,
    pendingProjA,
    pendingProjB,
    pendingDPRStart,
    pendingChannelA,
    pendingChannelB,
    pendingRulerStart,
    zoomSelecting,
    zoomStart,
    zoomEnd,
    scaledCW,
    startIdx,
    abandsData,
    abandsSettings,
    bbData,
    bbSettings,
    isDark,
  ]);

  // ═════════════════════��════════════════════════
  // ── HIT TESTING HELPER
  // ══════════════════════════════════════════════
  const hitTestDrawings = useCallback(
    (y: number): string | null => {
      if (!drawings) return null;
      for (const d of drawings) {
        if (d.type === "horizontal-line") {
          if (Math.abs(y - priceToY(d.price)) < HIT_DIST) return d.id;
        }
        if (d.type === "fib-retracement") {
          for (const level of FIB_LEVELS) {
            const price =
              d.startPrice + level * (d.endPrice - d.startPrice);
            if (Math.abs(y - priceToY(price)) < HIT_DIST) return d.id;
          }
        }

        if (d.type === "fib-extension") {
          for (const level of FIB_EXT_LEVELS) {
            const extRange = d.priceB - d.priceA;
            const price = d.priceC + level * extRange;
            if (Math.abs(y - priceToY(price)) < HIT_DIST) return d.id;
          }
        }

        if (d.type === "projection") {
          // Hit-test: check proximity to each anchor point price
          if (
            Math.abs(y - priceToY(d.priceA)) < HIT_DIST ||
            Math.abs(y - priceToY(d.priceB)) < HIT_DIST ||
            Math.abs(y - priceToY(d.priceC)) < HIT_DIST
          )
            return d.id;
          // Also check midpoint price to catch the filled area
          const midPrice = (d.priceA + d.priceB + d.priceC) / 3;
          const minP = Math.min(d.priceA, d.priceB, d.priceC);
          const maxP = Math.max(d.priceA, d.priceB, d.priceC);
          if (y >= priceToY(maxP) - HIT_DIST && y <= priceToY(minP) + HIT_DIST) {
            // Within the vertical bounds of the projection
            if (Math.abs(y - priceToY(midPrice)) < HIT_DIST * 3) return d.id;
          }
        }

        if (d.type === "text") {
          const dy = Math.round(priceToY(d.price));
          if (dy < 0 || dy > chartHeight) continue;

          // Calculate text box position
          const tx = (d.index - startIdx) * candleStep + CANDLE_WIDTH / 2;
          if (tx < -200 || tx > chartWidth + 200) continue;

          const fontStyle = `${d.italic ? "italic " : ""}${d.bold ? "bold " : ""}${d.fontSize}px 'Source Sans 3', sans-serif`;
          ctx.save();
          ctx.font = fontStyle;

          // Measure text
          const displayText = d.text || "Type here...";
          const lines = d.textWrap ? wrapText(ctx, displayText, 200) : displayText.split("\n");
          const lineHeight = d.fontSize * 1.4;
          const maxLineWidth = Math.max(...lines.map(l => ctx.measureText(l).width));
          const boxW = maxLineWidth + 16;
          const boxH = lines.length * lineHeight + 16;
          const boxX = tx;
          const boxY = dy - 8;

          // Check if mouse is inside the text box
          if (
            mousePos &&
            mousePos.x >= boxX - 2 &&
            mousePos.x <= boxX + boxW + 2 &&
            mousePos.y >= boxY - 2 &&
            mousePos.y <= boxY + boxH + 2
          ) {
            return d.id;
          }
          ctx.restore();
        }

        if (d.type === "date-price-range") {
          // Rectangle defined by two corners
          const x1 = (d.startIndex - startIdx) * candleStep + CANDLE_WIDTH / 2;
          const x2 = (d.endIndex - startIdx) * candleStep + CANDLE_WIDTH / 2;
          const y1 = priceToY(d.startPrice);
          const y2 = priceToY(d.endPrice);
          const rx = Math.min(x1, x2);
          const ry = Math.min(y1, y2);
          const rw = Math.abs(x2 - x1);
          const rh = Math.abs(y2 - y1);

          if (!mousePos) continue;
          // Check edges
          const nearLeft = Math.abs(mousePos.x - rx) < HIT_DIST && mousePos.y >= ry - HIT_DIST && mousePos.y <= ry + rh + HIT_DIST;
          const nearRight = Math.abs(mousePos.x - (rx + rw)) < HIT_DIST && mousePos.y >= ry - HIT_DIST && mousePos.y <= ry + rh + HIT_DIST;
          const nearTop = Math.abs(mousePos.y - ry) < HIT_DIST && mousePos.x >= rx - HIT_DIST && mousePos.x <= rx + rw + HIT_DIST;
          const nearBottom = Math.abs(mousePos.y - (ry + rh)) < HIT_DIST && mousePos.x >= rx - HIT_DIST && mousePos.x <= rx + rw + HIT_DIST;
          // Check inside
          const inside = mousePos.x >= rx && mousePos.x <= rx + rw && mousePos.y >= ry && mousePos.y <= ry + rh;
          if (nearLeft || nearRight || nearTop || nearBottom || inside) {
            return d.id;
          }
        }

        if (d.type === "ruler") {
          const x1 = (d.startIndex - startIdx) * candleStep + CANDLE_WIDTH / 2;
          const x2 = (d.endIndex - startIdx) * candleStep + CANDLE_WIDTH / 2;
          const y1 = priceToY(d.startPrice);
          const y2 = priceToY(d.endPrice);
          if (!mousePos) continue;
          const rx = Math.min(x1, x2), ry = Math.min(y1, y2);
          const rw = Math.abs(x2 - x1), rh = Math.abs(y2 - y1);
          if (mousePos.x >= rx - HIT_DIST && mousePos.x <= rx + rw + HIT_DIST &&
              mousePos.y >= ry - HIT_DIST && mousePos.y <= ry + rh + HIT_DIST) {
            return d.id;
          }
        }

        if (d.type === "channel") {
          const xA = (d.indexA - startIdx) * candleStep + CANDLE_WIDTH / 2;
          const xB = (d.indexB - startIdx) * candleStep + CANDLE_WIDTH / 2;
          const yA = priceToY(d.priceA);
          const yB = priceToY(d.priceB);
          const offset = d.priceC - d.priceA;
          const yC = priceToY(d.priceA + offset);
          const yD = priceToY(d.priceB + offset);
          if (!mousePos) continue;
          // Check proximity to either line
          const t = Math.max(0, Math.min(1, ((mousePos.x - xA) * (xB - xA) + (mousePos.y - yA) * (yB - yA)) / ((xB - xA) ** 2 + (yB - yA) ** 2)));
          const closestX1 = xA + t * (xB - xA), closestY1 = yA + t * (yB - yA);
          const dist1 = Math.sqrt((mousePos.x - closestX1) ** 2 + (mousePos.y - closestY1) ** 2);
          const t2 = Math.max(0, Math.min(1, ((mousePos.x - xA) * (xB - xA) + (mousePos.y - yC) * (yD - yC)) / ((xB - xA) ** 2 + (yD - yC) ** 2)));
          const closestX2 = xA + t2 * (xB - xA), closestY2 = yC + t2 * (yD - yC);
          const dist2 = Math.sqrt((mousePos.x - closestX2) ** 2 + (mousePos.y - closestY2) ** 2);
          if (dist1 < HIT_DIST * 2 || dist2 < HIT_DIST * 2) return d.id;
          // Check inside channel
          const minX = Math.min(xA, xB), maxX = Math.max(xA, xB);
          if (mousePos.x >= minX && mousePos.x <= maxX) {
            const frac = (mousePos.x - xA) / (xB - xA || 1);
            const lineY1 = yA + frac * (yB - yA);
            const lineY2 = yC + frac * (yD - yC);
            const top = Math.min(lineY1, lineY2), bot = Math.max(lineY1, lineY2);
            if (mousePos.y >= top - HIT_DIST && mousePos.y <= bot + HIT_DIST) return d.id;
          }
        }

        if (d.type === "short-position" || d.type === "long-position") {
          const yEntry = priceToY(d.entryPrice);
          const yStop = priceToY(d.stopPrice);
          const yTarget = priceToY(d.targetPrice);
          const xLeft = (d.entryIndex - startIdx) * candleStep + CANDLE_WIDTH / 2;
          const xRight = xLeft + d.widthBars * candleStep;
          const topY = Math.min(yStop, yTarget, yEntry);
          const botY = Math.max(yStop, yTarget, yEntry);

          if (!mousePos) continue;
          const nearEntry = Math.abs(mousePos.y - yEntry) < HIT_DIST && mousePos.x >= xLeft - HIT_DIST && mousePos.x <= xRight + HIT_DIST;
          const nearStop = Math.abs(mousePos.y - yStop) < HIT_DIST && mousePos.x >= xLeft - HIT_DIST && mousePos.x <= xRight + HIT_DIST;
          const nearTarget = Math.abs(mousePos.y - yTarget) < HIT_DIST && mousePos.x >= xLeft - HIT_DIST && mousePos.x <= xRight + HIT_DIST;
          const insideBox = mousePos.x >= xLeft && mousePos.x <= xRight && mousePos.y >= topY && mousePos.y <= botY;
          if (nearEntry || nearStop || nearTarget || insideBox) {
            return d.id;
          }
        }
      }
      return null;
    },
    [drawings, priceToY, mousePos, startIdx, candleStep]
  );

  // ══════════════════════════════════════════════
  // ── MOUSE HANDLERS
  // ══════════════════════════════════════════════
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      // Zoom selection drag
      if (zoomSelecting && zoomStart) {
        setZoomEnd({ x: Math.min(x, chartWidth), y: Math.min(y, chartHeight) });
        return;
      }

      // Dragging
      if (draggingRef.current && draggingIdRef.current && onDrawingMove) {
        const newPrice = yToPrice(y);
        const anchor = draggingAnchorRef.current;
        const d = drawings?.find((dd) => dd.id === draggingIdRef.current);

        if (d?.type === "fib-retracement" && anchor) {
          if (anchor === "body") {
            const deltaPrice = newPrice - yToPrice(dragStartYRef.current);
            onDrawingMove(
              d.id,
              dragOrigPricesRef.current.start + deltaPrice,
              "body"
            );
          } else {
            onDrawingMove(d.id, newPrice, anchor);
          }
        } else {
          onDrawingMove(draggingIdRef.current, newPrice);
        }
        return;
      }

      // Hover detection
      if (x < chartWidth) {
        setHoveredDrawingId(hitTestDrawings(y));
        const ci = Math.floor(x / candleStep);
        const di = startIdx + ci;
        if (di >= 0 && di < data.length) {
          setHoveredCandle({ index: di, candle: data[di] });
        }
      } else {
        setHoveredDrawingId(null);
        setHoveredCandle(null);
      }
    },
    [
      chartWidth,
      chartHeight,
      candleStep,
      startIdx,
      data,
      hitTestDrawings,
      onDrawingMove,
      yToPrice,
      drawings,
      zoomSelecting,
      zoomStart,
    ]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (draggingRef.current) return; // don't create while dragging
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= chartWidth || y >= chartHeight) return;

      const clickPrice = yToPrice(y);
      const candleIdx = Math.min(
        data.length - 1,
        Math.max(0, Math.floor(x / candleStep) + startIdx)
      );

      // Click near an existing drawing?
      const hitId = hitTestDrawings(y);
      if (hitId) {
        onDrawingSelect?.(hitId);
        return;
      }

      // Horizontal line tool (id=2)
      if (activeToolId === 2) {
        onDrawingCreate?.(clickPrice, candleIdx);
        return;
      }

      // Fib retracement tool (id=3)
      if (activeToolId === 3) {
        if (pendingFibStart) {
          onFibComplete?.(
            pendingFibStart.price,
            pendingFibStart.index,
            clickPrice,
            candleIdx
          );
        } else {
          onDrawingCreate?.(clickPrice, candleIdx);
        }
        return;
      }

      // Fib extension tool (id=4)
      if (activeToolId === 4) {
        if (pendingFibExtA && pendingFibExtB) {
          onFibExtComplete?.(
            pendingFibExtA.price,
            pendingFibExtA.index,
            pendingFibExtB.price,
            pendingFibExtB.index,
            clickPrice,
            candleIdx
          );
        } else if (pendingFibExtA) {
          onDrawingCreate?.(clickPrice, candleIdx);
        } else {
          onDrawingCreate?.(clickPrice, candleIdx);
        }
        return;
      }

      // Short Position tool (id=5) — single click
      if (activeToolId === 5) {
        onDrawingCreate?.(clickPrice, candleIdx);
        return;
      }

      // Long Position tool (id=6) — single click
      if (activeToolId === 6) {
        onDrawingCreate?.(clickPrice, candleIdx);
        return;
      }

      // Projection tool (id=7)
      if (activeToolId === 7) {
        if (pendingProjA && pendingProjB) {
          onProjectionComplete?.(
            pendingProjA.price,
            pendingProjA.index,
            pendingProjB.price,
            pendingProjB.index,
            clickPrice,
            candleIdx
          );
        } else if (pendingProjA) {
          onDrawingCreate?.(clickPrice, candleIdx);
        } else {
          onDrawingCreate?.(clickPrice, candleIdx);
        }
        return;
      }

      // Date-price-range tool (id=12)
      if (activeToolId === 12) {
        if (pendingDPRStart) {
          onDPRComplete?.(
            pendingDPRStart.price,
            pendingDPRStart.index,
            clickPrice,
            candleIdx
          );
        } else {
          onDrawingCreate?.(clickPrice, candleIdx);
        }
        return;
      }

      // Channel tool (id=14) — 3-click tool
      if (activeToolId === 14) {
        if (pendingChannelA && pendingChannelB) {
          onChannelComplete?.(
            pendingChannelA.price,
            pendingChannelA.index,
            pendingChannelB.price,
            pendingChannelB.index,
            clickPrice,
            candleIdx
          );
        } else if (pendingChannelA) {
          onDrawingCreate?.(clickPrice, candleIdx);
        } else {
          onDrawingCreate?.(clickPrice, candleIdx);
        }
        return;
      }

      // Ruler tool (id=16) — 2-click tool
      if (activeToolId === 16) {
        if (pendingRulerStart) {
          onRulerComplete?.(pendingRulerStart.price, pendingRulerStart.index, clickPrice, candleIdx);
        } else {
          onDrawingCreate?.(clickPrice, candleIdx);
        }
        return;
      }

      // Zoom tool (id=17) — handled via mousedown/mouseup, not click
      if (activeToolId === 17) return;

      // Text tool (id=15)
      if (activeToolId === 15) {
        onTextCreate?.(clickPrice, candleIdx);
        return;
      }

      // Deselect
      if (selectedDrawingId) {
        onDrawingSelect?.(null);
      }
    },
    [
      chartWidth,
      chartHeight,
      yToPrice,
      hitTestDrawings,
      activeToolId,
      onDrawingCreate,
      onFibComplete,
      onFibExtComplete,
      onProjectionComplete,
      onDPRComplete,
      onDrawingSelect,
      selectedDrawingId,
      pendingFibStart,
      pendingFibExtA,
      pendingFibExtB,
      pendingProjA,
      pendingProjB,
      pendingDPRStart,
      pendingChannelA,
      pendingChannelB,
      onChannelComplete,
      onRulerComplete,
      pendingRulerStart,
      candleStep,
      startIdx,
      data.length,
      onTextCreate,
    ]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Zoom tool: start selection rectangle
      if (activeToolId === 17) {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < chartWidth && y < chartHeight) {
          const startX = x;
          setZoomSelecting(true);
          setZoomStart({ x, y });
          setZoomEnd({ x, y });

          const onZoomUp = (ev: MouseEvent) => {
            const r = canvasRef.current?.getBoundingClientRect();
            if (r) {
              const endX = Math.min(ev.clientX - r.left, chartWidth);
              const selWidth = Math.abs(endX - startX);
              if (selWidth > 20) {
                // Calculate which candles are in the selection
                const leftX = Math.min(startX, endX);
                const rightX = Math.max(startX, endX);
                const firstCandle = Math.floor(leftX / candleStep);
                const lastCandle = Math.ceil(rightX / candleStep);
                const selectedCount = Math.max(2, lastCandle - firstCandle);
                const newZoom = chartWidth / (selectedCount * (BASE_CANDLE_WIDTH + BASE_CANDLE_GAP));
                const clampedZoom = Math.max(0.3, Math.min(8, newZoom));
                setZoomMultiplier(clampedZoom);
                setScrollOffset(startIdx + firstCandle);
              }
            }
            setZoomSelecting(false);
            setZoomStart(null);
            setZoomEnd(null);
            document.removeEventListener("mouseup", onZoomUp);
          };
          document.addEventListener("mouseup", onZoomUp);
        }
        return;
      }

      if (!selectedDrawingId || !drawings) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const y = e.clientY - rect.top;
      const drawing = drawings.find((dd) => dd.id === selectedDrawingId);
      if (!drawing || drawing.locked) return;

      if (drawing.type === "horizontal-line") {
        if (Math.abs(y - priceToY(drawing.price)) < HIT_DIST) {
          startDrag(selectedDrawingId, "body", y, drawing.price, drawing.price);
        }
      }

      if (drawing.type === "fib-retracement") {
        // Check anchor proximity
        const startY = priceToY(drawing.startPrice);
        const endY = priceToY(drawing.endPrice);
        if (Math.abs(y - startY) < HIT_DIST) {
          startDrag(
            selectedDrawingId,
            "start",
            y,
            drawing.startPrice,
            drawing.endPrice
          );
        } else if (Math.abs(y - endY) < HIT_DIST) {
          startDrag(
            selectedDrawingId,
            "end",
            y,
            drawing.startPrice,
            drawing.endPrice
          );
        } else {
          // Check if near any level → body drag
          for (const level of FIB_LEVELS) {
            const lp =
              drawing.startPrice +
              level * (drawing.endPrice - drawing.startPrice);
            if (Math.abs(y - priceToY(lp)) < HIT_DIST) {
              startDrag(
                selectedDrawingId,
                "body",
                y,
                drawing.startPrice,
                drawing.endPrice
              );
              break;
            }
          }
        }
      }

      if (drawing.type === "fib-extension") {
        const extRange = drawing.priceB - drawing.priceA;
        // Body drag for fib extensions
        for (const level of FIB_EXT_LEVELS) {
          const lp = drawing.priceC + level * extRange;
          if (Math.abs(y - priceToY(lp)) < HIT_DIST) {
            startDrag(
              selectedDrawingId,
              "body",
              y,
              drawing.priceC,
              drawing.priceC + extRange
            );
            break;
          }
        }
      }

      if (drawing.type === "projection") {
        // Body drag: check proximity to any of the 3 anchor points
        if (
          Math.abs(y - priceToY(drawing.priceA)) < HIT_DIST ||
          Math.abs(y - priceToY(drawing.priceB)) < HIT_DIST ||
          Math.abs(y - priceToY(drawing.priceC)) < HIT_DIST
        ) {
          startDrag(
            selectedDrawingId,
            "body",
            y,
            drawing.priceA,
            drawing.priceC
          );
        }
      }

      if (drawing.type === "text") {
        if (Math.abs(y - priceToY(drawing.price)) < HIT_DIST) {
          startDrag(selectedDrawingId, "body", y, drawing.price, drawing.price);
        }
      }

      if (drawing.type === "date-price-range") {
        const y1 = priceToY(drawing.startPrice);
        const y2 = priceToY(drawing.endPrice);
        if (Math.abs(y - y1) < HIT_DIST) {
          startDrag(selectedDrawingId, "start", y, drawing.startPrice, drawing.endPrice);
        } else if (Math.abs(y - y2) < HIT_DIST) {
          startDrag(selectedDrawingId, "end", y, drawing.startPrice, drawing.endPrice);
        } else if (y >= Math.min(y1, y2) && y <= Math.max(y1, y2)) {
          startDrag(selectedDrawingId, "body", y, drawing.startPrice, drawing.endPrice);
        }
      }
    },
    [selectedDrawingId, drawings, priceToY, activeToolId, chartWidth, chartHeight, candleStep, startIdx, zoomMultiplier]
  );

  function startDrag(
    id: string,
    anchor: "start" | "end" | "body",
    y: number,
    startPrice: number,
    endPrice: number
  ) {
    draggingRef.current = true;
    draggingIdRef.current = id;
    draggingAnchorRef.current = anchor;
    dragStartYRef.current = y;
    dragOrigPricesRef.current = { start: startPrice, end: endPrice };

    const onUp = () => {
      draggingRef.current = false;
      draggingIdRef.current = null;
      draggingAnchorRef.current = null;
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mouseup", onUp);
  }

  const handleMouseLeave = useCallback(() => {
    setHoveredCandle(null);
    setMousePos(null);
    setHoveredDrawingId(null);
  }, []);

  // Wheel scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      setScrollOffset((prev) => {
        const delta = e.deltaY > 0 ? 3 : -3;
        return Math.max(0, Math.min(maxScroll, prev + delta));
      });
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [maxScroll]);

  // ── Display candle ──
  const displayCandle =
    hoveredCandle?.candle ||
    (visibleData.length > 0 ? visibleData[visibleData.length - 1] : null);
  const changeValue = displayCandle
    ? displayCandle.close - displayCandle.open
    : 0;
  const changePercent =
    displayCandle && displayCandle.open !== 0
      ? (changeValue / displayCandle.open) * 100
      : 0;
  const isUp = changeValue >= 0;
  const valColor = isUp ? "text-[#09977e]" : "text-[#f26d60]";

  return (
    <div className="w-full h-full rounded-md overflow-hidden transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)' }}>
      {/* Canvas chart area — full height, OHLC header floats on top */}
      <div
        ref={containerRef}
        className={`w-full h-full relative ${activeToolId === 17 ? "cursor-zoom-in" : "cursor-crosshair"}`}
        onMouseEnter={() => setChartHovered(true)}
        onMouseLeave={() => setChartHovered(false)}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onDoubleClick={() => {
            if (zoomMultiplier !== 1) {
              setZoomMultiplier(1);
              setScrollOffset(0);
            }
          }}
        />

        {/* OHLC Header — floating overlay */}
        <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none px-[18px] pt-[10px] pb-[4px]">
          <div className="flex items-center gap-4 flex-wrap pointer-events-auto">
            <span className="text-[12px] font-['Source_Sans_3',sans-serif] whitespace-pre" style={{ color: 'var(--hc-text)' }}>
              {"Bitcoin  / U.S. Dollar  ·  1D  ·  COINBASE"}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <circle cx="8" cy="8" r="8" fill="#29C79E" fillOpacity="0.2" />
              <circle cx="8" cy="8" r="4" fill="#29C79E" />
            </svg>
            {displayCandle && (
              <div className="flex items-center gap-2 text-[12px] font-['Source_Sans_3',sans-serif] flex-wrap">
                <span>
                  <span className="font-semibold" style={{ color: 'var(--hc-text)' }}>O </span>
                  <span className={valColor}>
                    {displayCandle.open.toFixed(2)}
                  </span>
                </span>
                <span>
                  <span className="font-semibold" style={{ color: 'var(--hc-text)' }}>H </span>
                  <span className={valColor}>
                    {displayCandle.high.toFixed(2)}
                  </span>
                </span>
                <span>
                  <span className="font-semibold" style={{ color: 'var(--hc-text)' }}>L </span>
                  <span className={valColor}>
                    {displayCandle.low.toFixed(2)}
                  </span>
                </span>
                <span>
                  <span className="font-semibold" style={{ color: 'var(--hc-text)' }}>C </span>
                  <span className={valColor}>
                    {displayCandle.close.toFixed(2)}
                  </span>
                </span>
                <span className={`font-semibold ${valColor}`}>
                  {isUp ? "+" : ""}
                  {changeValue.toFixed(2)} ({isUp ? "+" : ""}
                  {changePercent.toFixed(2)}%)
                </span>
              </div>
            )}
          </div>
          {displayCandle && (
            <div className="flex items-center gap-3 mt-1 pointer-events-auto">
              <div className="px-[6px] py-[4px] rounded border border-[#f26d60]">
                <span className="text-[12px] text-[#f26d60] font-['Source_Sans_3',sans-serif]">
                  {displayCandle.open.toFixed(2)}
                </span>
              </div>
              <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-secondary)' }}>
                {(displayCandle.high - displayCandle.low).toFixed(2)}
              </span>
              <div className="px-[6px] py-[4px] rounded border border-[#00b1c7]">
                <span className="text-[12px] text-[#00b1c7] font-['Source_Sans_3',sans-serif]">
                  {displayCandle.close.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Watermark logo */}
        <div className="absolute bottom-[46px] left-[18px] rounded-full px-4 py-2 pointer-events-none z-10 flex items-center gap-1 transition-colors duration-200" style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
          <img
            src={isDark ? logoLight : logoDark}
            alt="Cryptohopper"
            className="object-contain"
            style={isDark ? { height: '12px' } : { height: '11.7px' }}
          />
        </div>

        {/* Bottom chart navigation — appears on hover */}
        <ChartNavigation
          visible={chartHovered}
          onZoomOut={() => setZoomMultiplier((z) => Math.max(0.3, z / 1.25))}
          onZoomIn={() => setZoomMultiplier((z) => Math.min(8, z * 1.25))}
          onScrollLeft={() => setScrollOffset((p) => Math.max(0, p - Math.max(3, visibleCandles * 0.15)))}
          onScrollRight={() => setScrollOffset((p) => Math.min(maxScroll, p + Math.max(3, visibleCandles * 0.15)))}
          onResetToRecent={() => { setScrollOffset(0); }}
        />
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// ── DRAWING HELPERS
// ══════════════════════════════════════════════

function drawCircleMarker(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 4.5, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

function drawPriceTag(
  ctx: CanvasRenderingContext2D,
  chartWidth: number,
  y: number,
  color: string,
  text: string
) {
  ctx.fillStyle = color;
  ctx.fillRect(chartWidth, y - 9, PRICE_BAR_WIDTH, 19);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(chartWidth, y - 0.5, 4, 1);
  ctx.font = "12px 'Source Sans 3', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(text, chartWidth + 8, y + 4);
}

function drawFibLines(
  ctx: CanvasRenderingContext2D,
  fib: FibRetracementDrawing,
  priceToY: (p: number) => number,
  chartWidth: number,
  chartHeight: number,
  isSelected: boolean,
  isHovered: boolean,
  startIdx: number,
  candleStep: number
) {
  const range = fib.endPrice - fib.startPrice;

  for (const level of FIB_LEVELS) {
    const price = fib.startPrice + level * range;
    const y = Math.round(priceToY(price));
    if (y < -50 || y > chartHeight + 50) continue;

    const lineColor = fib.useCustomColors
      ? fib.color
      : FIB_LEVEL_COLORS[level]?.line ?? fib.color;

    // Draw level line
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = fib.thickness;
    if (fib.style === "dashed") ctx.setLineDash([8, 4]);
    else if (fib.style === "dotted") ctx.setLineDash([2, 4]);
    else ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(chartWidth, y + 0.5);
    ctx.stroke();
    ctx.restore();

    // Level label (left side)
    ctx.save();
    ctx.font = "11px 'Source Sans 3', sans-serif";
    ctx.fillStyle = lineColor;
    ctx.textAlign = "left";
    ctx.fillText(`${level.toFixed(3)}  (${price.toFixed(2)})`, 8, y - 4);
    ctx.restore();

    // Hover glow
    if (isHovered && !isSelected) {
      ctx.save();
      ctx.strokeStyle = lineColor;
      ctx.globalAlpha = 0.12;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(chartWidth, y + 0.5);
      ctx.stroke();
      ctx.restore();
    }
  }

  // Selected: draw anchor markers at 0 and 1 level
  if (isSelected) {
    const y0 = priceToY(fib.startPrice);
    const y1 = priceToY(fib.endPrice);
    const markerX = chartWidth / 2;
    const c0 = FIB_LEVEL_COLORS[0]?.line ?? fib.color;
    const c1 = FIB_LEVEL_COLORS[1]?.line ?? fib.color;
    drawCircleMarker(ctx, markerX, y0, c0);
    drawCircleMarker(ctx, markerX, y1, c1);
    // Also draw on each level
    for (const level of FIB_LEVELS) {
      if (level === 0 || level === 1) continue;
      const lp = fib.startPrice + level * range;
      const ly = priceToY(lp);
      const lc = FIB_LEVEL_COLORS[level]?.line ?? fib.color;
      drawCircleMarker(ctx, markerX, ly, lc);
    }
  }
}

function drawFibExtLines(
  ctx: CanvasRenderingContext2D,
  fib: FibExtensionDrawing,
  priceToY: (p: number) => number,
  chartWidth: number,
  chartHeight: number,
  isSelected: boolean,
  isHovered: boolean,
  startIdx: number,
  candleStep: number
) {
  const extRange = fib.priceB - fib.priceA;

  // Draw background fills between levels
  if (fib.showBackground) {
    for (let li = 0; li < FIB_EXT_LEVELS.length - 1; li++) {
      const levelA = FIB_EXT_LEVELS[li];
      const levelB = FIB_EXT_LEVELS[li + 1];
      const pA = fib.priceC + levelA * extRange;
      const pB = fib.priceC + levelB * extRange;
      const yA = priceToY(pA);
      const yB = priceToY(pB);
      ctx.save();
      ctx.fillStyle = FIB_EXT_LEVEL_COLORS[levelA]?.fill ?? "rgba(0,0,0,0.03)";
      ctx.fillRect(0, Math.min(yA, yB), chartWidth, Math.abs(yB - yA));
      ctx.restore();
    }
  }

  for (const level of FIB_EXT_LEVELS) {
    const price = fib.priceC + level * extRange;
    const y = Math.round(priceToY(price));
    if (y < -50 || y > chartHeight + 50) continue;

    const lineColor = fib.useCustomColors
      ? fib.color
      : FIB_EXT_LEVEL_COLORS[level]?.line ?? fib.color;

    // Draw level line
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = fib.thickness;
    if (fib.style === "dashed") ctx.setLineDash([8, 4]);
    else if (fib.style === "dotted") ctx.setLineDash([2, 4]);
    else ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(chartWidth, y + 0.5);
    ctx.stroke();
    ctx.restore();

    // Level label (left side)
    ctx.save();
    ctx.font = "11px 'Source Sans 3', sans-serif";
    ctx.fillStyle = lineColor;
    ctx.textAlign = "left";
    ctx.fillText(`${level.toFixed(3)}  (${price.toFixed(2)})`, 8, y - 4);
    ctx.restore();

    // Hover glow
    if (isHovered && !isSelected) {
      ctx.save();
      ctx.strokeStyle = lineColor;
      ctx.globalAlpha = 0.12;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(chartWidth, y + 0.5);
      ctx.stroke();
      ctx.restore();
    }
  }

  // Draw trend line A→B (dashed)
  const yA = priceToY(fib.priceA);
  const yB = priceToY(fib.priceB);
  const yC = priceToY(fib.priceC);
  ctx.save();
  ctx.strokeStyle = "#8e8e93";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(chartWidth * 0.15, yA);
  ctx.lineTo(chartWidth * 0.35, yB);
  ctx.lineTo(chartWidth * 0.55, yC);
  ctx.stroke();
  ctx.restore();

  // Selected: draw anchor markers at A, B, C
  if (isSelected) {
    const markerX = chartWidth / 2;
    drawCircleMarker(ctx, chartWidth * 0.15, yA, "#1da1f2");
    drawCircleMarker(ctx, chartWidth * 0.35, yB, "#de5537");
    drawCircleMarker(ctx, chartWidth * 0.55, yC, "#29c79e");
    // Also markers on each level
    for (const level of FIB_EXT_LEVELS) {
      if (level === 0) continue;
      const lp = fib.priceC + level * extRange;
      const ly = priceToY(lp);
      const lc = FIB_EXT_LEVEL_COLORS[level]?.line ?? fib.color;
      drawCircleMarker(ctx, markerX, ly, lc);
    }
  }
}

function drawProjectionLines(
  ctx: CanvasRenderingContext2D,
  proj: ProjectionDrawing,
  priceToY: (p: number) => number,
  chartWidth: number,
  chartHeight: number,
  isSelected: boolean,
  isHovered: boolean,
  startIdx: number,
  candleStep: number
) {
  // Convert anchor points to pixel coordinates
  const xA = (proj.indexA - startIdx) * candleStep + halfCW(candleStep);
  const xB = (proj.indexB - startIdx) * candleStep + halfCW(candleStep);
  const xC = (proj.indexC - startIdx) * candleStep + halfCW(candleStep);
  const yA = priceToY(proj.priceA);
  const yB = priceToY(proj.priceB);
  const yC = priceToY(proj.priceC);

  // Bezier control points for the arc edge (A → B curve)
  const cpx1 = xA + (xB - xA) * 0.5;
  const cpy1 = yA;
  const cpx2 = xB;
  const cpy2 = yA + (yB - yA) * 0.5;

  // Draw filled background
  if (proj.showBackground) {
    ctx.save();
    ctx.globalAlpha = isHovered ? 0.22 : 0.15;
    ctx.fillStyle = proj.fillColor;
    ctx.beginPath();
    ctx.moveTo(xA, yA);
    ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, xB, yB);
    ctx.lineTo(xC, yC);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Draw border
  ctx.save();
  ctx.strokeStyle = proj.color;
  ctx.lineWidth = proj.thickness;
  if (proj.style === "dashed") ctx.setLineDash([8, 4]);
  else if (proj.style === "dotted") ctx.setLineDash([2, 4]);
  else ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(xA, yA);
  ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, xB, yB);
  ctx.lineTo(xC, yC);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // Hover glow
  if (isHovered && !isSelected) {
    ctx.save();
    ctx.strokeStyle = proj.color;
    ctx.globalAlpha = 0.15;
    ctx.lineWidth = proj.thickness + 6;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(xA, yA);
    ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, xB, yB);
    ctx.lineTo(xC, yC);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  // Selected: draw square anchor markers at A, B, C
  if (isSelected) {
    drawSquareMarker(ctx, xA, yA, proj.color);
    drawSquareMarker(ctx, xB, yB, proj.color);
    drawSquareMarker(ctx, xC, yC, proj.color);
  }
}

function drawSquareMarker(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
) {
  const s = 5;
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(x - s, y - s, s * 2, s * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.strokeRect(x - s, y - s, s * 2, s * 2);
  ctx.restore();
}

function niceStep(range: number): number {
  const rough = range / 10;
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  const norm = rough / mag;
  if (norm <= 1) return mag;
  if (norm <= 2) return 2 * mag;
  if (norm <= 5) return 5 * mag;
  return 10 * mag;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + " " + word;
    const testWidth = ctx.measureText(testLine).width;
    if (testWidth > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);
  return lines;
}

function drawDatePriceRange(
  ctx: CanvasRenderingContext2D,
  d: DatePriceRangeDrawing,
  priceToY: (p: number) => number,
  chartWidth: number,
  chartHeight: number,
  isSelected: boolean,
  isHovered: boolean,
  startIdx: number,
  candleStep: number,
  data: CandleData[]
) {
  // Convert anchor points to pixel coordinates
  const hcw = halfCW(candleStep);
  const x1 = (d.startIndex - startIdx) * candleStep + hcw;
  const x2 = (d.endIndex - startIdx) * candleStep + hcw;
  const y1 = priceToY(d.startPrice);
  const y2 = priceToY(d.endPrice);

  const rx = Math.min(x1, x2);
  const ry = Math.min(y1, y2);
  const rw = Math.abs(x2 - x1);
  const rh = Math.abs(y2 - y1);

  // Background fill
  if (d.showBackground) {
    ctx.save();
    ctx.globalAlpha = isHovered ? 0.08 : 0.05;
    ctx.fillStyle = d.color;
    ctx.fillRect(rx, ry, rw, rh);
    ctx.restore();
  }

  // Border
  if (d.showBorder) {
    ctx.save();
    ctx.strokeStyle = d.color;
    ctx.lineWidth = d.thickness;
    if (d.style === "dashed") ctx.setLineDash([8, 4]);
    else if (d.style === "dotted") ctx.setLineDash([2, 4]);
    else ctx.setLineDash([]);
    ctx.strokeRect(rx, ry, rw, rh);
    ctx.restore();
  }

  // Horizontal measurement arrows (centered vertically)
  const midY = (y1 + y2) / 2;
  drawMeasureArrow(ctx, rx, midY, rx + rw, midY, d.color);

  // Vertical measurement arrows (centered horizontally)
  const midX = (x1 + x2) / 2;
  drawMeasureArrow(ctx, midX, ry, midX, ry + rh, d.color);

  // Info label
  const priceDiff = d.endPrice - d.startPrice;
  const pctChange = d.startPrice !== 0 ? (priceDiff / d.startPrice) * 100 : 0;
  const bars = Math.abs(d.endIndex - d.startIndex);
  const days = bars; // 1D candles
  const sign = priceDiff >= 0 ? "+" : "";

  const labelLine1 = `${sign}${priceDiff.toFixed(2)} (${sign}${pctChange.toFixed(2)}%)`;
  const labelLine2 = `${bars} bars, ${days}d`;

  ctx.save();
  ctx.font = "12px 'Source Sans 3', sans-serif";
  const maxLabelW = Math.max(
    ctx.measureText(labelLine1).width,
    ctx.measureText(labelLine2).width
  );
  const labelW = maxLabelW + 20;
  const labelH = 38;
  const labelX = (x1 + x2) / 2 - labelW / 2;
  const labelY = Math.max(y1, y2) + 8;

  // Label background
  if (d.showLabelBackground) {
    ctx.fillStyle = d.color;
    ctx.globalAlpha = 0.1;
    roundRect(ctx, labelX, labelY, labelW, labelH, 4);
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.strokeStyle = d.color;
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    roundRect(ctx, labelX, labelY, labelW, labelH, 4);
    ctx.stroke();
  }

  // Label text
  ctx.fillStyle = d.color;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(labelLine1, labelX + labelW / 2, labelY + 6);
  ctx.fillText(labelLine2, labelX + labelW / 2, labelY + 22);
  ctx.restore();

  // Hover glow
  if (isHovered && !isSelected) {
    ctx.save();
    ctx.strokeStyle = d.color;
    ctx.globalAlpha = 0.15;
    ctx.lineWidth = d.thickness + 4;
    ctx.setLineDash([]);
    ctx.strokeRect(rx - 2, ry - 2, rw + 4, rh + 4);
    ctx.restore();
  }

  // Selected: draw circle markers at corners
  if (isSelected) {
    drawCircleMarker(ctx, rx, ry, d.color);
    drawCircleMarker(ctx, rx + rw, ry + rh, d.color);
    drawCircleMarker(ctx, rx + rw, ry, d.color);
    drawCircleMarker(ctx, rx, ry + rh, d.color);
  }
}

function drawMeasureArrow(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string
) {
  const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (len < 20) return;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.setLineDash([]);
  ctx.globalAlpha = 0.6;

  // Main line
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Arrowheads
  const arrowSize = 4;
  const angle = Math.atan2(y2 - y1, x2 - x1);

  // Arrow at start (pointing outward)
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(
    x1 + arrowSize * Math.cos(angle - Math.PI / 6),
    y1 + arrowSize * Math.sin(angle - Math.PI / 6)
  );
  ctx.moveTo(x1, y1);
  ctx.lineTo(
    x1 + arrowSize * Math.cos(angle + Math.PI / 6),
    y1 + arrowSize * Math.sin(angle + Math.PI / 6)
  );
  ctx.stroke();

  // Arrow at end (pointing outward)
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(
    x2 - arrowSize * Math.cos(angle - Math.PI / 6),
    y2 - arrowSize * Math.sin(angle - Math.PI / 6)
  );
  ctx.moveTo(x2, y2);
  ctx.lineTo(
    x2 - arrowSize * Math.cos(angle + Math.PI / 6),
    y2 - arrowSize * Math.sin(angle + Math.PI / 6)
  );
  ctx.stroke();

  ctx.restore();
}

function drawShortPosition(
  ctx: CanvasRenderingContext2D,
  d: ShortPositionDrawing,
  priceToY: (p: number) => number,
  chartWidth: number,
  chartHeight: number,
  isSelected: boolean,
  isHovered: boolean,
  startIdx: number,
  candleStep: number
) {
  const yEntry = Math.round(priceToY(d.entryPrice));
  const yStop = Math.round(priceToY(d.stopPrice));
  const yTarget = Math.round(priceToY(d.targetPrice));
  const xLeft = Math.round((d.entryIndex - startIdx) * candleStep + halfCW(candleStep));
  const xRight = Math.round(xLeft + d.widthBars * candleStep);
  const rectW = xRight - xLeft;

  // Clip to avoid drawing outside chart
  if (xRight < 0 || xLeft > chartWidth) return;

  ctx.save();

  // ── Background zones ──
  if (d.showBackground) {
    // Red zone: between entry and stop (stop is above entry for short)
    const redTop = Math.min(yEntry, yStop);
    const redH = Math.abs(yEntry - yStop);
    ctx.fillStyle = "rgba(255, 107, 92, 0.1)";
    ctx.fillRect(xLeft, redTop, rectW, redH);

    // Green zone: between entry and target (target is below entry for short)
    const greenTop = Math.min(yEntry, yTarget);
    const greenH = Math.abs(yTarget - yEntry);
    ctx.fillStyle = "rgba(9, 151, 126, 0.1)";
    ctx.fillRect(xLeft, greenTop, rectW, greenH);
  }

  // ── Entry line (center, with 50% opacity) ──
  ctx.strokeStyle = "rgba(62, 62, 62, 0.5)";
  ctx.lineWidth = d.thickness;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(xLeft, yEntry);
  ctx.lineTo(xRight, yEntry);
  ctx.stroke();

  // ── Stop line (red) ──
  ctx.strokeStyle = "#f26d60";
  ctx.lineWidth = d.thickness;
  ctx.beginPath();
  ctx.moveTo(xLeft, yStop);
  ctx.lineTo(xRight, yStop);
  ctx.stroke();

  // ── Target line (green) ──
  ctx.strokeStyle = "#09977e";
  ctx.lineWidth = d.thickness;
  ctx.beginPath();
  ctx.moveTo(xLeft, yTarget);
  ctx.lineTo(xRight, yTarget);
  ctx.stroke();

  // ── Dashed diagonal line from entry-left to target-right ──
  ctx.strokeStyle = "rgba(62, 62, 62, 0.5)";
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 4]);
  ctx.beginPath();
  ctx.moveTo(xLeft, yEntry);
  ctx.lineTo(xRight, yTarget);
  ctx.stroke();
  ctx.setLineDash([]);

  // ── Labels ──
  const fontSize = 12;
  ctx.font = `${fontSize}px 'Source Sans 3', sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Stop label (red badge, top-right area)
  const stopLabelText = `Stop ${d.stopPrice.toFixed(2)}`;
  const stopLabelW = ctx.measureText(stopLabelText).width + 20;
  const stopLabelH = 20;
  const stopLabelX = xRight - stopLabelW / 2 - 10;
  const stopLabelY = yStop - stopLabelH / 2 - 4;
  ctx.fillStyle = "#f26d60";
  ctx.globalAlpha = 0.85;
  roundRect(ctx, stopLabelX - stopLabelW / 2, stopLabelY - stopLabelH / 2, stopLabelW, stopLabelH, 4);
  ctx.fill();
  // Border
  ctx.strokeStyle = "#f6877c";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(stopLabelText, stopLabelX, stopLabelY);

  // Target label (green badge, bottom-right area)
  const targetLabelText = `Target ${d.targetPrice.toFixed(2)}`;
  const targetLabelW = ctx.measureText(targetLabelText).width + 20;
  const targetLabelH = 20;
  const targetLabelX = xRight - targetLabelW / 2 - 10;
  const targetLabelY = yTarget + targetLabelH / 2 + 4;
  ctx.fillStyle = "#09977e";
  ctx.globalAlpha = 0.85;
  roundRect(ctx, targetLabelX - targetLabelW / 2, targetLabelY - targetLabelH / 2, targetLabelW, targetLabelH, 4);
  ctx.fill();
  ctx.strokeStyle = "#15aa90";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(targetLabelText, targetLabelX, targetLabelY);

  // P&L info label (red badge at entry line, left side)
  const pnl = (d.entryPrice - d.targetPrice) * d.quantity;
  const pnlText = `Open P&L: ${pnl >= 0 ? "" : "-"}${Math.abs(pnl).toFixed(2)}, Qty: ${d.quantity.toFixed(3)}`;
  const pnlLabelW = ctx.measureText(pnlText).width + 20;
  const pnlLabelH = 18;
  const pnlLabelX = xLeft + pnlLabelW / 2 + 10;
  const pnlLabelY = yEntry - pnlLabelH / 2 - 6;
  ctx.fillStyle = "#f26d60";
  ctx.globalAlpha = 0.85;
  roundRect(ctx, pnlLabelX - pnlLabelW / 2, pnlLabelY - pnlLabelH / 2, pnlLabelW, pnlLabelH, 4);
  ctx.fill();
  ctx.strokeStyle = "#f6877c";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#ffffff";
  ctx.font = `${fontSize}px 'Source Sans 3', sans-serif`;
  ctx.fillText(pnlText, pnlLabelX, pnlLabelY);

  // ── Circle markers (when selected) ──
  if (isSelected) {
    drawCircleMarker(ctx, xLeft, yEntry, "#00B1C7");
    drawCircleMarker(ctx, xRight, yEntry, "#00B1C7");
    drawCircleMarker(ctx, xLeft, yStop, "#00B1C7");
    drawCircleMarker(ctx, xLeft, yTarget, "#00B1C7");
  }

  // ── Price tags on the Y-axis ──
  // Stop price tag (red)
  ctx.fillStyle = "#f26d60";
  ctx.fillRect(chartWidth, yStop - 9, 65, 19);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(chartWidth, yStop, 4, 1);
  ctx.font = `${fontSize}px 'Source Sans 3', sans-serif`;
  ctx.textAlign = "left";
  ctx.fillText(d.stopPrice.toFixed(2), chartWidth + 8, yStop + 1);

  // Target price tag (green)
  ctx.fillStyle = "#09977e";
  ctx.fillRect(chartWidth, yTarget - 9, 65, 19);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(chartWidth, yTarget, 4, 1);
  ctx.fillText(d.targetPrice.toFixed(2), chartWidth + 8, yTarget + 1);

  // ── Hover glow ──
  if (isHovered && !isSelected) {
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = "#00B1C7";
    ctx.lineWidth = d.thickness + 4;
    ctx.setLineDash([]);
    const topY = Math.min(yStop, yTarget);
    const botY = Math.max(yStop, yTarget);
    ctx.strokeRect(xLeft - 2, topY - 2, rectW + 4, botY - topY + 4);
    ctx.globalAlpha = 1;
  }

  ctx.restore();
}

function drawLongPosition(
  ctx: CanvasRenderingContext2D,
  d: LongPositionDrawing,
  priceToY: (p: number) => number,
  chartWidth: number,
  _chartHeight: number,
  isSelected: boolean,
  isHovered: boolean,
  startIdx: number,
  candleStep: number
) {
  const yEntry = Math.round(priceToY(d.entryPrice));
  const yStop = Math.round(priceToY(d.stopPrice));
  const yTarget = Math.round(priceToY(d.targetPrice));
  const xLeft = Math.round((d.entryIndex - startIdx) * candleStep + halfCW(candleStep));
  const xRight = Math.round(xLeft + d.widthBars * candleStep);
  const rectW = xRight - xLeft;
  if (xRight < 0 || xLeft > chartWidth) return;
  ctx.save();

  if (d.showBackground) {
    // Green zone above entry (profit)
    ctx.fillStyle = "rgba(9, 151, 126, 0.1)";
    ctx.fillRect(xLeft, Math.min(yEntry, yTarget), rectW, Math.abs(yEntry - yTarget));
    // Blue zone below entry (risk)
    ctx.fillStyle = "rgba(29, 161, 242, 0.1)";
    ctx.fillRect(xLeft, Math.min(yEntry, yStop), rectW, Math.abs(yStop - yEntry));
  }

  // Entry line
  ctx.strokeStyle = "rgba(62, 62, 62, 0.5)";
  ctx.lineWidth = d.thickness;
  ctx.setLineDash([]);
  ctx.beginPath(); ctx.moveTo(xLeft, yEntry); ctx.lineTo(xRight, yEntry); ctx.stroke();

  // Stop line (red)
  ctx.strokeStyle = "#f26d60";
  ctx.beginPath(); ctx.moveTo(xLeft, yStop); ctx.lineTo(xRight, yStop); ctx.stroke();

  // Target line (green)
  ctx.strokeStyle = "#09977e";
  ctx.beginPath(); ctx.moveTo(xLeft, yTarget); ctx.lineTo(xRight, yTarget); ctx.stroke();

  // Dashed diagonal entry→target
  ctx.strokeStyle = "rgba(62, 62, 62, 0.5)";
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 4]);
  ctx.beginPath(); ctx.moveTo(xLeft, yEntry); ctx.lineTo(xRight, yTarget); ctx.stroke();
  ctx.setLineDash([]);

  const fs = 12;
  ctx.font = `${fs}px 'Source Sans 3', sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Target label (blue)
  const tTxt = `Target ${d.targetPrice.toFixed(2)}`;
  const tW = ctx.measureText(tTxt).width + 20;
  const tX = xRight - tW / 2 - 10;
  const tY = yTarget - 14;
  ctx.fillStyle = "#1da1f2"; ctx.globalAlpha = 0.85;
  roundRect(ctx, tX - tW / 2, tY - 10, tW, 20, 4); ctx.fill();
  ctx.strokeStyle = "#44baf1"; ctx.lineWidth = 1; ctx.stroke();
  ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.fillText(tTxt, tX, tY);

  // Stop label (green)
  const sTxt = `Stop ${d.stopPrice.toFixed(2)}`;
  const sW = ctx.measureText(sTxt).width + 20;
  const sX = xRight - sW / 2 - 10;
  const sY = yStop + 14;
  ctx.fillStyle = "#09977e"; ctx.globalAlpha = 0.85;
  roundRect(ctx, sX - sW / 2, sY - 10, sW, 20, 4); ctx.fill();
  ctx.strokeStyle = "#15aa90"; ctx.lineWidth = 1; ctx.stroke();
  ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.fillText(sTxt, sX, sY);

  // P&L label (blue, at entry)
  const pnl = (d.targetPrice - d.entryPrice) * d.quantity;
  const pTxt = `Closed P&L: ${pnl >= 0 ? "" : "-"}${Math.abs(pnl).toFixed(2)}, Qty: ${d.quantity.toFixed(3)}`;
  const pW = ctx.measureText(pTxt).width + 20;
  const pX = xLeft + pW / 2 + 10;
  const pY = yEntry - 15;
  ctx.fillStyle = "#1da1f2"; ctx.globalAlpha = 0.85;
  roundRect(ctx, pX - pW / 2, pY - 9, pW, 18, 4); ctx.fill();
  ctx.strokeStyle = "#44baf1"; ctx.lineWidth = 1; ctx.stroke();
  ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.fillText(pTxt, pX, pY);

  if (isSelected) {
    drawCircleMarker(ctx, xLeft, yEntry, "#00B1C7");
    drawCircleMarker(ctx, xRight, yEntry, "#00B1C7");
    drawCircleMarker(ctx, xLeft, yStop, "#00B1C7");
    drawCircleMarker(ctx, xLeft, yTarget, "#00B1C7");
  }

  // Price tags on Y-axis
  ctx.fillStyle = "#09977e";
  ctx.fillRect(chartWidth, yStop - 9, 65, 19);
  ctx.fillStyle = "#fff"; ctx.fillRect(chartWidth, yStop, 4, 1);
  ctx.font = `${fs}px 'Source Sans 3', sans-serif`; ctx.textAlign = "left";
  ctx.fillText(d.stopPrice.toFixed(2), chartWidth + 8, yStop + 1);

  ctx.fillStyle = "#1da1f2";
  ctx.fillRect(chartWidth, yTarget - 9, 65, 19);
  ctx.fillStyle = "#fff"; ctx.fillRect(chartWidth, yTarget, 4, 1);
  ctx.fillText(d.targetPrice.toFixed(2), chartWidth + 8, yTarget + 1);

  if (isHovered && !isSelected) {
    ctx.globalAlpha = 0.15; ctx.strokeStyle = "#00B1C7";
    ctx.lineWidth = d.thickness + 4; ctx.setLineDash([]);
    const t = Math.min(yStop, yTarget), b = Math.max(yStop, yTarget);
    ctx.strokeRect(xLeft - 2, t - 2, rectW + 4, b - t + 4);
    ctx.globalAlpha = 1;
  }
  ctx.restore();
}

function drawChannel(
  ctx: CanvasRenderingContext2D,
  d: ChannelDrawing,
  priceToY: (p: number) => number,
  chartWidth: number,
  _chartHeight: number,
  isSelected: boolean,
  isHovered: boolean,
  startIdx: number,
  candleStep: number
) {
  const hcw = halfCW(candleStep);
  const xA = (d.indexA - startIdx) * candleStep + hcw;
  const xB = (d.indexB - startIdx) * candleStep + hcw;
  const yA = priceToY(d.priceA);
  const yB = priceToY(d.priceB);
  const priceOffset = d.priceC - d.priceA;
  const yC = priceToY(d.priceA + priceOffset);
  const yD = priceToY(d.priceB + priceOffset);

  ctx.save();

  const dx = xB - xA, dy = yB - yA;
  const lineLen = Math.sqrt(dx * dx + dy * dy);
  let exA1 = xA, eyA1 = yA, exB1 = xB, eyB1 = yB;
  let exA2 = xA, eyA2 = yC, exB2 = xB, eyB2 = yD;
  if (lineLen > 0) {
    const ext = 2000, nx = dx / lineLen, ny = dy / lineLen;
    if (d.extendLeft) { exA1 -= nx * ext; eyA1 -= ny * ext; exA2 -= nx * ext; eyA2 -= ny * ext; }
    if (d.extendRight) { exB1 += nx * ext; eyB1 += ny * ext; exB2 += nx * ext; eyB2 += ny * ext; }
  }

  if (d.showBackground) {
    ctx.fillStyle = d.color; ctx.globalAlpha = 0.08;
    ctx.beginPath();
    ctx.moveTo(exA1, eyA1); ctx.lineTo(exB1, eyB1);
    ctx.lineTo(exB2, eyB2); ctx.lineTo(exA2, eyA2);
    ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1;
  }

  ctx.strokeStyle = d.color; ctx.lineWidth = d.thickness;
  if (d.style === "dashed") ctx.setLineDash([8, 4]);
  else if (d.style === "dotted") ctx.setLineDash([2, 4]);
  else ctx.setLineDash([]);

  ctx.beginPath(); ctx.moveTo(exA1, eyA1); ctx.lineTo(exB1, eyB1); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(exA2, eyA2); ctx.lineTo(exB2, eyB2); ctx.stroke();

  if (d.showMiddleLine) {
    ctx.setLineDash([4, 4]); ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(exA1, (eyA1 + eyA2) / 2);
    ctx.lineTo(exB1, (eyB1 + eyB2) / 2);
    ctx.stroke();
    ctx.globalAlpha = 1; ctx.setLineDash([]);
  }

  if (isHovered && !isSelected) {
    ctx.globalAlpha = 0.15; ctx.strokeStyle = d.color;
    ctx.lineWidth = d.thickness + 6; ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(xA, yA); ctx.lineTo(xB, yB); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(xA, yC); ctx.lineTo(xB, yD); ctx.stroke();
    ctx.globalAlpha = 1;
  }

  if (isSelected) {
    drawCircleMarker(ctx, xA, yA, d.color);
    drawCircleMarker(ctx, xB, yB, d.color);
    drawCircleMarker(ctx, xA, yC, d.color);
  }
  ctx.restore();
}

function drawRuler(
  ctx: CanvasRenderingContext2D,
  d: RulerDrawing,
  priceToY: (p: number) => number,
  chartWidth: number,
  _chartHeight: number,
  isSelected: boolean,
  isHovered: boolean,
  startIdx: number,
  candleStep: number
) {
  const hcw = halfCW(candleStep);
  const x1 = (d.startIndex - startIdx) * candleStep + hcw;
  const x2 = (d.endIndex - startIdx) * candleStep + hcw;
  const y1 = priceToY(d.startPrice);
  const y2 = priceToY(d.endPrice);
  const rx = Math.min(x1, x2), ry = Math.min(y1, y2);
  const rw = Math.abs(x2 - x1), rh = Math.abs(y2 - y1);
  const isUp = d.endPrice > d.startPrice;
  const color = isUp ? "#09977e" : "#f26d60";

  ctx.save();

  // Background fill
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.08;
  ctx.fillRect(rx, ry, rw, rh);
  ctx.globalAlpha = 1;

  // Vertical arrow (price axis)
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.setLineDash([]);
  const midX = (x1 + x2) / 2;
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1, y2); ctx.stroke();
  // Arrowhead
  const arrowDir = isUp ? -1 : 1;
  ctx.beginPath();
  ctx.moveTo(x1 - 3, y2 - arrowDir * 6);
  ctx.lineTo(x1, y2);
  ctx.lineTo(x1 + 3, y2 - arrowDir * 6);
  ctx.stroke();

  // Horizontal arrow (time axis)
  ctx.beginPath(); ctx.moveTo(x1, y2); ctx.lineTo(x2, y2); ctx.stroke();
  const hArrowDir = x2 > x1 ? 1 : -1;
  ctx.beginPath();
  ctx.moveTo(x2 - hArrowDir * 6, y2 - 3);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x2 - hArrowDir * 6, y2 + 3);
  ctx.stroke();

  // Measurement label
  const priceDiff = d.endPrice - d.startPrice;
  const pctChange = ((priceDiff / d.startPrice) * 100);
  const bars = Math.abs(d.endIndex - d.startIndex);
  const labelText = `${Math.abs(priceDiff).toFixed(2)} (${pctChange >= 0 ? "+" : ""}${pctChange.toFixed(2)}%)  ${bars} bars`;

  ctx.font = "11px 'Source Sans 3', sans-serif";
  const labelW = ctx.measureText(labelText).width + 16;
  const labelH = 22;
  const labelX = isUp ? rx + rw / 2 - labelW / 2 : rx + rw / 2 - labelW / 2;
  const labelY = isUp ? ry - labelH - 4 : ry + rh + 4;

  ctx.fillStyle = color;
  ctx.globalAlpha = 0.9;
  roundRect(ctx, labelX, labelY, labelW, labelH, 4);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(labelText, labelX + labelW / 2, labelY + labelH / 2);

  // Price tags on Y-axis
  const fs = 12;
  ctx.font = `${fs}px 'Source Sans 3', sans-serif`;

  // Start price tag
  ctx.fillStyle = "#00b1c7";
  ctx.fillRect(chartWidth, y1 - 9, 65, 19);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(chartWidth, y1, 4, 1);
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(d.startPrice.toFixed(2), chartWidth + 8, y1 + 1);

  // End price tag
  ctx.fillStyle = "#00b1c7";
  ctx.fillRect(chartWidth, y2 - 9, 65, 19);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(chartWidth, y2, 4, 1);
  ctx.fillText(d.endPrice.toFixed(2), chartWidth + 8, y2 + 1);

  // Hover glow
  if (isHovered && !isSelected) {
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    ctx.strokeRect(rx - 2, ry - 2, rw + 4, rh + 4);
    ctx.globalAlpha = 1;
  }

  // Selection markers
  if (isSelected) {
    drawCircleMarker(ctx, x1, y1, "#00B1C7");
    drawCircleMarker(ctx, x2, y2, "#00B1C7");
    drawCircleMarker(ctx, x2, y1, "#00B1C7");
    drawCircleMarker(ctx, x1, y2, "#00B1C7");
  }

  ctx.restore();
}