import { describe, it, expect } from 'vitest';
import type { Drawing, DrawingToolType } from '../../types/drawing.js';
import {
  serializeDrawing,
  serializeDrawings,
  deserializeDrawing,
  deserializeDrawings,
  DrawingSerializationError,
} from '../serialization.js';

// ─── Helpers ───────────────────────────────────────────────────────────

function makeDrawing(overrides: Partial<Drawing> & { type: DrawingToolType; anchors: Drawing['anchors'] }): Drawing {
  return {
    id: 'test-1',
    type: overrides.type,
    anchors: overrides.anchors,
    style: {
      color: '#ff0000',
      lineWidth: 2,
      lineStyle: 'solid',
      ...overrides.style,
    },
    locked: false,
    visible: true,
    ...overrides,
  };
}

function makeAnchor(time: number, price: number) {
  return { time, price };
}

// ─── Valid drawing fixtures per type ───────────────────────────────────

const VALID_DRAWINGS: Record<DrawingToolType, Drawing> = {
  horizontal_line: makeDrawing({
    type: 'horizontal_line',
    anchors: [makeAnchor(1700000000, 42000)],
  }),
  vertical_line: makeDrawing({
    type: 'vertical_line',
    anchors: [makeAnchor(1700000000, 0)],
  }),
  trendline: makeDrawing({
    type: 'trendline',
    anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 43000)],
  }),
  fibonacci_retracement: makeDrawing({
    type: 'fibonacci_retracement',
    anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 45000)],
  }),
  parallel_channel: makeDrawing({
    type: 'parallel_channel',
    anchors: [
      makeAnchor(1700000000, 42000),
      makeAnchor(1700003600, 43000),
      makeAnchor(1700001800, 41000),
    ],
  }),
  rectangle: makeDrawing({
    type: 'rectangle',
    anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 43000)],
  }),
  arrow: makeDrawing({
    type: 'arrow',
    anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 43000)],
  }),
  text_label: makeDrawing({
    type: 'text_label',
    anchors: [makeAnchor(1700000000, 42000)],
  }),
  measure: makeDrawing({
    type: 'measure',
    anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 43000)],
  }),
  pitchfork: makeDrawing({
    type: 'pitchfork',
    anchors: [
      makeAnchor(1700000000, 42000),
      makeAnchor(1700003600, 43000),
      makeAnchor(1700001800, 41000),
    ],
  }),
  elliott3: makeDrawing({
    type: 'elliott3',
    anchors: [
      makeAnchor(1700000000, 42000),
      makeAnchor(1700001000, 43000),
      makeAnchor(1700002000, 42500),
      makeAnchor(1700003000, 44000),
    ],
  }),
  elliott5: makeDrawing({
    type: 'elliott5',
    anchors: [
      makeAnchor(1700000000, 42000),
      makeAnchor(1700001000, 43000),
      makeAnchor(1700002000, 42500),
      makeAnchor(1700003000, 44000),
      makeAnchor(1700004000, 43500),
      makeAnchor(1700005000, 45000),
    ],
  }),
};

// ─── Round-trip tests ──────────────────────────────────────────────────

describe('serializeDrawing / deserializeDrawing', () => {
  for (const [type, drawing] of Object.entries(VALID_DRAWINGS)) {
    it(`round-trips a ${type} drawing`, () => {
      const json = serializeDrawing(drawing);
      const result = deserializeDrawing(json);
      expect(result).toEqual(drawing);
    });
  }
});

describe('serializeDrawings / deserializeDrawings', () => {
  it('round-trips an array of drawings', () => {
    const drawings = Object.values(VALID_DRAWINGS);
    const json = serializeDrawings(drawings);
    const result = deserializeDrawings(json);
    expect(result).toEqual(drawings);
  });

  it('handles an empty array', () => {
    const json = serializeDrawings([]);
    const result = deserializeDrawings(json);
    expect(result).toEqual([]);
  });
});

// ─── Base validation errors ────────────────────────────────────────────

