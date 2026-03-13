import { useMemo, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import {
  useAIStore,
  useUIStore,
  useChartStore,
  useUserStore,
  useAIPatterns,
  patternsToInsights,
  useScanUsage,
} from '@hopcharts/core';
import { InsightCard } from './InsightCard.js';

export function AIInsightsContent() {
  const patterns = useAIStore((s) => s.patterns);
  const setSidePanel = useUIStore((s) => s.setSidePanel);
  const exchangeId = useChartStore((s) => s.exchangeId);
  const pair = useChartStore((s) => s.pair);
  const timeframe = useChartStore((s) => s.timeframe);
  const canScan = useUserStore(() => useUserStore.getState().canUseAIScan());
  const { isLoading, isError, refetch } = useAIPatterns(exchangeId, pair, timeframe, {
    enabled: canScan,
  });

  const insights = useMemo(() => patternsToInsights(patterns), [patterns]);
  const { scanLimit, currentScans, limitReached, scansDisplay } = useScanUsage();

  // Accordion state — on mobile, only one card open at a time
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Escape key to close panel
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSidePanel(null);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setSidePanel]);

  return (
    <div className="flex flex-col h-full font-['Source_Sans_3',sans-serif]">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0"
        style={{ borderColor: 'var(--hc-border)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: 'var(--hc-text)' }}>
            AI Insights
          </span>
          {insights.length > 0 && (
            <span
              className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--hc-accent) 15%, transparent)',
                color: 'var(--hc-accent)',
              }}
            >
              {insights.length}
            </span>
          )}
        </div>
        <button
          className="p-1 rounded transition-colors"
          style={{ color: 'var(--hc-text-secondary)' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; }}
          onClick={() => setSidePanel(null)}
        >
          <X size={16} />
        </button>
      </div>

      {/* Scan usage bar */}
      <div
        className="hidden md:flex items-center gap-2 px-4 py-2 border-b flex-shrink-0"
        style={{ borderColor: 'var(--hc-border)' }}
      >
        <span
          className="text-[11px]"
          style={{ color: limitReached ? 'var(--hc-red)' : 'var(--hc-text-secondary)' }}
        >
          {scansDisplay}
        </span>
        {scanLimit !== Infinity && (
          <div
            className="flex-1 h-1 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--hc-border)' }}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${Math.min((currentScans / scanLimit) * 100, 100)}%`,
                backgroundColor: limitReached ? 'var(--hc-red)' : 'var(--hc-accent)',
              }}
            />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        {insights.length > 0 ? (
          <div className="flex flex-col gap-2">
            {insights.map((insight) => (
              <InsightCard
                key={insight.id}
                insight={insight}
                isExpanded={expandedId === insight.id}
                onToggleExpand={() =>
                  setExpandedId((prev) => (prev === insight.id ? null : insight.id))
                }
              />
            ))}
          </div>
        ) : !pair ? (
          <div className="text-center py-8">
            <p className="text-sm" style={{ color: 'var(--hc-text-secondary)' }}>
              Selecteer een pair om AI analyse te starten
            </p>
          </div>
        ) : isLoading ? (
          <div className="flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg animate-pulse"
                style={{ backgroundColor: 'var(--hc-surface-hover)', height: 80 }}
              />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-8">
            <p className="text-sm mb-2" style={{ color: 'var(--hc-text-secondary)' }}>
              Analyse kon niet worden geladen
            </p>
            <button
              className="text-xs px-3 py-1.5 rounded"
              style={{
                color: 'var(--hc-accent)',
                border: '1px solid var(--hc-accent)',
              }}
              onClick={() => refetch()}
            >
              Opnieuw proberen
            </button>
          </div>
        ) : limitReached ? (
          <div className="text-center py-8">
            <p className="text-sm mb-1" style={{ color: 'var(--hc-text-secondary)' }}>
              Dagelijkse limiet bereikt
            </p>
            <p className="text-xs" style={{ color: 'var(--hc-text-muted)' }}>
              Upgrade je abonnement voor meer AI scans
            </p>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-sm mb-1" style={{ color: 'var(--hc-text-secondary)' }}>
              Geen patronen gevonden
            </p>
            <p className="text-xs" style={{ color: 'var(--hc-text-muted)' }}>
              De AI heeft geen herkenbare patronen gedetecteerd op dit moment
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
