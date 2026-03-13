import { motion } from 'motion/react';
import { AIInsightsContent } from './AIInsightsContent.js';

export function DesktopAIInsightsPanel() {
  return (
    <motion.div
      className="hidden md:flex flex-col row-[2/-1] col-start-3 h-full overflow-hidden border-l"
      style={{
        background: 'var(--hc-surface)',
        borderColor: 'var(--hc-border)',
        boxShadow: 'var(--hc-shadow)',
      }}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
    >
      <AIInsightsContent />
    </motion.div>
  );
}
