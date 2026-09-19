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
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
          <Link
            href="/"
            className="group min-w-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-terracotta"
          >
            <BrandLogo size="sm" withWordmark priority />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
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
                        "tap-target relative inline-flex items-center rounded-full px-3 text-sm font-medium transition-colors",
                        active
                          ? "text-ink"
                          : "text-ink-soft hover:bg-paper-deep/70 hover:text-ink",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute bottom-1.5 left-1/2 h-[3px] w-4 -translate-x-1/2 rounded-full bg-terracotta/70"
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
            className="tap-target inline-flex items-center justify-center rounded-full border border-ink/15 bg-cream/70 text-ink transition-colors hover:bg-cream lg:hidden"
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
