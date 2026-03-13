// @hopcharts/core — shared types, API clients, stores, utilities

// Types
export type {
  ExchangeId,
  Exchange,
  TradingPair,
  Timeframe,
  OHLCV,
  IndicatorType,
  IndicatorPlacement,
  IndicatorConfig,
  IndicatorOutput,
  DrawingToolType,
  AnchorPoint,
  Drawing,
  PatternType,
  PatternPoint,
  DetectedPattern,
  InsightKind,
  AIInsight,
  ChartState,
  UserPreferences,
  TradeSide,
  OrderType,
  OrderStatus,
  Position,
  Order,
  OrderHistoryEntry,
} from './types/index.js';

// API
export {
  apiRequest,
  ApiError,
  chartsApi,
  queryKeys,
  useExchanges,
  usePairs,
  useOHLCV,
  useAIPatterns,
  useSaveChartState,
  useLoadChartState,
  WebSocketClient,
  getWebSocketClient,
  useRealtimePrice,
  useRealtimePatterns,
  tradingApi,
  usePositions,
  useOrders,
  useOrderHistory,
  usePlaceOrder,
  useCancelOrder,
  useRealtimeTrades,
} from './api/index.js';
export type { ApiClientOptions, WebSocketEvents, PlaceOrderParams } from './api/index.js';

// Stores
export {
  useChartStore,
  useDrawingStore,
  useAIStore,
  useUserStore,
  useUIStore,
  useTradingStore,
} from './store/index.js';
export type {
  ChartStore,
  DrawingStore,
  AIStore,
  UserStore,
  UIStore,
  TradingStore,
} from './store/index.js';

// Auth
export {
  authClient,
  useAuth,
  setAuthUser,
  ProtectedFeature,
  hasMinTier,
  getAIModelTier,
  getAIScanLimit,
  getTierDisplayName,
  getDrawingToolTier,
  getMinTierForDrawingTool,
  isPremiumIndicator,
} from './auth/index.js';
export type {
  AuthUser,
  SubscriptionTier,
  FeatureKey,
  UseAuthReturn,
  ProtectedFeatureProps,
  AIModelTier,
  DrawingToolTier,
} from './auth/index.js';

// Hooks
export { useTheme, useScanUsage } from './hooks/index.js';
export type { ScanUsage } from './hooks/index.js';

// Drawings
export {
  DrawingSerializationError,
  serializeDrawing,
  serializeDrawings,
  deserializeDrawing,
  deserializeDrawings,
} from './drawings/index.js';

// Utils
export {
  formatPrice,
  formatVolume,
  formatPercentage,
  formatTimestamp,
  timeframeToMs,
  timeframeLabel,
  toLWCCandlestickData,
  toLWCVolumeData,
  patternsToInsights,
  isBullish,
} from './utils/index.js';
