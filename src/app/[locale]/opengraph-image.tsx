import { ImageResponse } from "next/og";
import { LED_DOTS } from "@/content/decor";
import { PROFILE } from "@/content/profile";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { loadOgFonts } from "@/lib/og-fonts";
import { OG_COLORS } from "@/lib/og-theme";
import { SITE_HOST } from "@/lib/site";

export const alt = `${PROFILE.name} — Fullstack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface OpengraphImageProps {
  params: Promise<{ locale: string }>;
}

export default async function OpengraphImage({ params }: OpengraphImageProps) {
  const locale = await resolveLocale(params);
  const { hero, meta } = getDictionary(locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: OG_COLORS.bg,
        color: OG_COLORS.fg,
        fontFamily: "Raleway",
      }}
    >
      {/* Same LED layout as the site, mapped from viewport percentages to image pixels. */}
      {LED_DOTS.map(({ x, y }) => (
        <div
          key={`${x}-${y}`}
          style={{
            position: "absolute",
            left: (x / 100) * size.width,
            top: (y / 100) * size.height,
            width: 4,
            height: 4,
            borderRadius: 999,
            background: OG_COLORS.accent,
            opacity: 0.35,
          }}
        />
      ))}

      <div
        style={{
          display: "flex",
          fontSize: 24,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: OG_COLORS.fgSubtle,
        }}
      >
        {hero.role}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          {PROFILE.name}
          <span style={{ color: OG_COLORS.accent }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 900,
            fontSize: 32,
            lineHeight: 1.35,
            color: OG_COLORS.fgMuted,
          }}
        >
          {meta.description}
        </div>
      </div>

      <div
        style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26 }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            background: OG_COLORS.accent,
          }}
        />
        {SITE_HOST}
      </div>
    </div>,
    { ...size, fonts: await loadOgFonts() },
  );
}
