import { useState } from 'react';
import { ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';
import { useAIStore } from '@hopcharts/core';
import type { AIInsight } from '@hopcharts/core';

interface InsightCardProps {
  insight: AIInsight;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function confidenceColor(confidence: number): string {
  if (confidence > 0.7) return 'var(--hc-green)';
  if (confidence >= 0.4) return 'var(--hc-accent)';
  return 'var(--hc-red)';
}

export function InsightCard({ insight, isExpanded, onToggleExpand }: InsightCardProps) {
  const setHighlightedInsight = useAIStore((s) => s.setHighlightedInsight);

  return (
    <div
      className="rounded-lg border transition-colors"
      style={{
        background: 'var(--hc-surface)',
        borderColor: 'var(--hc-border)',
      }}
      onMouseEnter={() => setHighlightedInsight(insight.id)}
      onMouseLeave={() => setHighlightedInsight(null)}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <div className="flex-shrink-0" style={{ color: insight.bullish ? 'var(--hc-green)' : 'var(--hc-red)' }}>
          {insight.bullish ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        </div>
        <span className="flex-1 text-sm font-medium truncate" style={{ color: 'var(--hc-text)' }}>
          {insight.name}
        </span>
        <span
          className="flex-shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded"
          style={{
            color: confidenceColor(insight.confidence),
            background: `color-mix(in srgb, ${confidenceColor(insight.confidence)} 15%, transparent)`,
          }}
        >
          {Math.round(insight.confidence * 100)}%
        </span>
      </div>

      {/* Summary */}
      <p className="px-3 pb-2 text-xs leading-relaxed" style={{ color: 'var(--hc-text-secondary)' }}>
        {insight.summary}
      </p>

      {/* Expandable "Meer info" */}
      <button
        className="flex items-center gap-1 px-3 pb-2.5 text-xs transition-colors"
        style={{ color: 'var(--hc-accent)' }}
        onClick={onToggleExpand}
      >
        <span>Meer info</span>
        <ChevronDown
          size={12}
          className="transition-transform"
          style={{ transform: isExpanded ? 'rotate(180deg)' : undefined }}
        />
      </button>

      {isExpanded && (
        <div
          className="px-3 pb-3 text-xs leading-relaxed border-t pt-2.5"
          style={{ color: 'var(--hc-text-secondary)', borderColor: 'var(--hc-border)' }}
        >
          {insight.educationalContent}
        </div>
      )}
    </div>
  );
}
