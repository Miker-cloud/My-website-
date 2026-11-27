# Tarian's Platform — Prototype

An investor-ready, **locally runnable** demonstration of the Tarian's enterprise:
**Education · AI · Plant-based products** — Japan & Asia first.

> Mock data only. No deployments, no purchases, no paid cloud resources.
> Every external integration is clearly labeled as **proposed** and stubbed.

## Modules

- **Marketplace** — global plant-based products, filter by region.
- **Vendor storefronts** — independent branded shops (`/vendors/[slug]`).
- **Cloud kitchen** — prepared-meal commerce.
- **Education** — courses + an AI tutor (scripted).
- **Tarian's LIVE** — live-shopping stage with a conversational AI host (scripted).
- **AlphaDataCenter.ai** (`packages/ai`) — mock AI service layer: `chat`, `recommend`, `verify`, `personalize`.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build of the web app
npm run typecheck   # type-check all workspaces
```

## Architecture

A TypeScript monorepo (npm workspaces):

```
apps/web            Next.js app (UI + internal mock API)
packages/types      shared domain contracts
packages/mock-data  fixtures (products, vendors, meals, courses, characters)
packages/ai         AlphaDataCenter.ai mock service layer
```

See [`docs/VISION.md`](docs/VISION.md), [`docs/SPECIFICATION.md`](docs/SPECIFICATION.md),
and [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Proposed external integrations (NOT active)

Payments · LLM provider · identity/KYC · database · real-time video · cloud hosting · object storage.
Each is a separate, approval-gated decision — see the specification.
