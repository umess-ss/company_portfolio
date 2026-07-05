/**
 * Shared component — the one section-header pattern every section uses:
 * mono eyebrow → display title → optional intro, with uniform bottom
 * margin so section rhythm stays consistent page-wide.
 *
 * Changes require review from all 4 founders.
 */
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Set when the section sits on a dark (ink) background. */
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", className)}>
      <p
        className={cn(
          "font-mono text-xs uppercase tracking-widest",
          dark ? "text-contour" : "text-contour-strong",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 max-w-2xl font-body text-base md:text-lg",
            dark ? "text-contour" : "text-contour-strong",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
