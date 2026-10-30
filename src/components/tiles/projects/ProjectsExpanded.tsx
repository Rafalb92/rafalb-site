"use client";

import { motion } from "motion/react";
import { PROJECT_IDS } from "@/content/projects";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { STAGGER_CONTAINER } from "@/lib/motion";
import { ProjectCard } from "./ProjectCard";

export function ProjectsExpanded() {
  const { projects } = useDictionary();

  return (
    <div className="space-y-12">
      <p className="max-w-prose text-pretty text-fg-muted">{projects.intro}</p>

      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="visible"
        className="space-y-20"
      >
        {PROJECT_IDS.map((id, index) => (
          <ProjectCard key={id} id={id} reversed={index % 2 === 1} />
        ))}
      </motion.div>
    </div>
  );
}
