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
          ? "border-cyan-400/35 bg-cyan-400/10 text-cyan-50"
          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06]",
        window.isMinimized && "border-white/8 bg-white/[0.02] text-slate-400"
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            isActive ? "bg-cyan-300" : window.isMinimized ? "bg-slate-500" : "bg-slate-400"
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
          "pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/72 px-3 py-2 backdrop-blur-xl shadow-xl shadow-black/15",
          isMobile && "gap-2 px-2.5 py-2"
        )}
      >
        <div className="shrink-0 px-1">
          <p className="truncate text-[11px] font-medium tracking-[0.22em] text-cyan-200/85">
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
            <div className="flex items-center px-2 text-[11px] uppercase tracking-[0.24em] text-slate-500">
              No windows open
            </div>
          )}
        </div>
        <div className="hidden shrink-0 items-center gap-3 pl-1 md:flex">
          <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
            {isMobile ? "mobile" : "desktop"}
          </span>
          <span className="font-mono text-xs text-slate-300">{now}</span>
        </div>
      </div>
    </div>
  );
}
