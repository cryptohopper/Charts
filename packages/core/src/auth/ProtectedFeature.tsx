import type { ReactNode } from 'react';
import { useAuth } from './useAuth.js';
import type { FeatureKey } from './auth-client.js';

export interface ProtectedFeatureProps {
  feature: FeatureKey;
  children: ReactNode;
  /** Rendered when the user lacks access. Defaults to nothing. */
  fallback?: ReactNode;
}

export function ProtectedFeature({ feature, children, fallback = null }: ProtectedFeatureProps) {
  const { canAccess } = useAuth();

  if (!canAccess(feature)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
