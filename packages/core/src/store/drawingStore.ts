import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, devtools } from 'zustand/middleware';
import type { DrawingToolType, Drawing } from '../types/index.js';

export interface DrawingStore {
  // Active tool
  activeToolType: DrawingToolType | null;
  setActiveTool: (type: DrawingToolType | null) => void;

  // Drawings
  drawings: Drawing[];
  addDrawing: (drawing: Drawing) => void;
  updateDrawing: (id: string, updates: Partial<Drawing>) => void;
  removeDrawing: (id: string) => void;
  clearAllDrawings: () => void;

  // Selection
  selectedDrawingId: string | null;
  selectDrawing: (id: string | null) => void;

  // Serialization
  toDrawingState: () => Drawing[];
  fromDrawingState: (drawings: Drawing[]) => void;
}

export const useDrawingStore = create<DrawingStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        activeToolType: null,
        setActiveTool: (type) => set({ activeToolType: type }),

        drawings: [],
        addDrawing: (drawing) =>
          set((state) => {
            state.drawings.push(drawing);
          }),
        updateDrawing: (id, updates) =>
          set((state) => {
            const drawing = state.drawings.find((d) => d.id === id);
            if (drawing) {
              Object.assign(drawing, updates);
            }
          }),
        removeDrawing: (id) =>
          set((state) => {
            state.drawings = state.drawings.filter((d) => d.id !== id);
          }),
        clearAllDrawings: () => set({ drawings: [], selectedDrawingId: null }),

        selectedDrawingId: null,
        selectDrawing: (id) => set({ selectedDrawingId: id }),

        toDrawingState: () => get().drawings,
        fromDrawingState: (drawings) =>
          set({ drawings, selectedDrawingId: null, activeToolType: null }),
      })),
      {
        name: 'hopcharts-drawings',
        partialize: (state) => ({
          drawings: state.drawings,
        }),
      },
    ),
    { name: 'DrawingStore' },
  ),
);
