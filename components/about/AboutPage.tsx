import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { TAILORING_GALLERY } from "@/lib/constants/tailoring";

const TAILORING_HERO = TAILORING_GALLERY[0];

export function AboutPage() {
  return (
    <>
      {/* Hero — promotional banner */}
      <section
        aria-labelledby="about-heading"
        className="ink-wash bg-paper-deep/25 pb-10 pt-8 sm:pb-12 sm:pt-12 lg:pt-14"
      >
        <Container>
          <Reveal>
            <div className="mx-auto w-full max-w-5xl">
              <ImagePlaceholder
                label="Amma's Mane Thindi — food and tailoring"
                aspect="wide"
                alt={`${SITE.name}: traditional homemade food and quality tailoring`}
                src={MEDIA.banner}
                objectFit="contain"
                className="bg-cream"
                sizes="(max-width: 1024px) 100vw, 64rem"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06} className="mx-auto mt-8 max-w-2xl text-center sm:mt-10">
            <SectionEyebrow withSprig tone="leaf" className="items-center">
              About us
            </SectionEyebrow>
            <h1
              id="about-heading"
              className="font-display text-title mt-3 leading-[1.15] tracking-tight text-ink"
            >
              Two crafts from one home
            </h1>
            <Divider className="mx-auto my-4 max-w-[9rem] py-0" tone="leaf" />
            <p className="text-lead text-ink-soft">
              We cook Karnataka-style homemade food, and we stitch blouses and finish
              saree work — both with the same care.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Equal Food | Tailoring split */}
      <Section
        id="what-we-offer"
        ariaLabelledBy="what-we-offer-heading"
        className="bg-paper"
        tight
      >
        <Container>
          <h2 id="what-we-offer-heading" className="sr-only">
            What we offer
          </h2>

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* Food */}
            <Reveal>
              <div className="flex h-full flex-col items-center text-center">
                <div className="w-full max-w-[min(100%,16rem)] sm:max-w-[18rem]">
                  <ImagePlaceholder
                    label="Homemade food"
                    aspect="square"
                    alt={`${SITE.name} logo — homemade food from Amma's kitchen`}
                    src={MEDIA.logo}
                    objectFit="contain"
                    className="bg-cream"
                    sizes="(max-width: 1024px) 70vw, 18rem"
                  />
                </div>
                <SectionEyebrow withSprig tone="leaf" className="mt-6 items-center">
                  Homemade food
                </SectionEyebrow>
                <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Karnataka kitchen
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-soft sm:text-lg">
                  Snacks, powders, pickles, and meals — made fresh at home.
                </p>
                <Button
                  href="/food"
                  variant="primary"
                  size="lg"
                  className="mt-6 w-full sm:w-auto"
                >
                  See the food menu
                </Button>
              </div>
            </Reveal>

            {/* Tailoring */}
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col items-center text-center">
                <div className="w-full max-w-[min(100%,16rem)] sm:max-w-[18rem]">
                  <ImagePlaceholder
                    label={TAILORING_HERO.label}
                    aspect="square"
                    alt={TAILORING_HERO.imageAlt}
                    src={TAILORING_HERO.imageSrc}
                    sizes="(max-width: 1024px) 70vw, 18rem"
                  />
                </div>
                <SectionEyebrow withSprig tone="terracotta" className="mt-6 items-center">
                  Tailoring
                </SectionEyebrow>
                <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Blouse &amp; saree work
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-soft sm:text-lg">
                  Blouse · Fall · Pico · Kuchu — measured and finished by hand.
                </p>
                <Button
                  href="/tailoring"
                  variant="primary"
                  size="lg"
                  className="mt-6 w-full sm:w-auto"
                >
                  Explore Tailoring
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Short who-we-are note */}
      <Section
        id="our-story"
        ariaLabelledBy="our-story-heading"
        className="ink-wash bg-paper-deep/25"
        tight
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionEyebrow withSprig tone="leaf" className="items-center">
                Our kitchen
              </SectionEyebrow>
              <h2
                id="our-story-heading"
                className="font-display text-title mt-3 leading-[1.15] tracking-tight text-ink"
              >
                Made at home. Shared with everyone.
              </h2>
              <Divider className="mx-auto my-5 max-w-[9rem] py-0" tone="leaf" />
              <div className="text-lead space-y-4 text-ink-soft">
                <p>
                  {SITE.name} is a home-based vegetarian kitchen in {SITE.area} —
                  known for traditional, fresh Karnataka-style homemade food made with
                  care and quality ingredients.
                </p>
                <p>
                  We are takeout only: place your order in advance, then collect from our
                  kitchen. When you call, you speak to the people who prepare your food.
                </p>
              </div>
              <p className="mt-5 text-sm font-medium text-ink">
                {SITE.rating.toFixed(1)} ★ · {SITE.googleReviewsLabel} · {SITE.cuisine}
              </p>
              <p lang="kn" className="font-kannada mt-3 text-base text-terracotta sm:text-lg">
                ಮನೆಯಿಂದ ಮನೆಗೆ — ಪ್ರೀತಿಯಿಂದ.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
