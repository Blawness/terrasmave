# AGENTS.md — Terrasmave

## Project

Static landing page for **Terrasmave** (homemade organic ice cream sandwiches). Indonesian language (`lang="id"`).

## Stack

- Next.js 16 (App Router) + TypeScript 5 + React 19
- Tailwind CSS 3 + shadcn/ui (stone base, CSS variables)
- Framer Motion (animations), Lucide React (icons)
- Path alias: `@/*` → project root
- Playwright (E2E testing)
- Package manager: pnpm

## Commands

```
pnpm dev     # dev server
pnpm build   # static export → ./out
pnpm start   # serve build (requires build first)
pnpm lint    # next lint
pnpm test:e2e  # Playwright E2E tests
```

## Critical: Static Export

`next.config.ts` sets `output: "export"` with `images.unoptimized: true`.

- **No SSR, no API routes, no server components that need runtime.** Everything must be statically renderable.
- Do not use `next/image` — images are plain `<img>` tags with external URLs (Unsplash).
- Build output goes to `./out/` (not `.next/`).

## Architecture

```
app/
  page.tsx              — single-page composition (Navbar → Hero → Products → About → WhyUs → CTA → Footer)
  layout.tsx            — root layout (Playfair Display + Inter fonts, GA4 placeholder commented out)
  globals.css           — shadcn theme + custom .velato-* utility classes
  components/           — page section components (8 .tsx files including FadeIn)
  data/products.ts      — ice cream sandwich variants (name, desc, price, tag, Unsplash image URL)
components/
  ui/button.tsx         — only shadcn component installed
lib/utils.ts            — cn() helper (clsx + tailwind-merge)
```

## shadcn/ui

Only `Button` is installed. To add components:

```
pnpm dlx shadcn@latest add <component-name>
```

Config is in `components.json` — aliases point to `@/components/ui`.

## Conventions

- Custom CSS utility classes use `.velato-*` prefix (defined in `app/globals.css`)
- Product data lives in `app/data/products.ts` — ice cream sandwich variants only (Cokelat, Vanilla, Strawberry, Matcha, Red Velvet, Cookies & Cream), all priced at Rp 15.000
- WhatsApp deep link: `https://wa.me/6281281818892`
- No `public/` directory exists; all images are external URLs
- GA4 script in `layout.tsx` is commented out — uncomment and replace `GA_MEASUREMENT_ID` to enable

## Playwright Setup

Playwright browsers require system dependencies (libnspr4, libnss3, libasound2). On this Ubuntu 24.04 environment they were extracted locally to `~/.local/playwright-deps/` and `LD_LIBRARY_PATH` is set automatically in `playwright.config.ts` so tests run without root access.

## Deployment

Target: Vercel (`*.vercel.app`). Push to GitHub and connect via Vercel dashboard or `vercel` CLI.
