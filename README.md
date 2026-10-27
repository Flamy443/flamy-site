# Flamy site

Marketing site for Flamy (CRO, SEO & UI/UX agency), built with Next.js (App Router) and TypeScript.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

- `app/` — one route per page (`/`, `/services`, `/portfolio`, `/pricing`, `/about`, `/contact`, `/service-*`, `/work-*`); `globals.css` holds the site styles
- `components/` — `Nav`, `Footer`, scroll `Reveal`, `VideoModal`/`VidButton`, `PricingTabs`, `PortfolioGrid`, `ContactForm`, `SafeImg`
- `public/images/<project>/` — case-study images (`cover.jpg`, `hero.jpg`, `1.jpg` …); missing files fall back to the CSS placeholder

Client video testimonials: set the `video` prop on a `VidButton` to a YouTube/Vimeo embed URL or an `.mp4` path.
