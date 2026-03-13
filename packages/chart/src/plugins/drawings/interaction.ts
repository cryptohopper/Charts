import type {
  Time,
  IChartApi,
  ISeriesApi,
  SeriesType,
} from 'lightweight-charts';
import type {
  AnchorPoint,
  PixelPoint,
  HitTarget,
  DrawingHitTestResult,
} from './types';
import { anchorToPixel, pixelToAnchor, HIT_THRESHOLD } from './utils';
import type { BaseDrawingPrimitive } from './base-drawing';

// ─── Drag state ───────────────────────────────────────────────────────

interface DragState {
  drawingId: string;
  target: HitTarget;
  startPixel: PixelPoint;
  /** Snapshot of all anchors at drag start, used for relative delta moves */
  startAnchors: AnchorPoint[];
}

// ─── InteractionHandler ───────────────────────────────────────────────

export class InteractionHandler {
  private _primitives: Map<string, BaseDrawingPrimitive> = new Map();
  private _selectedId: string | null = null;
  private _hoveredId: string | null = null;
  private _dragState: DragState | null = null;
  private readonly _chart: IChartApi;
  private readonly _series: ISeriesApi<SeriesType>;

  constructor(chart: IChartApi, series: ISeriesApi<SeriesType>) {
    this._chart = chart;
    this._series = series;
  }

  // ─── Primitive registration ───────────────────────────────────────

  addPrimitive(primitive: BaseDrawingPrimitive): void {
    this._primitives.set(primitive.id, primitive);
  }

  removePrimitive(id: string): void {
    const primitive = this._primitives.get(id);
    if (!primitive) return;

    if (this._selectedId === id) {
      primitive.setSelected(false);
      this._selectedId = null;
    }
    if (this._hoveredId === id) {
      primitive.setHovered(false);
      this._hoveredId = null;
    }
    if (this._dragState?.drawingId === id) {
      this._dragState = null;
    }

    this._primitives.delete(id);
  }

  // ─── Selection ────────────────────────────────────────────────────

  getSelectedId(): string | null {
    return this._selectedId;
  }

  setSelected(id: string | null): void {
    // Deselect previous
    if (this._selectedId !== null && this._selectedId !== id) {
      const prev = this._primitives.get(this._selectedId);
      prev?.setSelected(false);
    }

    this._selectedId = id;

    if (id !== null) {
      const primitive = this._primitives.get(id);
      primitive?.setSelected(true);
    }
  }

  // ─── Hit testing ──────────────────────────────────────────────────

  /**
   * Hit test all registered primitives at the given pixel point.
   * Returns the closest hit within HIT_THRESHOLD, or null.
   * Anchor hits take priority over body/edge hits.
   */
  hitTestAll(pixel: PixelPoint): DrawingHitTestResult | null {
    let bestAnchorHit: DrawingHitTestResult | null = null;
    let bestBodyHit: DrawingHitTestResult | null = null;

    for (const [, primitive] of this._primitives) {
      const data = primitive.data;
      if (!data.visible) continue;

      const pixelAnchors = data.anchors.map((a) =>
        anchorToPixel(a, this._chart, this._series),
      );

      // Check anchor proximity first
      for (let i = 0; i < pixelAnchors.length; i++) {
        const pa = pixelAnchors[i];
        if (!pa) continue;
        const distance = Math.hypot(pixel.x - pa.x, pixel.y - pa.y);
        if (distance <= HIT_THRESHOLD) {
          if (!bestAnchorHit || distance < bestAnchorHit.distance) {
            bestAnchorHit = {
              drawingId: data.id,
              target: { type: 'anchor', index: i },
              distance,
            };
          }
        }
      }

      // Check body/edge via the primitive's built-in hitTest
      const hitResult = primitive.hitTest(pixel.x, pixel.y);
      if (hitResult) {
        // The primitive reports a hit — compute approximate distance to centroid
        // for ordering. Use the minimum distance to any anchor as a proxy.
        let minDist = HIT_THRESHOLD;
        for (const pa of pixelAnchors) {
          if (!pa) continue;
          const d = Math.hypot(pixel.x - pa.x, pixel.y - pa.y);
          if (d < minDist) minDist = d;
        }

        // Body hit — only use if no closer body hit exists
        const bodyResult: DrawingHitTestResult = {
          drawingId: data.id,
          target: { type: 'body' },
          distance: minDist,
        };

        if (!bestBodyHit || minDist < bestBodyHit.distance) {
          bestBodyHit = bodyResult;
        }
      }
    }

    // Anchor hits always take priority over body hits
    return bestAnchorHit ?? bestBodyHit;
  }

  // ─── Mouse handlers ───────────────────────────────────────────────

