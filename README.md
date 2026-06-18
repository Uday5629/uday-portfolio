# Uday — Interactive Engineering Portfolio

An immersive, dark-mode, glassmorphic portfolio built in the design language of Linear / Vercel / Raycast, customized for **Uday — Backend & Infrastructure Engineer**. Inspired by the interaction model of `gen-ai-folio.vercel.app` (see `../ANALYSIS.md`), rebuilt from scratch with original content.

## Tech stack
- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** with CSS-variable design tokens
- **Framer Motion** for all transitions, reveals, parallax, magnetic & tilt effects
- **React Three Fiber** + **three** for the hero particle constellation
- **ShadCN-style UI** primitives (`button`, `card`, `badge`) + **Lucide** icons
- Dark mode by default, full `prefers-reduced-motion` support

## Interactive features
Cursor spotlight (rAF), mouse-reactive 3D particles, dynamic gradient glow, scroll progress bar, scroll-triggered reveals, hero parallax, 3D-tilt project cards with shine, animated/staggered skill cards, magnetic buttons, typewriter role text, animated terminal, scroll-drawn experience timeline, count-up stats, shared-layout animated nav, glassmorphism, copy-email micro-interaction. Full matrix in `../ANALYSIS.md`.

## Getting started
```bash
npm install          # or pnpm install / yarn
npm run dev          # http://localhost:3000
npm run build        # production build
npm run typecheck    # tsc --noEmit
```
> Requires Node 18.18+ (Node 20 LTS recommended).

## Customize (single source of truth)
Edit **`lib/data.ts`** — name, role, taglines, stats, skills, projects, experience, education, certifications, social links, terminal lines, and `resumeUrl`.

Then:
1. Drop your CV at `public/Uday-Resume.pdf` (or change `profile.resumeUrl`).
2. Set `profile.github`, `profile.linkedin`, and `profile.siteUrl`.
3. (Optional) add `public/og.png` (1200×630) and reference it under `openGraph.images` in `app/layout.tsx`.

## Project structure
```
app/        layout (SEO, fonts, JSON-LD), page, globals.css, sitemap.ts, robots.ts
components/ navbar, hero, about, skills, projects, experience, contact, footer, terminal, section-heading
components/effects/  cursor-spotlight, particle-field (R3F), tilt-card, magnetic, reveal, scroll-progress
components/ui/       button, card, badge (shadcn-style)
hooks/      use-section-spy, use-mounted
lib/        data.ts (content), utils.ts (cn)
```

## SEO
Next Metadata API (title template, description, keywords, canonical), OpenGraph + Twitter `summary_large_image`, JSON-LD `Person` schema, dynamic `sitemap.xml` and `robots.txt`. ATS/recruiter-friendly: real semantic headings, plain-text content in the DOM, and a downloadable PDF.

## Accessibility & performance
- Respects `prefers-reduced-motion` (disables particles, parallax, tilt, magnetic, typewriter).
- Keyboard-focusable controls with visible focus rings; ARIA labels on icon links.
- Animates only `transform`/`opacity`; R3F capped at `dpr=[1,1.5]`; `whileInView` uses `once`.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com/new) → **Import** the repo.
3. Framework preset: **Next.js** (auto-detected). Build `next build`, output handled automatically.
4. Set `profile.siteUrl` to your production domain before deploy (used by metadata/sitemap).
5. **Deploy.**

CLI alternative:
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```
