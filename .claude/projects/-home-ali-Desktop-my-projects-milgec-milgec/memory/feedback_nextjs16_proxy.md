---
name: Next.js 16 proxy replaces middleware
description: In Next.js 16, middleware.ts was renamed to proxy.ts with exported function proxy() — this is a framework change, not a custom rename
type: feedback
---

In Next.js 16, the middleware concept was replaced: `middleware.ts` → `proxy.ts`, exported function `middleware()` → `proxy()`.

**Why:** Next.js changed the concept and naming in v16. This is NOT a custom project decision — it's how the framework works now.

**How to apply:** Never create `middleware.ts` in Next.js 16+ projects. Use `proxy.ts` with `export function proxy()` for request interception logic.