describe('deserializeDrawing — base validation', () => {
  it('throws on invalid JSON', () => {
    expect(() => deserializeDrawing('not-json')).toThrow(
      DrawingSerializationError,
    );
  });

  it('throws if input is not an object', () => {
    expect(() => deserializeDrawing('"string"')).toThrow(
      DrawingSerializationError,
    );
    expect(() => deserializeDrawing('42')).toThrow(DrawingSerializationError);
    expect(() => deserializeDrawing('null')).toThrow(DrawingSerializationError);
  });

  it('throws if id is missing or empty', () => {
    const drawing = { ...VALID_DRAWINGS.trendline, id: '' };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /non-empty string "id"/,
    );
  });

  it('throws if type is invalid', () => {
    const drawing = { ...VALID_DRAWINGS.trendline, type: 'unknown_tool' };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /valid "type"/,
    );
  });

  it('throws if anchors is not an array', () => {
    const drawing = { ...VALID_DRAWINGS.trendline, anchors: 'not-array' };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /"anchors" array/,
    );
  });

  it('throws if an anchor has non-numeric time', () => {
    const drawing = {
      ...VALID_DRAWINGS.trendline,
      anchors: [
        { time: 'bad', price: 42000 },
        { time: 1700003600, price: 43000 },
      ],
    };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /Anchor at index 0/,
    );
  });

  it('throws if an anchor has NaN price', () => {
    const drawing = {
      ...VALID_DRAWINGS.trendline,
      anchors: [
        { time: 1700000000, price: NaN },
        { time: 1700003600, price: 43000 },
      ],
    };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /Anchor at index 0/,
    );
  });

  it('throws if style is missing', () => {
    const { style: _style, ...rest } = VALID_DRAWINGS.trendline;
    expect(() => deserializeDrawing(JSON.stringify(rest))).toThrow(
      /"style" object/,
    );
  });

  it('throws if style.color is empty', () => {
    const drawing = {
      ...VALID_DRAWINGS.trendline,
      style: { ...VALID_DRAWINGS.trendline.style, color: '' },
    };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /non-empty string "color"/,
    );
  });

  it('throws if style.lineWidth is zero or negative', () => {
    const drawing = {
      ...VALID_DRAWINGS.trendline,
      style: { ...VALID_DRAWINGS.trendline.style, lineWidth: 0 },
    };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /positive numeric "lineWidth"/,
    );
  });

  it('throws if style.lineStyle is invalid', () => {
    const drawing = {
      ...VALID_DRAWINGS.trendline,
      style: { ...VALID_DRAWINGS.trendline.style, lineStyle: 'wavy' },
    };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /valid "lineStyle"/,
    );
  });

  it('throws if locked is not boolean', () => {
    const drawing = { ...VALID_DRAWINGS.trendline, locked: 1 };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /boolean "locked"/,
    );
  });

  it('throws if visible is not boolean', () => {
    const drawing = { ...VALID_DRAWINGS.trendline, visible: 'true' };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /boolean "visible"/,
    );
  });
});

// ─── Type-specific validation errors ───────────────────────────────────

