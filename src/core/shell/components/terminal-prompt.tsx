import { cn } from "@/shared/utils/cn";

type TerminalPromptProps = {
  className?: string;
};

export function TerminalPrompt({ className }: TerminalPromptProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-0.5 font-mono text-sm",
        className
      )}
    >
      <span className="text-emerald-300">leonardo</span>
      <span className="text-slate-500">@</span>
      <span className="text-cyan-300">portfolio</span>
      <span className="text-slate-500">:~</span>
      <span className="text-amber-300">$</span>
    </span>
  );
}
