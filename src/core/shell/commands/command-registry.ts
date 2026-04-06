import { appDefinitions } from "@/apps/registry";
import { SHELL_VIRTUAL_PATH } from "@/core/shell/constants/prompt";
import type { CommandHandler } from "@/core/shell/types/terminal";
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
  appDefinitions
    .map((app) => `${`${app.id}/`.padEnd(16, " ")} ${app.title}`)
    .join("\n");

const helpCommand: CommandHandler = {
  name: "help",
  description: "Lista os comandos disponiveis.",
  usage: "help",
  execute: () => ({
    entries: [
      {
        type: "info",
        content: "Available commands",
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
  description: "Limpa o historico visivel do terminal.",
  usage: "clear",
  aliases: ["cls"],
  execute: () => ({
    clearHistory: true,
  }),
};

const listCommand: CommandHandler = {
  name: "ls",
  description: "Lista os modulos disponiveis no sistema.",
  usage: "ls",
  execute: () => ({
    entries: [
      {
        type: "info",
        content: "Available modules",
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
  description: "Abre uma aplicacao em uma janela flutuante.",
  usage: "open <app>",
  execute: (args, context) => {
    const [requestedAppId] = args;

    if (!requestedAppId) {
      return {
        entries: [
          {
            type: "error",
            content: 'usage: open <app>\nUse "ls" para ver os modulos disponiveis.',
          },
        ],
      };
    }

    const normalizedAppId = requestedAppId.toLowerCase() as AppId;
    const appExists = context.apps.some((app) => app.id === normalizedAppId);

    if (!appExists) {
      return {
        entries: [
          {
            type: "error",
            content: `app not found: ${requestedAppId}\nUse "ls" para ver as opcoes.`,
          },
        ],
      };
    }

    context.openWindow(normalizedAppId);

    return {
      entries: [
        {
          type: "info",
          content: `Opening ${normalizedAppId}...`,
        },
      ],
    };
  },
};

const whoAmICommand: CommandHandler = {
  name: "whoami",
  description: "Mostra uma breve apresentacao profissional.",
  usage: "whoami",
  execute: () => ({
    entries: [
      {
        type: "output",
        content:
          "Leonardo\nSenior Front-end Engineer building polished interfaces, systems thinking, and product-grade web experiences.",
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
