/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Slim trust-signal band under the hero: four stats that count up as
 * they scroll into view.
 */
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/ui/reveal";
import type { Stat } from "@/lib/types";

export interface ProofProps {
  stats: Stat[];
}

export function Proof({ stats }: ProofProps) {
  return (
    <section
      id="proof"
      aria-label="Studio track record"
      className="scroll-mt-24 border-b border-contour/50 bg-paper py-10"
    >
      <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <CountUp
              value={stat.value}
              className="font-display text-3xl font-semibold text-ink md:text-4xl"
            />
            <p className="mt-1 font-body text-sm text-contour-strong">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
