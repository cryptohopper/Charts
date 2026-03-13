import type { IChartApi, ISeriesApi, SeriesType } from 'lightweight-charts';
import type {
  DrawingToolType,
  DrawingData,
  DrawingStyle,
  AnchorPoint,
  DrawingManagerCallbacks,
  PixelPoint,
} from './types';
import { BaseDrawingPrimitive } from './base-drawing';
import { InteractionHandler } from './interaction';
import { pixelToAnchor, generateDrawingId } from './utils';
import { TrendlinePrimitive } from './primitives/TrendlinePrimitive';
import { HorizontalLinePrimitive } from './primitives/HorizontalLinePrimitive';
import { VerticalLinePrimitive } from './primitives/VerticalLinePrimitive';
import { FibonacciPrimitive } from './primitives/FibonacciPrimitive';
import { ParallelChannelPrimitive } from './primitives/ParallelChannelPrimitive';
import { RectanglePrimitive } from './primitives/RectanglePrimitive';
import { ArrowPrimitive } from './primitives/ArrowPrimitive';
import { MeasurePrimitive } from './primitives/MeasurePrimitive';
import { TextLabelPrimitive } from './primitives/TextLabelPrimitive';

// ─── Constants ────────────────────────────────────────────────────────────

/** How many anchor clicks each tool requires to complete */
const TOOL_ANCHOR_COUNTS: Record<DrawingToolType, number> = {
  trendline: 2,
  horizontal_line: 1,
  vertical_line: 1,
  fibonacci_retracement: 2,
  parallel_channel: 3,
  rectangle: 2,
  arrow: 2,
  measure: 2,
  text_label: 1,
};

/** Default style for new drawings */
export const DEFAULT_STYLE: DrawingStyle = {
  color: '#2196F3',
  lineWidth: 2,
  lineStyle: 'solid',
};

// ─── DrawingManager ───────────────────────────────────────────────────────

export class DrawingManager {
  private _chart: IChartApi;
  private _series: ISeriesApi<SeriesType>;
  private _interaction: InteractionHandler;
  private _primitives: Map<string, BaseDrawingPrimitive> = new Map();
  private _callbacks: DrawingManagerCallbacks;

  // Active tool state
  private _activeTool: DrawingToolType | null = null;
  private _activeStyle: DrawingStyle = { ...DEFAULT_STYLE };
  private _creationAnchors: AnchorPoint[] = [];
  private _creatingPrimitive: BaseDrawingPrimitive | null = null;

  // DOM event references for cleanup
  private _containerEl: HTMLElement;
  private _boundMouseDown: (e: MouseEvent) => void;
  private _boundMouseMove: (e: MouseEvent) => void;
  private _boundMouseUp: (e: MouseEvent) => void;
  private _boundKeyDown: (e: KeyboardEvent) => void;

  constructor(
    chart: IChartApi,
    series: ISeriesApi<SeriesType>,
    container: HTMLElement,
    callbacks?: DrawingManagerCallbacks,
  ) {
    this._chart = chart;
    this._series = series;
    this._containerEl = container;
    this._callbacks = callbacks ?? {};
    this._interaction = new InteractionHandler(chart, series);

    // Bind event handlers
    this._boundMouseDown = this._handleMouseDown.bind(this);
    this._boundMouseMove = this._handleMouseMove.bind(this);
    this._boundMouseUp = this._handleMouseUp.bind(this);
    this._boundKeyDown = this._handleKeyDown.bind(this);

    // Attach DOM listeners
    this._containerEl.addEventListener('mousedown', this._boundMouseDown);
    this._containerEl.addEventListener('mousemove', this._boundMouseMove);
    this._containerEl.addEventListener('mouseup', this._boundMouseUp);
    document.addEventListener('keydown', this._boundKeyDown);
  }

  // ─── Tool activation ──────────────────────────────────────────────────

  setActiveTool(type: DrawingToolType | null): void {
    // Cancel any in-progress creation before switching tools
    if (this._creatingPrimitive) {
      this._cancelCreation();
    }

    this._activeTool = type;

    // Update cursor to indicate drawing mode
    this._containerEl.style.cursor = type ? 'crosshair' : 'default';
  }

  getActiveTool(): DrawingToolType | null {
    return this._activeTool;
  }

  setActiveStyle(style: Partial<DrawingStyle>): void {
    Object.assign(this._activeStyle, style);
  }

  getActiveStyle(): DrawingStyle {
    return { ...this._activeStyle };
  }

  // ─── Drawing CRUD ─────────────────────────────────────────────────────

  addDrawing(data: DrawingData): BaseDrawingPrimitive {
    const primitive = this._createPrimitive(data);
    this._series.attachPrimitive(primitive);
    this._primitives.set(data.id, primitive);
    this._interaction.addPrimitive(primitive);
    return primitive;
  }

