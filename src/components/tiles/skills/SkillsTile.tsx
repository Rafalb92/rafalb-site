import { Eyebrow } from "@/components/ui/Eyebrow";
import { ALL_SKILLS, FEATURED_SKILLS } from "@/content/skills";
import { SkillChip } from "./SkillChip";

export function SkillsTile() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <Eyebrow as="h2">Skills</Eyebrow>
        <span className="font-mono text-xs text-fg-subtle">
          · {ALL_SKILLS.length}
        </span>
      </div>

      <ul className="grid flex-1 grid-cols-2 content-end gap-2">
        {FEATURED_SKILLS.map((skill) => (
          <li key={skill.name}>
            <SkillChip skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}
