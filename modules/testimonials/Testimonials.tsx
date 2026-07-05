/**
 * Owner: Ayush (@ayush)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Single large centered quote between Process and Team. Content lives
 * in data/testimonials.ts and is placeholder until a real quote lands.
 */
import { Reveal } from "@/components/ui/reveal";
import type { Testimonial } from "@/lib/types";

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="scroll-mt-24 bg-paper py-24 md:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6">
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.name} className="text-center">
            <blockquote className="mx-auto max-w-3xl">
              <p className="font-display text-2xl leading-snug tracking-tight text-ink md:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 font-body text-sm text-contour-strong">
                <span className="font-medium text-ink">{testimonial.name}</span>
                {" · "}
                {testimonial.title}, {testimonial.organization}
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
