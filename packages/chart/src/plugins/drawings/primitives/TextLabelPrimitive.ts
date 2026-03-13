import type {
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  PrimitiveHoveredItem,
} from 'lightweight-charts';
import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import { BaseDrawingPrimitive } from '../base-drawing';
import type {
  DrawingData,
  DrawingState,
  PixelPoint,
} from '../types';
import {
  drawSelectionHandle,
  HIT_THRESHOLD,
} from '../utils';

// ─── Extra data defaults ─────────────────────────────────────────────────

interface TextLabelExtra {
  text: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  showBackground: boolean;
  backgroundColor: string;
  showBorder: boolean;
  borderColor: string;
}

const TEXT_LABEL_DEFAULTS: TextLabelExtra = {
  text: 'Text',
  fontSize: 14,
  bold: false,
  italic: false,
  showBackground: false,
  backgroundColor: 'rgba(0,0,0,0.7)',
  showBorder: false,
  borderColor: '#666',
};

function getTextLabelExtra(extra?: Record<string, unknown>): TextLabelExtra {
  return {
    text: (extra?.text as string) ?? TEXT_LABEL_DEFAULTS.text,
    fontSize: (extra?.fontSize as number) ?? TEXT_LABEL_DEFAULTS.fontSize,
    bold: (extra?.bold as boolean) ?? TEXT_LABEL_DEFAULTS.bold,
    italic: (extra?.italic as boolean) ?? TEXT_LABEL_DEFAULTS.italic,
    showBackground: (extra?.showBackground as boolean) ?? TEXT_LABEL_DEFAULTS.showBackground,
    backgroundColor: (extra?.backgroundColor as string) ?? TEXT_LABEL_DEFAULTS.backgroundColor,
    showBorder: (extra?.showBorder as boolean) ?? TEXT_LABEL_DEFAULTS.showBorder,
    borderColor: (extra?.borderColor as string) ?? TEXT_LABEL_DEFAULTS.borderColor,
  };
}

// ─── Renderer ────────────────────────────────────────────────────────────

class TextLabelRenderer implements IPrimitivePaneRenderer {
  private readonly _primitive: TextLabelPrimitive;

  constructor(primitive: TextLabelPrimitive) {
    this._primitive = primitive;
  }

  draw(target: CanvasRenderingTarget2D): void {
    const data = this._primitive.data;
    const state = this._primitive.state;

    if (!data.visible) return;

    const pixelAnchors = this._primitive.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;

    target.useMediaCoordinateSpace(({ context: ctx }) => {
      // During creation: show preview label at cursor position
      if (state.creating && state.previewAnchor) {
        const preview = this._primitive.getPreviewPixel();
        if (preview) {
          this._drawLabel(ctx, preview, data, state);
        }
        return;
      }

      // Normal rendering: need the anchor
      if (!p0) return;

      this._drawLabel(ctx, p0, data, state);
    });
  }

  private _drawLabel(
    ctx: CanvasRenderingContext2D,
    anchor: PixelPoint,
    data: DrawingData,
    state: DrawingState,
  ): void {
    const extra = getTextLabelExtra(data.extra);
    const paddingH = 8;
    const paddingV = 4;

    // Build font string
    const fontParts: string[] = [];
    if (extra.italic) fontParts.push('italic');
    if (extra.bold) fontParts.push('bold');
    fontParts.push(`${extra.fontSize}px`);
    fontParts.push('sans-serif');
    const font = fontParts.join(' ');

    ctx.save();
    ctx.font = font;

    // Measure text
    const metrics = ctx.measureText(extra.text);
    const textWidth = metrics.width;
    const textHeight = extra.fontSize;

    // Box dimensions
    const boxWidth = textWidth + paddingH * 2;
    const boxHeight = textHeight + paddingV * 2;
    const boxX = anchor.x;
    const boxY = anchor.y - boxHeight / 2;

    // Background
    if (extra.showBackground) {
      ctx.fillStyle = extra.backgroundColor;
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
    }

    // Border
    if (extra.showBorder) {
      ctx.strokeStyle = extra.borderColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
    }

    // Draw text
    ctx.fillStyle = data.style.color;
    ctx.font = font;
    ctx.textBaseline = 'middle';
    ctx.fillText(extra.text, boxX + paddingH, anchor.y);

    // Selection state: handle and dashed outline
    if (state.selected) {
      drawSelectionHandle(ctx, anchor.x, anchor.y, data.style.color);

      ctx.strokeStyle = data.style.color;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.strokeRect(boxX - 2, boxY - 2, boxWidth + 4, boxHeight + 4);
      ctx.setLineDash([]);
    }

    ctx.restore();
  }
}

// ─── Pane View ───────────────────────────────────────────────────────────

class TextLabelPaneView implements IPrimitivePaneView {
  private readonly _renderer: TextLabelRenderer;

  constructor(primitive: TextLabelPrimitive) {
    this._renderer = new TextLabelRenderer(primitive);
  }

  zOrder(): 'bottom' | 'normal' | 'top' {
    return 'top';
  }

  renderer(): IPrimitivePaneRenderer | null {
    return this._renderer;
  }
}

// ─── Primitive ───────────────────────────────────────────────────────────

export class TextLabelPrimitive extends BaseDrawingPrimitive {
  // ─── BaseDrawingPrimitive implementation ─────────────────────────────

  protected _createPaneView(): IPrimitivePaneView {
    return new TextLabelPaneView(this);
  }

  protected _hitTest(x: number, y: number): PrimitiveHoveredItem | null {
    if (!this._context) return null;

    const pixelAnchors = this.getPixelAnchors();
    const p0 = pixelAnchors[0] ?? null;

    if (!p0) return null;

    // Check anchor first
    if (this._isNearAnchor(x, y, p0)) {
      return {
        cursorStyle: 'grab',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    // Calculate text bounding box (must match rendering logic)
    const extra = getTextLabelExtra(this._data.extra);
    const paddingH = 8;
    const paddingV = 4;

    // We need to approximate text width without a canvas context.
    // Use a rough estimate: average character width ~= fontSize * 0.6
    const estimatedTextWidth = extra.text.length * extra.fontSize * 0.6;
    const boxWidth = estimatedTextWidth + paddingH * 2;
    const boxHeight = extra.fontSize + paddingV * 2;

    const boxX = p0.x;
    const boxY = p0.y - boxHeight / 2;

    // Check if cursor is within the text bounding box
    if (
      x >= boxX &&
      x <= boxX + boxWidth &&
      y >= boxY &&
      y <= boxY + boxHeight
    ) {
      return {
        cursorStyle: 'move',
        externalId: this._data.id,
        zOrder: 'normal',
      };
    }

    return null;
  }
}
