import puppeteer from 'puppeteer-core';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set viewport matching reference design width (768px)
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  await new Promise(r => setTimeout(r, 1500));

  await page.screenshot({ path: 'live-page-768.png', fullPage: true });
  console.log('Saved live-page-768.png');

  // Also desktop 1440px
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'live-page-1440.png', fullPage: true });
  console.log('Saved live-page-1440.png');

  await browser.close();
}

capture().catch(console.error);
