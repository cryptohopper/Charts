import { useEffect, useState } from "react";

const RANGES = ["1D", "5D", "1M", "3M", "6M", "YTD", "1Y", "5Y", "All"] as const;
const SCALES = ["%", "log", "reg"] as const;

export function DesignFooterBar() {
  const [selectedRange, setSelectedRange] = useState<(typeof RANGES)[number]>("6M");
  const [selectedScale, setSelectedScale] = useState<(typeof SCALES)[number]>("reg");
  const [timeLabel, setTimeLabel] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setTimeLabel(
        `${String(now.getUTCHours()).padStart(2, "0")}:${String(now.getUTCMinutes()).padStart(2, "0")}:${String(now.getUTCSeconds()).padStart(2, "0")} (UTC)`,
      );
    }

    updateTime();
    const intervalId = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      className="h-[32px] rounded-none transition-colors duration-200 md:h-[40px] md:rounded-[6px]"
      style={{ backgroundColor: "var(--hc-surface)" }}
    >
      <div className="flex h-full items-center justify-between gap-3 overflow-x-auto px-2 md:px-3 no-scrollbar">
        <div className="flex items-center gap-2 md:gap-4">
          {RANGES.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => setSelectedRange(range)}
              className="rounded-md px-2 py-1 text-[11px] font-['Source_Sans_3',sans-serif] transition-colors md:text-[12px]"
              style={{
                backgroundColor: selectedRange === range ? "var(--hc-surface-hover)" : undefined,
                color: selectedRange === range ? "var(--hc-text)" : "var(--hc-text-secondary)",
              }}
            >
              {range}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-[12px] font-['Source_Sans_3',sans-serif] text-[var(--hc-text-secondary)]">
          <span className="whitespace-nowrap text-[var(--hc-text)]">{timeLabel}</span>
          <div className="h-5 w-px bg-[var(--hc-border)]" />
          <div className="flex items-center gap-2">
            {SCALES.map((scale) => (
              <button
                key={scale}
                type="button"
                onClick={() => setSelectedScale(scale)}
                className="transition-colors"
                style={{ color: selectedScale === scale ? "var(--hc-text)" : "var(--hc-text-secondary)" }}
              >
                {scale}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
