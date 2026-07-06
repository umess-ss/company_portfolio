/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Official brand logos (simple-icons paths) on theme-aware cards with a
 * subtle 3D tilt. Near-black marks (Next.js, Express) render as
 * currentColor so they stay visible in dark mode.
 */
import { TiltCard } from "@/components/motion/TiltCard";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { technologies } from "@/data/technologies";
import type { Technology } from "@/lib/types";

export interface TechnologiesProps {
  items?: Technology[];
}

function isNearBlack(hex: string) {
  const n = parseInt(hex, 16);
  return ((n >> 16) & 255) + ((n >> 8) & 255) + (n & 255) < 90;
}

function TechnologyCard({ technology }: { technology: Technology }) {
  const dark = isNearBlack(technology.hex);
  return (
    <TiltCard intensity={5} className="h-full">
      <article className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-contour/60 bg-card p-6 transition duration-300 hover:border-signal/40 hover:shadow-xl hover:shadow-signal/5">
        <div
          className="flex size-12 items-center justify-center rounded-xl border border-contour/50 bg-paper transition-transform duration-300 group-hover:scale-110"
          style={dark ? undefined : { color: `#${technology.hex}` }}
        >
          <svg
            viewBox="0 0 24 24"
            className={`size-6 ${dark ? "text-ink" : ""}`}
            fill="currentColor"
            role="img"
            aria-label={`${technology.name} logo`}
          >
            <path d={technology.iconPath} />
          </svg>
        </div>
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-contour-strong">
            {technology.label}
          </p>
          <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
            {technology.name}
          </h3>
        </div>
        <p className="font-body text-sm leading-6 text-contour-strong">
          {technology.summary}
        </p>
      </article>
    </TiltCard>
  );
}

export function Technologies({ items = technologies }: TechnologiesProps) {
  return (
    <section
      id="technologies"
      className="scroll-mt-24 border-y border-contour/50 bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Our stack"
          title="Technologies we use."
          intro="Modern, reliable tools chosen for speed, security, and long-term maintainability — Next.js and React on the front, Python, Django, Node, Express, and Go behind them."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((technology, index) => (
            <Reveal key={technology.id} delay={(index % 4) * 80} className="h-full">
              <TechnologyCard technology={technology} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
