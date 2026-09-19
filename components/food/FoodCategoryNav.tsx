"use client";

import { FOOD_CATEGORIES, type FoodCategory } from "@/lib/constants/food";
import { cn } from "@/lib/utils/cn";

type FoodCategoryNavProps = {
  active: FoodCategory | "All";
  onChange: (category: FoodCategory | "All") => void;
};

const FILTERS: readonly (FoodCategory | "All")[] = ["All", ...FOOD_CATEGORIES];

export function FoodCategoryNav({ active, onChange }: FoodCategoryNavProps) {
  return (
    <nav
      aria-label="Food categories"
      className="sticky top-16 z-20 -mx-4 border-b border-ink/5 bg-paper/90 px-4 py-3 backdrop-blur-md sm:top-[4.25rem] sm:mx-0 sm:border-0 sm:px-0"
    >
      <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FILTERS.map((category) => {
          const isActive = active === category;
          return (
            <li key={category} className="snap-start shrink-0">
              <button
                type="button"
                onClick={() => onChange(category)}
                aria-pressed={isActive}
                className={cn(
                  "tap-target inline-flex items-center rounded-full border px-4 text-sm font-medium transition-colors",
                  isActive
                    ? "border-terracotta bg-terracotta text-cream shadow-[1px_2px_0_rgba(41,37,31,0.1)]"
                    : "border-ink/15 bg-cream/80 text-ink-soft hover:border-ink/25 hover:text-ink",
                )}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
