import { Suspense } from "react";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { InteractiveBentoGrid } from "@/components/bento/InteractiveBentoGrid";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <SiteHeader />
      <main className="flex-1 px-gutter lg:min-h-0">
        {/* Static grid is prerendered; the interactive one takes over once search params are known. */}
        <Suspense fallback={<BentoGrid activeId={null} />}>
          <InteractiveBentoGrid />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
