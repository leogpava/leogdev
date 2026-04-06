"use client";

import { create } from "zustand";

import { appRegistry } from "@/apps/registry";
import { getViewportBounds } from "@/core/window-manager/utils/viewport";
import {
  clampWindowPosition,
  getMaximizedWindowRect,
} from "@/core/window-manager/utils/window-bounds";
import { WINDOW_Z_INDEX_BASE } from "@/shared/constants/ui";
import type { AppId, WindowInstance } from "@/shared/types/app";

import type { OpenWindowOptions, WindowManagerState } from "../types/window-manager";

const getNextZIndex = (windows: WindowInstance[]) =>
  windows.reduce((max, window) => Math.max(max, window.zIndex), WINDOW_Z_INDEX_BASE) + 1;

const getNextActiveWindowId = (windows: WindowInstance[]) =>
  windows
    .filter((window) => !window.isMinimized)
    .sort((left, right) => right.zIndex - left.zIndex)[0]?.id ?? null;

const buildWindowInstance = (appId: AppId, windows: WindowInstance[], options?: OpenWindowOptions): WindowInstance => {
  const definition = appRegistry[appId];

  return {
    id: `${appId}-window`,
    appId,
    title: definition.title,
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    zIndex: getNextZIndex(windows),
    position: definition.defaultPosition,
    size: definition.defaultSize,
    props: options?.props,
    createdAt: Date.now(),
  };
};

export const useWindowManager = create<WindowManagerState>((set) => ({
  windows: [],
  activeWindowId: null,
  openWindow: (appId, options) =>
    set((state) => {
      const existing = state.windows.find((window) => window.appId === appId);

      if (existing) {
        const nextZIndex = getNextZIndex(state.windows);

        return {
          windows: state.windows.map((window) =>
            window.id === existing.id
              ? {
                  ...window,
                  isOpen: true,
                  isMinimized: false,
                  isMaximized: window.isMaximized,
                  zIndex: nextZIndex,
                }
              : window
          ),
          activeWindowId: existing.id,
        };
      }

      const nextWindow = buildWindowInstance(appId, state.windows, options);

      return {
        windows: [...state.windows, nextWindow],
        activeWindowId: nextWindow.id,
      };
    }),
  closeWindow: (windowId) =>
    set((state) => {
      const remainingWindows = state.windows.filter((window) => window.id !== windowId);

      return {
        windows: remainingWindows,
        activeWindowId: getNextActiveWindowId(remainingWindows),
      };
    }),
  focusWindow: (windowId) =>
    set((state) => {
      const targetWindow = state.windows.find((window) => window.id === windowId);

      if (!targetWindow) {
        return state;
      }

      const nextZIndex = getNextZIndex(state.windows);

      return {
        windows: state.windows.map((window) =>
          window.id === windowId
            ? {
                ...window,
                isMinimized: false,
                zIndex: nextZIndex,
              }
            : window
        ),
        activeWindowId: windowId,
      };
    }),
  minimizeWindow: (windowId) =>
    set((state) => {
      const nextWindows = state.windows.map((window) =>
        window.id === windowId
          ? {
              ...window,
              isMinimized: true,
              isMaximized: false,
            }
          : window
      );

      return {
        windows: nextWindows,
        activeWindowId:
          state.activeWindowId === windowId
            ? getNextActiveWindowId(nextWindows)
            : state.activeWindowId,
      };
    }),
  maximizeWindow: (windowId) =>
    set((state) => {
      const viewport = getViewportBounds();
      const nextZIndex = getNextZIndex(state.windows);

      return {
        windows: state.windows.map((window) => {
          if (window.id !== windowId) {
            return window;
          }

          if (window.isMaximized) {
            const restoreSnapshot = window.restoreSnapshot;

            return {
              ...window,
              isMaximized: false,
              isMinimized: false,
              zIndex: nextZIndex,
              position: restoreSnapshot?.position ?? window.position,
              size: restoreSnapshot?.size ?? window.size,
            };
          }

          const restoreSnapshot = {
            position: window.position,
            size: window.size,
          };
          const maximizedRect = getMaximizedWindowRect(viewport);

          return {
            ...window,
            isMaximized: true,
            isMinimized: false,
            zIndex: nextZIndex,
            restoreSnapshot,
            position: maximizedRect.position,
            size: maximizedRect.size,
          };
        }),
        activeWindowId: windowId,
      };
    }),
  restoreWindow: (windowId) =>
    set((state) => {
      const nextZIndex = getNextZIndex(state.windows);

      return {
        windows: state.windows.map((window) => {
          if (window.id !== windowId) {
            return window;
          }

          const restoreSnapshot = window.restoreSnapshot;

          return {
            ...window,
            isMinimized: false,
            isMaximized: false,
            zIndex: nextZIndex,
            position: restoreSnapshot?.position ?? window.position,
            size: restoreSnapshot?.size ?? window.size,
          };
        }),
        activeWindowId: windowId,
      };
    }),
  moveWindow: (windowId, position) =>
    set((state) => {
      const viewport = getViewportBounds();

      return {
        windows: state.windows.map((window) =>
          window.id === windowId
            ? {
                ...window,
                position: clampWindowPosition(position, window.size, viewport),
              }
            : window
        ),
      };
    }),
  resizeWindow: (windowId, size) =>
    set((state) => {
      const viewport = getViewportBounds();

      return {
        windows: state.windows.map((window) =>
          window.id === windowId
            ? {
                ...window,
                size,
                position: clampWindowPosition(window.position, size, viewport),
              }
            : window
        ),
      };
    }),
}));
