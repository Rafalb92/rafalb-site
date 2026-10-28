"use client";

import { useEffect, useRef } from "react";
import { LED_DOTS } from "@/content/decor";

/** Distance in px within which a LED reacts to the cursor. */
const GLOW_RADIUS = 220;

export function LedField() {
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!canHover || prefersReducedMotion) return;

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let pointerX = -Infinity;
    let pointerY = -Infinity;
    let frame = 0;

    // Dot centers come from data (percent × viewport) — no DOM reads per frame.
    const update = () => {
      frame = 0;

      LED_DOTS.forEach(({ x, y }, index) => {
        const dot = dotRefs.current[index];
        if (!dot) return;

        const distance = Math.hypot(
          (x / 100) * viewportWidth - pointerX,
          (y / 100) * viewportHeight - pointerY,
        );
        const falloff = Math.max(0, 1 - distance / GLOW_RADIUS);
        // Quadratic falloff: gentle at the edge of the radius, brighter close to the cursor.
        dot.style.setProperty("--glow", (falloff * falloff).toFixed(3));
      });
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      scheduleUpdate();
    };

    const handlePointerLeave = () => {
      pointerX = -Infinity;
      pointerY = -Infinity;
      scheduleUpdate();
    };

    const handleResize = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {LED_DOTS.map(({ x, y }, index) => (
        <span
          key={`${x}-${y}`}
          ref={(node) => {
            dotRefs.current[index] = node;
          }}
          className="led"
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}
    </>
  );
}
