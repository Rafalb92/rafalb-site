import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatusDot } from "@/components/ui/StatusDot";
import { NOW } from "@/content/now";

export function NowTile() {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className="flex items-center justify-between gap-3">
        <Eyebrow as="h2">Now</Eyebrow>
        <p className="flex items-center gap-2 text-sm font-medium text-fg">
          <StatusDot />
          {NOW.status}
        </p>
      </div>

      <dl className="space-y-2 text-sm">
        {NOW.details.map(({ term, value }) => (
          <div key={term} className="flex items-baseline justify-between gap-4">
            <dt className="shrink-0 font-mono text-xs text-fg-subtle">
              {term}
            </dt>
            <dd className="text-right text-fg">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
