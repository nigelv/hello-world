# Dynamic Cleaning VIC

Modern, mobile-first Next.js website for [Dynamic Cleaning Victoria](https://dynamiccleaningvic.com.au) — window, gutter and pressure cleaning across Melbourne’s eastern suburbs.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Deploy-ready for Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Deploy on Vercel

Connect this repository to Vercel. The default Next.js settings work with `vercel.json`.

Set the production domain to `dynamiccleaningvic.com.au` in the Vercel project settings.

### Analytics & Search Console

Copy `.env.example` to `.env.local` (or set in Vercel):

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 ID
- `NEXT_PUBLIC_GSC_VERIFICATION` — Google Search Console HTML tag verification value

Update `SITE.googleBusinessUrl` in `src/lib/constants.ts` with your live Google Business Profile link when claimed.
