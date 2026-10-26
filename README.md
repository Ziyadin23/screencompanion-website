# ScreenCompanion website

A static English/Russian landing website for [ScreenCompanion](https://github.com/Ziyadin23/ScreenCompanion). Built with Astro, TypeScript, custom CSS, and self-hosted Manrope. The split cyan/blush hero, black borders, and original SVG desktop illustration follow the supplied design reference.

## Local development

Use **Node.js 22.22 or later** and npm. If you use nvm, run `nvm use` first.

```sh
npm ci
npm run dev
```

Open **http://localhost:4321/** for English or **http://localhost:4321/ru/** for Russian. Add `-- --port 3000` to choose a different port.

## Build and verify

```sh
npm run verify
npm run preview
```

`verify` checks Astro/TypeScript, builds both pages into `dist/`, and runs the generated-site tests. The tests check localized metadata and navigation, internal anchors and assets, download consistency, accessible names, and the mobile menu's close behavior. They use a DOM implementation, not a visual browser renderer.

When reviewing visually, check English and Russian at 1440px, 1024px, 768px, 390px, and 320px widths. Check long Russian headings, keyboard focus, mobile menu navigation and Escape, native FAQ disclosure controls, and reduced-motion behavior.

## Content and releases

- `src/i18n/content.ts` contains matching, typed English and Russian copy. `/` serves English and `/ru/` serves Russian. Language selection uses ordinary links and works without JavaScript.
- `src/data/product.ts` is the single place for release numbers, EXE/ZIP downloads, release notes, documentation, and provider names. Download buttons currently point to the published **v0.4.14** release. Recheck the project's published release before updating these fields together. The beta is linked separately and is not presented as a published download.
- `src/styles/global.css` defines the visual tokens and responsive layout. The desktop scene is an original SVG component with localized text and an accessible description.

The website does not collect API keys, capture screens, make AI requests, or store visitor data. The FAQ explains the desktop application's provider and data-processing requirements.

## Hosting

The website is hosted on GitHub Pages:

- English: https://ziyadin23.github.io/screencompanion-website/
- Russian: https://ziyadin23.github.io/screencompanion-website/ru/
- Website source: https://github.com/Ziyadin23/screencompanion-website

Pushing to `main` runs `.github/workflows/pages.yml`. The workflow installs dependencies, checks types, builds and tests both languages with the GitHub Pages base path, and publishes `dist/` after all checks pass. It can also be run manually from the repository's Actions tab. The desktop application's repository and releases remain separate.

A running application server is not needed. To use another static host, upload the contents of `dist/` after building with that host's URL and base path.

For a production domain or a project subdirectory, set these build-time environment variables:

```sh
SITE_URL=https://example.com BASE_PATH=/ScreenCompanion/ npm run build
BASE_PATH=/ScreenCompanion/ npm test
BASE_PATH=/ScreenCompanion/ npm run preview
```

`SITE_URL` is optional and enables canonical and alternate-language metadata. `BASE_PATH` defaults to `/` and is included in language links, the favicon, and generated assets. The GitHub Actions workflow reads both values from GitHub Pages settings automatically. Preview using the same base path as the build, then visit `http://localhost:4321/ScreenCompanion/`. When using another provider's project settings, set the variables there rather than in your shell. Local development continues to use `/` by default.

Manrope is distributed under the SIL Open Font License. The copyright notice and license are included in `public/manrope-license.txt` and in the static build.

The GitHub mark comes from Primer Octicons, distributed under the MIT License. Its license is included in `public/octicons-license.txt` and in the static build.
