import type { AppDefinition } from "@/shared/types/app";

import { ProjectsApp } from "./index";

export const projectsAppDefinition: AppDefinition = {
  id: "projects",
  title: "Projetos",
  component: ProjectsApp,
  defaultSize: {
    width: 820,
    height: 540,
  },
  defaultPosition: {
    x: 148,
    y: 104,
  },
  isolation: "none",
  mobileMode: "fullscreen",
};