describe('deserializeDrawing — type-specific validation', () => {
  it('throws if horizontal_line has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'horizontal_line',
      anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700001000, 43000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      DrawingSerializationError,
    );
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 1 anchor/,
    );
  });

  it('throws if horizontal_line has zero anchors', () => {
    const drawing = makeDrawing({
      type: 'horizontal_line',
      anchors: [],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 1 anchor/,
    );
  });

  it('throws if vertical_line has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'vertical_line',
      anchors: [],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 1 anchor/,
    );
  });

  it('throws if trendline has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'trendline',
      anchors: [makeAnchor(1700000000, 42000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 2 anchor/,
    );
  });

  it('throws if fibonacci_retracement has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'fibonacci_retracement',
      anchors: [makeAnchor(1700000000, 42000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 2 anchor/,
    );
  });

  it('throws if fibonacci_retracement anchors have same price', () => {
    const drawing = makeDrawing({
      type: 'fibonacci_retracement',
      anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 42000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      DrawingSerializationError,
    );
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /different prices/,
    );
  });

  it('throws if parallel_channel has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'parallel_channel',
      anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 43000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 3 anchor/,
    );
  });

  it('throws if parallel_channel has identical base anchors', () => {
    const drawing = makeDrawing({
      type: 'parallel_channel',
      anchors: [
        makeAnchor(1700000000, 42000),
        makeAnchor(1700000000, 42000),
        makeAnchor(1700001800, 41000),
      ],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /must not be identical/,
    );
  });

  it('throws if rectangle has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'rectangle',
      anchors: [makeAnchor(1700000000, 42000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 2 anchor/,
    );
  });

  it('throws if arrow has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'arrow',
      anchors: [makeAnchor(1700000000, 42000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 2 anchor/,
    );
  });

  it('throws if text_label has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'text_label',
      anchors: [],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 1 anchor/,
    );
  });

  it('throws if measure has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'measure',
      anchors: [makeAnchor(1700000000, 42000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 2 anchor/,
    );
  });

  it('throws if pitchfork has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'pitchfork',
      anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 43000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 3 anchor/,
    );
  });

  it('throws if elliott3 has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'elliott3',
      anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 43000)],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 4 anchor/,
    );
  });

  it('throws if elliott5 has wrong anchor count', () => {
    const drawing = makeDrawing({
      type: 'elliott5',
      anchors: [
        makeAnchor(1700000000, 42000),
        makeAnchor(1700001000, 43000),
        makeAnchor(1700002000, 42500),
      ],
    });
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /requires exactly 6 anchor/,
    );
  });
});

// ─── deserializeDrawings validation ────────────────────────────────────

describe('deserializeDrawings — validation', () => {
  it('throws on non-array JSON', () => {
    expect(() => deserializeDrawings('{"id":"x"}')).toThrow(
      /must be a JSON array/,
    );
  });

  it('throws if an element is not an object', () => {
    expect(() => deserializeDrawings('[42]')).toThrow(
      /Drawing at index 0 must be a JSON object/,
    );
  });

  it('throws on first invalid drawing in array', () => {
    const valid = VALID_DRAWINGS.trendline;
    const invalid = { ...VALID_DRAWINGS.horizontal_line, anchors: [] };
    const json = JSON.stringify([valid, invalid]);
    expect(() => deserializeDrawings(json)).toThrow(
      DrawingSerializationError,
    );
  });
});

// ─── Optional style fields ─────────────────────────────────────────────

describe('deserializeDrawing — optional style fields', () => {
  it('accepts fillColor and fillOpacity when valid', () => {
    const drawing = makeDrawing({
      type: 'rectangle',
      anchors: [makeAnchor(1700000000, 42000), makeAnchor(1700003600, 43000)],
      style: {
        color: '#ff0000',
        lineWidth: 2,
        lineStyle: 'solid',
        fillColor: 'rgba(255,0,0,0.1)',
        fillOpacity: 0.5,
      },
    });
    const json = serializeDrawing(drawing);
    const result = deserializeDrawing(json);
    expect(result.style.fillColor).toBe('rgba(255,0,0,0.1)');
    expect(result.style.fillOpacity).toBe(0.5);
  });

  it('throws if fillColor is not a string', () => {
    const drawing = {
      ...VALID_DRAWINGS.rectangle,
      style: { ...VALID_DRAWINGS.rectangle.style, fillColor: 123 },
    };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /"fillColor" must be a string/,
    );
  });

  it('throws if fillOpacity is not a finite number', () => {
    const drawing = {
      ...VALID_DRAWINGS.rectangle,
      style: { ...VALID_DRAWINGS.rectangle.style, fillOpacity: Infinity },
    };
    expect(() => deserializeDrawing(JSON.stringify(drawing))).toThrow(
      /"fillOpacity" must be a finite number/,
    );
  });
});
