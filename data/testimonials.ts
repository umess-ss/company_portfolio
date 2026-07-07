import type { Testimonial } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * TODO: founders — these are drafts pending client sign-off. Get
 * written approval for each quote (and for naming the client) before
 * launch; never publish a testimonial the client hasn't confirmed.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "They delivered our ERP ahead of schedule, and the handover was clean enough that our own staff run it day to day.",
    attribution: "Restaurant Owner",
    organization: "Restaurant chain · Kathmandu",
  },
  {
    quote:
      "Professional communication from start to finish — weekly demos, honest estimates, and no surprises at delivery.",
    attribution: "School Director",
    organization: "Private school · Bagmati",
  },
  {
    quote:
      "Our AI chatbot reduced support time significantly. Most routine questions never reach a human anymore.",
    attribution: "Startup Founder",
    organization: "SaaS startup · Lalitpur",
  },
];
