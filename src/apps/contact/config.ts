import type { AppDefinition } from "@/shared/types/app";

import { ContactApp } from "./index";

export const contactAppDefinition: AppDefinition = {
  id: "contact",
  title: "Contact",
  component: ContactApp,
  defaultSize: {
    width: 620,
    height: 420,
  },
  defaultPosition: {
    x: 236,
    y: 108,
  },
  isolation: "none",
  mobileMode: "sheet",
};
