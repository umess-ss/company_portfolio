# Contributing

## Stack versions

| Package | Version |
|---|---|
| Next.js | 16.x (16.2.10 at scaffold time, Turbopack default) |
| React | 19.x (19.2.4) |
| Tailwind CSS | 4.x (CSS-first config, no `tailwind.config.js`) |
| shadcn CLI | 4.x (`npx shadcn@latest`, unified `radix-ui` package) |
| Zod | 4.x |
| react-hook-form | 7.x |
| TypeScript | 5.x |

**Node.js >= 20.9.0 is required** (Next.js 16 requirement).

## Module ownership

| Founder | Modules |
|---|---|
| Umesh (@umess-ss) | `modules/hero/` |
| Govinda (@govinda) | `modules/services/`, `modules/work/` |
| Anish (@anish) | `modules/process/`, `modules/contact/` |
| Ayush (@ayush) | `modules/team/`, `modules/footer/` |

Shared files — `app/page.tsx`, `data/`, `lib/` — need review from **all 4 founders**.

## Module rules

1. `app/page.tsx` imports ONLY from module barrels (`modules/*/index.ts`).
2. A module may import from `data/`, `lib/`, `components/ui/` — **never from another module**.
3. Every section component receives typed props; data is wired in `page.tsx`.
4. `app/globals.css` owns all CSS custom properties; modules never define `:root` vars.
5. `components/ui/` holds shadcn primitives — never edit them per-module.

## Branch naming

```
feat/<module>-<short-desc>
```

Example: `feat/hero-real-copy`

## PR rules

- Only edit your own `modules/*` folder.
- Shared files (`app/page.tsx`, `data/`, `lib/`) need all 4 founders to review.

## Local setup

```bash
npm install
npm run dev
```

## Quality gate before every PR

```bash
npm run lint && npm run build
```

Both must pass with **0 errors**.
