import { useEffect, useRef } from 'react';
import type { IChartApi, ISeriesApi, SeriesType, Time } from 'lightweight-charts';
import { useDrawingStore } from '@hopcharts/core';
import type { Drawing, DrawingToolType } from '@hopcharts/core';
import { DrawingManager } from '../plugins/drawings/index.js';
import type { DrawingData, AnchorPoint } from '../plugins/drawings/types.js';

/** Convert core Drawing anchors (time: number) to chart AnchorPoint (time: Time) */
function toChartDrawingData(drawing: Drawing): DrawingData {
  return {
    id: drawing.id,
    type: drawing.type as DrawingData['type'],
    anchors: drawing.anchors.map((a) => ({
      time: a.time as unknown as Time,
      price: a.price,
    })),
    style: drawing.style,
    locked: drawing.locked,
    visible: drawing.visible,
  };
}

/** Convert chart AnchorPoint (time: Time) to core Drawing anchors (time: number) */
function toCoreAnchors(
  anchors: AnchorPoint[],
): Array<{ time: number; price: number }> {
  return anchors.map((a) => ({
    time: a.time as unknown as number,
    price: a.price,
  }));
}

export function useDrawings(
  chart: IChartApi | null,
  series: ISeriesApi<SeriesType> | null,
  container: HTMLElement | null,
): { drawingManagerRef: React.RefObject<DrawingManager | null> } {
  const drawingManagerRef = useRef<DrawingManager | null>(null);

  useEffect(() => {
    if (!chart || !series || !container) return;

    const store = useDrawingStore.getState();

    const manager = new DrawingManager(chart, series, container, {
      onDrawingCreated: (data) => {
        useDrawingStore.getState().addDrawing({
          id: data.id,
          type: data.type,
          anchors: toCoreAnchors(data.anchors),
          style: data.style,
          locked: data.locked,
          visible: data.visible,
        });
      },
      onDrawingUpdated: (data) => {
        useDrawingStore.getState().updateDrawing(data.id, {
          anchors: toCoreAnchors(data.anchors),
          style: data.style,
          locked: data.locked,
          visible: data.visible,
        });
      },
      onDrawingRemoved: (id) => {
        useDrawingStore.getState().removeDrawing(id);
      },
      onDrawingSelected: (id) => {
        useDrawingStore.getState().selectDrawing(id);
      },
    });

    drawingManagerRef.current = manager;

    // Load saved drawings from store
    const savedDrawings = store.drawings;
    if (savedDrawings.length > 0) {
      const drawingData = savedDrawings.map(toChartDrawingData);
      manager.loadDrawings(drawingData);
    }

    // Subscribe to active tool changes from the store
    let prevTool: DrawingToolType | null = store.activeToolType;
    const unsubTool = useDrawingStore.subscribe((state) => {
      if (state.activeToolType !== prevTool) {
        prevTool = state.activeToolType;
        manager.setActiveTool(state.activeToolType as DrawingData['type'] | null);
      }
    });

    return () => {
      unsubTool();
      manager.destroy();
      drawingManagerRef.current = null;
    };
  }, [chart, series, container]);

  return { drawingManagerRef };
}
