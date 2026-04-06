import { personalProjects } from "@/shared/data/projects";
import { sapProjects, sapSections, type SapSectionId } from "@/shared/data/sap";
import type { AppId } from "@/shared/types/app";

const projectAliases = new Map(
  personalProjects.flatMap((project) => [
    [project.id, project.id],
    [project.title.toLowerCase(), project.id],
  ])
);

const sapProjectAliases = new Map<string, string>([
  ["americanas", "americanas-ibm"],
  ["ibm", "americanas-ibm"],
  ["americanas-ibm", "americanas-ibm"],
  ["assai", "assai-atacadista"],
  ["assaí", "assai-atacadista"],
  ["assai-atacadista", "assai-atacadista"],
  ["datadog", "datadog-observability"],
  ["observabilidade", "datadog-observability"],
  ["monitoramento", "datadog-observability"],
]);

const sapSectionAliases = new Map<string, SapSectionId>(
  sapSections.flatMap((section) => [
    [section.id, section.id],
    [section.label.toLowerCase(), section.id],
  ])
);

export type OpenCommandResolution =
  | {
      ok: true;
      appId: AppId;
      props?: Record<string, unknown>;
      output: string[];
      loadingMessages?: string[];
      loadingDurationMs?: number;
    }
  | {
      ok: false;
      error: string;
    };

const normalizeSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function resolveOpenCommand(args: string[]): OpenCommandResolution {
  const [appArg, targetArg] = args;

  if (!appArg) {
    return {
      ok: false,
      error: 'Uso: open <app> [target]\nUse "ls" para ver os módulos disponíveis.',
    };
  }

  const appId = normalizeSlug(appArg) as AppId;

  if (appId === "projects") {
    const projectId = targetArg ? projectAliases.get(normalizeSlug(targetArg)) : undefined;

    if (targetArg && !projectId) {
      return {
        ok: false,
        error: `Projeto não encontrado: ${targetArg}\nDisponíveis: ${personalProjects
          .map((project) => project.id)
          .join(", ")}`,
      };
    }

    return {
      ok: true,
      appId,
      props: projectId ? { projectId } : undefined,
      output: [
        `Abrindo ${appId}${projectId ? `/${projectId}` : ""}...`,
        ...(projectId ? [`Carregando projeto ${projectId}...`] : []),
      ],
      loadingMessages: projectId
        ? ["Abrindo projetos...", `Carregando ${projectId}...`]
        : ["Abrindo projetos..."],
      loadingDurationMs: projectId ? 720 : 420,
    };
  }

  if (appId === "sap") {
    const normalizedTarget = targetArg ? normalizeSlug(targetArg) : undefined;
    const projectId = normalizedTarget ? sapProjectAliases.get(normalizedTarget) : undefined;
    const sectionId = normalizedTarget ? sapSectionAliases.get(normalizedTarget) : undefined;

    if (targetArg && !projectId && !sectionId) {
      return {
        ok: false,
        error:
          "Destino do SAP não encontrado: " +
          `${targetArg}\nDisponíveis: americanas, assaí, datadog, overview, experience, projects, stack, architecture`,
      };
    }

    const projectTitle = projectId
      ? sapProjects.find((project) => project.id === projectId)?.title ?? projectId
      : undefined;

    return {
      ok: true,
      appId,
      props: {
        initialSection: projectId ? "projects" : sectionId ?? "overview",
        ...(projectId ? { projectId } : {}),
      },
      output: [
        "Abrindo SAP...",
        ...(projectId
          ? [`Carregando ${projectTitle}...`]
          : sectionId
            ? [`Carregando ${sectionId}...`]
            : ["Carregando módulos..."]),
      ],
      loadingMessages: [
        "Abrindo SAP...",
        projectId ? `Carregando ${projectTitle}...` : "Carregando módulos...",
      ],
      loadingDurationMs: 760,
    };
  }

  return {
    ok: true,
    appId,
    output: [`Abrindo ${appId}...`],
    loadingMessages: ["Carregando módulo..."],
    loadingDurationMs: 360,
  };
}

export function getOpenSuggestions(args: string[]): string[] {
  if (args.length <= 1) {
    const [partial = ""] = args;
    const normalizedPartial = normalizeSlug(partial);

    return ["sap", "projects", "automacoes", "about", "skills", "contact"].filter((appId) =>
      appId.startsWith(normalizedPartial)
    );
  }

  const [appArg, targetArg = ""] = args;
  const appId = normalizeSlug(appArg);
  const normalizedTarget = normalizeSlug(targetArg);

  if (appId === "projects") {
    return personalProjects
      .map((project) => project.id)
      .filter((projectId) => projectId.startsWith(normalizedTarget));
  }

  if (appId === "sap") {
    return [
      ...sapSections.map((section) => section.id),
      "americanas",
      "assai",
      "datadog",
    ].filter((target) => normalizeSlug(target).startsWith(normalizedTarget));
  }

  return [];
}
