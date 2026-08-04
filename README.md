# VK RCC — Construction Company Website

A full multi-page React JS + Material UI website for an RCC/civil
construction company, built with React Router, Framer Motion, and
React Slick, per the project brief.

## Tech stack

- React 18 + Vite
- Material UI (MUI) v5 + MUI Lab (Timeline)
- React Router DOM v6
- Framer Motion (scroll/fade/slide animations)
- React Slick (testimonial slider)
- React Icons
- Axios (placeholder API service, ready to wire to a backend)

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Pages & routes

| Route | Page |
|---|---|
| `/` | Home — hero, stats, why-us, services, featured projects, process preview, testimonials, blog, CTA |
| `/services` | All services as cards |
| `/process` | Vertical animated timeline, 9-step process |
| `/projects` | Project grid with category filter + search |
| `/projects/:id` | Full project detail — gallery lightbox, before/after/drone toggle, project info table, materials, amenities, client review, map |
| `/about` | Story, vision, mission, values, team, timeline, certificates |
| `/blogs` | Blog grid with category filter + search |
| `/blogs/:id` | Full article, share buttons, comment form, related articles |
| `/contact` | Contact form, office info, WhatsApp button, embedded map |
| `*` | 404 Not Found |

## Design

- **Palette**: Construction Orange `#F59E0B` (primary), Steel Blue `#1E3A8A`
  (secondary), Concrete White `#F5F5F5` (background), Charcoal `#1F2937`
  (dark/text), Accent `#EF6C00`. Full light/dark mode support — toggle in
  the navbar.
- **Type**: Poppins (headings), Inter (body), Roboto Mono (labels/data).
- All theme tokens live in `src/theme/theme.js`.

## Included features

- Sticky navbar with mobile drawer menu and dark mode toggle
- Framer Motion scroll-reveal animations throughout
- React Slick testimonial carousel
- Custom lightbox gallery with keyboard navigation (Esc / arrow keys)
- Before/after/drone image toggle on project details
- Search + category filtering on both Projects and Blog pages
- Floating WhatsApp button and back-to-top button
- Breadcrumb navigation on every inner page
- Google Maps embed (no API key required) on project details and contact
- Loading skeleton component (`SkeletonCard`) ready for async data states
- Lazy-loaded images throughout
- Fully responsive: desktop, tablet, mobile

## Content is placeholder — swap in your real data

Everything is data-driven from `src/data/`:

- `services.js` — 10 services
- `projects.js` — 6 sample projects with full detail-page content
- `blogs.js` — 6 sample articles
- `misc.js` — team, timeline, certificates, testimonials, process steps, stats

Update these files with your real company content, images, and contact
details — the pages will pick everything up automatically since they're
built from this data.

## Notes on features that need your own backend

- **Contact form**: currently shows a success message on submit but
  doesn't send anywhere. Wire `src/pages/Contact/Contact.jsx`'s
  `handleSubmit` to `src/services/api.js`, or a form provider like
  Formspree or EmailJS.
- **Blog comments**: stored in local component state only (resets on
  page reload). Connect to a backend or a service like Disqus for
  persistent comments.
- **Images**: currently pulled from Unsplash as placeholders. Replace
  with your own project photography before going live.
- **SEO meta tags**: each page sets `document.title`. For full meta tag
  control (Open Graph, descriptions per page), add `react-helmet-async`.
