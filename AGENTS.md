# AGENTS.md

## Cursor Cloud specific instructions

PulseCRM is a single Next.js 14 (App Router) full-stack app (TypeScript, Prisma + PostgreSQL, NextAuth). Standard scripts live in `package.json` and setup steps in `README.md`; only the non-obvious cloud caveats are captured here.

### Services & how to run them
- Web app (UI + API routes): `npm run dev` → http://localhost:3000. This is the only long-running service.
- PostgreSQL: required, but not containerized in-repo. The cloud VM uses a locally-installed Postgres 16 cluster with DB `pulsecrm` and role `pulse`/`pulse`. It is NOT started automatically on boot — start it each session with `sudo pg_ctlcluster 16 main start` before running the app, migrations, or seed.

### Environment
- `.env` is gitignored and already present in the VM (persisted via snapshot) with a local `DATABASE_URL` (`postgresql://pulse:pulse@127.0.0.1:5432/pulsecrm?schema=public`) and a generated `NEXTAUTH_SECRET`. If `.env` is missing, copy `.env.example` and set those two values.

### Non-obvious gotchas
- Seeding: `npm run db:seed` runs `tsx prisma/seed.ts` directly, which does NOT auto-load `.env`, so it fails with `Environment variable not found: DATABASE_URL`. Use `npx prisma db seed` instead (the Prisma CLI loads `.env`), or export `DATABASE_URL` in the shell first.
- Standalone scripts that import `@prisma/client` must be run from the repo root (module resolution needs the workspace `node_modules`); a script placed in `/tmp` cannot resolve `@prisma/client`.
- This app is an early scaffold. The login/signup/contacts UI forms and buttons are intentionally disabled stubs ("wired in next slice"). Real, working functionality today is limited to: the NextAuth **credentials** login API (`/api/auth/callback/credentials`, backed by a real DB lookup + bcrypt check) and the Prisma data layer against the seeded DB. Do not expect the UI forms to submit.

### Verify / test
- Lint: `npm run lint`. Build: `npm run build` (runs `prisma generate` first). No automated test suite exists.
- Seed logins: `alex@acme.crm` / `password123` (admin), `sam@acme.crm` / `password123` (member).
