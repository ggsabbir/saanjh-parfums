import puppeteer from 'puppeteer-core';

async function testDrawer() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  console.log('Clicking hamburger button...');
  await page.click('header button[aria-label="Open Menu"]');
  await new Promise(r => setTimeout(r, 600));

  const isOpen = await page.evaluate(() => {
    return document.querySelector('div[role="dialog"]') !== null;
  });
  console.log('Drawer opened:', isOpen);

  await page.screenshot({ path: 'live-mobile-drawer.png' });
  console.log('Saved live-mobile-drawer.png');

  console.log('Pressing Escape to close...');
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  const isClosed = await page.evaluate(() => {
    return document.querySelector('div[role="dialog"]') === null;
  });
  console.log('Drawer closed on Escape:', isClosed);

  await browser.close();
}

testDrawer().catch(console.error);
