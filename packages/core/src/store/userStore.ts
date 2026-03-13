import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';
import { get as idbGet, set as idbSet, del as idbDel } from 'idb-keyval';
import type { ExchangeId, UserPreferences } from '../types/index.js';
import type { SubscriptionTier } from '../auth/index.js';
import { getAIScanLimit } from '../auth/tier-config.js';

export interface UserStore {
  isAuthenticated: boolean;
  userId: string | null;
  subscriptionTier: SubscriptionTier | null;
  preferences: UserPreferences;

  /* AI usage tracking */
  aiScansToday: number;
  aiScansResetDate: string; // ISO date string (YYYY-MM-DD)

  setAuth: (userId: string, tier: SubscriptionTier) => void;
  clearAuth: () => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  addFavoritePair: (pair: string) => void;
  removeFavoritePair: (pair: string) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  consumeAIScan: () => boolean;
  canUseAIScan: () => boolean;
  resetDailyScansIfNeeded: () => void;
}

const idbStorage = createJSONStorage<UserStore>(() => ({
  getItem: async (name: string) => {
    const value = await idbGet<string>(name);
    return value ?? null;
  },
  setItem: async (name: string, value: string) => {
    await idbSet(name, value);
  },
  removeItem: async (name: string) => {
    await idbDel(name);
  },
}));

const defaultPreferences: UserPreferences = {
  theme: 'light',
  favoritesPairs: [],
  defaultExchange: 'binance',
  showAIOverlay: true,
  chartLayouts: {},
};

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        isAuthenticated: false,
        userId: null,
        subscriptionTier: null,
        preferences: defaultPreferences,
        aiScansToday: 0,
        aiScansResetDate: todayISO(),

        setAuth: (userId, tier) =>
          set({
            isAuthenticated: true,
            userId,
            subscriptionTier: tier,
          }),
        clearAuth: () =>
          set({
            isAuthenticated: false,
            userId: null,
            subscriptionTier: null,
          }),
        updatePreferences: (prefs) =>
          set((state) => {
            Object.assign(state.preferences, prefs);
          }),
        addFavoritePair: (pair) =>
          set((state) => {
            if (!state.preferences.favoritesPairs.includes(pair)) {
              state.preferences.favoritesPairs.push(pair);
            }
          }),
        removeFavoritePair: (pair) =>
          set((state) => {
            if (!state.preferences.favoritesPairs.includes(pair)) return;
            state.preferences.favoritesPairs =
              state.preferences.favoritesPairs.filter((p) => p !== pair);
          }),
        setTheme: (theme) =>
          set((state) => {
            state.preferences.theme = theme;
          }),

        resetDailyScansIfNeeded: () => {
          const today = todayISO();
          if (get().aiScansResetDate !== today) {
            set({ aiScansToday: 0, aiScansResetDate: today });
          }
        },

        canUseAIScan: () => {
          const { subscriptionTier, aiScansToday, aiScansResetDate } = get();
          const today = todayISO();
          const scans = aiScansResetDate === today ? aiScansToday : 0;
          const limit = getAIScanLimit(subscriptionTier);
          return scans < limit;
        },

        consumeAIScan: () => {
          const state = get();
          const today = todayISO();
          const scans = state.aiScansResetDate === today ? state.aiScansToday : 0;
          const limit = getAIScanLimit(state.subscriptionTier);
          if (scans >= limit) return false;
          set({
            aiScansToday: scans + 1,
            aiScansResetDate: today,
          });
          return true;
        },
      })),
      {
        name: 'hopcharts-user',
        storage: idbStorage,
      },
    ),
    { name: 'UserStore' },
  ),
);
