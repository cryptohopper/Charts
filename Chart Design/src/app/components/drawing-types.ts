/* Shared types for chart drawings */

export interface HorizontalLineDrawing {
  type: "horizontal-line";
  id: string;
  price: number;
  color: string;
  thickness: number; // 1=XS, 2=S, 3=M, 4=L
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
}

/** Standard Fibonacci Retracement levels */
export const FIB_LEVELS = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1] as const;

/** Default colors for each fib level (line + fill between this level and next) */
export const FIB_LEVEL_COLORS: Record<number, { line: string; fill: string }> = {
  0:     { line: "#f26d60", fill: "rgba(242,109,96,0.08)" },
  0.236: { line: "#f2a05d", fill: "rgba(242,160,93,0.08)" },
  0.382: { line: "#f2c847", fill: "rgba(242,200,71,0.08)" },
  0.5:   { line: "#a8d46a", fill: "rgba(168,212,106,0.08)" },
  0.618: { line: "#61cad2", fill: "rgba(97,202,210,0.12)" },
  0.786: { line: "#519be9", fill: "rgba(81,155,233,0.08)" },
  1:     { line: "#8b6ce0", fill: "rgba(139,108,224,0.08)" },
};

export interface FibRetracementDrawing {
  type: "fib-retracement";
  id: string;
  startPrice: number;
  startIndex: number;
  endPrice: number;
  endIndex: number;
  color: string;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
  showBackground: boolean;
  useCustomColors: boolean;
}

/** Standard Fibonacci Extension levels */
export const FIB_EXT_LEVELS = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1, 1.618, 2.618, 4.236] as const;

/** Default colors for each fib extension level */
export const FIB_EXT_LEVEL_COLORS: Record<number, { line: string; fill: string }> = {
  0:     { line: "#1da1f2", fill: "rgba(29,161,242,0.06)" },
  0.236: { line: "#44baf1", fill: "rgba(68,186,241,0.06)" },
  0.382: { line: "#29c79e", fill: "rgba(41,199,158,0.06)" },
  0.5:   { line: "#92c48a", fill: "rgba(146,196,138,0.06)" },
  0.618: { line: "#c7e486", fill: "rgba(199,228,134,0.06)" },
  0.786: { line: "#5e9f55", fill: "rgba(94,159,85,0.06)" },
  1:     { line: "#de5537", fill: "rgba(222,85,55,0.08)" },
  1.618: { line: "#424eac", fill: "rgba(66,78,172,0.06)" },
  2.618: { line: "#695ae0", fill: "rgba(105,90,224,0.06)" },
  4.236: { line: "#ff2d55", fill: "rgba(255,45,85,0.06)" },
};

export interface FibExtensionDrawing {
  type: "fib-extension";
  id: string;
  /** Point A — start of the impulse move */
  priceA: number;
  indexA: number;
  /** Point B — end of the impulse move */
  priceB: number;
  indexB: number;
  /** Point C — start of the extension (retracement end) */
  priceC: number;
  indexC: number;
  color: string;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
  showBackground: boolean;
  useCustomColors: boolean;
}

/** Projection drawing — a filled triangle/arc shape defined by 3 anchor points */
export interface ProjectionDrawing {
  type: "projection";
  id: string;
  /** Apex point (start) */
  priceA: number;
  indexA: number;
  /** Top-right corner */
  priceB: number;
  indexB: number;
  /** Bottom-right corner */
  priceC: number;
  indexC: number;
  color: string;       // border color
  fillColor: string;   // background fill color
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
  showBackground: boolean;
}

/** Text annotation drawing — single click placement */
export interface TextDrawing {
  type: "text";
  id: string;
  /** Anchor position on chart */
  price: number;
  index: number;
  /** Text content */
  text: string;
  color: string;          // text color
  fontSize: number;       // 10, 12, 14, 16, 18, 20, 24
  bold: boolean;
  italic: boolean;
  /** Optional background fill */
  showBackground: boolean;
  backgroundColor: string;
  /** Optional border */
  showBorder: boolean;
  borderColor: string;
  /** Text wrap — wraps text within a fixed width */
  textWrap: boolean;
  locked: boolean;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
}

/** Date & Price Range drawing — rectangle defined by two corner points */
export interface DatePriceRangeDrawing {
  type: "date-price-range";
  id: string;
  /** Top-left anchor */
  startPrice: number;
  startIndex: number;
  /** Bottom-right anchor */
  endPrice: number;
  endIndex: number;
  color: string;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
  showBorder: boolean;
  showBackground: boolean;
  showLabelBackground: boolean;
}

/** Short Position drawing — entry, stop loss, and take profit levels */
export interface ShortPositionDrawing {
  type: "short-position";
  id: string;
  /** Entry price */
  entryPrice: number;
  entryIndex: number;
  /** Stop loss price (above entry for short) */
  stopPrice: number;
  /** Take profit price (below entry for short) */
  targetPrice: number;
  /** Width in candle indices */
  widthBars: number;
  color: string;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
  showBackground: boolean;
  /** Quantity for P&L calculation */
  quantity: number;
}

/** Long Position drawing — entry, stop loss (below), and take profit (above) levels */
export interface LongPositionDrawing {
  type: "long-position";
  id: string;
  entryPrice: number;
  entryIndex: number;
  /** Stop loss price (below entry for long) */
  stopPrice: number;
  /** Take profit price (above entry for long) */
  targetPrice: number;
  widthBars: number;
  color: string;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
  showBackground: boolean;
  quantity: number;
}

/** Channel drawing — two parallel trend lines with filled area */
export interface ChannelDrawing {
  type: "channel";
  id: string;
  /** First line: point A */
  priceA: number;
  indexA: number;
  /** First line: point B */
  priceB: number;
  indexB: number;
  /** Offset point defining channel width */
  priceC: number;
  indexC: number;
  color: string;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
  showBackground: boolean;
  /** Whether to extend lines beyond anchor points */
  extendLeft: boolean;
  extendRight: boolean;
  /** Whether to show middle line */
  showMiddleLine: boolean;
}

/** Ruler drawing — measurement rectangle showing price/bars/percentage */
export interface RulerDrawing {
  type: "ruler";
  id: string;
  startPrice: number;
  startIndex: number;
  endPrice: number;
  endIndex: number;
  color: string;
  thickness: number;
  style: "solid" | "dashed" | "dotted";
  locked: boolean;
}

export type Drawing = HorizontalLineDrawing | FibRetracementDrawing | FibExtensionDrawing | ProjectionDrawing | TextDrawing | DatePriceRangeDrawing | ShortPositionDrawing | LongPositionDrawing | ChannelDrawing | RulerDrawing;

let _drawId = 0;
export function nextDrawingId(): string {
  return `draw-${++_drawId}-${Date.now()}`;
}