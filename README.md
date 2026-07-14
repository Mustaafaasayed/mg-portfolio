# Portfolio

Personal portfolio site — single-page MVP built as a static Next.js export.

## Stack

- **Framework:** Next.js 14 (App Router), static export (`output: 'export'`)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 3
- **UI utilities:** class-variance-authority, clsx, tailwind-merge, lucide-react
- **Package manager:** pnpm
- **Linting / formatting:** ESLint (`next/core-web-vitals`, `jsx-a11y`), Prettier
- **Testing:** Vitest (+ Testing Library for component tests in later phases)
- **Hosting target:** Cloudflare Pages (configured in a later phase)

## Specs & documentation

All product, architecture, design, content, and implementation specs live outside this repo at:

`E:\MG Portfolio\`

Refer to those documents for requirements, conventions, and phase plans — they are not duplicated here.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Produce the static export in `out/` |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format all files with Prettier |
| `pnpm typecheck` | Run TypeScript with `--noEmit` |
| `pnpm test` | Run unit tests (Vitest) |
