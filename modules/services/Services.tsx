"use client";

/**

 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Minimal services grid: four cards up front, the rest behind a
 * "View all" toggle.
 */
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  BrainCircuit,
  Code2,
  GraduationCap,
  Megaphone,
  MessageSquareText,
  PenTool,
  Search,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Code2,
  GraduationCap,
  Megaphone,
  MessageSquareText,
  PenTool,
  Search,
  Smartphone,
};

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
    <section id="services" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="What we build"
          title="Software, end to end."
          intro="Scoped, designed, built, and shipped by senior engineers — no subcontractors."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {visible.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <Reveal key={service.id} delay={(i % 2) * 90} className="h-full">
                <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-contour/60 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-xl hover:shadow-signal/5">
                  <div
                    className="absolute -right-10 -top-10 size-28 rounded-full bg-signal/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {service.name}
                    </h3>
                  </div>
                  <p className="font-body text-sm leading-6 text-contour-strong">
                    {service.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    {service.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-pine/25 bg-pine/10 font-mono text-xs text-pine"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
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
