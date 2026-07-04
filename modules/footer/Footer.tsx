/**
 * Owner: Ayush (@ayush)
 * Module rules: import only from data/, lib/, components/ui/ — never
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
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <p className="font-display text-xl font-medium text-paper">
            {site.name}
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-paper/10 pt-8 md:flex-row md:items-center">
          <p className="font-body text-sm text-contour">Built in Kathmandu 🇳🇵</p>
          <p className="text-xs text-contour">
            © {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
