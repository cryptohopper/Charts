# HopCharts — Technical Plan (v3 — Lightweight Charts)

## Why the Switch: Highcharts → TradingView Lightweight Charts

The previous version of this plan used Highcharts Stock. After evaluation, Lightweight Charts v5 is the better fit for HopCharts. Here's why:

### 1. Licensing eliminates a business risk

Highcharts requires a commercial license. The partner embed model (Web Component / iframe on third-party sites) requires an OEM/SaaS license — pricing is opaque, per-negotiation, and potentially prohibitive. Every conversation with Highcharts sales is a dependency on the roadmap.

Lightweight Charts is Apache 2.0. Free. Embed anywhere. No OEM conversation. No license key in env vars. This alone removes an entire risk category.

### 2. Canvas-native simplifies the AI overlay architecture

The previous plan required a **dual-layer architecture**: Highcharts (SVG + WebGL) for standard charting, plus a separate HTML5 Canvas overlay positioned absolutely on top for AI pattern visualization. The two layers needed a coordinate bridge, synchronized event listeners, and careful pointer-event passthrough.

Lightweight Charts is Canvas-native. The plugin system (primitives + custom series) lets us render AI overlays **directly on the chart's own Canvas** using the same coordinate system. No separate overlay element. No sync bugs. No pointer-event hacks.

### 3. Bundle size drops by ~75%

Highcharts Stock with all modules: ~265 KB gzipped. Lightweight Charts v5: ~35 KB gzipped. For an embeddable widget loaded on partner sites, this matters.

### 4. The trade-off: we must build drawing tools and indicators ourselves

This is the real cost. Highcharts Stock includes 40+ technical indicators, Fibonacci, Elliott waves, pitchfork, trendlines, and a full Stock Tools GUI — all out of the box.

Lightweight Charts includes none of this. We must:
- Calculate all technical indicators ourselves (or use a library like `indicatorts` / `technicalindicators`)
- Build all drawing tools as Canvas primitives via the plugin system
- Build the toolbar interaction logic from scratch (no CSS class binding trick)

This is significant additional development effort. But it's one-time engineering cost vs. ongoing licensing cost and architectural complexity. And the plugin system in v5 is well-designed — community members have already built drawing tool primitives that we can reference or adapt.

---

## Rendering Architecture: Single Canvas + Plugins

```
┌─────────────────────────────────────────────────────┐
│              React UI Layer                          │
│   Toolbar | Exchange/Pair selectors | Side panels    │
├─────────────────────────────────────────────────────┤
│     Lightweight Charts Canvas (Single Surface)       │
│                                                      │
│   Built-in:                                          │
│     Candlesticks, line series, volume histogram,     │
│     price lines, crosshair, time/price scales        │
│                                                      │
│   Via Plugins (Primitives + Custom Series):          │
│     Technical indicators (SMA, RSI, MACD, BB, ...)   │
│     Drawing tools (trendlines, Fibonacci, etc.)      │
│     AI pattern regions, confidence maps, projections │
│     SL/TP draggable lines                            │
│     Order markers, position overlays                 │
│                                                      │
├─────────────────────────────────────────────────────┤
│         Multi-Pane Support (v5)                      │
│   Main pane: Candlesticks + overlays                 │
│   Sub-panes: RSI, MACD, volume, etc.                 │
└─────────────────────────────────────────────────────┘
```

### Why single-surface is better

In the Highcharts plan, the AI overlay was a separate `<canvas>` element with `pointer-events: none`, positioned absolutely over the Highcharts `<div>`. This created:

- A coordinate bridge dependency (translate Highcharts axis coords → Canvas pixels)
- Re-render synchronization on every zoom/pan/resize event
- Potential z-index and stacking issues
- No ability for AI overlays to interact with mouse events (everything passed through)

With Lightweight Charts, AI overlays are **primitives** — first-class citizens in the rendering pipeline. They:

