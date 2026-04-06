import { commandRegistry } from "@/core/shell/commands/command-registry";
import { parseCommand, resolveCommand } from "@/core/shell/parser/resolve-command";
import type {
  CommandContext,
  CommandExecutionResult,
} from "@/core/shell/types/terminal";

export function executeShellCommand(
  rawInput: string,
  context: CommandContext
): CommandExecutionResult {
  const parsedCommand = parseCommand(rawInput);

  if (!parsedCommand) {
    return { entries: [] };
  }

  const command = resolveCommand(parsedCommand.commandName, commandRegistry);

  if (!command) {
    return {
      entries: [
        {
          type: "error",
          content: `command not found: ${parsedCommand.commandName}\nUse "help" para listar os comandos.`,
        },
      ],
    };
  }

  return command.execute(parsedCommand.args, context);
}
