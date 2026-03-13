import { motion } from 'motion/react';
import { AIInsightsContent } from './AIInsightsContent.js';

interface MobileAIInsightsDrawerProps {
  onClose: () => void;
}

export function MobileAIInsightsDrawer({ onClose }: MobileAIInsightsDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-[101] rounded-t-2xl border-t overflow-hidden flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        style={{
          backgroundColor: 'var(--hc-modal-bg)',
          borderColor: 'var(--hc-border)',
          height: '70vh',
        }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0.1}
        onDragEnd={(_e, info) => {
          if (info.offset.y > 100) onClose();
        }}
      >
        {/* Drag handle */}
        <div className="w-full flex justify-center py-3 shrink-0">
          <div
            className="w-12 h-1.5 rounded-full opacity-50"
            style={{ backgroundColor: 'var(--hc-border-strong)' }}
          />
        </div>

        <AIInsightsContent />
      </motion.div>
    </>
  );
}
