"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { appDefinitions } from "@/apps/registry";
import { commandRegistry } from "@/core/shell/commands/registry";
import { parseCommand, resolveCommand } from "@/core/shell/parser/resolve-command";
import { useTerminalStore } from "@/core/shell/store/use-terminal-store";
import { useWindowManager } from "@/core/window-manager/store/use-window-manager";
import { cn } from "@/shared/utils/cn";

const INITIAL_LINES = [
  "Leo Dev Web OS v0.1",
  'Digite "help" para listar os comandos.',
];

const lineStyles = {
  input: "text-[#79b8ff]",
  output: "text-[#e0e0e0]",
  error: "text-[#f97583]",
  system: "text-[#b392f0]",
} as const;

export { TerminalShell as Terminal } from "./terminal-shell";

  useEffect(() => {
    if (history.length === 0) {
      seedHistory(
        INITIAL_LINES.map((content, index) => ({
          id: `initial-${index}`,
          content,
          variant: index === 0 ? "system" : "output",
          createdAt: Date.now() + index,
        }))
      );
    }
  }, [history.length, seedHistory]);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ block: "end" });
  }, [history]);

  const commandContext = useMemo(
    () => ({
      apps: appDefinitions,
      openWindow,
    }),
    [openWindow]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rawInput = input.trim();

    if (!rawInput) {
      return;
    }

    pushLine(`guest@leodev:~$ ${rawInput}`, "input");
    setInput("");

    const parsedCommand = parseCommand(rawInput);

    if (!parsedCommand) {
      return;
    }

    const command = resolveCommand(parsedCommand.commandName, commandRegistry);

    if (!command) {
      pushLine(
        `Comando "${parsedCommand.commandName}" não reconhecido. Digite "help".`,
        "error"
      );
      return;
    }

    const result = command.execute(parsedCommand.args, commandContext);

    if (result.clearHistory) {
      clearHistory();
      return;
    }

    result.lines?.forEach((line) => {
      pushLine(line.content, line.variant ?? "output");
    });
  };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#161616] text-[#fafafa]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(179,146,240,0.08),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(121,184,255,0.05),_transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(250,250,250,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(250,250,250,0.035)_1px,transparent_1px)] [background-size:3rem_3rem]" />

      <div className="relative z-10 flex flex-1 flex-col p-4 md:p-6">
        <header className="mb-4 flex items-center justify-between rounded-3xl border border-[#313131] bg-[#1a1a1a]/88 px-4 py-3 backdrop-blur-md">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#888888]">
              Web OS
            </p>
            <h1 className="mt-1 text-lg font-semibold text-[#fafafa] md:text-xl">
              Terminal Interface
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#f97583]" />
            <span className="h-3 w-3 rounded-full bg-[#ffab70]" />
            <span className="h-3 w-3 rounded-full bg-[#79b8ff]" />
          </div>
        </header>

        <div className="flex flex-1 flex-col rounded-[2rem] border border-[#313131] bg-[#1a1a1a]/90 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="border-b border-[#313131] px-4 py-3 text-xs uppercase tracking-[0.32em] text-[#888888]">
            root session
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 font-mono text-sm leading-7">
            {history.map((entry) => (
              <div key={entry.id} className={cn("whitespace-pre-wrap", lineStyles[entry.variant])}>
                {entry.content}
              </div>
            ))}
            <div ref={scrollAnchorRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-[#313131] px-4 py-4"
          >
            <label className="flex items-center gap-3 font-mono text-sm text-[#79b8ff]">
              <span className="shrink-0">guest@leodev:~$</span>
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-[#fafafa] outline-none placeholder:text-[#727272]"
                placeholder="Digite um comando"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
              />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
