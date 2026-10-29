import type { ComponentType } from "react";
import { HeroTile } from "@/components/tiles/HeroTile";
import { LinksTile } from "@/components/tiles/LinksTile";
import { NowTile } from "@/components/tiles/NowTile";
import { SkillsExpanded } from "@/components/tiles/skills/SkillsExpanded";
import { SkillsTile } from "@/components/tiles/skills/SkillsTile";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import type { SectionId } from "./sections";

export interface TileContent {
  /** Rendered inside the tile in the grid. */
  Collapsed: ComponentType;
  /** Rendered in the expanded panel. Tiles without it are not expandable. */
  Expanded?: ComponentType;
}

/* -------------------------------------------------------------------------- */
/* Temporary placeholders — replaced section by section in later steps.       */
/* -------------------------------------------------------------------------- */

function createCollapsedPlaceholder(id: SectionId): ComponentType {
  function CollapsedPlaceholder() {
    const { sections } = useDictionary();
    return <Eyebrow as="h2">{sections[id].label}</Eyebrow>;
  }
  CollapsedPlaceholder.displayName = `CollapsedPlaceholder(${id})`;
  return CollapsedPlaceholder;
}

function createExpandedPlaceholder(id: SectionId): ComponentType {
  function ExpandedPlaceholder() {
    const { sections } = useDictionary();
    return (
      <div className="max-w-prose space-y-4 text-fg-muted">
        {Array.from({ length: 12 }, (_, index) => (
          <p key={index}>
            {sections[id].label} — placeholder paragraph {index + 1}. Real
            content arrives in a later step; this text only exists to test
            scrolling inside the expanded tile.
          </p>
        ))}
      </div>
    );
  }
  ExpandedPlaceholder.displayName = `ExpandedPlaceholder(${id})`;
  return ExpandedPlaceholder;
}

function expandablePlaceholder(id: SectionId): TileContent {
  return {
    Collapsed: createCollapsedPlaceholder(id),
    Expanded: createExpandedPlaceholder(id),
  };
}

/* -------------------------------------------------------------------------- */

export const TILE_CONTENT: Record<SectionId, TileContent> = {
  hero: { Collapsed: HeroTile },
  links: { Collapsed: LinksTile },
  now: { Collapsed: NowTile },
  skills: { Collapsed: SkillsTile, Expanded: SkillsExpanded },
  projects: expandablePlaceholder("projects"),
  experience: expandablePlaceholder("experience"),
  about: expandablePlaceholder("about"),
};
