import type { ComponentType } from "react";
import { AboutExpanded } from "@/components/tiles/about/AboutExpanded";
import { AboutTile } from "@/components/tiles/about/AboutTile";
import { ExperienceExpanded } from "@/components/tiles/experience/ExperienceExpanded";
import { ExperienceTile } from "@/components/tiles/experience/ExperienceTile";
import { HeroTile } from "@/components/tiles/HeroTile";
import { LinksTile } from "@/components/tiles/LinksTile";
import { NowTile } from "@/components/tiles/NowTile";
import { ProjectsExpanded } from "@/components/tiles/projects/ProjectsExpanded";
import { ProjectsTile } from "@/components/tiles/projects/ProjectsTile";
import { SkillsExpanded } from "@/components/tiles/skills/SkillsExpanded";
import { SkillsTile } from "@/components/tiles/skills/SkillsTile";
import type { SectionId } from "./sections";

export interface TileContent {
  /** Rendered inside the tile in the grid. */
  Collapsed: ComponentType;
  /** Rendered in the expanded panel. Tiles without it are not expandable. */
  Expanded?: ComponentType;
}

export const TILE_CONTENT: Record<SectionId, TileContent> = {
  hero: { Collapsed: HeroTile },
  links: { Collapsed: LinksTile },
  now: { Collapsed: NowTile },
  skills: { Collapsed: SkillsTile, Expanded: SkillsExpanded },
  projects: { Collapsed: ProjectsTile, Expanded: ProjectsExpanded },
  experience: { Collapsed: ExperienceTile, Expanded: ExperienceExpanded },
  about: { Collapsed: AboutTile, Expanded: AboutExpanded },
};
