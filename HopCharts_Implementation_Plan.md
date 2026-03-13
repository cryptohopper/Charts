# HopCharts — Implementation Plan (v2 — Lightweight Charts)

## Work Package Overview & Dependency Graph

```
WP-01  Monorepo Scaffold
  │
  ├──▶ WP-02  Core Types & API Client        ──┐
  │                                              │
  ├──▶ WP-03  Zustand Stores                    ├──▶ WP-07  LWC Chart Component
  │                                              │          │
  ├──▶ WP-04  AI Overlay Primitives          ────┘          │
  │                                                         │
  ├──▶ WP-05  Custom Toolbar (React)        ───────────────▶├──▶ WP-10  Full App Shell (pages, routing, layout)
  │                                                         │          │
  ├──▶ WP-06  Drawing Tools Engine          ───────────────▶│          ├──▶ WP-13  CryptoHopper Integration
  │                                                         │          │
  └──▶ WP-08  WebSocket Real-time Client    ───────────────▶│          ├──▶ WP-14  AI Pattern Service Integration
  │                                                         │          │
  WP-09  OAuth / Auth Flow                  ───────────────▶│          └──▶ WP-15  Subscription Gating
  │                                                         │
  │                                            WP-11  Widget (Web Component + iframe) ◀──┘
  │                                                         │
  │                                            WP-12  Dark/Light Theming ◀── (can start after WP-07)
  │
  WP-16  Testing & Visual Regression
  WP-17  CI/CD & Deployment
```

**Key changes from Highcharts plan:**
- **WP-04 renamed:** "Canvas AI Overlay Engine" → "AI Overlay Primitives" (no separate Canvas element — uses LWC plugin system)
- **WP-06 NEW:** "Drawing Tools Engine" — entirely new work package. Highcharts had this built-in. Now we build trendlines, Fibonacci, etc. as LWC primitives.
- **WP-06 old renamed to WP-07:** "Highcharts Chart Component" → "LWC Chart Component"
- **NEW WP embedded in WP-07:** Technical indicator calculation engine (was built into Highcharts, now must be calculated client-side)
- **WP numbering shifted:** WP-07 through WP-16 shifted to WP-08 through WP-17

## Parallelism Map

```
PHASE A (can all start simultaneously after WP-01):
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│  WP-02  │  │  WP-03  │  │  WP-04  │  │  WP-05  │  │  WP-06  │  │  WP-08  │  │  WP-09  │  │  WP-17  │
│  Types  │  │ Stores  │  │AI Prims │  │ Toolbar │  │ Drawing │  │   WS    │  │  Auth   │  │  CI/CD  │
│ & API   │  │         │  │         │  │  React  │  │  Tools  │  │ Client  │  │  OAuth  │  │         │
└────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘  └─────────┘
     │            │            │            │            │            │            │
     └────────────┴────────────┴────────────┴────────────┘            │            │
                              │                                       │            │
                        ┌─────┴─────┐                                 │            │
PHASE B:                │   WP-07   │◀────────────────────────────────┘            │
                        │ LWC Chart │◀─────────────────────────────────────────────┘
                        │ Component │
                        └─────┬─────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
        ┌─────┴─────┐  ┌─────┴─────┐  ┌─────┴─────┐
PHASE C:│   WP-10   │  │   WP-11   │  │   WP-12   │
        │  App Shell│  │  Widget   │  │  Theming  │
        └─────┬─────┘  └───────────┘  └───────────┘
              │
     ┌────────┼────────┬──────────┐
     │        │        │          │
┌────┴───┐┌───┴───┐┌───┴───┐┌────┴───┐
│ WP-13  ││ WP-14 ││ WP-15 ││ WP-16  │
│CH Intg ││AI Svc ││ Sub   ││ Tests  │
│        ││       ││ Gate  ││        │
└────────┘└───────┘└───────┘└────────┘
```

---

## Design Reference

All UI components have been designed and exported as a working React project via Figma Make AI. The design files live in the `Chart Design/` folder (relative to this plan). This is a fully functional React + Tailwind + shadcn/ui project that includes all states, themes, and responsive variants.

**Every Claude Code prompt should read the relevant design files before building.** The design is the single source of truth for:
- Layout, spacing, colors, typography
- Component structure and hierarchy
- Dark/light theme implementation
- Responsive breakpoints and mobile variants
- Icon usage and placement
- Hover, active, disabled, loading states

**Design → Implementation mapping:**

| WP | Design files to reference |
|----|--------------------------|
| WP-05 (Toolbar) | `top-bar.tsx`, `tools-sidebar.tsx`, `exchange-selector.tsx`, `currency-selector.tsx`, `timeframe-selector.tsx`, `chart-type-selector.tsx`, `indicators-panel.tsx`, `tool-menu.tsx`, `chart-expanded-bar.tsx` |
| WP-06 (Drawing Tools) | `tool-menu.tsx`, `text-settings-panel.tsx`, `date-price-range-settings.tsx`, `drawing-types.ts`, and the `imports/` folder (FibRetracement, FibExtension, HorizontalLine, Channel, Ruler, LongPosition, ShortPosition, Projection, Text) |
| WP-07 (Chart Component) | `candlestick-chart.tsx`, `chart-navigation.tsx`, `footer-bar.tsx`, `chart-expanded-bar.tsx`, `bb-indicator.tsx`, `abands-indicator.tsx`, indicator pane components |
| WP-09 (Auth) | `auth-modal.tsx` |
| WP-10 (App Shell) | `App.tsx`, `mobile-bottom-bar.tsx`, `save-menu.tsx`, `share-menu.tsx`, `feedback-modal.tsx` |
| WP-12 (Theming) | `theme-context.tsx` |

All paths are relative to `Chart Design/src/app/components/`. The `ui/` subfolder contains shadcn/ui primitives (button, dialog, dropdown, tabs, etc.) that the design uses — adopt these same primitives.

---

## WP-01: Monorepo Scaffold

**Dependencies:** None
**Parallel with:** Nothing — this is the foundation
**Estimated effort:** 0.5 day

### Claude Code Prompt

