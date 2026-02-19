# Agent Instructions (Portfolio Repo)

## Principles
- Prefer clarity and performance over flash.
- Accessibility is non-negotiable (keyboard nav, aria, reduced motion).
- Keep dependencies minimal.
- Avoid heavy 3D libraries; use CSS/Canvas only if lightweight.

## Code Style
- TypeScript everywhere.
- Components in `components/`, content in `content/`, data in `data/`.
- Use named exports, consistent file naming, and small components.

## Content
- Projects are MDX case studies with the structure:
  Overview, Role, Problem, Constraints, Approach, Architecture, Results, Learnings, Next Steps.

## Deployment
- Must work on GitHub Pages static export with basePath + GitHub Actions.
