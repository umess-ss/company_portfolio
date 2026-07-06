"use client";

/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ - never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Case-studies layout inspired by ekbana.com/case-studies:
 * category filter tabs, 3-column card grid with cover images,
 * category badges, dates, titles, and summaries.
 */
import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/lib/types";

export interface WorkProps {
  projects: Project[];
  /** Render every project up front (dedicated /work page). */
  expanded?: boolean;
}

const CASE_STUDY_SECTIONS = [
  ["Problem", "problem"],
  ["Approach", "approach"],
  ["Solution", "solution"],
  ["Outcome", "outcomes"],
] as const;

function projectMeta(project: Project) {
  return `${project.serviceName} - ${project.year} - ${project.durationWeeks} weeks`;
}

function CaseStudyCover({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0B1526] via-[#0E1B33] to-[#123A8F] p-4 text-white shadow-sm sm:p-5 lg:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(85,162,255,0.18),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(124,231,255,0.12),_transparent_28%)]" />
      <div className="relative space-y-5">
        <div className="space-y-4">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[11px] tracking-widest text-white/70">
            CASE STUDY
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/60">
              {project.serviceName} - {project.year}
            </p>
            <h3 className="mt-2 font-display text-2xl tracking-tight text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-white/70">
              {project.summary}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {project.metrics.slice(0, 3).map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-white/10 bg-white/10 p-3 backdrop-blur-sm"
            >
              <p className="font-mono text-base text-white">{metric.value}</p>
              <p className="mt-1 font-body text-[11px] leading-tight text-white/70">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const INITIAL_COUNT = 3;

export function Work({ projects, expanded = false }: WorkProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openProject = projects.find((p) => p.slug === openSlug) ?? null;
  const [showAll, setShowAll] = useState(expanded);
  const [activeCategory, setActiveCategory] = useState("All Topic");

  // Derive unique categories from project data
  const categories = [
    "All Topic",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filtered =
    activeCategory === "All Topic"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="work" className="scroll-mt-24 bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Our Categories"
          title="Explore different categories"
        />

        {/* ── Category filter tabs ─────────────────────────────── */}
        <div className="mb-10 flex flex-wrap gap-1 border-b border-contour/40">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(expanded);
              }}
              className={`relative px-4 py-3 font-body text-sm transition-colors ${
                activeCategory === cat
                  ? "text-signal"
                  : "text-contour-strong hover:text-ink"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-signal" />
              )}
            </button>
          ))}
        </div>

        {/* ── Project cards grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80} className="h-full">
              <button
                type="button"
                onClick={() => setOpenSlug(project.slug)}
                className="group h-full w-full cursor-pointer text-left"
                aria-label={`View case study: ${project.title}`}
              >
                {/* Cover image with badges */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Category badges at bottom-left */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    <Badge className="border-0 bg-signal px-3 py-1 font-body text-xs font-medium text-white shadow-md">
                      {project.category}
                    </Badge>
                    <Badge className="border-0 bg-signal/80 px-3 py-1 font-body text-xs font-medium text-white shadow-md">
                      {project.serviceName}
                    </Badge>
                  </div>
                </div>

                {/* Date */}
                <p className="mt-4 font-body text-xs text-signal">
                  {project.date}
                </p>

                {/* Title */}
                <h3 className="mt-2 font-display text-lg font-semibold text-ink transition-colors group-hover:text-signal">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-contour-strong">
                  {project.summary}
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        {!expanded && filtered.length > INITIAL_COUNT && (
          <Reveal className="mt-10 text-center">
            <Button
              variant="outline"
              className="px-6"
              onClick={() => setShowAll((s) => !s)}
            >
              {showAll ? "Show fewer" : `View all projects (${filtered.length})`}
            </Button>
          </Reveal>
        )}
      </div>

      {/* Case study modal - shadcn Dialog handles focus trap and Escape. */}
      <Dialog
        open={openProject !== null}
        onOpenChange={(open) => {
          if (!open) setOpenSlug(null);
        }}
      >
        {openProject && (
          <DialogContent className="!top-[4svh] !max-w-[min(56rem,calc(100vw-1rem))] !-translate-y-0 max-h-[92svh] w-[min(56rem,calc(100vw-1rem))] overflow-y-auto p-4 sm:p-6">
            <div className="space-y-6 pr-1">
              <DialogHeader className="pr-10">
                <p className="font-mono text-xs text-contour-strong">
                  {projectMeta(openProject)} - team of {openProject.teamSize}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-body text-sm text-contour-strong">
                    {openProject.clientName ?? "Confidential"}
                  </span>
                  <Badge
                    variant="outline"
                    className="border-pine/20 bg-pine/10 font-mono text-xs text-pine"
                  >
                    {openProject.serviceName}
                  </Badge>
                </div>
                <DialogTitle className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                  {openProject.title}
                </DialogTitle>
                <DialogDescription className="max-w-2xl font-body text-sm text-contour-strong">
                  {openProject.summary}
                </DialogDescription>
              </DialogHeader>

              <CaseStudyCover project={openProject} />

              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
                <div className="space-y-5">
                  {CASE_STUDY_SECTIONS.map(([heading, key]) => (
                    <section key={key}>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                        {heading}
                      </h4>
                      <p className="mt-2 font-body text-sm leading-relaxed text-ink">
                        {openProject[key]}
                      </p>
                    </section>
                  ))}
                </div>

                <aside className="space-y-5 rounded-lg border border-contour/20 bg-contour/10 p-4">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                      Results
                    </h4>
                    <div className="mt-3 space-y-3">
                      {openProject.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="font-mono text-xl text-ink">
                            {metric.value}
                          </p>
                          <p className="mt-1 font-body text-xs text-contour-strong">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                      Tech stack
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {openProject.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-pine/20 bg-pine/10 font-mono text-xs text-pine"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
