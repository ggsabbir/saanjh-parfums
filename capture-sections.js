import fs from 'fs';
import puppeteer from 'puppeteer-core';

async function captureSections() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1200));

  const sections = ['#hero', '#interlude', '#the-fragrance', 'article:nth-of-type(1)', '#our-story', '#early-access', 'footer'];
  
  // Capture section heights and positions
  const sectionInfo = await page.evaluate(() => {
    const list = [
      { id: 'hero', selector: '#hero' },
      { id: 'interlude', selector: '#interlude' },
      { id: 'fragrance', selector: '#the-fragrance' },
      { id: 'triptych', selector: 'section:has(article)' },
      { id: 'story', selector: '#our-story' },
      { id: 'earlyAccess', selector: '#early-access' },
      { id: 'footer', selector: 'footer' }
    ];
    return list.map(item => {
      const el = document.querySelector(item.selector);
      if (!el) return { id: item.id, found: false };
      const rect = el.getBoundingClientRect();
      return {
        id: item.id,
        found: true,
        top: rect.top + window.scrollY,
        height: rect.height,
        width: rect.width
      };
    });
  });

  console.log('Section Info:', sectionInfo);

  // Take screenshot of each element
  for (const item of sectionInfo) {
    if (item.found) {
      const el = await page.$(item.id === 'triptych' ? 'section:has(article)' : item.id === 'footer' ? 'footer' : '#' + (item.id === 'fragrance' ? 'the-fragrance' : item.id === 'story' ? 'our-story' : item.id === 'earlyAccess' ? 'early-access' : item.id));
      if (el) {
        await el.screenshot({ path: `live-sec-${item.id}.png` });
        console.log(`Saved live-sec-${item.id}.png`);
      }
    }
  }

  await browser.close();
}

captureSections().catch(console.error);
