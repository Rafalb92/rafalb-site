import type { SkillData } from "@/content/skills";
import { cn } from "@/lib/cn";

interface SkillChipProps {
  skill: SkillData;
  /** Context note, exposed to screen readers (the visual tooltip is mouse-only). */
  note?: string;
  /** Marks skills that carry a note shown on hover. */
  highlighted?: boolean;
}

export function SkillChip({
  skill,
  note,
  highlighted = false,
}: SkillChipProps) {
  const Icon = skill.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg border border-line px-3 py-2",
        highlighted &&
          "transition-colors duration-200 hover:border-accent/40 hover:bg-surface-hover",
      )}
    >
      {Icon ? (
        <Icon aria-hidden="true" className="size-4 shrink-0 text-fg-muted" />
      ) : (
        <span
          aria-hidden="true"
          className="grid size-4 shrink-0 place-items-center font-mono text-[10px] text-fg-subtle"
        >
          {skill.name.slice(0, 2)}
        </span>
      )}

      <span className="min-w-0 truncate text-sm text-fg">
        {skill.name}
        {note && <span className="sr-only"> — {note}</span>}
      </span>

      {highlighted && (
        <span
          aria-hidden="true"
          className="ml-auto size-1 shrink-0 rounded-full bg-accent/70"
        />
      )}
    </div>
  );
}
