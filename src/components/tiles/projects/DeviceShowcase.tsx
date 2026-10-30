"use client";

import { PhoneFrame } from "@/components/ui/devices/PhoneFrame";
import { LaptopFrame } from "@/components/ui/devices/LaptopFrame";
import { PROJECTS, findProjectByDevice } from "@/content/projects";
import { cn } from "@/lib/cn";
import { useDictionary } from "@/lib/i18n/LocaleProvider";

/**
 * Collapsed Projects composition: first laptop project on a laptop,
 * first phone project on a phone overlapping its right corner.
 */
export function DeviceShowcase() {
  const { projects } = useDictionary();
  const laptopId = findProjectByDevice("laptop");
  const phoneId = findProjectByDevice("phone");

  if (!laptopId && !phoneId) return null;

  return (
    // `container-type: size` enables cqw/cqh units so the devices fit both dimensions.
    <div className="relative min-h-0 flex-1 [container-type:size]">
      <div className="absolute inset-0 flex items-end justify-center">
        <div
          className={cn(
            "relative transition-transform duration-500 ease-out-expo group-hover:-translate-y-1",
            phoneId
              ? "w-[min(86cqw,calc(100cqh*1.45))]"
              : "w-[min(100cqw,calc(100cqh*1.45))]",
          )}
        >
          {laptopId && (
            <LaptopFrame
              image={PROJECTS[laptopId].image}
              alt={projects.items[laptopId].imageAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              preload
            />
          )}

          {phoneId && (
            <div className="absolute -right-[10%] bottom-0 w-[22%] transition-transform duration-500 ease-out-expo group-hover:-translate-y-2">
              <PhoneFrame
                image={PROJECTS[phoneId].image}
                alt={projects.items[phoneId].imageAlt}
                sizes="(min-width: 1024px) 12vw, 30vw"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
