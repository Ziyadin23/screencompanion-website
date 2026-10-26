import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
});
