import Link from "next/link";
import { InkCorner } from "@/components/illustrations/InkOrnaments";
import {
  FooterBackdrop,
  InkClock,
  InkLeafSpray,
  InkNeedle,
  InkParcel,
  InkPin,
  InkPlate,
  InkPot,
  InkStitch,
} from "@/components/illustrations/FooterMotifs";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/site";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";

const MOTIF_STRIP = [
  { label: "Cook", Mark: InkPot },
  { label: "Pack", Mark: InkParcel },
  { label: "Serve", Mark: InkPlate },
  { label: "Stitch", Mark: InkNeedle },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ink-wash relative overflow-hidden border-t border-ink/12 bg-paper-deep/45 pb-fab">
      <FooterBackdrop className="pointer-events-none absolute inset-0 h-full w-full opacity-90" />

      <InkCorner className="pointer-events-none absolute top-4 left-3 z-[1] h-8 w-8 opacity-55 sm:top-7 sm:left-7" />
      <InkCorner className="pointer-events-none absolute top-4 right-3 z-[1] h-8 w-8 rotate-90 opacity-45 sm:top-7 sm:right-7" />
      <InkCorner className="pointer-events-none absolute bottom-[5.5rem] left-3 z-[1] h-8 w-8 -rotate-90 opacity-40 sm:bottom-24 sm:left-7" />
      <InkCorner className="pointer-events-none absolute right-3 bottom-[5.5rem] z-[1] h-8 w-8 rotate-180 opacity-45 sm:right-7 sm:bottom-24" />

      <Container className="relative z-[1] py-14 sm:py-16 lg:py-20">
        {/* Brand chapter */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="min-w-0 max-w-xl">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" />
              <InkLeafSpray className="hidden h-8 w-20 opacity-80 sm:block" />
            </div>
            <p className="font-display mt-5 text-[clamp(1.65rem,4.4vw,2.55rem)] leading-[1.06] font-semibold tracking-tight text-ink">
              {SITE.name}
            </p>
            <p
              lang="kn"
              className="font-kannada mt-2 text-lg text-terracotta sm:text-xl"
            >
              {SITE.taglineKn}
            </p>
            <p className="prose-measure mt-4 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
              Homemade Karnataka vegetarian cooking from our kitchen in {SITE.area} —
              prepared with care, collected with trust.
            </p>
          </div>

          <div className="shrink-0 lg:pb-1 lg:text-right">
            <p className="text-[0.68rem] font-medium tracking-[0.2em] text-leaf uppercase">
              Home kitchen
            </p>
            <p className="mt-2 text-sm text-ink">
              {SITE.cuisine}
              <span className="mx-2 text-ink/25" aria-hidden>
                ·
              </span>
              {SITE.rating.toFixed(1)} ★
            </p>
            <p className="mt-1 text-xs tracking-wide text-ink-soft">
              {SITE.googleReviewsLabel}
            </p>
          </div>
        </div>

        {/* Illustrated kitchen strip */}
        <div className="mt-10 sm:mt-12">
          <InkStitch className="h-3 w-full opacity-90" />
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {MOTIF_STRIP.map(({ label, Mark }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-[1.05rem_0.75rem_1.15rem_0.85rem] border border-ink/12 bg-cream/55 shadow-[inset_0_1px_0_rgba(247,240,223,0.7)]">
                  <Mark className="h-9 w-9" />
                </span>
                <span className="text-[0.65rem] font-medium tracking-[0.18em] text-ink-soft uppercase">
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <InkStitch className="mt-6 h-3 w-full opacity-90" />
        </div>

        {/* Contact — only place for number & hours */}
        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div>
            <div className="flex items-center gap-2.5">
              <InkPot className="h-7 w-7 shrink-0 opacity-80" />
              <p className="text-[0.68rem] font-medium tracking-[0.22em] text-ink-soft/85 uppercase">
                Reach the kitchen
              </p>
            </div>
            <a
              href={SITE.phoneHref}
              className="font-display mt-3 block text-[clamp(1.5rem,3.6vw,2.1rem)] leading-none font-semibold tracking-tight text-ink transition-colors hover:text-terracotta"
            >
              {SITE.phoneDisplay}
            </a>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <a
                href={whatsappDefaultHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-medium text-terracotta"
              >
                WhatsApp
              </a>
              <span className="text-ink/20" aria-hidden>
                /
              </span>
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-medium text-ink"
              >
                Open map
              </a>
            </div>

            <div className="mt-7 flex items-start gap-3">
              <InkClock className="mt-0.5 h-8 w-8 shrink-0 opacity-75" />
              <div>
                <p className="text-[0.68rem] font-medium tracking-[0.18em] text-ink-soft/80 uppercase">
                  Hours
                </p>
                <p className="mt-1 text-sm font-medium text-ink sm:text-[0.95rem]">
                  {SITE.hours}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <InkPin className="h-7 w-7 shrink-0 opacity-80" />
              <p className="text-[0.68rem] font-medium tracking-[0.22em] text-ink-soft/85 uppercase">
                Collect from
              </p>
            </div>
            <a
              href={SITE.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm leading-relaxed text-ink-soft transition-colors hover:text-ink sm:text-[0.95rem]"
            >
              {SITE.address}
            </a>

            <div className="mt-7 flex items-start gap-3">
              <InkParcel className="mt-0.5 h-8 w-8 shrink-0 opacity-75" />
              <div>
                <p className="text-[0.68rem] font-medium tracking-[0.18em] text-ink-soft/80 uppercase">
                  Service
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {SITE.serviceDisplay}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing line + nav */}
        <div className="mt-12 sm:mt-14">
          <InkLeafSpray className="mx-auto h-7 w-[7.5rem] opacity-70" />
          <p
            lang="kn"
            className="font-kannada mt-4 text-center text-base text-terracotta sm:text-lg"
          >
            ಮನೆಯಿಂದ ಮನೆಗೆ — ಪ್ರೀತಿಯಿಂದ.
          </p>

          <div className="mt-8 flex flex-col gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-draw text-sm font-medium text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="text-xs text-ink-soft/70">
              © {year} {SITE.name}. Made with care at home.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
