"use client";

import { useWindowManager } from "@/core/window-manager/store/use-window-manager";
import type { WindowInstance } from "@/shared/types/app";
import { cn } from "@/shared/utils/cn";

type WindowTaskbarProps = {
  isMobile: boolean;
};

function WindowTaskbarItem({
  window,
  isActive,
}: {
  window: WindowInstance;
  isActive: boolean;
}) {
  const focusWindow = useWindowManager((state) => state.focusWindow);
  const restoreWindow = useWindowManager((state) => state.restoreWindow);
  const minimizeWindow = useWindowManager((state) => state.minimizeWindow);

  const handleClick = () => {
    if (window.isMinimized) {
      restoreWindow(window.id);
      return;
    }

    if (isActive) {
      minimizeWindow(window.id);
      return;
    }

    focusWindow(window.id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "min-w-0 rounded-full border px-3 py-1.5 text-left transition-all duration-150 hover:-translate-y-0.5",
        isActive
          ? "border-[#444444] bg-[#2a2a2a] text-[#fafafa] shadow-[0_0_20px_rgba(179,146,240,0.05)]"
          : "border-[#313131] bg-[#1a1a1a] text-[#888888] hover:border-[#444444] hover:bg-[#202020] hover:text-[#e0e0e0]",
        window.isMinimized && "border-[#2a2a2a] bg-[#1a1a1a] text-[#727272]"
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            isActive ? "bg-[#b392f0]" : window.isMinimized ? "bg-[#555555]" : "bg-[#727272]"
          )}
        />
        <span className="max-w-32 truncate text-xs font-medium md:max-w-40">
          {window.title}
        </span>
      </div>
    </button>
  );
}

export function WindowTaskbar({ isMobile }: WindowTaskbarProps) {
  const windows = useWindowManager((state) => state.windows);
  const activeWindowId = useWindowManager((state) => state.activeWindowId);
  const now = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 px-3 pt-3 md:px-4 md:pt-4">
      <div
        className={cn(
          "pointer-events-auto flex items-center gap-3 rounded-full border border-[#313131]/95 bg-[#1a1a1a]/90 px-3 py-2 backdrop-blur-xl shadow-xl shadow-black/20",
          isMobile && "gap-2 px-2.5 py-2"
        )}
      >
        <div className="shrink-0 px-1">
          <p className="truncate text-[11px] font-medium tracking-[0.22em] text-[#e0e0e0]/90">
            {isMobile ? "portfolio://shell" : "leonardoOS"}
          </p>
        </div>
        <div
          className={cn(
            "min-w-0 flex-1 gap-2",
            isMobile ? "flex overflow-x-auto" : "flex overflow-x-auto"
          )}
        >
          {windows.length > 0 ? (
            windows
              .slice()
              .sort((left, right) => left.createdAt - right.createdAt)
              .map((window) => (
                <div
                  key={window.id}
                  className={cn("flex-none", isMobile ? "min-w-28" : "min-w-24")}
                >
                  <WindowTaskbarItem
                    window={window}
                    isActive={activeWindowId === window.id && !window.isMinimized}
                  />
                </div>
              ))
          ) : (
            <div className="flex items-center px-2 text-[11px] uppercase tracking-[0.24em] text-[#727272]">
              Nenhuma janela aberta
            </div>
          )}
        </div>
        <div className="hidden shrink-0 items-center gap-3 pl-1 md:flex">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#727272]">
            {isMobile ? "mobile" : "desktop"}
          </span>
          <span className="font-mono text-xs text-[#e0e0e0]">{now}</span>
        </div>
      </div>
    </div>
  );
}
