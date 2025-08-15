---
title: SLC PRD — Marketplace (Example)
slug: /docs/notes/slc/prd-marketplace-example
sidebar_position: 6
---

# Example PRD — Marketplace (SLC)

## 1. Overview

- Project name: One-Category Market (SLC Launch)
- Date: 2025-08-15
- Owner / PM:
- Team: Product, Design, Engineering, Payments

## 2. Target

- Persona (1): Casual buyer for a single category (e.g., local handmade goods)
  - Short bio / context: Value-conscious shopper who prefers curated listings and quick checkout.
  - Why this persona? High intent in a narrow category increases conversion and reduces marketplace complexity.
- Job-to-be-done (JTBD): "When I want a specific handmade item quickly, I want to find a trustworthy listing and buy with minimal friction so I can receive it without hassle."
- Success metric(s):
  - Primary activation event: User completes first purchase within 3 minutes of entering the category.
  - Secondary metrics: Repeat purchase rate within 30 days, order completion rate.

## 3. Scope — Simple (what's IN)

---

title: SLC PRD — Marketplace (Example)
slug: /docs/notes/slc/prd-marketplace-example
sidebar_position: 6

---

# Example PRD — Marketplace (SLC)

## 1. Overview

- Project name: One-Category Market (SLC Launch)
- Date: 2025-08-15
- Owner / PM:
- Team: Product, Design, Engineering, Payments

## 2. Target

- Persona (1): Casual buyer for a single category (e.g., local handmade goods)
  - Short bio / context: Value-conscious shopper who prefers curated listings and quick checkout.
  - Why this persona? High intent in a narrow category increases conversion and reduces marketplace complexity.
- Job-to-be-done (JTBD): "When I want a specific handmade item quickly, I want to find a trustworthy listing and buy with minimal friction so I can receive it without hassle."
- Success metric(s):
  - Primary activation event: User completes first purchase within 3 minutes of entering the category.
  - Secondary metrics: Repeat purchase rate within 30 days, order completion rate.

## 3. Scope — Simple (what's IN)

- Core features:
  1. Curated listing page for the category (images, price, delivery estimate)
  2. Product detail page with buy button
  3. One-page checkout with saved card (or guest checkout)
- Out-of-scope:
  - Multi-category marketplace, complex seller dashboards, advanced search.

## 4. Lovability (1–3 items)

- Lovability item 1: High-quality photography template + consistent product card layout to build trust.
- Lovability item 2: Friendly post-purchase email and order-tracking stub.

## 5. Completeness & reliability

- Happy-path acceptance criteria:
  1. User finds a product and can view details.
  2. User checks out successfully and receives confirmation.
  3. Order is visible in a simple orders list and the seller receives the order.
- Error handling & edge cases:
  - Payment failures with clear, actionable messaging; inventory race conditions.
    -- Accessibility & performance baseline:
  - Accessible product cards, color contrast; page load &lt;2s for listing page.

## 6. Analytics & measurement

- Events to instrument:
  - listing_viewed, product_viewed, checkout_started, purchase_completed, payment_failed
- Dashboards / alerts:
  - Checkout abandonment funnel, payment failure rate, seller fulfillment latency
- User feedback plan:
  - Post-purchase NPS/email survey; customer service ticket tracking.

## 7. Launch plan

- Dogfood: internal purchases for quality validation
- Beta: 200 users in target area for 3 weeks
- Public launch checklist:
  - Payments tested, seller onboarding docs, support ready

## 8. Risks & rollbacks

- Known risks: Payment fraud, seller fulfillment delays; mitigation: manual review and tight seller SLAs initially.
- Rollback criteria: >5% payment disputes or >10% undelivered orders in beta.

## 9. Post-launch

- Initial evaluation window: 30 days; decision gates: iterate if activation and order completion meet targets; expand to adjacent categories when seller fulfillment process stabilizes.
