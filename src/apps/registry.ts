import { aboutAppDefinition } from "@/apps/about/config";
import { automacoesAppDefinition } from "@/apps/automacoes/config";
import { contactAppDefinition } from "@/apps/contact/config";
import { projectsAppDefinition } from "@/apps/projects/config";
import { sapAppDefinition } from "@/apps/sap/config";
import { skillsAppDefinition } from "@/apps/skills/config";
import type { AppDefinition, AppId } from "@/shared/types/app";

export const appRegistry: Record<AppId, AppDefinition> = {
  sap: sapAppDefinition,
  projects: projectsAppDefinition,
  automacoes: automacoesAppDefinition,
  about: aboutAppDefinition,
  skills: skillsAppDefinition,
  contact: contactAppDefinition,
};

export const appDefinitions = Object.values(appRegistry);
