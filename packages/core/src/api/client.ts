import { getEnvVar } from '../utils/env.js';

const DEFAULT_BASE_URL = 'https://api.cryptohopper.com';

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public body: unknown,
  ) {
    super(`API error ${status}: ${statusText}`);
    this.name = 'ApiError';
  }
}

export interface ApiClientOptions {
  baseUrl?: string;
  token?: string;
}

function getBaseUrl(): string {
  return getEnvVar('HOPCHARTS_API_URL', DEFAULT_BASE_URL);
}

function getAuthToken(passedToken?: string): string | null {
  if (passedToken) return passedToken;
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/(?:^|;\s*)hopcharts_token=([^;]*)/);
    if (match) return decodeURIComponent(match[1]);
  }
  return null;
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit & ApiClientOptions = {},
): Promise<T> {
  const { baseUrl, token, ...fetchOptions } = options;
  const url = `${baseUrl ?? getBaseUrl()}${path}`;

  const headers = new Headers(fetchOptions.headers);
  if (!headers.has('Content-Type') && fetchOptions.body) {
    headers.set('Content-Type', 'application/json');
  }

  const authToken = getAuthToken(token);
  if (authToken) {
    headers.set('Authorization', `Bearer ${authToken}`);
  }

  const response = await fetch(url, { ...fetchOptions, headers });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new ApiError(response.status, response.statusText, body);
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}
