import {
  DESKTOP_WINDOW_PADDING,
  TASKBAR_HEIGHT,
} from "@/shared/constants/ui";

export type ViewportBounds = {
  width: number;
  height: number;
  padding: number;
  taskbarHeight: number;
};

export function getViewportBounds(): ViewportBounds {
  if (typeof window === "undefined") {
    return {
      width: 1440,
      height: 900,
      padding: DESKTOP_WINDOW_PADDING,
      taskbarHeight: TASKBAR_HEIGHT,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
    padding: DESKTOP_WINDOW_PADDING,
    taskbarHeight: TASKBAR_HEIGHT,
  };
}
