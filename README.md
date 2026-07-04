# company_portfolio

Official portfolio website for our 4-person software studio in Kathmandu — AI systems, custom software, and mobile apps. One scrollable page, modular by section so four founders can work in parallel without merge conflicts.

**Live:** _URL coming soon_

![Next.js 16](https://img.shields.io/badge/Next.js-16-black) ![React 19](https://img.shields.io/badge/React-19-61dafb) ![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-CLI%204-111) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

Resolved versions at scaffold time: `next@16.2.10` · `react@19.2.4` · `tailwindcss@4.x` · `shadcn@4.13.0` · `zod@4.4.x` · `react-hook-form@7.80.x` · Node.js >= 20.9.0 required.

## Module ownership

| Module | Owner | File |
|---|---|---|
| navbar | Umesh | `modules/navbar/Navbar.tsx` |
| hero | Umesh | `modules/hero/Hero.tsx` |
| services | Govinda | `modules/services/Services.tsx` |
| work | Govinda | `modules/work/Work.tsx` |
| process | Anish | `modules/process/Process.tsx` |
| contact | Anish | `modules/contact/Contact.tsx` |
| team | Ayush | `modules/team/Team.tsx` |
| footer | Ayush | `modules/footer/Footer.tsx` |

Shared files (`app/page.tsx`, `data/`, `lib/`) require review from all 4 founders.

## Setup

```bash
npm install       # Node 20.9+ required
npm run dev       # Turbopack dev server
npm run lint && npm run build   # quality gate before any PR
```

## Folder structure

```
app/            layout (fonts, metadata, JSON-LD), page compositor, globals.css,
                sitemap.ts, robots.ts, actions/contact.ts (server action)
modules/        one folder per section, one owner per folder, barrel exports
data/           site.ts, services.ts, projects.ts, team.ts — all content lives here
lib/            types.ts (shared interfaces), utils.ts (cn helper)
components/ui/  shadcn primitives — never edit per-module
public/         placeholder/ SVG covers for projects
.github/        CODEOWNERS ownership map
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for branch naming, PR rules, and the module import rules.
