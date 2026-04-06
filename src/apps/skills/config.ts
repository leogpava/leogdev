import type { AppDefinition } from "@/shared/types/app";

import { SkillsApp } from "./index";

export const skillsAppDefinition: AppDefinition = {
  id: "skills",
  title: "Competências",
  component: SkillsApp,
  defaultSize: {
    width: 760,
    height: 500,
  },
  defaultPosition: {
    x: 188,
    y: 124,
  },
  isolation: "none",
  mobileMode: "sheet",
};
