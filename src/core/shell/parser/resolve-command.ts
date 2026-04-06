import type { CommandHandler, ParsedCommand } from "@/core/shell/types/terminal";

import { tokenizeInput } from "./tokenize-input";

export function parseCommand(input: string): ParsedCommand | null {
  const tokens = tokenizeInput(input);

  if (tokens.length === 0) {
    return null;
  }

  const [commandName, ...args] = tokens;

  return {
    commandName: commandName.toLowerCase(),
    args,
  };
}

export function resolveCommand(
  commandName: string,
  commands: CommandHandler[]
): CommandHandler | null {
  const normalizedCommandName = commandName.toLowerCase();

  return (
    commands.find(
      (command) =>
        command.name === normalizedCommandName ||
        command.aliases?.includes(normalizedCommandName)
    ) ?? null
  );
}
