import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { FoodCard } from "@/components/ui/FoodCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getFeaturedFoodItems } from "@/lib/constants/food";
import { cn } from "@/lib/utils/cn";

export function FoodShowcase() {
  const items = getFeaturedFoodItems(4);

  return (
    <Section id="food" ariaLabelledBy="food-heading">
      <Container>
        <Reveal>
          <div className="max-w-xl">
            <h2
              id="food-heading"
              className="font-display text-[clamp(1.85rem,5vw,3rem)] tracking-tight text-ink"
            >
              Made in our kitchen
            </h2>
            <p lang="kn" className="font-kannada mt-3 text-lg text-terracotta sm:text-xl">
              ನಮ್ಮ ಮನೆಯ ಅಡುಗೆಮನೆಯಿಂದ
            </p>
            <Divider className="mx-0 my-4 max-w-[9rem] py-0" tone="mustard" />
            <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
              Everyday snacks, traditional favourites and wholesome meals — prepared
              at home, not in a factory kitchen.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:gap-x-12">
          {items.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.06}
              className={cn(
                index === 1 && "sm:mt-10",
                index === 2 && "sm:mt-0 lg:-mt-6",
                index === 3 && "sm:mt-10",
              )}
            >
              <FoodCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center sm:mt-12">
            <Link
              href="/food"
              className="tap-target inline-flex items-center justify-center rounded-[1rem_0.75rem_1.05rem_0.9rem] border border-ink/15 bg-cream/80 px-6 text-sm font-semibold text-ink transition-colors hover:border-terracotta/40 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Browse all food
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