  updateDrawing(id: string, updates: Partial<DrawingData>): void {
    const primitive = this._primitives.get(id);
    if (!primitive) return;

    primitive.updateData(updates);
    this._callbacks.onDrawingUpdated?.(primitive.data);
  }

  removeDrawing(id: string): void {
    const primitive = this._primitives.get(id);
    if (!primitive) return;

    this._interaction.removePrimitive(id);
    this._series.detachPrimitive(primitive);
    this._primitives.delete(id);
    this._callbacks.onDrawingRemoved?.(id);
  }

  removeAllDrawings(): void {
    for (const [id, primitive] of this._primitives) {
      this._interaction.removePrimitive(id);
      this._series.detachPrimitive(primitive);
      this._callbacks.onDrawingRemoved?.(id);
    }
    this._primitives.clear();
  }

  getDrawing(id: string): BaseDrawingPrimitive | undefined {
    return this._primitives.get(id);
  }

  getDrawings(): DrawingData[] {
    const drawings: DrawingData[] = [];
    for (const primitive of this._primitives.values()) {
      drawings.push(primitive.data);
    }
    return drawings;
  }

  // ─── State ────────────────────────────────────────────────────────────

  loadDrawings(drawings: DrawingData[]): void {
    this.removeAllDrawings();
    for (const data of drawings) {
      this.addDrawing(data);
    }
  }

  getSelectedId(): string | null {
    return this._interaction.getSelectedId();
  }

  setSelected(id: string | null): void {
    const previousId = this._interaction.getSelectedId();
    this._interaction.setSelected(id);

    if (id !== previousId) {
      this._callbacks.onDrawingSelected?.(id);
    }
  }

  // ─── Mouse handlers (called from container events) ────────────────────

  private _handleMouseDown(event: MouseEvent): void {
    const pixel = this._pixelFromEvent(event);

    // ── Active tool: creation flow ──
    if (this._activeTool) {
      const anchor = pixelToAnchor(pixel, this._chart, this._series);
      if (!anchor) return;

      if (!this._creatingPrimitive) {
        // First click: start creating
        this._startCreation(anchor);
      } else {
        // Subsequent click: add anchor
        this._creationAnchors.push(anchor);

        // Sync intermediate anchors to the primitive so it can render them
        this._creatingPrimitive.updateData({ anchors: [...this._creationAnchors] });

        const requiredAnchors = TOOL_ANCHOR_COUNTS[this._activeTool];
        if (this._creationAnchors.length >= requiredAnchors) {
          this._completeCreation(anchor);
        }
      }
      return;
    }

    // ── No active tool: delegate to interaction handler for selection/drag ──
    const result = this._interaction.handleMouseDown(pixel);

    if (result.handled && result.drawingId !== undefined) {
      const previousId = this.getSelectedId();
      if (result.drawingId !== previousId) {
        this._callbacks.onDrawingSelected?.(result.drawingId);
      }
    } else if (!result.handled) {
      // Clicked on empty space
      const previousId = this.getSelectedId();
      if (previousId !== null) {
        this._callbacks.onDrawingSelected?.(null);
      }
    }
  }

  private _handleMouseMove(event: MouseEvent): void {
    const pixel = this._pixelFromEvent(event);

    // ── Preview during creation ──
    if (this._creatingPrimitive) {
      const anchor = pixelToAnchor(pixel, this._chart, this._series);
      if (anchor) {
        this._updateCreationPreview(anchor);
      }
    }

    // ── Delegate to interaction handler for hover/drag ──
    const result = this._interaction.handleMouseMove(pixel);

    // Update container cursor: creation mode takes priority
    if (this._activeTool) {
      this._containerEl.style.cursor = 'crosshair';
    } else {
      this._containerEl.style.cursor = result.cursor;
    }
  }

  private _handleMouseUp(event: MouseEvent): void {
    const pixel = this._pixelFromEvent(event);
    this._interaction.handleMouseUp(pixel);
  }

  private _handleKeyDown(event: KeyboardEvent): void {
    // Handle Escape during creation
    if (event.key === 'Escape') {
      if (this._creatingPrimitive) {
        this._cancelCreation();
        event.preventDefault();
        return;
      }
      if (this._activeTool) {
        this.setActiveTool(null);
        event.preventDefault();
        return;
      }
    }

    // Delegate to interaction handler for delete/deselect
    const result = this._interaction.handleKeyDown(event);

    if (result.handled) {
      event.preventDefault();

      if (result.action === 'delete' && result.drawingId) {
        this.removeDrawing(result.drawingId);
      } else if (result.action === 'cancel') {
        this._cancelCreation();
      } else if (result.action === 'deselect' && result.drawingId) {
        this._callbacks.onDrawingSelected?.(null);
      }
    }
  }