- Use the chart's own coordinate conversion (`priceToCoordinate`, `timeToCoordinate`)
- Automatically re-render when the chart zooms/pans/resizes
- Can optionally handle mouse events (for interactive pattern selection)
- Respect the chart's clipping and stacking order via `zOrder`

### How plugins work in v5

**Series Primitives:** Attached to a specific series. Render on the main pane, price scale, and time scale. Use `series.attachPrimitive(myPrimitive)`.

**Pane Primitives:** Attached to a pane, not a series. Render on the pane canvas. Use `chart.panes()[0].attachPrimitive(myPrimitive)`.

**Custom Series:** Define entirely new series types with custom data structures and rendering. Implement `ICustomSeriesPaneView`. Add via `chart.addSeries(MyCustomSeriesType, options)`.

For HopCharts:
- **AI pattern overlays** → Series Primitives (attached to the candlestick series, render pattern regions/projections)
- **Drawing tools** → Series Primitives with mouse event handling
- **Technical indicators** → Standard series (Line, Histogram) added to main pane or sub-panes, with data calculated client-side
- **SL/TP lines** → Price Lines (`series.createPriceLine()`) — built-in feature, draggable via custom primitive wrapper

### Coordinate conversion

Lightweight Charts exposes coordinate conversion directly on series and time scale:

```typescript
// Price ↔ pixel
const y = series.priceToCoordinate(65000);      // price → y pixel
const price = series.coordinateToPrice(y);       // y pixel → price

// Time ↔ pixel
const x = chart.timeScale().timeToCoordinate(timestamp);  // time → x pixel
const time = chart.timeScale().coordinateToTime(x);        // x pixel → time

// Visible range
const visibleRange = chart.timeScale().getVisibleRange();
const priceRange = series.priceScale().getVisibleRange();  // v5
```

No bridge layer needed. These methods are available inside every primitive's renderer.

---

## Tech Stack

### Core

| Layer | Technology | Purpose |
|---|---|---|
| **Charting** | Lightweight Charts v5 | Candlesticks, line/area/histogram series, price lines, multi-pane |
| **Indicators** | `indicatorts` (or `technicalindicators`) + LWC series | Calculate indicator values, render as Line/Histogram series |
| **Drawing tools** | Custom LWC primitives (Canvas 2D) | Trendlines, Fibonacci, channels, shapes — built as plugins |
| **AI overlay** | Custom LWC series primitives | Pattern regions, confidence maps, projections — rendered on chart canvas |
| **Frontend** | React 18+ (TypeScript) | Application shell, state management, component tree |
| **LWC ↔ React** | Custom wrapper (thin) | No official React wrapper needed — `createChart()` in a `useEffect` |
| **State management** | Zustand | Chart config, user prefs, exchange/pair selection, AI overlay state |
| **Styling** | Tailwind CSS | Utility-first. Figma export compatible. Dark/light themes |
| **Build** | Vite | Fast dev, optimized production, library mode for widget |
| **Auth** | CryptoHopper OAuth 2.0 | No separate user system |
| **API client** | TanStack Query (React Query) | Caching, deduplication, background refetch |

### Data

| Layer | Technology | Purpose |
|---|---|---|
| **REST API** | CryptoHopper backend (proxy) | OHLCV historical data, pair lists, exchange metadata |
| **Real-time** | WebSocket (via CryptoHopper) | Live price ticks |
| **AI inference** | CryptoHopper AI service (backend) | Pattern detection results pushed via WS or polled via REST |
| **Local persistence** | IndexedDB (via idb-keyval) | Offline chart state, indicator configs, drawing data |
| **Server persistence** | CryptoHopper user storage API | Chart layouts, saved templates, favorites |

### Embeddable Widget

| Layer | Technology | Purpose |
|---|---|---|
| **Distribution** | Web Component (Custom Element) wrapping React | `<hop-charts>` tag. Framework-agnostic |
| **Isolation** | Shadow DOM | CSS isolation. No style leaks |
| **Alt distribution** | iframe embed | For partners who can't use Web Components |
| **Bundle** | Vite library mode | Single JS + CSS output. CDN-hostable |

