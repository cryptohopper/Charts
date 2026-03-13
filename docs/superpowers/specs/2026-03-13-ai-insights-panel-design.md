# AI Insights Panel — Design Spec

## Overview

A right-side panel that explains what the AI has drawn on the chart. The AI places patterns, indicators, and lines on the chart automatically; this panel provides context, confidence ratings, and educational explanations for each AI action.

## Architecture: Hybrid (Approach C)

The panel lives in `packages/app`. Highlight state flows through `aiStore`. Chart primitives in `packages/chart` read highlight state via imperative method calls from `useAIOverlay`, keeping the chart package independent of global store runtime.

---

## 1. Layout & Positioning

### Desktop
- **Right side panel**, 320px wide, rendered at shell level in `HomePage.tsx`
- Desktop-only (`md:`) conditional grid column: `md:grid-cols-[48px_minmax(0,1fr)_320px]` when open, normal `md:grid-cols-[48px_minmax(0,1fr)]` when closed
- Grid col-span adjustments when panel is open: top bar (`DesignTopBar`) stays `col-span-2` (panel manages its own header row within its grid column); footer stays `col-start-2` (no change needed). The panel column spans from row 2 to the bottom, same as the chart area.
- Chart resizes automatically via existing `ResizeObserver` in `useChart.ts`
- Slide-in animation with `motion/react`, using `x: '100%'` (not hardcoded pixels)
- Left border: `1px solid var(--hc-border)` as separator from chart

### Mobile
- **Bottom drawer** in app-shell, following existing pattern in `MobileBottomBar.tsx`
- ~70vh height, drag handle to dismiss, backdrop with `onClick` close
- Z-index aligned with existing mobile drawers
- No left border (use border-top or none)

### Open/Close
- **Primary trigger**: Button in `DesignTopBar` (app topbar)
- **Mobile**: Via mobile shell (MobileBottomBar)
- **Secondary**: AIToggle dropdown option — only sets `uiStore.setSidePanel('ai-insights')`, does not render app UI
- **Close**: X button in panel header + Escape key (standalone `useEffect` keydown listener in `AIInsightsContent`, not `useDropdownClose` which is dropdown-specific)
- **State**: `useUIStore.activeSidePanel === 'ai-insights'` (already defined in uiStore)

---

## 2. Data Model

### AIInsight Type

```typescript
// NEW FILE: packages/core/src/types/ai-insight.ts

export type InsightKind = 'pattern' | 'indicator' | 'line';

export interface AIInsight {
  id: string;           // Namespaced: 'pattern:${sourceId}'
  kind: InsightKind;
  sourceId: string;     // Original ID from source data (e.g., DetectedPattern.id)
  name: string;         // Display name: "Head & Shoulders", "RSI (14)"
  confidence: number;   // 0-1
  summary: string;      // Template-generated 1-2 line summary
  educationalContent: string; // Static educational text per type
  detectedAt: number;   // Unix ms
  timeframe: Timeframe;
  projection?: {
    targetPrice: number;
  };
  bullish: boolean;     // Directional bias
}
```

### Mapper

```typescript
// NEW FILE: packages/core/src/utils/ai.ts

export function patternsToInsights(patterns: DetectedPattern[]): AIInsight[];
```

- Maps each `DetectedPattern` to an `AIInsight` with `kind: 'pattern'`
- Generates `id` as `pattern:${pattern.id}`
- Generates `summary` from templates per `PatternType` (see Summary Templates below)
- Generates `educationalContent` from static text per `PatternType` (see Educational Content below)
- Derives `bullish` from pattern type (e.g., inverse_head_and_shoulders = bullish)
- Sorts: primary by confidence desc, secondary by detectedAt desc (stable)
- New barrel export additions: `utils/ai.ts` → `utils/index.ts` → root `index.ts`; `types/ai-insight.ts` → `types/index.ts` → root `index.ts`

**Called at render time** inside `AIInsightsContent` via `useMemo`:
```typescript
const insights = useMemo(() => patternsToInsights(patterns), [patterns]);
```

This is not stored in `aiStore` — it's a derived view. The store holds `DetectedPattern[]`, the panel maps on read.

v1 only implements `kind: 'pattern'`. The model is prepared for `'indicator'` and `'line'` later.

### Summary Templates

Templates per pattern type, interpolated with available data fields:

