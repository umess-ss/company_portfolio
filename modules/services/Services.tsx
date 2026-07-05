/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Service } from "@/lib/types";

export interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="What we build"
          title="Three disciplines, one team."
          intro="Every project is scoped, designed, built, and shipped by fully skilled Engineers — no handoffs, no subcontractors."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={i * 90} className="h-full">
                <Card className="h-full border-contour/20 bg-white transition hover:border-contour/50 hover:shadow-md">
                  <CardHeader>
                    <Icon className="size-6 text-ink" aria-hidden="true" />
                    <CardTitle className="mt-4 font-display text-xl font-medium text-ink">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5">
                    <p className="font-body text-contour-strong">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {service.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex items-start gap-2 font-body text-sm text-ink/80"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-pine"
                            aria-hidden="true"
                          />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-pine/20 bg-pine/10 font-mono text-xs text-pine"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
