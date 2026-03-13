import { useLayoutEffect } from 'react';
import { useUserStore } from '../store/index.js';

/**
 * Syncs `userStore.preferences.theme` to the `.dark` class on `<html>`.
 * Mount once at the app root — downstream consumers (HopChart's MutationObserver,
 * getAIOverlayTheme, CSS custom properties) react automatically.
 */
export function useTheme() {
  const theme = useUserStore((s) => s.preferences.theme);
  const setTheme = useUserStore((s) => s.setTheme);
  const isDark = theme === 'dark';

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return { theme, isDark, toggleTheme, setTheme } as const;
}