---

## What Highcharts Had That We Must Now Build

This is the honest accounting of what the switch costs in engineering effort.

### Drawing Tools — Must Build from Scratch

Highcharts Stock Tools included ~20 drawing tools out of the box. We must build these as Lightweight Charts primitives:

| Tool | Priority | Complexity | Approach |
|---|---|---|---|
| Trendline (segment) | MVP | Medium | Series primitive with two anchor points, mouse drag interaction |
| Horizontal line | MVP | Low | Price line (built-in) with drag wrapper |
| Vertical line | MVP | Low | Pane primitive at a specific time coordinate |
| Fibonacci Retracement | Phase 2 | High | Series primitive: multiple horizontal levels calculated from two price points |
| Parallel Channel | Phase 2 | Medium | Two parallel trendlines with fill |
| Rectangle | Phase 2 | Medium | Four-corner anchor primitive |
| Pitchfork | Phase 3 | High | Three-point primitive with median + parallel lines |
| Elliott Wave labels | Phase 3 | Medium | Numbered point markers connected by lines |
| Measure tool (XY) | Phase 2 | Medium | Two-point primitive showing price delta + time delta |
| Arrow | Phase 2 | Low | Trendline variant with arrowhead |
| Text / Label | Phase 2 | Low | Fixed-position text primitive |

**Interaction model for drawing tools:**
1. User selects a tool from the toolbar
2. Mouse clicks on the chart set anchor points (click-to-place)
3. Primitives render between anchor points
4. Completed drawings can be selected, dragged, and deleted
5. Drawing state serialized to Zustand store + persisted to backend

