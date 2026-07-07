import type { LegalDoc } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * Plain-language legal pages for a static, frontend-only site: no
 * accounts, no analytics, no cookies beyond the theme preference.
 * TODO: founders — have a lawyer review before signing enterprise
 * clients; this is a good-faith baseline, not legal advice.
 */

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  updated: "July 7, 2026",
  intro:
    "We keep this simple because the site itself is simple: it is a static website with no user accounts, no tracking scripts, and no advertising. This page explains the little that does happen with your data.",
  sections: [
    {
      heading: "What this site collects",
      body: [
        "Nothing, by default. Browsing this site does not require an account, and we run no analytics, advertising, or tracking scripts. We do not use cookies to identify you.",
        "Your theme choice (light or dark) is stored in your own browser's local storage so the site remembers it on your next visit. It never leaves your device.",
      ],
    },
    {
      heading: "When you contact us",
      body: [
        "The contact form opens your own email client — nothing is sent through our servers. Whatever you choose to include in that email (your name, address, and message) reaches our team mailbox and is used only to reply to you and discuss your project.",
        "We do not sell, rent, or share contact details with third parties. If we stop working together, you can ask us to delete our correspondence at any time.",
      ],
    },
    {
      heading: "Client project data",
      body: [
        "Data we handle while building or maintaining a system for you is governed by the contract for that project, not by this page. As a rule we access production data only when the work requires it, and never use one client's data for another client's benefit.",
      ],
    },
    {
      heading: "Questions",
      body: [
        "Email us and a founder will answer — this is a four-person studio, so the person reading your message is also the person accountable for it.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  updated: "July 7, 2026",
  intro:
    "These terms cover your use of this website. Work we do for clients is governed by a separate written agreement per project.",
  sections: [
    {
      heading: "Use of this site",
      body: [
        "You may browse, link to, and share this site freely. Please don't misrepresent our work as your own, scrape the site to impersonate us, or attempt to disrupt its availability.",
      ],
    },
    {
      heading: "Content and accuracy",
      body: [
        "Case studies, metrics, and service descriptions are presented in good faith and kept as accurate as we can, but they are informational — they are not an offer, quotation, or guarantee of identical results for your project.",
        "We may update or remove content at any time without notice.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The design, text, and original graphics on this site belong to the studio. Client names, product names, and logos referenced here belong to their respective owners.",
      ],
    },
    {
      heading: "No warranty",
      body: [
        "This site is provided as-is. To the extent permitted by law, we are not liable for losses arising from reliance on its content or from temporary unavailability.",
      ],
    },
    {
      heading: "Engaging us",
      body: [
        "Estimates, timelines, and deliverables for actual work are agreed in writing per project. Nothing on this site creates a client relationship by itself — that starts when both sides sign.",
      ],
    },
  ],
};
