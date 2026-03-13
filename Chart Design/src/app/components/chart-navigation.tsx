import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ─── SVG Icon Components ───────────────────── */

function MinusIcon() {
  return (
    <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
      <path d="M0.5 1H9.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M5.5 0.5C5.5 0.223858 5.27614 0 5 0C4.72386 0 4.5 0.223858 4.5 0.5V4.5H0.5C0.223858 4.5 0 4.72386 0 5C0 5.27614 0.223858 5.5 0.5 5.5H4.5V9.5C4.5 9.77614 4.72386 10 5 10C5.27614 10 5.5 9.77614 5.5 9.5V5.5H9.5C9.77614 5.5 10 5.27614 10 5C10 4.72386 9.77614 4.5 9.5 4.5H5.5V0.5Z"
        fill="var(--hc-text)"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path d="M6 1L1 6L6 11" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path d="M1 1L6 6L1 11" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <path
        d="M2.45222 9.82607C2.95653 11.2575 3.91237 12.4862 5.17573 13.3271C6.43909 14.1681 7.94153 14.5756 9.45666 14.4884C10.9718 14.4012 12.4176 13.824 13.5761 12.8437C14.7346 11.8633 15.5432 10.533 15.8799 9.05324C16.2167 7.57343 16.0634 6.02426 15.4431 4.63915C14.8229 3.25404 13.7693 2.10803 12.4411 1.37378C11.1129 0.639538 9.58203 0.356839 8.07919 0.56828C6.57635 0.779721 5.18293 1.47385 4.10889 2.54608L0.500001 5.93718"
        stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round"
        transform="translate(-0.5, -0.5) scale(0.72)"
      />
      <path
        d="M0.500001 1.27052V5.93718H5.16666"
        stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round"
        transform="translate(-0.5, -0.5) scale(0.72)"
      />
    </svg>
  );
}

/* ─── Tooltip ───────────────────────────────── */

function Tooltip({ text, visible }: { text: string; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-[46px] pointer-events-none z-20"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.12 }}
        >
          <div className="px-[15px] py-[8px] rounded-[3px] whitespace-nowrap" style={{ backgroundColor: 'var(--hc-tooltip-bg)' }}>
            <span className="text-[12px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-tooltip-text)' }}>{text}</span>
          </div>
          {/* Tooltip arrow */}
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] rotate-90">
            <path
              d="M0.581652 7.87015C0.256054 7.55919 0.0932544 7.40371 0.0351608 7.22336C-0.0117203 7.07782 -0.0117203 6.92218 0.0351608 6.77664C0.0932544 6.59629 0.256054 6.44081 0.581652 6.12985L7 0V14L0.581652 7.87015Z"
              fill="var(--hc-tooltip-bg)"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Nav Button ────────────────────────────── */

function NavButton({
  children,
  tooltip,
  onClick,
}: {
  children: React.ReactNode;
  tooltip: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <Tooltip text={tooltip} visible={hovered} />
      <button
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors active:scale-95"
        style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </button>
    </div>
  );
}

/* ─── Chart Navigation Bar ──────────────────── */

export interface ChartNavigationProps {
  visible: boolean;
  onZoomOut: () => void;
  onZoomIn: () => void;
  onScrollLeft: () => void;
  onScrollRight: () => void;
  onResetToRecent: () => void;
}

export function ChartNavigation({
  visible,
  onZoomOut,
  onZoomIn,
  onScrollLeft,
  onScrollRight,
  onResetToRecent,
}: ChartNavigationProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute bottom-[42px] left-1/2 -translate-x-1/2 z-10 flex items-center gap-[6px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Zoom controls */}
          <NavButton tooltip="Zoom Out" onClick={onZoomOut}>
            <MinusIcon />
          </NavButton>
          <NavButton tooltip="Zoom In" onClick={onZoomIn}>
            <PlusIcon />
          </NavButton>

          {/* Spacer */}
          <div className="w-[8px]" />

          {/* Scroll controls */}
          <NavButton tooltip="Scroll to the Left" onClick={onScrollLeft}>
            <ChevronLeftIcon />
          </NavButton>
          <NavButton tooltip="Scroll to the Right" onClick={onScrollRight}>
            <ChevronRightIcon />
          </NavButton>

          {/* Spacer */}
          <div className="w-[8px]" />

          {/* Back to recent */}
          <NavButton tooltip="Back to Recent Price" onClick={onResetToRecent}>
            <ResetIcon />
          </NavButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}