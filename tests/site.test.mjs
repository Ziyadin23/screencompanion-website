import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const base = `/${(process.env.BASE_PATH || '').replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/');
const origin = 'https://site.example';

async function loadPage(locale) {
  const route = locale === 'en' ? '' : 'ru/';
  const html = await readFile(path.join(root, route, 'index.html'), 'utf8');
  const window = parseHTML(html);
  return { window, document: window.document, html, url: new URL(`${base}${route}`, origin) };
}

function outputFile(url) {
  assert.ok(url.pathname.startsWith(base), `Path is outside the configured base: ${url.pathname}`);
  const relative = decodeURIComponent(url.pathname.slice(base.length));
  return path.join(root, relative, url.pathname.endsWith('/') ? 'index.html' : '');
}

for (const locale of ['en', 'ru']) {
  test(`${locale}: localized page structure and metadata`, async () => {
    const { document } = await loadPage(locale);
    assert.equal(document.documentElement.lang, locale);
    assert.equal(document.querySelectorAll('h1').length, 1);
    assert.equal(document.querySelectorAll('main').length, 1);
    assert.match(document.title, /ScreenCompanion/);
    assert.ok(document.querySelector('meta[name="description"]').content.length > 60);
    assert.equal(document.querySelector('meta[property="og:title"]').content, document.title);
    const title = document.querySelector('h1').textContent;
    assert.match(title, locale === 'ru' ? /Вопрос.*Ответ/s : /Answers.*screen/s);
    assert.match(document.querySelector('.hero-note').textContent, locale === 'ru' ? /API-ключ/ : /API key/);
    assert.equal(document.querySelectorAll('.feature-item').length, 3);
    assert.equal(document.querySelectorAll('.steps > li').length, 3);
    assert.equal(document.querySelectorAll('.faq-item').length, 6);
  });

  test(`${locale}: language links work independently of JavaScript`, async () => {
    const { document } = await loadPage(locale);
    const links = document.querySelectorAll('.language-switch a');
    assert.equal(links.length, 2);
    for (const link of links) {
      const target = link.getAttribute('hreflang');
      assert.equal(link.getAttribute('href'), `${base}${target === 'ru' ? 'ru/' : ''}`);
      const destination = await loadPage(target);
      assert.equal(destination.document.documentElement.lang, target);
      assert.equal(link.getAttribute('aria-current'), target === locale ? 'page' : null);
    }
  });

  test(`${locale}: internal links, fragment targets, and page assets exist`, async () => {
    const { document, url } = await loadPage(locale);
    const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
    assert.equal(ids.length, new Set(ids).size, 'Page IDs must be unique');
    for (const element of document.querySelectorAll('a[href], link[href], script[src]')) {
      const href = element.getAttribute('href') || element.getAttribute('src');
      assert.ok(href && href !== '#', 'Links must have real destinations');
      const destination = new URL(href, url);
      if (destination.origin !== origin) {
        assert.equal(destination.protocol, 'https:');
        continue;
      }
      const file = outputFile(destination);
      assert.ok((await stat(file)).isFile(), `Missing local file for ${href}`);
      if (destination.hash) {
        const target = parseHTML(await readFile(file, 'utf8')).document;
        assert.ok(target.getElementById(decodeURIComponent(destination.hash.slice(1))), `Missing fragment target ${href}`);
      }
    }
  });

  test(`${locale}: published download buttons and ZIP agree on their version`, async () => {
    const { document } = await loadPage(locale);
    const exe = document.querySelector('.hero-actions .button').getAttribute('href');
    const release = exe.match(/\/releases\/download\/(v[\w.-]+)\/SC-\1\.exe$/);
    assert.ok(release, 'The primary action must download a published executable');
    const version = release[1];
    for (const link of document.querySelectorAll('a[href$=".exe"]')) assert.equal(link.getAttribute('href'), exe);
    assert.equal(document.querySelector('a[href$=".zip"]').getAttribute('href'), exe.replace(/\.exe$/, '.zip'));
    assert.ok(document.querySelector('.release-version').textContent.includes(version));
    assert.ok(document.querySelector('.download-actions > p').textContent.includes(version));
    assert.equal(document.querySelector('.release-link').getAttribute('href'), `https://github.com/Ziyadin23/ScreenCompanion/releases/tag/${version}`);
    assert.ok(!document.querySelector('.beta-link').getAttribute('href').includes('/releases/download/'));
  });

  test(`${locale}: accessible controls, illustrations, and section names`, async () => {
    const { document } = await loadPage(locale);
    for (const element of document.querySelectorAll('a, summary')) {
      assert.ok((element.getAttribute('aria-label') || element.textContent).trim(), 'Every control needs an accessible name');
    }
    for (const section of document.querySelectorAll('section')) {
      const label = section.getAttribute('aria-labelledby');
      assert.ok(label && document.getElementById(label), 'Every section must reference its heading');
    }
    for (const image of document.querySelectorAll('svg[role="img"]')) assert.ok(image.getAttribute('aria-label').length > 30);
    for (const icon of document.querySelectorAll('svg:not([role="img"])')) assert.equal(icon.getAttribute('aria-hidden'), 'true');
    assert.equal(document.querySelector('.skip-link').getAttribute('href'), '#main');
    assert.equal(document.querySelector('.mobile-menu > summary').tagName, 'SUMMARY');
    for (const item of document.querySelectorAll('.faq-item')) {
      assert.equal(item.tagName, 'DETAILS');
      assert.ok(item.querySelector('summary') && item.querySelector('.faq-answer p'));
    }
  });

  test(`${locale}: all typefaces and styles load from the site itself`, async () => {
    const { document, url } = await loadPage(locale);
    for (const stylesheet of document.querySelectorAll('link[rel="stylesheet"]')) {
      const stylesheetURL = new URL(stylesheet.getAttribute('href'), url);
      assert.equal(stylesheetURL.origin, origin);
      const css = await readFile(outputFile(stylesheetURL), 'utf8');
      assert.ok(css.includes('prefers-reduced-motion'));
      assert.ok(css.includes('focus-visible'));
      for (const match of css.matchAll(/url\(([^)]+)\)/g)) {
        const href = match[1].replace(/^["']|["']$/g, '');
        if (href.startsWith('data:')) continue;
        const assetURL = new URL(href, stylesheetURL);
        assert.equal(assetURL.origin, origin);
        assert.ok((await stat(outputFile(assetURL))).isFile(), `Missing stylesheet asset ${href}`);
      }
    }
    assert.equal(document.querySelectorAll('form, input, iframe').length, 0);
  });
}

