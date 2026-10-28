"use client";

import { motion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import {
  CONTENT_REVEAL,
  TILE_LAYOUT_TRANSITION,
  TILE_RADIUS,
} from "@/lib/motion";
import { tileLayoutId, type SectionId } from "./sections";

interface ExpandedTileProps {
  area: SectionId;
  label: string;
  onClose?: () => void;
  children: ReactNode;
}

export function ExpandedTile({
  area,
  label,
  onClose,
  children,
}: ExpandedTileProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = `${area}-expanded-title`;

  // Move focus into the panel so keyboard users land in the new content.
  useEffect(() => {
    closeButtonRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!onClose) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.section
      layoutId={tileLayoutId(area)}
      aria-labelledby={titleId}
      style={{ borderRadius: TILE_RADIUS }}
      transition={{ layout: TILE_LAYOUT_TRANSITION }}
      className="fixed inset-gutter z-50 flex flex-col overflow-hidden border border-line bg-surface lg:absolute lg:inset-0 lg:z-10"
    >
      <motion.header
        layout="position"
        transition={{ layout: TILE_LAYOUT_TRANSITION }}
        className="flex items-center justify-between gap-4 px-tile pt-tile pb-4"
      >
        <h2
          id={titleId}
          className="font-mono text-xs uppercase tracking-widest text-fg-subtle"
        >
          {label}
        </h2>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={`Close ${label}`}
          className="grid size-9 cursor-pointer place-items-center rounded-full border border-line text-fg-muted transition-colors duration-200 hover:border-line-strong hover:text-fg"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="size-4"
          >
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </motion.header>

      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{ opacity: CONTENT_REVEAL, layout: TILE_LAYOUT_TRANSITION }}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-tile pb-tile"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
