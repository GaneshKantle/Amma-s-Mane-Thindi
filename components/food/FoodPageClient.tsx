import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { BEYOND_MENU, MENU_CHAPTERS } from "@/lib/constants/kitchen";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { whatsappFoodHref } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils/cn";

const accentBorder = {
  leaf: "border-l-leaf",
  terracotta: "border-l-terracotta",
  mustard: "border-l-mustard",
} as const;

export function FoodPageClient() {
  return (
    <>
      {/* Menu hero */}
      <section className="section-y-tight overflow-x-clip sm:overflow-visible">
        <Container>
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.18em] text-leaf uppercase">
                From Amma&apos;s kitchen
              </p>
              <h1 className="font-display text-display mt-2 tracking-tight text-ink">
                Our food, our way
              </h1>
              <p lang="kn" className="font-kannada text-subtitle mt-2 text-terracotta">
                ಮನೆಯ ಅಡುಗೆ — ಅಮ್ಮನ ಕೈ
              </p>
              <Divider className="mx-0 my-4 max-w-[9rem] py-0" tone="leaf" />
              <p className="text-lead prose-measure text-ink-soft">
                This is our printed menu — specialties, breakfasts, meals, sweets and
                boxes. Look through it, then tell us what you need. We cook at home in
                Kothanur; there is no cart and no delivery — takeout only.
              </p>
              <p className="text-lead prose-measure mt-4 text-ink-soft">
                Please order in advance and collect from our kitchen. If you don&apos;t
                see exactly what you want, ask — custom cooking is how Amma&apos;s kitchen
                works.
              </p>
              <div className="mt-8">
                <Button
                  href={whatsappFoodHref()}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  WhatsApp the kitchen
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mx-auto w-full max-w-[min(100%,22rem)] rotate-[1deg] sm:max-w-md lg:mx-0 lg:max-w-lg xl:max-w-xl">
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
        </Container>
      </section>

      {/* Menu chapters — text, no fake dish photos */}
      <section
        aria-labelledby="menu-chapters-heading"
        className="section-y border-t border-ink/10 bg-paper-deep/30"
      >
        <Container>
          <Reveal>
            <h2
              id="menu-chapters-heading"
              className="font-display text-title tracking-tight text-ink"
            >
              On the menu
            </h2>
            <p className="text-lead prose-measure mt-3 text-ink-soft">
              Chapters from our card — open the photo above for full details, or ask us
              what is available today.
            </p>
          </Reveal>

          <Stagger
            className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
            as="ul"
          >
            {MENU_CHAPTERS.map((chapter, index) => (
              <StaggerItem key={chapter.id} as="li">
                <div
                  className={cn(
                    "flex h-full flex-col gap-2 rounded-[1.2rem_0.9rem_1.35rem_1rem] border border-ink/10 bg-cream/70 p-5 sm:p-6",
                    index % 2 === 0 ? "-rotate-[0.4deg]" : "rotate-[0.5deg]",
                  )}
                >
                  <span className="font-display text-sm font-semibold tracking-widest text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {chapter.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{chapter.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Beyond menu — custom / mother's hand */}
      <section
        aria-labelledby="beyond-menu-heading"
        className="section-y"
      >
        <Container>
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-terracotta uppercase">
              Custom kitchen
            </p>
            <h2
              id="beyond-menu-heading"
              className="font-display text-title mt-2 tracking-tight text-ink"
            >
              We cook more than the card
            </h2>
            <p lang="kn" className="font-kannada text-subtitle mt-3 text-ink-soft">
              ಮೆನು ಮಾತ್ರವಲ್ಲ — ಅಮ್ಮನ ಕೈಯ ಆಡುಗೆ.
            </p>
            <p className="text-lead prose-measure mt-4 text-ink-soft">
              Mothers never cook from a fixed list alone. Share your occasion, quantity
              and preferences — we&apos;ll discuss and prepare food that feels personal.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2">
            {BEYOND_MENU.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.06} as="li">
                <article
                  className={cn(
                    "h-full border-l-[3px] bg-cream/40 py-4 pr-4 pl-5 sm:py-5 sm:pr-5 sm:pl-6",
                    accentBorder[item.accent],
                    "rounded-r-[1.1rem_0.85rem_1.2rem_0.9rem]",
                  )}
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  {item.titleKn ? (
                    <p lang="kn" className="font-kannada mt-1 text-sm text-terracotta sm:text-base">
                      {item.titleKn}
                    </p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Real packaging photos — authentic, not fake dish shots */}
      <section
        aria-labelledby="packed-heading"
        className="section-y border-t border-ink/10 bg-cream/55"
      >
        <Container>
          <Reveal>
            <h2
              id="packed-heading"
              className="font-display text-title tracking-tight text-ink"
            >
              Packed with Amma&apos;s mark
            </h2>
            <p className="text-lead prose-measure mt-3 text-ink-soft">
              Real parcels from our kitchen — snacks, powders and pickles, labelled the
              way they leave home.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {(
              [
                {
                  src: MEDIA.food.packaged1,
                  alt: "Homemade pickles and powders packed from AMMA'S MANE TINDI",
                  label: "Powders & pickles",
                  rotate: "-rotate-1",
                },
                {
                  src: MEDIA.food.packaged2,
                  alt: "Branded snack pouches from AMMA'S MANE TINDI",
                  label: "Evening snacks",
                  rotate: "rotate-[1.25deg]",
                },
                {
                  src: MEDIA.food.packaged3,
                  alt: "Ready parcels with AMMA'S MANE TINDI stickers",
                  label: "Ready to share",
                  rotate: "-rotate-[0.75deg]",
                },
              ] as const
            ).map((shot, index) => (
              <Reveal key={shot.src} delay={index * 0.07} as="li">
                <div className={cn("mx-auto w-full max-w-xs sm:max-w-none", shot.rotate)}>
                  <ImagePlaceholder
                    label={shot.label}
                    aspect="square"
                    alt={shot.alt}
                    src={shot.src}
                    sizes="(max-width: 640px) 90vw, 30vw"
                  />
                  <p className="mt-3 text-center font-display text-sm font-semibold text-ink">
                    {shot.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="food-order-cta"
        className="section-y-tight border-t border-ink/10 bg-paper-deep/35"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2
                id="food-order-cta"
                className="font-display text-title tracking-tight text-ink"
              >
                Tell us what you&apos;re craving
              </h2>
              <p className="text-lead mx-auto mt-3 max-w-lg text-ink-soft">
                Menu item or something custom — WhatsApp us, order in advance, then
                collect from our kitchen in Kothanur. Takeout only; no delivery.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  href={whatsappFoodHref()}
                  external
                  variant="primary"
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
    </>
  );
}
