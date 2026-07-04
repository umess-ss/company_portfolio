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

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientName: string | null;
  serviceName: string;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  outcomes: string;
  metrics: ProjectMetric[];
  techStack: string[];
  coverPlaceholderColor: string;
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
