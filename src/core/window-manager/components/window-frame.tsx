"use client";

import { appRegistry } from "@/apps/registry";
import { useWindowDrag } from "@/core/window-manager/hooks/use-window-drag";
import { useWindowManager } from "@/core/window-manager/store/use-window-manager";
import { TASKBAR_HEIGHT } from "@/shared/constants/ui";
import type { WindowInstance } from "@/shared/types/app";
import { cn } from "@/shared/utils/cn";

import { IsolatedAppContainer } from "./isolated-app-container";
import { WindowHeader } from "./window-header";

type WindowFrameProps = {
  window: WindowInstance;
  isMobile: boolean;
};

export function WindowFrame({ window, isMobile }: WindowFrameProps) {
  const focusWindow = useWindowManager((state) => state.focusWindow);
  const closeWindow = useWindowManager((state) => state.closeWindow);
  const minimizeWindow = useWindowManager((state) => state.minimizeWindow);
  const maximizeWindow = useWindowManager((state) => state.maximizeWindow);
  const moveWindow = useWindowManager((state) => state.moveWindow);
  const activeWindowId = useWindowManager((state) => state.activeWindowId);
  const definition = appRegistry[window.appId];
  const AppComponent = definition.component;
  const isActive = activeWindowId === window.id;
  const shouldUseMobileFullscreen = isMobile && definition.mobileMode === "fullscreen";
  const shouldUseMobileSheet = isMobile && definition.mobileMode === "sheet";
  const dockOffset = TASKBAR_HEIGHT + 8;

  if (window.isMinimized || !window.isOpen) {
    return null;
  }

  const shouldUseFullscreen = shouldUseMobileFullscreen || window.isMaximized;
  const { handlePointerDown, handlePointerMove, handlePointerUp } = useWindowDrag({
    isMobile,
    window,
    onFocus: () => focusWindow(window.id),
    onMove: (position) => moveWindow(window.id, position),
  });

  return (
    <article
      role="dialog"
      aria-label={window.title}
      onMouseDown={() => focusWindow(window.id)}
      className={cn(
        "overflow-hidden border bg-slate-900/95 backdrop-blur-xl transition-[opacity,transform,border-color,box-shadow] duration-150",
        isActive
          ? "border-cyan-400/22 shadow-2xl shadow-black/34"
          : "border-white/10 opacity-90 shadow-xl shadow-black/18",
        shouldUseFullscreen
          ? "fixed inset-x-2 bottom-2 z-[60] rounded-[1.75rem] md:inset-x-4 md:bottom-4"
          : shouldUseMobileSheet
            ? "fixed inset-x-2 bottom-2 z-[60] rounded-[1.75rem]"
            : "absolute rounded-[1.5rem]"
      )}
      style={
        shouldUseFullscreen
          ? { zIndex: window.zIndex, top: dockOffset }
          : shouldUseMobileSheet
            ? { zIndex: window.zIndex, top: `max(${dockOffset}px, 24vh)` }
            : {
              zIndex: window.zIndex,
              width: window.size.width,
              height: window.size.height,
              transform: `translate(${window.position.x}px, ${window.position.y}px)`,
            }
      }
    >
      <div className="flex h-full flex-col">
        <WindowHeader
          title={window.title}
          subtitle={`${definition.id} / ${definition.isolation}`}
          isActive={isActive}
          isMaximized={window.isMaximized}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />
        <div className="min-h-0 flex-1">
          <IsolatedAppContainer
            isolation={definition.isolation}
            styleText={definition.isolatedStyleText}
          >
            <AppComponent window={window} />
          </IsolatedAppContainer>
        </div>
      </div>
    </article>
  );
}
