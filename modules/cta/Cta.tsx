/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Full-width closing CTA band so content pages never end abruptly —
 * dark panel, one headline, one action.
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section id="cta" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 text-center md:px-16 md:py-20">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(11,92,255,0.25),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(11,92,255,0.15),_transparent_40%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight text-paper md:text-5xl">
                Ready to build your next software product?
              </h2>
              <p className="mx-auto mt-4 max-w-xl font-body text-base text-paper/70 md:text-lg">
                From AI systems to enterprise software, our senior engineers
                help businesses design, build, and scale digital products.
              </p>
              <Button asChild size="lg" className="mt-8 px-8">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
