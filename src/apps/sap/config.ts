import type { AppDefinition } from "@/shared/types/app";

import { SapApp } from "./index";
import { sapAppStyles } from "./styles";

export const sapAppDefinition: AppDefinition = {
  id: "sap",
  title: "SAP Experience",
  component: SapApp,
  defaultSize: {
    width: 780,
    height: 520,
  },
  defaultPosition: {
    x: 96,
    y: 72,
  },
  isolation: "shadow",
  mobileMode: "fullscreen",
  isolatedStyleText: sapAppStyles,
};
