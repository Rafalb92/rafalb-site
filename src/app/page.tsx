import { Suspense } from "react";
import { BackgroundDecor } from "@/components/background/BackgroundDecor";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { InteractiveBentoGrid } from "@/components/bento/InteractiveBentoGrid";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    // Full-viewport layer. `isolate` keeps the decor's negative z-index inside this page.
    <div className="relative isolate flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <BackgroundDecor />

      {/* Centered page column: header, grid and footer share the same edges. */}
      <div className="mx-auto flex w-full max-w-page flex-1 flex-col lg:min-h-0">
        <SiteHeader />

        <main className="flex-1 px-gutter lg:flex lg:min-h-0 lg:flex-col lg:justify-center">
          <div className="lg:h-full lg:max-h-(--grid-max-height)">
            {/* Static grid is prerendered; the interactive one takes over once search params are known. */}
            <Suspense fallback={<BentoGrid activeId={null} />}>
              <InteractiveBentoGrid />
            </Suspense>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
