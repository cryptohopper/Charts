# AI Insights Panel — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the AIInsightsPanel UI component that displays detected AI patterns, their confidence levels, and projections — integrated below the chart like the existing TradingPanel.

**Architecture:** The data pipeline (REST → aiStore, WebSocket → aiStore, aiStore → chart primitives) is fully wired in `useAIOverlay.ts`. This plan builds the **missing UI panel** and integrates it into `HopChart.tsx`. The panel follows the exact same structure as `TradingPanel` (tabs + content + optional sidebar). Clicking a pattern in the panel highlights it on the chart via `aiStore.selectPattern()`.

**Tech Stack:** React, TypeScript, Zustand (aiStore/uiStore/chartStore), Tailwind CSS, `var(--hc-*)` + `var(--ai-*)` CSS custom properties, `font-['Source_Sans_3',sans-serif]`

---

## Chunk 1: Foundation

### Task 1: Add light-mode AI panel CSS variables

The `--ai-*` tokens exist only in `.dark {}`. Light mode needs equivalents so components can use `var(--ai-panel-bg)` unconditionally.

**Files:**
- Modify: `Chart Design/src/styles/theme.css:72-79` (inside `:root {}`, before closing brace)

- [ ] **Step 1: Add light-mode AI panel vars to `:root`**

In `Chart Design/src/styles/theme.css`, add these variables inside `:root {}` right after the `--hc-kbd-bg` line (line 72), before the brand colors section:

```css
  /* ── Light AI Panel ── */
  --ai-panel-bg: #f0f4ff;
  --ai-panel-border: rgba(60, 80, 180, 0.10);
  --ai-panel-border-subtle: rgba(60, 80, 180, 0.06);
  --ai-panel-divider: rgba(60, 80, 180, 0.06);
  --ai-panel-border-strong: rgba(60, 80, 180, 0.15);
  --ai-highlight-bg: rgba(0, 0, 0, 0.02);
  --ai-subtle-bg: rgba(0, 0, 0, 0.03);
  --ai-subtle-hover: rgba(0, 0, 0, 0.06);
  --ai-ring-inner: #f0f4ff;
  --ai-unselected-tab: rgba(0, 0, 0, 0.04);
  --ai-unselected-tab-hover: rgba(0, 0, 0, 0.08);
  --ai-badge-bullish-bg: rgba(9, 151, 126, 0.15);
  --ai-badge-bearish-bg: rgba(242, 109, 96, 0.15);
```

Also add matching dark-mode badge vars inside `.dark {}`, after `--ai-unselected-tab-hover`:

```css
  --ai-badge-bullish-bg: rgba(16, 205, 114, 0.15);
  --ai-badge-bearish-bg: rgba(239, 83, 80, 0.15);
```

- [ ] **Step 2: Verify both themes have matching vars**

Run: `grep -c '\-\-ai-' "Chart Design/src/styles/theme.css"`
Expected: `26` (13 in `:root`, 13 in `.dark`)

- [ ] **Step 3: Commit**

```bash
git add "Chart Design/src/styles/theme.css"
git commit -m "feat: add light-mode AI panel CSS custom properties"
```

---

### Task 2: Create PatternCard component

A single-pattern card for the list view. Shows pattern type name, confidence bar, bullish/bearish indicator, timeframe, and optional projection target.

**Note:** `detectedAt` in `DetectedPattern` is assumed to be in Unix seconds (same as `PatternPoint.timestamp`), so we multiply by 1000 for `formatTimestamp` which expects ms.

**Files:**
- Create: `packages/chart/src/Panels/PatternCard.tsx`

**Dependencies (all exist):**
- `DetectedPattern` from `@hopcharts/core`
- `formatPrice`, `formatTimestamp` from `@hopcharts/core`
- `isBullish` from `../plugins/ai/types.js`

- [ ] **Step 1: Extract `formatPatternName` from `formatPatternLabel`**

In `packages/chart/src/plugins/ai/types.ts`, refactor `formatPatternLabel` to reuse a new exported `formatPatternName`:

