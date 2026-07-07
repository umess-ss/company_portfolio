/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Minimal name-free footer: three link columns over a hairline.
 */
import Link from "next/link";
import type { SiteConfig } from "@/lib/types";

export interface FooterProps {
  site: SiteConfig;
}

const NAV_LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Technologies", "/technologies"],
  ["Work", "/work"],
  ["How we work", "/how-we-work"],
  ["Team", "/team"],
  ["Contact", "/contact"],
] as const;

export function Footer({ site }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-contour/50 bg-paper pt-16 text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <p className="max-w-sm font-body text-sm text-contour-strong">
              AI systems, custom software, and mobile apps — designed, built,
              and shipped by one senior team.
            </p>
            <p className="font-body text-sm text-contour-strong">
              Built in Kathmandu 🇳🇵
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-contour-strong">
              Explore
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-ink/70 transition-colors hover:text-signal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-contour-strong">
              Get in touch
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${site.email}`}
                className="font-body text-sm text-signal underline decoration-signal/40 underline-offset-4 transition hover:decoration-signal"
              >
                {site.email}
              </a>
              <p className="font-body text-sm text-contour-strong">
                {site.location}
              </p>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-ink/70 transition-colors hover:text-signal"
              >
                GitHub
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-ink/70 transition-colors hover:text-signal"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-contour/50 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-contour-strong">
            © {currentYear} · All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-contour-strong transition-colors hover:text-signal"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-contour-strong transition-colors hover:text-signal"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
