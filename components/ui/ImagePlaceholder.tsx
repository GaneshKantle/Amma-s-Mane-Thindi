import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type ImagePlaceholderProps = {
  label?: string;
  aspect?: "square" | "photo" | "wide" | "portrait" | "landscape" | "detail";
  className?: string;
  src?: string;
  alt?: string;
  objectFit?: "cover" | "contain";
  sizes?: string;
  /** Archival corner brackets instead of washi tape */
  archival?: boolean;
};

const aspectClasses = {
  square: "aspect-square",
  photo: "aspect-[4/5]",
  wide: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  detail: "aspect-[5/4]",
} as const;

/** Illustrated plate / archival frame for photographs. */
export function ImagePlaceholder({
  label = "Photo coming soon",
  aspect = "photo",
  className,
  src,
  alt,
  objectFit = "cover",
  sizes = "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1920px) 33vw, 28rem",
  archival = true,
}: ImagePlaceholderProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden bg-paper-deep/80 hand-frame",
        archival && "archival-frame",
        aspectClasses[aspect],
        className,
      )}
      style={{
        borderRadius: "0.95rem 0.55rem 1.1rem 0.7rem",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 border border-ink/18"
        style={{ borderRadius: "inherit" }}
      />
      {/* Subtle double-line ink edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[5px] z-10 border border-ink/[0.08]"
        style={{ borderRadius: "inherit" }}
      />

      {src ? (
        <>
          <Image
            src={src}
            alt={alt ?? label}
            fill
            className={
              objectFit === "contain"
                ? "object-contain p-3 sm:p-4"
                : "object-cover"
            }
            sizes={sizes}
            loading="lazy"
          />
          <figcaption className="sr-only">{alt ?? label}</figcaption>
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
          <svg
            aria-hidden
            viewBox="0 0 48 48"
            className="h-9 w-9 text-ink/20 sm:h-10 sm:w-10"
            fill="none"
          >
            <path
              d="M8 34 L18 22 L26 30 L32 24 L40 34 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="17" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
            <rect
              x="6"
              y="8"
              width="36"
              height="32"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <figcaption className="max-w-[12rem] text-xs font-medium tracking-wide text-ink-soft/80 sm:text-sm">
            {label}
          </figcaption>
        </div>
      )}
    </figure>
  );
}