  // ─── Creation flow ────────────────────────────────────────────────────

  private _startCreation(anchor: AnchorPoint): void {
    if (!this._activeTool) return;

    this._creationAnchors = [anchor];

    const requiredAnchors = TOOL_ANCHOR_COUNTS[this._activeTool];

    // Single-anchor tools complete immediately
    if (requiredAnchors === 1) {
      this._completeCreation(anchor);
      return;
    }

    // Multi-anchor tools: create a preview primitive with the first anchor
    const data: DrawingData = {
      id: generateDrawingId(),
      type: this._activeTool,
      anchors: [anchor],
      style: { ...this._activeStyle },
      locked: false,
      visible: true,
    };

    this._creatingPrimitive = this._createPrimitive(data);
    this._series.attachPrimitive(this._creatingPrimitive);
    this._creatingPrimitive.setCreating(true, anchor);
  }

  private _updateCreationPreview(anchor: AnchorPoint): void {
    if (!this._creatingPrimitive) return;
    this._creatingPrimitive.setCreating(true, anchor);
  }

  private _completeCreation(anchor: AnchorPoint): void {
    if (!this._activeTool) return;

    const requiredAnchors = TOOL_ANCHOR_COUNTS[this._activeTool];

    if (requiredAnchors === 1) {
      // Single-anchor tool: create data and primitive in one step
      const data: DrawingData = {
        id: generateDrawingId(),
        type: this._activeTool,
        anchors: [anchor],
        style: { ...this._activeStyle },
        locked: false,
        visible: true,
      };

      const primitive = this._createPrimitive(data);
      this._series.attachPrimitive(primitive);
      this._primitives.set(data.id, primitive);
      this._interaction.addPrimitive(primitive);

      this._creationAnchors = [];
      this._callbacks.onDrawingCreated?.(data);
    } else {
      // Multi-anchor tool: finalize the existing preview primitive
      if (!this._creatingPrimitive) return;

      // Update anchors with all collected points (including the final one)
      const finalAnchors = [...this._creationAnchors];
      this._creatingPrimitive.updateData({ anchors: finalAnchors });
      this._creatingPrimitive.setCreating(false);

      // Register the primitive in the manager and interaction handler
      const id = this._creatingPrimitive.id;
      this._primitives.set(id, this._creatingPrimitive);
      this._interaction.addPrimitive(this._creatingPrimitive);

      const drawingData = this._creatingPrimitive.data;

      this._creatingPrimitive = null;
      this._creationAnchors = [];

      this._callbacks.onDrawingCreated?.(drawingData);
    }

    // Reset tool if it was a single-use interaction (keep tool active for
    // repeated drawing of the same type by not calling setActiveTool(null))
  }

  private _cancelCreation(): void {
    if (this._creatingPrimitive) {
      this._series.detachPrimitive(this._creatingPrimitive);
      this._creatingPrimitive = null;
    }
    this._creationAnchors = [];
  }

  // ─── Factory ──────────────────────────────────────────────────────────

  private _createPrimitive(data: DrawingData): BaseDrawingPrimitive {
    switch (data.type) {
      case 'trendline':
        return new TrendlinePrimitive(data);
      case 'horizontal_line':
        return new HorizontalLinePrimitive(data);
      case 'vertical_line':
        return new VerticalLinePrimitive(data);
      case 'fibonacci_retracement':
        return new FibonacciPrimitive(data);
      case 'parallel_channel':
        return new ParallelChannelPrimitive(data);
      case 'rectangle':
        return new RectanglePrimitive(data);
      case 'arrow':
        return new ArrowPrimitive(data);
      case 'measure':
        return new MeasurePrimitive(data);
      case 'text_label':
        return new TextLabelPrimitive(data);
      default:
        return new TrendlinePrimitive(data);
    }
  }

  // ─── Helpers ──────────────────────────────────────────────────────────

  private _pixelFromEvent(event: MouseEvent): PixelPoint {
    const rect = this._containerEl.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  // ─── Cleanup ──────────────────────────────────────────────────────────

  destroy(): void {
    // Cancel any in-progress creation
    this._cancelCreation();

    // Remove DOM listeners
    this._containerEl.removeEventListener('mousedown', this._boundMouseDown);
    this._containerEl.removeEventListener('mousemove', this._boundMouseMove);
    this._containerEl.removeEventListener('mouseup', this._boundMouseUp);
    document.removeEventListener('keydown', this._boundKeyDown);

    // Detach all primitives from the series
    for (const primitive of this._primitives.values()) {
      this._series.detachPrimitive(primitive);
    }
    this._primitives.clear();

    // Destroy interaction handler
    this._interaction.destroy();
  }
}
