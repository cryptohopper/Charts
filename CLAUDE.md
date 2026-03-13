# HopCharts

## Project Structure
Turborepo monorepo with npm workspaces:
- `packages/core` — shared types, API clients, Zustand stores, hooks, utilities
- `packages/chart` — Lightweight Charts wrapper (`HopChart` component)
- `packages/app` — Vite React app (main entry point)
- `packages/widget` — embeddable widget/iframe entry
- `Chart Design/` — Figma-derived UI reference (use for fonts, colors, component styling)
- `packages/app` UI libraries: `lucide-react` for icons, `motion/react` (Framer Motion v12) for animations

## Build & Check
- `npm run build` — build all packages (turbo)
- Turbo cache gotcha: after changing a `vite.config.ts`, stale cached `dist/` outputs persist — run `rm -rf .turbo packages/*/.turbo` then `npm run build` (or use `npx turbo build --force`)
- `npx tsc --noEmit` — type-check (run from package dir, e.g. `packages/core`)
- Build core before checking dependent packages: `npx tsc --project packages/core/tsconfig.json && npx tsc --project packages/chart/tsconfig.json --noEmit`
- `@hopcharts/core` resolves from `dist/` (not source) — rebuild core after any store/type changes before type-checking chart or app
- Known pre-existing errors: `auth-client.ts` (ImportMeta cast), `useDrawings.ts` (AnchorPoint type mismatch between @core and drawings plugin), `useIndicators.ts` (IPaneApi<Time> vs number) — ignore when checking unrelated files
- No `@types/node` — use `getEnvVar()` from `packages/core/src/utils/env.ts` for env var access (safe for browser + Vite + Node)

## Code Conventions
- Toolbar/UI colors: always use `var(--hc-*)` CSS custom properties, never hardcode hex values (e.g. use `var(--hc-accent)` not `#00b1c7`)
- Toolbar font: `font-['Source_Sans_3',sans-serif]` — use this class in all toolbar/dropdown text
- Font inheritance: set the font class on the root container of a feature panel — child components inherit it, don't repeat per-element
- Dropdown dismiss: use `useDropdownClose(ref, isOpen, onClose)` from `Toolbar/useDropdownClose.ts` — handles click-outside + Escape
- ESM with `.js` extensions in all imports (e.g. `'./websocket.js'`)
- JSX transform: project uses `"jsx": "react-jsx"` — only `import React` when using `React.*` directly (e.g. `React.useEffect`), not for JSX
- Zustand stores in `packages/core/src/store/` (aiStore, chartStore, drawingStore, userStore, uiStore, tradingStore, analyzeStore)
- tradingStore and analyzeStore skip `persist` middleware (transient/session-only data) — `devtools(immer(...))` only
- Zustand middleware order: `devtools(persist(immer(...)))` — `immer` import is from `zustand/middleware/immer` (separate from other middleware)
- Use `SubscriptionTier` type from `auth/auth-client.ts` — never inline `'pioneer' | 'explorer' | 'adventurer' | 'hero'` unions
- `ExchangeId` and `Timeframe` include `string` in their unions — no `as` casts needed on literal values
- userStore persists to IndexedDB via `idb-keyval`; chartStore/drawingStore use default localStorage
- REST data: `@tanstack/react-query` hooks in `packages/core/src/api/hooks.ts`
- On-demand mutations (e.g. AI Analyze): use `useMutation` from `@tanstack/react-query`, not `useQuery` — these are user-triggered, not auto-fetching
- Real-time data: WebSocket client in `packages/core/src/api/websocket.ts`
- `useRealtimePrice(exchangeId, pair, onTick)` — callback-based WS subscription returning `{ isConnected, error }`, not price data
- Auth: `packages/core/src/auth/` (auth-client, useAuth, ProtectedFeature)
- Feature gating: `useAuth().canAccess(featureKey)` for boolean checks, `ProtectedFeature` component for wrapping UI, `hasMinTier()` for ordinal tier comparisons
- Tier config helpers in `packages/core/src/auth/tier-config.ts`: `hasMinTier()`, `getAIScanLimit()`, `getMinTierForDrawingTool()`, `isPremiumIndicator()`
- AI scan limits: use `userStore.canUseAIScan()` / `consumeAIScan()` — never re-derive scan availability from raw store fields
- Stabilize callback props in hooks with `useRef` pattern (assign ref each render, use `ref.current` in effect) — no `useCallback` needed
- Barrel exports: update both `api/index.ts` and root `index.ts` when adding new modules
- `types/` directory is for pure type definitions only — no runtime functions (put those in `utils/`)
- Conversion functions (`toLWCCandlestickData`, `toLWCVolumeData`) live in `utils/conversion.ts`
- Avoid duplicate data fetching: REST hooks are for initial load, WebSocket handles real-time updates
- URL→store param parsing: use `applyUrlParamsToStore()` from `packages/app/src/hooks/applyUrlParamsToStore.ts` — shared by HomePage and EmbedPage
- Env vars: use `getEnvVar()` from `packages/core/src/utils/env.ts` (supports `import.meta.env` + `process.env`)
- API errors: use `instanceof ApiError` for status checks, not duck-typing
- Shared singleton state: use `useSyncExternalStore` over hand-rolled useState/listeners
- Store equality guards comparing API arrays: use Map/Set-based comparison keyed on `id`, not index-based — API response order is not guaranteed
- Responsive layout: use Tailwind `md:` breakpoint classes (768px), not JS-based media query hooks — keeps responsive strategy in one system
- Never call `getComputedStyle` in hot paths (WS tick handlers, render loops) — cache in a ref, refresh via MutationObserver on theme change
- Theme color caching in chart hooks: use `useThemeColorsRef()` from `packages/chart/src/hooks/useThemeColorsRef.ts` — returns a ref refreshed via MutationObserver; don't duplicate the observer pattern per hook
- Hooks providing chart/series to other hooks must use `useState` (not just refs) so dependents re-render when values are ready
- Theme hook: `useTheme()` from `packages/core/src/hooks/useTheme.ts` — syncs `userStore.preferences.theme` → `.dark` class on `<html>` via `useLayoutEffect`; mount once at app root
- Shared hooks live in `packages/core/src/hooks/` — barrel-exported via `hooks/index.ts` and root `index.ts`

