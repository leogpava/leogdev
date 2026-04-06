import {
  DESKTOP_WINDOW_HEADER_HEIGHT,
  DESKTOP_WINDOW_MIN_VISIBLE_WIDTH,
} from "@/shared/constants/ui";
import type { WindowPosition, WindowSize } from "@/shared/types/app";

import type { ViewportBounds } from "./viewport";

export function clampWindowPosition(
  position: WindowPosition,
  size: WindowSize,
  viewport: ViewportBounds
): WindowPosition {
  const minX = -(size.width - DESKTOP_WINDOW_MIN_VISIBLE_WIDTH);
  const maxX = viewport.width - DESKTOP_WINDOW_MIN_VISIBLE_WIDTH;
  const minY = viewport.padding + viewport.taskbarHeight;
  const maxY =
    viewport.height -
    viewport.padding -
    DESKTOP_WINDOW_HEADER_HEIGHT;

  return {
    x: Math.min(Math.max(position.x, minX), maxX),
    y: Math.min(Math.max(position.y, minY), Math.max(minY, maxY)),
  };
}

export function getMaximizedWindowRect(viewport: ViewportBounds) {
  return {
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: Math.max(320, viewport.width),
      height: Math.max(240, viewport.height),
    },
  };
}
