import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";
import { OG_COLORS } from "@/lib/og-theme";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: OG_COLORS.bg,
        color: OG_COLORS.fg,
        fontFamily: "Raleway",
        fontSize: 110,
        fontWeight: 700,
      }}
    >
      R<span style={{ color: OG_COLORS.accent }}>.</span>
    </div>,
    { ...size, fonts: await loadOgFonts() },
  );
}
