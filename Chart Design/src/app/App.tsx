import { useState, useMemo, useCallback, useRef } from "react";
import { TopBar } from "./components/top-bar";
import { ToolsSidebar } from "./components/tools-sidebar";
import { CandlestickChart } from "./components/candlestick-chart";
import { FooterBar } from "./components/footer-bar";
import { ToolMenu, type ToolMenuSettings } from "./components/tool-menu";
import { TextSettingsPanel } from "./components/text-settings-panel";
import { DatePriceRangeSettingsPanel } from "./components/date-price-range-settings";
import { generateCandleData } from "./components/chart-data";
import { APOIndicatorPane } from "./components/apo-indicator-pane";
import { ADIndicatorPane } from "./components/ad-indicator-pane";
import { AroonIndicatorPane } from "./components/aroon-indicator-pane";
import { ATRIndicatorPane } from "./components/atr-indicator-pane";
import { AOIndicatorPane } from "./components/ao-indicator-pane";
import { computeBB, BBOverlayHeader, DEFAULT_BB_SETTINGS, type BBSettings } from "./components/bb-indicator";
import { computeABands, ABandsOverlayHeader, DEFAULT_ABANDS_SETTINGS, type ABandsSettings } from "./components/abands-indicator";
import { ThemeProvider, useTheme } from "./components/theme-context";
import {
  type Drawing,
  type HorizontalLineDrawing,
  type FibRetracementDrawing,
  type FibExtensionDrawing,
  type ProjectionDrawing,
  type TextDrawing,
  type DatePriceRangeDrawing,
  type ShortPositionDrawing,
  type LongPositionDrawing,
  type ChannelDrawing,
  type RulerDrawing,
  nextDrawingId,
} from "./components/drawing-types";
import { ChartExpandedBar } from "./components/chart-expanded-bar";

// Default settings
const DEFAULT_SETTINGS: ToolMenuSettings = {
  color: "#61CAD2",
  thickness: 1,
  style: "solid",
  opacity: 70,
  locked: false,
};

