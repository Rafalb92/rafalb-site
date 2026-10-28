import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuArrowUpRight, LuDownload, LuMail } from "react-icons/lu";
import {
  CONTACT_LINKS,
  type ContactLink,
  type ContactLinkKind,
} from "@/content/links";

const LINK_ICONS: Record<ContactLinkKind, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: LuMail,
  cv: LuDownload,
};

function isExternal(link: ContactLink): boolean {
  return link.kind === "github" || link.kind === "linkedin";
}

function getAnchorBehavior(link: ContactLink) {
  if (isExternal(link))
    return { target: "_blank", rel: "noopener noreferrer" } as const;
  if (link.kind === "cv") return { download: true } as const;
  return {};
}

export function LinksTile() {
  return (
    <ul className="grid h-full grid-cols-2 grid-rows-2 gap-2">
      {CONTACT_LINKS.map((link) => {
        const Icon = LINK_ICONS[link.kind];
        const external = isExternal(link);

        return (
          <li key={link.kind} className="min-h-0">
            <a
              href={link.href}
              {...getAnchorBehavior(link)}
              className="group relative flex h-full flex-col justify-between gap-3 rounded-lg border border-line p-3 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-hover"
            >
              <Icon
                aria-hidden="true"
                className="size-5 text-fg-muted transition-colors duration-200 group-hover:text-accent"
              />

              <span className="text-sm font-medium text-fg">
                {link.label}
                {external && (
                  <span className="sr-only"> (opens in a new tab)</span>
                )}
              </span>

              {external && (
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
