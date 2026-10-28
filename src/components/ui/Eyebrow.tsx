import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  /** Use `h2` when the eyebrow is the tile's heading. */
  as?: "p" | "h2" | "h3" | "span";
  className?: string;
  children: ReactNode;
}

export function Eyebrow({
  as: Component = "p",
  className,
  children,
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "font-mono text-xs uppercase tracking-widest text-fg-subtle",
        className,
      )}
    >
      {children}
    </Component>
  );
}
