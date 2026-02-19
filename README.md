# Ichiro Okochi Portfolio

Production-ready personal portfolio built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**, exported as static files for GitHub Pages.

## Stack and architecture

- Next.js 14 App Router with static export (`output: "export"`)
- TypeScript across app/components/lib
- Tailwind CSS for styling
- MDX case studies loaded from `content/projects/*.mdx`
- Client-side project search/filter and command palette (`⌘K` / `Ctrl+K`)
- Framer Motion for subtle, reduced-motion-aware transitions
- Theme toggle (light/dark)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build (static HTML)

```bash
npm run build
```

Static output is generated in `out/`.

## All useful commands

```bash
npm install          # install dependencies
npm run dev          # local development server
npm run lint         # lint checks
npm run typecheck    # TypeScript checks
npm run build        # production static export to out/
```

## Add a new project case study

1. Create `content/projects/my-project-slug.mdx`.
2. Add required frontmatter fields:
   - `title`, `summary`, `timeline`, `impact`, `tags`, `featured`, `role`, `tech`, `cover`
3. Keep this section structure in the MDX body:
   - Overview
   - Role
   - Problem
   - Constraints
   - Approach
   - Architecture
   - Results
   - Lessons Learned
4. Add a matching image/SVG to `public/` and reference it via `/file-name.ext` in `cover`.

## GitHub Pages deployment

This repository is configured for user-site deployment with static export.

### What is already configured

- `next.config.mjs`
  - `output: "export"`
  - `images.unoptimized: true`
  - `basePath` and `assetPrefix` set automatically in GitHub Actions for this repository name
- `.github/workflows/deploy.yml`
  - Builds on push to `main`
  - Uploads `out/`
  - Deploys with `actions/deploy-pages`

### How deployment works

1. Push changes to `main`.
2. GitHub Actions runs the Pages workflow.
3. Next.js builds and exports static files to `out/`.
4. Workflow deploys `out/` to GitHub Pages.

## Manual configuration required

1. In GitHub repository settings, set **Pages → Source** to **GitHub Actions**.
2. Ensure Actions permissions allow Pages deployment (default with provided workflow permissions).
3. Replace the placeholder external form endpoint in `app/contact/page.tsx`.
4. Add/update real project visuals in `public/`.

## Notes

- `app/sitemap.ts` and `app/robots.ts` are included for SEO.
- Avoid server-only features (`cookies()`, server actions, dynamic runtime dependencies) so static export remains valid.
