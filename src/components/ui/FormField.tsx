import { type ReactNode, useId } from "react";
import { cn } from "@/lib/cn";

interface ControlProps {
  id: string;
  "aria-invalid"?: true;
  "aria-describedby"?: string;
}

interface FormFieldProps {
  label: string;
  /** Translated error message. */
  error?: string;
  /** Receives the props that wire the control to its label and error. */
  children: (control: ControlProps) => ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-fg">
        {label}
      </label>

      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
      })}

      {error && (
        <p id={errorId} className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

/** Shared look for text inputs and textareas. */
export function inputStyles(className?: string): string {
  return cn(
    "w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-sm text-fg transition-colors duration-200 placeholder:text-fg-subtle hover:border-line-strong focus-visible:border-accent aria-invalid:border-danger",
    className,
  );
}
