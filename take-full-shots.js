import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function takeFullShots() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Full Desktop Shot at 1440px
  console.log('Capturing 1440px desktop full shot...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'full-website-1440.png', fullPage: true });
  console.log('Saved full-website-1440.png');

  // 2. Full Shot at 1200px
  console.log('Capturing 1200px full shot...');
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'full-website-1200.png', fullPage: true });
  console.log('Saved full-website-1200.png');

  // 3. Full Shot at 768px (same width as landing page.png)
  console.log('Capturing 768px full shot...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'full-website-768.png', fullPage: true });
  console.log('Saved full-website-768.png');

  await browser.close();
}

takeFullShots().catch(console.error);
