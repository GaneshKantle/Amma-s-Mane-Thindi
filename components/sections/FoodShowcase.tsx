import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { BEYOND_MENU } from "@/lib/constants/kitchen";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

const accentDot = {
  leaf: "bg-leaf",
  terracotta: "bg-terracotta",
  mustard: "bg-mustard",
} as const;

export function FoodShowcase() {
  return (
    <Section id="food" ariaLabelledBy="food-heading">
      <Container>
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16 2xl:gap-20">
          <Reveal>
            <div className="mx-auto w-full max-w-[min(100%,22rem)] rotate-[-1.25deg] sm:max-w-md lg:mx-0 lg:max-w-lg xl:max-w-xl">
              <ImagePlaceholder
                label="Our menu"
                aspect="portrait"
                alt={`${SITE.name} homemade food menu`}
                src={MEDIA.menu}
                objectFit="contain"
                className="bg-cream"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <p
                aria-hidden
                className="mt-3 text-center font-display text-xs tracking-wide text-leaf/70 rotate-[-2deg] sm:text-sm"
              >
                Our printed menu — from Amma&apos;s kitchen
              </p>
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.18em] text-leaf uppercase">
                Homemade kitchen
              </p>
              <h2
                id="food-heading"
                className="font-display text-title mt-2 tracking-tight text-ink"
              >
                Made with Amma&apos;s hand
              </h2>
              <p lang="kn" className="font-kannada text-subtitle mt-3 text-terracotta">
                ಅಮ್ಮನ ಕೈಯಿಂದ — ಮನೆಯ ರುಚಿ
              </p>
              <Divider className="mx-0 my-4 max-w-[9rem] py-0" tone="mustard" />
              <p className="text-lead prose-measure text-ink-soft">
                The menu shows what we cook often. Beyond that card, we also prepare
                food the way a mother would — for your people, your occasion, and your
                taste.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-8 text-xs font-medium tracking-[0.16em] text-terracotta uppercase">
                More than the menu
              </p>
            </Reveal>

            <Stagger className="mt-4 space-y-4" as="ul">
              {BEYOND_MENU.map((item) => (
                <StaggerItem key={item.id} as="li">
                  <div className="flex gap-3 rounded-[1.15rem_0.85rem_1.25rem_0.95rem] border border-ink/8 bg-cream/50 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4">
                    <span
                      aria-hidden
                      className={cn(
                        "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full",
                        accentDot[item.accent],
                      )}
                    />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                        {item.title}
                      </h3>
                      {item.titleKn ? (
                        <p lang="kn" className="font-kannada mt-0.5 text-sm text-terracotta/90">
                          {item.titleKn}
                        </p>
                      ) : null}
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/food"
                  className="tap-target inline-flex items-center justify-center rounded-[1rem_0.75rem_1.05rem_0.9rem] bg-terracotta px-6 text-sm font-semibold text-cream shadow-[2px_3px_0_rgba(41,37,31,0.12)] transition-[transform,background-color] duration-200 hover:bg-terracotta-deep motion-safe:hover:-translate-y-0.5"
                >
                  See the menu &amp; custom cooking
                </Link>
                <Link
                  href="/#contact"
                  className="tap-target inline-flex items-center justify-center text-sm font-medium text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-terracotta"
                >
                  Ask what&apos;s cooking today
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
