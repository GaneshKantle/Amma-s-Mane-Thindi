"use client";

import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  getFoodWhatsAppHref,
  type FoodItem,
} from "@/lib/constants/food";
import { cn } from "@/lib/utils/cn";

type FoodCardProps = {
  item: FoodItem;
  className?: string;
  /** Selective scrapbook treatment */
  scrapbook?: boolean;
};

const rotationClass = {
  left: "-rotate-1",
  right: "rotate-[1.5deg]",
  none: "rotate-0",
} as const;

export function FoodCard({ item, className, scrapbook }: FoodCardProps) {
  const askHref = getFoodWhatsAppHref(item);
  const rotation = item.rotation ?? "none";
  const useScrapbook = scrapbook ?? rotation !== "none";

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-3 px-0.5 transition-[transform,filter] duration-300",
        "motion-safe:hover:-translate-y-1",
        rotationClass[rotation],
        className,
      )}
    >
      {useScrapbook ? (
        <span
          aria-hidden
          className="absolute -left-1 top-8 z-10 h-2 w-2 rounded-full bg-terracotta/50"
        />
      ) : null}

      <div className="relative">
        {/* Soft paper backing for scrapbook picks */}
        {useScrapbook ? (
          <span
            aria-hidden
            className="absolute -inset-1.5 -z-10 rotate-[1.5deg] rounded-[1.2rem_0.9rem_1.35rem_1rem] bg-paper-deep/70"
          />
        ) : null}

        <ImagePlaceholder
          label={item.name}
          aspect="photo"
          alt={item.imageAlt}
          src={item.imageSrc}
          className={cn(
            "transition-[transform,box-shadow] duration-500 ease-out",
            "motion-safe:group-hover:scale-[1.025]",
            "motion-safe:group-hover:shadow-[3px_6px_0_rgba(41,37,31,0.08)]",
          )}
        />

        {/* Handwritten annotation — desktop hover / always soft on touch */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -right-1 -bottom-1 z-20 max-w-[7rem] font-display text-[0.7rem] leading-tight text-leaf/70 rotate-[-7deg]",
            "opacity-70 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-90",
          )}
        >
          {item.nameKn}
        </span>
      </div>

      <div className="px-1">
        <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {item.name}
        </p>
        <p lang="kn" className="font-kannada mt-0.5 text-sm text-terracotta">
          {item.nameKn}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft sm:text-base">
          {item.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={askHref}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex min-h-11 items-center text-sm font-medium text-terracotta"
          >
            Ask about this
          </a>
          <Link
            href="/food"
            className="link-draw inline-flex min-h-11 items-center text-sm font-medium text-ink-soft"
          >
            See full menu
          </Link>
        </div>
      </div>
    </article>
  );
}
