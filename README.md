# orchlon.dev

Personal portfolio of Oscar Chinbat: a single-page, editorial-style site with numbered sections for work, about, experience, education, stack and contact.

## Stack

- **Next.js 16** (App Router) and **React 19**
- **TypeScript**
- **Tailwind CSS 4**: design tokens live in `src/app/globals.css` under `@theme`
- **Framer Motion**: scroll-reveal only, and it respects `prefers-reduced-motion`
- Deployed on **Vercel**

## Editing content

All copy lives in typed data modules, so most updates don't touch a component:

| File | Contents |
| --- | --- |
| `src/data/site.ts` | Name, headline, bio, nav, social links |
| `src/data/projects.ts` | Featured projects and the "Also" archive line |
| `src/data/experience.ts` | Work history and education |
| `src/data/skills.ts` | Stack section |

The types are in `src/types/content.ts`. The résumé is served from `public/resume.pdf`.

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```
