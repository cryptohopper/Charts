import { motion, AnimatePresence } from "motion/react";

/* --- Animated Icons --- */

function AnimatedCheck() {
  return (
    <motion.div
      className="w-[40px] h-[40px] relative mb-[12px]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <motion.circle cx="20" cy="20" r="20" fill="#00B1C7" fillOpacity="0.1"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </svg>
      <svg width="18" height="13" viewBox="0 0 18 13" fill="none" className="absolute top-[14px] left-[11px]">
        <motion.path
          d="M16.5 1.5L6.1875 11.5L1.5 6.95"
          stroke="#00B1C7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
}

function AnimatedCross() {
  return (
    <motion.div
      className="w-[40px] h-[40px] relative mb-[12px]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#FF6B5C" fillOpacity="0.1" />
      </svg>
      <svg width="14" height="14" viewBox="0 0 14.6666 14.6667" fill="none" className="absolute top-[13px] left-[13px]">
        <motion.path d="M13.3333 1.33334L1.33331 13.3333" stroke="#F26D60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        />
        <motion.path d="M1.33331 1.33334L13.3333 13.3333" stroke="#F26D60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />
      </svg>
    </motion.div>
  );
}

function AnimatedTrash() {
  return (
    <motion.div
      className="w-[40px] h-[40px] relative mb-[12px]"
      initial={{ scale: 0, rotate: -15 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.1 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#F88922" opacity="0.2" />
      </svg>
      <svg width="18" height="20" viewBox="0 0 17.9333 20.2667" fill="none" className="absolute top-[10px] left-[11px]">
        <path d="M0.8 4.53334H2.61481H17.1333" stroke="#F88922" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M5.33713 4.53333V2.66667C5.33713 2.1716 5.52833 1.6968 5.86867 1.34673C6.20902 0.996666 6.67062 0.8 7.15194 0.8H10.7816C11.2629 0.8 11.7245 0.996666 12.0648 1.34673C12.4052 1.6968 12.5964 2.1716 12.5964 2.66667V4.53333M15.3186 4.53333V17.6C15.3186 18.0951 15.1274 18.5699 14.7871 18.9199C14.4467 19.27 13.9851 19.4667 13.5038 19.4667H4.42972C3.9484 19.4667 3.48679 19.27 3.14645 18.9199C2.80611 18.5699 2.6149 18.0951 2.6149 17.6V4.53333H15.3186Z" stroke="#F88922" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M7.15187 9.20002V14.8" stroke="#F88922" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M10.7816 9.20002V14.8" stroke="#F88922" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    </motion.div>
  );
}

/* --- Reusable Feedback Modal --- */

export type FeedbackVariant = "success" | "error" | "warning";

export interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
  variant: FeedbackVariant;
  message: React.ReactNode;
  primaryLabel?: string;
  onPrimary?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  zIndex?: number;
}

export function FeedbackModal({
  open, onClose, variant, message,
  primaryLabel = "Ok", onPrimary,
  secondaryLabel, onSecondary,
  zIndex = 9999,
}: FeedbackModalProps) {
  const hasTwoButtons = !!secondaryLabel;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--hc-modal-overlay)' }} onClick={onClose} />
          <motion.div
            className="relative rounded-md flex flex-col items-center px-[15px] pt-[16px] pb-[20px]"
            style={{ width: 230, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
            initial={{ scale: 0.85, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {variant === "success" && <AnimatedCheck />}
            {variant === "error" && <AnimatedCross />}
            {variant === "warning" && <AnimatedTrash />}

            <p className="text-[14px] font-['Source_Sans_3',sans-serif] text-center mb-[15px] leading-[20px]" style={{ color: 'var(--hc-text)' }}>
              {message}
            </p>

            {hasTwoButtons ? (
              <div className="flex gap-[10px] w-full">
                <button
                  onClick={onSecondary ?? onClose}
                  className="flex-1 h-[32px] rounded-sm text-[14px] font-['Source_Sans_3',sans-serif] transition-colors"
                  style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border-strong)', color: 'var(--hc-text-secondary)' }}
                >
                  {secondaryLabel}
                </button>
                <button
                  onClick={onPrimary ?? onClose}
                  className="flex-1 h-[32px] bg-[#00b1c7] rounded-sm text-[14px] text-white font-['Source_Sans_3',sans-serif] hover:bg-[#009aad] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  {primaryLabel}
                </button>
              </div>
            ) : (
              <button
                onClick={onPrimary ?? onClose}
                className="w-full h-[32px] bg-[#00b1c7] rounded-sm text-[14px] text-white font-['Source_Sans_3',sans-serif] hover:bg-[#009aad] transition-colors"
                style={{ fontWeight: 600 }}
              >
                {primaryLabel}
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
