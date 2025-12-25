# [kartikrathee.com](https://kartikrathee-portfolio.pages.dev/)

Personal portfolio website for Kartik Rathee, built with React, TypeScript, and Vite.

## Stack

- React 19
- TypeScript
- Vite
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploy

This is a static site. Any host that can serve the `dist/` directory will work.

### Generic static hosting

1. Run `npm run build`.
2. Upload the contents of `dist/` to your hosting provider.
3. Point the `kartikrathee.com` DNS records to that host.

### Notes for domain setup

- Canonical and social metadata are already configured for `https://kartikrathee.com/`.
- `public/CNAME` is included for GitHub Pages compatibility.
- `robots.txt`, `sitemap.xml`, and `site.webmanifest` are included.

## Content Sources

- Experience and education were pulled from `Software_Engineer_Resume_Kartik_Rathee.pdf`.
- Project cards were derived from local GitHub repositories in `brickster241-repos`.

## Remaining Content To Fill In

- LinkedIn URL
- Final preferred email address
- Any project additions/removals
- Optional headshot or custom social preview image
