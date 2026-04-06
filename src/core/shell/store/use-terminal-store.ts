"use client";

import { create } from "zustand";

import type {
  TerminalEntryDraft,
  TerminalHistoryEntry,
} from "@/core/shell/types/terminal";

type TerminalStore = {
  inputValue: string;
  history: TerminalHistoryEntry[];
  hasBooted: boolean;
  commandHistory: string[];
  historyIndex: number | null;
  draftInput: string;
  setInputValue: (value: string) => void;
  appendEntry: (entry: TerminalEntryDraft) => void;
  appendEntries: (entries: TerminalEntryDraft[]) => void;
  clearHistory: () => void;
  initializeHistory: () => void;
  recordCommand: (command: string) => void;
  navigateHistory: (direction: "up" | "down") => string | null;
  resetHistoryNavigation: (nextInput?: string) => void;
};

const createHistoryEntry = (entry: TerminalEntryDraft): TerminalHistoryEntry => ({
  id: crypto.randomUUID(),
  ...entry,
  timestamp: entry.timestamp ?? Date.now(),
});

export const useTerminalStore = create<TerminalStore>((set) => ({
  inputValue: "",
  history: [],
  hasBooted: false,
  commandHistory: [],
  historyIndex: null,
  draftInput: "",
  setInputValue: (value) => set({ inputValue: value }),
  appendEntry: (entry) =>
    set((state) => ({
      history: [...state.history, createHistoryEntry(entry)],
    })),
  appendEntries: (entries) =>
    set((state) => ({
      history: [...state.history, ...entries.map(createHistoryEntry)],
    })),
  clearHistory: () => set({ history: [] }),
  initializeHistory: () =>
    set((state) => {
      if (state.hasBooted) {
        return state;
      }

      return {
        hasBooted: true,
      };
    }),
  recordCommand: (command) =>
    set((state) => ({
      commandHistory:
        state.commandHistory.at(-1) === command
          ? state.commandHistory
          : [...state.commandHistory, command],
      historyIndex: null,
      draftInput: "",
    })),
  navigateHistory: (direction) => {
    let nextValue: string | null = null;

    set((state) => {
      if (state.commandHistory.length === 0) {
        return state;
      }

      if (direction === "up") {
        const nextIndex =
          state.historyIndex === null
            ? state.commandHistory.length - 1
            : Math.max(0, state.historyIndex - 1);

        nextValue = state.commandHistory[nextIndex] ?? "";

        return {
          historyIndex: nextIndex,
          draftInput: state.historyIndex === null ? state.inputValue : state.draftInput,
          inputValue: nextValue,
        };
      }

      if (state.historyIndex === null) {
        return state;
      }

      const nextIndex = state.historyIndex + 1;

      if (nextIndex >= state.commandHistory.length) {
        nextValue = state.draftInput;

        return {
          historyIndex: null,
          inputValue: state.draftInput,
        };
      }

      nextValue = state.commandHistory[nextIndex] ?? state.draftInput;

      return {
        historyIndex: nextIndex,
        inputValue: nextValue,
      };
    });

    return nextValue;
  },
  resetHistoryNavigation: (nextInput) =>
    set((state) => ({
      historyIndex: null,
      draftInput: nextInput ?? state.inputValue,
    })),
}));
