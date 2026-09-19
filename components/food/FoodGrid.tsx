"use client";

import { FoodTile } from "@/components/food/FoodTile";
import { Reveal } from "@/components/ui/Reveal";
import type { FoodItem } from "@/lib/constants/food";

type FoodGridProps = {
  items: readonly FoodItem[];
  onSelect: (item: FoodItem) => void;
};

export function FoodGrid({ items, onSelect }: FoodGridProps) {
  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-ink-soft sm:text-base">
        Nothing in this category right now — try another, or WhatsApp us to ask.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
      {items.map((item, index) => (
        <Reveal key={item.id} delay={Math.min(index * 0.04, 0.24)}>
          <FoodTile item={item} onSelect={onSelect} />
        </Reveal>
      ))}
    </div>
  );
}
