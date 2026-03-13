// ─── Core ──────────────────────────────────────────────────────────────
export { DrawingManager, DEFAULT_STYLE } from './manager';
export { BaseDrawingPrimitive } from './base-drawing';
export { InteractionHandler } from './interaction';
export { serializeDrawings, deserializeDrawings } from './serializer';

// ─── Primitives ────────────────────────────────────────────────────────
export { TrendlinePrimitive } from './primitives/TrendlinePrimitive';
export { HorizontalLinePrimitive } from './primitives/HorizontalLinePrimitive';
export { VerticalLinePrimitive } from './primitives/VerticalLinePrimitive';
export { FibonacciPrimitive } from './primitives/FibonacciPrimitive';
export { ParallelChannelPrimitive } from './primitives/ParallelChannelPrimitive';
export { RectanglePrimitive } from './primitives/RectanglePrimitive';
export { ArrowPrimitive } from './primitives/ArrowPrimitive';
export { MeasurePrimitive } from './primitives/MeasurePrimitive';
export { TextLabelPrimitive } from './primitives/TextLabelPrimitive';

// ─── Types ─────────────────────────────────────────────────────────────
export type {
  DrawingToolType,
  LineStyleType,
  AnchorPoint,
  DrawingStyle,
  DrawingData,
  DrawingState,
  PixelPoint,
  HitTarget,
  DrawingHitTestResult,
  DrawingContext,
  DrawingManagerCallbacks,
} from './types';
export { FIB_LEVELS, FIB_LEVEL_COLORS } from './types';

// ─── Utils ─────────────────────────────────────────────────────────────
export {
  anchorToPixel,
  pixelToAnchor,
  generateDrawingId,
  HIT_THRESHOLD,
  ANCHOR_RADIUS,
} from './utils';
