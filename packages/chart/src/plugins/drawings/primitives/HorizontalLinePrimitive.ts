import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  ISeriesPrimitiveAxisView,
  PrimitiveHoveredItem,
  Time,
  SeriesAttachedParameter,
  SeriesType,
} from 'lightweight-charts';
import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { LineStyleType } from '../types';
import { BaseDrawingPrimitive } from '../base-drawing';
import {
  pointToHorizontalLineDistance,
  setLineDash,
  drawSelectionHandle,
  HIT_THRESHOLD,
} from '../utils';

// ─── Price Axis View ──────────────────────────────────────────────────────

class HorizontalLinePriceAxisView implements ISeriesPrimitiveAxisView {
  private _primitive: HorizontalLinePrimitive;

  constructor(primitive: HorizontalLinePrimitive) {
    this._primitive = primitive;
  }

  coordinate(): number {
    const ctx = this._primitive.getContext();
    if (!ctx) return -1;
    const price = this._primitive.data.anchors[0]?.price;
    if (price === undefined) return -1;
    const coord = ctx.series.priceToCoordinate(price);
    return (coord as number) ?? -1;
  }

  text(): string {
    const price = this._primitive.data.anchors[0]?.price;
    if (price === undefined) return '';
    return price.toFixed(2);
  }

  textColor(): string {
    return '#ffffff';
  }

  backColor(): string {
    return this._primitive.data.style.color;
  }

  visible(): boolean {
    return this._primitive.data.visible && this.coordinate() >= 0;
  }

  tickVisible(): boolean {
    return this.visible();
  }
}

// ─── Pane Renderer ────────────────────────────────────────────────────────

class HorizontalLineRenderer implements IPrimitivePaneRenderer {
  private _y: number;
  private _color: string;
  private _lineWidth: number;
  private _lineStyle: LineStyleType;
  private _selected: boolean;

  constructor(
    y: number,
    color: string,
    lineWidth: number,
    lineStyle: LineStyleType,
    selected: boolean,
  ) {
    this._y = y;
    this._color = color;
    this._lineWidth = lineWidth;
    this._lineStyle = lineStyle;
    this._selected = selected;
  }

  draw(target: CanvasRenderingTarget2D): void {
    target.useMediaCoordinateSpace(({ context: ctx, mediaSize }) => {
      const y = this._y;
      if (y < 0 || y > mediaSize.height) return;

      ctx.save();

      // Draw the horizontal line
      ctx.beginPath();
      ctx.strokeStyle = this._color;
      ctx.lineWidth = this._lineWidth;
      setLineDash(ctx, this._lineStyle);
      ctx.moveTo(0, y);
      ctx.lineTo(mediaSize.width, y);
      ctx.stroke();

      // Draw selection handles at left and right edges
      if (this._selected) {
        const handleMargin = 20;
        drawSelectionHandle(ctx, handleMargin, y, this._color);
        drawSelectionHandle(ctx, mediaSize.width - handleMargin, y, this._color);
      }

      ctx.restore();
    });
  }
}

// ─── Pane View ────────────────────────────────────────────────────────────

class HorizontalLinePaneView implements IPrimitivePaneView {
  private _primitive: HorizontalLinePrimitive;

  constructor(primitive: HorizontalLinePrimitive) {
    this._primitive = primitive;
  }

  zOrder(): 'bottom' | 'normal' | 'top' {
    return 'normal';
  }

  renderer(): IPrimitivePaneRenderer | null {
    const ctx = this._primitive.getContext();
    if (!ctx || !this._primitive.data.visible) return null;

    const anchor = this._primitive.data.anchors[0];
    if (!anchor) return null;

    const y = ctx.series.priceToCoordinate(anchor.price);
    if (y === null) return null;

    const { color, lineWidth, lineStyle } = this._primitive.data.style;
    const selected = this._primitive.state.selected;

    return new HorizontalLineRenderer(
      y as number,
      color,
      lineWidth,
      lineStyle,
      selected,
    );
  }
}

// ─── Primitive ────────────────────────────────────────────────────────────

export class HorizontalLinePrimitive extends BaseDrawingPrimitive {
  // ─── Lifecycle ────────────────────────────────────────────────────────

  attached(param: SeriesAttachedParameter<Time, SeriesType>): void {
    super.attached(param);
    this._priceAxisViews = [new HorizontalLinePriceAxisView(this)];
  }

  // ─── View creation ────────────────────────────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new HorizontalLinePaneView(this);
  }

  // ─── Hit testing ──────────────────────────────────────────────────────

  protected _hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    if (!this._context) return null;

    const anchor = this._data.anchors[0];
    if (!anchor) return null;

    const lineY = this._context.series.priceToCoordinate(anchor.price);
    if (lineY === null) return null;

    const distance = pointToHorizontalLineDistance({ x, y }, lineY as number);
    if (distance > HIT_THRESHOLD) return null;

    return {
      cursorStyle: 'ns-resize',
      externalId: this._data.id,
      zOrder: 'normal',
    };
  }
}
