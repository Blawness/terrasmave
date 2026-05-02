# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm run dev     # dev server (localhost:3000)
npm run build   # static export → ./out/
npm run start   # serve build (requires build first)
npm run lint    # next lint
```

No test framework configured.

## Stack

Next.js 16 (App Router) + TypeScript 5 + React 19, Tailwind CSS 3 + shadcn/ui (stone base), Framer Motion, Lucide React. Path alias `@/*` → project root.

## Critical: Static Export

`next.config.ts` sets `output: "export"` with `images.unoptimized: true`. No SSR, no API routes, no runtime server components. Use plain `<img>` tags — not `next/image`. Build output is `./out/`.

## Architecture

Single-page marketing site (Indonesian) for a homemade organic snacks brand.

```
app/
  page.tsx            — composes all sections: Navbar → Hero → Products → About → WhyUs → CTA → Footer
  layout.tsx          — root layout with Playfair Display + Inter fonts, GA4 placeholder (commented out)
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
- Enable GA4 by uncommenting the script in `layout.tsx` and replacing `GA_MEASUREMENT_ID`

## Deployment

Target: Vercel. Push to GitHub and connect via Vercel dashboard or `vercel` CLI.
