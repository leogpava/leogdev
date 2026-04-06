import { appDefinitions } from "@/apps/registry";
import type { CommandHandler } from "@/core/shell/types/terminal";
import type { AppId } from "@/shared/types/app";

const helpCommand: CommandHandler = {
  name: "help",
  description: "Lista os comandos disponíveis.",
  usage: "help",
  execute: () => ({
    lines: [
      { content: "Comandos disponíveis:", variant: "system" },
      ...commandRegistry.map((command) => ({
        content: `${command.usage.padEnd(18, " ")} ${command.description}`,
        variant: "output" as const,
      })),
    ],
  }),
};

const clearCommand: CommandHandler = {
  name: "clear",
  description: "Limpa o histórico visível do terminal.",
  usage: "clear",
  aliases: ["cls"],
  execute: () => ({
    clearHistory: true,
  }),
};

const listCommand: CommandHandler = {
  name: "ls",
  description: "Lista os aplicativos disponíveis no sistema.",
  usage: "ls",
  execute: () => ({
    lines: [
      { content: "Aplicativos disponíveis:", variant: "system" },
      ...appDefinitions.map((app) => ({
        content: `${app.id.padEnd(14, " ")} ${app.title}`,
        variant: "output" as const,
      })),
    ],
  }),
};

const openCommand: CommandHandler = {
  name: "open",
  description: "Abre uma aplicação em uma janela flutuante.",
  usage: "open <app>",
  execute: (args, context) => {
    const [requestedAppId] = args;

    if (!requestedAppId) {
      return {
        lines: [
          {
            content: "Informe qual app abrir. Exemplo: open sap",
            variant: "error",
          },
        ],
      };
    }

    const normalizedAppId = requestedAppId.toLowerCase() as AppId;
    const appExists = context.apps.some((app) => app.id === normalizedAppId);

    if (!appExists) {
      return {
        lines: [
          {
            content: `App "${requestedAppId}" não encontrado. Use "ls" para ver as opções.`,
            variant: "error",
          },
        ],
      };
    }

    context.openWindow(normalizedAppId);

    return {
      lines: [
        {
          content: `Abrindo ${normalizedAppId}...`,
          variant: "system",
        },
      ],
    };
  },
};

export { commandRegistry } from "./command-registry";