## Lightweight Charts Plugins (packages/chart/src/plugins/)
- Series primitives implement `ISeriesPrimitive<Time>` — use `attached()/detached()` lifecycle, `paneViews()` returns `IPrimitivePaneView[]`
- AI primitives extend `BaseAIPrimitive` in `plugins/ai/BaseAIPrimitive.ts` — handles lifecycle boilerplate
- Coordinate conversion: `series.priceToCoordinate(price)` for Y, `chart.timeScale().timeToCoordinate(time)` for X (NOT the custom series `PriceToCoordinateConverter`)
- `PatternPoint.timestamp` (number) needs `as unknown as Time` cast for LWC time scale methods
- Theme colors: read CSS vars at draw time via `getAIOverlayTheme()` (cached per frame) — never hardcode `--hc-green`/`--hc-red` values
- Drawing primitives extend `BaseDrawingPrimitive` in `plugins/drawings/base-drawing.ts` (9 tools in `primitives/`); `DrawingManager` in `manager.ts` coordinates creation/CRUD/events; `InteractionHandler` handles selection/drag
- Existing drawing utils: `anchorToPixel()`, `pixelToAnchor()`, `drawLine()`, `drawAnchorHandle()`, `drawSelectionHandle()`, `clamp()` in `plugins/drawings/utils.ts` — reuse before writing new helpers
- Drawing base class provides `getPixelAnchors()`, `getPreviewPixel()`, `getContext()` — subclass hit tests and renderers should call these, not redefine them
- `IPrimitivePaneRenderer.draw()` receives `(target, utils?)` — wrap each item's draw in `ctx.save()/ctx.restore()` to prevent state leaks
- LWC primitive attach/detach: track attached state with boolean refs to prevent double-attach; always detach in cleanup
- LWC plugin effects: separate plugin lifecycle (tied to `series`) from data updates (tied to data deps) — combining them causes unnecessary destroy/recreate on every data change
- Managed series cleanup: must call `chart.removeSeries(s)` before clearing tracking data — just clearing a Map leaks series on the chart
- Sub-panes: `chart.addPane()` returns `IPaneApi<Time>` — add series via `pane.addSeries(Type, opts)`, not `chart.addSeries(Type, opts, paneIndex)`
- Analyze overlay primitives live in `plugins/analyze/` — `AnalyzeOverlayManager` coordinates all analyze-specific primitives (S/R zones, trendlines, candlestick signals, chart patterns, Fibonacci, divergences) as a group with per-layer toggle support
- Analyze primitives are read-only (no drag/interaction) — visually distinct from user-drawn primitives (e.g. dashed style for AI trendlines vs solid for user trendlines)
- Divergence primitives require two separate primitives (one per pane) — price pane primitive + indicator sub-pane primitive, visually synchronized

