import { useTheme } from "@hopcharts/core";
import { TopBar } from "./TopBar";

export function DesignTopBar() {
  const { isDark, toggleTheme } = useTheme();

  return <TopBar isDark={isDark} toggleTheme={toggleTheme} />;
}
