# Tarian's Platform — Modular Architecture

**Prototype stack:** TypeScript · Next.js (App Router) · React · Tailwind CSS · npm workspaces monorepo. Mock data via in-app API routes. No external/paid services.

---

## 1. Monorepo layout

```
tarians-platform/
├── apps/
│   └── web/                     # Next.js app (UI + internal API routes)
│       ├── app/                 # App Router pages (one folder per module)
│       │   ├── marketplace/
│       │   ├── vendors/
│       │   ├── kitchen/
│       │   ├── education/
│       │   ├── live/
│       │   └── api/             # internal mock API (marketplace, ai, education…)
│       ├── components/          # shared UI (nav, cart, i18n, character chat)
│       └── lib/                 # client helpers, i18n, cart store
├── packages/
│   ├── types/                   # @tarians/types — shared domain types
│   ├── mock-data/               # @tarians/mock-data — fixtures (products, vendors, courses…)
│   └── ai/                      # @tarians/ai — AlphaDataCenter.ai mock service layer
└── docs/                        # VISION, SPECIFICATION, ARCHITECTURE
```

Each `packages/*` is an independent workspace with its own `package.json`, so a
module can later be promoted to a standalone service without rewrites.

---

## 2. Layered view

```
┌─────────────────────────────────────────────────────────────┐
│  Presentation (Next.js App Router, React, Tailwind, i18n)     │
│  Marketplace · Vendors · Kitchen · Education · LIVE           │
└───────────────┬───────────────────────────────────────────────┘
                │  fetch() internal API
┌───────────────▼───────────────────────────────────────────────┐
│  Internal API (Next route handlers) — the module boundary      │
│  /api/products /api/vendors /api/kitchen /api/courses /api/ai   │
└───────────────┬───────────────────────────────────────────────┘
                │  typed calls
┌───────────────▼───────────────────────────────────────────────┐
│  Domain packages                                               │
│  @tarians/mock-data (fixtures)   @tarians/ai (AlphaDataCenter)  │
│  @tarians/types (contracts)                                    │
└───────────────┬───────────────────────────────────────────────┘
                │  (seam) swappable for real services later
┌───────────────▼───────────────────────────────────────────────┐
│  PROPOSED external layer (NOT active in prototype)             │
│  Postgres · LLM · Payments · Identity/KYC · Video · Storage    │
└─────────────────────────────────────────────────────────────┘
```

The **Internal API** and the **domain packages** form the seam: swapping mock
fixtures for a database, or the scripted AI for a real LLM, happens behind these
contracts without touching the UI.

---

## 3. AlphaDataCenter.ai layer (`@tarians/ai`)

The infrastructure pillar is modeled as a single service interface with four
capabilities, each backed by a mock adapter today and a real adapter later:

| Capability | Prototype adapter | Proposed real adapter |
|------------|-------------------|-----------------------|
| `chat()` | scripted character scripts | LLM (hosted/self-hosted) |
| `recommend()` | rule-based over fixtures | vector search + ranking |
| `verify()` | always-mock result | identity / KYC / age APIs |
| `personalize()` | static locale/prefs | profile + data platform |

Interface is defined in `@tarians/types` (`AiService`) so the adapter is a
drop-in replacement — this is the key scalability seam.

---

## 4. Cross-cutting concerns

- **i18n:** `lib/i18n` dictionary (EN / 日本語), Japan-first. Currency formatter for JPY + USD.
- **Cart:** lightweight client store shared across marketplace, vendors, kitchen, LIVE.
- **Theming:** Tailwind tokens; one design system across modules.
- **Data access:** all through the internal API so the UI never imports fixtures directly.

---

## 5. Scalability path (post-demo, requires approval)

1. Replace `@tarians/mock-data` with a real data service (Postgres + API).
2. Swap the `@tarians/ai` mock adapters for real LLM/identity providers.
3. Extract high-traffic modules (Marketplace, LIVE) into independent services.
4. Add payments, real-time video, storage, and cloud hosting.
5. Region rollout: Japan → Asia → international, driven by the i18n/currency seams.

> Nothing in section 5 is built or provisioned in the prototype. Each step is a
> separate, approval-gated decision.
