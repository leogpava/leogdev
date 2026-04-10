import type { AppDefinition } from "@/shared/types/app";

import { SkillsApp } from "./index";

export const skillsAppDefinition: AppDefinition = {
  id: "skills",
  title: "Skills",
  component: SkillsApp,
  defaultSize: {
    width: 1180,
    height: 760,
  },
  defaultPosition: {
    x: 120,
    y: 72,
  },
  isolation: "none",
  mobileMode: "sheet",
};
