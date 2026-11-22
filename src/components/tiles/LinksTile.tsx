"use client";

import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuArrowUpRight, LuDownload, LuMail } from "react-icons/lu";
import {
  CONTACT_LINK_KINDS,
  type ContactLinkKind,
  getContactHref,
} from "@/content/links";
import { useDictionary, useLocale } from "@/lib/i18n/LocaleProvider";
import { SketchTooltip } from "../ui/SketchTooltip";

const LINK_ICONS: Record<ContactLinkKind, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: LuMail,
  cv: LuDownload,
};

const EXTERNAL_KINDS: ReadonlySet<ContactLinkKind> = new Set([
  "github",
  "linkedin",
]);

function getAnchorBehavior(kind: ContactLinkKind) {
  if (EXTERNAL_KINDS.has(kind))
    return { target: "_blank", rel: "noopener noreferrer" } as const;
  if (kind === "cv") return { download: true } as const;
  return {};
}

export function LinksTile() {
  const locale = useLocale();
  const { links } = useDictionary();

  return (
    <ul className="grid h-full grid-cols-2 grid-rows-2 gap-2">
      {CONTACT_LINK_KINDS.map((kind) => {
        const Icon = LINK_ICONS[kind];
        const isExternal = EXTERNAL_KINDS.has(kind);

        // LinkedIn is disabled until the profile is ready: no link, "Soon" tooltip.
        if (kind === "linkedin")
          return (
            <li key={kind} className="min-h-0 opacity-50">
              <SketchTooltip side="top" note={links.soon} className="h-full">
                <span
                  aria-disabled="true"
                  className="flex h-full cursor-not-allowed flex-col justify-between gap-3 rounded-lg border border-line p-3"
                >
                  <Icon aria-hidden="true" className="size-5 text-fg-muted" />
                  <span className="text-sm font-medium text-fg">
                    {links[kind]}
                  </span>
                </span>
              </SketchTooltip>
            </li>
          );

        return (
          <li key={kind} className="min-h-0">
            <a
              href={getContactHref(kind, locale)}
              {...getAnchorBehavior(kind)}
              className="group relative flex h-full flex-col justify-between gap-3 rounded-lg border border-line p-3 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-hover"
            >
              <Icon
                aria-hidden="true"
                className="size-5 text-fg-muted transition-colors duration-200 group-hover:text-accent"
              />

              <span className="text-sm font-medium text-fg">
                {links[kind]}
                {isExternal && (
                  <span className="sr-only"> {links.opensInNewTab}</span>
                )}
              </span>

              {isExternal && (
                <LuArrowUpRight
                  aria-hidden="true"
                  className="absolute top-3 right-3 size-4 text-fg-subtle transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