Change (lines 88–92):
```ts
export function formatPatternLabel(pattern: DetectedPattern): string {
  const name = pattern.type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const pct = Math.round(pattern.confidence * 100);
  return `${name} ${pct}%`;
}
```
To:
```ts
/** Title-case a pattern type name (e.g. 'double_bottom' → 'Double Bottom') */
export function formatPatternName(type: PatternType): string {
  return type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function formatPatternLabel(pattern: DetectedPattern): string {
  const pct = Math.round(pattern.confidence * 100);
  return `${formatPatternName(pattern.type)} ${pct}%`;
}
```

Also add `formatPatternName` to the barrel export in `packages/chart/src/plugins/ai/index.ts`.

- [ ] **Step 2: Create PatternCard component**

Create `packages/chart/src/Panels/PatternCard.tsx`:

```tsx
import React from 'react';
import type { DetectedPattern } from '@hopcharts/core';
import { formatPrice, formatTimestamp } from '@hopcharts/core';
import { isBullish, formatPatternName } from '../plugins/ai/types.js';

interface PatternCardProps {
  pattern: DetectedPattern;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const PatternCard = React.memo(function PatternCard({
  pattern,
  isSelected,
  onSelect,
}: PatternCardProps) {
  const bullish = isBullish(pattern.type);
  const directionColor = bullish ? 'var(--hc-green)' : 'var(--hc-red)';
  const confidencePct = Math.round(pattern.confidence * 100);

  return (
    <button
      className="w-full text-left px-[12px] py-[10px] transition-colors font-['Source_Sans_3',sans-serif]"
      style={{
        borderBottom: '1px solid var(--ai-panel-divider)',
        backgroundColor: isSelected ? 'var(--ai-subtle-bg)' : 'transparent',
        outline: isSelected ? '1px solid var(--ai-panel-border-strong)' : 'none',
        borderRadius: isSelected ? 4 : 0,
      }}
      onMouseEnter={(e) => {
        if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--ai-subtle-hover)';
      }}
      onMouseLeave={(e) => {
        if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
      }}
      onClick={() => onSelect(pattern.id)}
    >
      {/* Header: pattern name + direction badge */}
      <div className="flex items-center justify-between mb-[4px]">
        <span className="text-[13px] font-medium" style={{ color: 'var(--hc-text)' }}>
          {formatPatternName(pattern.type)}
        </span>
        <span
          className="text-[11px] font-medium px-[6px] py-[1px] rounded-full"
          style={{
            backgroundColor: bullish ? 'var(--ai-badge-bullish-bg)' : 'var(--ai-badge-bearish-bg)',
            color: directionColor,
          }}
        >
          {bullish ? 'Bullish' : 'Bearish'}
        </span>
      </div>

      {/* Confidence bar */}
      <div className="flex items-center gap-[8px] mb-[4px]">
        <div
          className="flex-1 h-[3px] rounded-full overflow-hidden"
          style={{ backgroundColor: 'var(--ai-unselected-tab)' }}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${confidencePct}%`,
              backgroundColor: directionColor,
            }}
          />
        </div>
        <span className="text-[11px] tabular-nums" style={{ color: 'var(--hc-text-secondary)' }}>
          {confidencePct}%
        </span>
      </div>

      {/* Footer: timeframe + projection target */}
      <div className="flex items-center justify-between">
        <span className="text-[11px]" style={{ color: 'var(--hc-text-muted)' }}>
          {pattern.timeframe} · {formatTimestamp(pattern.detectedAt * 1000, pattern.timeframe)}
        </span>
        {pattern.projection && (
          <span className="text-[11px]" style={{ color: directionColor }}>
            → {formatPrice(pattern.projection.targetPrice, 2)}
          </span>
        )}
      </div>
    </button>
  );
});
```

- [ ] **Step 2: Verify TypeScript compiles**

Run from repo root:
```bash
npx tsc --project packages/core/tsconfig.json && npx tsc --project packages/chart/tsconfig.json --noEmit
```
Expected: Compiles with no new errors (ignore known pre-existing errors in auth-client.ts, useDrawings.ts, useIndicators.ts)

- [ ] **Step 3: Commit**

```bash
git add packages/chart/src/Panels/PatternCard.tsx
git commit -m "feat: add PatternCard component for AI insights panel"
```

---

### Task 3: Create PatternDetail component

The detail sidebar shown when a pattern is selected. Displays full pattern info, projection details, and a "View on Chart" action.

**Files:**
- Create: `packages/chart/src/Panels/PatternDetail.tsx`

- [ ] **Step 1: Create PatternDetail component**

Create `packages/chart/src/Panels/PatternDetail.tsx`:

```tsx
import type { DetectedPattern } from '@hopcharts/core';
import { formatPrice, formatTimestamp } from '@hopcharts/core';
import { isBullish, formatPatternLabel } from '../plugins/ai/types.js';

