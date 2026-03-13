# Feature Gates & Tier Definitions Plan

## Tier Structure

| Tier | Description |
|------|-------------|
| **Pioneer** | Free/base tier — basic charting |
| **Explorer** | Basic drawing tools, more AI scans |
| **Adventurer** | All tools, templates, multi-chart |
| **Hero** | Everything + premium indicators + advanced AI |

## Feature Access Matrix

| Feature | Pioneer | Explorer | Adventurer | Hero |
|---------|---------|----------|------------|------|
| Basic charting | Y | Y | Y | Y |
| Save charts | login req | login req | login req | login req |
| Basic indicators | Y | Y | Y | Y |
| Premium indicators | - | - | - | Y |
| Basic drawing tools | - | Y | Y | Y |
| All drawing tools | - | - | Y | Y |
| Multi-chart | - | - | Y | Y |
| Chart templates | - | - | Y | Y |
| AI Analysis (standard) | 3/day | 10/day | 25/day | unlimited |
| AI Analysis (advanced) | - | - | - | Y |

### Premium Indicators (Hero-only)
ichimoku, supertrend, psar, vwma, dema, tema, kc, vwap, wma

### Basic Drawing Tools (Explorer+)
trendline, horizontal_line, vertical_line, text_label

### Advanced Drawing Tools (Adventurer+)
fibonacci_retracement, parallel_channel, rectangle, arrow, measure

## Implementation Tasks

### Task 1: Tier types and config (packages/core/src/auth/)
- Update `SubscriptionTier` to `'pioneer' | 'explorer' | 'adventurer' | 'hero'`
- Create `tier-config.ts` with library-agnostic tier metadata:
  - Display names, ordinals for comparison
  - AI scan daily limits per tier
  - AI model tier ('standard' | 'advanced')
  - `hasMinTier(current, required)` helper
- Update `FeatureKey` to add: `basic_drawing_tools`, `advanced_drawing_tools`, `premium_indicators`, `ai_advanced`, `save_charts`
- Update `featureAccess` matrix for 4 tiers
- Keep `canAccess()` working as before

### Task 2: Update userStore with AI usage tracking
- Add `aiScansToday: number`, `aiScansResetDate: string` (ISO date)
- Add `consumeAIScan()`, `canUseAIScan()`, `resetDailyScansIfNeeded()`
- Persist to IndexedDB with existing store

### Task 3: Gate DrawingToolsMenu by tier
- Import tier config, useUserStore
- Basic tools (trendline, h-line, v-line, text_label): Explorer+
- Advanced tools (fib, channel, rect, arrow, measure): Adventurer+
- Locked tools: show lock icon, reduced opacity, click shows upgrade hint
- No tier / not logged in: entire menu locked

### Task 4: Gate IndicatorMenu by tier
- Add `premium?: boolean` flag to IndicatorDef
- Premium indicators: ichimoku, supertrend, psar, vwma, dema, tema, kc, vwap, wma
- Hero-only: show "Hero" badge + lock icon on premium indicators
- Non-Hero clicking premium → show upgrade hint instead of adding

### Task 5: Update AIToggle for new tier system
- Replace `=== 'ai'` with tier-based check using `hasMinTier`
- All tiers get AI (with scan limits), not just top tier
- Show scan usage: "3/10 scans today" in dropdown
- Hero badge for advanced AI model

### Task 6: Update remaining UI references
- LoginButton.tsx: display new tier names
- SettingsPage.tsx: display new tier names
- Any other hardcoded 'free'|'pro'|'ai' references

### Task 7: Update exports and verify build
- Barrel exports for new modules (tier-config)
- Rebuild core, type-check chart package
