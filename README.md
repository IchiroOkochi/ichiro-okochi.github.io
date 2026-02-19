# Ichiro Okochi Portfolio

A modern Next.js + TypeScript portfolio with MDX case studies, interactive filtering, and GitHub Pages static export.

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

Generated files will be in `out/`.

## Add a new project case study

1. Create `content/projects/my-project-slug.mdx`.
2. Add frontmatter keys:
   - `title`, `summary`, `timeline`, `impact`, `tags`, `featured`, `role`, `tech`, `cover`
3. Follow case-study sections:
   - Overview, Role, Problem, Constraints, Approach, Architecture, Results, Learnings, Next Steps
4. Add the image asset under `public/` and reference it in `cover`.

## GitHub Pages deploy

1. Push to `main`.
2. GitHub Actions workflow in `.github/workflows/deploy.yml` builds with `output: "export"` and deploys `out/`.
3. Ensure repository Pages source is set to **GitHub Actions**.

## Required follow-ups

- Replace Formspree placeholder endpoint in `app/contact/page.tsx`.
- Add real screenshots and project visuals in `public/`.
- Add `public/resume.pdf`.
