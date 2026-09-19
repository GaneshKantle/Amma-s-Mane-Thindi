import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type ImagePlaceholderProps = {
  label?: string;
  aspect?: "square" | "photo" | "wide" | "portrait" | "landscape" | "detail";
  className?: string;
  /** When a real photo exists under /public, pass its path here. */
  src?: string;
  alt?: string;
  /** Prefer contain for gallery photos so images are not cropped aggressively. */
  objectFit?: "cover" | "contain";
  sizes?: string;
};

const aspectClasses = {
  square: "aspect-square",
  photo: "aspect-[4/5]",
  wide: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  detail: "aspect-[5/4]",
} as const;

/** Scrapbook-style frame — placeholder art or next/image when src is available. */
export function ImagePlaceholder({
  label = "Photo coming soon",
  aspect = "photo",
  className,
  src,
  alt,
  objectFit = "cover",
  sizes = "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1920px) 33vw, 28rem",
}: ImagePlaceholderProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden bg-paper-deep/80 hand-frame",
        aspectClasses[aspect],
        className,
      )}
      style={{
        borderRadius: "1.15rem 0.85rem 1.3rem 0.95rem",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 border-[1.5px] border-ink/20"
        style={{ borderRadius: "inherit" }}
      />
      <span
        aria-hidden
        className="absolute -top-1 left-1/2 z-20 h-5 w-14 -translate-x-1/2 rotate-[-2deg] bg-mustard/55 shadow-sm sm:w-16"
        style={{ borderRadius: "2px" }}
      />

      {src ? (
        <>
          <Image
            src={src}
            alt={alt ?? label}
            fill
            className={
              objectFit === "contain" ? "object-contain p-2" : "object-cover"
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
              rx="3"
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
