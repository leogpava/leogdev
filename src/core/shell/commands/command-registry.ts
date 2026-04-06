import { appDefinitions } from "@/apps/registry";
import { SHELL_VIRTUAL_PATH } from "@/core/shell/constants/prompt";
import type { CommandHandler } from "@/core/shell/types/terminal";
import { resolveOpenCommand } from "@/core/shell/utils/open-navigation-pt";
import { formatShellDate } from "@/core/shell/utils/format-shell-date";
import type { AppId } from "@/shared/types/app";

const formatCommandList = (commands: CommandHandler[]) =>
  commands
    .map(
      (command) =>
        `${command.name.padEnd(10, " ")} ${command.usage.padEnd(18, " ")} ${command.description}`
    )
    .join("\n");

const formatAppList = () =>
  appDefinitions.map((app) => `${`${app.id}/`.padEnd(16, " ")} ${app.title}`).join("\n");

const helpCommand: CommandHandler = {
  name: "help",
  description: "Lista os comandos disponíveis.",
  usage: "help",
  execute: () => ({
    entries: [
      {
        type: "info",
        content: "Comandos disponíveis",
      },
      {
        type: "output",
        content: formatCommandList(commandRegistry),
      },
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
  description: "Lista os módulos disponíveis no sistema.",
  usage: "ls",
  execute: () => ({
    entries: [
      {
        type: "info",
        content: "Módulos disponíveis",
      },
      {
        type: "output",
        content: formatAppList(),
      },
    ],
  }),
};

const openCommand: CommandHandler = {
  name: "open",
  description: "Abre uma aplicação em uma janela flutuante.",
  usage: "open <app> [target]",
  execute: (args, context) => {
    const resolution = resolveOpenCommand(args);

    if (!resolution.ok) {
      return {
        entries: [
          {
            type: "error",
            content: resolution.error,
          },
        ],
      };
    }

    const appExists = context.apps.some((app) => app.id === resolution.appId);

    if (!appExists) {
      return {
        entries: [
          {
            type: "error",
            content: `Aplicação não encontrada: ${resolution.appId}\nUse "ls" para ver as opções.`,
          },
        ],
      };
    }

    context.openWindow(resolution.appId as AppId, {
      props: resolution.props,
      loadingMessages: resolution.loadingMessages,
      loadingDurationMs: resolution.loadingDurationMs,
    });

    return {
      entries: resolution.output.slice(0, 1).map((content) => ({
        type: "info" as const,
        content,
      })),
      scheduledEntries: resolution.output.slice(1).map((content, index) => ({
        delay: 90 + index * 120,
        entry: {
          type: "output" as const,
          content,
        },
      })),
    };
  },
};

const whoAmICommand: CommandHandler = {
  name: "whoami",
  description: "Mostra uma breve apresentação profissional.",
  usage: "whoami",
  execute: () => ({
    entries: [
      {
        type: "output",
        content:
          "Leonardo Pavanelli\nConsultor SAP Integration com foco em integrações enterprise, arquitetura e interfaces críticas.",
      },
    ],
  }),
};

const pwdCommand: CommandHandler = {
  name: "pwd",
  description: "Mostra o caminho virtual atual.",
  usage: "pwd",
  execute: () => ({
    entries: [
      {
        type: "output",
        content: SHELL_VIRTUAL_PATH,
      },
    ],
  }),
};

const dateCommand: CommandHandler = {
  name: "date",
  description: "Mostra a data e hora atuais do cliente.",
  usage: "date",
  execute: (_, context) => ({
    entries: [
      {
        type: "output",
        content: formatShellDate(context.getCurrentDate()),
      },
    ],
  }),
};

export const commandRegistry: CommandHandler[] = [
  helpCommand,
  clearCommand,
  listCommand,
  openCommand,
  whoAmICommand,
  pwdCommand,
  dateCommand,
];
