"use client";

import type { MouseEvent, PointerEvent } from "react";

import { cn } from "@/shared/utils/cn";

type WindowHeaderProps = {
  title: string;
  subtitle?: string;
  isActive: boolean;
  isMaximized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onPointerDown?: (event: PointerEvent<HTMLDivElement>) => void;
  onPointerMove?: (event: PointerEvent<HTMLDivElement>) => void;
  onPointerUp?: (event: PointerEvent<HTMLDivElement>) => void;
};

export function WindowHeader({
  title,
  subtitle,
  isActive,
  isMaximized,
  onClose,
  onMinimize,
  onMaximize,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: WindowHeaderProps) {
  const stopEvent = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const stopPointerEvent = (event: PointerEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className={cn(
        "flex items-center justify-between border-b px-4 py-3 transition-colors duration-150",
        isActive
          ? "border-white/20 bg-slate-950/90"
          : "border-white/10 bg-slate-950/80"
      )}
    >
      <div className="min-w-0">
        <p
          className={cn(
            "truncate text-sm font-medium transition-colors",
            isActive ? "text-slate-100" : "text-slate-300"
          )}
        >
          {title}
        </p>
        {subtitle ? (
          <p
            className={cn(
              "truncate text-xs uppercase tracking-[0.28em] transition-colors",
              isActive ? "text-slate-400" : "text-slate-500"
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      <div className="ml-4 flex items-center gap-2">
        <button
          type="button"
          onPointerDown={stopPointerEvent}
          onClick={(event) => {
            stopEvent(event);
            onMinimize();
          }}
          className="h-3 w-3 rounded-full bg-sky-300/90 transition hover:scale-110"
          aria-label="Minimizar janela"
        />
        <button
          type="button"
          onPointerDown={stopPointerEvent}
          onClick={(event) => {
            stopEvent(event);
            onMaximize();
          }}
          className="h-3 w-3 rounded-full bg-amber-300 transition hover:scale-110"
          aria-label={isMaximized ? "Restaurar janela" : "Maximizar janela"}
        />
        <button
          type="button"
          onPointerDown={stopPointerEvent}
          onClick={(event) => {
            stopEvent(event);
            onClose();
          }}
          className="h-3 w-3 rounded-full bg-rose-400 transition hover:scale-110"
          aria-label="Fechar janela"
        />
      </div>
    </div>
  );
}
