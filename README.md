# Dynamic Cleaning Vic

Marketing website for [dynamiccleaningvic.com.au](https://dynamiccleaningvic.com.au) — professional window and gutter cleaning across Melbourne's Eastern Suburbs.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- On-page SEO from the Dynamic Cleaning Vic SEO package (metas, schema, suburb pages, CTAs)

## Pages

- `/` homepage
- `/window-cleaning` and `/window-cleaning/[suburb]`
- `/gutter-cleaning` and `/gutter-cleaning/[suburb]`
- `/areas` and `/areas/[suburb]`
- `/about`, `/contact`

Hyphenated SEO URLs such as `/gutter-cleaning-box-hill` redirect to the nested suburb pages.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Quote requests POST to `/api/quote` (validated and logged). Wire this to email or a CRM when you have a provider. The primary conversion path is the click-to-call number **0433 230 310**.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |

## Deploy

Deploy to Vercel (or similar). Set the production domain to `dynamiccleaningvic.com.au` so canonical URLs and sitemap entries match Google Search Console.
