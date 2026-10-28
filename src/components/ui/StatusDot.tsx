import { cn } from "@/lib/cn";

interface StatusDotProps {
  className?: string;
}

/** Small pulsing LED-style indicator. Decorative — pair it with a text label. */
export function StatusDot({ className }: StatusDotProps) {
  return (
    <span aria-hidden="true" className={cn("relative flex size-2", className)}>
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
      <span className="relative inline-flex size-2 rounded-full bg-accent" />
    </span>
  );
}
