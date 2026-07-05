import type { LucideIcon } from "lucide-react";

/**
 * Shared file — all cross-module TypeScript interfaces live here.
 * Changes require review from all 4 founders.
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  location: string;
  responseTime: string;
  foundedYear: number;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

/** Which code-drawn mockup ProductFrame renders as a project's cover art. */
export type ProductScreen = "fleet" | "hospital" | "docs" | "banking";

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientName: string | null;
  serviceName: string;
  year: number;
  durationWeeks: number;
  teamSize: number;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  outcomes: string;
  metrics: ProjectMetric[];
  techStack: string[];
  screen: ProductScreen;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  skills: string[];
  github: string;
  linkedin: string;
  photo: string | null;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organization: string;
}
