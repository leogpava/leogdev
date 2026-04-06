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
  setInputValue: (value: string) => void;
  appendEntry: (entry: TerminalEntryDraft) => void;
  appendEntries: (entries: TerminalEntryDraft[]) => void;
  clearHistory: () => void;
  initializeHistory: (entries: TerminalEntryDraft[]) => void;
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
  initializeHistory: (entries) =>
    set((state) => {
      if (state.hasBooted) {
        return state;
      }

      return {
        history: entries.map(createHistoryEntry),
        hasBooted: true,
      };
    }),
}));
