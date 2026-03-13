import type {
  ISeriesPrimitive,
  SeriesAttachedParameter,
  Time,
  SeriesType,
  IPrimitivePaneView,
  ISeriesPrimitiveAxisView,
  PrimitiveHoveredItem,
} from 'lightweight-charts';
import type {
  DrawingData,
  DrawingState,
  DrawingContext,
  AnchorPoint,
  DrawingStyle,
  PixelPoint,
} from './types';
import { anchorToPixel, HIT_THRESHOLD } from './utils';

/**
 * Abstract base class for all drawing tool primitives.
 *
 * Implements ISeriesPrimitive<Time> and provides shared lifecycle management,
 * state tracking, anchor conversion, and hit-test scaffolding.
 *
 * Subclasses must implement:
 *  - _createPaneView(): create the pane view for rendering
 *  - _hitTest(x, y): perform tool-specific hit testing
 */
export abstract class BaseDrawingPrimitive implements ISeriesPrimitive<Time> {
  protected _data: DrawingData;
  protected _state: DrawingState;
  protected _context: DrawingContext | null = null;
  protected _paneViews: IPrimitivePaneView[] = [];
  protected _priceAxisViews: ISeriesPrimitiveAxisView[] = [];
  protected _timeAxisViews: ISeriesPrimitiveAxisView[] = [];

  constructor(data: DrawingData) {
    this._data = { ...data };
    this._state = {
      selected: false,
      hovered: false,
      creating: false,
    };
  }

  // ─── Lifecycle ─────────────────────────────────────────────────────

  attached(param: SeriesAttachedParameter<Time, SeriesType>): void {
    this._context = {
      chart: param.chart,
      series: param.series,
      requestUpdate: param.requestUpdate,
    };
    this._paneViews = [this._createPaneView()];
  }

  detached(): void {
    this._context = null;
    this._paneViews = [];
  }

  // ─── View accessors ────────────────────────────────────────────────

  updateAllViews(): void {
    // Views are re-rendered on each call; subclasses can override for caching
  }

  paneViews(): readonly IPrimitivePaneView[] {
    return this._paneViews;
  }

  priceAxisViews(): readonly ISeriesPrimitiveAxisView[] {
    return this._priceAxisViews;
  }

  timeAxisViews(): readonly ISeriesPrimitiveAxisView[] {
    return this._timeAxisViews;
  }

  // ─── Hit testing ───────────────────────────────────────────────────

  hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    if (!this._context || !this._data.visible) return null;
    if (this._data.locked) {
      const hit = this._hitTest(x, y);
      if (hit) {
        return {
          cursorStyle: 'default',
          externalId: this._data.id,
          zOrder: 'normal',
        };
      }
      return null;
    }
    return this._hitTest(x, y);
  }

  // ─── Public API ────────────────────────────────────────────────────

  get id(): string {
    return this._data.id;
  }

  get data(): Readonly<DrawingData> {
    return this._data;
  }

  get state(): DrawingState {
    return this._state;
  }

  /** Expose drawing context for renderers and axis views */
  getContext(): DrawingContext | null {
    return this._context;
  }

  /** Convert all anchors to pixel coordinates */
  getPixelAnchors(): (PixelPoint | null)[] {
    if (!this._context) return [];
    return this._data.anchors.map((a) =>
      anchorToPixel(a, this._context!.chart, this._context!.series),
    );
  }

  /** Convert the current preview anchor to pixel coordinates */
  getPreviewPixel(): PixelPoint | null {
    if (!this._state.previewAnchor || !this._context) return null;
    return anchorToPixel(this._state.previewAnchor, this._context.chart, this._context.series);
  }

  /** Update drawing data and request chart redraw. Cannot overwrite id or type. */
  updateData(data: Partial<DrawingData>): void {
    const { id: _id, type: _type, ...safe } = data;
    Object.assign(this._data, safe);
    this._requestUpdate();
  }

  /** Update a single anchor by index */
  updateAnchor(index: number, anchor: AnchorPoint): void {
    if (index >= 0 && index < this._data.anchors.length) {
      this._data.anchors[index] = anchor;
      this._requestUpdate();
    }
  }

  /** Update multiple anchors at once (single requestUpdate) */
  updateAnchors(anchors: AnchorPoint[]): void {
    for (let i = 0; i < anchors.length && i < this._data.anchors.length; i++) {
      this._data.anchors[i] = anchors[i];
    }
    this._requestUpdate();
  }

  /** Update drawing style */
  updateStyle(style: Partial<DrawingStyle>): void {
    Object.assign(this._data.style, style);
    this._requestUpdate();
  }

  /** Set selection state */
  setSelected(selected: boolean): void {
    this._state.selected = selected;
    this._requestUpdate();
  }

  /** Set hover state */
  setHovered(hovered: boolean): void {
    this._state.hovered = hovered;
    this._requestUpdate();
  }

  /** Set creation state with optional preview anchor */
  setCreating(creating: boolean, previewAnchor?: AnchorPoint): void {
    this._state.creating = creating;
    this._state.previewAnchor = previewAnchor;
    this._requestUpdate();
  }

  // ─── Protected helpers ─────────────────────────────────────────────

  /** Request chart redraw */
  protected _requestUpdate(): void {
    this._context?.requestUpdate();
  }

  /** Check if a pixel point is near an anchor */
  protected _isNearAnchor(
    x: number,
    y: number,
    anchor: PixelPoint | null,
    threshold: number = HIT_THRESHOLD,
  ): boolean {
    if (!anchor) return false;
    return Math.hypot(x - anchor.x, y - anchor.y) <= threshold;
  }

  // ─── Abstract methods ──────────────────────────────────────────────

  /** Create the pane view that handles rendering */
  protected abstract _createPaneView(): IPrimitivePaneView;

  /** Tool-specific hit testing. Return null if not hit. */
  protected abstract _hitTest(x: number, y: number): PrimitiveHoveredItem | null;
}
