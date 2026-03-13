/**
 * Drawing serialization and deserialization utilities.
 * Handles round-trip conversion of drawing objects to/from JSON.
 */

export type DrawingStyle = 'solid' | 'dashed' | 'dotted';

export interface HorizontalLineDrawing {
  type: 'horizontal-line';
  id: string;
  price: number;
  color: string;
  thickness: number;
  style: DrawingStyle;
  locked: boolean;
}

export interface FibRetracementDrawing {
  type: 'fib-retracement';
  id: string;
  startPrice: number;
  startIndex: number;
  endPrice: number;
  endIndex: number;
  color: string;
  thickness: number;
  style: DrawingStyle;
  locked: boolean;
  showBackground: boolean;
  useCustomColors: boolean;
}

export interface ChannelDrawing {
  type: 'channel';
  id: string;
  priceA: number;
  indexA: number;
  priceB: number;
  indexB: number;
  priceC: number;
  indexC: number;
  color: string;
  thickness: number;
  style: DrawingStyle;
  locked: boolean;
  showBackground: boolean;
  extendLeft: boolean;
  extendRight: boolean;
  showMiddleLine: boolean;
}

export interface TextDrawing {
  type: 'text';
  id: string;
  price: number;
  index: number;
  text: string;
  color: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  showBackground: boolean;
  backgroundColor: string;
  showBorder: boolean;
  borderColor: string;
  textWrap: boolean;
  locked: boolean;
  thickness: number;
  style: DrawingStyle;
}

export interface RulerDrawing {
  type: 'ruler';
  id: string;
  startPrice: number;
  startIndex: number;
  endPrice: number;
  endIndex: number;
  color: string;
  thickness: number;
  style: DrawingStyle;
  locked: boolean;
}

export type Drawing =
  | HorizontalLineDrawing
  | FibRetracementDrawing
  | ChannelDrawing
  | TextDrawing
  | RulerDrawing;

const VALID_TYPES = new Set([
  'horizontal-line',
  'fib-retracement',
  'channel',
  'text',
  'ruler',
]);

const VALID_STYLES = new Set(['solid', 'dashed', 'dotted']);

export class DrawingSerializationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DrawingSerializationError';
  }
}

/** Serialize a single drawing to a JSON string. */
export function serializeDrawing(drawing: Drawing): string {
  return JSON.stringify(drawing);
}

/** Serialize an array of drawings to a JSON string. */
export function serializeDrawings(drawings: Drawing[]): string {
  return JSON.stringify(drawings);
}

/** Validate that a parsed object has the required base fields. */
function validateBase(obj: Record<string, unknown>): void {
  if (typeof obj.type !== 'string' || !VALID_TYPES.has(obj.type)) {
    throw new DrawingSerializationError(`Invalid drawing type: ${String(obj.type)}`);
  }
  if (typeof obj.id !== 'string' || obj.id.length === 0) {
    throw new DrawingSerializationError('Drawing must have a non-empty string id');
  }
  if (typeof obj.color !== 'string') {
    throw new DrawingSerializationError('Drawing must have a color string');
  }
  if (typeof obj.thickness !== 'number' || obj.thickness <= 0) {
    throw new DrawingSerializationError('Drawing must have a positive thickness');
  }
  if (typeof obj.style !== 'string' || !VALID_STYLES.has(obj.style)) {
    throw new DrawingSerializationError(`Invalid style: ${String(obj.style)}`);
  }
  if (typeof obj.locked !== 'boolean') {
    throw new DrawingSerializationError('Drawing must have a boolean locked field');
  }
}

/** Deserialize a JSON string to a single Drawing, with validation. */
export function deserializeDrawing(json: string): Drawing {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    throw new DrawingSerializationError('Invalid JSON string');
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new DrawingSerializationError('Expected a JSON object');
  }
  const obj = parsed as Record<string, unknown>;
  validateBase(obj);
  return obj as unknown as Drawing;
}

/** Deserialize a JSON string to an array of Drawings, with validation. */
export function deserializeDrawings(json: string): Drawing[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    throw new DrawingSerializationError('Invalid JSON string');
  }
  if (!Array.isArray(parsed)) {
    throw new DrawingSerializationError('Expected a JSON array');
  }
  return parsed.map((item, index) => {
    if (typeof item !== 'object' || item === null) {
      throw new DrawingSerializationError(`Item at index ${index} is not an object`);
    }
    validateBase(item as Record<string, unknown>);
    return item as Drawing;
  });
}
