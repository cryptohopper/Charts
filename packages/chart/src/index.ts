// @hopcharts/chart — Lightweight Charts wrapper, plugins, toolbar

// Main component
export { HopChart } from './HopChart.js';
export type { HopChartProps } from './HopChart.js';

// Hooks
export { useChart } from './hooks/useChart.js';
export type { UseChartReturn } from './hooks/useChart.js';
export { useIndicators } from './hooks/useIndicators.js';
export { useDrawings } from './hooks/useDrawings.js';
export { useAIOverlay } from './hooks/useAIOverlay.js';
export { usePriceLines } from './hooks/usePriceLines.js';

// Config
export { getDefaultOptions, getChartColors } from './config/chartOptions.js';
export type { ChartColors } from './config/chartOptions.js';
export { getCandlestickOptions, getVolumeOptions } from './config/seriesOptions.js';

// AI overlay primitives
export {
  AIPatternPrimitive,
  AIProjectionPrimitive,
  AIHeatmapPrimitive,
  getAIOverlayTheme,
} from './plugins/ai/index.js';
export type { AIOverlayTheme } from './plugins/ai/index.js';

// Drawing primitives
export {
  DrawingManager,
  BaseDrawingPrimitive,
  InteractionHandler,
  serializeDrawings,
  deserializeDrawings,
  TrendlinePrimitive,
  HorizontalLinePrimitive,
  VerticalLinePrimitive,
  FibonacciPrimitive,
  ParallelChannelPrimitive,
  RectanglePrimitive,
  ArrowPrimitive,
  MeasurePrimitive,
  TextLabelPrimitive,
  anchorToPixel,
  pixelToAnchor,
  generateDrawingId,
  HIT_THRESHOLD,
  ANCHOR_RADIUS,
  FIB_LEVELS,
  FIB_LEVEL_COLORS,
} from './plugins/drawings/index.js';

// Toolbar
export {
  Toolbar,
  ExchangeSelector,
  PairSelector,
  TimeframeSelector,
  ChartTypeSelector,
  ChartTypeToolbarIcon,
  RangeSelector,
  DrawingToolsMenu,
  IndicatorMenu,
  AIToggle,
  FullscreenButton,
  ToolsSidebar,
  Divider,
} from './Toolbar/index.js';
export type { ToolbarProps, RangeSelectorProps } from './Toolbar/index.js';
