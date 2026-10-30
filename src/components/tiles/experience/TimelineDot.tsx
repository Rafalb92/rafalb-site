import { StatusDot } from "@/components/ui/StatusDot";

/** Current step pulses; past steps are hollow rings that sit on top of the timeline line. */
export function TimelineDot({ current }: { current: boolean }) {
  if (current) return <StatusDot />;

  return (
    <span
      aria-hidden="true"
      className="relative size-2 shrink-0 rounded-full border border-line-strong bg-surface"
    />
  );
}
