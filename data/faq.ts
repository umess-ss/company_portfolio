import type { FaqItem } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * Keep answers honest and specific — these double as the sales
 * script, so never promise here what we wouldn't put in a contract.
 */
export const faq: FaqItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "A focused business website ships in 2–4 weeks. Most custom systems — dashboards, mobile apps, AI products — take 8–14 weeks from kickoff to launch. You get a concrete timeline with milestones before we start, and weekly demos so you always know where things stand.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on scope, so we don't publish flat rates. After a free consultation we send a fixed written quote — no hourly surprises, no hidden line items. If a cheaper path to the same outcome exists, we'll tell you before you commit.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We're happy to sign your NDA before the first detailed conversation, or provide our standard mutual NDA. Client names and data never appear in our portfolio without written permission.",
  },
  {
    question: "Can you maintain or extend software you didn't build?",
    answer:
      "Yes. We start with a short paid audit of the codebase and infrastructure, give you an honest report of what we find, and then quote the maintenance or feature work. If the system is beyond saving, we'll say so and propose a migration path instead.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Always. Support and maintenance is the last step of our delivery process, not an upsell — every project includes a warranty period for fixes, and long-term retainers cover monitoring, security updates, and new features.",
  },
  {
    question: "Can you build AI-powered products?",
    answer:
      "Yes — it's one of our core services. We build chatbots, document AI and OCR pipelines, RAG applications, and internal AI assistants, deployed on your infrastructure so your data stays yours.",
  },
];
