import type { AppDefinition } from "@/shared/types/app";

import { ContactApp } from "./index";
import { contactAppStyles } from "./styles";

export const contactAppDefinition: AppDefinition = {
  id: "contact",
  title: "Contato",
  component: ContactApp,
  defaultSize: {
    width: 620,
    height: 420,
  },
  defaultPosition: {
    x: 236,
    y: 108,
  },
  isolation: "shadow",
  mobileMode: "sheet",
  isolatedStyleText: contactAppStyles,
};
