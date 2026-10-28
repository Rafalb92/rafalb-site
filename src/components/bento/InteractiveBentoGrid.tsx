"use client";

import { BentoGrid } from "./BentoGrid";
import { useActiveSection } from "./useActiveSection";

/** Connects the grid to URL state. Must render inside <Suspense> — it reads search params. */
export function InteractiveBentoGrid() {
  const { activeId, open, close } = useActiveSection();

  return <BentoGrid activeId={activeId} onOpen={open} onClose={close} />;
}