| PatternType | Template |
|---|---|
| `head_and_shoulders` | "Bearish reversal pattern — target {targetPrice} ({confidence}%)" |
| `inverse_head_and_shoulders` | "Bullish reversal pattern — target {targetPrice} ({confidence}%)" |
| `double_top` | "Bearish reversal — double top detected, target {targetPrice}" |
| `double_bottom` | "Bullish reversal — double bottom detected, target {targetPrice}" |
| `ascending_triangle` | "Bullish continuation — breakout target {targetPrice}" |
| `descending_triangle` | "Bearish continuation — breakdown target {targetPrice}" |
| `symmetrical_triangle` | "Consolidation pattern — breakout pending ({confidence}% confidence)" |
| `bull_flag` | "Bullish continuation — flag target {targetPrice}" |
| `bear_flag` | "Bearish continuation — flag target {targetPrice}" |
| `rising_wedge` | "Bearish reversal — rising wedge, target {targetPrice}" |
| `falling_wedge` | "Bullish reversal — falling wedge, target {targetPrice}" |
| `cup_and_handle` | "Bullish continuation — cup & handle, target {targetPrice}" |

When `projection?.targetPrice` is absent, omit the target clause. `{confidence}` is rendered as `Math.round(confidence * 100)`.

### Educational Content

Static educational text per pattern type. Stored as a `Record<PatternType, string>` in `utils/ai.ts`. Content covers: what the pattern is, how it forms, and what to watch for. These are short paragraphs (2-4 sentences each). Example:

- **head_and_shoulders**: "A Head & Shoulders pattern forms when price creates three peaks, with the middle peak (head) higher than the two surrounding peaks (shoulders). It signals a potential reversal from bullish to bearish momentum. Watch for a break below the neckline connecting the two troughs for confirmation."

The full set of 12 educational texts is defined during implementation in `utils/ai.ts`.

---

## 3. Store Changes

### aiStore (`packages/core/src/store/aiStore.ts`)

**Add:**
- `highlightedInsightId: string | null` — ephemeral hover state
- `selectedInsightId: string | null` — persistent click state (prepared, no v1 UX)
- `setHighlightedInsight(id: string | null): void`
- `selectInsight(id: string | null): void`

**Modify:**
- `clearPatterns()` — also resets `highlightedInsightId` and `selectedInsightId` to null

**Remove:**
- `selectedPatternId` and `selectPattern()` — both currently unused, replaced by `selectedInsightId` / `selectInsight()`

---

## 4. UI Components

### Component Structure

```
packages/app/src/components/
├── AIInsightsContent.tsx      — Panel content (header, cards, empty states)
├── DesktopAIInsightsPanel.tsx — 320px column wrapper for desktop
├── MobileAIInsightsDrawer.tsx — Bottom drawer wrapper for mobile
└── InsightCard.tsx            — Individual insight card
```

### AIInsightsContent

Shared content rendered inside both desktop and mobile wrappers.

**Header** (fixed top):
- Title "AI Insights" + count badge
- X button to close (calls `uiStore.setSidePanel(null)`)
- Scan usage indicator: compact `X/Y` text, progress bar on desktop only
- Reuses scan logic from `AIToggle.tsx`

**Body** (scrollable):
- Vertical list of `InsightCard` components, 8px gap
- Font: `font-['Source_Sans_3',sans-serif]` on root container, children inherit

**Empty states** (based on query status):
- Query loading + no existing patterns → 2-3 skeleton cards
- Query succeeded + 0 patterns → "Geen patronen gevonden" + neutral explanation
- Scan limit reached → "Dagelijkse limiet bereikt" + upgrade CTA
- No pair selected → "Selecteer een pair om AI analyse te starten"

Note: Skeletons only on first load without existing insights, not during background refetch.

### InsightCard

**Header** (always visible):
- Icon per `kind` (pattern/indicator/line) + name
- AI-placed indicators get an "AI" prefix badge to distinguish from manual indicators
- Confidence badge (right-aligned): >0.7 `var(--hc-green)`, 0.4-0.7 `var(--hc-accent)`, <0.4 `var(--hc-red)`

**Summary** (always visible, 1-2 lines):
- Template-generated from available fields (type, confidence, projection?.targetPrice, timeframe)
- Example: "Bearish reversal pattern — target $64,800 (confidence 82%)."

**Expandable "Meer info"** (collapsed by default):
- Static educational text per pattern type
- Chevron icon to toggle
- Mobile: accordion behavior, max one card open at a time

**Hover behavior**:
- Hover → `aiStore.setHighlightedInsight(id)`
- Leave → `aiStore.setHighlightedInsight(null)`

**Sorting**: Primary confidence desc, secondary detectedAt desc.

### DesktopAIInsightsPanel

- Wraps `AIInsightsContent` in a `motion.div` with slide-in animation
- Background: `var(--hc-surface)`, border-left: `1px solid var(--hc-border)`
- Rendered conditionally in `HomePage.tsx` grid

### MobileAIInsightsDrawer

