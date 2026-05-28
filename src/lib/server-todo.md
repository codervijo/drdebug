# Server-side code dropped during the Astro port

The source (`genai/`) was a **TanStack Start** app with a server runtime
(SSR + Nitro/Cloudflare). Astro here is configured for **static output**
(`output: 'static'`), so the framework-specific server code does not
translate. It was intentionally **not** ported. Re-implement only if the
site later needs server behavior (e.g. switch Astro to an SSR adapter and
add API routes / endpoints).

## Dropped files (read-only reference in `genai/src/`)

- **`server.ts`** — TanStack Start SSR entry. Wraps
  `@tanstack/react-start/server-entry`, normalizes h3's swallowed
  catastrophic 500s, and renders a fallback error page.
  - TODO: If SSR is needed, add an Astro server adapter and a middleware /
    error page equivalent. Static builds have no request handler.

- **`start.ts`** — TanStack Start client/runtime bootstrap.
  - TODO: Not needed for Astro; client hydration is handled by Astro
    islands (`client:load` on `LandingPage`).

- **`router.tsx` / `routeTree.gen.ts`** — TanStack Router setup +
  generated route tree.
  - TODO: Replaced by Astro file-based routing under `src/pages/`.

- **`routes/__root.tsx`** — TanStack root route (html shell, `<HeadContent>`,
  `<Scripts>`, QueryClientProvider, 404 + error components).
  - TODO: The html shell + head moved to `src/layouts/Layout.astro`.
    The `@tanstack/react-query` `QueryClientProvider` was dropped (no data
    fetching is used by the landing page). The 404 / error components were
    not ported; add an Astro `src/pages/404.astro` if a custom 404 is wanted.

- **`lib/error-capture.ts` / `lib/error-page.ts`** — SSR error capture and
  HTML error-page renderer used by `server.ts`.
  - TODO: Tied to the SSR runtime; re-add alongside a server adapter only.

- **`lib/config.server.ts`** — server-only config.
  - TODO: Port to env handling if/when SSR is added.

- **`lib/api/example.functions.ts`** — TanStack server functions example.
  - TODO: No equivalent in a static build; would become an Astro endpoint
    (`src/pages/api/*.ts`) under an SSR adapter.

## What WAS ported

- The single route (`routes/index.tsx`, URL `/`) → `src/pages/index.astro`,
  rendering `src/components/LandingPage.tsx` as a `client:load` React island
  (preserves the `useState` waitlist form interactivity).
- Page `<head>` meta (title/description/OG) → `src/pages/index.astro`.
- Global styles (`styles.css`) → `src/styles/global.css` (Tailwind v4 +
  `tw-animate-css`; `@source` path adjusted for the new location).
- shadcn/ui component library (`components/ui/*`), `hooks/use-mobile.tsx`,
  and `lib/utils.ts` → copied verbatim under `src/`.

## Note: the shadcn `ui/` library is copied but not yet wired

`LandingPage.tsx` uses plain HTML elements + Tailwind (no shadcn imports),
so the `components/ui/*` files are currently **inert** (nothing imports
them, so Vite/Astro never compiles them). They were copied verbatim for
fidelity. Two caveats before using them:

1. They import via the `@/` path alias (e.g. `@/lib/utils`). The scaffold
   has no `tsconfig.json` configuring that alias. To use these components,
   add a `compilerOptions.paths` mapping `"@/*": ["./src/*"]` (and the
   matching Vite/Astro alias) — left untouched here per the port rules.
2. Their npm deps (all `@radix-ui/*`, `cmdk`, `vaul`, `sonner`, `recharts`,
   `embla-carousel-react`, `react-day-picker`, `react-hook-form`, etc.) are
   already added to `package.json` so the library is install-ready.
