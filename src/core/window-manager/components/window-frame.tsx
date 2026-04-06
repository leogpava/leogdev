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

  if (!window.isOpen) {
    return null;
  }

  const shouldUseFullscreen = shouldUseMobileFullscreen || window.isMaximized;
  const shouldUseDesktopMaximized = window.isMaximized && !isMobile;
  const isHidden = (window.isMinimized && !window.isClosing) || (isMobile && !isActive);
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
      aria-hidden={isHidden}
      onMouseDown={() => {
        if (!isHidden) {
          focusWindow(window.id);
        }
      }}
      className={cn(
        "window-frame overflow-hidden border bg-slate-900/95 backdrop-blur-xl transition-[opacity,transform,border-color,box-shadow,visibility] duration-180",
        isActive
          ? "border-cyan-400/22 shadow-2xl shadow-black/34"
          : "border-white/10 opacity-90 shadow-xl shadow-black/18",
        shouldUseMobileFullscreen
          ? "fixed inset-x-0 bottom-0 top-0 z-[60] rounded-none"
          : shouldUseMobileSheet
            ? "fixed inset-x-2 bottom-2 z-[60] rounded-[1.75rem]"
            : shouldUseDesktopMaximized
              ? "absolute rounded-none"
              : "absolute rounded-[1.5rem]",
        (isHidden || window.isClosing) && "pointer-events-none invisible opacity-0 scale-[0.985]"
      )}
      style={
        shouldUseMobileFullscreen
          ? { zIndex: window.zIndex, top: 0 }
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
        {window.isLoading ? (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-slate-950/58 backdrop-blur-[2px]">
            <div className="rounded-3xl border border-white/10 bg-slate-950/82 px-5 py-4 text-sm text-slate-100 shadow-2xl shadow-black/30">
              <div className="space-y-1.5 font-mono">
                {(window.loadingMessages ?? ["Carregando..."]).map((message, index) => (
                  <p
                    key={`${window.id}-${message}`}
                    className="animate-[terminal-entry_220ms_ease-out_both]"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {message}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
