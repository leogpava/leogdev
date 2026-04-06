import type { AppDefinition } from "@/shared/types/app";

import { ProjetosApp } from "./index";

export const projetosAppDefinition: AppDefinition = {
  id: "projetos",
  title: "Projetos",
  component: ProjetosApp,
  defaultSize: {
    width: 760,
    height: 500,
  },
  defaultPosition: {
    x: 148,
    y: 104,
  },
  isolation: "none",
  mobileMode: "fullscreen",
};
