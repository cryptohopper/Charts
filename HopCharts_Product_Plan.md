# HopCharts — Product Plan (v2 — Lightweight Charts)

## What It Is

A TradingView-style charting application purpose-built for CryptoHopper users. Crypto-only. Exchange-aware. Integrated with CryptoHopper accounts, subscriptions, and bot configurations.

---

## Core Problem

TradingView is generic, expensive, and disconnected from CryptoHopper's ecosystem. Users switch between tools to chart, configure bots, and monitor trades. HopCharts collapses that into one surface.

---

## Figma → Code Decision

Three options for turning existing Figma designs into a working frontend:

| Approach | Pros | Cons | Verdict |
|---|---|---|---|
| **Figma AI export (e.g. Locofy, Builder.io, Figma Dev Mode)** | Fast scaffold. Gets layout/styling 80% done. | Generated code is messy, non-idiomatic, hard to maintain. Component logic (charting, interactivity) still manual. | Use for static UI shells only (sidebars, toolbars, modals, account pages). Do NOT use for chart components. |
| **Manual React build from Figma specs** | Clean architecture. Full control. | Slower initial velocity. | Use for all charting and interactive components. |
| **Hybrid** | Best of both. Static chrome from AI export, interactive core hand-built. | Requires discipline to not let AI-generated code rot. | **Recommended.** |

**Decision: Hybrid.** Use Figma AI tooling to generate the application shell (navigation, panels, settings screens, account UI). Hand-build everything that touches Lightweight Charts, drawing tools, indicators, or real-time data.

---

## Tech Stack (Relevant to Product Decisions)

- **Charting engine:** TradingView Lightweight Charts v5 (Apache 2.0, free). Canvas-native. Handles candlesticks, OHLCV, time/price scales, zooming, panning, price lines.
- **Technical indicators:** Calculated client-side using `indicatorts` library, rendered as Lightweight Charts series (line, histogram). No built-in indicator library — all calculated in the frontend.
- **Drawing tools:** Custom-built Canvas primitives via Lightweight Charts plugin system. No built-in drawing tools — trendlines, Fibonacci, channels, etc. are all custom code.
- **AI overlays:** Rendered directly on the chart canvas as Lightweight Charts primitives. No separate Canvas layer — the plugin system provides native coordinate conversion and rendering.
- **Frontend:** React (TypeScript). Component library bootstrapped partially from Figma AI export.
- **Auth:** CryptoHopper OAuth. No separate account system.
- **Data:** Exchange APIs via CryptoHopper backend proxy (avoids CORS, rate limit management, API key exposure).

---

## Product Phases

### Phase 1 — MVP (Weeks 1–8)

Ship a usable chart that replaces the need to open TradingView for basic CryptoHopper workflows.

**Note on timeline vs. Highcharts plan:** The MVP is 2 weeks longer than the previous Highcharts-based estimate because indicators and basic drawing tools must now be built from scratch instead of using Highcharts built-ins. The trade-off: zero licensing cost, smaller bundle, simpler architecture, and full control over every feature.

**Scope:**

- Candlestick chart (Lightweight Charts) with OHLCV data
- Exchange selector (Binance, Coinbase, Kraken, KuCoin — start with 4)
- Trading pair selector (search + favorites)
- Timeframe selector (1m, 5m, 15m, 1h, 4h, 1D, 1W)
- Basic indicators: SMA, EMA, RSI, MACD, Bollinger Bands (calculated client-side, rendered as LWC series)
- Visual stop-loss and take-profit lines — using LWC price lines with drag-to-adjust interaction
- Basic drawing tools: Trendline (segment), Horizontal line, Vertical line (custom primitives)
- CryptoHopper OAuth login
- Chart state persistence (selected pair, timeframe, indicators saved per user)
- Responsive layout matching Figma designs
- Dark/light theme (LWC theming + Tailwind)

**Not in MVP:**

- Advanced drawing tools (Fibonacci, Elliott, Pitchfork)
- AI pattern recognition
- Subscription gating
- Multi-chart layouts
- Alerts
- HeikinAshi candles

### Phase 2 — Full Charting (Weeks 9–16)

Parity with basic TradingView functionality.

**Note:** This phase is also longer than the Highcharts plan. Drawing tools are the biggest engineering investment. Fibonacci retracement alone (multiple dynamic horizontal levels calculated from two anchor points, with labels and fill regions) is more complex than any single indicator.

**Scope:**

- Advanced drawing tools: Fibonacci retracement, parallel channel, rectangle, arrow, text label, measure tool
- Extended indicator library (15+ indicators including Stochastic, ATR, ADX, CCI, OBV)
- HeikinAshi candle calculation + rendering
- Multi-chart layout (2x1, 2x2, 3x1) — multiple LWC instances in a grid
- Chart templates (save/load indicator + drawing configurations)
- Crosshair with price/time tooltip (LWC built-in, customizable)
- Volume profile (custom series primitive — horizontal volume histogram)
- Range/time navigation buttons (React UI calling `chart.timeScale().setVisibleRange()`)
- Chart screenshot export (`chart.takeScreenshot()` → PNG download)

### Phase 3 — CryptoHopper Integration (Weeks 17–22)

Connect charts to actual trading.

**Scope:**

- Overlay open positions on chart (entry price line, current P&L label)
- Overlay bot trigger zones (where bot would buy/sell based on current config)
- One-click order placement from chart (market, limit)
- Order history overlay (past buys/sells as series markers on chart)
- Real-time WebSocket price feeds (not polling)
- Price alerts (push notification via CryptoHopper)

