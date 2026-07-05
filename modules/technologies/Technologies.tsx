/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { technologies } from "@/data/technologies";
import type { Technology } from "@/lib/types";

export interface TechnologiesProps {
  items?: Technology[];
}

function TechnologyCard({ technology }: { technology: Technology }) {
  return (
    <article className="group relative h-full rounded-2xl border border-white/18 bg-white/3 p-5 pt-12 shadow-[0_16px_60px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-white/28 hover:bg-white/5">
      <div
        className={`absolute left-1/2 top-0 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br ${technology.accent} shadow-[0_18px_35px_rgba(255,120,70,0.25)] ring-8 ring-ink`}
        aria-hidden="true"
      >
        <div className="flex size-[4.25rem] items-center justify-center rounded-full border border-black/10 bg-[#101010] text-center font-display text-2xl font-semibold uppercase tracking-tight text-[#ff8659]">
          {technology.badge}
        </div>
      </div>

      <div className="mt-4 flex h-full flex-col items-center text-center">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-contour">
          {technology.label}
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold text-paper">
          {technology.name}
        </h3>
        <p className="mt-3 max-w-xs font-body text-sm leading-6 text-contour">
          {technology.summary}
        </p>
      </div>
    </article>
  );
}

export function Technologies({ items = technologies }: TechnologiesProps) {
  return (
    <section
      id="technologies"
      className="scroll-mt-24 overflow-hidden bg-ink py-24 text-paper md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,132,88,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0.01))] px-6 py-10 md:px-10 md:py-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <div className="absolute -right-20 top-8 size-44 rounded-full bg-[#ff7d52]/10 blur-3xl" />
          <div className="absolute -left-16 bottom-0 size-52 rounded-full bg-white/5 blur-3xl" />

          <SectionHeader
            dark
            eyebrow="Technologies"
            title="Technologies We Use"
            intro="We use modern and reliable technologies to build fast, secure, and high-quality digital solutions for businesses, schools, and organizations."
            className="relative z-10 mb-16 md:mb-20"
          />

          <Reveal className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-6 xl:gap-8">
            {items.map((technology, index) => (
              <Reveal key={technology.id} delay={index * 80} className="h-full">
                <TechnologyCard technology={technology} />
              </Reveal>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}