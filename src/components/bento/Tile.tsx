"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode, Ref } from "react";
import { cn } from "@/lib/cn";
import {
  TILE_FADE_IN,
  TILE_FADE_OUT,
  TILE_LAYOUT_TRANSITION,
  TILE_RADIUS,
} from "@/lib/motion";
import { tileLayoutId, type SectionId } from "./sections";

interface TileProps extends Omit<HTMLMotionProps<"section">, "children"> {
  /** Grid area name — must match an area in the `.bento` template. */
  area: SectionId;
  label: string;
  /** Fades the tile out while another tile is expanded. */
  dimmed?: boolean;
  /** When provided, the whole tile becomes a trigger that expands it. */
  onExpand?: () => void;
  triggerRef?: Ref<HTMLButtonElement>;
  children: ReactNode;
}

export function Tile({
  area,
  label,
  dimmed = false,
  onExpand,
  triggerRef,
  className,
  style,
  children,
  ...rest
}: TileProps) {
  const isExpandable = onExpand !== undefined;

  return (
    <motion.section
      layoutId={tileLayoutId(area)}
      aria-label={label}
      data-area={area}
      style={{ gridArea: area, borderRadius: TILE_RADIUS, ...style }}
      animate={{ opacity: dimmed ? 0 : 1 }}
      transition={{
        layout: TILE_LAYOUT_TRANSITION,
        opacity: dimmed ? TILE_FADE_OUT : TILE_FADE_IN,
      }}
      className={cn(
        "relative overflow-hidden border border-line bg-surface",
        isExpandable && "transition-colors duration-200 hover:bg-surface-hover",
        className,
      )}
      {...rest}
    >
      {/* `layout` lets Motion counter-scale the content, so text doesn't stretch mid-animation. */}
      <motion.div
        layout
        transition={{ layout: TILE_LAYOUT_TRANSITION }}
        className="relative h-full p-tile"
      >
        {children}
      </motion.div>

      {isExpandable && (
        <button
          ref={triggerRef}
          type="button"
          onClick={onExpand}
          aria-label={`Open ${label}`}
          className="absolute inset-0 cursor-pointer rounded-[inherit] focus-visible:-outline-offset-2"
        />
      )}
    </motion.section>
  );
}
