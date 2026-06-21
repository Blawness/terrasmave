# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (see `pnpm-lock.yaml`). Use `pnpm`, not `npm`.

```
pnpm dev     # dev server (localhost:3000)
pnpm build   # production build (.next/)
pnpm start   # serve production build (requires build first)
pnpm lint    # next lint
```

No test framework configured.

## Stack

Next.js 16 (App Router) + TypeScript 5 + React 19, Tailwind CSS 3 + shadcn/ui (stone base), Framer Motion, Lucide React. Path alias `@/*` → project root.

## Rendering

`next.config.ts` runs a full Next.js server (SSR/SSG) — `output: "export"` was removed. Pages are still prerendered as static where possible, but API routes, server components, and the image optimizer are available. Use `next/image` (not plain `<img>`); remote images come from `images.unsplash.com`, allowlisted in `next.config.ts` under `images.remotePatterns`.

## Architecture

Single-page marketing site (Indonesian) for a homemade organic snacks brand.

```
app/
  page.tsx            — composes all sections: Navbar → Hero → Products → About → WhyUs → CTA → Footer
  layout.tsx          — root layout with Playfair Display + Inter fonts, Vercel Analytics + Speed Insights (GA4 placeholder still commented out)
  globals.css         — shadcn theme vars + custom .velato-* utility classes
  components/         — one .tsx file per page section (7 total, all "use client")
  data/products.ts    — product catalog array (name, desc, price, tag, Unsplash URL)
components/ui/        — shadcn components (only Button installed)
lib/utils.ts          — cn() helper (clsx + tailwind-merge)
```

## Conventions

- Custom Tailwind utilities use `.velato-*` prefix, defined in `app/globals.css`
- Edit `app/data/products.ts` to change the product catalog
- WhatsApp CTA links to `https://wa.me/6281281818892`
- No `public/` directory — all images are external Unsplash URLs
- To add shadcn components: `npx shadcn@latest add <component-name>`
- Analytics: Vercel Analytics + Speed Insights are wired in `layout.tsx` (auto-enabled on Vercel). GA4 placeholder remains commented out — uncomment and replace `GA_MEASUREMENT_ID` if also using GA4

## Deployment

Target: Vercel. Push to GitHub and connect via Vercel dashboard or `vercel` CLI.
