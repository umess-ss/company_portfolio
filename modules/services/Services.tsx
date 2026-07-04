/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ui/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import type { Service } from "@/lib/types";

export interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-contour">
            What we build
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={i * 90} className="h-full">
                <Card className="h-full border-contour/20 bg-white">
                  <CardHeader>
                    <Icon className="size-6 text-ink" aria-hidden="true" />
                    <CardTitle className="mt-4 font-display text-xl font-medium text-ink">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5">
                    <p className="font-body text-contour">
                      {service.description}
                    </p>
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