```
You are setting up a Turborepo monorepo for "HopCharts", a TradingView-style crypto charting application built with TradingView Lightweight Charts v5.

## What to create

Initialize a Turborepo monorepo with the following package structure:

```
hopcharts/
├── packages/
│   ├── core/          # Shared types, API clients, Zustand stores, utilities
│   ├── chart/         # Lightweight Charts wrapper, plugins (indicators, drawings, AI), custom toolbar
│   ├── widget/        # Web Component + iframe embed wrappers
│   └── app/           # Full standalone Vite React app
├── turbo.json
├── package.json
├── tsconfig.base.json
└── .eslintrc.js
```

## Requirements for each package

**All packages:**
- TypeScript strict mode
- ESLint + Prettier
- Each package has its own `package.json` with `name` scoped as `@hopcharts/core`, `@hopcharts/chart`, `@hopcharts/widget`, `@hopcharts/app`
- Each package has its own `tsconfig.json` extending a shared `tsconfig.base.json` at root
- Target: ES2020 (matching Lightweight Charts v5 requirements)

**@hopcharts/core:**
- No React dependency. Pure TypeScript.
- Dependencies: `zustand`, `@tanstack/react-query`, `idb-keyval`
- Export entry: `src/index.ts`

**@hopcharts/chart:**
- Dependencies: `react`, `react-dom`, `lightweight-charts`, `indicatorts`, `@hopcharts/core`
- Export entry: `src/index.ts` exporting `HopChart` component
- Note: NO `highcharts` or `highcharts-react-official` dependency

**@hopcharts/widget:**
- Dependencies: `@hopcharts/chart`
- Must support building as a single JS bundle via Vite library mode
- Export entry: `src/hop-charts.ts` (Custom Element) and `src/iframe.ts`

**@hopcharts/app:**
- Dependencies: `react`, `react-dom`, `@hopcharts/chart`, `@hopcharts/core`, `tailwindcss`
- Vite-based React app with React Router
- Tailwind CSS configured with dark mode support (`class` strategy)
- shadcn/ui as component primitive library (matching the Chart Design project)

**turbo.json:**
- Define `build`, `dev`, `lint`, `test` pipelines
- `build` depends on `^build` (topological)
- `dev` is persistent

**Root package.json:**
- Workspaces pointing to `packages/*`
- Scripts: `dev`, `build`, `lint`, `test`

## Do NOT
- Do not add any UI components yet — just the scaffold and configuration
- Do not create any pages or routes in the app package yet
```

---

## WP-02: Core Types & API Client

**Dependencies:** WP-01
**Parallel with:** WP-03, WP-04, WP-05, WP-06, WP-08, WP-09, WP-17
**Estimated effort:** 1.5 days

### Claude Code Prompt

```
You are building the core types and API client layer for HopCharts, a TradingView-style crypto charting app using Lightweight Charts v5. Work in `packages/core/src/`.

## Context

HopCharts connects to a CryptoHopper backend proxy that normalizes exchange data. The backend exposes REST endpoints for historical data and WebSocket for real-time ticks. All exchange API calls go through this proxy — the frontend never calls exchanges directly.

## Types to create in `packages/core/src/types/`

**exchange.ts:**
```typescript
export type ExchangeId = 'binance' | 'coinbase' | 'kraken' | 'kucoin' | string;

export interface Exchange {
  id: ExchangeId;
  name: string;
  logoUrl: string;
  supportedFeatures: {
    websocket: boolean;
    ohlcv: boolean;
    orderbook: boolean;
  };
}
```

**pair.ts:**
```typescript
export interface TradingPair {
  symbol: string;          // "BTC/USDT"
  base: string;            // "BTC"
  quote: string;           // "USDT"
  exchangeId: ExchangeId;
  priceDecimals: number;
  quantityDecimals: number;
  minOrderSize?: number;
}
```

**ohlcv.ts:**
```typescript
export type Timeframe = '1m' | '5m' | '15m' | '1h' | '4h' | '1D' | '1W';

export interface OHLCV {
  timestamp: number;  // Unix ms
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// Lightweight Charts expects data with a `time` field (UTCTimestamp or BusinessDay)
import type { UTCTimestamp, CandlestickData, HistogramData } from 'lightweight-charts';

export function toLWCCandlestickData(candles: OHLCV[]): CandlestickData<UTCTimestamp>[];
export function toLWCVolumeData(candles: OHLCV[]): HistogramData<UTCTimestamp>[];
```

**indicator.ts:**
```typescript
export type IndicatorType = 'sma' | 'ema' | 'rsi' | 'macd' | 'bb' | 'stoch' | 'atr' | 'adx' | 'cci' | 'obv' | string;

export type IndicatorPlacement = 'overlay' | 'sub-pane';

export interface IndicatorConfig {
  type: IndicatorType;
  params: Record<string, number>;  // e.g., { period: 14 }
  color?: string;
  visible: boolean;
  placement: IndicatorPlacement;   // Where to render: on main pane or separate sub-pane
}

// Indicator output — either single values or multiple lines (MACD has signal + histogram)
export interface IndicatorOutput {
  type: IndicatorType;
  lines: {
    name: string;
    data: { time: number; value: number }[];
    color: string;
    seriesType: 'line' | 'histogram';
  }[];
}
```

**drawing.ts — Drawing tool types (NEW — did not exist in Highcharts plan):**
```typescript
export type DrawingToolType =
  | 'trendline' | 'horizontal_line' | 'vertical_line'
  | 'fibonacci_retracement' | 'parallel_channel'
  | 'rectangle' | 'arrow' | 'text_label'
  | 'measure' | 'pitchfork' | 'elliott3' | 'elliott5';

export interface AnchorPoint {
  time: number;   // UTCTimestamp
  price: number;
}

export interface Drawing {
  id: string;
  type: DrawingToolType;
  anchors: AnchorPoint[];
  style: {
    color: string;
    lineWidth: number;
    lineStyle: 'solid' | 'dashed' | 'dotted';
    fillColor?: string;
    fillOpacity?: number;
  };
  locked: boolean;
  visible: boolean;
}
```

**pattern.ts — AI pattern types (unchanged):**
```typescript
export type PatternType =
  | 'head_and_shoulders' | 'inverse_head_and_shoulders'
  | 'double_top' | 'double_bottom'
  | 'ascending_triangle' | 'descending_triangle' | 'symmetrical_triangle'
  | 'bull_flag' | 'bear_flag'
  | 'rising_wedge' | 'falling_wedge'
  | 'cup_and_handle';

export interface PatternPoint {
  timestamp: number;
  price: number;
}

export interface DetectedPattern {
  id: string;
  type: PatternType;
  confidence: number;       // 0-1
  points: PatternPoint[];   // Key points defining the pattern shape
  region: PatternPoint[];   // Polygon outline for shaded overlay
  projection?: {
    targetPrice: number;
    projectedPoints: PatternPoint[];  // Bezier curve path
  };
  detectedAt: number;       // Timestamp when AI detected this
  timeframe: Timeframe;
}
```

**chart-state.ts:**
```typescript
export interface ChartState {
  exchangeId: ExchangeId;
  pair: string;
  timeframe: Timeframe;
  indicators: IndicatorConfig[];
  drawings: Drawing[];           // NEW: serialized drawing tool state
  slPrice?: number;
  tpPrice?: number;
}

export interface UserPreferences {
  theme: 'dark' | 'light';
  favoritesPairs: string[];
  defaultExchange: ExchangeId;
  showAIOverlay: boolean;
  chartLayouts: Record<string, ChartState[]>;  // Named layouts
}
```

## API Client in `packages/core/src/api/`

**client.ts:**
Create a base API client class/function using `fetch`. Base URL configurable via environment variable `HOPCHARTS_API_URL`. Includes:
- Automatic auth token attachment (from cookie or passed token)
- Response error handling with typed errors
- Request/response type generics

**charts-api.ts:**
```typescript
export const chartsApi = {
  getExchanges(): Promise<Exchange[]>,
  getPairs(exchangeId: ExchangeId): Promise<TradingPair[]>,
  getOHLCV(params: {
    exchangeId: ExchangeId;
    pair: string;
    timeframe: Timeframe;
    from: number;  // Unix ms
    to: number;
  }): Promise<OHLCV[]>,
  saveChartState(state: ChartState): Promise<void>,
  loadChartState(): Promise<ChartState | null>,
  getAIPatterns(params: {
    exchangeId: ExchangeId;
    pair: string;
    timeframe: Timeframe;
  }): Promise<DetectedPattern[]>,
};
```

**TanStack Query hooks in `packages/core/src/api/hooks.ts`:**
Create React Query hooks wrapping each API method:
- `useExchanges()`
- `usePairs(exchangeId)`
- `useOHLCV(exchangeId, pair, timeframe, from, to)` — with `keepPreviousData: true` for smooth transitions
- `useAIPatterns(exchangeId, pair, timeframe)` — polls every 30s or receives via WS
- `useSaveChartState()` mutation
- `useLoadChartState()`

All hooks should use proper query keys for cache invalidation.

## Utility functions in `packages/core/src/utils/`

**format.ts:** `formatPrice(price, decimals)`, `formatVolume(volume)`, `formatPercentage(value)`, `formatTimestamp(ts, timeframe)`
**conversion.ts:** The `toLWCCandlestickData` and `toLWCVolumeData` functions from the types file
**timeframe.ts:** `timeframeToMs(tf: Timeframe): number`, `timeframeLabel(tf: Timeframe): string`

## Export everything from `packages/core/src/index.ts`
```

---

## WP-03: Zustand Stores

**Dependencies:** WP-01, WP-02 (types only — can start as soon as types are defined)
**Parallel with:** WP-04, WP-05, WP-06, WP-08, WP-09
**Estimated effort:** 1.5 days

### Claude Code Prompt

```
You are building Zustand state stores for HopCharts. Work in `packages/core/src/store/`.

## Context

HopCharts is a TradingView-style crypto charting app using Lightweight Charts v5. State is split into multiple focused stores rather than one monolith. Each store handles a specific domain.

## Types available

Import all types from `../types` — Exchange, TradingPair, ExchangeId, Timeframe, IndicatorConfig, DetectedPattern, ChartState, UserPreferences, Drawing, DrawingToolType are all defined there.

## Stores to create

**chartStore.ts — Active chart state:**
```typescript
interface ChartStore {
  // Current selection
  exchangeId: ExchangeId;
  pair: string;
  timeframe: Timeframe;

  // Indicators
  indicators: IndicatorConfig[];
  addIndicator: (config: IndicatorConfig) => void;
  removeIndicator: (type: string) => void;
  updateIndicator: (type: string, params: Partial<IndicatorConfig>) => void;

  // SL/TP
  stopLossPrice: number | null;
  takeProfitPrice: number | null;
  setStopLoss: (price: number | null) => void;
  setTakeProfit: (price: number | null) => void;

  // Actions
  setExchange: (id: ExchangeId) => void;
  setPair: (pair: string) => void;
  setTimeframe: (tf: Timeframe) => void;

  // Serialization
  toChartState: () => ChartState;
  fromChartState: (state: ChartState) => void;
}
```

**drawingStore.ts — Drawing tool state (NEW — did not exist in Highcharts plan):**
```typescript
interface DrawingStore {
  // Active tool
  activeToolType: DrawingToolType | null;
  setActiveTool: (type: DrawingToolType | null) => void;

  // Drawings
  drawings: Drawing[];
  addDrawing: (drawing: Drawing) => void;
  updateDrawing: (id: string, updates: Partial<Drawing>) => void;
  removeDrawing: (id: string) => void;
  clearAllDrawings: () => void;

  // Selection
  selectedDrawingId: string | null;
  selectDrawing: (id: string | null) => void;

  // Serialization
  toDrawingState: () => Drawing[];
  fromDrawingState: (drawings: Drawing[]) => void;
}
```

**aiStore.ts — AI overlay state:**
```typescript
interface AIStore {
  patterns: DetectedPattern[];
  isLoading: boolean;
  error: string | null;
  showOverlay: boolean;
  showConfidenceMap: boolean;
  showProjections: boolean;
  selectedPatternId: string | null;

  setPatterns: (patterns: DetectedPattern[]) => void;
  addPattern: (pattern: DetectedPattern) => void;
  clearPatterns: () => void;
  toggleOverlay: () => void;
  toggleConfidenceMap: () => void;
  toggleProjections: () => void;
  selectPattern: (id: string | null) => void;
}
```

**userStore.ts — User preferences and auth state:**
```typescript
interface UserStore {
  isAuthenticated: boolean;
  userId: string | null;
  subscriptionTier: 'free' | 'pro' | 'ai' | null;
  preferences: UserPreferences;

  setAuth: (userId: string, tier: string) => void;
  clearAuth: () => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  addFavoritePair: (pair: string) => void;
  removeFavoritePair: (pair: string) => void;
  setTheme: (theme: 'dark' | 'light') => void;
}
```

**uiStore.ts — UI state:**
```typescript
interface UIStore {
  sidebarOpen: boolean;
  activeSidePanel: 'indicators' | 'ai-insights' | 'orders' | null;
  isFullscreen: boolean;

  toggleSidebar: () => void;
  setSidePanel: (panel: string | null) => void;
  setFullscreen: (fs: boolean) => void;
}
```

Note: `activeDrawingTool` moved to the dedicated `drawingStore`. The `uiStore` no longer tracks drawing tool state.

## Implementation requirements

- Use `zustand` with the `immer` middleware for immutable updates
- Use `persist` middleware on `userStore` with `idb-keyval` storage adapter for IndexedDB persistence
- Use `persist` middleware on `chartStore` and `drawingStore` for local state caching
- Do NOT persist `aiStore` or `uiStore` — these are session-only
- Create a `devtools` middleware wrapper in dev mode
- Export all stores from the package index
```

---

## WP-04: AI Overlay Primitives

**Dependencies:** WP-01, WP-02 (pattern types)
**Parallel with:** WP-02, WP-03, WP-05, WP-06, WP-08, WP-09
**Estimated effort:** 2.5 days

### Claude Code Prompt

```
You are building the AI overlay primitives for HopCharts using the Lightweight Charts v5 plugin system. Work in `packages/chart/src/plugins/ai/`.

## Context — KEY CHANGE FROM PREVIOUS PLAN

The previous architecture used a separate HTML5 Canvas element positioned absolutely over a Highcharts chart, with a custom coordinate bridge. That is GONE.

Lightweight Charts v5 has a native plugin system. AI overlays are now **series primitives** — first-class rendering plugins that draw directly on the chart's own Canvas. They automatically re-render when the chart zooms/pans/resizes. No separate coordinate bridge needed.

## How LWC primitives work

A series primitive implements `ISeriesPrimitive<Time>`:
- `paneViews()` returns an array of `ISeriesPrimitivePaneView` objects
- Each pane view has a `renderer()` method returning a `ISeriesPrimitivePaneRenderer`
- The renderer's `draw()` method receives a `CanvasRenderingTarget2D` and can draw anything
- A `PriceToCoordinateConverter` is provided for converting prices to y-coordinates
- Time-to-x conversion is available via the chart's time scale API

Usage:
```typescript
const candleSeries = chart.addSeries(CandlestickSeries, options);
const aiPrimitive = new AIPatternPrimitive();
candleSeries.attachPrimitive(aiPrimitive);
```

## Types available

Import from `@hopcharts/core`:
```typescript
import type { DetectedPattern, PatternPoint, PatternType } from '@hopcharts/core';
```

## Files to create

**AIPatternPrimitive.ts — Main primitive for pattern region rendering:**

Implements `ISeriesPrimitive<Time>`. This is the primary AI overlay.

- Receives `DetectedPattern[]` via an `updatePatterns()` method
- Calls `requestUpdate()` to trigger re-render when patterns change
- `paneViews()` returns a single `AIPatternPaneView`

The pane view's renderer:
1. For each detected pattern:
   a. Convert pattern `region` points (timestamp, price) → canvas pixels
   b. Draw a filled polygon with gradient fill
   c. Gradient color based on pattern type (bullish/bearish) — extract colors from Chart Design theme system
   d. Opacity scales with `confidence` value — extract opacity range from Chart Design theme
   e. Draw dashed outline around the region
   f. Draw pattern label (type name + confidence %) near the top

**AIProjectionPrimitive.ts — Trajectory projection renderer:**

Separate primitive for trajectory projections:
- Takes `DetectedPattern[]` that have `projection` data
- Draws bezier curves from last pattern point to projected target
- Dashed line style, color matches pattern type (bullish/bearish — colors from Chart Design theme)
- Draws target marker (horizontal dashed line) at target price
- Draws label with target price

**AIHeatmapPrimitive.ts — Confidence heat map renderer:**

Separate primitive for subtle heat map background:
- Takes `DetectedPattern[]`
- For each pattern, creates a soft radial gradient centered on the pattern region
- Color matches pattern type (bullish/bearish — colors from Chart Design theme), intensity based on confidence
- Very low opacity — subtle background layer (exact opacity values from Chart Design theme)
- Set `zOrder: 'bottom'` to render behind other elements

**types.ts — Shared types for AI primitives:**
```typescript
interface AIOverlayTheme {
  bullishFill: string;
  bearishFill: string;
  bullishStroke: string;
  bearishStroke: string;
  labelColor: string;
  labelBackground: string;
  projectionColor: string;
}

// Extract actual color values from Chart Design/src/app/components/theme-context.tsx
// and the candlestick-chart.tsx color scheme. Build DARK_AI_THEME and LIGHT_AI_THEME
// from these design tokens — do NOT hardcode colors here.
const DARK_AI_THEME: AIOverlayTheme;
const LIGHT_AI_THEME: AIOverlayTheme;
```

## Performance requirements

- Render must complete within 16ms (60 FPS target) for up to 20 simultaneous patterns
- Use `requestAnimationFrame` scheduling via `requestUpdate()` — never render synchronously
- Cache gradient objects — don't recreate on every frame
- Skip rendering for patterns outside the visible range

## Key differences from previous plan

1. NO `<canvas>` element — rendering happens on LWC's own canvas
2. NO `pointer-events: none` — primitives can optionally handle mouse events
3. NO CoordinateBridge class — use `PriceToCoordinateConverter` passed to renderer + chart time scale
4. NO event listener subscription for redraw/afterSetExtremes — LWC calls render automatically
5. NO ResizeObserver — LWC handles canvas sizing

This is MUCH simpler than the previous dual-layer approach.
```

---

## WP-05: Custom Toolbar (React)

**Dependencies:** WP-01
**Parallel with:** WP-02, WP-03, WP-04, WP-06, WP-08, WP-09
**Estimated effort:** 2 days

### Claude Code Prompt

```
You are building the custom toolbar component for HopCharts. Work in `packages/chart/src/Toolbar/`.

## Design Reference

Before building any components, read the design implementation in `Chart Design/src/app/components/`. The following files define the exact layout, styling, and component structure:
- `top-bar.tsx` — Main toolbar layout (exchange, pair, timeframe, tools)
- `tools-sidebar.tsx` — Vertical drawing tools sidebar
- `exchange-selector.tsx` — Exchange dropdown
- `currency-selector.tsx` — Pair/currency search dropdown
- `timeframe-selector.tsx` — Timeframe button group
- `chart-type-selector.tsx` — Chart type dropdown (candles, line, etc.)
- `indicators-panel.tsx` — Indicator selection panel
- `tool-menu.tsx` — Drawing tool settings popup
- `chart-expanded-bar.tsx` — Expanded chart controls
- `mobile-bottom-bar.tsx` — Mobile responsive bottom bar

Match the design exactly — colors, spacing, icons, hover states, dark/light variants are all defined there. Use the same shadcn/ui primitives the design uses.

## Context — KEY CHANGE FROM PREVIOUS PLAN

The previous plan used Highcharts Stock Tools, where toolbar buttons had specific CSS class names (like `highcharts-fibonacci`, `highcharts-circle-annotation`) and Highcharts automatically bound click events to drawing tools. That mechanism NO LONGER EXISTS.

With Lightweight Charts, there is no built-in toolbar or class-based binding. The toolbar is a pure React component. When a user clicks a drawing tool button, we:
1. Update `drawingStore.setActiveTool(toolType)`
2. The chart component reads the active tool from the store
3. Mouse clicks on the chart are interpreted based on the active tool
4. The drawing primitive is created programmatically

The toolbar is purely a React UI — it has no magic binding to the charting library.

## Components to create

**Toolbar.tsx — Main toolbar container:**
- Horizontal bar at the top of the chart
- Contains: ExchangeSelector, PairSelector, TimeframeSelector, DrawingToolsMenu, IndicatorMenu, AIToggle, FullscreenButton
- Responsive: collapses tools into a hamburger menu on small screens
- No `bindingsClassName` wrapper needed (that was Highcharts-specific)

**ExchangeSelector.tsx:**
- Dropdown listing available exchanges
- Shows exchange logo + name
- On select, updates `chartStore.setExchange(id)`
- Uses `useExchanges()` query hook for data

**PairSelector.tsx:**
- Searchable dropdown/combobox
- Shows trading pairs for the selected exchange
- Search filters by symbol (typing "BTC" shows all BTC pairs)
- Star icon to toggle favorites (stored in userStore)
- Shows favorite pairs at the top
- On select, updates `chartStore.setPair(pair)`
- Uses `usePairs(exchangeId)` query hook

**TimeframeSelector.tsx:**
- Button group: 1m | 5m | 15m | 1h | 4h | 1D | 1W
- Active timeframe highlighted
- On click, updates `chartStore.setTimeframe(tf)`

**RangeSelector.tsx — NEW (replaces Highcharts built-in range selector):**
- Button group: 1D | 1W | 1M | 3M | 6M | 1Y | All
- On click, calls chart's `timeScale().setVisibleRange()` with calculated time range
- This was built into Highcharts; now it's a React component that talks to LWC API

**DrawingToolsMenu.tsx:**
- Dropdown menu with drawing tool groups:
  - Lines: Trendline, Horizontal Line, Vertical Line, Arrow
  - Fibonacci: Fibonacci Retracement
  - Channels: Parallel Channel
  - Shapes: Rectangle
  - Labels: Text Label
  - Measure: Measure XY
- Each menu item updates `drawingStore.setActiveTool(toolType)`
- Active tool gets highlighted state
- "Delete selected" and "Clear all" buttons at bottom
- NO Highcharts CSS classes — purely React state management

**IndicatorMenu.tsx:**
- Dropdown listing available indicators
- Search filter
- Grouped by category: Trend (SMA, EMA), Momentum (RSI, MACD, Stochastic), Volatility (BB, ATR), Volume (OBV)
- On select, calls `chartStore.addIndicator()`
- Shows currently active indicators with remove button
- Note: indicators are now calculated client-side and rendered as LWC series — the menu just manages the config

**AIToggle.tsx:**
- Toggle button to show/hide AI overlay
- When expanded, shows sub-toggles: Patterns, Confidence Map, Projections
- Connected to `aiStore` (toggleOverlay, toggleConfidenceMap, toggleProjections)
- Grayed out / locked icon if user subscription doesn't include AI tier

**FullscreenButton.tsx:**
- Toggles fullscreen mode via browser Fullscreen API (`document.documentElement.requestFullscreen()`)
- No Highcharts class binding — pure browser API
```

---

## WP-06: Drawing Tools Engine (NEW — did not exist in Highcharts plan)

**Dependencies:** WP-01, WP-02 (drawing types)
**Parallel with:** WP-03, WP-04, WP-05, WP-08, WP-09
**Estimated effort:** 5 days

### Claude Code Prompt

```
You are building the drawing tools engine for HopCharts using Lightweight Charts v5 primitives. Work in `packages/chart/src/plugins/drawings/`.

## Context — ENTIRELY NEW WORK PACKAGE

The previous plan used Highcharts Stock Tools, which included 20+ drawing tools out of the box: trendlines, Fibonacci, pitchfork, Elliott waves, parallel channels, etc. Users clicked toolbar buttons with specific CSS classes, and Highcharts handled all interaction logic.

Lightweight Charts has NO built-in drawing tools. We must build them as Canvas primitives with mouse interaction. This is the biggest engineering investment caused by the library switch.

## Design Reference

The design for drawing tools is fully implemented in `Chart Design/src/app/components/`:
- `tool-menu.tsx` — Drawing tool settings popup (color, line width, style options)
- `text-settings-panel.tsx` — Text label settings
- `date-price-range-settings.tsx` — Date/price range tool settings
- `tools-sidebar.tsx` — Tool selection sidebar with all tool icons and grouping

The `Chart Design/src/imports/` folder contains the visual design for each drawing tool's on-chart appearance:
- `FibRetracement.tsx`, `FibExtension.tsx` — Fibonacci visual design
- `HorizontalLine.tsx` — Horizontal line design
- `Channel.tsx` — Channel drawing design
- `Ruler.tsx` — Measure/ruler tool design
- `LongPosition.tsx`, `ShortPosition.tsx` — Position drawings
- `Projection.tsx` — Projection line design
- `Text.tsx` — Text label design

Read these files to understand the exact visual style (colors, line widths, label positioning, anchor point handles) before implementing the LWC primitives.

## Architecture

**DrawingManager (manager.ts):**
Central coordinator for all drawing tools:
```typescript
class DrawingManager {
  private chart: IChartApi;
  private series: ISeriesApi<'Candlestick'>;
  private activePrimitives: Map<string, ISeriesPrimitive<Time>>;
  private drawingStore: DrawingStore;

  // Tool activation (from toolbar)
  setActiveTool(type: DrawingToolType | null): void;

  // Mouse event handlers (connected to chart container)
  handleMouseDown(event: MouseEvent): void;
  handleMouseMove(event: MouseEvent): void;
  handleMouseUp(event: MouseEvent): void;

  // Drawing CRUD
  addDrawing(drawing: Drawing): void;
  updateDrawing(id: string, updates: Partial<Drawing>): void;
  removeDrawing(id: string): void;

  // State
  loadDrawings(drawings: Drawing[]): void;
  getDrawings(): Drawing[];
}
```

**Interaction flow:**
1. User selects tool in toolbar → `drawingStore.setActiveTool('trendline')`
2. DrawingManager reads active tool from store
3. User clicks on chart → `handleMouseDown` converts pixel to (time, price) using `coordinateToTime()` and `coordinateToPrice()`
4. First click sets anchor point 1, mouse move shows preview, second click sets anchor point 2
5. DrawingManager creates a Drawing object, adds to store, creates a primitive and attaches to series
6. Drawing can be selected (click), dragged (click + drag anchor), or deleted (keyboard / toolbar)

**Mouse event setup:**
The chart container div receives mouse events. DrawingManager converts pixel coordinates to data coordinates:
```typescript
const time = chart.timeScale().coordinateToTime(event.offsetX);
const price = series.coordinateToPrice(event.offsetY);
```

## Drawing primitives to implement (MVP)

**TrendlinePrimitive.ts:**
- Two anchor points (time, price)
- Renders a line between them
- Anchor points shown as small circles when selected
- Draggable: move individual anchors or the whole line
- Style: configurable color, width, line style (solid/dashed/dotted)

**HorizontalLinePrimitive.ts:**
- Single price level
- Extends across full chart width
- Renders via price line API: `series.createPriceLine()`
- Draggable vertically
- Label shows price value

**VerticalLinePrimitive.ts:**
- Single time coordinate
- Extends full chart height
- Custom primitive drawing a vertical line at the time coordinate

## Drawing primitives to implement (Phase 2)

**FibonacciPrimitive.ts:**
- Two anchor points defining the range (high, low)
- Renders horizontal lines at standard Fibonacci levels: 0%, 23.6%, 38.2%, 50%, 61.8%, 78.6%, 100%
- Optional extension levels: 127.2%, 161.8%, 261.8%
- Fill between levels with alternating transparency
- Labels on each level showing price and percentage
- Most complex drawing tool — plan 1.5 days for this alone

**ParallelChannelPrimitive.ts:**
- Three anchor points: two for primary line, third for channel width
- Renders two parallel lines with optional fill between them
- Both lines draggable

**RectanglePrimitive.ts:**
- Two anchor points (opposite corners)
- Renders filled rectangle with stroke
- Draggable corners and edges

**ArrowPrimitive.ts:**
- Same as trendline but with arrowhead at end point
- Arrowhead drawn as a small triangle

**MeasurePrimitive.ts:**
- Two anchor points
- Shows: price difference, percentage change, bar count, time difference
- Dashed rectangle outline connecting the two points

**TextLabelPrimitive.ts:**
- Single anchor point + text string
- Renders text at the specified chart location
- Click to edit text

## Shared drawing infrastructure

**InteractionHandler.ts:**
- Hit-testing: detect if a mouse click is near a drawing or its anchor points
- Selection: highlight selected drawing, show anchor handles
- Dragging: update anchor coordinates on mouse move, call `requestUpdate()`
- Keyboard: Delete key removes selected drawing, Escape cancels active tool

**DrawingSerializer.ts:**
- Serialize drawings to JSON for persistence (to Zustand store and backend)
- Deserialize and recreate primitives on chart load

## Performance
- Keep primitive count reasonable (< 50 active drawings)
- Use spatial indexing (simple grid) for hit-testing efficiency
- Batch `requestUpdate()` calls during drag operations

## Do NOT
- Do not implement pitchfork or Elliott waves yet (Phase 3)
- Do not build a freehand drawing tool
- Do not handle multi-chart drawing synchronization
```

---

## WP-07: Lightweight Charts Chart Component

**Dependencies:** WP-02, WP-03, WP-04, WP-05, WP-06 (integrates all previous packages)
**Parallel with:** Nothing — this is the integration point
**Estimated effort:** 3.5 days

### Claude Code Prompt

```
You are building the main HopChart component that integrates Lightweight Charts v5 with technical indicators, drawing tools, AI overlay primitives, and the custom toolbar. Work in `packages/chart/src/`.

## Context — KEY DIFFERENCES FROM HIGHCHARTS PLAN

1. No Highcharts module initialization sequence — just `createChart()`
2. No `highcharts-react-official` wrapper — we manage the chart lifecycle manually in a useEffect
3. Indicators are calculated client-side using `indicatorts` library and rendered as LWC series
4. Drawing tools are custom primitives (from WP-06) managed by DrawingManager
5. AI overlays are series primitives (from WP-04) attached directly to the candlestick series
6. SL/TP uses LWC price lines (`series.createPriceLine()`) instead of Highcharts plotLines
7. Multi-pane for oscillators uses LWC v5 `chart.addPane()` API
8. No navigator bar — range control via React buttons calling `timeScale().setVisibleRange()`

## Design Reference

The chart component design is in `Chart Design/src/app/components/`:
- `candlestick-chart.tsx` — Main chart area layout and candle rendering
- `chart-navigation.tsx` — Bottom chart navigation (range selector)
- `footer-bar.tsx` — Footer with zoom controls, chart info
- `bb-indicator.tsx`, `abands-indicator.tsx` — Indicator overlay styling
- `atr-indicator-pane.tsx`, `apo-indicator-pane.tsx`, etc. — Sub-pane indicator styling

Match the chart container layout, padding, and the indicator pane appearance from the design.

## Files to create

**config/chartOptions.ts — Lightweight Charts default configuration:**
```typescript
import type { ChartOptions, DeepPartial } from 'lightweight-charts';

// Extract all color values from Chart Design/src/app/components/theme-context.tsx
// and candlestick-chart.tsx. Map the design's dark/light theme colors to LWC options.
// Do NOT hardcode hex values — derive them from the Chart Design project.

export function getDefaultOptions(theme: 'dark' | 'light'): DeepPartial<ChartOptions> {
  const colors = getChartColors(theme); // Build from Chart Design theme tokens

  return {
    layout: {
      background: { type: ColorType.Solid, color: colors.background },
      textColor: colors.text,
    },
    grid: {
      vertLines: { color: colors.gridLine },
      horzLines: { color: colors.gridLine },
    },
    crosshair: {
      mode: CrosshairMode.Normal,
    },
    timeScale: {
      borderColor: colors.border,
      timeVisible: true,
      secondsVisible: false,
    },
    rightPriceScale: {
      borderColor: colors.border,
    },
  };
}
```

**config/seriesOptions.ts — Default series configurations:**
```typescript
// Extract candlestick up/down colors from Chart Design/src/app/components/candlestick-chart.tsx
// and the theme system. Do NOT hardcode hex values.

export function getCandlestickOptions(theme: 'dark' | 'light') {
  const colors = getChartColors(theme); // From Chart Design theme tokens
  return {
    upColor: colors.candleUp,
    downColor: colors.candleDown,
    borderUpColor: colors.candleUp,
    borderDownColor: colors.candleDown,
    wickUpColor: colors.candleUp,
    wickDownColor: colors.candleDown,
  };
}

export function getVolumeOptions(theme: 'dark' | 'light') {
  return {
    priceFormat: { type: 'volume' },
    priceScaleId: 'volume',
    // Volume on overlay price scale, not separate pane
  };
}
```

**HopChart.tsx — Main component:**
```typescript
interface HopChartProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  initialExchange?: string;
  initialPair?: string;
  initialTimeframe?: Timeframe;
  showToolbar?: boolean;
  showAIOverlay?: boolean;
  readOnly?: boolean;
}
```

Implementation:
1. Renders the Toolbar component (from WP-05) at the top
2. Renders a container div with ref for Lightweight Charts
3. In useEffect: `createChart(containerRef.current, getDefaultOptions(theme))`
4. Creates candlestick series: `chart.addSeries(CandlestickSeries, candlestickOptions)`
5. Creates volume series: `chart.addSeries(HistogramSeries, volumeOptions)` on the same pane with separate price scale
6. Gets current exchange/pair/timeframe from `chartStore`
7. Fetches OHLCV data via `useOHLCV()` hook
8. When data arrives, converts to LWC format using `toLWCCandlestickData()` and sets series data
9. When `chartStore.indicators` changes, calls indicator engine to calculate + render
10. When `chartStore.stopLossPrice` or `takeProfitPrice` changes, updates price lines
11. Initializes DrawingManager (from WP-06) with chart + series references
12. Attaches AI primitives (from WP-04) to the candlestick series
13. Handles chart resize via ResizeObserver calling `chart.resize(width, height)`
14. Cleanup on unmount: `chart.remove()`

**hooks/useChart.ts:**
- Manages the LWC chart instance lifecycle (create on mount, destroy on unmount)
- Returns `{ chartRef, seriesRef, chartApi }`
- Handles container ref and ResizeObserver
- Provides `applyTheme(theme)` that calls `chart.applyOptions(getDefaultOptions(theme))`

**hooks/useIndicators.ts — Technical indicator engine:**
```typescript
export function useIndicators(
  chart: IChartApi,
  mainSeries: ISeriesApi<'Candlestick'>,
  ohlcvData: OHLCV[],
  indicators: IndicatorConfig[],
)
```
- When indicators config changes, calculates values using `indicatorts` library
- Creates/removes LWC series for each indicator:
  - Overlay indicators (SMA, EMA, BB): Line series on main pane
  - Oscillators (RSI, MACD): Line/Histogram series on sub-panes via `chart.addPane()`
- Manages sub-pane lifecycle: creates pane when first oscillator added, removes when last removed
- Updates indicator data when OHLCV data changes (new candles)
- Returns `{ activeSeries, addIndicator, removeIndicator }`

**hooks/useDrawings.ts:**
- Creates and manages DrawingManager instance
- Connects DrawingManager to chart + series
- Syncs with `drawingStore` (load saved drawings, save changes)
- Returns `{ drawingManager }`

**hooks/useAIOverlay.ts:**
- Creates AI primitives (pattern, projection, heatmap) and attaches to series
- Reads from `aiStore` for visibility toggles
- Updates primitives when pattern data changes
- Returns `{ isActive }`

**hooks/usePriceLines.ts — SL/TP price lines:**
```typescript
export function usePriceLines(
  series: ISeriesApi<'Candlestick'>,
  stopLossPrice: number | null,
  takeProfitPrice: number | null,
)
```
- Creates/removes price lines when SL/TP prices change
- SL line: dashed, label showing price + % from current (color from Chart Design theme — loss/negative color)
- TP line: dashed, label showing price + % from current (color from Chart Design theme — profit/positive color)
- Wraps in draggable primitive for drag-to-adjust

## Chart initialization sequence

```typescript
// 1. Create chart
const chart = createChart(container, getDefaultOptions(theme));

// 2. Create main candlestick series
const candleSeries = chart.addSeries(CandlestickSeries, getCandlestickOptions(theme));

// 3. Create volume series (overlay, separate price scale)
const volumeSeries = chart.addSeries(HistogramSeries, getVolumeOptions(theme));

// 4. Set data
candleSeries.setData(toLWCCandlestickData(ohlcvData));
volumeSeries.setData(toLWCVolumeData(ohlcvData));

// 5. Attach AI primitives
const aiPrimitive = new AIPatternPrimitive();
candleSeries.attachPrimitive(aiPrimitive);

// 6. Initialize drawing manager
const drawingManager = new DrawingManager(chart, candleSeries, drawingStore);

// 7. Initialize indicators
// (handled by useIndicators hook, creates series dynamically)

// 8. Fit content
chart.timeScale().fitContent();
```

## Real-time updates

When a new candle tick arrives via WebSocket:
```typescript
// Update last candle or add new one
candleSeries.update({
  time: tick.timestamp / 1000 as UTCTimestamp,
  open: tick.open,
  high: tick.high,
  low: tick.low,
  close: tick.close,
});
```

## Export from `packages/chart/src/index.ts`

Export `HopChart`, `Toolbar`, and all hooks.
```

---

## WP-08: WebSocket Real-time Client

**Dependencies:** WP-01, WP-02 (types)
**Parallel with:** WP-03, WP-04, WP-05, WP-06, WP-09
**Estimated effort:** 1.5 days

### Claude Code Prompt

```
You are building the WebSocket real-time data client for HopCharts. Work in `packages/core/src/api/websocket.ts` and related files.

## Context

HopCharts connects to a CryptoHopper backend WebSocket endpoint for real-time price ticks. The backend handles the actual exchange WebSocket connections and fans out to HopCharts clients. One server-side connection per trading pair, shared across all clients.

The WebSocket client needs to:
1. Connect to `wss://api.cryptohopper.com/charts/stream` (configurable via env var)
2. Subscribe to specific trading pairs
3. Receive OHLCV tick updates
4. Feed new candles into Lightweight Charts via `series.update()`
5. Auto-reconnect on disconnect with exponential backoff
6. Support subscribing/unsubscribing as the user changes pairs

## Message protocol (JSON-based)

**Client → Server:**
```json
{ "action": "subscribe", "exchange": "binance", "pairs": ["BTCUSDT", "ETHUSDT"] }
{ "action": "unsubscribe", "exchange": "binance", "pairs": ["BTCUSDT"] }
{ "action": "ping" }
```

**Server → Client:**
```json
{ "type": "tick", "exchange": "binance", "pair": "BTCUSDT", "data": { "timestamp": 1709654400000, "open": 65432.10, "high": 65500.00, "low": 65400.00, "close": 65478.50, "volume": 123.45 } }
{ "type": "subscribed", "exchange": "binance", "pairs": ["BTCUSDT"] }
{ "type": "error", "message": "Rate limit exceeded" }
{ "type": "pong" }
```

## Implementation

**WebSocketClient class:**
- Constructor takes URL and optional auth token
- `connect()` / `disconnect()` methods
- `subscribe(exchange, pairs)` / `unsubscribe(exchange, pairs)`
- Event emitter pattern: `on('tick', callback)`, `on('error', callback)`, `on('connected', callback)`, `on('disconnected', callback)`
- Auto-reconnect with exponential backoff (1s, 2s, 4s, 8s, max 30s)
- Heartbeat: send ping every 30s, expect pong within 10s or reconnect
- Queue outgoing messages during reconnect, flush on reconnect
- Track active subscriptions, re-subscribe on reconnect

**useRealtimePrice hook:**
```typescript
export function useRealtimePrice(
  exchangeId: ExchangeId,
  pair: string,
  onTick: (data: OHLCV) => void
): { isConnected: boolean; error: string | null };
```

- Creates/reuses a singleton WebSocketClient
- Manages subscribe/unsubscribe lifecycle based on exchange/pair changes
- Calls `onTick` for each incoming price update
- The HopChart component will use this hook and call `candleSeries.update()` in the onTick callback

**useRealtimePatterns hook (for AI):**
```typescript
export function useRealtimePatterns(
  exchangeId: ExchangeId,
  pair: string,
  timeframe: Timeframe
): void;
```

- Listens for AI pattern detection updates on the WebSocket
- Updates `aiStore.setPatterns()` when new patterns arrive

## Do NOT
- Do not implement the actual server-side WebSocket — just the client
- Do not import Lightweight Charts — the hook returns data, the chart component consumes it
- Do not use Socket.IO — raw WebSocket with the protocol defined above
```

---

## WP-09: OAuth / Auth Flow

**Dependencies:** WP-01
**Parallel with:** WP-02, WP-03, WP-04, WP-05, WP-06, WP-08
**Estimated effort:** 1.5 days

### Claude Code Prompt

```
You are building the CryptoHopper OAuth authentication flow for HopCharts. Work in `packages/core/src/auth/` and `packages/app/src/auth/`.

## Context

HopCharts uses CryptoHopper OAuth 2.0 for authentication. There is no separate user system. The auth flow:

1. User clicks "Login" in HopCharts
2. Redirect to CryptoHopper OAuth consent screen
3. User authorizes → redirect back to HopCharts with auth code
4. HopCharts backend exchanges code for access token
5. Token stored in httpOnly cookie
6. Frontend gets user profile + subscription tier from backend

## Design Reference

The auth UI design is in `Chart Design/src/app/components/auth-modal.tsx`. Match the modal layout, button styles, and flow exactly.

## Files to create

**packages/core/src/auth/auth-client.ts:**
```typescript
export interface AuthUser {
  id: string;
  email: string;
  username: string;
  subscriptionTier: 'free' | 'pro' | 'ai';
  avatarUrl?: string;
}

export const authClient = {
  initiateLogin(redirectUrl?: string): void,
  handleCallback(params: URLSearchParams): Promise<AuthUser>,
  getCurrentUser(): Promise<AuthUser | null>,
  logout(): Promise<void>,
  canAccess(feature: 'drawing_tools' | 'multi_chart' | 'ai_overlay' | 'chart_templates' | 'all_indicators'): boolean,
};
```

Feature access matrix:
- `free`: No drawing tools, no multi-chart, no AI, no templates, max 3 indicators
- `pro`: Drawing tools, multi-chart, templates, all indicators, no AI
- `ai`: Everything

**packages/core/src/auth/useAuth.ts — React hook:**
```typescript
export function useAuth(): {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  canAccess: (feature: string) => boolean;
};
```

**packages/app/src/auth/CallbackPage.tsx:**
- Route: `/auth/callback`
- Extracts `code` and `state` params from URL
- Calls `authClient.handleCallback()`
- On success, redirects to chart page
- On failure, shows error and link to retry

**packages/app/src/auth/LoginButton.tsx:**
- Shows "Login with CryptoHopper" button when not authenticated
- Shows user avatar + dropdown menu when authenticated

**packages/core/src/auth/ProtectedFeature.tsx:**
Wrapper component for gated features.

## Security
- httpOnly cookies only (no localStorage)
- CSRF protection via SameSite=Strict
- OAuth state parameter for callback CSRF prevention
- All token exchange on backend

## Environment variables
- `HOPCHARTS_OAUTH_CLIENT_ID`
- `HOPCHARTS_OAUTH_REDIRECT_URI`
- `HOPCHARTS_API_URL`
```

---

## WP-10: Full App Shell

**Dependencies:** WP-07, WP-09
**Parallel with:** WP-11, WP-12
**Estimated effort:** 2 days

### Claude Code Prompt

```
You are building the full standalone HopCharts application shell. Work in `packages/app/`.

## Design Reference

The complete app layout is designed in `Chart Design/src/app/`:
- `App.tsx` — Full application layout, state management, component composition
- `components/top-bar.tsx` — Header/toolbar
- `components/mobile-bottom-bar.tsx` — Mobile responsive navigation
- `components/save-menu.tsx` — Save/export menu
- `components/share-menu.tsx` — Share menu
- `components/feedback-modal.tsx` — User feedback modal

Read `App.tsx` carefully — it shows how all components are composed together, the layout structure, and the responsive behavior. Replicate this layout but wire it to real data (Zustand stores, TanStack Query hooks, LWC chart) instead of the mock data in the design.

## Routing (React Router v6):
- `/` — Main chart view (default: BTC/USDT on Binance)
- `/auth/callback` — OAuth callback handler
- `/settings` — User settings page
- `/embed` — Minimal chart view for iframe embeds

## Main chart page (/):
- Renders `<HopChart>` full viewport (minus header)
- URL state sync: `/?exchange=binance&pair=BTC/USDT&tf=1h`
- First visit defaults: BTC/USDT on Binance, 1h timeframe

## TanStack Query setup:
- QueryClientProvider wrapping the entire app
- Default options: `staleTime: 30000` (30s), `refetchOnWindowFocus: true`
```

---

## WP-11: Widget (Web Component + iframe)

**Dependencies:** WP-07
**Parallel with:** WP-10, WP-12
**Estimated effort:** 1.5 days

### Claude Code Prompt

```
You are building the embeddable widget wrappers for HopCharts. Work in `packages/widget/`.

## Context — Simpler than Highcharts version

With Highcharts, the widget had to bundle Highcharts CSS (stocktools/gui.css, annotations/popup.css) inside the Shadow DOM. With Lightweight Charts, there is NO library CSS to bundle — LWC renders purely via Canvas. The only CSS is our Tailwind styles for the toolbar and panels.

## Web Component (`src/hop-charts.ts`)

Create a Custom Element `<hop-charts>` with same attributes as before:
- `exchange`, `pair`, `timeframe`, `theme`, `api-key`, `show-toolbar`, `show-ai-overlay`, `height`, `width`

Shadow DOM with React root inside. All interaction via custom events and methods.

## Vite library build

```typescript
build: {
  lib: {
    entry: 'src/hop-charts.ts',
    name: 'HopCharts',
    fileName: 'hopcharts-widget',
    formats: ['iife']
  },
}
```

No Highcharts to externalize or bundle specially. The entire widget is one JS file.

## iframe entry + PostMessage protocol

Same as previous plan — unchanged by library switch.

## Key simplification

No Highcharts CSS to bundle in Shadow DOM. No Highcharts module load-order concerns. No license key validation. Widget bundle is ~205 KB vs ~420 KB with Highcharts.
```

---

## WP-12: Dark/Light Theming

**Dependencies:** WP-07
**Parallel with:** WP-10, WP-11
**Estimated effort:** 1 day

### Claude Code Prompt

```
You are implementing dark/light theme support for HopCharts. Work across packages.

## Design Reference

The theme system is already implemented in `Chart Design/src/app/components/theme-context.tsx`. Read this file to understand the exact theme switching mechanism, CSS variable approach, and color tokens used. The design project demonstrates both dark and light themes across all components — use these as the reference for all color values instead of hardcoding.

## LWC Theming

Extract the exact color values from `Chart Design/src/app/components/theme-context.tsx` and the Tailwind config. Apply these to Lightweight Charts via `chart.applyOptions()` and `series.applyOptions()` to match the design's dark and light modes exactly.

## AI overlay and drawing tool themes

Primitives need theme-aware colors. Pass theme to primitives and call `requestUpdate()` on theme change.

## Theme switching mechanism:
1. `userStore.preferences.theme` is source of truth
2. Toggle `dark` class on `<html>` (Tailwind)
3. Call `chart.applyOptions()` + `series.applyOptions()` (LWC)
4. Update primitive themes (AI overlays, drawings)
5. Create `useTheme()` hook that handles all three
```

---

## WP-13: CryptoHopper Integration

**Dependencies:** WP-10, WP-07
**Parallel with:** WP-14, WP-15
**Estimated effort:** 3 days

### Claude Code Prompt

```
You are building the CryptoHopper trading integration for HopCharts. Work in `packages/chart/src/Panels/` and `packages/core/src/api/`.

## API + UI unchanged from previous plan.

## Chart overlay changes:

**Position overlays:**
- Use LWC price lines (`series.createPriceLine()`) for entry price lines
- P&L label via custom primitive or price line title

**Order history markers:**
- Use LWC series markers (`series.setMarkers()`) for buy/sell markers on chart
- Up-triangle for buys, down-triangle for sells (kleuren: zie Chart Design theme — buy/sell colors)

## Key difference:
Highcharts used plotLines and point markers. LWC uses price lines and series markers — conceptually similar, slightly different API. The trading API types and UI panels are unchanged.
```

---

## WP-14: AI Pattern Service Integration

**Dependencies:** WP-04, WP-07, WP-08
**Parallel with:** WP-13, WP-15
**Estimated effort:** 2 days

### Claude Code Prompt

```
You are connecting the AI pattern detection backend service to the HopCharts frontend. Work across packages.

## Implementation unchanged from previous plan.

Key difference: The AI overlay no longer uses a separate Canvas element. The `AIPatternPrimitive` from WP-04 is already attached to the chart. This WP ensures the data pipeline fills the `aiStore` correctly, and the primitives render automatically.

API endpoints, TanStack Query hooks, WebSocket integration, and AIInsightsPanel are all the same as before.
```

---

## WP-15: Subscription Gating

**Dependencies:** WP-09, WP-10
**Parallel with:** WP-13, WP-14
**Estimated effort:** 1 day

### Claude Code Prompt

```
Same as previous plan. Feature gates and tier definitions are library-agnostic.

One change: DrawingToolsMenu gating now controls our custom drawing tools (LWC primitives) rather than Highcharts Stock Tools. The gate logic is the same — just the underlying feature being gated changed.
```

---

## WP-16: Testing & Visual Regression

**Dependencies:** WP-07
**Parallel with:** WP-13, WP-14, WP-15
**Estimated effort:** 2.5 days

### Claude Code Prompt

```
You are setting up testing infrastructure for HopCharts.

## Changes from Highcharts plan

**Unit tests — NEW:**
- Test indicator calculation engine (SMA, RSI, MACD calculations against known values)
- Test drawing tool serialization/deserialization
- Test DrawingManager interaction logic (mock chart API)

**Component tests — changed:**
- HopChart test: mock `createChart()` from lightweight-charts
- No Highcharts mock needed
- Test that series are created with correct options

**Visual regression — changed:**
- Screenshot comparison tests still use Playwright
- But the chart renders differently (Canvas-native, LWC styling)
- Baseline screenshots must be retaken

**MSW mocks — unchanged.**

## Additional test coverage needed for custom code

Because we're building indicators and drawing tools ourselves (instead of using Highcharts built-ins), we need additional test coverage:
- Unit tests for every indicator calculation (compare against reference implementations)
- Unit tests for drawing tool anchor point calculations (Fibonacci levels, channel geometry)
- Integration test: add indicator → verify series data matches expected calculation
- Integration test: create drawing → save → reload → verify drawing restored correctly
```

---

## WP-17: CI/CD & Deployment

**Dependencies:** WP-01
**Parallel with:** Everything
**Estimated effort:** 1 day

### Claude Code Prompt

```
Same as previous plan but with these changes:

## Environment configuration

`.env.example`:
```
HOPCHARTS_API_URL=https://api.cryptohopper.com
HOPCHARTS_WS_URL=wss://api.cryptohopper.com/charts/stream
HOPCHARTS_OAUTH_CLIENT_ID=
HOPCHARTS_OAUTH_REDIRECT_URI=
```

Note: NO `HIGHCHARTS_LICENSE_KEY` — Lightweight Charts is Apache 2.0, no license key needed.

Everything else (GitHub Actions, Dockerfile, Vercel/Cloudflare deployment, CDN for widget) is unchanged.
```

---

## Summary Table

| WP | Name | Depends On | Parallel With | Effort | Phase |
|----|------|-----------|---------------|--------|-------|
| 01 | Monorepo Scaffold | — | — | 0.5d | A |
| 02 | Core Types & API | 01 | 03,04,05,06,08,09,17 | 1.5d | A |
| 03 | Zustand Stores | 01,02(types) | 02,04,05,06,08,09 | 1.5d | A |
| 04 | AI Overlay Primitives | 01,02(types) | 02,03,05,06,08,09 | 2.5d | A |
| 05 | Custom Toolbar | 01 | 02,03,04,06,08,09 | 2d | A |
| **06** | **Drawing Tools Engine (NEW)** | **01,02(types)** | **03,04,05,08,09** | **5d** | **A** |
| 07 | LWC Chart Component | 02,03,04,05,06 | — | 3.5d | B |
| 08 | WebSocket Client | 01,02(types) | 03,04,05,06,09 | 1.5d | A |
| 09 | OAuth Auth Flow | 01 | 02,03,04,05,06,08 | 1.5d | A |
| 17 | CI/CD | 01 | Everything | 1d | A |
| 10 | App Shell | 07,09 | 11,12 | 2d | C |
| 11 | Widget (WC + iframe) | 07 | 10,12 | 1.5d | C |
| 12 | Dark/Light Theming | 07 | 10,11 | 1d | C |
| 13 | CryptoHopper Intg | 10,07 | 14,15,16 | 3d | D |
| 14 | AI Service Integration | 04,07,08 | 13,15,16 | 2d | D |
| 15 | Subscription Gating | 09,10 | 13,14,16 | 1d | D |
| 16 | Testing & Vis Regr | 07 | 13,14,15 | 2.5d | D |

**Total estimated effort: ~34 developer-days**

vs. ~28 days with Highcharts. The extra ~6 days come from:
- **WP-06 Drawing Tools Engine: +5d** (entirely new — Highcharts had this built-in)
- **WP-03 Stores: +0.5d** (new drawingStore)
- **WP-07 Chart Component: +0.5d** (indicator engine integration, manual LWC lifecycle)
- **WP-16 Testing: +0.5d** (indicator + drawing tool tests)
- **WP-04 AI Overlay: -0.5d** (simpler — no separate Canvas layer, no coordinate bridge)
- **WP-11 Widget: -0.5d** (simpler — no Highcharts CSS bundling)

The ~6 extra days are one-time engineering cost. The ongoing benefits: zero licensing cost, 75% smaller bundle, simpler architecture, full control over every feature.

---

## Developer Schedule (2 developers)

```
Day 1      : WP-01 (both devs)
Day 1-5    : Dev A: WP-06 (Drawing Tools — 5d, critical path)
             Dev B: WP-02 (Types) → WP-04 (AI Prims) → WP-05 (Toolbar)
             (WP-03 Stores + WP-08 WS + WP-09 Auth squeezed into gaps)
             (WP-17 CI/CD by either dev)
Day 6-9    : Both devs: WP-07 (LWC Chart integration — needs all Phase A complete)
Day 10-11  : Dev A: WP-11 (Widget)    Dev B: WP-10 (App Shell) + WP-12 (Theme)
Day 12-15  : Dev A: WP-14 (AI) + WP-16 (Tests)   Dev B: WP-13 (CH Trading) + WP-15 (Gating)
```

**~15 working days with 2 developers. ~3.5 calendar weeks.**

The critical path is WP-06 (Drawing Tools Engine) at 5 days — this is the longest individual work package and blocks Phase B. Starting it on Day 1 with a dedicated developer is essential.
