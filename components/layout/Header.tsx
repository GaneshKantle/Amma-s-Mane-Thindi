"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { NAV_LINKS } from "@/lib/constants/nav";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/12 bg-paper/92 backdrop-blur-md">
        <Container className="flex h-14 items-center justify-between gap-3 min-[380px]:gap-4 sm:h-16 md:h-[4.25rem]">
          <Link
            href="/"
            className="group min-w-0 shrink rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-terracotta"
          >
            <BrandLogo size="sm" withWordmark priority />
          </Link>

          <nav aria-label="Primary" className="hidden min-w-0 lg:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "tap-target relative inline-flex items-center px-2.5 text-sm tracking-wide transition-colors xl:px-3",
                        active
                          ? "font-medium text-ink"
                          : "text-ink-soft hover:text-ink",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-2.5 bottom-1.5 h-px bg-terracotta/80 xl:inset-x-3"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="tap-target inline-flex shrink-0 items-center justify-center rounded-[0.65rem_0.4rem_0.75rem_0.5rem] border border-ink/20 bg-cream/80 text-ink transition-colors hover:bg-cream lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </Container>
      </header>

      <div id="mobile-nav">
        <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
