import { useUserStore } from '../store/index.js';
import { getAIScanLimit } from '../auth/index.js';

export interface ScanUsage {
  scanLimit: number;
  currentScans: number;
  limitReached: boolean;
  scansDisplay: string;
}

export function useScanUsage(): ScanUsage {
  const subscriptionTier = useUserStore((s) => s.subscriptionTier);
  const aiScansToday = useUserStore((s) => s.aiScansToday);
  const aiScansResetDate = useUserStore((s) => s.aiScansResetDate);

  const scanLimit = getAIScanLimit(subscriptionTier);
  const todayISO = new Date().toISOString().slice(0, 10);
  const currentScans = aiScansResetDate === todayISO ? aiScansToday : 0;
  const limitReached = scanLimit !== Infinity && currentScans >= scanLimit;

  const scansDisplay = scanLimit === Infinity
    ? `${aiScansToday} scans today`
    : `${currentScans}/${scanLimit} scans today`;

  return { scanLimit, currentScans, limitReached, scansDisplay };
}
