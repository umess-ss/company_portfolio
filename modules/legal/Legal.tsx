/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Shared renderer for prose legal pages (privacy, terms): title,
 * last-updated line, intro, then heading + paragraph sections.
 */
import { Reveal } from "@/components/ui/reveal";
import type { LegalDoc } from "@/lib/types";

export interface LegalProps {
  doc: LegalDoc;
}

export function Legal({ doc }: LegalProps) {
  return (
    <section className="scroll-mt-24 bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-contour-strong">
            Last updated {doc.updated}
          </p>
          <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-contour-strong md:text-lg">
            {doc.intro}
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-ink">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-body text-sm leading-relaxed text-ink/80 md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