export default function App() {
  const data = useMemo(() => generateCandleData(), []);
  const [selectedTool, setSelectedTool] = useState(0);
  const [toolSettings, setToolSettings] =
    useState<ToolMenuSettings>(DEFAULT_SETTINGS);
  const chartAreaRef = useRef<HTMLDivElement>(null);

  // === Drawing state ===
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [selectedDrawingId, setSelectedDrawingId] = useState<string | null>(
    null
  );
  const [showTextSettings, setShowTextSettings] = useState(false);
  const [showDPRSettings, setShowDPRSettings] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [resetZoomTrigger, setResetZoomTrigger] = useState(0);

  // === Chart expanded state ===
  const [isChartExpanded, setIsChartExpanded] = useState(false);

  // === APO Indicator state ===
  const [apoFullScreen, setApoFullScreen] = useState(false);
  const [apoPaneHeight, setApoPaneHeight] = useState(200);
  const [chartViewInfo, setChartViewInfo] = useState({
    scrollOffset: 0, visibleCandles: 50, candleStep: 10, chartWidth: 800,
  });
  const dividerDragRef = useRef<{ startY: number; startHeight: number } | null>(null);

  // === Indicator state (lifted from TopBar) ===
  const [activeIndicators, setActiveIndicators] = useState<string[]>([]);
  const handleToggleIndicator = useCallback((id: string) => {
    setActiveIndicators((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }, []);

  const apoIsActive = activeIndicators.includes("apo");

  // === A/D Indicator state ===
  const adIsActive = activeIndicators.includes("ad");
  const [adFullScreen, setAdFullScreen] = useState(false);
  const [adPaneHeight, setAdPaneHeight] = useState(200);
  const adDividerDragRef = useRef<{ startY: number; startHeight: number } | null>(null);

  // === Aroon Indicator state ===
  const aroonIsActive = activeIndicators.includes("aroon");
  const [aroonFullScreen, setAroonFullScreen] = useState(false);
  const [aroonPaneHeight, setAroonPaneHeight] = useState(200);
  const aroonDividerDragRef = useRef<{ startY: number; startHeight: number } | null>(null);

  // === ATR Indicator state ===
  const atrIsActive = activeIndicators.includes("atr");
  const [atrFullScreen, setAtrFullScreen] = useState(false);
  const [atrPaneHeight, setAtrPaneHeight] = useState(200);
  const atrDividerDragRef = useRef<{ startY: number; startHeight: number } | null>(null);

  // === AO Indicator state ===
  const aoIsActive = activeIndicators.includes("ao");
  const [aoFullScreen, setAoFullScreen] = useState(false);
  const [aoPaneHeight, setAoPaneHeight] = useState(200);
  const aoDividerDragRef = useRef<{ startY: number; startHeight: number } | null>(null);

  // Determine if any pane indicator is active (for layout)
  const anyPaneActive = apoIsActive || adIsActive || aroonIsActive || atrIsActive || aoIsActive;
  const anyPaneFullScreen = apoFullScreen || adFullScreen || aroonFullScreen || atrFullScreen || aoFullScreen;

  // === ABands state ===
  const abandsIsActive = activeIndicators.includes("abands");
  const [abandsSettings, setAbandsSettings] = useState<ABandsSettings>(DEFAULT_ABANDS_SETTINGS);
  const abandsData = useMemo(
    () => abandsIsActive ? computeABands(data, abandsSettings.period, abandsSettings.width) : null,
    [data, abandsSettings.period, abandsSettings.width, abandsIsActive]
  );
  const abandsCurrentValues = useMemo(() => {
    if (!abandsData || !abandsIsActive) return null;
    const lastIdx = data.length - 1;
    if (lastIdx < 0) return null;
    const u = abandsData.upper[lastIdx];
    const m = abandsData.middle[lastIdx];
    const l = abandsData.lower[lastIdx];
    if (isNaN(u) || isNaN(m) || isNaN(l)) return null;
    return { upper: u, middle: m, lower: l };
  }, [abandsData, abandsIsActive, data.length]);

  // === Bollinger Bands state ===
  const bbIsActive = activeIndicators.includes("bb");
  const [bbSettings, setBbSettings] = useState<BBSettings>(DEFAULT_BB_SETTINGS);
  const bbData = useMemo(
    () => bbIsActive ? computeBB(data, bbSettings.length, bbSettings.stdDev, bbSettings.source, bbSettings.offset) : null,
    [data, bbSettings.length, bbSettings.stdDev, bbSettings.source, bbSettings.offset, bbIsActive]
  );
  const bbCurrentValues = useMemo(() => {
    if (!bbData || !bbIsActive) return null;
    const lastIdx = data.length - 1;
    if (lastIdx < 0) return null;
    const u = bbData.upper[lastIdx];
    const m = bbData.middle[lastIdx];
    const l = bbData.lower[lastIdx];
    if (isNaN(u) || isNaN(m) || isNaN(l)) return null;
    return { upper: u, middle: m, lower: l };
  }, [bbData, bbIsActive, data.length]);

  // Pending fib retracement: waiting for second click
  const [pendingFibStart, setPendingFibStart] = useState<{
    price: number;
    index: number;
  } | null>(null);

  // Pending fib extension: waiting for 2nd and 3rd click
  const [pendingFibExtA, setPendingFibExtA] = useState<{
    price: number;
    index: number;
  } | null>(null);
  const [pendingFibExtB, setPendingFibExtB] = useState<{
    price: number;
    index: number;
  } | null>(null);

  // Pending projection: waiting for 2nd and 3rd click
  const [pendingProjA, setPendingProjA] = useState<{
    price: number;
    index: number;
  } | null>(null);
  const [pendingProjB, setPendingProjB] = useState<{
    price: number;
    index: number;
  } | null>(null);

  // Pending date price range: waiting for second click
  const [pendingDPRStart, setPendingDPRStart] = useState<{
    price: number;
    index: number;
  } | null>(null);

  // Pending channel: waiting for 2nd and 3rd click
  const [pendingChannelA, setPendingChannelA] = useState<{
    price: number;
    index: number;
  } | null>(null);
  const [pendingChannelB, setPendingChannelB] = useState<{
    price: number;
    index: number;
  } | null>(null);

  // Pending ruler: waiting for second click
  const [pendingRulerStart, setPendingRulerStart] = useState<{
    price: number;
    index: number;
  } | null>(null);

  // Drawing tools: 1-16 (Short=5, Long=6, Projection=7, DPR=12, Channel=14, Text=15, Ruler=16)
  const isDrawingTool = selectedTool >= 1 && selectedTool <= 16;

  const selectedDrawing = drawings.find((d) => d.id === selectedDrawingId);

  const activeSettings: ToolMenuSettings = selectedDrawing
    ? {
        color: selectedDrawing.color,
        thickness: selectedDrawing.thickness,
        style: selectedDrawing.style,
        opacity: toolSettings.opacity,
        locked: selectedDrawing.locked,
      }
    : toolSettings;

  // === DRAWING CALLBACKS ===

  const clearPending = useCallback(() => {
    setPendingFibStart(null);
    setPendingFibExtA(null);
    setPendingFibExtB(null);
    setPendingProjA(null);
    setPendingProjB(null);
    setPendingDPRStart(null);
    setPendingChannelA(null);
    setPendingChannelB(null);
    setPendingRulerStart(null);
  }, []);

  // onDrawingCreate — handles clicks for h-line, fib retracement, fib extension, projection, date-price-range
  const handleDrawingCreate = useCallback(
    (price: number, candleIndex: number) => {
      if (selectedTool === 2) {
        const id = nextDrawingId();
        const newDrawing: HorizontalLineDrawing = {
          type: "horizontal-line",
          id,
          price,
          color: toolSettings.color,
          thickness: toolSettings.thickness,
          style: toolSettings.style,
          locked: false,
        };
        setDrawings((prev) => [...prev, newDrawing]);
        setSelectedDrawingId(id);
      } else if (selectedTool === 3) {
        setPendingFibStart({ price, index: candleIndex });
      } else if (selectedTool === 4) {
        if (!pendingFibExtA) {
          setPendingFibExtA({ price, index: candleIndex });
        } else {
          setPendingFibExtB({ price, index: candleIndex });
        }
      } else if (selectedTool === 5) {
        // Short Position — single click creates entry + stop + target
        const id = nextDrawingId();
        const priceRange = price * 0.05; // 5% default range
        const newShort: ShortPositionDrawing = {
          type: "short-position",
          id,
          entryPrice: price,
          entryIndex: candleIndex,
          stopPrice: price + priceRange,
          targetPrice: price - priceRange,
          widthBars: 20,
          color: "#3e3e3e",
          thickness: toolSettings.thickness,
          style: toolSettings.style,
          locked: false,
          showBackground: true,
          quantity: 1,
        };
        setDrawings((prev) => [...prev, newShort]);
        setSelectedDrawingId(id);
      } else if (selectedTool === 6) {
        // Long Position — single click creates entry + stop + target
        const id = nextDrawingId();
        const priceRange = price * 0.05;
        const newLong: LongPositionDrawing = {
          type: "long-position",
          id,
          entryPrice: price,
          entryIndex: candleIndex,
          stopPrice: price - priceRange,
          targetPrice: price + priceRange,
          widthBars: 20,
          color: "#3e3e3e",
          thickness: toolSettings.thickness,
          style: toolSettings.style,
          locked: false,
          showBackground: true,
          quantity: 1,
        };
        setDrawings((prev) => [...prev, newLong]);
        setSelectedDrawingId(id);
      } else if (selectedTool === 7) {
        if (!pendingProjA) {
          setPendingProjA({ price, index: candleIndex });
        } else {
          setPendingProjB({ price, index: candleIndex });
        }
      } else if (selectedTool === 12) {
        // Date Price Range — first click sets start
        setPendingDPRStart({ price, index: candleIndex });
      } else if (selectedTool === 14) {
        // Channel — 3-click tool (like projection)
        if (!pendingChannelA) {
          setPendingChannelA({ price, index: candleIndex });
        } else {
          setPendingChannelB({ price, index: candleIndex });
        }
      } else if (selectedTool === 16) {
        // Ruler — first click sets start
        setPendingRulerStart({ price, index: candleIndex });
      }
    },
    [selectedTool, toolSettings, pendingFibExtA, pendingProjA, pendingChannelA]
  );

  const handleFibComplete = useCallback(
    (startPrice: number, startIndex: number, endPrice: number, endIndex: number) => {
      const id = nextDrawingId();
      const newFib: FibRetracementDrawing = {
        type: "fib-retracement", id, startPrice, startIndex, endPrice, endIndex,
        color: toolSettings.color, thickness: toolSettings.thickness, style: toolSettings.style,
        locked: false, showBackground: true, useCustomColors: false,
      };
      setDrawings((prev) => [...prev, newFib]);
      setSelectedDrawingId(id);
      setPendingFibStart(null);
    },
    [toolSettings]
  );

  const handleFibExtComplete = useCallback(
    (pA: number, iA: number, pB: number, iB: number, pC: number, iC: number) => {
      const id = nextDrawingId();
      const newFibExt: FibExtensionDrawing = {
        type: "fib-extension", id, priceA: pA, indexA: iA, priceB: pB, indexB: iB,
        priceC: pC, indexC: iC, color: toolSettings.color, thickness: toolSettings.thickness,
        style: toolSettings.style, locked: false, showBackground: true, useCustomColors: false,
      };
      setDrawings((prev) => [...prev, newFibExt]);
      setSelectedDrawingId(id);
      setPendingFibExtA(null);
      setPendingFibExtB(null);
    },
    [toolSettings]
  );

  const handleProjComplete = useCallback(
    (pA: number, iA: number, pB: number, iB: number, pC: number, iC: number) => {
      const id = nextDrawingId();
      const newProj: ProjectionDrawing = {
        type: "projection", id, priceA: pA, indexA: iA, priceB: pB, indexB: iB,
        priceC: pC, indexC: iC, color: toolSettings.color, fillColor: toolSettings.color,
        thickness: toolSettings.thickness, style: toolSettings.style, locked: false, showBackground: true,
      };
      setDrawings((prev) => [...prev, newProj]);
      setSelectedDrawingId(id);
      setPendingProjA(null);
      setPendingProjB(null);
    },
    [toolSettings]
  );

  // Date Price Range complete — second click
  const handleDPRComplete = useCallback(
    (startPrice: number, startIndex: number, endPrice: number, endIndex: number) => {
      const id = nextDrawingId();
      const newDPR: DatePriceRangeDrawing = {
        type: "date-price-range",
        id,
        startPrice,
        startIndex,
        endPrice,
        endIndex,
        color: toolSettings.color,
        thickness: toolSettings.thickness,
        style: toolSettings.style,
        locked: false,
        showBorder: true,
        showBackground: true,
        showLabelBackground: true,
      };
      setDrawings((prev) => [...prev, newDPR]);
      setSelectedDrawingId(id);
      setPendingDPRStart(null);
    },
    [toolSettings]
  );

  // Channel complete — third click sets offset point C
  const handleChannelComplete = useCallback(
    (pA: number, iA: number, pB: number, iB: number, pC: number, iC: number) => {
      const id = nextDrawingId();
      const newChannel: ChannelDrawing = {
        type: "channel",
        id,
        priceA: pA,
        indexA: iA,
        priceB: pB,
        indexB: iB,
        priceC: pC,
        indexC: iC,
        color: toolSettings.color,
        thickness: toolSettings.thickness,
        style: toolSettings.style,
        locked: false,
        showBackground: true,
        extendLeft: false,
        extendRight: true,
        showMiddleLine: true,
      };
      setDrawings((prev) => [...prev, newChannel]);
      setSelectedDrawingId(id);
      setPendingChannelA(null);
      setPendingChannelB(null);
    },
    [toolSettings]
  );

  // Ruler complete — second click
  const handleRulerComplete = useCallback(
    (startPrice: number, startIndex: number, endPrice: number, endIndex: number) => {
      const id = nextDrawingId();
      const newRuler: RulerDrawing = {
        type: "ruler",
        id,
        startPrice,
        startIndex,
        endPrice,
        endIndex,
        color: toolSettings.color,
        thickness: toolSettings.thickness,
        style: toolSettings.style,
        locked: false,
      };
      setDrawings((prev) => [...prev, newRuler]);
      setSelectedDrawingId(id);
      setPendingRulerStart(null);
    },
    [toolSettings]
  );

  // onTextCreate — single click for text tool (now id=15)
  const handleTextCreate = useCallback(
    (price: number, candleIndex: number) => {
      const id = nextDrawingId();
      const newText: TextDrawing = {
        type: "text",
        id,
        price,
        index: candleIndex,
        text: "",
        color: toolSettings.color,
        fontSize: 14,
        bold: false,
        italic: false,
        showBackground: false,
        backgroundColor: "#00b1c7",
        showBorder: true,
        borderColor: "#babac1",
        textWrap: true,
        locked: false,
        thickness: toolSettings.thickness,
        style: toolSettings.style,
      };
      setDrawings((prev) => [...prev, newText]);
      setSelectedDrawingId(id);
      setShowTextSettings(true);
    },
    [toolSettings]
  );

  const handleTextUpdate = useCallback(
    (id: string, text: string) => {
      setDrawings((prev) =>
        prev.map((d) => (d.id === id && d.type === "text" ? { ...d, text } : d))
      );
    },
    []
  );

  const handleDrawingSelect = useCallback(
    (id: string | null) => {
      setSelectedDrawingId(id);
      setShowTextSettings(false);
      setShowDPRSettings(false);
      clearPending();
    },
    [clearPending]
  );

  const handleDrawingMove = useCallback(
    (id: string, newPrice: number, anchor?: "start" | "end" | "body") => {
      setDrawings((prev) =>
        prev.map((d) => {
          if (d.id !== id) return d;
          if (d.type === "horizontal-line") {
            return { ...d, price: newPrice };
          }
          if (d.type === "fib-retracement") {
            if (anchor === "start") return { ...d, startPrice: newPrice };
            if (anchor === "end") return { ...d, endPrice: newPrice };
            const range = d.endPrice - d.startPrice;
            return { ...d, startPrice: newPrice, endPrice: newPrice + range };
          }
          if (d.type === "fib-extension") {
            if (anchor === "body") {
              const delta = newPrice - d.priceC;
              return { ...d, priceA: d.priceA + delta, priceB: d.priceB + delta, priceC: d.priceC + delta };
            }
            return d;
          }
          if (d.type === "projection") {
            if (anchor === "body") {
              const delta = newPrice - d.priceC;
              return { ...d, priceA: d.priceA + delta, priceB: d.priceB + delta, priceC: d.priceC + delta };
            }
            return d;
          }
          if (d.type === "text") {
            return { ...d, price: newPrice };
          }
          if (d.type === "date-price-range") {
            if (anchor === "start") return { ...d, startPrice: newPrice };
            if (anchor === "end") return { ...d, endPrice: newPrice };
            // body drag: move both prices
            const range = d.endPrice - d.startPrice;
            return { ...d, startPrice: newPrice, endPrice: newPrice + range };
          }
          if (d.type === "short-position") {
            if (anchor === "start") return { ...d, stopPrice: newPrice };
            if (anchor === "end") return { ...d, targetPrice: newPrice };
            // body drag: move all three prices proportionally
            const delta = newPrice - d.entryPrice;
            return {
              ...d,
              entryPrice: d.entryPrice + delta,
              stopPrice: d.stopPrice + delta,
              targetPrice: d.targetPrice + delta,
            };
          }
          if (d.type === "long-position") {
            if (anchor === "start") return { ...d, stopPrice: newPrice };
            if (anchor === "end") return { ...d, targetPrice: newPrice };
            const delta = newPrice - d.entryPrice;
            return {
              ...d,
              entryPrice: d.entryPrice + delta,
              stopPrice: d.stopPrice + delta,
              targetPrice: d.targetPrice + delta,
            };
          }
          if (d.type === "channel") {
            if (anchor === "body") {
              const delta = newPrice - d.priceC;
              return { ...d, priceA: d.priceA + delta, priceB: d.priceB + delta, priceC: d.priceC + delta };
            }
            return d;
          }
          if (d.type === "ruler") {
            if (anchor === "start") return { ...d, startPrice: newPrice };
            if (anchor === "end") return { ...d, endPrice: newPrice };
            const range = d.endPrice - d.startPrice;
            return { ...d, startPrice: newPrice, endPrice: newPrice + range };
          }
          return d;
        })
      );
    },
    []
  );

  const handleSettingsChange = useCallback(
    (newSettings: ToolMenuSettings) => {
      setToolSettings(newSettings);
      if (selectedDrawingId) {
        setDrawings((prev) =>
          prev.map((d) =>
            d.id === selectedDrawingId
              ? {
                  ...d,
                  color: newSettings.color,
                  thickness: newSettings.thickness,
                  style: newSettings.style,
                  locked: newSettings.locked,
                }
              : d
          )
        );
      }
    },
    [selectedDrawingId]
  );

  const handleDelete = useCallback(() => {
    if (selectedDrawingId) {
      setDrawings((prev) => prev.filter((d) => d.id !== selectedDrawingId));
      setSelectedDrawingId(null);
      setShowTextSettings(false);
      setShowDPRSettings(false);
    }
  }, [selectedDrawingId]);

  // Text drawing settings update
  const handleTextSettingsUpdate = useCallback(
    (updates: Partial<TextDrawing>) => {
      if (!selectedDrawingId) return;
      setDrawings((prev) =>
        prev.map((d) =>
          d.id === selectedDrawingId && d.type === "text"
            ? { ...d, ...updates }
            : d
        )
      );
    },
    [selectedDrawingId]
  );

  // Date Price Range settings update
  const handleDPRSettingsUpdate = useCallback(
    (updates: Partial<DatePriceRangeDrawing>) => {
      if (!selectedDrawingId) return;
      setDrawings((prev) =>
        prev.map((d) =>
          d.id === selectedDrawingId && d.type === "date-price-range"
            ? { ...d, ...updates }
            : d
        )
      );
    },
    [selectedDrawingId]
  );

  // Tooltip text for pending clicks
  const pendingTooltip = pendingFibStart
    ? "Click to set the second point of the Fibonacci Retracement"
    : pendingFibExtA && pendingFibExtB
      ? "Click to set the third point (C) of the Fibonacci Extension"
      : pendingFibExtA
        ? "Click to set the second point (B) of the Fibonacci Extension"
        : pendingProjA && pendingProjB
          ? "Click to set the third point (C) of the Projection"
          : pendingProjA
            ? "Click to set the second point (B) of the Projection"
            : pendingDPRStart
              ? "Click to set the second corner of the Date & Price Range"
              : pendingChannelA && pendingChannelB
                ? "Click to set the channel width (point C)"
                : pendingChannelA
                  ? "Click to set the second point (B) of the Channel"
                  : pendingRulerStart
                    ? "Click to set the end point of the Ruler"
                    : null;

  // Check if selected drawing is a text or date-price-range drawing
  const selectedTextDrawing =
    selectedDrawing?.type === "text" ? (selectedDrawing as TextDrawing) : null;
  const selectedDPRDrawing =
    selectedDrawing?.type === "date-price-range"
      ? (selectedDrawing as DatePriceRangeDrawing)
      : null;

  // Settings click handler for the tool menu gear icon
  const settingsClickHandler = selectedTextDrawing
    ? () => { setShowTextSettings((v) => !v); setShowDPRSettings(false); }
    : selectedDPRDrawing
      ? () => { setShowDPRSettings((v) => !v); setShowTextSettings(false); }
      : undefined;

  return (
    <ThemeProvider>
    <div
      className="h-screen w-screen grid overflow-hidden transition-colors duration-200"
      style={{
        backgroundColor: 'var(--hc-page-bg)',
        gridTemplateColumns: isChartExpanded ? '1fr' : 'auto 1fr',
        gridTemplateRows: isChartExpanded ? '1fr' : 'auto 1fr auto',
      }}
    >
      {/* ── TopBar (row1: spans all cols, flush to top) ── */}
      {!isChartExpanded && (
        <div
          className="shrink-0"
          style={{ gridRow: 1, gridColumn: '1 / -1' }}
        >
          <TopBar activeIndicators={activeIndicators} onToggleIndicator={handleToggleIndicator} onExpandChart={() => setIsChartExpanded(true)} />
        </div>
      )}

      {/* ── Left Sidebar (row2, col1) ── */}
      {!isChartExpanded && (
        <div
          className="flex flex-col items-center shrink-0 overflow-hidden w-[36px] md:w-[48px] md:pb-[6px]"
          style={{ gridRow: '2 / -1', gridColumn: 1 }}
        >
          <div className="flex-1 min-h-0 w-full overflow-hidden md:mt-[6px]">
            <ToolsSidebar
              selectedTool={selectedTool}
              onToolSelect={(id) => {
                setSelectedTool(id);
                if (id !== selectedTool) {
                  setSelectedDrawingId(null);
                  setShowTextSettings(false);
                  setShowDPRSettings(false);
                  clearPending();
                }
              }}
              isZoomed={isZoomed}
              onZoomOut={() => setResetZoomTrigger((v) => v + 1)}
              onRemoveDrawings={() => { setDrawings([]); setSelectedDrawingId(null); }}
              onRemoveIndicators={() => { setActiveIndicators([]); }}
              onRemoveAll={() => { setDrawings([]); setSelectedDrawingId(null); }}
            />
          </div>
        </div>
      )}

      {/* ── Chart + indicators area (row2 col2, or full in expanded) ── */}
      <div
        className="flex flex-col min-h-0 min-w-0 md:pr-[6px] md:pb-[6px] md:pl-[6px]"
        style={{
          gridRow: isChartExpanded ? '1 / -1' : 2,
          gridColumn: isChartExpanded ? '1 / -1' : 2,
        }}
      >
        <div ref={chartAreaRef} className={`flex-1 min-h-0 relative flex flex-col ${isChartExpanded ? 'pb-[48px]' : 'md:mt-[6px]'}`}>
          {/* Main chart */}
          <div className={`min-h-[200px] overflow-hidden rounded-none md:rounded-md ${(apoIsActive || adIsActive || aroonIsActive || atrIsActive || aoIsActive) && !anyPaneFullScreen ? '' : 'flex-1'}`}
            style={{
              ...(apoIsActive || adIsActive || aroonIsActive || atrIsActive || aoIsActive) && !anyPaneFullScreen ? { flex: '1 1 0%', minHeight: 200 } : { flex: '1 1 0%', minHeight: 200 },
            }}
          >
            {!apoFullScreen && !adFullScreen && !aroonFullScreen && !atrFullScreen && !aoFullScreen && (
              <CandlestickChart
                data={data}
                drawings={drawings}
                selectedDrawingId={selectedDrawingId}
                activeToolId={selectedTool}
                onDrawingCreate={handleDrawingCreate}
                onFibComplete={handleFibComplete}
                onFibExtComplete={handleFibExtComplete}
                onProjectionComplete={handleProjComplete}
                onDPRComplete={handleDPRComplete}
                onChannelComplete={handleChannelComplete}
                onRulerComplete={handleRulerComplete}
                onTextCreate={handleTextCreate}
                onTextUpdate={handleTextUpdate}
                onDrawingSelect={handleDrawingSelect}
                onDrawingMove={handleDrawingMove}
                pendingFibStart={pendingFibStart}
                pendingFibExtA={pendingFibExtA}
                pendingFibExtB={pendingFibExtB}
                pendingProjA={pendingProjA}
                pendingProjB={pendingProjB}
                pendingDPRStart={pendingDPRStart}
                pendingChannelA={pendingChannelA}
                pendingChannelB={pendingChannelB}
                pendingRulerStart={pendingRulerStart}
                onZoomChange={setIsZoomed}
                resetZoomTrigger={resetZoomTrigger}
                onViewChange={setChartViewInfo}
                abandsData={abandsData}
                abandsSettings={abandsSettings}
                bbData={bbData}
                bbSettings={bbSettings}
              />
            )}
          </div>

          {/* ABands overlay header */}
          {abandsIsActive && !apoFullScreen && !adFullScreen && !aroonFullScreen && !atrFullScreen && !aoFullScreen && (
            <div className="absolute top-[4px] left-[4px] z-10">
              <ABandsOverlayHeader
                settings={abandsSettings}
                onSettingsChange={setAbandsSettings}
                onClose={() => handleToggleIndicator("abands")}
                currentValues={abandsCurrentValues}
              />
            </div>
          )}

          {/* Bollinger Bands overlay header */}
          {bbIsActive && !apoFullScreen && !adFullScreen && !aroonFullScreen && !atrFullScreen && !aoFullScreen && (
            <div className={`absolute left-[4px] z-10`} style={{ top: abandsIsActive ? 30 : 4 }}>
              <BBOverlayHeader
                settings={bbSettings}
                onSettingsChange={setBbSettings}
                onClose={() => handleToggleIndicator("bb")}
                currentValues={bbCurrentValues}
              />
            </div>
          )}

          {/* Resizable divider + APO pane */}
          {apoIsActive && !apoFullScreen && (
            <>
              <div
                className="h-[6px] shrink-0 cursor-row-resize flex items-center justify-center group hover:bg-[#dcf5f7] transition-colors"
                onMouseDown={(e) => {
                  e.preventDefault();
                  dividerDragRef.current = { startY: e.clientY, startHeight: apoPaneHeight };
                  const handleMove = (ev: MouseEvent) => {
                    if (!dividerDragRef.current) return;
                    const delta = dividerDragRef.current.startY - ev.clientY;
                    setApoPaneHeight(Math.max(100, Math.min(500, dividerDragRef.current.startHeight + delta)));
                  };
                  const handleUp = () => {
                    dividerDragRef.current = null;
                    window.removeEventListener("mousemove", handleMove);
                    window.removeEventListener("mouseup", handleUp);
                  };
                  window.addEventListener("mousemove", handleMove);
                  window.addEventListener("mouseup", handleUp);
                }}
              >
                <div className="w-[40px] h-[3px] rounded-full transition-colors" style={{ backgroundColor: 'var(--hc-border)' }} />
              </div>
              <div className="shrink-0 rounded-md overflow-hidden" style={{ height: apoPaneHeight }}>
                <APOIndicatorPane
                  data={data}
                  scrollOffset={chartViewInfo.scrollOffset}
                  visibleCandles={chartViewInfo.visibleCandles}
                  candleStep={chartViewInfo.candleStep}
                  chartWidth={chartViewInfo.chartWidth}
                  onClose={() => handleToggleIndicator("apo")}
                  height={apoPaneHeight}
                  isFullScreen={false}
                  onToggleFullScreen={() => setApoFullScreen(true)}
                />
              </div>
            </>
          )}

          {/* APO Full Screen */}
          {apoIsActive && apoFullScreen && (
            <div className="flex-1 min-h-0 rounded-md overflow-hidden">
              <APOIndicatorPane
                data={data}
                scrollOffset={chartViewInfo.scrollOffset}
                visibleCandles={chartViewInfo.visibleCandles}
                candleStep={chartViewInfo.candleStep}
                chartWidth={chartViewInfo.chartWidth}
                onClose={() => handleToggleIndicator("apo")}
                height={0}
                isFullScreen={true}
                onToggleFullScreen={() => setApoFullScreen(false)}
              />
            </div>
          )}

          {/* Resizable divider + A/D pane */}
          {adIsActive && !adFullScreen && (
            <>
              <div
                className="h-[6px] shrink-0 cursor-row-resize flex items-center justify-center group hover:bg-[#dcf5f7] transition-colors"
                onMouseDown={(e) => {
                  e.preventDefault();
                  adDividerDragRef.current = { startY: e.clientY, startHeight: adPaneHeight };
                  const handleMove = (ev: MouseEvent) => {
                    if (!adDividerDragRef.current) return;
                    const delta = adDividerDragRef.current.startY - ev.clientY;
                    setAdPaneHeight(Math.max(100, Math.min(500, adDividerDragRef.current.startHeight + delta)));
                  };
                  const handleUp = () => {
                    adDividerDragRef.current = null;
                    window.removeEventListener("mousemove", handleMove);
                    window.removeEventListener("mouseup", handleUp);
                  };
                  window.addEventListener("mousemove", handleMove);
                  window.addEventListener("mouseup", handleUp);
                }}
              >
                <div className="w-[40px] h-[3px] rounded-full transition-colors" style={{ backgroundColor: 'var(--hc-border)' }} />
              </div>
              <div className="shrink-0 rounded-md overflow-hidden" style={{ height: adPaneHeight }}>
                <ADIndicatorPane
                  data={data}
                  scrollOffset={chartViewInfo.scrollOffset}
                  visibleCandles={chartViewInfo.visibleCandles}
                  candleStep={chartViewInfo.candleStep}
                  chartWidth={chartViewInfo.chartWidth}
                  onClose={() => handleToggleIndicator("ad")}
                  height={adPaneHeight}
                  isFullScreen={false}
                  onToggleFullScreen={() => setAdFullScreen(true)}
                />
              </div>
            </>
          )}

          {/* A/D Full Screen */}
          {adIsActive && adFullScreen && (
            <div className="flex-1 min-h-0 rounded-md overflow-hidden">
              <ADIndicatorPane
                data={data}
                scrollOffset={chartViewInfo.scrollOffset}
                visibleCandles={chartViewInfo.visibleCandles}
                candleStep={chartViewInfo.candleStep}
                chartWidth={chartViewInfo.chartWidth}
                onClose={() => handleToggleIndicator("ad")}
                height={0}
                isFullScreen={true}
                onToggleFullScreen={() => setAdFullScreen(false)}
              />
            </div>
          )}

          {/* Resizable divider + Aroon pane */}
          {aroonIsActive && !aroonFullScreen && (
            <>
              <div
                className="h-[6px] shrink-0 cursor-row-resize flex items-center justify-center group hover:bg-[#dcf5f7] transition-colors"
                onMouseDown={(e) => {
                  e.preventDefault();
                  aroonDividerDragRef.current = { startY: e.clientY, startHeight: aroonPaneHeight };
                  const handleMove = (ev: MouseEvent) => {
                    if (!aroonDividerDragRef.current) return;
                    const delta = aroonDividerDragRef.current.startY - ev.clientY;
                    setAroonPaneHeight(Math.max(100, Math.min(500, aroonDividerDragRef.current.startHeight + delta)));
                  };
                  const handleUp = () => {
                    aroonDividerDragRef.current = null;
                    window.removeEventListener("mousemove", handleMove);
                    window.removeEventListener("mouseup", handleUp);
                  };
                  window.addEventListener("mousemove", handleMove);
                  window.addEventListener("mouseup", handleUp);
                }}
              >
                <div className="w-[40px] h-[3px] rounded-full transition-colors" style={{ backgroundColor: 'var(--hc-border)' }} />
              </div>
              <div className="shrink-0 rounded-md overflow-hidden" style={{ height: aroonPaneHeight }}>
                <AroonIndicatorPane
                  data={data}
                  scrollOffset={chartViewInfo.scrollOffset}
                  visibleCandles={chartViewInfo.visibleCandles}
                  candleStep={chartViewInfo.candleStep}
                  chartWidth={chartViewInfo.chartWidth}
                  onClose={() => handleToggleIndicator("aroon")}
                  height={aroonPaneHeight}
                  isFullScreen={false}
                  onToggleFullScreen={() => setAroonFullScreen(true)}
                />
              </div>
            </>
          )}

          {/* Aroon Full Screen */}
          {aroonIsActive && aroonFullScreen && (
            <div className="flex-1 min-h-0 rounded-md overflow-hidden">
              <AroonIndicatorPane
                data={data}
                scrollOffset={chartViewInfo.scrollOffset}
                visibleCandles={chartViewInfo.visibleCandles}
                candleStep={chartViewInfo.candleStep}
                chartWidth={chartViewInfo.chartWidth}
                onClose={() => handleToggleIndicator("aroon")}
                height={0}
                isFullScreen={true}
                onToggleFullScreen={() => setAroonFullScreen(false)}
              />
            </div>
          )}

          {/* Resizable divider + ATR pane */}
          {atrIsActive && !atrFullScreen && (
            <>
              <div
                className="h-[6px] shrink-0 cursor-row-resize flex items-center justify-center group hover:bg-[#dcf5f7] transition-colors"
                onMouseDown={(e) => {
                  e.preventDefault();
                  atrDividerDragRef.current = { startY: e.clientY, startHeight: atrPaneHeight };
                  const handleMove = (ev: MouseEvent) => {
                    if (!atrDividerDragRef.current) return;
                    const delta = atrDividerDragRef.current.startY - ev.clientY;
                    setAtrPaneHeight(Math.max(100, Math.min(500, atrDividerDragRef.current.startHeight + delta)));
                  };
                  const handleUp = () => {
                    atrDividerDragRef.current = null;
                    window.removeEventListener("mousemove", handleMove);
                    window.removeEventListener("mouseup", handleUp);
                  };
                  window.addEventListener("mousemove", handleMove);
                  window.addEventListener("mouseup", handleUp);
                }}
              >
                <div className="w-[40px] h-[3px] rounded-full transition-colors" style={{ backgroundColor: 'var(--hc-border)' }} />
              </div>
              <div className="shrink-0 rounded-md overflow-hidden" style={{ height: atrPaneHeight }}>
                <ATRIndicatorPane
                  data={data}
                  scrollOffset={chartViewInfo.scrollOffset}
                  visibleCandles={chartViewInfo.visibleCandles}
                  candleStep={chartViewInfo.candleStep}
                  chartWidth={chartViewInfo.chartWidth}
                  onClose={() => handleToggleIndicator("atr")}
                  height={atrPaneHeight}
                  isFullScreen={false}
                  onToggleFullScreen={() => setAtrFullScreen(true)}
                />
              </div>
            </>
          )}

          {/* ATR Full Screen */}
          {atrIsActive && atrFullScreen && (
            <div className="flex-1 min-h-0 rounded-md overflow-hidden">
              <ATRIndicatorPane
                data={data}
                scrollOffset={chartViewInfo.scrollOffset}
                visibleCandles={chartViewInfo.visibleCandles}
                candleStep={chartViewInfo.candleStep}
                chartWidth={chartViewInfo.chartWidth}
                onClose={() => handleToggleIndicator("atr")}
                height={0}
                isFullScreen={true}
                onToggleFullScreen={() => setAtrFullScreen(false)}
              />
            </div>
          )}

          {/* Resizable divider + AO pane */}
          {aoIsActive && !aoFullScreen && (
            <>
              <div
                className="h-[6px] shrink-0 cursor-row-resize flex items-center justify-center group hover:bg-[#dcf5f7] transition-colors"
                onMouseDown={(e) => {
                  e.preventDefault();
                  aoDividerDragRef.current = { startY: e.clientY, startHeight: aoPaneHeight };
                  const handleMove = (ev: MouseEvent) => {
                    if (!aoDividerDragRef.current) return;
                    const delta = aoDividerDragRef.current.startY - ev.clientY;
                    setAoPaneHeight(Math.max(100, Math.min(500, aoDividerDragRef.current.startHeight + delta)));
                  };
                  const handleUp = () => {
                    aoDividerDragRef.current = null;
                    window.removeEventListener("mousemove", handleMove);
                    window.removeEventListener("mouseup", handleUp);
                  };
                  window.addEventListener("mousemove", handleMove);
                  window.addEventListener("mouseup", handleUp);
                }}
              >
                <div className="w-[40px] h-[3px] rounded-full transition-colors" style={{ backgroundColor: 'var(--hc-border)' }} />
              </div>
              <div className="shrink-0 rounded-md overflow-hidden" style={{ height: aoPaneHeight }}>
                <AOIndicatorPane
                  data={data}
                  scrollOffset={chartViewInfo.scrollOffset}
                  visibleCandles={chartViewInfo.visibleCandles}
                  candleStep={chartViewInfo.candleStep}
                  chartWidth={chartViewInfo.chartWidth}
                  onClose={() => handleToggleIndicator("ao")}
                  height={aoPaneHeight}
                  isFullScreen={false}
                  onToggleFullScreen={() => setAoFullScreen(true)}
                />
              </div>
            </>
          )}

          {/* AO Full Screen */}
          {aoIsActive && aoFullScreen && (
            <div className="flex-1 min-h-0 rounded-md overflow-hidden">
              <AOIndicatorPane
                data={data}
                scrollOffset={chartViewInfo.scrollOffset}
                visibleCandles={chartViewInfo.visibleCandles}
                candleStep={chartViewInfo.candleStep}
                chartWidth={chartViewInfo.chartWidth}
                onClose={() => handleToggleIndicator("ao")}
                height={0}
                isFullScreen={true}
                onToggleFullScreen={() => setAoFullScreen(false)}
              />
            </div>
          )}

          {/* Tool menu */}
          {(isDrawingTool || selectedDrawingId) && (
            <ToolMenu
              visible={true}
              extended={!!selectedDrawingId}
              settings={activeSettings}
              onSettingsChange={handleSettingsChange}
              onDelete={handleDelete}
              containerRef={chartAreaRef}
              onSettingsClick={settingsClickHandler}
            />
          )}

          {/* Text settings panel */}
          {showTextSettings && selectedTextDrawing && (
            <div className="absolute top-[52px] left-[18px] z-50">
              <TextSettingsPanel
                drawing={selectedTextDrawing}
                onUpdate={handleTextSettingsUpdate}
                onClose={() => setShowTextSettings(false)}
              />
            </div>
          )}

          {/* Date Price Range settings panel */}
          {showDPRSettings && selectedDPRDrawing && (
            <div className="absolute top-[52px] left-[18px] z-50">
              <DatePriceRangeSettingsPanel
                drawing={selectedDPRDrawing}
                onUpdate={handleDPRSettingsUpdate}
                onClose={() => setShowDPRSettings(false)}
              />
            </div>
          )}

          {/* Pending click indicator */}
          {pendingTooltip && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[12px] px-3 py-1.5 rounded-[4px] pointer-events-none z-20 font-['Source_Sans_3',sans-serif]"
              style={{ backgroundColor: 'var(--hc-tooltip-bg)', color: 'var(--hc-tooltip-text)' }}>
              {pendingTooltip}
            </div>
          )}
        </div>
      </div>

      {/* ─ FooterBar (row3: starts at canvas column) ── */}
      {!isChartExpanded && (
        <div
          className="shrink-0 hidden md:block md:pl-[6px] md:pr-[6px] md:pb-[6px]"
          style={{ gridRow: 3, gridColumn: 2 }}
        >
          <FooterBar />
        </div>
      )}
    </div>

    {/* Chart Expanded Bottom Bar */}
    {isChartExpanded && (
      <ChartExpandedBar
        selectedTool={selectedTool}
        onToolSelect={(id) => {
          setSelectedTool(id);
          setSelectedDrawingId(null);
          setShowTextSettings(false);
          setShowDPRSettings(false);
          clearPending();
        }}
        isZoomed={isZoomed}
        onZoomOut={() => setResetZoomTrigger((v) => v + 1)}
        onRemoveDrawings={() => { setDrawings([]); setSelectedDrawingId(null); }}
        onRemoveIndicators={() => { setActiveIndicators([]); }}
        onRemoveAll={() => { setDrawings([]); setSelectedDrawingId(null); setActiveIndicators([]); }}
        activeIndicators={activeIndicators}
        onToggleIndicator={handleToggleIndicator}
        onCollapse={() => setIsChartExpanded(false)}
      />
    )}

    </ThemeProvider>
  );
}