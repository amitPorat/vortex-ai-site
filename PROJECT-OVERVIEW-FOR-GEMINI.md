# Project Overview for Gemini (Image Generation & Context)

This document explains the **Vortex Data & AI** single-page landing site so you (Gemini) can generate fitting images or understand the codebase.

---

## What This Project Is

- **Product:** A boutique **Data Science & AI agency** named **Vortex Data & AI**, targeting enterprise and government (B2B).
- **Site type:** One-page marketing/landing page: hero, value proposition, services, pricing, founder, contact form.
- **Languages:** Bilingual **English** and **Hebrew** (with RTL support for Hebrew).
- **Tech:** Next.js 14, React, Tailwind CSS, Framer Motion. No backend; contact form only logs to the browser console.

---

## Design & Vibe

- **Theme:** Enterprise / government-grade, trustworthy, modern.
- **Colors:** Dark background (midnight blue `#0f172a`), white/light gray text, **teal/cyan accent** (`#06b6d4`) for buttons and highlights.
- **Style:** Glassmorphism cards, subtle gradients and grid in the background, soft glow on primary buttons. Clean, professional, no playful or casual visuals.

---

## Main Files and What They Do

| File / folder | Purpose |
|--------------|--------|
| **`src/app/page.tsx`** | Main page: assembles all sections (Nav, Hero, Problem/Solution, Services, Pricing, Founder, Contact, footer). |
| **`src/app/layout.tsx`** | Root layout: fonts (Inter + Assistant for Hebrew), global styles, language provider. |
| **`src/app/globals.css`** | Global CSS: background gradients, grid pattern, glass style, focus states, soft-glow animation. |
| **`src/lib/content.ts`** | **All copy in one place:** English and Hebrew text for nav, hero, problem/solution, services, pricing, founder, contact. Change text here to edit what appears on the site. |
| **`src/context/LocaleContext.tsx`** | Language state (EN / HE) and direction (LTR / RTL). Used by the language toggle in the nav. |
| **`src/components/Nav.tsx`** | Sticky top bar: logo “Vortex Data & AI”, language toggle (EN / עברית), “Contact Us” button that scrolls to the form. |
| **`src/components/Hero.tsx`** | Top section: headline, subheadline, primary CTA, trust line. Has an optional slot for a hero image (see below). |
| **`src/components/ProblemSolution.tsx`** | “Why us”: two cards — “Traditional pain” (consulting leaves you with slides) vs “Vortex solution” (production code, data engineering, E2E control). |
| **`src/components/Services.tsx`** | Four service cards: Data Audit & Cleansing, Vectorization & AI Prep, Predictive Models & RAG, MLOps & Integration. |
| **`src/components/Pricing.tsx`** | Three steps: Free validation → Fixed-price pilot (PoC) → Retainer (Data Office). |
| **`src/components/Founder.tsx`** | About the founder: name (Amit Porat / עמית פורת), role, LinkedIn, short bio. **Image slot:** placeholder “AP” or a real photo from `public/founder.jpg` (see below). |
| **`src/components/Contact.tsx`** | Contact form: name, work email, company, message. Submit only logs to console; no server. |
| **`src/components/LayoutDir.tsx`** | Sets `dir` and `lang` on the document for RTL/LTR when switching language. |
| **`public/`** | Static assets. Put images here (e.g. `public/founder.jpg`, `public/hero-visual.png`). |
| **`tailwind.config.ts`** | Tailwind theme: colors (midnight, accent teal/blue), fonts, box shadows (glow). |
| **`package.json`** | Scripts: `npm run dev`, `npm run build`, `npm run open` (opens http://localhost:3000 in the default browser). |

---

## Where to Use Images (for Gemini)

Two image slots are prepared in the code. Generate images that match the **enterprise, data/AI, trustworthy** style (no cartoons; professional, clean).

### 1. Hero section (optional)

- **Purpose:** Optional decorative or conceptual visual next to the hero text (e.g. data, analytics, dashboards, abstract tech).
- **File to create:** Save your image as **`hero-visual.png`** in the **`public`** folder.
- **In code:** In `src/components/Hero.tsx` there is a commented block that shows an image. Uncomment it and ensure the `src` points to `/hero-visual.png` (and adjust width/height/class if needed).
- **Suggested prompt for Gemini:** e.g. “Abstract, professional illustration for a data and AI company: data flows, charts, or a modern dashboard style; dark blue and teal tones; no text; suitable for a hero section on a corporate website.”

### 2. Founder photo

- **Purpose:** Professional headshot of the founder (Amit Porat) used in the “About the Founder” section.
- **File to create:** Save the image as **`founder.jpg`** in the **`public`** folder.
- **In code:** In `src/components/Founder.tsx`, set **`hasFounderImage = true`** (it is currently `false`). The component will then show `public/founder.jpg` instead of the “AP” placeholder.
- **Suggested prompt for Gemini:** e.g. “Professional corporate headshot, data scientist or tech leader, neutral background, business casual, confident pose, high quality, suitable for an About page.”

---

## Summary for Gemini

- **Project:** Single-page site for **Vortex Data & AI** (Data Science & AI agency, B2B).
- **Files that matter for content:** `src/lib/content.ts` (all text). **Files that matter for images:** `src/components/Hero.tsx` (optional hero image), `src/components/Founder.tsx` (founder photo), and the **`public/`** folder where you place the image files.
- **Style:** Enterprise, dark theme, teal accent, glassmorphism; images should be professional and on-brand.

Use this overview to generate the right kind of images and to understand which files to edit when adding or changing them.
