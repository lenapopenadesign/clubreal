import { chromium } from 'playwright';

const pages = [
  { name: 'mobile-home', path: '/' },
  { name: 'mobile-warum', path: '/warum-club-real' },
  { name: 'mobile-mitglieder', path: '/mitglieder' },
  { name: 'mobile-crsv', path: '/crsv' },
  { name: 'mobile-kontakt', path: '/kontakt' },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 375, height: 812 } });

for (const page of pages) {
  const p = await context.newPage();
  await p.goto(`http://localhost:3000${page.path}`, { waitUntil: 'networkidle' });
  await p.screenshot({ path: `screenshots/${page.name}.png`, fullPage: true });
  console.log(`Screenshot saved: ${page.name}`);
  await p.close();
}

await browser.close();
