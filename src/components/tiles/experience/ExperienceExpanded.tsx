"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TechBadge } from "@/components/ui/TechBadge";
import { EDUCATION, EXPERIENCE, EXPERIENCE_IDS } from "@/content/experience";
import { cn } from "@/lib/cn";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { FADE_UP_ITEM, STAGGER_CONTAINER } from "@/lib/motion";
import { TimelineDot } from "./TimelineDot";

export function ExperienceExpanded() {
  const { experience } = useDictionary();

  const formatPeriod = (start: number, end: number | null) =>
    `${start} – ${end ?? experience.labels.present}`;

  return (
    <div className="max-w-3xl space-y-12">
      <p className="text-pretty text-fg-muted">{experience.intro}</p>

      <motion.ol
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        {EXPERIENCE_IDS.map((id, index) => {
          const entry = EXPERIENCE[id];
          const text = experience.items[id];
          const isLast = index === EXPERIENCE_IDS.length - 1;

          return (
            <motion.li
              key={id}
              variants={FADE_UP_ITEM}
              className="grid grid-cols-[auto_1fr] gap-x-5"
            >
              {/* Dot + line column — the line stretches to the next entry. */}
              <div
                aria-hidden="true"
                className="flex flex-col items-center pt-1.5"
              >
                <TimelineDot current={entry.end === null} />
                {!isLast && <span className="mt-2 w-px flex-1 bg-line" />}
              </div>

              <div className={cn("space-y-2", !isLast && "pb-10")}>
                <p className="font-mono text-xs text-fg-subtle">
                  {formatPeriod(entry.start, entry.end)}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-fg">
                  {text.role}
                </h3>
                <p className="text-sm text-fg-muted">
                  {entry.organization ?? experience.labels.independent}
                  {entry.location && ` · ${entry.location}`}
                </p>
                <p className="max-w-prose text-pretty text-fg-muted">
                  {text.description}
                </p>

                {entry.tags && (
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {entry.tags.map((tag) => (
                      <li key={tag}>
                        <TechBadge>{tag}</TechBadge>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          );
        })}
      </motion.ol>

      <section
        aria-labelledby="experience-education"
        className="space-y-3 border-t border-line pt-8"
      >
        <Eyebrow as="h3" id="experience-education">
          {experience.labels.education}
        </Eyebrow>
        <div className="space-y-1">
          <p className="font-mono text-xs text-fg-subtle">
            {formatPeriod(EDUCATION.start, EDUCATION.end)}
          </p>
          <p className="font-semibold text-fg">{experience.education.degree}</p>
          <p className="text-sm text-fg-muted">{EDUCATION.school}</p>
        </div>
      </section>
    </div>
  );
}
