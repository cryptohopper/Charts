import { useCallback, useSyncExternalStore } from 'react';
import { authClient, type AuthUser, type FeatureKey } from './auth-client.js';
import { useUserStore } from '../store/userStore.js';

export interface UseAuthReturn {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (redirectUrl?: string) => void;
  logout: () => Promise<void>;
  canAccess: (feature: FeatureKey) => boolean;
}

/* ─── Shared auth state (singleton) ─────────── */

interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  fetchCompleted: boolean;
}

let state: AuthState = { user: null, isLoading: true, fetchCompleted: false };
let fetchPromise: Promise<void> | null = null;
const listeners = new Set<() => void>();

function emit() {
  for (const fn of listeners) fn();
}

function setState(patch: Partial<AuthState>) {
  state = { ...state, ...patch };
  emit();
}

function syncUserStore(user: AuthUser | null) {
  const store = useUserStore.getState();
  if (user) {
    store.setAuth(user.id, user.subscriptionTier);
    store.resetDailyScansIfNeeded();
  } else {
    store.clearAuth();
  }
}

function fetchUser(): void {
  if (state.fetchCompleted || fetchPromise) return;

  fetchPromise = authClient
    .getCurrentUser()
    .then((user) => {
      syncUserStore(user);
      setState({ user, isLoading: false, fetchCompleted: true });
    })
    .catch(() => {
      setState({ user: null, isLoading: false, fetchCompleted: true });
    })
    .finally(() => {
      fetchPromise = null;
    });
}

// Kick off the initial fetch at module load time (runs once).
fetchUser();

/**
 * Set the cached user directly (e.g. after handleCallback returns the user).
 * Avoids an extra /v1/auth/me round-trip.
 */
export function setAuthUser(user: AuthUser): void {
  syncUserStore(user);
  setState({ user, isLoading: false, fetchCompleted: true });
}

/* ─── React hook ────────────────────────────── */

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => { listeners.delete(onStoreChange); };
}

function getSnapshot(): AuthState {
  return state;
}

export function useAuth(): UseAuthReturn {
  const { user, isLoading } = useSyncExternalStore(subscribe, getSnapshot);

  const login = useCallback((redirectUrl?: string) => {
    authClient.initiateLogin(redirectUrl);
  }, []);

  const logout = useCallback(async () => {
    await authClient.logout();
    syncUserStore(null);
    setState({ user: null, isLoading: false, fetchCompleted: false });
  }, []);

  const canAccess = useCallback(
    (feature: FeatureKey) => authClient.canAccess(user, feature),
    [user],
  );

  return {
    user,
    isLoading,
    isAuthenticated: user !== null,
    login,
    logout,
    canAccess,
  };
}
