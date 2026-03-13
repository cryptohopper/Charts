import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import type { DetectedPattern } from '../types/index.js';

export interface AIStore {
  patterns: DetectedPattern[];
  isLoading: boolean;
  error: string | null;
  showOverlay: boolean;
  showConfidenceMap: boolean;
  showProjections: boolean;
  highlightedInsightId: string | null;
  selectedInsightId: string | null;

  setPatterns: (patterns: DetectedPattern[]) => void;
  addPattern: (pattern: DetectedPattern) => void;
  clearPatterns: () => void;
  toggleOverlay: () => void;
  toggleConfidenceMap: () => void;
  toggleProjections: () => void;
  setHighlightedInsight: (id: string | null) => void;
  selectInsight: (id: string | null) => void;
}

export const useAIStore = create<AIStore>()(
  devtools(
    immer((set) => ({
      patterns: [],
      isLoading: false,
      error: null,
      showOverlay: true,
      showConfidenceMap: false,
      showProjections: true,
      highlightedInsightId: null,
      selectedInsightId: null,

      setPatterns: (patterns) => set({ patterns, isLoading: false, error: null }),
      addPattern: (pattern) =>
        set((state) => {
          state.patterns.push(pattern);
        }),
      clearPatterns: () =>
        set({ patterns: [], highlightedInsightId: null, selectedInsightId: null }),
      toggleOverlay: () =>
        set((state) => {
          state.showOverlay = !state.showOverlay;
        }),
      toggleConfidenceMap: () =>
        set((state) => {
          state.showConfidenceMap = !state.showConfidenceMap;
        }),
      toggleProjections: () =>
        set((state) => {
          state.showProjections = !state.showProjections;
        }),
      setHighlightedInsight: (id) => set({ highlightedInsightId: id }),
      selectInsight: (id) => set({ selectedInsightId: id }),
    })),
    { name: 'AIStore' },
  ),
);
