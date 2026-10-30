"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PORTRAIT } from "@/content/about";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { FADE_UP_ITEM, STAGGER_CONTAINER } from "@/lib/motion";

export function AboutExpanded() {
  const { about } = useDictionary();

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <div className="relative mx-auto aspect-4/5 w-full max-w-xs overflow-hidden rounded-xl border border-line bg-bg lg:sticky lg:top-0">
          <Image
            src={PORTRAIT}
            alt={about.portraitAlt}
            fill
            sizes="(min-width: 1024px) 25vw, 60vw"
            placeholder="blur"
            className="object-cover object-top"
          />
        </div>
      </div>

      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="visible"
        className="space-y-10 lg:col-span-8"
      >
        {about.story.map((block) => (
          <motion.section
            key={block.heading}
            variants={FADE_UP_ITEM}
            className="space-y-2"
          >
            <Eyebrow as="h3">{block.heading}</Eyebrow>
            <p className="max-w-prose text-pretty text-fg">{block.body}</p>
          </motion.section>
        ))}

        <motion.div
          variants={FADE_UP_ITEM}
          className="grid gap-8 border-t border-line pt-8 sm:grid-cols-3"
        >
          <BulletList
            heading={about.lookingFor.heading}
            items={about.lookingFor.items}
          />

          <section className="space-y-3">
            <Eyebrow as="h3">{about.languages.heading}</Eyebrow>
            <dl className="space-y-2 text-sm">
              {about.languages.items.map(({ name, level }) => (
                <div
                  key={name}
                  className="flex items-baseline justify-between gap-4"
                >
                  <dt className="text-fg">{name}</dt>
                  <dd className="font-mono text-xs text-fg-subtle">{level}</dd>
                </div>
              ))}
            </dl>
          </section>

          <BulletList
            heading={about.outside.heading}
            items={about.outside.items}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function BulletList({
  heading,
  items,
}: {
  heading: string;
  items: readonly string[];
}) {
  return (
    <section className="space-y-3">
      <Eyebrow as="h3">{heading}</Eyebrow>
      <ul className="space-y-2 text-sm text-fg-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2 size-1 shrink-0 rounded-full bg-accent"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
