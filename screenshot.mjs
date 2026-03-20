import { chromium } from 'playwright';

const pages = [
  { name: 'homepage', path: '/' },
  { name: 'warum-club-real', path: '/warum-club-real' },
  { name: 'mitglieder', path: '/mitglieder' },
  { name: 'crsv', path: '/crsv' },
  { name: 'kontakt', path: '/kontakt' },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const page of pages) {
  const p = await context.newPage();
  await p.goto(`http://localhost:3456${page.path}`, { waitUntil: 'networkidle' });
  await p.screenshot({ path: `screenshots/${page.name}.png`, fullPage: true });
  console.log(`Screenshot saved: ${page.name}`);
  await p.close();
}

await browser.close();
