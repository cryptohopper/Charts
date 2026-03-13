// ── PostMessage protocol types ──

export interface HopChartsConfig {
  exchange?: string;
  pair?: string;
  timeframe?: string;
  theme?: "light" | "dark";
  showToolbar?: boolean;
  showAIOverlay?: boolean;
}

// Parent → iframe messages
export type ParentMessage =
  | { type: "hopcharts:init"; payload: HopChartsConfig }
  | { type: "hopcharts:update"; payload: Partial<HopChartsConfig> };

// iframe → parent messages
export type ChildMessage =
  | { type: "hopcharts:ready" }
  | { type: "hopcharts:stateChange"; payload: HopChartsConfig };
