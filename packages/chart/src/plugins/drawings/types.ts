import type {
  Time,
  IChartApi,
  ISeriesApi,
  SeriesType,
} from 'lightweight-charts';

// ─── Drawing tool types ────────────────────────────────────────────────
export type DrawingToolType =
  | 'trendline'
  | 'horizontal_line'
  | 'vertical_line'
  | 'fibonacci_retracement'
  | 'parallel_channel'
  | 'rectangle'
  | 'arrow'
  | 'measure'
  | 'text_label';

// ─── Line style ────────────────────────────────────────────────────────
export type LineStyleType = 'solid' | 'dashed' | 'dotted';

// ─── Anchor point ──────────────────────────────────────────────────────
export interface AnchorPoint {
  time: Time;
  price: number;
}

// ─── Drawing style options ─────────────────────────────────────────────
export interface DrawingStyle {
  color: string;
  lineWidth: number;
  lineStyle: LineStyleType;
  fillColor?: string;
  fillOpacity?: number;
}

// ─── Drawing data (serializable state) ─────────────────────────────────
export interface DrawingData {
  id: string;
  type: DrawingToolType;
  anchors: AnchorPoint[];
  style: DrawingStyle;
  locked: boolean;
  visible: boolean;
  /** Tool-specific extra data (text content, fib levels, etc.) */
  extra?: Record<string, unknown>;
}

// ─── Drawing state for rendering ───────────────────────────────────────
export interface DrawingState {
  selected: boolean;
  hovered: boolean;
  creating: boolean;
  /** Preview anchor follows cursor during creation */
  previewAnchor?: AnchorPoint;
}

// ─── Pixel point for rendering ─────────────────────────────────────────
export interface PixelPoint {
  x: number;
  y: number;
}

// ─── Hit test result ───────────────────────────────────────────────────
export type HitTarget =
  | { type: 'anchor'; index: number }
  | { type: 'body' }
  | { type: 'edge'; edge: 'top' | 'bottom' | 'left' | 'right' };

export interface DrawingHitTestResult {
  drawingId: string;
  target: HitTarget;
  /** Distance in pixels from the cursor to the hit area */
  distance: number;
}

// ─── Series attached context ───────────────────────────────────────────
export interface DrawingContext {
  chart: IChartApi;
  series: ISeriesApi<SeriesType>;
  requestUpdate: () => void;
}

// ─── Fibonacci constants ───────────────────────────────────────────────
export const FIB_LEVELS = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1] as const;

export const FIB_LEVEL_COLORS: Record<number, { line: string; fill: string }> = {
  0:     { line: '#f26d60', fill: 'rgba(242,109,96,0.08)' },
  0.236: { line: '#f2a05d', fill: 'rgba(242,160,93,0.08)' },
  0.382: { line: '#f2c847', fill: 'rgba(242,200,71,0.08)' },
  0.5:   { line: '#a8d46a', fill: 'rgba(168,212,106,0.08)' },
  0.618: { line: '#61cad2', fill: 'rgba(97,202,210,0.12)' },
  0.786: { line: '#519be9', fill: 'rgba(81,155,233,0.08)' },
  1:     { line: '#8b6ce0', fill: 'rgba(139,108,224,0.08)' },
};

// ─── Drawing manager callback types ────────────────────────────────────
export interface DrawingManagerCallbacks {
  onDrawingCreated?: (drawing: DrawingData) => void;
  onDrawingUpdated?: (drawing: DrawingData) => void;
  onDrawingRemoved?: (drawingId: string) => void;
  onDrawingSelected?: (drawingId: string | null) => void;
}
