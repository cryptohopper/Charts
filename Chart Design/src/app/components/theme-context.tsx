import { createContext, useContext, useState, useLayoutEffect, useCallback } from "react";

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("hopcharts-theme");
      if (saved !== null) return saved === "dark";
    } catch {}
    return false;
  });

  // useLayoutEffect ensures .dark class is applied BEFORE any child useEffect
  // runs (canvas draw effects read CSS vars via getComputedStyle)
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("hopcharts-theme", isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((v) => !v), []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}