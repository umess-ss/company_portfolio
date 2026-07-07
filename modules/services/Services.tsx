"use client";

/**

 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Simple services grid: familiar category name as the title, a short
 * plain-language description, three deliverables. Four cards up
 * front, the rest behind a "View all" toggle.
 */
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Service } from "@/lib/types";

export interface ServicesProps {
  services: Service[];
  /** Render every service up front (dedicated /services page). */
  expanded?: boolean;
}

const INITIAL_COUNT = 4;

export function Services({ services, expanded = false }: ServicesProps) {
  const [showAll, setShowAll] = useState(expanded);
  const visible = showAll ? services : services.slice(0, INITIAL_COUNT);

  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-paper py-24 md:py-32"
    >
      {/* Dark-mode depth: faint signal glow behind the grid. */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(91,140,255,0.08),_transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="What we build"
          title="Software, end to end."
          intro="Scoped, designed, built, and shipped by senior engineers — no subcontractors."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {visible.map((service, i) => (
            <Reveal key={service.id} delay={(i % 2) * 90} className="h-full">
              <Link
                href={`/services/${service.id}`}
                aria-label={`Learn more about ${service.name}`}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-contour/60 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-xl hover:shadow-signal/5 dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-md dark:hover:border-signal/40 dark:hover:shadow-signal/10"
              >
                <div
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:opacity-60"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-10 -top-10 size-28 rounded-full bg-signal/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-signal/15"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-signal">
                  {service.name}
                </h3>
                <p className="font-body text-sm leading-6 text-contour-strong">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-2 pt-1">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm leading-relaxed text-ink/80"
                    >
                      <span className="font-mono text-signal" aria-hidden="true">
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 pt-1 font-body text-sm font-medium text-signal">
                  Learn more
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        {!expanded && services.length > INITIAL_COUNT && (
          <Reveal className="mt-10 text-center">
            <Button
              variant="outline"
              className="px-6"
              onClick={() => setShowAll((s) => !s)}
            >
              {showAll
                ? "Show fewer"
                : `View all services (${services.length})`}
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