- Wraps `AIInsightsContent` in a bottom drawer with:
  - Drag handle at top
  - Backdrop overlay with click-to-dismiss
  - Framer Motion drag gestures
- Rendered in app-shell, z-index aligned with existing mobile drawers

---

## 5. Chart Primitive Highlight Support

### Approach

Primitives remain pure render units. `useAIOverlay` orchestrates highlight state.

### BaseAIPrimitive Changes

```typescript
// New public method on BaseAIPrimitive
setHighlightedId(sourceId: string | null): void {
  this._highlightedId = sourceId;
  this._rebuildViews();  // currently private — change to protected
  this.requestUpdate();
}
```

`setHighlightedId()` lives on `BaseAIPrimitive` itself, so it can call `_rebuildViews()` regardless of access modifier. Separately, change `_rebuildViews()` from `private` to `protected` so subclasses can override highlight behavior in the future if needed.

### Renderer Changes

**AIPatternPrimitive**:
- Highlighted: opacity boost (region 0.12-0.45 → 0.5) + thicker dashed outline
- Non-highlighted when another item is highlighted: dim (opacity × 0.5)
- No highlight active: normal rendering

**AIProjectionPrimitive**:
- Highlighted: fuller opacity + glow on target marker
- Non-highlighted: subtle dim

**AIHeatmapPrimitive**:
- Highlighted: larger/stronger glow radius + higher opacity on active centroid
- Non-highlighted: subtle dim

### useAIOverlay Flow

1. Reads `highlightedInsightId` from aiStore
2. Strips the `pattern:` prefix to get `sourceId` (simple string operation, no insights list lookup needed)
3. Calls `primitive.setHighlightedId(sourceId)` on all three primitive instances
4. On change to `null`, calls `primitive.setHighlightedId(null)` to reset

---

## 6. Entry Points

### DesignTopBar / TopBar

`DesignTopBar.tsx` is a thin wrapper around `TopBar.tsx`. The actual button is added in `TopBar.tsx`: a lucide-react icon (e.g., `Sparkles` or `BrainCircuit`) that toggles `uiStore.setSidePanel('ai-insights')`.

### AIToggle Dropdown

New menu item "AI Insights" that calls `uiStore.setSidePanel('ai-insights')`. Only sets store state — does not render any app-level UI.

### MobileBottomBar

The existing `MobileBottomBar` uses local `DrawerType` state (`"market" | "tools" | "hub" | null`), not `uiStore`. For the AI insights drawer, add a new `DrawerType` value `"ai"` to stay consistent with the local-state pattern. The mobile drawer reads `patterns` from `aiStore` directly and renders `AIInsightsContent` inside the drawer shell. This keeps mobile drawer management local while the desktop panel uses `uiStore.activeSidePanel`.

---

## 7. Query Semantics

- `showOverlay` is purely visual — hides/shows AI drawings on chart. Does **not** affect data fetching.
- The panel reads directly from `useAIPatterns()` TanStack Query hook for loading/error/refetch state.
- Query cache is shared with `useAIOverlay` (same query key), no duplicate fetching.
- Retry button calls `refetch()` from the query hook.

### Bugfix: Scan Consumption

In `useAIOverlay.ts`, the current condition is `restPatterns && restPatterns.length > 0`. Change this to `restPatterns !== undefined` — a scan with 0 results still consumes a scan (the AI did the work). Note: `restPatterns` is `undefined` when the query hasn't run yet, so the `undefined` check is correct; do not remove the nullish guard entirely.

---

## 8. Styling

- All colors via `var(--hc-*)` CSS custom properties
- Font: `font-['Source_Sans_3',sans-serif]` on panel root container
- Background: `var(--hc-surface)`
- Borders: `var(--hc-border)`
- Confidence colors: `var(--hc-green)` (high), `var(--hc-accent)` (medium), `var(--hc-red)` (low)
- Card backgrounds: `var(--hc-surface)`, hover: `var(--hc-surface-hover)`
- Shadow: `var(--hc-shadow)` on panel container (desktop)
- Responsive: Tailwind `md:` breakpoint classes for desktop/mobile differences

---

## 9. Verification

- **Unit tests**: `patternsToInsights()` — mapping correctness, stable sorting, namespaced ids
- **Unit test**: `clearPatterns()` resets both `highlightedInsightId` and `selectedInsightId`
- **Smoke test**: `setHighlightedId()` triggers `_rebuildViews()` + `requestUpdate()` on primitives

---

## 10. Out of Scope

- `kind: 'indicator'` and `kind: 'line'` insight types (data model prepared, implementation later)
- Backend changes (reasoning/narrative in API response)
- Click-to-zoom, export/share functionality
- `selectedInsightId` UX (state prepared, no UI in v1)
