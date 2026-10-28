import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  /** Use `h2` / `h3` when the eyebrow is the heading of its block. */
  as?: "p" | "h2" | "h3" | "span";
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Eyebrow({
  as: Component = "p",
  id,
  className,
  children,
}: EyebrowProps) {
  return (
    <Component
      id={id}
      className={cn(
        "font-mono text-xs uppercase tracking-widest text-fg-subtle",
        className,
      )}
    >
      {children}
    </Component>
  );
}
