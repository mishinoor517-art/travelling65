# Wayfarer — Premium Travel & Tourism Landing Page

Built with Next.js 15 (App Router), React 18, Tailwind CSS, Framer Motion, and Lucide React.

## Design tokens
- **Primary** `#2563EB` · **Secondary** `#06B6D4` · **Accent** `#F59E0B`
- **Background** `#F8FAFC` · **Text** `#0F172A`
- **Display font**: Fraunces (italic serif, used sparingly for headlines)
- **Body font**: Inter

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx      → fonts, metadata, SEO tags
  page.tsx        → assembles all sections
  globals.css     → glassmorphism, custom cursor, gradients
components/       → one component per section (Navbar, Hero, Destinations, ...)
lib/data.ts       → all copy & content (edit here to change destinations/prices/etc.)
```

## Features implemented
Sticky glass navbar with mobile menu · full-screen hero with search/date/guest widget,
animated plane & clouds · destinations, cities, packages, experiences grids ·
why-choose-us icon cards · masonry gallery with lightbox · auto-sliding testimonials ·
animated stat counters · blog cards · FAQ accordion · contact form + map · footer with
newsletter and Instagram grid · dark mode toggle · back-to-top button · custom cursor
(desktop) · loading screen · scroll-reveal animations throughout via Framer Motion.

## Notes
- Images are served from Unsplash via `next/image` (domain allow-listed in `next.config.js`).
- Swap in your own photography by replacing URLs in `lib/data.ts`.
- The contact form and newsletter form are UI-only — wire them up to your backend or an
  email service (e.g. Resend, SendGrid) in `components/Contact.tsx` and `Footer.tsx`.
