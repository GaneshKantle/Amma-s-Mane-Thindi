"use client";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  isFoodAvailable,
  type FoodItem,
} from "@/lib/constants/food";
import { cn } from "@/lib/utils/cn";

type FoodTileProps = {
  item: FoodItem;
  onSelect: (item: FoodItem) => void;
};

const rotationClass = {
  left: "-rotate-1 sm:-rotate-1",
  right: "rotate-[0.75deg] sm:rotate-[1.25deg]",
  none: "rotate-0",
} as const;

const spanClass = {
  featured: "sm:col-span-2 lg:col-span-2",
  standard: "sm:col-span-1",
  compact: "sm:col-span-1",
} as const;

const aspectForSpan = {
  featured: "wide" as const,
  standard: "photo" as const,
  compact: "square" as const,
};

export function FoodTile({ item, onSelect }: FoodTileProps) {
  const available = isFoodAvailable(item);
  const span = item.span ?? "standard";
  const rotation = item.rotation ?? "none";
  const scrapbook = rotation !== "none";

  return (
    <article
      className={cn(
        "min-w-0 px-0.5 sm:px-1",
        spanClass[span],
        !available && "opacity-70",
      )}
    >
      <button
        type="button"
        onClick={() => onSelect(item)}
        className={cn(
          "group relative flex w-full flex-col gap-3 rounded-[1.1rem_0.85rem_1.25rem_0.95rem] text-left transition-[transform,filter] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-terracotta",
          rotationClass[rotation],
          "hover:z-10 motion-safe:active:scale-[0.99] motion-safe:hover:-translate-y-1",
        )}
        aria-label={`View details for ${item.name}`}
      >
        <div className="relative">
          {scrapbook ? (
            <span
              aria-hidden
              className="absolute -inset-1.5 -z-10 rotate-[1.25deg] rounded-[1.2rem_0.9rem_1.35rem_1rem] bg-paper-deep/65"
            />
          ) : null}

          <ImagePlaceholder
            label={item.name}
            aspect={aspectForSpan[span]}
            alt={item.imageAlt}
            src={item.imageSrc}
            sizes={
              span === "featured"
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className={cn(
              "transition-[transform,box-shadow] duration-500 ease-out",
              "motion-safe:group-hover:scale-[1.025]",
              "motion-safe:group-hover:shadow-[3px_6px_0_rgba(41,37,31,0.08)]",
            )}
          />

          {item.badge ? (
            <span className="absolute top-3 left-3 z-20 max-w-[min(70%,11rem)] rounded-[0.7rem_0.45rem_0.8rem_0.5rem] bg-cream/95 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-ink shadow-sm sm:text-xs">
              {item.badge}
            </span>
          ) : null}

          {!available ? (
            <span className="absolute right-3 bottom-3 z-20 rounded-full bg-ink/80 px-2.5 py-1 text-[0.7rem] font-medium text-cream">
              Currently unavailable
            </span>
          ) : null}

          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute right-1 bottom-0 z-10 font-display text-[0.65rem] tracking-wide text-leaf/55 rotate-[-6deg]",
              "transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100",
            )}
          >
            {item.category}
          </span>
        </div>

        <div className="px-0.5">
          <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
            {item.name}
          </h3>
          <p lang="kn" className="font-kannada mt-0.5 text-sm text-terracotta">
            {item.nameKn}
          </p>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {item.description}
          </p>
          <p className="mt-2 text-xs font-medium text-terracotta/80 sm:hidden">
            Tap for details
          </p>
        </div>
      </button>
    </article>
  );
}
