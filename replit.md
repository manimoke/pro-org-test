# Pakistan Research Organisation

A marketing/registration website for Pakistan Research Organisation, a student-led community that trains undergraduates across Pakistan to design, conduct, and publish original research, backed by an Express API for handling registrations.

## Run & Operate

- `pnpm --filter @workspace/pro-website run dev` — run the marketing website (Vite)
- `pnpm --filter @workspace/api-server run dev` — run the API server (routes mounted under `/api`, e.g. `/api/healthz`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (already provisioned via Replit's managed Postgres)
- `PORT` and `BASE_PATH` are auto-injected by the Replit workflow/artifact system; api-server and pro-website will throw on startup if run manually without them
- Optional env: `GOOGLE_SHEETS_WEBHOOK_URL` — forwards registration submissions to Google Sheets if set

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The zip import did not include `attached_assets/` (referenced via the `@assets` Vite alias). A placeholder logo jpg was generated to unblock the build — replace `attached_assets/466841705_1472768586731673_5806861578105725255_n_1782980480636.jpg` with the real PRO logo.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
