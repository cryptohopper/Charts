export type IndicatorType = 'sma' | 'ema' | 'rsi' | 'macd' | 'bb' | 'stoch' | 'atr' | 'adx' | 'cci' | 'obv' | string;

export type IndicatorPlacement = 'overlay' | 'sub-pane';

export interface IndicatorConfig {
  type: IndicatorType;
  params: Record<string, number>;  // e.g., { period: 14 }
  color?: string;
  visible: boolean;
  placement: IndicatorPlacement;   // Where to render: on main pane or separate sub-pane
}

export interface IndicatorOutput {
  type: IndicatorType;
  lines: {
    name: string;
    data: { time: number; value: number }[];
    color: string;
    seriesType: 'line' | 'histogram';
  }[];
}
