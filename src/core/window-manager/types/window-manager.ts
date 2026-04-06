import type { AppId, WindowInstance } from "@/shared/types/app";

export type OpenWindowOptions = {
  props?: Record<string, unknown>;
  loadingMessages?: string[];
  loadingDurationMs?: number;
};

export type WindowManagerState = {
  windows: WindowInstance[];
  activeWindowId: string | null;
  openWindow: (appId: AppId, options?: OpenWindowOptions) => void;
  closeWindow: (windowId: string) => void;
  focusWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  maximizeWindow: (windowId: string) => void;
  restoreWindow: (windowId: string) => void;
  moveWindow: (windowId: string, position: WindowInstance["position"]) => void;
  resizeWindow: (windowId: string, size: WindowInstance["size"]) => void;
};
