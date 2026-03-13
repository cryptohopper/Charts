import type { PixelPoint, LineStyleType, AnchorPoint } from './types';
import type { Time, IChartApi, ISeriesApi, SeriesType, Coordinate } from 'lightweight-charts';

// ─── Hit-test distance calculations ────────────────────────────────────

/** Distance from point P to line segment AB */
export function pointToSegmentDistance(p: PixelPoint, a: PixelPoint, b: PixelPoint): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lenSq = dx * dx + dy * dy;

  if (lenSq === 0) return Math.hypot(p.x - a.x, p.y - a.y);

  let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));

  const projX = a.x + t * dx;
  const projY = a.y + t * dy;
  return Math.hypot(p.x - projX, p.y - projY);
}

/** Distance from point P to an infinite line through A and B */
export function pointToLineDistance(p: PixelPoint, a: PixelPoint, b: PixelPoint): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  if (len === 0) return Math.hypot(p.x - a.x, p.y - a.y);
  return Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / len;
}

/** Distance from point P to a horizontal line at y-coordinate */
export function pointToHorizontalLineDistance(p: PixelPoint, y: number): number {
  return Math.abs(p.y - y);
}

/** Distance from point P to a vertical line at x-coordinate */
export function pointToVerticalLineDistance(p: PixelPoint, x: number): number {
  return Math.abs(p.x - x);
}

/** Check if point is inside a rectangle defined by two corners */
export function isPointInRect(
  p: PixelPoint,
  topLeft: PixelPoint,
  bottomRight: PixelPoint,
): boolean {
  const minX = Math.min(topLeft.x, bottomRight.x);
  const maxX = Math.max(topLeft.x, bottomRight.x);
  const minY = Math.min(topLeft.y, bottomRight.y);
  const maxY = Math.max(topLeft.y, bottomRight.y);
  return p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
}

/** Distance from point to nearest edge of a rectangle */
export function pointToRectEdgeDistance(
  p: PixelPoint,
  topLeft: PixelPoint,
  bottomRight: PixelPoint,
): number {
  const minX = Math.min(topLeft.x, bottomRight.x);
  const maxX = Math.max(topLeft.x, bottomRight.x);
  const minY = Math.min(topLeft.y, bottomRight.y);
  const maxY = Math.max(topLeft.y, bottomRight.y);

  // Check distance to each edge
  const dTop = pointToSegmentDistance(p, { x: minX, y: minY }, { x: maxX, y: minY });
  const dBottom = pointToSegmentDistance(p, { x: minX, y: maxY }, { x: maxX, y: maxY });
  const dLeft = pointToSegmentDistance(p, { x: minX, y: minY }, { x: minX, y: maxY });
  const dRight = pointToSegmentDistance(p, { x: maxX, y: minY }, { x: maxX, y: maxY });

  return Math.min(dTop, dBottom, dLeft, dRight);
}

// ─── Coordinate conversion ─────────────────────────────────────────────

/** Convert a chart anchor point to pixel coordinates */
export function anchorToPixel(
  anchor: AnchorPoint,
  chart: IChartApi,
  series: ISeriesApi<SeriesType>,
): PixelPoint | null {
  const x = chart.timeScale().timeToCoordinate(anchor.time);
  const y = series.priceToCoordinate(anchor.price);
  if (x === null || y === null) return null;
  return { x: x as number, y: y as number };
}

/** Convert pixel coordinates to an anchor point */
export function pixelToAnchor(
  pixel: PixelPoint,
  chart: IChartApi,
  series: ISeriesApi<SeriesType>,
): AnchorPoint | null {
  const time = chart.timeScale().coordinateToTime(pixel.x as Coordinate);
  const price = series.coordinateToPrice(pixel.y as Coordinate);
  if (time === null || price === null) return null;
  return { time, price };
}

// ─── Canvas drawing helpers ────────────────────────────────────────────

/** HIT_THRESHOLD in pixels — how close cursor must be to detect a hit */
export const HIT_THRESHOLD = 8;

/** Anchor handle radius in pixels */
export const ANCHOR_RADIUS = 5;

/** Apply a line dash pattern to a canvas context */
export function setLineDash(ctx: CanvasRenderingContext2D, style: LineStyleType): void {
  switch (style) {
    case 'dashed':
      ctx.setLineDash([6, 4]);
      break;
    case 'dotted':
      ctx.setLineDash([2, 3]);
      break;
    case 'solid':
    default:
      ctx.setLineDash([]);
      break;
  }
}

/** Draw a small circle at a pixel position (anchor handle) */
export function drawAnchorHandle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  filled: boolean = true,
): void {
  ctx.beginPath();
  ctx.arc(x, y, ANCHOR_RADIUS, 0, Math.PI * 2);
  if (filled) {
    ctx.fillStyle = color;
    ctx.fill();
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

/** Draw a square selection handle at a pixel position */
export function drawSelectionHandle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  size: number = 6,
): void {
  const half = size / 2;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x - half, y - half, size, size);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x - half, y - half, size, size);
}

/** Generate a unique drawing ID */
export function generateDrawingId(): string {
  return `drawing-${crypto.randomUUID()}`;
}

/** Draw a line between two pixel points */
export function drawLine(
  ctx: CanvasRenderingContext2D,
  from: PixelPoint,
  to: PixelPoint,
  color: string,
  lineWidth: number,
  lineStyle: LineStyleType,
): void {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  setLineDash(ctx, lineStyle);
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
  ctx.restore();
}

/** Clamp a value between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