test('the mobile menu closes on navigation, Escape, outside click, and desktop resize', async () => {
  const { document, window, url } = await loadPage('en');
  const menu = document.querySelector('.mobile-menu');
  const summary = menu.querySelector('summary');
  let focused = false;
  summary.focus = () => { focused = true; };
  let onDesktopResize;
  const matchMedia = () => ({ addEventListener: (_, listener) => { onDesktopResize = listener; } });
  const context = vm.createContext({ document, Node: window.Node, window: { matchMedia } });

  for (const script of document.querySelectorAll('script[type="module"]')) {
    const source = script.getAttribute('src');
    const code = source ? await readFile(outputFile(new URL(source, url)), 'utf8') : script.textContent;
    vm.runInContext(code, context);
  }

  menu.open = true;
  menu.querySelector('a').dispatchEvent(new window.Event('click', { bubbles: true }));
  assert.equal(menu.open, false, 'Navigation should close the menu');

  menu.open = true;
  const escape = new window.Event('keydown', { bubbles: true });
  Object.defineProperty(escape, 'key', { value: 'Escape' });
  menu.dispatchEvent(escape);
  assert.equal(menu.open, false, 'Escape should close the menu');
  assert.equal(focused, true, 'Escape should restore focus to the menu summary');

  menu.open = true;
  document.querySelector('h1').dispatchEvent(new window.Event('click', { bubbles: true }));
  assert.equal(menu.open, false, 'Clicking outside should close the menu');

  menu.open = true;
  assert.ok(onDesktopResize, 'The menu should observe the desktop breakpoint');
  onDesktopResize({ matches: true });
  assert.equal(menu.open, false, 'Desktop resize should close the menu');
});
