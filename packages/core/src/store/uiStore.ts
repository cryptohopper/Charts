import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export interface UIStore {
  sidebarOpen: boolean;
  activeSidePanel: 'indicators' | 'ai-insights' | 'orders' | null;
  isFullscreen: boolean;

  toggleSidebar: () => void;
  setSidePanel: (panel: UIStore['activeSidePanel']) => void;
  setFullscreen: (fs: boolean) => void;
}

export const useUIStore = create<UIStore>()(
  devtools(
    immer((set) => ({
      sidebarOpen: true,
      activeSidePanel: null,
      isFullscreen: false,

      toggleSidebar: () =>
        set((state) => {
          state.sidebarOpen = !state.sidebarOpen;
        }),
      setSidePanel: (panel) => set({ activeSidePanel: panel }),
      setFullscreen: (fs) => set({ isFullscreen: fs }),
    })),
    { name: 'UIStore' },
  ),
);
