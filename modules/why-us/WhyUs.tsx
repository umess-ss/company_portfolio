/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Slim "why choose us" band directly under the services grid: six
 * checkmarked commitments, no cards, no fluff.
 */
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/reveal";
import type { SiteConfig } from "@/lib/types";

export interface WhyUsProps {
  site: SiteConfig;
}

const REASONS = [
  {
    title: "Senior engineers only",
    detail: "Founders write the code — no juniors, no subcontractors.",
  },
  {
    title: "End-to-end delivery",
    detail: "Design, build, launch, and support from one team.",
  },
  {
    title: "Transparent communication",
    detail: "Weekly demos, honest estimates, no surprises.",
  },
  {
    title: "Clean, scalable architecture",
    detail: "Documented, tested code any engineer can extend later.",
  },
  {
    title: "Long-term maintenance",
    detail: "We stay on after launch — support is step seven, not an upsell.",
  },
  {
    title: "On-time project delivery",
    detail: "Milestones agreed up front and tracked in the open.",
  },
] as const;

export function WhyUs({ site }: WhyUsProps) {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 border-y border-contour/50 bg-contour/5 py-24 text-ink md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Why us"
          title={`Why businesses work with ${site.name}`}
        />
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 80}>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-signal"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-contour-strong">
                    {reason.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
