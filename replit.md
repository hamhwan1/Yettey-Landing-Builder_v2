# Yettey Landing Page — replit.md

## Overview

Yettey is a SaaS digital asset management (DAM) platform built by CLOUDIKE Inc. This repository contains the full-stack web application for the **Yettey landing site**, including marketing pages, blog content, product pages, resource guides, a help center, pricing, and legal pages.

The project is structured as a **pnpm monorepo** with separate workspaces for the frontend (Vite + React), API server (Express), shared database layer (Drizzle + PostgreSQL), and generated API client/validation libraries.

The site is conversion-focused: every page is designed to communicate Yettey's value proposition, guide users toward signup, and rank on search engines.

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Monorepo Layout

The project uses **pnpm workspaces** with two top-level directories:

- `artifacts/` — deployable apps
  - `yettey-landing/` — React/Vite frontend (the main SaaS landing site)
  - `api-server/` — Express.js REST API backend
- `lib/` — shared internal libraries
  - `db/` — Drizzle ORM schema + PostgreSQL connection
  - `api-zod/` — Zod validation schemas generated from OpenAPI spec
  - `api-client-react/` — React Query hooks generated from OpenAPI spec
  - `api-spec/` — OpenAPI YAML spec + Orval codegen config

### Frontend (`artifacts/yettey-landing`)

- **Framework**: React 18 with TypeScript
- **Build tool**: Vite with `@tailwindcss/vite` plugin
- **Routing**: `wouter` (lightweight client-side routing)
- **State/data fetching**: TanStack React Query
- **UI components**: shadcn/ui (Radix UI primitives + Tailwind CSS)
- **Animation**: Framer Motion
- **Fonts**: Inter (body) + Outfit (display headings) + Lexend + Manrope from Google Fonts
- **Design system**: Dark-first SaaS aesthetic. Primary background is `hsl(230 25% 7%)` (near-black navy). Primary accent color is purple/violet. CSS variables drive all theme tokens.
- **Component structure**:
  - `src/components/ui/` — shadcn/ui base components
  - `src/components/layout/` — `Navbar` and `Footer` used across all pages
  - `src/components/blog/BlogPostLayout` — shared layout for all blog detail pages
  - `src/components/product/ProductPageLayout` — shared layout for product feature pages
  - `src/pages/` — all page-level components organized by section (blog, resources, product, use-cases)
- **Path alias**: `@/` maps to `src/`; `@assets/` maps to `attached_assets/`
- **Replit plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only)

**Key pages:**
| Route | Page |
|---|---|
| `/` | Home (hero, features, workflow) |
| `/pricing` | Pricing tiers |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual blog post (5 posts implemented) |
| `/guides` | Guides landing page |
| `/guides/:slug` | Guide detail pages (9 guides) |
| `/help` | Help Center |
| `/help/:slug` | Help detail pages |
| `/product/*` | Product feature pages (4 pages) |
| `/use-cases/*` | Use case pages (3 pages) |
| `/login` | Login page (split-screen, Figma-based) |
| `/projects/assets/all-assets` | Preview mode - All Assets dashboard |
| `/projects/assets/collections` | Preview mode - Collections (empty state + create modal) |
| `/projects/assets/trash` | Preview mode - Trash (empty state) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

### Backend (`artifacts/api-server`)

- **Framework**: Express.js v5 with TypeScript
- **Logging**: Pino + pino-http (pretty-printed in dev, JSON in production)
- **CORS**: `cors` middleware, currently open (no origin restriction)
- **Validation**: Zod schemas imported from `@workspace/api-zod`
- **Build**: esbuild (custom `build.mjs` script) targeting ESM output
- **Current routes**: Only `/api/healthz` is implemented — returns `{ status: "ok" }`
- **Entry point**: `src/index.ts` → reads `PORT` env var → starts HTTP server

### Database Layer (`lib/db`)

- **ORM**: Drizzle ORM with `drizzle-kit` for schema management
- **Database**: PostgreSQL via `pg` (node-postgres)
- **Connection**: Pool created from `DATABASE_URL` environment variable
- **Schema**: Currently empty (`src/schema/index.ts` exports nothing) — ready for tables to be added
- **Migrations**: `drizzle-kit push` (schema push, not migration files)
- **Drizzle-Zod**: Used to derive insert/select Zod schemas from Drizzle table definitions

### API Code Generation (`lib/api-spec` + `lib/api-client-react` + `lib/api-zod`)

- **Source of truth**: `lib/api-spec/openapi.yaml` (OpenAPI 3.x YAML)
- **Generator**: Orval (`orval.config.ts`) generates two outputs:
  1. `lib/api-client-react/src/generated/` — React Query hooks + TypeScript types
  2. `lib/api-zod/src/generated/` — Zod validators for request/response shapes
- **Custom fetch**: `lib/api-client-react/src/custom-fetch.ts` wraps native `fetch` with configurable base URL, auth token injection (Bearer), and response type handling
- **Workflow**: Edit `openapi.yaml` → run `pnpm codegen` → generated files are updated → both frontend and backend get type-safe contracts

### TypeScript Configuration

- `tsconfig.base.json` — shared strict compiler options (ES2022, bundler module resolution, strict null checks, no implicit any)
- Per-package `tsconfig.json` files extend base and set `composite: true` for project references
- Root `tsconfig.json` references the three lib packages for type checking

---

## External Dependencies

### Runtime Services

| Service | Purpose | Config |
|---|---|---|
| **PostgreSQL** | Primary database | `DATABASE_URL` env var |
| **Google Fonts** | Inter + Outfit typefaces | CDN link in `index.html` and `index.css` |

### Key npm Dependencies

| Package | Purpose |
|---|---|
| `drizzle-orm` + `drizzle-kit` | Database ORM and schema push |
| `drizzle-zod` | Auto-generate Zod schemas from DB tables |
| `zod` | Runtime validation (shared catalog version) |
| `express` v5 | HTTP server |
| `pino` + `pino-http` | Structured JSON logging |
| `cors` | CORS middleware |
| `@tanstack/react-query` | Server state management in React |
| `wouter` | Lightweight React router |
| `framer-motion` | Page/component animations |
| `tailwindcss` v4 | Utility-first CSS (via `@tailwindcss/vite` plugin) |
| `@radix-ui/*` | Headless accessible UI primitives (full suite) |
| `class-variance-authority` + `clsx` + `tailwind-merge` | Dynamic class composition |
| `lucide-react` | Icon library |
| `orval` | OpenAPI → TypeScript/React Query/Zod codegen |
| `esbuild` | API server bundler |

### Environment Variables Required

| Variable | Used By | Description |
|---|---|---|
| `DATABASE_URL` | `lib/db`, `api-server` | PostgreSQL connection string |
| `PORT` | `api-server`, `yettey-landing` (dev) | HTTP port to listen on |
| `NODE_ENV` | `api-server` | `development` or `production` (affects log formatting) |
| `BASE_PATH` | `yettey-landing` | Optional base URL path prefix (defaults to `/`) |
| `REPL_ID` | `yettey-landing` | Auto-set by Replit; enables Replit dev plugins |