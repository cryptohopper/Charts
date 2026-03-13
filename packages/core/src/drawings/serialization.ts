import type { Drawing, DrawingToolType, AnchorPoint } from '../types/drawing.js';

// ─── Custom error ──────────────────────────────────────────────────────

export class DrawingSerializationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DrawingSerializationError';
  }
}

// ─── Anchor count requirements per drawing type ────────────────────────

/** Each drawing type requires a specific number of anchor points. */
const REQUIRED_ANCHOR_COUNTS: Record<DrawingToolType, number> = {
  horizontal_line: 1,
  vertical_line: 1,
  trendline: 2,
  fibonacci_retracement: 2,
  parallel_channel: 3,
  rectangle: 2,
  arrow: 2,
  text_label: 1,
  measure: 2,
  pitchfork: 3,
  elliott3: 4,
  elliott5: 6,
};

const VALID_DRAWING_TYPES: ReadonlySet<string> = new Set(
  Object.keys(REQUIRED_ANCHOR_COUNTS),
);

const VALID_LINE_STYLES: ReadonlySet<string> = new Set([
  'solid',
  'dashed',
  'dotted',
]);

// ─── Validation helpers ────────────────────────────────────────────────

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isValidAnchor(value: unknown): value is AnchorPoint {
  if (!isObject(value)) return false;
  return (
    typeof value.time === 'number' &&
    isFinite(value.time as number) &&
    typeof value.price === 'number' &&
    isFinite(value.price as number)
  );
}

/**
 * Validate base properties common to all drawing types:
 * id, type, anchors (array of valid anchor objects), style, locked, visible.
 */
function validateBase(obj: Record<string, unknown>): void {
  // id
  if (typeof obj.id !== 'string' || obj.id.length === 0) {
    throw new DrawingSerializationError(
      'Drawing must have a non-empty string "id"',
    );
  }

  // type
  if (typeof obj.type !== 'string' || !VALID_DRAWING_TYPES.has(obj.type)) {
    throw new DrawingSerializationError(
      `Drawing must have a valid "type", got "${String(obj.type)}"`,
    );
  }

  // anchors — must be an array, each element a valid AnchorPoint
  if (!Array.isArray(obj.anchors)) {
    throw new DrawingSerializationError(
      'Drawing must have an "anchors" array',
    );
  }
  for (let i = 0; i < (obj.anchors as unknown[]).length; i++) {
    if (!isValidAnchor((obj.anchors as unknown[])[i])) {
      throw new DrawingSerializationError(
        `Anchor at index ${i} must have finite numeric "time" and "price"`,
      );
    }
  }

  // style
  if (!isObject(obj.style)) {
    throw new DrawingSerializationError(
      'Drawing must have a "style" object',
    );
  }
  const style = obj.style as Record<string, unknown>;

  if (typeof style.color !== 'string' || style.color.length === 0) {
    throw new DrawingSerializationError(
      'Drawing style must have a non-empty string "color"',
    );
  }
  if (
    typeof style.lineWidth !== 'number' ||
    !isFinite(style.lineWidth as number) ||
    (style.lineWidth as number) <= 0
  ) {
    throw new DrawingSerializationError(
      'Drawing style must have a positive numeric "lineWidth"',
    );
  }
  if (
    typeof style.lineStyle !== 'string' ||
    !VALID_LINE_STYLES.has(style.lineStyle)
  ) {
    throw new DrawingSerializationError(
      `Drawing style must have a valid "lineStyle", got "${String(style.lineStyle)}"`,
    );
  }

  // Optional style fields
  if (style.fillColor !== undefined && typeof style.fillColor !== 'string') {
    throw new DrawingSerializationError(
      'Drawing style "fillColor" must be a string if provided',
    );
  }
  if (
    style.fillOpacity !== undefined &&
    (typeof style.fillOpacity !== 'number' ||
      !isFinite(style.fillOpacity as number))
  ) {
    throw new DrawingSerializationError(
      'Drawing style "fillOpacity" must be a finite number if provided',
    );
  }

  // locked
  if (typeof obj.locked !== 'boolean') {
    throw new DrawingSerializationError(
      'Drawing must have a boolean "locked"',
    );
  }

  // visible
  if (typeof obj.visible !== 'boolean') {
    throw new DrawingSerializationError(
      'Drawing must have a boolean "visible"',
    );
  }
}

