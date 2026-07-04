"use client";

/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ui/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * The case study dialog is controlled from page.tsx (openSlug) so the
 * hero's contour markers can open it without cross-module imports.
 */
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/types";

export interface WorkProps {
  projects: Project[];
  /** Slug of the project whose case study modal is open, or null. */
  openSlug: string | null;
  onOpenChange: (slug: string | null) => void;
}

const CASE_STUDY_SECTIONS = [
  ["Problem", "problem"],
  ["Approach", "approach"],
  ["Solution", "solution"],
  ["Outcome", "outcomes"],
] as const;

export function Work({ projects, openSlug, onOpenChange }: WorkProps) {
  const openProject = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <section id="work" className="bg-ink py-24 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-contour">
          Selected work
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onOpenChange(project.slug)}
              className="group cursor-pointer rounded-xl border border-paper/10 bg-paper/5 p-5 text-left transition-transform hover:-translate-y-1"
              aria-label={`View case study: ${project.title}`}
            >
              <div className="relative aspect-8/5 w-full overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder/${project.slug}.svg`}
                  alt={`${project.title} cover`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="font-body text-sm text-contour">
                  {project.clientName ?? "Confidential"}
                </span>
                <Badge
                  variant="outline"
                  className="border-paper/20 bg-paper/10 font-mono text-xs text-paper"
                >
                  {project.serviceName}
                </Badge>
              </div>
              <h3 className="mt-2 font-display text-xl font-medium text-paper">
                {project.title}
              </h3>
              <p className="mt-2 font-body text-sm text-contour">
                {project.summary}
              </p>
              <span className="mt-4 inline-block font-body text-sm text-signal">
                View case study →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Case study modal — shadcn Dialog handles focus trap + Escape */}
      <Dialog
        open={openProject !== null}
        onOpenChange={(open) => {
          if (!open) onOpenChange(null);
        }}
      >
        {openProject && (
          <DialogContent className="max-h-[85svh] max-w-2xl overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <span className="font-body text-sm text-muted-foreground">
                  {openProject.clientName ?? "Confidential"}
                </span>
                <Badge
                  variant="outline"
                  className="border-pine/20 bg-pine/10 font-mono text-xs text-pine"
                >
                  {openProject.serviceName}
                </Badge>
              </div>
              <DialogTitle className="font-display text-2xl text-ink">
                {openProject.title}
              </DialogTitle>
              <DialogDescription className="font-body">
                {openProject.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {openProject.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg bg-pine/5 p-4">
                  <p className="font-mono text-lg text-ink">{metric.value}</p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {CASE_STUDY_SECTIONS.map(([heading, key]) => (
              <div key={key}>
                <h4 className="font-mono text-xs uppercase tracking-widest text-contour">
                  {heading}
                </h4>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink">
                  {openProject[key]}
                </p>
              </div>
            ))}

            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-contour">
                Tech stack
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
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
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
