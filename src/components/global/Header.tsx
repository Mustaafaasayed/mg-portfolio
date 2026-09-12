"use client";

import { useState } from "react";

import { Container } from "@/components/global/Container";
import { ContactCTA } from "@/components/ui/ContactCTA";
import type { SiteConfigContent } from "@/lib/content";

const navigationItems = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#decision-case-a", label: "Thinking" },
  { href: "#fintrack", label: "Building" },
  { href: "#resume", label: "Resume" },
] as const;

type HeaderProps = {
  site: SiteConfigContent;
};

export function Header({ site }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-base shadow-header">
      <Container
        size="row"
        className="relative flex items-center gap-4 py-4 md:gap-6"
      >
        <a className="font-semibold text-text-primary" href="#hero">
          {site.name}
        </a>

        <nav className="hidden md:block" id="site-navigation">
          <ul className="flex items-center gap-4 text-small text-text-secondary">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="underline decoration-transparent underline-offset-4 transition-colors duration-fast hover:decoration-current"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ContactCTA className="ml-auto" email={site.email} label="Let's talk" />

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          className="text-small text-text-secondary md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </Container>

      {isMenuOpen ? (
        <nav
          className="border-t border-border bg-bg-base md:hidden"
          id="mobile-navigation"
        >
          <ul className="flex flex-col gap-4 px-6 py-4 text-small text-text-secondary">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="underline decoration-transparent underline-offset-4 transition-colors duration-fast hover:decoration-current"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
