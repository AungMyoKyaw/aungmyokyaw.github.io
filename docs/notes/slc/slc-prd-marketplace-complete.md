---
title: SLC PRD — One-Category Marketplace (Complete Example)
slug: /docs/notes/slc/prd-marketplace-complete
sidebar_position: 7
---

# SLC PRD — One-Category Marketplace (Complete)

## 1. Overview

- Project name: One-Category Market (SLC Launch)
- Date: 2025-08-15
- Owner / PM: [Your name]
- Team: Product, Design, Engineering, Payments, Support

## 2. Target

- Persona (primary): Casual buyer for curated local handmade goods
  - Bio: Value-conscious shopper who appreciates curated selections, clear images, and quick checkout. Uses mobile and desktop; prefers minimal friction.
  - Why: Narrowing to one persona reduces complexity and helps tune delight moments.
- JTBD: "When I want a specific handmade item quickly, I want to find a trustworthy listing and buy with minimal friction so I can receive it without hassle."

- Success metrics
  - Primary activation: user completes first purchase within 3 minutes of entering the category (activation rate target: 15% in beta)
  - Secondary: repeat purchase within 30 days (target: 20% of activated users), order completion rate (target: 95%)

## 3. Scope — Simple (what's IN)

- Core features (minimum to hit activation):
  1. Curated listing page for the category (image, title, price, estimated delivery)
  2. Product detail page with clear buy CTA and seller info
  3. One-page checkout supporting guest or saved card flow

- Out-of-scope (explicit):
  - Multi-category browsing
  - Advanced seller dashboards and analytics
  - Complex search & filtering across categories

## 4. Lovability (1–3 items)

- Lovability item 1: Photo template + progressive image loading
  - Why: high trust signal that increases conversion
  - Effort: small design system component + lazy loading

- Lovability item 2: Friendly post-purchase email with clear delivery expectations and a short thank-you microcopy
  - Why: improves perceived reliability and chances of repeat purchase
  - Effort: small content + triggered email

## 5. Completeness & reliability

- Happy-path acceptance criteria
  1. User finds a product on the curated listing page and opens product details
  2. User clicks buy and completes one-page checkout successfully
  3. User sees order confirmation and receives post-purchase email; order appears in simple orders list for the user and seller

- Error handling & edge cases (minimum):
  - Payment failure: show actionable error and allow retry or alternate payment
  - Inventory race: show out-of-stock message and suggested alternatives
  - Network errors: graceful retry with user-friendly messaging

- Accessibility & performance baseline
  - Keyboard navigation for product cards and checkout
  - ARIA labels for critical controls
  - Color contrast meets WCAG AA for key pages
  - Listing page load target: <2s on 3G emulated mobile (progressively enhanced images)

## 6. Analytics & measurement

- Events to instrument (names)
  - listing_viewed
  - product_viewed (product_id)
  - checkout_started
  - payment_failed (error_code)
  - purchase_completed (order_id, value)

- Dashboards / alerts
  - Checkout funnel visualization
  - Payment failure rate alert (>3% in beta)
  - Seller fulfillment latency dashboard

- User feedback plan
  - Short post-purchase 1–2 question email survey (NPS + comment)
  - Beta feedback collection from 200 users via in-app prompt and support channel

## 7. Launch plan

- Dogfood: internal staff purchases with incentives (1 week)
- Beta: 200 users in a single target city for 3 weeks
- Public launch checklist:
  - Payments tested with common cards
  - Seller on-boarding doc published
  - Support & returns workflow ready
  - Monitoring dashboards live

## 8. Risks & rollbacks

- Known risks
  - Payment fraud (mitigation: manual review and rate limits)
  - Seller fulfillment delays (mitigation: strict SLAs and seller cap in beta)

- Rollback criteria
  - > 5% payment disputes in beta
  - > 10% undelivered orders in beta

## 9. Post-launch

- Initial evaluation window: 30 days
- Decision gates
  - Iterate if activation and order completion meet targets
  - Expand to adjacent categories only after seller fulfillment stabilizes

---

Link back to summary: ../slc/slc-summary
