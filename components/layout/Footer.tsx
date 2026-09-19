import Link from "next/link";
import { InkCorner, InkSprig } from "@/components/illustrations/InkOrnaments";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { FOOTER_LINKS } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/site";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ink-wash relative overflow-hidden border-t border-ink/10 bg-paper-deep/35 pb-fab">
      <InkCorner className="pointer-events-none absolute top-5 left-4 h-7 w-7 opacity-60 sm:top-8 sm:left-8" />
      <InkCorner className="pointer-events-none absolute right-4 bottom-20 h-7 w-7 rotate-180 opacity-50 sm:right-8 sm:bottom-24" />

      <Container className="relative py-14 sm:py-16 lg:py-20">
        {/* Brand signal */}
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <BrandLogo size="md" />
            <p className="font-display mt-4 text-[clamp(1.55rem,4.2vw,2.35rem)] leading-[1.08] font-semibold tracking-tight text-ink">
              {SITE.name}
            </p>
            <p
              lang="kn"
              className="font-kannada mt-2 text-lg text-terracotta sm:text-xl"
            >
              {SITE.taglineKn}
            </p>
          </div>

          <p className="shrink-0 text-xs tracking-[0.16em] text-leaf uppercase sm:pb-1 sm:text-right">
            {SITE.cuisine}
            <span className="mx-2 text-ink/25" aria-hidden>
              ·
            </span>
            {SITE.rating.toFixed(1)} ★
            <span className="mx-2 text-ink/25" aria-hidden>
              ·
            </span>
            {SITE.googleReviewsLabel}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3 sm:mt-10">
          <Divider tone="leaf" className="mx-0 max-w-[7rem] flex-none py-0" />
          <InkSprig className="h-5 w-10 shrink-0 opacity-70" />
          <div
            aria-hidden
            className="h-px min-w-0 flex-1 bg-gradient-to-r from-ink/15 to-transparent"
          />
        </div>

        {/* Contact — only place for number & hours */}
        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
          <div>
            <p className="text-[0.68rem] font-medium tracking-[0.22em] text-ink-soft/80 uppercase">
              Call
            </p>
            <a
              href={SITE.phoneHref}
              className="font-display mt-2 block text-[clamp(1.45rem,3.5vw,2rem)] leading-none font-semibold tracking-tight text-ink transition-colors hover:text-terracotta"
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

            <p className="mt-6 text-sm text-ink-soft">
              <span className="font-medium text-ink">Hours</span>
              <span className="mx-2 text-ink/25" aria-hidden>
                ·
              </span>
              {SITE.hours}
            </p>
          </div>

          <div className="lg:border-l lg:border-ink/10 lg:pl-12">
            <p className="text-[0.68rem] font-medium tracking-[0.22em] text-ink-soft/80 uppercase">
              Collect from
            </p>
            <a
              href={SITE.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm leading-relaxed text-ink-soft transition-colors hover:text-ink sm:text-[0.95rem]"
            >
              {SITE.address}
            </a>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              {SITE.serviceDisplay}
            </p>
          </div>
        </div>

        {/* Nav + credit */}
        <div className="mt-12 flex flex-col gap-6 border-t border-ink/10 pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
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
      </Container>
    </footer>
  );
}
