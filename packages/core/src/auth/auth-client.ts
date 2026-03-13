import { apiRequest, ApiError } from '../api/client.js';
import { getEnvVar } from '../utils/env.js';

/* ─── Types ─────────────────────────────────── */

export type SubscriptionTier = 'pioneer' | 'explorer' | 'adventurer' | 'hero';

export type FeatureKey =
  | 'basic_drawing_tools'
  | 'advanced_drawing_tools'
  | 'premium_indicators'
  | 'multi_chart'
  | 'ai_overlay'
  | 'ai_advanced'
  | 'chart_templates'
  | 'save_charts';

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  subscriptionTier: SubscriptionTier;
  avatarUrl?: string;
}

/* ─── Feature Access Matrix ─────────────────── */

const featureAccess: Record<SubscriptionTier, Set<FeatureKey>> = {
  pioneer: new Set(['ai_overlay']),
  explorer: new Set(['basic_drawing_tools', 'ai_overlay', 'save_charts']),
  adventurer: new Set([
    'basic_drawing_tools', 'advanced_drawing_tools', 'multi_chart',
    'ai_overlay', 'chart_templates', 'save_charts',
  ]),
  hero: new Set([
    'basic_drawing_tools', 'advanced_drawing_tools', 'premium_indicators',
    'multi_chart', 'ai_overlay', 'ai_advanced', 'chart_templates', 'save_charts',
  ]),
};

/* ─── Constants ─────────────────────────────── */

const STORAGE_OAUTH_STATE = 'hopcharts_oauth_state';
const STORAGE_POST_LOGIN_REDIRECT = 'hopcharts_post_login_redirect';

/* ─── Environment helpers ───────────────────── */

function getClientId(): string {
  return getEnvVar('HOPCHARTS_OAUTH_CLIENT_ID', '');
}

function getRedirectUri(): string {
  return getEnvVar('HOPCHARTS_OAUTH_REDIRECT_URI') ?? `${window.location.origin}/auth/callback`;
}

/* ─── OAuth State (CSRF protection) ─────────── */

function generateState(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
}

function storeOAuthState(state: string): void {
  sessionStorage.setItem(STORAGE_OAUTH_STATE, state);
}

function verifyAndConsumeState(state: string): boolean {
  const stored = sessionStorage.getItem(STORAGE_OAUTH_STATE);
  sessionStorage.removeItem(STORAGE_OAUTH_STATE);
  return stored === state;
}

/* ─── Auth Client ───────────────────────────── */

export const authClient = {
  /**
   * Redirect the user to CryptoHopper's OAuth consent screen.
   */
  initiateLogin(redirectUrl?: string): void {
    const state = generateState();
    storeOAuthState(state);

    if (redirectUrl) {
      sessionStorage.setItem(STORAGE_POST_LOGIN_REDIRECT, redirectUrl);
    }

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: getClientId(),
      redirect_uri: getRedirectUri(),
      scope: 'read',
      state,
    });

    window.location.href = `https://www.cryptohopper.com/oauth2/authorize?${params}`;
  },

  /**
   * Exchange the authorization code for an access token (via backend)
   * and return the authenticated user.
   */
  async handleCallback(params: URLSearchParams): Promise<AuthUser> {
    const code = params.get('code');
    const state = params.get('state');
    const error = params.get('error');

    if (error) {
      throw new Error(`OAuth error: ${params.get('error_description') ?? error}`);
    }

    if (!code || !state) {
      throw new Error('Missing authorization code or state parameter');
    }

    if (!verifyAndConsumeState(state)) {
      throw new Error('Invalid OAuth state — possible CSRF attack');
    }

    // Backend exchanges code for token and sets httpOnly cookie
    return apiRequest<AuthUser>('/v1/auth/callback', {
      method: 'POST',
      body: JSON.stringify({ code, redirect_uri: getRedirectUri() }),
    });
  },

  /**
   * Fetch the currently authenticated user from the backend.
   * Returns null if not authenticated (401).
   */
  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      return await apiRequest<AuthUser>('/v1/auth/me');
    } catch (err: unknown) {
      if (err instanceof ApiError && err.status === 401) {
        return null;
      }
      throw err;
    }
  },

  /**
   * Log the user out by clearing the backend session/cookie.
   */
  async logout(): Promise<void> {
    await apiRequest<void>('/v1/auth/logout', { method: 'POST' });
  },

  /**
   * Consume and return the stored post-login redirect path, if any.
   */
  consumePostLoginRedirect(): string {
    const redirect = sessionStorage.getItem(STORAGE_POST_LOGIN_REDIRECT) ?? '/';
    sessionStorage.removeItem(STORAGE_POST_LOGIN_REDIRECT);
    return redirect;
  },

  /**
   * Check whether a user's subscription tier grants access to a feature.
   */
  canAccess(user: AuthUser | null, feature: FeatureKey): boolean {
    if (!user) return false;
    return featureAccess[user.subscriptionTier].has(feature);
  },
};