  handleMouseDown(pixel: PixelPoint): {
    handled: boolean;
    drawingId?: string;
    target?: HitTarget;
  } {
    const hit = this.hitTestAll(pixel);

    if (!hit) {
      // Clicked on empty space — deselect
      this.setSelected(null);
      return { handled: false };
    }

    const primitive = this._primitives.get(hit.drawingId);
    if (!primitive) return { handled: false };

    // Don't allow dragging locked drawings
    if (primitive.data.locked) {
      this.setSelected(hit.drawingId);
      return { handled: true, drawingId: hit.drawingId, target: hit.target };
    }

    // Select the hit drawing
    this.setSelected(hit.drawingId);

    // Start drag — snapshot current anchors
    this._dragState = {
      drawingId: hit.drawingId,
      target: hit.target,
      startPixel: { ...pixel },
      startAnchors: primitive.data.anchors.map((a) => ({ ...a })),
    };

    return { handled: true, drawingId: hit.drawingId, target: hit.target };
  }

  handleMouseMove(pixel: PixelPoint): {
    cursor: string;
    hoveredId: string | null;
  } {
    // ── Active drag ──
    if (this._dragState) {
      this._processDrag(pixel);
      const cursor = this._getCursorForTarget(this._dragState.target);
      return { cursor, hoveredId: this._hoveredId };
    }

    // ── Hover detection ──
    const hit = this.hitTestAll(pixel);
    const newHoveredId = hit?.drawingId ?? null;

    // Update hovered state if changed
    if (newHoveredId !== this._hoveredId) {
      if (this._hoveredId !== null) {
        const prev = this._primitives.get(this._hoveredId);
        prev?.setHovered(false);
      }
      if (newHoveredId !== null) {
        const next = this._primitives.get(newHoveredId);
        next?.setHovered(true);
      }
      this._hoveredId = newHoveredId;
    }

    const cursor = hit ? this._getCursorForTarget(hit.target) : 'default';
    return { cursor, hoveredId: newHoveredId };
  }

  handleMouseUp(_pixel: PixelPoint): void {
    this._dragState = null;
  }

  // ─── Keyboard handler ─────────────────────────────────────────────

  handleKeyDown(event: KeyboardEvent): {
    handled: boolean;
    action?: 'delete' | 'cancel' | 'deselect';
    drawingId?: string;
  } {
    if (event.key === 'Delete' || event.key === 'Backspace') {
      if (this._selectedId !== null) {
        const drawingId = this._selectedId;
        return { handled: true, action: 'delete', drawingId };
      }
    }

    if (event.key === 'Escape') {
      if (this._selectedId !== null) {
        const drawingId = this._selectedId;
        this.setSelected(null);
        return { handled: true, action: 'deselect', drawingId };
      }
      return { handled: true, action: 'cancel' };
    }

    return { handled: false };
  }

  // ─── Cleanup ──────────────────────────────────────────────────────

  destroy(): void {
    // Clear all hover/selection state
    if (this._hoveredId !== null) {
      const hovered = this._primitives.get(this._hoveredId);
      hovered?.setHovered(false);
    }
    if (this._selectedId !== null) {
      const selected = this._primitives.get(this._selectedId);
      selected?.setSelected(false);
    }

    this._primitives.clear();
    this._selectedId = null;
    this._hoveredId = null;
    this._dragState = null;
  }

  // ─── Private helpers ──────────────────────────────────────────────

  private _processDrag(pixel: PixelPoint): void {
    const { drawingId, target, startPixel, startAnchors } = this._dragState!;

    const primitive = this._primitives.get(drawingId);
    if (!primitive) {
      this._dragState = null;
      return;
    }

    if (target.type === 'anchor') {
      // Drag a single anchor — convert current pixel to chart coords directly
      const newAnchor = pixelToAnchor(pixel, this._chart, this._series);
      if (newAnchor) {
        primitive.updateAnchor(target.index, newAnchor);
      }
    } else {
      // Body or edge drag — move all anchors by the delta
      const startCoord = pixelToAnchor(startPixel, this._chart, this._series);
      const currentCoord = pixelToAnchor(pixel, this._chart, this._series);

      if (!startCoord || !currentCoord) return;

      const priceDelta = currentCoord.price - startCoord.price;

      // Compute time delta as a number (works for UTCTimestamp)
      const startTimeNum = startCoord.time as number;
      const currentTimeNum = currentCoord.time as number;
      const timeDelta = currentTimeNum - startTimeNum;

      // Apply deltas to all anchors from the original snapshot
      const newAnchors = startAnchors.map((original) => ({
        time: ((original.time as number) + timeDelta) as Time,
        price: original.price + priceDelta,
      }));
      primitive.updateAnchors(newAnchors);
    }
  }

  private _getCursorForTarget(target: HitTarget): string {
    switch (target.type) {
      case 'anchor':
        return 'crosshair';
      case 'body':
        return 'move';
      case 'edge':
        switch (target.edge) {
          case 'top':
          case 'bottom':
            return 'ns-resize';
          case 'left':
          case 'right':
            return 'ew-resize';
          default:
            return 'move';
        }
      default:
        return 'default';
    }
  }
}
