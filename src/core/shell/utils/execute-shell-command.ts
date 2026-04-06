import { commandRegistry } from "@/core/shell/commands/command-registry";
import { parseCommand, resolveCommand } from "@/core/shell/parser/resolve-command";
import type {
  CommandContext,
  CommandExecutionResult,
} from "@/core/shell/types/terminal";
import type { AppId } from "@/shared/types/app";

export function executeShellCommand(
  rawInput: string,
  context: CommandContext
): CommandExecutionResult {
  const parsedCommand = parseCommand(rawInput);

  if (!parsedCommand) {
    return { entries: [] };
  }

  const isDirectAppLaunch = context.apps.some(
    (app) => app.id === (parsedCommand.commandName as AppId)
  );
  const effectiveCommandName = isDirectAppLaunch ? "open" : parsedCommand.commandName;
  const effectiveArgs = isDirectAppLaunch
    ? [parsedCommand.commandName, ...parsedCommand.args]
    : parsedCommand.args;
  const command = resolveCommand(effectiveCommandName, commandRegistry);

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

  return command.execute(effectiveArgs, context);
}