### Phase 4 — AI Features (Weeks 23–32)

Differentiator. This is what makes HopCharts not just another TradingView clone.

**Scope:**

- Pattern recognition engine: head & shoulders, double top/bottom, triangles, flags, wedges, cup & handle
- Visual overlay: detected patterns rendered as chart primitives with confidence score
- AI trend analysis: "AI thinks BTC/USDT is in a bearish channel" — plain language summary
- Signal suggestions: "Based on detected patterns and indicators, AI suggests setting stop-loss at $X"
- Backtesting visualization: show how AI signals would have performed historically on the current chart
- AI model: likely a fine-tuned model running server-side, results pushed to frontend

**Architecture advantage:** Because AI overlays use the same LWC primitive system as drawing tools, they inherit all the same rendering capabilities — coordinate conversion, automatic re-render on zoom/pan, proper z-ordering, and optional mouse interaction (click to select a pattern for details).

### Phase 5 — Monetization & Scale (Weeks 33+)

**Scope:**

- Subscription tiers:
  - **Free:** 1 chart, 3 indicators, no drawing tools, no AI
  - **Pro:** Multi-chart, all indicators, drawing tools, chart templates
  - **AI:** Everything in Pro + AI pattern recognition + AI signals
- Subscription enforcement via CryptoHopper account tier
- Embeddable chart widget (Web Component + iframe) for CryptoHopper dashboard and third-party sites
- Public sharing: generate read-only chart links with annotations
- Mobile-responsive (not native app — responsive web)

---

## Lightweight Charts Architecture (Product Implications)

This is a single-canvas rendering system with plugins. Product decisions depend on understanding what each plugin layer handles.

```
┌─────────────────────────────────────┐
│         UI Layer (React)            │  ← Toolbars, selectors, panels
├─────────────────────────────────────┤
│  Lightweight Charts Canvas          │
│  ├─ Built-in: Candles, volume,      │  ← Series types + price lines
│  │   price lines, crosshair         │
│  ├─ Plugins: Indicators             │  ← Calculated client-side, rendered as series
│  ├─ Plugins: Drawing tools          │  ← Custom primitives with mouse interaction
│  └─ Plugins: AI overlays            │  ← Pattern regions, heat maps, projections
├─────────────────────────────────────┤
│  Multi-pane (v5)                    │  ← RSI, MACD, volume sub-panes
├─────────────────────────────────────┤
│         Data Layer                  │  ← Exchange APIs, WebSockets, cache
└─────────────────────────────────────┘
```

**Key difference from Highcharts plan:** There is no separate Canvas overlay layer. Everything renders on a single Canvas surface via the plugin system. This eliminates the coordinate synchronization problem that was flagged as "the single hardest technical challenge" in the previous plan.

**Product constraint from this architecture:** Drawing tools and indicators require custom development (there are no built-ins to lean on), so new drawing tools or exotic indicators take longer to ship than they would with Highcharts. However, AI overlays are simpler to build and more tightly integrated, since they use the same plugin system as everything else.

---

## User Flows (MVP)

**Flow 1: First Visit**
Open HopCharts → See BTC/USDT on Binance (default) → Browse freely without login → Prompted to login when trying to save chart state or access indicators beyond the 3 free ones.

**Flow 2: Charting**
Select exchange → Search/select pair → Choose timeframe → Add indicators from panel → Drag stop-loss/take-profit lines on chart → See price and percentage update in real-time as lines are dragged.

**Flow 3: Visual SL/TP Configuration**
User drags a green line (take-profit) and red line (stop-loss) on the chart → Price labels snap to the lines → Percentage from current price shown → In Phase 3, these values feed directly into CryptoHopper bot config.

---

## Key Metrics

- **Activation:** User loads a chart and changes at least one setting (pair, timeframe, or indicator)
- **Retention:** Returns within 7 days
- **Depth:** Average indicators per chart, average session duration
- **Conversion:** Free → Pro upgrade rate
- **Integration:** % of chart users who also have active CryptoHopper bots

---

## Risks

| Risk | Mitigation |
|---|---|
| Drawing tools development time | Phase them: basic lines in MVP, Fibonacci/channels in Phase 2, advanced tools in Phase 3. Reference community LWC plugin implementations. |
| Indicator calculation accuracy | Use established libraries (`indicatorts`, `technicalindicators`). Cross-validate against TradingView for popular indicators. |
| LWC v5 plugin system maturity | v5 released March 2025 with stable plugin API. Community is actively building on it. Pin to specific version. |
| Exchange API rate limits | Backend proxy with caching layer. Aggregate common pairs. WebSocket where available. |
| AI pattern recognition accuracy | Ship with confidence scores. Never present AI output as trading advice. Clear disclaimers. |
| TradingView feature gap perception | Don't try to match TradingView feature-for-feature. Win on CryptoHopper integration and AI. That's the moat. |
| Performance with many indicators + drawings | LWC is Canvas-native with efficient rendering. Use `requestAnimationFrame` throttling for indicator recalculation on scroll. |

---

## What Success Looks Like

HopCharts replaces TradingView as the default charting tool for CryptoHopper users. Users configure their bots visually on the chart instead of filling out forms. AI features create a reason to pay that TradingView doesn't offer. The chart becomes the primary interface for CryptoHopper, not a secondary tool.
