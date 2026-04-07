import type { AppDefinition } from "@/shared/types/app";

import { ProjectsApp } from "./index";

export const projectsAppDefinition: AppDefinition = {
  id: "projects",
  title: "Project Lab",
  component: ProjectsApp,
  defaultSize: {
    width: 1120,
    height: 720,
  },
  defaultPosition: {
    x: 96,
    y: 72,
  },
  isolation: "none",
  mobileMode: "fullscreen",
};
