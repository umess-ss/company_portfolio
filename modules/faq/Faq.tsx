/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * FAQ accordion built on native <details>/<summary> — no state, no
 * client JS, keyboard-accessible for free.
 */
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/reveal";
import type { FaqItem } from "@/lib/types";

export interface FaqProps {
  items: FaqItem[];
}

export function Faq({ items }: FaqProps) {
  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions we hear on every first call"
        />
        <Reveal>
          <div className="divide-y divide-contour/40 border-y border-contour/40">
            {items.map((item) => (
              <details key={item.question} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-base font-medium text-ink transition-colors hover:text-signal [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="size-4 shrink-0 text-contour-strong transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-4 font-body text-sm leading-relaxed text-contour-strong">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
