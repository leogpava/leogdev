import type { AppDefinition, AppId } from "@/shared/types/app";

export type TerminalEntryType = "command" | "output" | "error" | "info";

export type TerminalHistoryEntry = {
  id: string;
  type: TerminalEntryType;
  content: string;
  timestamp?: number;
};

export type TerminalEntryDraft = Omit<TerminalHistoryEntry, "id">;

export type CommandExecutionResult = {
  entries?: TerminalEntryDraft[];
  clearHistory?: boolean;
};

export type CommandContext = {
  apps: AppDefinition[];
  openWindow: (appId: AppId) => void;
  getCurrentDate: () => Date;
};

export type CommandHandler = {
  name: string;
  description: string;
  usage: string;
  aliases?: string[];
  execute: (
    args: string[],
    context: CommandContext
  ) => CommandExecutionResult;
};

export type ParsedCommand = {
  commandName: string;
  args: string[];
};
