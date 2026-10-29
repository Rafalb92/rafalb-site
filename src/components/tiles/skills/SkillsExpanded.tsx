"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SketchTooltip } from "@/components/ui/SketchTooltip";
import { SKILL_CATEGORIES, SKILLS } from "@/content/skills";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { FADE_UP_ITEM, STAGGER_CONTAINER } from "@/lib/motion";
import { SkillChip } from "./SkillChip";

export function SkillsExpanded() {
  const { skills } = useDictionary();

  return (
    <div className="space-y-10">
      <p className="max-w-prose text-pretty text-fg-muted">{skills.intro}</p>

      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="visible"
        className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3"
      >
        {SKILL_CATEGORIES.map((category) => {
          const headingId = `skills-${category.id}`;
          const { label, description } = skills.categories[category.id];

          return (
            <motion.section
              key={category.id}
              variants={FADE_UP_ITEM}
              aria-labelledby={headingId}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <Eyebrow as="h3" id={headingId}>
                  {label}
                </Eyebrow>
                <p className="text-sm text-fg-muted">{description}</p>
              </div>

              <ul className="grid grid-cols-2 gap-2">
                {category.skillIds.map((id) => {
                  const note = skills.notes[id];

                  return (
                    <li key={id}>
                      {note ? (
                        <SketchTooltip note={note}>
                          <SkillChip
                            skill={SKILLS[id]}
                            note={note}
                            highlighted
                          />
                        </SketchTooltip>
                      ) : (
                        <SkillChip skill={SKILLS[id]} />
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.section>
          );
        })}
      </motion.div>
    </div>
  );
}
