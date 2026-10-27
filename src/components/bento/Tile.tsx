import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import type { SectionId } from "./sections";

interface TileProps extends ComponentPropsWithoutRef<"section"> {
  /** Grid area name — must match an area in the `.bento` template. */
  area: SectionId;
}

export function Tile({ area, className, style, children, ...rest }: TileProps) {
  return (
    <section
      data-area={area}
      style={{ gridArea: area, ...style }}
      className={cn(
        "relative overflow-hidden rounded-tile border border-line bg-surface p-tile",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
