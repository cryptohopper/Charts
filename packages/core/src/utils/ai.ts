import type { DetectedPattern, PatternType } from '../types/pattern.js';
import type { AIInsight } from '../types/ai-insight.js';

const BULLISH_PATTERNS: ReadonlySet<PatternType> = new Set([
  'inverse_head_and_shoulders',
  'double_bottom',
  'ascending_triangle',
  'bull_flag',
  'falling_wedge',
  'cup_and_handle',
]);

export function isBullish(type: PatternType): boolean {
  return BULLISH_PATTERNS.has(type);
}

const PATTERN_DISPLAY_NAMES: Record<PatternType, string> = {
  head_and_shoulders: 'Head & Shoulders',
  inverse_head_and_shoulders: 'Inverse Head & Shoulders',
  double_top: 'Double Top',
  double_bottom: 'Double Bottom',
  ascending_triangle: 'Ascending Triangle',
  descending_triangle: 'Descending Triangle',
  symmetrical_triangle: 'Symmetrical Triangle',
  bull_flag: 'Bull Flag',
  bear_flag: 'Bear Flag',
  rising_wedge: 'Rising Wedge',
  falling_wedge: 'Falling Wedge',
  cup_and_handle: 'Cup & Handle',
};

type TemplateGenerator = (confidence: number, targetPrice?: number) => string;

const SUMMARY_TEMPLATES: Record<PatternType, TemplateGenerator> = {
  head_and_shoulders: (c, t) =>
    t ? `Bearish reversal pattern — target ${formatTarget(t)} (${pct(c)}%)` : `Bearish reversal pattern (${pct(c)}% confidence)`,
  inverse_head_and_shoulders: (c, t) =>
    t ? `Bullish reversal pattern — target ${formatTarget(t)} (${pct(c)}%)` : `Bullish reversal pattern (${pct(c)}% confidence)`,
  double_top: (c, t) =>
    t ? `Bearish reversal — double top detected, target ${formatTarget(t)}` : `Bearish reversal — double top detected (${pct(c)}% confidence)`,
  double_bottom: (c, t) =>
    t ? `Bullish reversal — double bottom detected, target ${formatTarget(t)}` : `Bullish reversal — double bottom detected (${pct(c)}% confidence)`,
  ascending_triangle: (c, t) =>
    t ? `Bullish continuation — breakout target ${formatTarget(t)}` : `Bullish continuation — ascending triangle (${pct(c)}% confidence)`,
  descending_triangle: (c, t) =>
    t ? `Bearish continuation — breakdown target ${formatTarget(t)}` : `Bearish continuation — descending triangle (${pct(c)}% confidence)`,
  symmetrical_triangle: (c) =>
    `Consolidation pattern — breakout pending (${pct(c)}% confidence)`,
  bull_flag: (c, t) =>
    t ? `Bullish continuation — flag target ${formatTarget(t)}` : `Bullish continuation — bull flag (${pct(c)}% confidence)`,
  bear_flag: (c, t) =>
    t ? `Bearish continuation — flag target ${formatTarget(t)}` : `Bearish continuation — bear flag (${pct(c)}% confidence)`,
  rising_wedge: (c, t) =>
    t ? `Bearish reversal — rising wedge, target ${formatTarget(t)}` : `Bearish reversal — rising wedge (${pct(c)}% confidence)`,
  falling_wedge: (c, t) =>
    t ? `Bullish reversal — falling wedge, target ${formatTarget(t)}` : `Bullish reversal — falling wedge (${pct(c)}% confidence)`,
  cup_and_handle: (c, t) =>
    t ? `Bullish continuation — cup & handle, target ${formatTarget(t)}` : `Bullish continuation — cup & handle (${pct(c)}% confidence)`,
};

const EDUCATIONAL_CONTENT: Record<PatternType, string> = {
  head_and_shoulders:
    'A Head & Shoulders pattern forms when price creates three peaks, with the middle peak (head) higher than the two surrounding peaks (shoulders). It signals a potential reversal from bullish to bearish momentum. Watch for a break below the neckline connecting the two troughs for confirmation.',
  inverse_head_and_shoulders:
    'An Inverse Head & Shoulders forms when price creates three troughs, with the middle trough (head) lower than the two surrounding troughs (shoulders). It signals a potential reversal from bearish to bullish momentum. Watch for a break above the neckline for confirmation.',
  double_top:
    'A Double Top occurs when price reaches the same resistance level twice and fails to break through. The two peaks at roughly the same price level indicate strong selling pressure. A break below the support between the two tops confirms the pattern.',
  double_bottom:
    'A Double Bottom forms when price hits the same support level twice and bounces. The two troughs at roughly the same price level indicate strong buying interest. A break above the resistance between the two bottoms confirms the reversal.',
  ascending_triangle:
    'An Ascending Triangle features a flat upper resistance line and a rising lower trendline. It indicates increasing buying pressure as buyers step in at progressively higher prices. A breakout above the flat resistance typically continues the uptrend.',
  descending_triangle:
    'A Descending Triangle has a flat lower support line and a falling upper trendline. It indicates increasing selling pressure as sellers accept progressively lower prices. A breakdown below the flat support typically continues the downtrend.',
  symmetrical_triangle:
    'A Symmetrical Triangle forms when both trendlines converge, with lower highs and higher lows. It represents a period of consolidation where neither buyers nor sellers are in control. The breakout direction determines the next trend.',
  bull_flag:
    'A Bull Flag appears as a brief downward-sloping consolidation after a sharp upward move (the flagpole). The pullback reflects temporary profit-taking before buyers resume. A breakout above the flag signals continuation of the prior uptrend.',
  bear_flag:
    'A Bear Flag appears as a brief upward-sloping consolidation after a sharp downward move (the flagpole). The bounce reflects temporary short-covering before sellers resume. A breakdown below the flag signals continuation of the prior downtrend.',
  rising_wedge:
    'A Rising Wedge features two converging upward-sloping trendlines. While price makes higher highs and higher lows, the narrowing range indicates weakening momentum. It typically resolves with a bearish breakdown below the lower trendline.',
  falling_wedge:
    'A Falling Wedge features two converging downward-sloping trendlines. While price makes lower highs and lower lows, the narrowing range indicates weakening selling pressure. It typically resolves with a bullish breakout above the upper trendline.',
  cup_and_handle:
    'A Cup & Handle pattern resembles a tea cup in shape — a rounded bottom (cup) followed by a small downward drift (handle). It signals accumulation and typically resolves with a bullish breakout above the handle resistance, continuing the prior uptrend.',
};

function pct(confidence: number): number {
  return Math.round(confidence * 100);
}

function formatTarget(price: number): string {
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

export function patternsToInsights(patterns: DetectedPattern[]): AIInsight[] {
  return patterns
    .map((p): AIInsight => ({
      id: `pattern:${p.id}`,
      kind: 'pattern',
      sourceId: p.id,
      name: PATTERN_DISPLAY_NAMES[p.type],
      confidence: p.confidence,
      summary: SUMMARY_TEMPLATES[p.type](p.confidence, p.projection?.targetPrice),
      educationalContent: EDUCATIONAL_CONTENT[p.type],
      detectedAt: p.detectedAt,
      timeframe: p.timeframe,
      projection: p.projection ? { targetPrice: p.projection.targetPrice } : undefined,
      bullish: BULLISH_PATTERNS.has(p.type),
    }))
    .sort((a, b) => b.confidence - a.confidence || b.detectedAt - a.detectedAt);
}
