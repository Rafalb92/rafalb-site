import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-fg hover:opacity-90",
  secondary:
    "border border-line text-fg hover:border-line-strong hover:bg-surface-hover",
};

/** Shared button look for both <button> and <a> elements. */
export function buttonStyles(
  variant: ButtonVariant = "primary",
  className?: string,
): string {
  return cn(
    "inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-200",
    VARIANT_STYLES[variant],
    className,
  );
}