We can reference the community drawing tools implementation (GitHub Discussion #1466) as a starting point and adapt to our needs.

### Technical Indicators — Must Calculate + Render

Highcharts included 40+ indicators with built-in calculation. We need:

**Calculation:** Use `indicatorts` npm package (TypeScript, tree-shakeable, well-maintained) or `technicalindicators`. These libraries take OHLCV arrays and return calculated values.

**Rendering:** Each indicator is rendered as a standard Lightweight Charts series:
- **Overlay indicators** (SMA, EMA, Bollinger Bands): Line series on the main pane
- **Oscillators** (RSI, MACD, Stochastic): Line/Histogram series on a separate sub-pane (v5 multi-pane)
- **Volume indicators** (OBV): Histogram on sub-pane

```typescript
// Example: Adding SMA indicator
import { SMA } from 'indicatorts';

const smaValues = SMA.calculate({ period: 20, values: closePrices });
const smaData = smaValues.map((value, i) => ({
  time: candles[i + 19].time,  // SMA starts after `period` candles
  value,
}));

const smaSeries = chart.addSeries(LineSeries, {
  color: '#2196F3',
  lineWidth: 2,
  priceScaleId: '',  // overlay on main price scale
});
smaSeries.setData(smaData);
```

**Multi-pane for oscillators (v5):**
```typescript
// Create a new pane for RSI
const rsiPane = chart.addPane({ height: 150 });
const rsiSeries = rsiPane.addSeries(LineSeries, {
  color: '#ff9800',
  priceScaleId: 'rsi',
});
rsiSeries.setData(rsiData);
```

### Priority indicator list

| Indicator | Type | Phase | Render as |
|---|---|---|---|
| SMA | Overlay | MVP | Line series, main pane |
| EMA | Overlay | MVP | Line series, main pane |
| RSI | Oscillator | MVP | Line series, sub-pane |
| MACD | Oscillator | MVP | Line + Histogram, sub-pane |
| Bollinger Bands | Overlay | MVP | 3x Line series (upper/middle/lower), main pane |
| Stochastic | Oscillator | Phase 2 | 2x Line series, sub-pane |
| ATR | Oscillator | Phase 2 | Line series, sub-pane |
| ADX | Oscillator | Phase 2 | Line series, sub-pane |
| CCI | Oscillator | Phase 2 | Line series, sub-pane |
| OBV | Volume | Phase 2 | Histogram, sub-pane |
| Volume Profile | Custom | Phase 2 | Custom series primitive (horizontal histogram) |
| Ichimoku | Overlay | Phase 3 | Multiple line series + fill areas |
| VWAP | Overlay | Phase 3 | Line series, main pane |
| SuperTrend | Overlay | Phase 3 | Line series with color change |

### Other Highcharts Features We Lose

| Feature | Highcharts | Lightweight Charts Equivalent |
|---|---|---|
| Navigator bar (mini-chart at bottom) | Built-in | Not available — use time scale range buttons instead |
| Range selector (1D, 1W, 1M buttons) | Built-in | Must build as React UI that calls `chart.timeScale().setVisibleRange()` |
| Scrollbar | Built-in | Not available — scroll via mouse wheel / touch drag (built-in) |
| HeikinAshi candles | Built-in module | Calculate ourselves, render as Candlestick series with transformed OHLCV |
| Hollow Candlestick | Built-in module | Custom renderer or standard candlestick with style options |
| Chart export (PNG, SVG) | Built-in module | `chart.takeScreenshot()` returns a canvas → `toBlob()` for PNG. No SVG (canvas-native). |
| Drag-panes (resizable) | Built-in module | v5 multi-pane exists but resizable pane handles must be custom-built |
| Data grouping (auto-aggregate candles) | Built-in | Must implement ourselves or request pre-aggregated data from backend |

---

## AI Overlay Architecture (Simplified)

With Lightweight Charts, the AI overlay is no longer a separate layer. It's a set of **series primitives** attached to the candlestick series.

```typescript
// packages/chart/src/plugins/ai/AIPatternPrimitive.ts

class AIPatternPrimitive implements ISeriesPrimitive<Time> {
  private _patterns: DetectedPattern[] = [];

  updatePatterns(patterns: DetectedPattern[]) {
    this._patterns = patterns;
    this.requestUpdate();  // triggers re-render
  }

  paneViews() {
    return [new AIPatternPaneView(this._patterns)];
  }
}

class AIPatternPaneView implements ISeriesPrimitivePaneView {
  renderer(): ISeriesPrimitivePaneRenderer {
    return new AIPatternRenderer(this._patterns);
  }
}

class AIPatternRenderer implements ISeriesPrimitivePaneRenderer {
  draw(target: CanvasRenderingTarget2D, priceConverter: PriceToCoordinateConverter) {
    const ctx = target.useBitmapCoordinateSpace(({ context, horizontalPixelRatio, verticalPixelRatio }) => {
      for (const pattern of this._patterns) {
        // Convert pattern points to canvas coordinates
        // Draw filled polygon, gradient, labels
        // priceConverter converts price → y coordinate
        // timeToCoordinate converts timestamp → x coordinate
      }
    });
  }
}

// Attach to chart:
const candleSeries = chart.addSeries(CandlestickSeries, options);
const aiPrimitive = new AIPatternPrimitive();
candleSeries.attachPrimitive(aiPrimitive);

// When AI data arrives:
aiPrimitive.updatePatterns(newPatterns);
```

Benefits over the previous dual-layer approach:
- **Zero sync code** — the primitive re-renders automatically when the chart updates
- **Coordinate conversion provided** — `PriceToCoordinateConverter` is passed directly to the renderer
- **Can handle mouse events** — primitives can optionally intercept clicks for pattern selection
- **Proper z-ordering** — `zOrder` controls whether AI overlays render above or below other elements

---

## Visual Stop-Loss / Take-Profit

Lightweight Charts has built-in **price lines** — horizontal lines at specific price levels with labels. These are actually simpler than the Highcharts approach:

```typescript
const slLine = candleSeries.createPriceLine({
  price: 64000,
  color: '#ef4444',
  lineWidth: 2,
  lineStyle: LineStyle.Dashed,
  axisLabelVisible: true,
  title: 'SL: $64,000 (-2.1%)',
});

const tpLine = candleSeries.createPriceLine({
  price: 68000,
  color: '#22c55e',
  lineWidth: 2,
  lineStyle: LineStyle.Dashed,
  axisLabelVisible: true,
  title: 'TP: $68,000 (+4.0%)',
});

// Update price:
slLine.applyOptions({ price: 63500, title: 'SL: $63,500 (-2.8%)' });
```

For **draggable** SL/TP lines, we wrap price lines in a custom primitive that handles mouse drag events and updates the line price on drag.

---

## Widget Architecture

```
<hop-charts
  exchange="binance"
  pair="BTC/USDT"
  timeframe="1h"
  theme="dark"
  api-key="partner-key-123"
  show-toolbar="true"
  show-ai-overlay="true"
>
</hop-charts>
```

Internal structure:

```
┌─ <hop-charts> (Custom Element) ─────────────────────────┐
│  ┌─ Shadow DOM ──────────────────────────────────────┐   │
│  │                                                    │   │
│  │  ┌─ React Root ────────────────────────────────┐  │   │
│  │  │                                              │  │   │
│  │  │  ┌─ Toolbar (custom React) ──────────────┐  │  │   │
│  │  │  │  Exchange | Pair | Timeframe | Tools   │  │  │   │
│  │  │  └────────────────────────────────────────┘  │  │   │
│  │  │                                              │  │   │
│  │  │  ┌─ Chart Container ──────────────────────┐  │  │   │
│  │  │  │                                        │  │  │   │
│  │  │  │  ┌─ Lightweight Charts Canvas ───────┐ │  │  │   │
│  │  │  │  │  Candles + Indicators + Drawings   │ │  │  │   │
│  │  │  │  │  AI overlays (as primitives)       │ │  │  │   │
│  │  │  │  │  SL/TP price lines                 │ │  │  │   │
│  │  │  │  └───────────────────────────────────┘ │  │  │   │
│  │  │  │                                        │  │  │   │
│  │  │  │  ┌─ Sub-panes (RSI, MACD, etc.) ────┐ │  │  │   │
│  │  │  │  │  Lightweight Charts sub-panes      │ │  │  │   │
│  │  │  │  └───────────────────────────────────┘ │  │  │   │
│  │  │  │                                        │  │  │   │
│  │  │  └────────────────────────────────────────┘  │  │   │
│  │  │                                              │  │   │
│  │  │  ┌─ Side Panels ─────────────────────────┐  │  │   │
│  │  │  │  Indicator config | AI insights | Orders│ │  │   │
│  │  │  └────────────────────────────────────────┘  │  │   │
│  │  │                                              │  │   │
│  │  └──────────────────────────────────────────────┘  │   │
│  └────────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────┘
```

Note: No separate Canvas overlay element. Everything renders on the Lightweight Charts canvas. Widget is simpler: no Highcharts CSS to bundle (Stock Tools GUI CSS, annotations popup CSS), no Highcharts module load-order concerns.

### Embed modes

**Mode 1: Web Component** — `<script src="https://cdn.hopcharts.com/widget.js">` + `<hop-charts>`. Shadow DOM isolates CSS. Custom events + attribute changes for communication.

**Mode 2: iframe** — `<iframe src="https://charts.hopcharts.com/embed?exchange=binance&pair=BTC/USDT">`. PostMessage API for parent↔widget communication.

**Mode 3: React import** — `import { HopChart } from '@cryptohopper/hopcharts'`. Direct component. Full prop/callback API. For CryptoHopper internal use.

---

## Data Flow

```
Exchange APIs (Binance, Coinbase, Kraken, KuCoin, ...)
     │
     ▼
CryptoHopper Backend (proxy + normalization layer)
  ├── REST: /api/charts/ohlcv?exchange=binance&pair=BTCUSDT&tf=1h&from=...&to=...
  ├── REST: /api/charts/pairs?exchange=binance
  ├── REST: /api/charts/exchanges
  ├── WS:   wss://api.cryptohopper.com/charts/stream?pairs=BTCUSDT,ETHUSDT
  ├── REST: /api/charts/state (save/load user chart config)
  └── REST/WS: /api/ai/patterns?pair=BTCUSDT&tf=1h (AI detection results)
     │
     ▼
React App
  ├── TanStack Query (REST caching, deduplication, background refetch)
  ├── WebSocket client (live ticks → series.update())
  ├── Indicator engine (calculate SMA, RSI, etc. from OHLCV data)
  └── AI pattern store (Zustand → AI primitives render)
     │
     └──▶ Lightweight Charts (single canvas: candles, indicators, drawings, AI overlays)
```

Backend proxy is mandatory: normalizes exchange data formats, manages rate limits, handles WebSocket fan-out (one server-side connection per pair, shared across all clients), and caches aggressively.

---

## Authentication & Authorization

```
User clicks "Login" in HopCharts
     │
     ▼
Redirect to CryptoHopper OAuth consent screen
     │
     ▼
User authorizes → redirect back with auth code
     │
     ▼
HopCharts backend exchanges code for access token
     │
     ▼
Token stored in httpOnly cookie (not localStorage)
     │
     ▼
All API calls include token → backend validates
     │
     ▼
Subscription tier returned with user profile → frontend + backend gate features
```

Feature gating enforced both sides. Frontend hides UI for unavailable features. Backend rejects API calls that exceed the user's subscription tier.

---

## Licensing

**Lightweight Charts** is Apache 2.0. Free for all use cases including commercial, OEM, and redistribution. No license key. No sales conversation. No per-seat or per-deploy costs.

This completely eliminates the licensing risk that existed with Highcharts. Partner embeds (Web Component, iframe) are free. No fallback strategy needed.

---

## Bundle Size Estimate

| Component | Gzipped |
|---|---|
| Lightweight Charts v5 | ~35 KB |
| React 18 + ReactDOM | ~45 KB |
| Zustand + TanStack Query | ~15 KB |
| `indicatorts` (tree-shaken, used indicators only) | ~10 KB |
| Drawing tools plugins | ~25 KB |
| AI overlay primitives | ~15 KB |
| Application code + toolbar + panels | ~60 KB |
| **Total widget** | **~205 KB gzipped** |

Half the size of the Highcharts-based estimate (~420 KB). Significantly smaller than TradingView's full widget (~500 KB+). The drawing tools and indicator engine add code, but the base library savings more than compensate.

---

## Folder Structure (Monorepo)

```
hopcharts/
├── packages/
│   ├── core/                        # Shared types, utils, data fetching
│   │   ├── src/
│   │   │   ├── types/               # Exchange, Pair, OHLCV, Indicator, Pattern types
│   │   │   ├── api/                 # REST client, WebSocket client
│   │   │   ├── store/               # Zustand stores (chart state, AI state, user prefs)
│   │   │   └── utils/               # Price formatting, time helpers
│   │   └── package.json
│   │
│   ├── chart/                       # LWC chart + plugins + toolbar
│   │   ├── src/
│   │   │   ├── HopChart.tsx         # Main chart component (LWC + indicators + AI)
│   │   │   ├── Toolbar/             # Custom toolbar (React, Figma-based)
│   │   │   ├── Panels/              # Side panels (indicators, orders, AI insights)
│   │   │   ├── plugins/             # Lightweight Charts plugins
│   │   │   │   ├── indicators/      # Indicator calculation + rendering
│   │   │   │   │   ├── engine.ts    # Central indicator engine
│   │   │   │   │   ├── sma.ts       # SMA calculation + series setup
│   │   │   │   │   ├── rsi.ts       # RSI calculation + sub-pane setup
│   │   │   │   │   ├── macd.ts      # MACD calculation + sub-pane setup
│   │   │   │   │   └── ...
│   │   │   │   ├── drawings/        # Drawing tool primitives
│   │   │   │   │   ├── manager.ts   # Drawing tool state manager
│   │   │   │   │   ├── trendline.ts # Trendline primitive
│   │   │   │   │   ├── fibonacci.ts # Fibonacci retracement primitive
│   │   │   │   │   ├── channel.ts   # Parallel channel primitive
│   │   │   │   │   └── ...
│   │   │   │   ├── ai/              # AI overlay primitives
│   │   │   │   │   ├── patternPrimitive.ts
│   │   │   │   │   ├── heatmapPrimitive.ts
│   │   │   │   │   └── projectionPrimitive.ts
│   │   │   │   └── sltp/            # SL/TP draggable price lines
│   │   │   │       └── draggablePriceLine.ts
│   │   │   ├── config/              # LWC chart options, themes
│   │   │   └── hooks/               # useChart, useIndicators, useDrawings, useAIOverlay
│   │   └── package.json
│   │
│   ├── widget/                      # Web Component wrapper + iframe mode
│   │   ├── src/
│   │   │   ├── hop-charts.ts        # Custom Element definition
│   │   │   ├── iframe.ts            # iframe embed entry point
│   │   │   └── postmessage.ts       # Parent ↔ widget communication protocol
│   │   └── package.json
│   │
│   └── app/                         # Full standalone HopCharts site
│       ├── src/
│       │   ├── pages/               # Login, Dashboard, Settings, Multi-chart
│       │   ├── auth/                # CryptoHopper OAuth flow
│       │   └── App.tsx
│       └── package.json
│
├── turbo.json                       # Turborepo config
└── package.json
```

Key structural difference from the Highcharts plan: `plugins/` replaces the old `overlay/` + `config/` split. Everything that was split between "Highcharts config" and "Canvas overlay" is now unified under the plugin system. The `plugins/indicators/` directory is entirely new — this work didn't exist before.

---

## Key Technical Decisions Summary

| Decision | Choice | Rationale |
|---|---|---|
| Charting library | **Lightweight Charts v5 over Highcharts Stock** | Free license (Apache 2.0), Canvas-native (simpler AI overlay), 75% smaller bundle. Trade-off: must build drawing tools + indicators ourselves. |
| AI overlay | **LWC series primitives** | Renders directly on the chart canvas. No separate overlay element, no coordinate bridge, no sync issues. Primitives get coordinate converters passed to their renderers. |
| Standard charting (candles, volume) | **LWC built-in series** | CandlestickSeries, HistogramSeries — built-in and performant. |
| Technical indicators | **`indicatorts` library + LWC series** | Calculate indicator values client-side, render as Line/Histogram series on main pane or sub-panes. |
| Drawing tools | **Custom LWC primitives** | Built as Canvas primitives with mouse interaction. Significant development effort but full control. Reference community implementations. |
| Multi-pane (RSI, MACD, etc.) | **LWC v5 multi-pane API** | `chart.addPane()` for oscillator sub-panes. New in v5, purpose-built for this use case. |
| Zoom/pan | **LWC native** | Mouse wheel zoom, touch drag, `setVisibleRange()` for programmatic control. |
| SL/TP visualization | **LWC price lines + drag primitive** | `series.createPriceLine()` for static lines, custom primitive wrapper for drag interaction. |
| Widget distribution | **Web Component + iframe fallback** | Web Component for modern integrations, iframe for legacy. No licensing concerns for either mode. |
| State management | **Zustand** | Minimal API, no boilerplate. Separate stores for chart state, AI overlay state, user prefs, drawing state. |
| Data fetching | **TanStack Query** | Caching, background refresh, deduplication for exchange data. |
| Real-time data | **WebSocket via backend proxy** | Server-side fan-out. One connection per pair, shared across clients. |
| Monorepo | **Turborepo** | `core` / `chart` / `widget` / `app` packages. Clean separation. |
| React integration | **Manual `createChart()` in useEffect** | No official React wrapper needed. Thin custom hook manages lifecycle. Cleaner than `highcharts-react-official`. |
| Bundle optimization | **ES2020, tree-shaking** | LWC v5 is ES2020-native. `indicatorts` is tree-shakeable. Only bundle used indicators. |
