export type DrawingToolType =
  | 'trendline' | 'horizontal_line' | 'vertical_line'
  | 'fibonacci_retracement' | 'parallel_channel'
  | 'rectangle' | 'arrow' | 'text_label'
  | 'measure' | 'pitchfork' | 'elliott3' | 'elliott5';

export interface AnchorPoint {
  time: number;   // UTCTimestamp
  price: number;
}

export interface Drawing {
  id: string;
  type: DrawingToolType;
  anchors: AnchorPoint[];
  style: {
    color: string;
    lineWidth: number;
    lineStyle: 'solid' | 'dashed' | 'dotted';
    fillColor?: string;
    fillOpacity?: number;
  };
  locked: boolean;
  visible: boolean;
}
