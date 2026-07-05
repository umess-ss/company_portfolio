/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Slim trust-signal band rendered directly under the hero: four mono
 * stat figures between hairline borders.
 */
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
      className="scroll-mt-24 border-y border-contour/20 bg-paper py-8"
    >
      <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-mono text-3xl text-ink">{stat.value}</p>
            <p className="mt-1 font-body text-sm text-contour-strong">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
