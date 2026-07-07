/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Three testimonial cards with star ratings. Attributions are
 * role-based until clients approve being named (see data file TODO).
 */
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/reveal";
import type { Testimonial } from "@/lib/types";

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

function Stars() {
  return (
    <div className="flex gap-1" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="size-4 fill-signal text-signal"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-y border-contour/50 bg-contour/5 py-24 text-ink md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="What clients say"
          title="Judged by the people who use it"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.quote} delay={(i % 3) * 90} className="h-full">
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-contour/50 bg-card p-6">
                <Stars />
                <blockquote className="font-body text-sm leading-relaxed text-ink/85 md:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-2">
                  <p className="font-display text-sm font-semibold text-ink">
                    {testimonial.attribution}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-contour-strong">
                    {testimonial.organization}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
