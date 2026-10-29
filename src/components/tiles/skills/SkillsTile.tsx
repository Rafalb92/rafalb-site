"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { FEATURED_SKILL_IDS, SKILL_COUNT, SKILLS } from "@/content/skills";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { SkillChip } from "./SkillChip";

export function SkillsTile() {
  const { sections } = useDictionary();

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <Eyebrow as="h2">{sections.skills.label}</Eyebrow>
        <span className="font-mono text-xs text-fg-subtle">
          · {SKILL_COUNT}
        </span>
      </div>

      <ul className="grid flex-1 grid-cols-2 content-end gap-2">
        {FEATURED_SKILL_IDS.map((id) => (
          <li key={id}>
            <SkillChip skill={SKILLS[id]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
