"use client";

import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Modal } from "@/components/ui/Modal";
import {
  getFoodWhatsAppHref,
  isFoodAvailable,
  type FoodItem,
} from "@/lib/constants/food";

type FoodDetailModalProps = {
  item: FoodItem | null;
  onClose: () => void;
};

export function FoodDetailModal({ item, onClose }: FoodDetailModalProps) {
  return (
    <Modal
      open={Boolean(item)}
      onClose={onClose}
      title={item?.name ?? "Food"}
    >
      {item ? (
        <>
          <p className="-mt-1 mb-4 text-xs font-medium tracking-[0.14em] text-leaf uppercase">
            {item.category}
            {!isFoodAvailable(item) ? " · Unavailable" : ""}
          </p>

          <div className="mx-auto max-w-sm rotate-[-0.75deg]">
            <ImagePlaceholder
              label={item.name}
              aspect="photo"
              alt={item.imageAlt}
              src={item.imageSrc}
            />
          </div>

          <p
            lang="kn"
            className="font-kannada mt-5 text-lg text-terracotta sm:text-xl"
          >
            {item.nameKn}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
            {item.description}
          </p>
          {item.badge ? (
            <p className="mt-3 inline-flex rounded-[0.7rem_0.5rem_0.8rem_0.55rem] bg-mustard/25 px-2.5 py-1 text-xs font-semibold text-ink">
              {item.badge}
            </p>
          ) : null}

          <p className="font-display mt-6 text-base font-semibold text-ink">
            Interested in this?
          </p>
          <div className="mt-3">
            <Button
              href={getFoodWhatsAppHref(item)}
              external
              variant="primary"
              size="lg"
              className="w-full"
            >
              WhatsApp Us
            </Button>
          </div>
        </>
      ) : null}
    </Modal>
  );
}