interface PatternDetailProps {
  pattern: DetectedPattern;
  onClose: () => void;
}

export function PatternDetail({ pattern, onClose }: PatternDetailProps) {
  const bullish = isBullish(pattern.type);
  const directionColor = bullish ? 'var(--hc-green)' : 'var(--hc-red)';
  const badgeBg = bullish ? 'var(--ai-badge-bullish-bg)' : 'var(--ai-badge-bearish-bg)';
  const confidencePct = Math.round(pattern.confidence * 100);

  return (
    <div className="flex flex-col h-full font-['Source_Sans_3',sans-serif] overflow-auto">
      {/* Header */}
      <div
        className="flex items-center justify-between px-[12px] py-[10px] shrink-0"
        style={{ borderBottom: '1px solid var(--ai-panel-divider)' }}
      >
        <span className="text-[13px] font-medium" style={{ color: 'var(--hc-text)' }}>
          Pattern Details
        </span>
        <button
          className="text-[18px] leading-none px-[4px]"
          style={{ color: 'var(--hc-text-muted)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hc-text)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hc-text-muted)'; }}
          onClick={onClose}
        >
          ×
        </button>
      </div>

      {/* Content */}
      <div className="px-[12px] py-[10px] flex flex-col gap-[12px]">
        {/* Pattern name + direction */}
        <div>
          <div className="text-[15px] font-medium mb-[2px]" style={{ color: 'var(--hc-text)' }}>
            {formatPatternLabel(pattern)}
          </div>
          <span
            className="text-[11px] font-medium px-[6px] py-[1px] rounded-full inline-block"
            style={{
              backgroundColor: badgeBg,
              color: directionColor,
            }}
          >
            {bullish ? 'Bullish' : 'Bearish'}
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-[8px]">
          <DetailStat label="Confidence" value={`${confidencePct}%`} color={directionColor} />
          <DetailStat label="Timeframe" value={pattern.timeframe} />
          <DetailStat
            label="Detected"
            value={formatTimestamp(pattern.detectedAt * 1000, pattern.timeframe)}
          />
          <DetailStat label="Points" value={String(pattern.points.length)} />
        </div>

        {/* Projection section */}
        {pattern.projection && (
          <div
            className="rounded-[4px] p-[10px]"
            style={{
              backgroundColor: 'var(--ai-highlight-bg)',
              border: '1px solid var(--ai-panel-border-subtle)',
            }}
          >
            <div
              className="text-[11px] font-medium mb-[6px] uppercase tracking-wider"
              style={{ color: 'var(--hc-text-muted)' }}
            >
              Projection
            </div>
            <div className="flex items-baseline gap-[8px]">
              <span className="text-[18px] font-medium tabular-nums" style={{ color: directionColor }}>
                {formatPrice(pattern.projection.targetPrice, 2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailStat({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div>
      <div className="text-[11px] mb-[1px]" style={{ color: 'var(--hc-text-muted)' }}>
        {label}
      </div>
      <div
        className="text-[13px] font-medium"
        style={{ color: color ?? 'var(--hc-text)' }}
      >
        {value}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run from repo root:
```bash
npx tsc --project packages/core/tsconfig.json && npx tsc --project packages/chart/tsconfig.json --noEmit
```
Expected: No new errors

- [ ] **Step 3: Commit**

```bash
git add packages/chart/src/Panels/PatternDetail.tsx
git commit -m "feat: add PatternDetail component for AI insights panel"
```

---

## Chunk 2: Integration

### Task 4: Create AIInsightsPanel container

Main panel component with a pattern list and optional detail sidebar. Follows the same structure as `TradingPanel.tsx` (tabs + content).

**Files:**
- Create: `packages/chart/src/Panels/AIInsightsPanel.tsx`
- Modify: `packages/chart/src/Panels/index.ts` (add export)

**Dependencies (all exist):**
- `useAIStore` from `@hopcharts/core` — reads patterns, selectedPatternId, selectPattern
- `PatternCard` from `./PatternCard.js` (created in Task 2)
- `PatternDetail` from `./PatternDetail.js` (created in Task 3)

- [ ] **Step 1: Create AIInsightsPanel component**

Create `packages/chart/src/Panels/AIInsightsPanel.tsx`:

```tsx
import { useMemo } from 'react';
import { useAIStore } from '@hopcharts/core';
import { PatternCard } from './PatternCard.js';
import { PatternDetail } from './PatternDetail.js';

export function AIInsightsPanel() {
  const patterns = useAIStore((s) => s.patterns);
  const selectedPatternId = useAIStore((s) => s.selectedPatternId);
  const selectPattern = useAIStore((s) => s.selectPattern);

  // Plain find — O(n) on <30 items, useMemo overhead not worthwhile
  const selectedPattern = patterns.find((p) => p.id === selectedPatternId) ?? null;

  const sortedPatterns = useMemo(
    () => [...patterns].sort((a, b) => b.confidence - a.confidence),
    [patterns],
  );

  return (
    <div
      className="flex flex-col h-full font-['Source_Sans_3',sans-serif]"
      style={{
        borderTop: '1px solid var(--hc-border)',
        backgroundColor: 'var(--ai-panel-bg)',
      }}
    >
      {/* Header bar */}
      <div
        className="flex items-center shrink-0 px-[14px] py-[8px]"
        style={{ borderBottom: '1px solid var(--ai-panel-border)' }}
      >
        <span className="text-[13px] font-medium" style={{ color: 'var(--hc-text)' }}>
          AI Insights
        </span>
        {patterns.length > 0 && (
          <span
            className="ml-[6px] text-[11px] px-[4px] py-[1px] rounded-full"
            style={{ backgroundColor: 'var(--hc-accent)', color: 'var(--hc-tooltip-text)' }}
          >
            {patterns.length}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 min-h-0">
        {/* Pattern list */}
        <div className="flex-1 min-w-0 overflow-auto">
          {sortedPatterns.length === 0 ? (
            <div
              className="flex items-center justify-center h-full text-[13px]"
              style={{ color: 'var(--hc-text-muted)' }}
            >
              No patterns detected
            </div>
          ) : (
            sortedPatterns.map((p) => (
              <PatternCard
                key={p.id}
                pattern={p}
                isSelected={p.id === selectedPatternId}
                onSelect={selectPattern}
              />
            ))
          )}
        </div>

        {/* Detail sidebar */}
        {selectedPattern && (
          <div
            className="shrink-0"
            style={{
              width: 220,
              borderLeft: '1px solid var(--ai-panel-border)',
            }}
          >
            <PatternDetail
              pattern={selectedPattern}
              onClose={() => selectPattern(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Update barrel export**

In `packages/chart/src/Panels/index.ts`, add:

```ts
export { AIInsightsPanel } from './AIInsightsPanel.js';
```

(Keep existing trading exports — do not remove them.)

- [ ] **Step 3: Verify TypeScript compiles**

Run from repo root:
```bash
npx tsc --project packages/core/tsconfig.json && npx tsc --project packages/chart/tsconfig.json --noEmit
```
Expected: No new errors

- [ ] **Step 4: Commit**

```bash
git add packages/chart/src/Panels/AIInsightsPanel.tsx packages/chart/src/Panels/index.ts
git commit -m "feat: add AIInsightsPanel container with pattern list and detail sidebar"
```

---

### Task 5: Integrate AIInsightsPanel into HopChart

Wire the panel into `HopChart.tsx` so it renders when `activeSidePanel === 'ai-insights'`, using the same pattern as `TradingPanel`.

**Files:**
- Modify: `packages/chart/src/HopChart.tsx:15,192-196`

- [ ] **Step 1: Add AIInsightsPanel import**

In `packages/chart/src/HopChart.tsx`, add to the existing Panels import (line 15):

Change:
```ts
import { TradingPanel } from './Panels/index.js';
```
To:
```ts
import { TradingPanel, AIInsightsPanel } from './Panels/index.js';
```

- [ ] **Step 2: Render AIInsightsPanel below chart**

In `packages/chart/src/HopChart.tsx`, after the TradingPanel block (line 192–196), add the AIInsightsPanel rendering:

Change:
```tsx
      {showTrading && activeSidePanel === 'orders' && (
        <div style={{ height: 220, minHeight: 0 }}>
          <TradingPanel />
        </div>
      )}
```
To:
```tsx
      {showTrading && activeSidePanel === 'orders' && (
        <div style={{ height: 220, minHeight: 0 }}>
          <TradingPanel />
        </div>
      )}
      {showAIOverlay && activeSidePanel === 'ai-insights' && (
        <div style={{ height: 220, minHeight: 0 }}>
          <AIInsightsPanel />
        </div>
      )}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run from repo root:
```bash
npx tsc --project packages/core/tsconfig.json && npx tsc --project packages/chart/tsconfig.json --noEmit
```
Expected: No new errors

- [ ] **Step 4: Commit**

```bash
git add packages/chart/src/HopChart.tsx
git commit -m "feat: integrate AIInsightsPanel into HopChart layout"
```

---

### Task 6: Verify exports are consistent

`TradingPanel` is NOT exported from `packages/chart/src/index.ts` — it's imported internally by `HopChart.tsx` from `./Panels/index.js`. `AIInsightsPanel` follows the same internal-only pattern, so no root export is needed.

- [ ] **Step 1: Confirm AIInsightsPanel is in Panels barrel**

Read `packages/chart/src/Panels/index.ts` and verify it includes `export { AIInsightsPanel } from './AIInsightsPanel.js'` (added in Task 4, Step 2).

- [ ] **Step 2: Confirm HopChart imports it**

Read `packages/chart/src/HopChart.tsx` line 15 and verify it includes `AIInsightsPanel` in the Panels import (added in Task 5, Step 1).

---

## Verification

### Task 7: End-to-end verification

Verify the full data flow works: REST → aiStore → primitives render + panel displays.

- [ ] **Step 1: Build all packages**

```bash
npm run build
```
Expected: Build succeeds

- [ ] **Step 2: Type-check all packages**

```bash
npx tsc --project packages/core/tsconfig.json && npx tsc --project packages/chart/tsconfig.json --noEmit
```
Expected: No new errors (ignore known pre-existing errors)

- [ ] **Step 3: Verify data flow summary**

Confirm this data flow is intact by reading the source:
1. `charts-api.ts` → `getAIPatterns()` fetches from `/v1/charts/exchanges/{id}/patterns`
2. `hooks.ts` → `useAIPatterns()` wraps it in TanStack Query with 30s staleTime
3. `useRealtimePatterns.ts` → Subscribes to WS `pattern` events, filters by timeframe
4. `useAIOverlay.ts` → Wires REST + WS → `aiStore.setPatterns()`, attaches/detaches primitives based on visibility toggles
5. `AIInsightsPanel.tsx` → Reads `aiStore.patterns` and `selectedPatternId`, renders cards
6. `HopChart.tsx` → Renders `AIInsightsPanel` when `activeSidePanel === 'ai-insights'`

- [ ] **Step 4: Commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: resolve any issues found during verification"
```

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Modify | `Chart Design/src/styles/theme.css` | Add light-mode `--ai-*` CSS vars + badge bg vars |
| Modify | `packages/chart/src/plugins/ai/types.ts` | Extract `formatPatternName` from `formatPatternLabel` |
| Create | `packages/chart/src/Panels/PatternCard.tsx` | Memoized pattern card for list rendering |
| Create | `packages/chart/src/Panels/PatternDetail.tsx` | Selected pattern detail sidebar |
| Create | `packages/chart/src/Panels/AIInsightsPanel.tsx` | Main panel container |
| Modify | `packages/chart/src/Panels/index.ts` | Barrel export |
| Modify | `packages/chart/src/HopChart.tsx` | Render panel when active |
