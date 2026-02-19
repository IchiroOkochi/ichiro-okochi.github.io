# Next.js Portfolio (GitHub + Vercel Ready)

A modern, responsive portfolio website built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

## Features

- App Router architecture (`app/`)
- TypeScript throughout
- Tailwind CSS with custom theme tokens
- Dark mode by default + theme toggle
- Framer Motion hero animations
- Data-driven content via typed files:
  - `data/projects.ts`
  - `data/skills.ts`
  - `data/experience.ts`
- Accessible, responsive sections:
  - Hero
  - About
  - Projects
  - Skills
  - Experience
  - Contact
  - Footer

## Project Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css
components/
  navbar.tsx
  hero.tsx
  about-section.tsx
  projects-section.tsx
  skills-section.tsx
  experience-section.tsx
  contact-section.tsx
  footer.tsx
  theme-provider.tsx
  theme-toggle.tsx
data/
  projects.ts
  skills.ts
  experience.ts
public/
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 3) Production build

```bash
npm run build
```

## Deployment

### Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Use default settings (Next.js framework detected automatically).
4. Deploy.

### Deploy static output to GitHub Pages

This repository is configured with a GitHub Pages-friendly Next.js config (`basePath` + static export in CI).

1. Push changes to `main`.
2. Ensure GitHub Pages is set to **GitHub Actions** in repository settings.
3. The Pages workflow builds and publishes the site.

## Content Customization

Update typed data files to replace placeholder content with your own:

- `data/projects.ts`
- `data/skills.ts`
- `data/experience.ts`

## Notes

- Keep assets (images, icons, resume) in `public/`.
- For external links, include `target="_blank" rel="noreferrer"`.
- Dark mode is default and can be toggled in the header.
