# PulseCRM

Lightweight CRM for founders and small sales teams — Notion-simple, sales-pipeline focused.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- shadcn/ui (Radix) + TanStack Query
- Prisma + PostgreSQL
- NextAuth.js (email/password + optional Google)

## Getting started

```bash
cp .env.example .env
# Set DATABASE_URL to your Neon/Supabase/local Postgres connection string
# Set NEXTAUTH_SECRET (e.g. openssl rand -base64 32)

npm install
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Seed logins

| Email | Password | Role |
|---|---|---|
| `alex@acme.crm` | `password123` | Admin |
| `sam@acme.crm` | `password123` | Member |

Seed includes 24 contacts, 12 deals across stages, activities, notes, and tags.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:seed` | Seed realistic demo data |
| `npm run db:studio` | Prisma Studio |

## Build order

1. ~~Scaffold + schema~~ (this PR)
2. Auth & workspace setup
3. Contacts CRUD
4. Contact detail (timeline / notes / deals)
5. Deals Kanban (`@dnd-kit`)
6. Tasks / activities
7. Global search (⌘K)
8. Dashboard
9. Log call/email shortcuts

## Deploy (Vercel + Neon/Supabase)

1. Create a Postgres database and copy `DATABASE_URL`
2. Deploy to Vercel; set `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`
3. Run `npx prisma migrate deploy` against production (CI or Vercel build hook)
