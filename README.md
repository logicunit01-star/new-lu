# Logic Unit — Website

**Operational Control & AI-Enabled Transformation Partner for Distribution & Trading SMEs**

---

## Project Overview

This is the production Next.js website for Logic Unit, built by a simulated senior agency team following a disciplined strategy-first process:

- **CEO / Strategy Director** — Defined positioning, persona (Omar), competitive frame
- **Founder** — Authentic voice, philosophy, quotes
- **Content Strategist** — Full copy across all pages
- **UX/UI Designer** — Design system, wireframes, interaction spec
- **Frontend Developer** — This codebase

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2 | App Router, RSC, SSG |
| React | 18.3 | UI layer |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Layout utilities |
| CSS Custom Properties | — | Design token system |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — nav, footer, metadata
│   ├── page.tsx                # Homepage (/)
│   ├── services/
│   │   └── page.tsx            # Operational Transformation Program (/services)
│   ├── industry/
│   │   └── page.tsx            # Distribution & Trading focus (/industry)
│   ├── about/
│   │   └── page.tsx            # Founder narrative + principles (/about)
│   └── contact/
│       └── page.tsx            # Audit booking form (/contact)
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Fixed nav, mobile menu (client)
│   │   └── Footer.tsx          # Full footer with brand + links
│   ├── sections/
│   │   └── PhaseSelector.tsx   # Interactive 4-phase tab selector (client)
│   └── ui/
│       └── index.tsx           # Reusable: Eyebrow, Heading, PainCard,
│                               #           OutcomeCard, StatCard, Deliverable,
│                               #           PageHero, AmberRule
│
├── styles/
│   └── globals.css             # CSS custom properties + Tailwind base
│
└── lib/                        # Utilities (extend as needed)
```

---

## Design System

### Color Tokens

```css
--color-bg-primary:   #F7F5F0   /* Warm off-white — main background */
--color-bg-surface:   #FDFCF9   /* Card surfaces */
--color-bg-dark:      #1A1A18   /* Dark sections, hero variant */
--color-ink-primary:  #141412   /* All body copy, headings */
--color-ink-secondary:#6B6860   /* Secondary text */
--color-ink-muted:    #A8A49E   /* Captions, meta */
--color-border:       #E8E4DC   /* Dividers, card borders */
--color-amber:        #B8860B   /* CTAs, accents — used sparingly */
--color-sage:         #5C6B5A   /* Deliverables, outcome indicators */
```

### Typography

```css
/* Headings — light weight serif signals authority */
font-family: Georgia, 'Times New Roman', serif;
font-weight: 300;

/* Body + UI — structured neutral sans */
font-family: 'Helvetica Neue', Arial, system-ui, sans-serif;
font-weight: 400;
```

### Key Design Rules
- No gradients anywhere
- No colored section backgrounds (except `#1A1A18` dark sections)
- Amber used only on: CTAs, active states, pull quote markers
- Borders always `0.5px` — thin strokes signal refinement
- Section padding: `100px` vertical, `48px` horizontal
- Max content width: `1140px`

---

## Page Architecture

### Homepage (`/`)
1. **Hero** — Headline + stat stack sidebar
2. **Problem recognition** — Dark section, 4 pain cards
3. **Method** — Interactive phase selector (4 phases)
4. **Proof / Outcomes** — 4 outcome cards
5. **Founder strip** — Quote with attribution
6. **CTA** — Dark section with audit booking card

### Services (`/services`)
- Who it's for
- 5 program stages with timings and deliverables
- Capabilities grid (4 areas)
- CTA

### Industry (`/industry`)
- The distribution operating model
- 5 failure points (dark section)
- Before/After comparison table
- Why distribution specifically
- CTA

### About (`/about`)
- Founder narrative (7 paragraphs)
- 5 operating principles
- Founder quotes grid
- CTA strip

### Contact (`/contact`)
- Form: name, company, email, employee count, challenge description
- Info sidebar: what to expect, who it's for, founder quote
- Success state after submission

---

## Component Reference

### `<Eyebrow>` — Section label
```tsx
<Eyebrow>How we work</Eyebrow>
// Renders: 11px, uppercase, amber, letter-spaced
```

### `<AmberRule>` — Decorative horizontal rule
```tsx
<AmberRule />
// 40px wide, 1px height, amber — used in hero only
```

### `<Heading>` — Section headings
```tsx
<Heading as="h2" size="section" maxWidth="600px">
  We rebuild how your business operates.
</Heading>
// size: 'hero' | 'section' | 'sub'
// dark: boolean — switches to light text
```

### `<PageHero>` — Inner page hero (dark)
```tsx
<PageHero
  eyebrow="What we do"
  heading="The Operational Transformation Program"
  subheading="Optional supporting line..."
/>
```

### `<PainCard>` — Dark background problem cards
```tsx
<PainCard
  number="01"
  title="Your stock count and your sales team..."
  body={<>Inline JSX with <em>emphasis</em> supported</>}
/>
```

### `<OutcomeCard>` — Light background result cards
```tsx
<OutcomeCard
  title="Stock accuracy moves from estimated to verified"
  body={<>JSX body with <strong>bold outcomes</strong></>}
/>
```

### `<StatCard>` — Hero sidebar info blocks
```tsx
<StatCard label="Who we work with" isLast>
  Distribution businesses{' '}
  <span style={{ color: '#B8860B' }}>15–60 employees</span>
</StatCard>
```

### `<Deliverable>` — Phase deliverable indicator
```tsx
<Deliverable text="Operational map with annotated breakdown points" />
// Renders with sage left border
```

### `<PhaseSelector>` — Interactive tab component
```tsx
<PhaseSelector />
// Client component — 4 phase tabs with content panels
// Mobile: horizontal scrollable tabs
```

---

## SEO

Metadata is defined at the page level using Next.js `Metadata` API:

```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description...',
  keywords: ['ERP for distribution', 'operational transformation', ...],
}
```

Root metadata in `layout.tsx` sets:
- Default title template
- OpenGraph tags
- Twitter card
- Robot directives
- `metadataBase` for absolute URL resolution

**Primary keywords targeted:**
- ERP for distribution
- Operational transformation
- Inventory control systems
- Distribution business ERP
- Stock management software
- Trading company ERP

---

## Performance Notes

- All page components are React Server Components by default
- Client components (`'use client'`) used only for:
  - `Navigation` (scroll state, mobile menu)
  - `PhaseSelector` (tab state)
  - `ContactPage` (form state)
- No third-party UI libraries
- No external font loading (system serif/sans stack)
- Images optimized via Next.js `<Image>` when added
- Security headers set in `next.config.js`

---

## Extending the Site

### Adding a new page
```
src/app/new-page/page.tsx
```
Export `metadata` and a default React component. Use `<PageHero>` for the header section and follow the existing section pattern.

### Adding a new reusable component
Add to `src/components/ui/index.tsx` and export. Keep components presentational — no data fetching inside UI components.

### Updating copy
All copy is colocated with the page it belongs to. No CMS is wired up in this version — content lives in the component files directly.

---

## Deployment

Recommended: **Vercel** (zero-config Next.js deployment)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Environment variables needed: none in current version.

---

## Agency Team

| Role | Output |
|---|---|
| CEO / Strategy Director | Positioning, persona (Omar), competitive frame, site architecture |
| Founder | Voice direction, philosophy, all quotes |
| Content Strategist | Full copy: homepage, services, ERP, AI, industry pages |
| UX/UI Designer | Design system, wireframes, interaction spec |
| Frontend Developer | This codebase |

---

*Built to reflect a serious firm. Every design decision is a trust signal.*
