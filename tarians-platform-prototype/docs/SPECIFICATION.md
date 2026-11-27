# Tarian's Platform — Development Specification

**Status:** Prototype (investor demonstration) · **Data:** Mock only · **Deploy:** Local only

This document specifies the product and the demo prototype. It is written to be
investor-ready: it states what the platform is, what the demo proves, and what
remains as future (clearly-labeled) integration work.

---

## 1. Product overview

Tarian's is a plant-based enterprise platform unifying three pillars —
**Education, AI, and Plant-based products** — into one consumer experience,
powered by the **AlphaDataCenter.ai** infrastructure layer.

### Modules

| # | Module | Prototype scope | Future (proposed) |
|---|--------|-----------------|-------------------|
| 1 | **Marketplace** | Browse/filter mock products across regions, product detail, add-to-cart | Real inventory, search ranking, recommendations |
| 2 | **Vendor Storefronts** | Independent branded shops with their own product sets | Vendor onboarding, payouts, analytics dashboards |
| 3 | **Cloud Kitchen** | Prepared-meal menus, lead-time & region availability | Live kitchen capacity, logistics/delivery APIs |
| 4 | **Education** | Courses, lessons, AI tutor Q&A (scripted) | Real LLM tutor, progress tracking, certification |
| 5 | **AI (AlphaDataCenter.ai)** | Mock AI services: chat, recommend, verify, personalize | Real LLM, identity/KYC, data & verification |
| 6 | **Tarian's LIVE** | Interactive live-shopping with conversational AI characters (scripted) | Real-time video, LLM characters, live checkout |

---

## 2. Functional requirements

### 2.1 Marketplace
- List products with region, category, price (multi-currency display), vendor, dietary tags.
- Filter by region (Japan/Asia-first), category, and dietary attribute.
- Product detail page with vendor link and "add to cart".
- Cart with running total in the active currency.

### 2.2 Vendor storefronts
- Each vendor has a branded storefront page (logo, story, region, product list).
- Vendors are independent: products belong to a vendor and surface both in the global marketplace and the vendor's own store.

### 2.3 Cloud kitchen
- Menu of prepared plant-based meals with preparation lead time and serving region.
- "Order" adds to the same cart model as marketplace products.

### 2.4 Education
- Course catalog → course → lessons.
- An **AI Tutor** panel answers questions. In the prototype, responses come from a
  scripted knowledge base (no paid LLM). Clearly labeled "Demo AI".

### 2.5 AI services (AlphaDataCenter.ai)
A single internal service module exposing four capabilities, all mock:
- `chat(characterId, message)` → scripted character reply.
- `recommend(context)` → ranked mock products.
- `verify(subject)` → mock identity/age/vendor verification result.
- `personalize(userId)` → mock preferences/locale.

### 2.6 Tarian's LIVE
- A live-shopping stage featuring **conversational AI characters** (e.g. a host chef).
- Scripted chat drives product spotlights; viewers can "ask" the character and add
  spotlighted products to the cart.
- Clearly labeled as a demo; real-time streaming + LLM are proposed integrations.

---

## 3. Non-functional requirements

- **Internationalization:** Japanese (日本語) and English, switchable. JPY-first currency with USD display.
- **Local-only:** runs with `npm install && npm run dev`, no external network calls required.
- **Mock data:** all content served from in-repo fixtures via internal API routes.
- **Modularity:** each module is isolated so it can later be extracted into its own service.
- **Scalability-ready:** clear seams (the AI layer, data access, i18n) designed for later replacement by real services.
- **Accessibility & responsive:** usable on desktop and mobile widths.

---

## 4. Explicitly out of scope for the prototype

These are **proposed external integrations**, intentionally NOT active (no paid
resources, no deployments):

| Integration | Replaces mock | Status |
|-------------|---------------|--------|
| Payment processor (Stripe / local JP rails) | fake checkout | PROPOSED |
| LLM provider (for AI tutor + LIVE characters) | scripted replies | PROPOSED |
| Identity / KYC / age verification | `verify()` mock | PROPOSED |
| Cloud hosting & CDN | local dev server | PROPOSED |
| Database (Postgres) | JSON/TS fixtures | PROPOSED |
| Real-time video (WebRTC/HLS) for LIVE | scripted stage | PROPOSED |
| Object storage for media | local/static assets | PROPOSED |

No credentials, API keys, or billing are configured for any of the above.

---

## 5. Acceptance criteria for the demo

- [ ] App builds and runs locally with mock data, no network required.
- [ ] All six modules are reachable and interactive.
- [ ] Language toggle switches EN / 日本語.
- [ ] Currency displays JPY and USD.
- [ ] Cart works across marketplace, vendor stores, and cloud kitchen.
- [ ] AI character chat responds (scripted) in Education and LIVE.
- [ ] Every mocked/proposed integration is labeled in the UI or docs.
