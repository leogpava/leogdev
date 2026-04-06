import { appDefinitions } from "@/apps/registry";
import { commandRegistry } from "@/core/shell/commands/command-registry";
import { tokenizeInput } from "@/core/shell/parser/tokenize-input";

import { getOpenSuggestions } from "./open-navigation";

const topLevelTargets = Array.from(
  new Set([
    ...commandRegistry.flatMap((command) => [command.name, ...(command.aliases ?? [])]),
    ...appDefinitions.map((app) => app.id),
  ])
).sort();

export type AutocompleteResult = {
  matches: string[];
  nextValue: string | null;
  showSuggestions: boolean;
};

const getTrailingWhitespace = (value: string) => /\s$/.test(value);

export function getShellSuggestions(rawInput: string): AutocompleteResult {
  const hasTrailingWhitespace = getTrailingWhitespace(rawInput);
  const tokens = tokenizeInput(rawInput);

  if (tokens.length === 0) {
    return {
      matches: topLevelTargets,
      nextValue: null,
      showSuggestions: true,
    };
  }

  if (tokens.length === 1 && !hasTrailingWhitespace) {
    const partial = tokens[0].toLowerCase();
    const matches = topLevelTargets.filter((target) => target.startsWith(partial));

    return {
      matches,
      nextValue: matches.length === 1 ? `${matches[0]} ` : null,
      showSuggestions: matches.length > 1,
    };
  }

  const [commandName, ...args] = tokens;

  if (commandName.toLowerCase() !== "open") {
    return {
      matches: [],
      nextValue: null,
      showSuggestions: false,
    };
  }

  const suggestionArgs = hasTrailingWhitespace ? [...args, ""] : args;
  const matches = getOpenSuggestions(suggestionArgs);
  const tokenIndex = tokens.length - 1;
  const activeToken = hasTrailingWhitespace ? "" : tokens[tokenIndex] ?? "";

  if (matches.length !== 1) {
    return {
      matches,
      nextValue: null,
      showSuggestions: matches.length > 1,
    };
  }

  const completedToken = matches[0];
  const nextTokens = hasTrailingWhitespace
    ? [...tokens, completedToken]
    : [...tokens.slice(0, tokenIndex), completedToken];

  const suffix =
    nextTokens.length >= 2 && nextTokens[1] !== undefined && nextTokens.length > 2 ? "" : "";

  return {
    matches,
    nextValue:
      activeToken === completedToken && !hasTrailingWhitespace
        ? null
        : `${nextTokens.join(" ")}${suffix} `,
    showSuggestions: false,
  };
}
