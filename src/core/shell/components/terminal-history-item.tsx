import type { TerminalHistoryEntry } from "@/core/shell/types/terminal";
import { cn } from "@/shared/utils/cn";

import { TerminalPrompt } from "./terminal-prompt";

type TerminalHistoryItemProps = {
  entry: TerminalHistoryEntry;
};

const containerStyles = {
  command: "text-slate-100",
  output: "border-l border-white/10 pl-4 text-slate-300",
  error: "border-l border-rose-400/40 bg-rose-400/5 pl-4 text-rose-200",
  info: "border-l border-cyan-400/30 pl-4 text-cyan-200/90",
} as const;

export function TerminalHistoryItem({ entry }: TerminalHistoryItemProps) {
  if (entry.type === "command") {
    return (
      <div className="animate-[terminal-entry_220ms_ease-out_both] flex items-start gap-3 whitespace-pre-wrap break-words">
        <TerminalPrompt className="pt-0.5" />
        <span className="min-w-0 flex-1 font-mono text-sm text-slate-100">
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