## AI Analyze Feature
- Architecture: Hybrid (algorithmic computation + LLM synthesis) — see `AI_Analyze_Technical_Plan.md` for full details
- All indicator calculations (RSI, MACD, EMA, BB, ADX, OBV, Stochastic) are deterministic server-side — LLM never computes indicators
- S/R detection, pattern detection, divergence detection are algorithmic — LLM only interprets pre-computed results
- Overlays (trendlines, S/R zones, chart patterns, Fibonacci, candlestick signals, divergences) come from algorithmic backend, NOT from LLM output
- LLM generates only: summary text, section narratives, scenario descriptions, bias headline
- SSE streaming: overlays arrive first (render immediately), then text streams progressively
- Response ordering: `overlays` → `summary` → `sections` → `rawData`
- analyzeStore (`packages/core/src/store/analyzeStore.ts`): session-only, tracks `analysis`, `isLoading`, `error`, `panelOpen`, `visibleLayers` (per-layer toggle)
- `useAnalyzeChart()` hook uses `useMutation` — analysis is on-demand (user-triggered), not auto-fetching
- Cache key pattern: `analyze:{exchange}:{pair}:{timeframe}:{floor(timestamp/900000)}` — 15-minute TTL
- Rate limiting: per-user, tier-gated (Free=3/day, Pro=unlimited with 30s cooldown)
- Free tier gets summary text only (no chart overlays); Pro/AI+ gets full response
- Analyse Panel: `packages/chart/src/Panels/AnalysePanel/` — slide-in panel following same pattern as indicators panel
- Post-processing safety: backend scans LLM output for forbidden terms (buy/sell advice, guarantees, time-bound predictions)
- Planning docs: `AI_ANALYZE_ARCHITECTURE_OPTIONS.md`, `AI_Analyze_Implementation_Plan.md`, `AI_Analyze_Technical_Plan.md`

## Key Types (packages/core/src/types/)
- `OHLCV` — { timestamp, open, high, low, close, volume } (timestamp in Unix ms)
- `ExchangeId` — `'binance' | 'coinbase' | 'kraken' | 'kucoin' | string`
- `Timeframe` — `'1m' | '5m' | '15m' | '1h' | '4h' | '1D' | '1W'`
- `DetectedPattern` — AI pattern detection result with confidence, points, projection
- `AnalyzeRequest` — { pair, exchange, timeframe, visibleFrom, visibleTo, language }
- `AnalyzeResponse` — full analysis result: summary, overlays, sections, scenarios, rawData, meta
- `AnalyzeLayer` — `'trendlines' | 'sr_zones' | 'patterns' | 'candle_signals' | 'fibonacci' | 'divergences'`
- `AnalysisBias` — `'strong_bullish' | 'mildly_bullish' | 'neutral' | 'mildly_bearish' | 'strong_bearish'`
- `AnalyzeSRLevel` — S/R level with price, type, strength (1-10), zoneWidth
- `AnalyzeChartPattern` — chart pattern with type, status (forming/complete/breakout), points, target, reliability
- `AnalyzeDivergence` — divergence with type, indicator, pricePoints, indicatorPoints

## Theme System (Chart Design/src/styles/theme.css)
- Light: `--hc-green: #09977e`, `--hc-red: #f26d60`, `--hc-chart-bg: #ffffff`
- Dark: `--hc-green: #10CD72`, `--hc-red: #EF5350`, `--hc-chart-bg: #12181A`
- Theme flow: `useTheme()` toggles `.dark` on `<html>` → CSS vars switch → HopChart's MutationObserver calls `applyTheme()` → `getChartColors()` / `getCandlestickOptions()` re-read vars
- AI overlays: `getAIOverlayTheme()` reads CSS vars per-frame with rAF cache — auto-updates on theme change
- Widget/iframe: manages `.dark` class independently via config from parent (not userStore)

## Widget Package (packages/widget/)
- Two Vite builds: `vite build` (IIFE custom element) + `vite build --config vite.iframe.config.ts` (iframe page)
- IIFE build bundles everything (React, LWC, chart) into single `dist/hopcharts-widget.iife.js` — no externals
- Shadow DOM: `widget.css` uses `:host`/`:host(.dark)` for theme vars; also injects `--hc-*` onto `document.documentElement` for `getChartColors()` compat
- iframe build needs `base: "./"` in vite config for relative asset paths
- PostMessage protocol types in `src/types.ts` — `ParentMessage` (init/update) and `ChildMessage` (ready/stateChange)
- `@hopcharts/core` types (`Timeframe`, `ExchangeId`) should be used in widget APIs — don't inline string unions
