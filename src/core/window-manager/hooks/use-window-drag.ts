"use client";

import { useRef } from "react";

import { clampWindowPosition } from "@/core/window-manager/utils/window-bounds";
import { getViewportBounds } from "@/core/window-manager/utils/viewport";
import type { WindowInstance } from "@/shared/types/app";

type UseWindowDragOptions = {
  isMobile: boolean;
  window: WindowInstance;
  onFocus: () => void;
  onMove: (position: WindowInstance["position"]) => void;
};

export function useWindowDrag({
  isMobile,
  window,
  onFocus,
  onMove,
}: UseWindowDragOptions) {
  const dragStateRef = useRef<{
    pointerId: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile || window.isMaximized) {
      return;
    }

    dragStateRef.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - window.position.x,
      offsetY: event.clientY - window.position.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    onFocus();
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;

    if (!dragState || dragState.pointerId !== event.pointerId || isMobile || window.isMaximized) {
      return;
    }

    const viewport = getViewportBounds();
    const nextPosition = clampWindowPosition(
      {
        x: event.clientX - dragState.offsetX,
        y: event.clientY - dragState.offsetY,
      },
      window.size,
      viewport
    );

    onMove(nextPosition);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;

    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    dragStateRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
}
