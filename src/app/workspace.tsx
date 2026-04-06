"use client";

import { TerminalShell } from "@/core/shell/components/terminal-shell";
import { useWindowManager } from "@/core/window-manager/store/use-window-manager";
import { WindowLayer } from "@/core/window-manager/components/window-layer";
import { useIsMobile } from "@/shared/hooks/use-is-mobile";
import { cn } from "@/shared/utils/cn";

export function Workspace() {
  const activeWindowId = useWindowManager((state) => state.activeWindowId);
  const isMobile = useIsMobile();

  const shouldHideTerminal = isMobile && Boolean(activeWindowId);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <div
        className={cn(
          "transition-opacity duration-200",
          shouldHideTerminal ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <TerminalShell />
      </div>
      <WindowLayer />
    </main>
  );
}
