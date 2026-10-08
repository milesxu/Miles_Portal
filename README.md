# Miles Portal

AstroWind-based site for the Miles Xu web presence.

## Stack

- Astro 7
- Tailwind CSS 4
- TypeScript
- Static output suitable for Netlify
- Dark mode and responsive mobile-first layout

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run check
npm run build
```

The public entrypoints are `/` and `/about`; the blog is published separately
at `https://blog.milesxu.com`.

The visual system is intentionally shared between `Miles_Portal` and `Miles_Blog`.
Content and deployment boundaries are documented in the private `Miles_Notes` vault.

AstroWind is used under its MIT license: https://github.com/arthelokyo/astrowind

Pushes and pull requests targeting `main` run the GitHub Actions check/build
workflow. Netlify publishes the generated `dist/` directory.

The previous Vue/Vite entrypoints remain in the working tree as migration
reference files. They are excluded from the Astro typecheck and lint scope;
they can be removed in a later, explicitly reviewed cleanup.
