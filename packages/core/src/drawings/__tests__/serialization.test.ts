import { describe, it, expect } from 'vitest';
import {
  serializeDrawing,
  deserializeDrawing,
  serializeDrawings,
  deserializeDrawings,
  DrawingSerializationError,
  type Drawing,
  type HorizontalLineDrawing,
  type FibRetracementDrawing,
  type ChannelDrawing,
  type TextDrawing,
  type RulerDrawing,
} from '../serialization.js';

const hLine: HorizontalLineDrawing = {
  type: 'horizontal-line',
  id: 'draw-1-1000',
  price: 45000,
  color: '#f26d60',
  thickness: 2,
  style: 'solid',
  locked: false,
};

const fibRetracement: FibRetracementDrawing = {
  type: 'fib-retracement',
  id: 'draw-2-1001',
  startPrice: 40000,
  startIndex: 10,
  endPrice: 50000,
  endIndex: 30,
  color: '#00b1c7',
  thickness: 1,
  style: 'dashed',
  locked: true,
  showBackground: true,
  useCustomColors: false,
};

const channel: ChannelDrawing = {
  type: 'channel',
  id: 'draw-3-1002',
  priceA: 40000,
  indexA: 5,
  priceB: 45000,
  indexB: 20,
  priceC: 38000,
  indexC: 12,
  color: '#2962FF',
  thickness: 1.5,
  style: 'solid',
  locked: false,
  showBackground: true,
  extendLeft: false,
  extendRight: true,
  showMiddleLine: true,
};

const textDrawing: TextDrawing = {
  type: 'text',
  id: 'draw-4-1003',
  price: 42000,
  index: 15,
  text: 'Support level — watch this area!',
  color: '#1f1f1f',
  fontSize: 14,
  bold: true,
  italic: false,
  showBackground: true,
  backgroundColor: '#f8f8ff',
  showBorder: true,
  borderColor: '#efeff4',
  textWrap: false,
  locked: false,
  thickness: 1,
  style: 'solid',
};

const ruler: RulerDrawing = {
  type: 'ruler',
  id: 'draw-5-1004',
  startPrice: 41000,
  startIndex: 10,
  endPrice: 46000,
  endIndex: 25,
  color: '#8b6ce0',
  thickness: 1,
  style: 'dotted',
  locked: false,
};

const allDrawings: Drawing[] = [hLine, fibRetracement, channel, textDrawing, ruler];

describe('serializeDrawing / deserializeDrawing', () => {
  it.each([
    ['horizontal-line', hLine],
    ['fib-retracement', fibRetracement],
    ['channel', channel],
    ['text', textDrawing],
    ['ruler', ruler],
  ])('round-trips %s drawing', (_name, drawing) => {
    const json = serializeDrawing(drawing as Drawing);
    const result = deserializeDrawing(json);
    expect(result).toEqual(drawing);
  });

  it('preserves all numeric precision', () => {
    const d: HorizontalLineDrawing = { ...hLine, price: 45123.456789 };
    const result = deserializeDrawing(serializeDrawing(d));
    expect(result).toEqual(d);
    expect((result as HorizontalLineDrawing).price).toBe(45123.456789);
  });

  it('preserves special characters in text', () => {
    const d: TextDrawing = { ...textDrawing, text: 'Line with "quotes" & <tags>' };
    const result = deserializeDrawing(serializeDrawing(d));
    expect((result as TextDrawing).text).toBe('Line with "quotes" & <tags>');
  });

  it('preserves unicode in text', () => {
    const d: TextDrawing = { ...textDrawing, text: '📈 Bullish! €100 → ¥15000' };
    const result = deserializeDrawing(serializeDrawing(d));
    expect((result as TextDrawing).text).toBe('📈 Bullish! €100 → ¥15000');
  });

  it('preserves boolean fields', () => {
    const result = deserializeDrawing(serializeDrawing(fibRetracement));
    const fib = result as FibRetracementDrawing;
    expect(fib.locked).toBe(true);
    expect(fib.showBackground).toBe(true);
    expect(fib.useCustomColors).toBe(false);
  });
});

describe('serializeDrawings / deserializeDrawings', () => {
  it('round-trips an array of mixed drawing types', () => {
    const json = serializeDrawings(allDrawings);
    const result = deserializeDrawings(json);
    expect(result).toEqual(allDrawings);
    expect(result).toHaveLength(5);
  });

  it('round-trips an empty array', () => {
    const json = serializeDrawings([]);
    const result = deserializeDrawings(json);
    expect(result).toEqual([]);
  });

  it('preserves drawing order', () => {
    const reversed = [...allDrawings].reverse();
    const json = serializeDrawings(reversed);
    const result = deserializeDrawings(json);
    expect(result.map((d) => d.id)).toEqual(reversed.map((d) => d.id));
  });
});

describe('deserializeDrawing validation', () => {
  it('throws on invalid JSON', () => {
    expect(() => deserializeDrawing('not json')).toThrow(DrawingSerializationError);
  });

  it('throws on JSON array instead of object', () => {
    expect(() => deserializeDrawing('[]')).toThrow(DrawingSerializationError);
  });

  it('throws on null', () => {
    expect(() => deserializeDrawing('null')).toThrow(DrawingSerializationError);
  });

  it('throws on missing type', () => {
    const json = JSON.stringify({ id: 'x', color: '#000', thickness: 1, style: 'solid', locked: false });
    expect(() => deserializeDrawing(json)).toThrow(DrawingSerializationError);
  });

  it('throws on invalid type', () => {
    const json = JSON.stringify({ ...hLine, type: 'unknown-type' });
    expect(() => deserializeDrawing(json)).toThrow(DrawingSerializationError);
  });

  it('throws on empty id', () => {
    const json = JSON.stringify({ ...hLine, id: '' });
    expect(() => deserializeDrawing(json)).toThrow(DrawingSerializationError);
  });

  it('throws on non-string color', () => {
    const json = JSON.stringify({ ...hLine, color: 123 });
    expect(() => deserializeDrawing(json)).toThrow(DrawingSerializationError);
  });

  it('throws on zero thickness', () => {
    const json = JSON.stringify({ ...hLine, thickness: 0 });
    expect(() => deserializeDrawing(json)).toThrow(DrawingSerializationError);
  });

  it('throws on invalid style', () => {
    const json = JSON.stringify({ ...hLine, style: 'wavy' });
    expect(() => deserializeDrawing(json)).toThrow(DrawingSerializationError);
  });

  it('throws on non-boolean locked', () => {
    const json = JSON.stringify({ ...hLine, locked: 'yes' });
    expect(() => deserializeDrawing(json)).toThrow(DrawingSerializationError);
  });
});

describe('deserializeDrawings validation', () => {
  it('throws on non-array JSON', () => {
    expect(() => deserializeDrawings('{}')).toThrow(DrawingSerializationError);
  });

  it('throws when an item in the array is invalid', () => {
    const json = JSON.stringify([hLine, { type: 'bad' }]);
    expect(() => deserializeDrawings(json)).toThrow(DrawingSerializationError);
  });

  it('throws when an item is null', () => {
    const json = JSON.stringify([hLine, null]);
    expect(() => deserializeDrawings(json)).toThrow(DrawingSerializationError);
  });
});
