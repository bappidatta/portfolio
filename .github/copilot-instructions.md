# Portfolio Project — Copilot Instructions

## Project Overview
Personal portfolio website for a software engineer, built with **Astro 5** (static output).
Purpose: hiring/portfolio showcase with projects, resume, blog, and contact sections.

## Commands
- `npm run dev` — dev server
- `npm run build` — production build (verify with this after changes)
- `npm run preview` — preview built site

## Structure
- `src/config.ts` — **single source of truth**: name, bio, site URL, socials, resume URL, analytics provider (plausible/umami/null). Edit this to personalize.
- `src/content.config.ts` — type-safe content collection schemas (projects, blog)
- `src/content/projects/*.md` — project entries (frontmatter: title, description, tags, demoUrl, repoUrl, featured, order, date)
- `src/content/blog/*.md` — blog posts (frontmatter: title, description, tags, date, draft)
- `src/layouts/BaseLayout.astro` — SEO meta, Open Graph, JSON-LD Person schema, no-flash theme script, analytics hooks
- `src/components/` — Header (with theme toggle), Footer, ProjectCard
- `src/pages/` — index, projects, resume, blog (+ [...id]), contact, 404, rss.xml.js
- `src/styles/global.css` — theming via CSS custom properties (`:root` / `:root.dark`), vanilla CSS, no Tailwind
- `public/` — favicon.svg, robots.txt; add `resume.pdf` here

## Conventions
- Theming: use CSS variables (`var(--bg)`, `var(--accent)`, etc.), never hardcoded colors
- Dark mode: toggle adds `.dark` class on `<html>`, persisted in localStorage; inline script in BaseLayout prevents flash
- Content: add markdown files to `src/content/` — schemas validate frontmatter automatically
- Contact form uses Formspree — placeholder `YOUR_FORM_ID` in `src/pages/contact.astro` needs replacing
- Analytics disabled by default; enable via `SITE.analytics.provider` in config

## Pending TODOs
- Replace placeholder personal info in `src/config.ts` and sample content
- Add `public/resume.pdf`
- Set real Formspree form ID in contact page
- Set production URL in `SITE.url` (affects sitemap, RSS, canonical links) and `public/robots.txt`

## Verification
After edits, run `npm run build` — should complete with all pages generated and no errors.
