import type { AppDefinition } from "@/shared/types/app";

import { AutomacoesApp } from "./index";

export const automacoesAppDefinition: AppDefinition = {
  id: "automacoes",
  title: "Automações",
  component: AutomacoesApp,
  defaultSize: {
    width: 720,
    height: 480,
  },
  defaultPosition: {
    x: 176,
    y: 136,
  },
  isolation: "none",
  mobileMode: "sheet",
};
