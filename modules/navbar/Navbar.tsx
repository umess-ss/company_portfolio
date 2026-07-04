"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { SiteConfig } from "@/lib/types";

export interface NavbarProps {
  site: SiteConfig;
}

const NAV_LINKS = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Team", "#team"],
  ["Contact", "#contact"],
] as const;

export function Navbar({ site }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || menuOpen
          ? "border-b border-contour/20 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg font-medium text-ink"
          aria-label={`${site.name} — back to top`}
        >
          {site.name}
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-body text-sm text-ink/70 transition-colors hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">Start a project</a>
          </Button>
          <button
            type="button"
            className="text-ink md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-contour/20 md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-body text-base text-ink/80 transition-colors hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild size="sm" className="w-full">
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Start a project
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}