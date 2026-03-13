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
  pointToVerticalLineDistance,
  setLineDash,
  drawSelectionHandle,
  HIT_THRESHOLD,
} from '../utils';

// ─── Time Axis View ───────────────────────────────────────────────────────

class VerticalLineTimeAxisView implements ISeriesPrimitiveAxisView {
  private _primitive: VerticalLinePrimitive;

  constructor(primitive: VerticalLinePrimitive) {
    this._primitive = primitive;
  }

  coordinate(): number {
    const ctx = this._primitive.getContext();
    if (!ctx) return -1;
    const time = this._primitive.data.anchors[0]?.time;
    if (time === undefined) return -1;
    const coord = ctx.chart.timeScale().timeToCoordinate(time);
    return (coord as number) ?? -1;
  }

  text(): string {
    const time = this._primitive.data.anchors[0]?.time;
    if (time === undefined) return '';
    return new Date((time as number) * 1000).toLocaleDateString();
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

class VerticalLineRenderer implements IPrimitivePaneRenderer {
  private _x: number;
  private _color: string;
  private _lineWidth: number;
  private _lineStyle: LineStyleType;
  private _selected: boolean;

  constructor(
    x: number,
    color: string,
    lineWidth: number,
    lineStyle: LineStyleType,
    selected: boolean,
  ) {
    this._x = x;
    this._color = color;
    this._lineWidth = lineWidth;
    this._lineStyle = lineStyle;
    this._selected = selected;
  }

  draw(target: CanvasRenderingTarget2D): void {
    target.useMediaCoordinateSpace(({ context: ctx, mediaSize }) => {
      const x = this._x;
      if (x < 0 || x > mediaSize.width) return;

      ctx.save();

      // Draw the vertical line
      ctx.beginPath();
      ctx.strokeStyle = this._color;
      ctx.lineWidth = this._lineWidth;
      setLineDash(ctx, this._lineStyle);
      ctx.moveTo(x, 0);
      ctx.lineTo(x, mediaSize.height);
      ctx.stroke();

      // Draw selection handles at top and bottom edges
      if (this._selected) {
        const handleMargin = 20;
        drawSelectionHandle(ctx, x, handleMargin, this._color);
        drawSelectionHandle(ctx, x, mediaSize.height - handleMargin, this._color);
      }

      ctx.restore();
    });
  }
}

// ─── Pane View ────────────────────────────────────────────────────────────

class VerticalLinePaneView implements IPrimitivePaneView {
  private _primitive: VerticalLinePrimitive;

  constructor(primitive: VerticalLinePrimitive) {
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

    const x = ctx.chart.timeScale().timeToCoordinate(anchor.time);
    if (x === null) return null;

    const { color, lineWidth, lineStyle } = this._primitive.data.style;
    const selected = this._primitive.state.selected;

    return new VerticalLineRenderer(
      x as number,
      color,
      lineWidth,
      lineStyle,
      selected,
    );
  }
}

// ─── Primitive ────────────────────────────────────────────────────────────

export class VerticalLinePrimitive extends BaseDrawingPrimitive {
  // ─── Lifecycle ────────────────────────────────────────────────────────

  attached(param: SeriesAttachedParameter<Time, SeriesType>): void {
    super.attached(param);
    this._timeAxisViews = [new VerticalLineTimeAxisView(this)];
  }

  // ─── View creation ────────────────────────────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new VerticalLinePaneView(this);
  }

  // ─── Hit testing ──────────────────────────────────────────────────────

  protected _hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    if (!this._context) return null;

    const anchor = this._data.anchors[0];
    if (!anchor) return null;

    const lineX = this._context.chart.timeScale().timeToCoordinate(anchor.time);
    if (lineX === null) return null;

    const distance = pointToVerticalLineDistance({ x, y }, lineX as number);
    if (distance > HIT_THRESHOLD) return null;

    return {
      cursorStyle: 'ew-resize',
      externalId: this._data.id,
      zOrder: 'normal',
    };
  }
}
