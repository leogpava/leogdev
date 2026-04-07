import type { TerminalHistoryEntry } from "@/core/shell/types/terminal";
import { cn } from "@/shared/utils/cn";

import { TerminalPrompt } from "./terminal-prompt";

type TerminalHistoryItemProps = {
  entry: TerminalHistoryEntry;
};

const containerStyles = {
  command: "text-[#fafafa]",
  output: "border-l border-[#313131] pl-4 text-[#e0e0e0]",
  error: "border-l border-[#f97583]/35 bg-[#f97583]/8 pl-4 text-[#ffb8bf]",
  info: "border-l border-[#79b8ff]/25 bg-[#79b8ff]/6 pl-4 text-[#c8ddff]",
} as const;

export function TerminalHistoryItem({ entry }: TerminalHistoryItemProps) {
  if (entry.type === "command") {
    return (
      <div className="animate-[terminal-entry_220ms_ease-out_both] flex items-start gap-3 whitespace-pre-wrap break-words">
        <TerminalPrompt className="pt-0.5" />
        <span className="min-w-0 flex-1 font-mono text-sm text-[#fafafa]">
          {entry.content}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "animate-[terminal-entry_220ms_ease-out_both] whitespace-pre-wrap rounded-xl py-0.5 font-mono text-sm leading-7 break-words",
        containerStyles[entry.type]
      )}
    >
      {entry.content}
    </div>
  );
}
