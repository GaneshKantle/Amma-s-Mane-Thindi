import Link from "next/link";
import { ChapterMark } from "@/components/illustrations/InkOrnaments";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { BEYOND_MENU } from "@/lib/constants/kitchen";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";

export function FoodShowcase() {
  return (
    <Section id="food" ariaLabelledBy="food-heading" className="ink-wash">
      <Container>
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16 2xl:gap-20">
          <Reveal>
            <div className="mx-auto w-full max-w-[min(100%,22rem)] rotate-[-0.75deg] sm:max-w-md lg:mx-0 lg:max-w-lg xl:max-w-xl">
              <ImagePlaceholder
                label="Our menu"
                aspect="portrait"
                alt={`${SITE.name} homemade food menu`}
                src={MEDIA.menu}
                objectFit="contain"
                className="bg-cream"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <p className="mt-4 text-center font-display text-xs tracking-[0.04em] text-ink-soft/80 italic sm:text-sm">
                The printed card from our kitchen
              </p>
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <SectionEyebrow withSprig tone="leaf">
                Homemade kitchen
              </SectionEyebrow>
              <h2
                id="food-heading"
                className="font-display text-title mt-3 tracking-tight text-ink"
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

            {/* <Reveal delay={0.06}>
              <SectionEyebrow className="mt-9" tone="terracotta">
                More than the menu
              </SectionEyebrow>
            </Reveal> */}
{/* 
            <Stagger className="mt-5 space-y-3" as="ul">
              {BEYOND_MENU.map((item, index) => (
                <StaggerItem key={item.id} as="li">
                  <div className="story-card flex gap-3.5 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5">
                    <ChapterMark
                      number={String(index + 1).padStart(2, "0")}
                      className="mt-0.5 shrink-0"
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
            </Stagger> */}

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/food" variant="primary" size="lg" className="w-full sm:w-auto">
                  See the menu &amp; custom cooking
                </Button>
                <Link
                  href="/#contact"
                  className="link-draw tap-target inline-flex items-center justify-center text-sm font-medium text-ink-soft"
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
