import { useEffect, useRef, type MutableRefObject } from 'react';
import { getChartColors, type ChartColors } from '../config/chartOptions.js';

/**
 * Returns a ref that always holds the current chart theme colors.
 * A single MutationObserver on <html class> refreshes the ref on theme toggle.
 */
export function useThemeColorsRef(): MutableRefObject<ChartColors> {
  const colorsRef = useRef(getChartColors());

  useEffect(() => {
    const observer = new MutationObserver(() => {
      colorsRef.current = getChartColors();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return colorsRef;
}
