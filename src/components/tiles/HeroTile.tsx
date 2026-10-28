import { Eyebrow } from "@/components/ui/Eyebrow";
import { PROFILE } from "@/content/profile";

export function HeroTile() {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <Eyebrow>{PROFILE.role}</Eyebrow>

      <div className="space-y-3">
        <h1 className="text-display font-semibold text-fg">
          {PROFILE.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="max-w-[52ch] text-pretty text-fg-muted">
          {PROFILE.tagline}
        </p>
      </div>
    </div>
  );
}
