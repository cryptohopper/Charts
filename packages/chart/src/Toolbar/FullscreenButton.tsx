import React, { useEffect } from 'react';
import { useUIStore } from '@hopcharts/core';

export function FullscreenButton() {
  const isFullscreen = useUIStore((s) => s.isFullscreen);
  const setFullscreen = useUIStore((s) => s.setFullscreen);

  useEffect(() => {
    const handler = () => {
      setFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, [setFullscreen]);

  const toggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <button
      className="flex items-center justify-center w-[56px] h-full"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--hc-surface-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '';
      }}
      onClick={toggle}
    >
      {isFullscreen ? (
        // Exit fullscreen icon
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path
            d="M6 1V4.5C6 5.05 5.55 5.5 5 5.5H1.5M11 1V4.5C11 5.05 11.45 5.5 12 5.5H15.5M6 16V12.5C6 11.95 5.55 11.5 5 11.5H1.5M11 16V12.5C11 11.95 11.45 11.5 12 11.5H15.5"
            stroke="var(--hc-text)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        // Enter fullscreen icon
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path
            d="M1 5.5V2C1 1.45 1.45 1 2 1H5.5M11.5 1H15C15.55 1 16 1.45 16 2V5.5M16 11.5V15C16 15.55 15.55 16 15 16H11.5M5.5 16H2C1.45 16 1 15.55 1 15V11.5"
            stroke="var(--hc-text)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
