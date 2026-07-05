import { BrainCircuit, Code2, Smartphone } from "lucide-react";
import type { Service } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 */
export const services: Service[] = [
  {
    id: "ai-systems",
    name: "AI Systems",
    description:
      "Retrieval pipelines, document intelligence, and LLM-powered products — built on solid data foundations, deployed on your infrastructure.",
    icon: BrainCircuit,
    tags: ["FastAPI", "LangChain", "RAG", "PostgreSQL"],
    deliverables: [
      "RAG & document pipelines",
      "Custom agents & copilots",
      "Model evaluation & monitoring",
    ],
  },
  {
    id: "custom-software",
    name: "Custom Software",
    description:
      "Web platforms, dashboards, and internal tools that replace spreadsheets and manual workflows with fast, reliable software.",
    icon: Code2,
    tags: ["Next.js", "TypeScript", "FastAPI", "Docker"],
    deliverables: [
      "Web platforms & dashboards",
      "Internal tools & admin panels",
      "API design & integrations",
    ],
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    description:
      "Cross-platform apps that work in the real world — offline-first sync, low-end device performance, and app-store-ready polish.",
    icon: Smartphone,
    tags: ["React Native", "Flutter", "Expo", "Firebase"],
    deliverables: [
      "iOS & Android from one codebase",
      "Offline-first sync",
      "App-store release & maintenance",
    ],
  },
];
