/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Description page for a single service (/services/[id]): title,
 * plain-language paragraphs, deliverables, and links to the other
 * services. The page compositor appends the CTA band.
 */
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import type { Service } from "@/lib/types";

export interface ServiceDetailProps {
  service: Service;
  /** Remaining services, for the "other services" links. */
  others: Service[];
}

export function ServiceDetail({ service, others }: ServiceDetailProps) {
  return (
    <section className="scroll-mt-24 bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <Reveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-contour-strong transition-colors hover:text-signal"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            All services
          </Link>
          <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base text-contour-strong md:text-lg">
            {service.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          {/* ── Plain-language detail ──────────────────────────── */}
          <Reveal className="space-y-5">
            {service.details.map((paragraph) => (
              <p
                key={paragraph}
                className="font-body text-base leading-relaxed text-ink/85"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          {/* ── What you get ───────────────────────────────────── */}
          <Reveal delay={80}>
            <div className="rounded-xl border border-contour/40 bg-contour/10 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                What you get
              </p>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-body text-sm text-ink"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-signal"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ── Other services ─────────────────────────────────────── */}
        <Reveal className="mt-20">
          <p className="font-mono text-xs uppercase tracking-widest text-contour-strong">
            Other services
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {others.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.id}`}
                className="rounded-full border border-contour/60 px-4 py-2 font-body text-sm text-ink/80 transition-colors hover:border-signal/40 hover:text-signal"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
