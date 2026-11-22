"use client";

import { AnimatePresence, motion, stagger, type Variants } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/motion";

/** Average uppercase glyph width of Raleway Bold, in em — keeps long words within the header. */
const GLYPH_WIDTH_EM = 0.68;

/**
 * Random value in [-range, range]. Only called when the exit animation starts —
 * never during render, so server and client markup stay identical.
 */
function spread(range: number): number {
  return (Math.random() * 2 - 1) * range;
}

const WORD_VARIANTS: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.025) } },
  scattered: {
    transition: { delayChildren: stagger(0.015, { from: "center" }) },
  },
};

const LETTER_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
  // A function variant: evaluated per letter when the exit starts, so every letter flies its own way.
  scattered: () => ({
    opacity: 0,
    x: spread(90),
    y: spread(50) - 20, // slight upward drift, like dust caught by a breath
    rotate: spread(120),
    scale: 0.6,
    filter: "blur(8px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Assembles a word letter by letter and blows it away when it changes or disappears. */
export function BlowAwayWord({ word }: { word: string | null }) {
  return (
    <AnimatePresence mode="popLayout">
      {word && (
        <motion.span
          key={word}
          variants={WORD_VARIANTS}
          initial="hidden"
          animate="visible"
          exit="scattered"
          style={{
            fontSize: `min(3.5rem, calc(50vw / ${word.length * GLYPH_WIDTH_EM}))`,
          }}
          className="flex leading-none font-bold tracking-tight whitespace-nowrap text-ghost-word select-none"
        >
          {Array.from(word).map((char, index) => (
            <motion.span
              // biome-ignore lint/suspicious/noArrayIndexKey: letters repeat ("SKILLS") and the list is fixed per word, so the position is the only stable identity.
              key={index}
              variants={LETTER_VARIANTS}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
