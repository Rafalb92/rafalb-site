import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface PhoneFrameProps {
  image: StaticImageData;
  alt: string;
  /** Responsive `sizes` hint for next/image — how wide the screen renders. */
  sizes: string;
  preload?: boolean;
  className?: string;
}

export function PhoneFrame({
  image,
  alt,
  sizes,
  preload = false,
  className,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] rounded-[14%/6.5%] border border-line-strong bg-device p-[4%]",
        className,
      )}
    >
      <div className="relative h-full overflow-hidden rounded-[11%/5%] bg-bg">
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          preload={preload}
          className="object-cover object-top"
        />
        {/* Dynamic island */}
        <div
          aria-hidden="true"
          className="absolute top-[2.2%] left-1/2 h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-device"
        />
      </div>
    </div>
  );
}
