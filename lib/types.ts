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
  phone: string;
  location: string;
  responseTime: string;
  foundedYear: number;
  social:{
    github: string;
    linkedin: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  /** Detail-page paragraphs (/services/[id]) — plain language. */
  details: string[];
}

export interface Technology {
  id: string;
  name: string;
  label: string;
  summary: string;
  /** Official brand logo — 24x24 SVG path data from simple-icons. */
  iconPath: string;
  /** Official brand hex (no #). Near-black logos render as currentColor. */
  hex: string;
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
  category: string;
  date: string;
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
  coverImage: string;
  screen: ProductScreen;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  skills?: string[];
  github?: string;
  linkedin?: string;
  photo: string | null;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  /** Role-based attribution ("School Director") until naming permission exists. */
  attribution: string;
  /** Sector / location line, e.g. "Restaurant chain · Kathmandu". */
  organization: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LegalSection {
  heading: string;
  /** Each string renders as one paragraph. */
  body: string[];
}

export interface LegalDoc {
  title: string;
  /** Human-readable "last updated" date, e.g. "July 7, 2026". */
  updated: string;
  intro: string;
  sections: LegalSection[];
}
