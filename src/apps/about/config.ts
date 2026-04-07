import type { AppDefinition } from "@/shared/types/app";

import { AboutApp } from "./index";
import { aboutAppStyles } from "./styles";

export const aboutAppDefinition: AppDefinition = {
  id: "about",
  title: "Sobre",
  component: AboutApp,
  defaultSize: {
    width: 760,
    height: 560,
  },
  defaultPosition: {
    x: 180,
    y: 72,
  },
  isolation: "shadow",
  mobileMode: "sheet",
  isolatedStyleText: aboutAppStyles,
};
