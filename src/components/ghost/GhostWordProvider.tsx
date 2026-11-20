"use client";

import { createContext, use, useState, type ReactNode } from "react";
import type { SectionId } from "@/components/bento/sections";

interface GhostWordContextValue {
  /** Section whose ghost word is currently shown — `null` shows nothing. */
  sectionId: SectionId | null;
  setSectionId: (id: SectionId | null) => void;
}

const GhostWordContext = createContext<GhostWordContextValue | null>(null);

/** Lets the grid (which knows what is hovered) drive the word shown in the header. */
export function GhostWordProvider({ children }: { children: ReactNode }) {
  const [sectionId, setSectionId] = useState<SectionId | null>(null);

  return (
    <GhostWordContext value={{ sectionId, setSectionId }}>
      {children}
    </GhostWordContext>
  );
}

export function useGhostWord(): GhostWordContextValue {
  const context = use(GhostWordContext);
  if (!context)
    throw new Error("useGhostWord must be used inside <GhostWordProvider>.");
  return context;
}
