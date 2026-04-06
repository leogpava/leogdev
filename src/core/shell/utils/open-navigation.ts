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
      error: 'usage: open <app> [target]\nUse "ls" para ver os modulos disponiveis.',
    };
  }

  const appId = normalizeSlug(appArg) as AppId;

  if (appId === "projects") {
    const projectId = targetArg ? projectAliases.get(normalizeSlug(targetArg)) : undefined;

    if (targetArg && !projectId) {
      return {
        ok: false,
        error: `project not found: ${targetArg}\nDisponiveis: ${personalProjects
          .map((project) => project.id)
          .join(", ")}`,
      };
    }

    return {
      ok: true,
      appId,
      props: projectId ? { projectId } : undefined,
      output: [
        `Opening ${appId}${projectId ? `/${projectId}` : ""}...`,
        ...(projectId ? [`Loading project ${projectId}...`] : []),
      ],
      loadingMessages: projectId
        ? ["Opening projects...", `Loading ${projectId}...`]
        : ["Opening projects..."],
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
        error: `sap target not found: ${targetArg}\nDisponiveis: americanas, assai, datadog, overview, experience, projects, stack, architecture`,
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
        "Opening sap...",
        ...(projectId
          ? [`Loading ${projectTitle}...`]
          : sectionId
            ? [`Loading ${sectionId}...`]
            : ["Loading modules..."]),
      ],
      loadingMessages: [
        "Opening sap...",
        projectId ? `Loading ${projectTitle}...` : "Loading modules...",
      ],
      loadingDurationMs: 760,
    };
  }

  return {
    ok: true,
    appId,
    output: [`Opening ${appId}...`],
    loadingMessages: ["Opening module..."],
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
