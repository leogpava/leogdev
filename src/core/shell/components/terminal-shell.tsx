"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";

import { appDefinitions } from "@/apps/registry";
import { TerminalHistoryItem } from "@/core/shell/components/terminal-history-item";
import { TerminalPrompt } from "@/core/shell/components/terminal-prompt";
import { SHELL_PROMPT } from "@/core/shell/constants/prompt";
import { getShellSuggestions } from "@/core/shell/utils/get-shell-suggestions";
import { useTerminalStore } from "@/core/shell/store/use-terminal-store";
import { executeShellCommand } from "@/core/shell/utils/execute-shell-command";
import { useWindowManager } from "@/core/window-manager/store/use-window-manager";

export function TerminalShell() {
  const inputValue = useTerminalStore((state) => state.inputValue);
  const history = useTerminalStore((state) => state.history);
  const hasBooted = useTerminalStore((state) => state.hasBooted);
  const setInputValue = useTerminalStore((state) => state.setInputValue);
  const appendEntry = useTerminalStore((state) => state.appendEntry);
  const appendEntries = useTerminalStore((state) => state.appendEntries);
  const clearHistory = useTerminalStore((state) => state.clearHistory);
  const initializeHistory = useTerminalStore((state) => state.initializeHistory);
  const recordCommand = useTerminalStore((state) => state.recordCommand);
  const navigateHistory = useTerminalStore((state) => state.navigateHistory);
  const resetHistoryNavigation = useTerminalStore((state) => state.resetHistoryNavigation);
  const openWindow = useWindowManager((state) => state.openWindow);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const historyViewportRef = useRef<HTMLDivElement | null>(null);
  const promptFormRef = useRef<HTMLFormElement | null>(null);
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);
  const scheduledTimeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    if (!hasBooted) {
      initializeHistory();
    }
  }, [hasBooted, initializeHistory]);

  useEffect(() => {
    if (!hasBooted || history.length > 0) {
      return;
    }

    const bootSequence = [
      {
        delay: 0,
        entry: {
          type: "info" as const,
          content: "Inicializando shell...",
        },
      },
      {
        delay: 120,
        entry: {
          type: "output" as const,
          content: "Leo Dev Web OS v0.3 pronto",
        },
      },
      {
        delay: 240,
        entry: {
          type: "output" as const,
          content: 'Digite "help" para listar os comandos.',
        },
      },
    ];

    scheduledTimeoutsRef.current = bootSequence.map(({ delay, entry }) =>
      window.setTimeout(() => {
        appendEntry(entry);
      }, delay)
    );
  }, [appendEntry, hasBooted, history.length]);

  useEffect(
    () => () => {
      scheduledTimeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      scheduledTimeoutsRef.current = [];
    },
    []
  );

  const scrollToPrompt = useCallback((behavior: ScrollBehavior = "auto") => {
    const viewport = historyViewportRef.current;

    if (viewport) {
      viewport.scrollTo({
        top: viewport.scrollHeight,
        behavior,
      });
    }

    promptFormRef.current?.scrollIntoView({
      block: "end",
      behavior,
    });
  }, []);

  const focusInput = useCallback((behavior: ScrollBehavior = "auto") => {
    requestAnimationFrame(() => {
      scrollToPrompt(behavior);
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior,
      });
    });
  }, [scrollToPrompt]);

  useLayoutEffect(() => {
    scrollToPrompt("auto");
  }, [history, scrollToPrompt]);

  useEffect(() => {
    focusInput("auto");
  }, []);

  const commandContext = useMemo(
    () => ({
      apps: appDefinitions,
      openWindow,
      getCurrentDate: () => new Date(),
    }),
    [openWindow]
  );

  const handleShellPointerDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (event.target.closest("button, a, input, textarea, select")) {
      return;
    }

    focusInput("auto");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rawInput = inputValue.trim();

    if (!rawInput) {
      focusInput("auto");
      return;
    }

    appendEntry({
      type: "command",
      content: rawInput,
    });
    recordCommand(rawInput);
    setInputValue("");

    const result = executeShellCommand(rawInput, commandContext);

    if (result.clearHistory) {
      clearHistory();
      focusInput("auto");
      return;
    }

    if (result.entries?.length) {
      appendEntries(result.entries);
    }

    result.scheduledEntries?.forEach(({ delay, entry }) => {
      const timeoutId = window.setTimeout(() => {
        appendEntry(entry);
      }, delay);

      scheduledTimeoutsRef.current.push(timeoutId);
    });

    focusInput("auto");
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab") {
      event.preventDefault();

      const suggestions = getShellSuggestions(inputValue);

      if (suggestions.nextValue) {
        setInputValue(suggestions.nextValue);
        resetHistoryNavigation(suggestions.nextValue);
        return;
      }

      if (suggestions.showSuggestions && suggestions.matches.length > 0) {
        appendEntry({
          type: "info",
          content: suggestions.matches.join("    "),
        });
      }

      focusInput("auto");
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      navigateHistory("up");
      focusInput("auto");
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      navigateHistory("down");
      focusInput("auto");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setInputValue(nextValue);
    resetHistoryNavigation(nextValue);
  };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#07111d] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:3rem_3rem]" />

      <div className="relative z-10 flex flex-1 flex-col p-3 pt-16 md:p-4 md:pt-18">
        <div
          onMouseDown={handleShellPointerDown}
          className="terminal-panel flex flex-1 flex-col rounded-[1.8rem] border border-white/10 bg-slate-950/72 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div
            ref={historyViewportRef}
            className="flex-1 overflow-y-auto px-4 py-4 md:px-5 md:py-5"
          >
            <div className="space-y-4">
              {history.map((entry) => (
                <TerminalHistoryItem key={entry.id} entry={entry} />
              ))}
              <div ref={scrollAnchorRef} />
            </div>
          </div>

          <form
            ref={promptFormRef}
            onSubmit={handleSubmit}
            className="border-t border-white/10 bg-slate-950/80 px-4 py-3 md:px-5"
          >
            <label className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-[border-color,box-shadow,background-color] duration-150 focus-within:border-cyan-300/35 focus-within:bg-white/[0.045] focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.08)]">
              <TerminalPrompt />
              <input
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                className="min-w-0 flex-1 bg-transparent font-mono text-sm text-slate-50 caret-cyan-300 outline-none placeholder:text-slate-500"
                placeholder="Digite um comando"
                aria-label={`Command input for ${SHELL_PROMPT}`}
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
