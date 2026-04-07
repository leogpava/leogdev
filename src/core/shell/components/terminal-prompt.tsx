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
      <span className="text-[#79b8ff]">leonardo</span>
      <span className="text-[#727272]">@</span>
      <span className="text-[#e0e0e0]">portfolio</span>
      <span className="text-[#888888]">:~</span>
      <span className="text-[#ffab70]">$</span>
    </span>
  );
}
