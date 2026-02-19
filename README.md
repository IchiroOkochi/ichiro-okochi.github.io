# Ichiro Okochi Portfolio

A polished Next.js + TypeScript portfolio with MDX case studies, accessible interactions, and GitHub Pages static export.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production (static export)

```bash
npm run build
```

Generated files are emitted to `out/`.

## How to customize

### 1) Update core identity and homepage narrative
- Edit hero copy, CTA labels, and section framing in `app/page.tsx`.
- Tweak shell navigation and footer utility copy in `components/site-shell.tsx`.

### 2) Add or edit project case studies
1. Create `content/projects/my-project-slug.mdx`.
2. Add frontmatter keys:
   - `title`, `summary`, `timeline`, `impact`, `tags`, `featured`, `role`, `tech`, `cover`
3. Keep sections in this order:
   - Overview, Role, Problem, Constraints, Approach, Architecture, Results, Learnings, Next Steps
4. Add cover assets in `public/` and reference with `/asset-name.ext` in `cover`.

### 3) Tune design language
- Global spacing, typography, and motion tokens are in `app/globals.css`.
- Reusable card visuals live in `components/project-card.tsx` and `components/highlight-reel.tsx`.
- Hero interactive visual can be adjusted in `components/hero-signal.tsx`.

### 4) Adjust command palette destinations
- Add quick links and search metadata in `components/command-palette.tsx`.
- Keyboard behavior (`⌘K`/`Ctrl+K`, arrows, Enter, Esc) is managed in the same component.

### 5) Edit structured profile data
- Highlights: `data/highlights.json`
- Experience: `data/experience.json`
- Skills: `data/skills.json`

## GitHub Pages deploy

This repo is configured for static export + project-site base path in `next.config.mjs`:
- `output: "export"`
- `basePath: "/ichiro-okochi.github.io"` when running in GitHub Actions/production
- `assetPrefix: "/ichiro-okochi.github.io/"` in the same environments
- `images.unoptimized: true`

Deploy flow:
1. Push to `main`.
2. GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the `out/` directory.
3. Ensure Pages source is set to **GitHub Actions**.

## Follow-ups

- Replace Formspree placeholder endpoint in `app/contact/page.tsx`.
- Add real screenshots and project visuals in `public/`.
- Add `public/resume.pdf`.
