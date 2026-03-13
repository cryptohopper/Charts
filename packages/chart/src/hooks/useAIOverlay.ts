import { useEffect, useRef } from 'react';
import type { ISeriesApi, SeriesType } from 'lightweight-charts';
import {
  useAIStore, useChartStore, useUserStore,
  useAIPatterns, useRealtimePatterns,
} from '@hopcharts/core';
import type { DetectedPattern } from '@hopcharts/core';
import {
  AIPatternPrimitive,
  AIProjectionPrimitive,
  AIHeatmapPrimitive,
} from '../plugins/ai/index.js';

export function useAIOverlay(
  series: ISeriesApi<SeriesType> | null,
): { isActive: boolean } {
  const patternPrimRef = useRef<AIPatternPrimitive | null>(null);
  const projectionPrimRef = useRef<AIProjectionPrimitive | null>(null);
  const heatmapPrimRef = useRef<AIHeatmapPrimitive | null>(null);

  // Track attached state for each primitive to prevent double-attach/detach
  const patternAttached = useRef(false);
  const projectionAttached = useRef(false);
  const heatmapAttached = useRef(false);

  const showOverlay = useAIStore((s) => s.showOverlay);
  const showProjections = useAIStore((s) => s.showProjections);
  const showConfidenceMap = useAIStore((s) => s.showConfidenceMap);

  const exchangeId = useChartStore((s) => s.exchangeId);
  const pair = useChartStore((s) => s.pair);
  const timeframe = useChartStore((s) => s.timeframe);

  // AI scan gating — use existing store method
  const canScan = useUserStore(() => useUserStore.getState().canUseAIScan());

  // Fetch AI patterns via REST (initial load) — gated by scan availability
  const { data: restPatterns } = useAIPatterns(exchangeId, pair, timeframe, {
    enabled: canScan,
  });

  // Track which key we last consumed a scan for — prevent double-consume
  const lastConsumedKey = useRef('');
  const lastPatternsRef = useRef<DetectedPattern[] | null>(null);

  // Real-time pattern updates via WebSocket (not gated — passive updates)
  // useAIStore.getState().setPatterns is a stable reference — no ref wrapper needed
  useRealtimePatterns(exchangeId, pair, timeframe, (patterns) => {
    useAIStore.getState().setPatterns(patterns);
  });

  // Set initial patterns from REST + consume a scan
  useEffect(() => {
    if (restPatterns !== undefined) {
      const key = `${exchangeId}:${pair}:${timeframe}`;
      if (lastConsumedKey.current !== key) {
        useUserStore.getState().consumeAIScan();
        lastConsumedKey.current = key;
      }
      if (lastPatternsRef.current !== restPatterns) {
        useAIStore.getState().setPatterns(restPatterns);
        lastPatternsRef.current = restPatterns;
      }
    }
  }, [restPatterns, exchangeId, pair, timeframe]);

  // Read patterns from store
  const patterns = useAIStore((s) => s.patterns);

  // Read highlight state — strip the 'pattern:' prefix to get sourceId
  const highlightedInsightId = useAIStore((s) => s.highlightedInsightId);
  const highlightedSourceId = highlightedInsightId?.startsWith('pattern:')
    ? highlightedInsightId.slice(8)
    : null;

  // Attach/detach primitives based on visibility toggles
  useEffect(() => {
    if (!series) return;

    // Create primitives lazily
    if (!patternPrimRef.current) {
      patternPrimRef.current = new AIPatternPrimitive();
    }
    if (!projectionPrimRef.current) {
      projectionPrimRef.current = new AIProjectionPrimitive();
    }
    if (!heatmapPrimRef.current) {
      heatmapPrimRef.current = new AIHeatmapPrimitive();
    }

    const patternPrim = patternPrimRef.current;
    const projectionPrim = projectionPrimRef.current;
    const heatmapPrim = heatmapPrimRef.current;

    // Pattern overlay
    const wantPattern = showOverlay;
    if (wantPattern && !patternAttached.current) {
      series.attachPrimitive(patternPrim);
      patternAttached.current = true;
    } else if (!wantPattern && patternAttached.current) {
      series.detachPrimitive(patternPrim);
      patternAttached.current = false;
    }

    // Projections
    const wantProjection = showOverlay && showProjections;
    if (wantProjection && !projectionAttached.current) {
      series.attachPrimitive(projectionPrim);
      projectionAttached.current = true;
    } else if (!wantProjection && projectionAttached.current) {
      series.detachPrimitive(projectionPrim);
      projectionAttached.current = false;
    }

    // Confidence heatmap
    const wantHeatmap = showOverlay && showConfidenceMap;
    if (wantHeatmap && !heatmapAttached.current) {
      series.attachPrimitive(heatmapPrim);
      heatmapAttached.current = true;
    } else if (!wantHeatmap && heatmapAttached.current) {
      series.detachPrimitive(heatmapPrim);
      heatmapAttached.current = false;
    }

    return () => {
      if (patternAttached.current) {
        series.detachPrimitive(patternPrim);
        patternAttached.current = false;
      }
      if (projectionAttached.current) {
        series.detachPrimitive(projectionPrim);
        projectionAttached.current = false;
      }
      if (heatmapAttached.current) {
        series.detachPrimitive(heatmapPrim);
        heatmapAttached.current = false;
      }
    };
  }, [series, showOverlay, showProjections, showConfidenceMap]);

  // Update pattern data on primitives when patterns change
  useEffect(() => {
    patternPrimRef.current?.updatePatterns(patterns);
    projectionPrimRef.current?.updatePatterns(patterns);
    heatmapPrimRef.current?.updatePatterns(patterns);
  }, [patterns]);

  // Propagate highlight state to primitives
  useEffect(() => {
    patternPrimRef.current?.setHighlightedId(highlightedSourceId);
    projectionPrimRef.current?.setHighlightedId(highlightedSourceId);
    heatmapPrimRef.current?.setHighlightedId(highlightedSourceId);
  }, [highlightedSourceId]);

  return { isActive: showOverlay };
}
