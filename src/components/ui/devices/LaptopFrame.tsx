import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface LaptopFrameProps {
  image: StaticImageData;
  alt: string;
  /** Responsive `sizes` hint for next/image — how wide the screen renders. */
  sizes: string;
  /** Preload the screenshot when it is likely the largest visible image. */
  preload?: boolean;
  className?: string;
}

export function LaptopFrame({
  image,
  alt,
  sizes,
  preload = false,
  className,
}: LaptopFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Lid: bezel around a 16:10 screen. Percent padding keeps proportions at any size. */}
      <div className="rounded-t-xl border border-line-strong bg-device p-[2.2%] pb-[3%]">
        <div className="relative aspect-16/10 overflow-hidden rounded-[3px] bg-bg">
          <Image
            src={image}
            alt={alt}
            fill
            sizes={sizes}
            placeholder="blur"
            preload={preload}
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Base: slightly wider than the lid, with a thumb notch. */}
      <div className="relative mx-[-6%] aspect-[112/3.2] rounded-b-xl border border-t-0 border-line-strong bg-device">
        <div className="absolute top-0 left-1/2 h-1/2 w-[14%] -translate-x-1/2 rounded-b-md bg-surface-hover" />
      </div>
    </div>
  );
}
