import { BackgroundDecor } from "@/components/background/BackgroundDecor";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

export default function NotFound() {
  return (
    // `isolate` keeps the decor's negative z-index inside this page, as on the home page.
    <div className="relative isolate">
      <BackgroundDecor />
      <NotFoundContent />
    </div>
  );
}