/**
 * Validate properties specific to each drawing type.
 * This ensures the correct number of anchors and validates
 * type-critical fields (e.g. price on horizontal_line).
 */
function validateTypeSpecific(obj: Record<string, unknown>): void {
  const type = obj.type as DrawingToolType;
  const anchors = obj.anchors as AnchorPoint[];
  const requiredCount = REQUIRED_ANCHOR_COUNTS[type];

  if (requiredCount === undefined) {
    throw new DrawingSerializationError(
      `Unknown drawing type: "${type}"`,
    );
  }

  if (anchors.length !== requiredCount) {
    throw new DrawingSerializationError(
      `Drawing type "${type}" requires exactly ${requiredCount} anchor(s), got ${anchors.length}`,
    );
  }

  switch (type) {
    case 'horizontal_line': {
      // A horizontal line is defined by its price; time is a placement reference.
      const anchor = anchors[0];
      if (typeof anchor.price !== 'number' || !isFinite(anchor.price)) {
        throw new DrawingSerializationError(
          'Horizontal line anchor must have a finite numeric "price"',
        );
      }
      break;
    }

    case 'vertical_line': {
      // A vertical line is defined by its time; price is a placement reference.
      const anchor = anchors[0];
      if (typeof anchor.time !== 'number' || !isFinite(anchor.time as number)) {
        throw new DrawingSerializationError(
          'Vertical line anchor must have a finite numeric "time"',
        );
      }
      break;
    }

    case 'fibonacci_retracement': {
      // Two anchors must define a non-zero price range for fib levels.
      if (anchors[0].price === anchors[1].price) {
        throw new DrawingSerializationError(
          'Fibonacci retracement anchors must have different prices',
        );
      }
      break;
    }

    case 'parallel_channel': {
      // Three anchors: first two define the base line, third defines width.
      // Base line anchors must not be the same point.
      if (
        anchors[0].time === anchors[1].time &&
        anchors[0].price === anchors[1].price
      ) {
        throw new DrawingSerializationError(
          'Parallel channel base line anchors must not be identical',
        );
      }
      break;
    }

    // For other types, anchor count validation is sufficient.
    case 'trendline':
    case 'rectangle':
    case 'arrow':
    case 'text_label':
    case 'measure':
    case 'pitchfork':
    case 'elliott3':
    case 'elliott5':
      break;

    default: {
      // Exhaustiveness guard — should never reach here after VALID_DRAWING_TYPES check.
      const _exhaustive: never = type;
      throw new DrawingSerializationError(
        `Unhandled drawing type: "${_exhaustive}"`,
      );
    }
  }
}

// ─── Serialization ─────────────────────────────────────────────────────

/** Serialize a single Drawing to a JSON string. */
export function serializeDrawing(drawing: Drawing): string {
  return JSON.stringify(drawing);
}

/** Serialize an array of Drawings to a JSON string. */
export function serializeDrawings(drawings: Drawing[]): string {
  return JSON.stringify(drawings);
}

// ─── Deserialization ───────────────────────────────────────────────────

/** Deserialize a JSON string into a validated Drawing object. */
export function deserializeDrawing(json: string): Drawing {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    throw new DrawingSerializationError('Invalid JSON string');
  }

  if (!isObject(parsed)) {
    throw new DrawingSerializationError('Drawing must be a JSON object');
  }

  const obj = parsed as Record<string, unknown>;

  validateBase(obj);
  validateTypeSpecific(obj);

  return obj as unknown as Drawing;
}

/** Deserialize a JSON string into a validated array of Drawing objects. */
export function deserializeDrawings(json: string): Drawing[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    throw new DrawingSerializationError('Invalid JSON string');
  }

  if (!Array.isArray(parsed)) {
    throw new DrawingSerializationError('Drawings must be a JSON array');
  }

  return parsed.map((item, index) => {
    if (!isObject(item)) {
      throw new DrawingSerializationError(
        `Drawing at index ${index} must be a JSON object`,
      );
    }

    const obj = item as Record<string, unknown>;
    validateBase(obj);
    validateTypeSpecific(obj);
    return obj as unknown as Drawing;
  });
}
