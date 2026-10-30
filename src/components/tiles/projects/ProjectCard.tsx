"use client";

import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { buttonStyles } from "@/components/ui/button-styles";
import { LaptopFrame } from "@/components/ui/devices/LaptopFrame";
import { PhoneFrame } from "@/components/ui/devices/PhoneFrame";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatusDot } from "@/components/ui/StatusDot";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  PROJECTS,
  type ProjectId,
  type ProjectStatus,
} from "@/content/projects";
import { cn } from "@/lib/cn";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { FADE_UP_ITEM } from "@/lib/motion";

interface ProjectCardProps {
  id: ProjectId;
  /** Puts the media on the right — used for every other card. */
  reversed?: boolean;
}

export function ProjectCard({ id, reversed = false }: ProjectCardProps) {
  const { projects, links } = useDictionary();
  const project = PROJECTS[id];
  const text = projects.items[id];
  const headingId = `project-${id}`;

  return (
    <motion.article
      variants={FADE_UP_ITEM}
      aria-labelledby={headingId}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <div className={cn("lg:col-span-7", reversed && "lg:order-last")}>
        {project.device === "laptop" ? (
          <LaptopFrame
            image={project.image}
            alt={text.imageAlt}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="mx-[6%]"
          />
        ) : (
          <PhoneFrame
            image={project.image}
            alt={text.imageAlt}
            sizes="(min-width: 1024px) 20vw, 60vw"
            className="mx-auto w-[min(60%,16rem)]"
          />
        )}
      </div>

      <div className="space-y-6 lg:col-span-5">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs">
            <ProjectStatusBadge
              status={project.status}
              label={projects.status[project.status]}
            />
            <span className="text-fg-subtle">{project.year}</span>
          </div>

          <h3
            id={headingId}
            className="text-3xl font-semibold tracking-tight text-fg"
          >
            {project.name}
          </h3>
          <p className="text-lg text-pretty text-fg">{text.tagline}</p>
        </div>

        <p className="text-pretty text-fg-muted">{text.description}</p>

        <div className="space-y-3">
          <Eyebrow as="h4">{projects.labels.highlights}</Eyebrow>
          <ul className="space-y-2 text-sm text-fg-muted">
            {text.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <Eyebrow as="h4">{projects.labels.stack}</Eyebrow>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <TechBadge>{tech}</TechBadge>
              </li>
            ))}
          </ul>
        </div>

        {(project.links.live || project.links.repo) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles("primary")}
              >
                {projects.labels.liveDemo}
                <LuArrowUpRight aria-hidden="true" className="size-4" />
                <span className="sr-only"> {links.opensInNewTab}</span>
              </a>
            )}

            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles("secondary")}
              >
                <FaGithub aria-hidden="true" className="size-4" />
                {projects.labels.sourceCode}
                <span className="sr-only"> {links.opensInNewTab}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function ProjectStatusBadge({
  status,
  label,
}: {
  status: ProjectStatus;
  label: string;
}) {
  return (
    <span className="flex items-center gap-2 text-fg">
      {status === "live" ? (
        <StatusDot />
      ) : (
        <span
          aria-hidden="true"
          className="size-2 rounded-full border border-fg-subtle"
        />
      )}
      {label}
    </span>
  );
}
