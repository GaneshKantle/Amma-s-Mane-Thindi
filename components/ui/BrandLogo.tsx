import Image from "next/image";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  withWordmark?: boolean;
  priority?: boolean;
};

const sizeMap = {
  sm: {
    box: "h-8 w-8 min-[380px]:h-9 min-[380px]:w-9 sm:h-10 sm:w-10",
    px: 40,
  },
  md: {
    box: "h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14",
    px: 56,
  },
  lg: {
    box: "h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32",
    px: 128,
  },
  xl: {
    box: "h-[clamp(6.5rem,28vw,13rem)] w-[clamp(6.5rem,28vw,13rem)]",
    px: 208,
  },
} as const;

export function BrandLogo({
  className,
  size = "md",
  withWordmark = false,
  priority = false,
}: BrandLogoProps) {
  const dims = sizeMap[size];

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2 sm:gap-3", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full border border-ink/10 bg-cream shadow-[1px_2px_0_rgba(41,37,31,0.06)]",
          dims.box,
        )}
      >
        <Image
          src={MEDIA.logo}
          alt={SITE.name}
          width={dims.px}
          height={dims.px}
          className="h-full w-full object-cover"
          priority={priority}
          sizes={`${dims.px}px`}
        />
      </span>
      {withWordmark ? (
        <span className="min-w-0 text-left max-[360px]:hidden">
          <span className="font-display block truncate text-[0.85rem] font-semibold tracking-tight text-ink sm:text-lg">
            {SITE.name}
          </span>
          <span
            lang="kn"
            className="font-kannada block truncate text-[0.65rem] leading-tight text-ink-soft sm:text-xs"
          >
            {SITE.nameKn}
          </span>
        </span>
      ) : null}
    </span>
  );
}
