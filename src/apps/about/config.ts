import type { AppDefinition } from "@/shared/types/app";

import { AboutApp } from "./index";

export const aboutAppDefinition: AppDefinition = {
  id: "about",
  title: "Sobre",
  component: AboutApp,
  defaultSize: {
    width: 640,
    height: 440,
  },
  defaultPosition: {
    x: 212,
    y: 88,
  },
  isolation: "none",
  mobileMode: "sheet",
};
