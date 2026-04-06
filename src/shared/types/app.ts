import type { ComponentType } from "react";

export type AppId =
  | "sap"
  | "projects"
  | "automacoes"
  | "about"
  | "skills"
  | "contact";

export type WindowPosition = {
  x: number;
  y: number;
};

export type WindowSize = {
  width: number;
  height: number;
};

export type WindowSnapshot = {
  position: WindowPosition;
  size: WindowSize;
};

export type AppIsolationMode = "none" | "shadow";
export type AppMobileMode = "fullscreen" | "sheet";

export type WindowInstance = {
  id: string;
  appId: AppId;
  title: string;
  isOpen: boolean;
  isClosing?: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  isLoading?: boolean;
  loadingMessages?: string[];
  zIndex: number;
  position: WindowPosition;
  size: WindowSize;
  restoreSnapshot?: WindowSnapshot;
  props?: Record<string, unknown>;
  createdAt: number;
};

export type AppComponentProps = {
  window: WindowInstance;
};

export type AppDefinition = {
  id: AppId;
  title: string;
  component: ComponentType<AppComponentProps>;
  defaultSize: WindowSize;
  defaultPosition: WindowPosition;
  isolation: AppIsolationMode;
  mobileMode: AppMobileMode;
  isolatedStyleText?: string;
};
