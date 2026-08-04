# klemens-floege.github.io

Personal academic site — [klemens-floege.github.io](https://klemens-floege.github.io).

Built with [Astro](https://astro.build) and TypeScript. Static output, no client-side
framework, no CSS framework. The only JavaScript that ships is the theme toggle and a
scroll listener for the header rule.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check + validate all content frontmatter
npm run build    # static output into dist/
npm run preview  # serve the built site
```

Node 22 or newer.

## Layout

```
src/
  content/
    publications/*.md   # one file per paper
    projects/*.md       # theses, research projects, teaching
  content.config.ts     # Zod schemas — frontmatter is validated at build time
  data/
    profile.ts          # name, role, bio, socials
    career.ts           # experience, education, certifications
  components/           # Icon, LinkBar, AuthorList, rows, theme toggle
  layouts/Base.astro    # <head>, masthead, footer
  pages/
    index.astro         # the single-page homepage
    publications/[id].astro
    projects/[id].astro
  styles/global.css     # design tokens + shared primitives
public/
  pdf/                  # thesis and course PDFs
```

## Adding a publication

Drop a new markdown file into `src/content/publications/`. The filename becomes the URL
slug. Required frontmatter is enforced by the schema in `src/content.config.ts`, so a
missing field or a malformed URL fails `npm run check` rather than shipping broken:

```yaml
---
title: Paper Title
authors: [Klemens Flöge, Co Author]
date: 2025-06-01
venue: Conference on Something
venueShort: CoS 2025 # optional, used in the compact homepage list
kind: conference # journal | conference | workshop | preprint
summary: One or two sentences, used for the meta description.
abstract: The full abstract.
figure: ../../assets/publications/my-figure.png # optional
figureCaption: What the figure shows.
tags: [Topic A, Topic B]
links:
  arxiv: https://arxiv.org/abs/…
  pdf: https://arxiv.org/pdf/…
  code: https://github.com/…
---

Body text, rendered below the abstract.
```

Any name in `authors` matching `AUTHOR_NAME` in `src/data/profile.ts` is bolded
automatically.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which type-checks, builds, and
publishes to GitHub Pages. Pages must be set to **Source: GitHub Actions** in the
repository settings.

## Licence

Site code is MIT licensed (see `LICENSE.md`). Written content, figures and PDFs are
© Klemens Flöge.
