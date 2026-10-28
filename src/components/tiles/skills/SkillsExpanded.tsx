"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SketchTooltip } from "@/components/ui/SketchTooltip";
import { SKILL_CATEGORIES } from "@/content/skills";
import { FADE_UP_ITEM, STAGGER_CONTAINER } from "@/lib/motion";
import { SkillChip } from "./SkillChip";

export function SkillsExpanded() {
  return (
    <div className="space-y-10">
      <p className="max-w-prose text-pretty text-fg-muted">
        Tools I reach for, grouped by where they live in the stack. Hover the
        ones marked with a dot for a note on where I&apos;ve used them.
      </p>

      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="visible"
        className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3"
      >
        {SKILL_CATEGORIES.map((category) => {
          const headingId = `skills-${category.id}`;

          return (
            <motion.section
              key={category.id}
              variants={FADE_UP_ITEM}
              aria-labelledby={headingId}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <Eyebrow as="h3" id={headingId}>
                  {category.label}
                </Eyebrow>
                <p className="text-sm text-fg-muted">{category.description}</p>
              </div>

              <ul className="grid grid-cols-2 gap-2">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    {skill.note ? (
                      <SketchTooltip note={skill.note}>
                        <SkillChip skill={skill} highlighted />
                      </SketchTooltip>
                    ) : (
                      <SkillChip skill={skill} />
                    )}
                  </li>
                ))}
              </ul>
            </motion.section>
          );
        })}
      </motion.div>
    </div>
  );
}
