import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SITE } from "@/lib/constants/site";

export function AboutPage() {
  return (
    <section
      aria-labelledby="about-heading"
      className="ink-wash bg-paper-deep/25 pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pt-14"
    >
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <Reveal>
            <div className="mx-auto w-full max-w-[min(100%,24rem)] rotate-[-0.75deg] sm:max-w-md lg:mx-0 lg:max-w-lg">
              <ImagePlaceholder
                label="Our packaged homemade foods"
                aspect="wide"
                alt={`Packaged foods from ${SITE.name}`}
                src="/images/food/food1.jpeg"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <SectionEyebrow withSprig tone="leaf">
              Our kitchen
            </SectionEyebrow>
            <h1
              id="about-heading"
              className="font-display text-title mt-3 leading-[1.15] tracking-tight text-ink"
            >
              Made at home. Shared with everyone.
            </h1>
            <Divider className="mx-0 my-5 max-w-[9rem] py-0" tone="leaf" />
            <div className="text-lead prose-measure space-y-4 text-ink-soft">
              <p>
                {SITE.name} is a home-based vegetarian kitchen in {SITE.area} —
                known for traditional, fresh Karnataka-style homemade food made with
                care and quality ingredients.
              </p>
              <p>
                From Obbattu, Chakli and Nippattu to everyday rotti, chapati, idli and
                vada — recipes are remembered by hand, the way Amma makes them. Alongside
                the kitchen, we also stitch blouses and finish saree work with the same
                patience.
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
