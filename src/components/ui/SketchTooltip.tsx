"use client";

import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EASE_OUT_EXPO } from "@/lib/motion";

interface SketchTooltipProps {
  /**
   * Handwritten note shown next to the trigger. The tooltip is decorative
   * (mouse only) — expose the same text to screen readers inside the trigger.
   */
  note: string;
  /** Preferred side. Flips automatically when there is no room. */
  side?: "top" | "bottom";
  className?: string;
  children: ReactNode;
}

export function SketchTooltip({
  note,
  side = "top",
  className,
  children,
}: SketchTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context, placement } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: `${side}-start`,
    // Position with top/left so Motion can own `transform` on the floating element.
    transform: false,
    whileElementsMounted: autoUpdate,
    middleware: [offset(4), flip({ padding: 12 }), shift({ padding: 12 })],
  });

  const hover = useHover(context, {
    mouseOnly: true,
    delay: { open: 120, close: 0 },
  });
  const { getReferenceProps } = useInteractions([hover]);

  const isBelow = placement.startsWith("bottom");

  return (
    <>
      <div
        ref={refs.setReference}
        className={className}
        {...getReferenceProps()}
      >
        {children}
      </div>

      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={floatingStyles}
              aria-hidden="true"
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              className={cn(
                "pointer-events-none z-60 flex items-start",
                isBelow ? "flex-col-reverse" : "flex-col",
              )}
            >
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                className="pl-7 font-hand text-xl leading-none whitespace-nowrap text-accent"
              >
                {note}
              </motion.span>

              <SketchArrow flipped={isBelow} />
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
}

/** Hand-drawn arrow: the shaft draws from the note towards the trigger, then the head. */
function SketchArrow({ flipped }: { flipped: boolean }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-10 w-16 text-accent", flipped && "-scale-y-100")}
    >
      <motion.path
        d="M58 4 C 44 6, 18 12, 9 33"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.35, delay: 0.1, ease: EASE_OUT_EXPO }}
      />
      <motion.path
        d="M3 26 L 9 34 L 16 29"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.15, delay: 0.4, ease: "easeOut" }}
      />
    </svg>
  );
}
