import type { DrawingData } from './types';

/**
 * Serialize drawings to a JSON string for persistence.
 */
export function serializeDrawings(drawings: DrawingData[]): string {
  return JSON.stringify(drawings);
}

/**
 * Deserialize a JSON string back to drawing data.
 * Returns an empty array if the input is invalid.
 */
export function deserializeDrawings(json: string): DrawingData[] {
  try {
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidDrawingData);
  } catch {
    return [];
  }
}

/**
 * Validate that an object has the required DrawingData shape.
 */
function isValidDrawingData(obj: unknown): obj is DrawingData {
  if (typeof obj !== 'object' || obj === null) return false;
  const d = obj as Record<string, unknown>;

  return (
    typeof d.id === 'string' &&
    typeof d.type === 'string' &&
    Array.isArray(d.anchors) &&
    d.anchors.every(
      (a: unknown) =>
        typeof a === 'object' &&
        a !== null &&
        'time' in a &&
        'price' in a,
    ) &&
    typeof d.style === 'object' &&
    d.style !== null &&
    typeof d.locked === 'boolean' &&
    typeof d.visible === 'boolean'
  );
}
