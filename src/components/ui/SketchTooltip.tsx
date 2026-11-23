"use client";

import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EASE_OUT_EXPO } from "@/lib/motion";

interface SketchTooltipProps {
  /**
   * Handwritten note shown next to the trigger. The tooltip is decorative —
   * expose the same text to screen readers inside the trigger.
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
  const prefersReducedMotion = useReducedMotion() ?? false;

  const { refs, floatingStyles, context, placement } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: `${side}-start`,
    // Position with top/left so Motion can own `transform` on the floating element.
    transform: false,
    whileElementsMounted: autoUpdate,
    middleware: [offset(4), flip({ padding: 12 }), shift({ padding: 12 })],
  });

  // Mouse: hover. Touch and pen: tap toggles the note (mouse clicks are left to hover).
  const hover = useHover(context, {
    mouseOnly: true,
    delay: { open: 120, close: 0 },
  });
  const click = useClick(context, { ignoreMouse: true });
  // Tapping elsewhere or pressing Escape closes the note.
  const dismiss = useDismiss(context);
  const { getReferenceProps } = useInteractions([hover, click, dismiss]);

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              transition={{ duration: 0.15 }}
              className={cn(
                "pointer-events-none z-60 flex items-start",
                isBelow ? "flex-col-reverse" : "flex-col",
              )}
            >
              <motion.span
                // Reduced motion: show the text at once instead of "writing" it.
                initial={
                  prefersReducedMotion
                    ? false
                    : { clipPath: "inset(0 100% 0 0)" }
                }
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                className="pl-7 font-hand text-xl leading-none whitespace-nowrap text-accent"
              >
                {note}
              </motion.span>

              <SketchArrow flipped={isBelow} animated={!prefersReducedMotion} />
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
}

interface SketchArrowProps {
  flipped: boolean;
  /** When false the arrow appears fully drawn (reduced motion). */
  animated: boolean;
}

/** Hand-drawn arrow: the shaft draws from the note towards the trigger, then the head. */
function SketchArrow({ flipped, animated }: SketchArrowProps) {
  return (
    <svg
      aria-hidden="true"
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
        initial={animated ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.35, delay: 0.1, ease: EASE_OUT_EXPO }}
      />
      <motion.path
        d="M3 26 L 9 34 L 16 29"
        initial={animated ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.15, delay: 0.4, ease: "easeOut" }}
      />
    </svg>
  );
}
