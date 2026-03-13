export { authClient } from './auth-client.js';
export type { AuthUser, SubscriptionTier, FeatureKey } from './auth-client.js';
export { useAuth, setAuthUser } from './useAuth.js';
export type { UseAuthReturn } from './useAuth.js';
export { ProtectedFeature } from './ProtectedFeature.js';
export type { ProtectedFeatureProps } from './ProtectedFeature.js';
export {
  hasMinTier,
  getAIModelTier,
  getAIScanLimit,
  getTierDisplayName,
  getDrawingToolTier,
  getMinTierForDrawingTool,
  isPremiumIndicator,
} from './tier-config.js';
export type { AIModelTier, DrawingToolTier } from './tier-config.js';
