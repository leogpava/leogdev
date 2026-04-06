"use client";

import { useIsMobile } from "@/shared/hooks/use-is-mobile";

import { useWindowManager } from "../store/use-window-manager";
import { WindowFrame } from "./window-frame";
import { WindowTaskbar } from "./window-taskbar";

export function WindowLayer() {
  const windows = useWindowManager((state) => state.windows);
  const isMobile = useIsMobile();

  const renderedWindows = windows
    .filter((window) => window.isOpen)
    .slice()
    .sort((left, right) => left.zIndex - right.zIndex);

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {renderedWindows.map((window) => (
        <div key={window.id} className="pointer-events-auto">
          <WindowFrame window={window} isMobile={isMobile} />
        </div>
      ))}
      <WindowTaskbar isMobile={isMobile} />
    </div>
  );
}
