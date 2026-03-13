import type { SubscriptionTier } from './auth-client.js';

/* ─── Tier ordinal for comparison ──────────── */

const TIER_ORDER: Record<SubscriptionTier, number> = {
  pioneer: 0,
  explorer: 1,
  adventurer: 2,
  hero: 3,
};

/** Returns true when `current` is at least `required`. */
export function hasMinTier(
  current: SubscriptionTier | null,
  required: SubscriptionTier,
): boolean {
  if (!current) return false;
  return TIER_ORDER[current] >= TIER_ORDER[required];
}

/* ─── AI model tiers ───────────────────────── */

export type AIModelTier = 'standard' | 'advanced';

export function getAIModelTier(tier: SubscriptionTier | null): AIModelTier {
  return tier === 'hero' ? 'advanced' : 'standard';
}

/* ─── AI scan daily limits ─────────────────── */

/** Returns max AI scans per day. `Infinity` means unlimited. */
export function getAIScanLimit(tier: SubscriptionTier | null): number {
  switch (tier) {
    case 'hero': return Infinity;
    case 'adventurer': return 25;
    case 'explorer': return 10;
    case 'pioneer':
    default: return 3;
  }
}

/* ─── Display helpers ──────────────────────── */

const TIER_DISPLAY_NAMES: Record<SubscriptionTier, string> = {
  pioneer: 'Pioneer',
  explorer: 'Explorer',
  adventurer: 'Adventurer',
  hero: 'Hero',
};

export function getTierDisplayName(tier: SubscriptionTier | null): string {
  if (!tier) return 'Pioneer';
  return TIER_DISPLAY_NAMES[tier];
}

/* ─── Drawing tool tiers ───────────────────── */

export type DrawingToolTier = 'basic' | 'advanced';

const BASIC_DRAWING_TOOLS = new Set([
  'trendline', 'horizontal_line', 'vertical_line', 'text_label',
]);

export function getDrawingToolTier(toolType: string): DrawingToolTier {
  return BASIC_DRAWING_TOOLS.has(toolType) ? 'basic' : 'advanced';
}

/** Minimum tier needed for a drawing tool. */
export function getMinTierForDrawingTool(toolType: string): SubscriptionTier {
  return getDrawingToolTier(toolType) === 'basic' ? 'explorer' : 'adventurer';
}

/* ─── Premium indicators ───────────────────── */

const PREMIUM_INDICATOR_IDS = new Set([
  'ichimoku', 'supertrend', 'psar', 'vwma', 'dema', 'tema', 'kc', 'vwap', 'wma',
]);

export function isPremiumIndicator(indicatorId: string): boolean {
  return PREMIUM_INDICATOR_IDS.has(indicatorId);
}
