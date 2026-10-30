import type { ReactNode } from "react";

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line px-2.5 py-1 font-mono text-xs text-fg-muted">
      {children}
    </span>
  );
}
