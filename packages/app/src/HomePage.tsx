import { HopChart } from "@hopcharts/chart";
import { AnimatePresence } from "motion/react";
import { useUIStore } from "@hopcharts/core";
import { DesignFooterBar } from "./components/DesignFooterBar";
import { DesignToolsSidebar } from "./components/DesignToolsSidebar";
import { DesignTopBar } from "./components/DesignTopBar";
import { DesktopAIInsightsPanel } from "./components/DesktopAIInsightsPanel";
import { MobileBottomBar } from "./components/MobileBottomBar";
import { useUrlStateSync } from "./hooks/useUrlStateSync";

export function HomePage() {
  useUrlStateSync();
  const activeSidePanel = useUIStore((s) => s.activeSidePanel);
  const showInsightsPanel = activeSidePanel === 'ai-insights';

  return (
    <div className="h-screen overflow-hidden bg-[var(--hc-page-bg)] text-[var(--hc-text)]">
      <div
        className={`grid h-full min-h-0 overflow-hidden transition-colors duration-200 grid-cols-[36px_minmax(0,1fr)] grid-rows-[auto_minmax(0,1fr)_auto] ${
          showInsightsPanel
            ? 'md:grid-cols-[48px_minmax(0,1fr)_320px]'
            : 'md:grid-cols-[48px_minmax(0,1fr)]'
        }`}
      >
        <div className="col-span-2 min-w-0 shrink-0">
          <DesignTopBar />
        </div>

        {/* Sidebar — hidden on mobile */}
        <div className="row-[2/-1] hidden w-[36px] shrink-0 flex-col items-center overflow-hidden md:flex md:w-[48px] md:pb-[6px]">
          <div className="min-h-0 w-full flex-1 overflow-hidden md:mt-[6px]">
            <DesignToolsSidebar />
          </div>
        </div>

        <div className="col-span-2 row-start-2 flex min-h-0 min-w-0 flex-col md:col-span-1 md:col-start-2 md:px-[6px] md:pb-[6px]">
          <div className="relative flex min-h-0 flex-1 flex-col">
            <div className="min-h-[200px] flex-1 overflow-hidden rounded-none border border-transparent bg-[var(--hc-surface)] md:mt-[6px] md:rounded-[6px] md:border-[var(--hc-border)] md:shadow-[var(--hc-shadow)]">
              <HopChart className="h-full w-full" showToolbar={false} />
            </div>
          </div>
        </div>

        {/* AI Insights panel — desktop only */}
        <AnimatePresence>
          {showInsightsPanel && <DesktopAIInsightsPanel />}
        </AnimatePresence>

        {/* Desktop footer */}
        <div className="col-start-2 row-start-3 hidden min-w-0 md:block md:px-[6px] md:pb-[6px]">
          <DesignFooterBar />
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden">
        <MobileBottomBar />
      </div>
    </div>
  );
}
