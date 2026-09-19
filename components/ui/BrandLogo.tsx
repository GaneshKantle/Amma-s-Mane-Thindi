import Image from "next/image";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

type BrandLogoProps = {
  className?: string;
  /** Visual size of the circular mark */
  size?: "sm" | "md" | "lg" | "xl";
  /** Show wordmark next to the mark (header / footer) */
  withWordmark?: boolean;
  priority?: boolean;
};

const sizeMap = {
  sm: { box: "h-9 w-9 sm:h-10 sm:w-10", px: 40 },
  md: { box: "h-11 w-11 sm:h-12 sm:w-12", px: 48 },
  lg: { box: "h-28 w-28 sm:h-36 sm:w-36", px: 144 },
  xl: { box: "h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52", px: 208 },
} as const;

export function BrandLogo({
  className,
  size = "md",
  withWordmark = false,
  priority = false,
}: BrandLogoProps) {
  const dims = sizeMap[size];

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5 sm:gap-3", className)}>
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
        <span className="min-w-0 text-left">
          <span className="font-display block truncate text-[0.95rem] font-semibold tracking-tight text-ink sm:text-lg">
            {SITE.name}
          </span>
          <span
            lang="kn"
            className="font-kannada block truncate text-[0.7rem] leading-tight text-ink-soft sm:text-xs"
          >
            {SITE.nameKn}
          </span>
        </span>
      ) : null}
    </span>
  );
}
