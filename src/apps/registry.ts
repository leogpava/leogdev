import { aboutAppDefinition } from "@/apps/about/config";
import { automacoesAppDefinition } from "@/apps/automacoes/config";
import { projetosAppDefinition } from "@/apps/projetos/config";
import { sapAppDefinition } from "@/apps/sap/config";
import type { AppDefinition, AppId } from "@/shared/types/app";

export const appRegistry: Record<AppId, AppDefinition> = {
  sap: sapAppDefinition,
  projetos: projetosAppDefinition,
  automacoes: automacoesAppDefinition,
  about: aboutAppDefinition,
};

export const appDefinitions = Object.values(appRegistry);
