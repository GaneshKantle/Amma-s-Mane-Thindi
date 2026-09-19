"use client";

import { useCallback, useMemo, useState } from "react";
import { FoodCategoryNav } from "@/components/food/FoodCategoryNav";
import { FoodDetailModal } from "@/components/food/FoodDetailModal";
import { FoodGrid } from "@/components/food/FoodGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import {
  filterFoodByCategory,
  type FoodCategory,
  type FoodItem,
} from "@/lib/constants/food";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { whatsappFoodHref } from "@/lib/utils/whatsapp";

export function FoodPageClient() {
  const [category, setCategory] = useState<FoodCategory | "All">("All");
  const [selected, setSelected] = useState<FoodItem | null>(null);

  const items = useMemo(() => filterFoodByCategory(category), [category]);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <section className="overflow-x-clip pb-8 pt-8 sm:overflow-visible sm:pt-12 lg:pt-14">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.18em] text-leaf uppercase">
                Homemade menu
              </p>
              <h1 className="font-display mt-2 text-[clamp(2rem,6vw,3.5rem)] tracking-tight text-ink">
                Our Food
              </h1>
              <p lang="kn" className="font-kannada mt-2 text-lg text-terracotta sm:text-xl">
                ನಮ್ಮ ಅಡುಗೆ
              </p>
              <Divider className="mx-0 my-4 max-w-[9rem] py-0" tone="leaf" />
              <p className="max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
                Browse what we prepare at home. There is no cart here — when something
                looks good, call or WhatsApp us and we&apos;ll take your order with care.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mx-auto w-full max-w-md rotate-[1deg] lg:mx-0 lg:max-w-none">
                <ImagePlaceholder
                  label="Our printed menu"
                  aspect="portrait"
                  alt={`${SITE.name} printed menu`}
                  src={MEDIA.menu}
                  objectFit="contain"
                  className="bg-cream"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-12">
            <FoodCategoryNav active={category} onChange={setCategory} />
          </div>

          <div className="mt-8 sm:mt-10">
            <FoodGrid items={items} onSelect={setSelected} />
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="food-order-cta"
        className="border-t border-ink/10 bg-paper-deep/35 py-12 md:py-14"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2
                id="food-order-cta"
                className="font-display text-[clamp(1.5rem,4vw,2.25rem)] tracking-tight text-ink"
              >
                Ready to order?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                Tell us what you&apos;d like, how much you need, and when. We prepare,
                pack and label — you enjoy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  href={SITE.phoneHref}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Call Us
                </Button>
                <Button
                  href={whatsappFoodHref()}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <FoodDetailModal item={selected} onClose={handleClose} />
    </>
  );
}
