/**
 * Owner: Ayush (@ayush)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import type { SiteConfig } from "@/lib/types";

export interface FooterProps {
  site: SiteConfig;
}

const NAV_LINKS = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Team", "#team"],
  ["Contact", "#contact"],
] as const;

export function Footer({ site }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink py-16 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <p className="font-display text-xl font-semibold text-paper">
              {site.name}
            </p>
            <p className="max-w-xs font-body text-sm text-contour">
              AI systems, custom software, and mobile apps — designed, built,
              and shipped by one senior team.
            </p>
            <p className="font-body text-sm text-contour">Built in Kathmandu 🇳🇵</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${site.email}`}
              className="font-body text-sm text-signal underline decoration-signal/40 underline-offset-4 transition hover:decoration-signal"
            >
              {site.email}
            </a>
            <p className="font-body text-sm text-contour">{site.location}</p>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-paper/70 transition-colors hover:text-paper"
            >
              GitHub
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-paper/70 transition-colors hover:text-paper"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-paper/10 pt-8">
          <p className="text-xs text-contour">
            © {currentYear} {site.name} · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
