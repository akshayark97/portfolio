# Akshay — Portfolio

A dark, editorial developer portfolio built with **Next.js 16, Tailwind CSS 4, and Motion**. Design inspired by Shopify Editions: big display type, mono labels, acid-lime accent, kinetic marquee, scroll-reveal animations.

## Run it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customize everything in one file

All content lives in **`src/lib/data.ts`** — no component edits needed:

| What | Where in `data.ts` |
| --- | --- |
| Name, role, headline, email, location | `site` |
| Availability badge | `site.available` / `site.availableText` |
| Social links (GitHub, LinkedIn, X) | `site.socials` — **replace `your-username`** |
| Skill ticker in hero | `marqueeItems` |
| Projects (title, description, tags, link, gradient art) | `projects` |
| Skill groups | `skillGroups` |
| Work history | `experience` |
| Bio + pull-quote | `about` |
| Stats row | `stats` |

## Your resume

Replace **`public/resume.pdf`** with your real resume (keep the filename, or update `site.resumeUrl` in `data.ts`). The current file is a placeholder.

## Change the look

- **Colors**: edit the `@theme` block in `src/app/globals.css` (`--color-accent` is the lime; try `#ff5c38` for orange or `#7c5cff` for violet).
- **Fonts**: swap the Google fonts in `src/app/layout.tsx` (`Space_Grotesk` = display, `Inter` = body, `JetBrains_Mono` = labels).
- **Grain texture**: remove the `noise` class from `<body>` in `layout.tsx` to disable it.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config needed.
