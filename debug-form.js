import puppeteer from 'puppeteer-core';

async function debug() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  await page.evaluate(() => {
    document.getElementById('name').value = 'Amelia';
    document.getElementById('name').dispatchEvent(new Event('input', { bubbles: true }));

    document.getElementById('email').value = 'amelia@example.com';
    document.getElementById('email').dispatchEvent(new Event('input', { bubbles: true }));

    document.getElementById('consent').checked = true;
    document.getElementById('consent').dispatchEvent(new Event('change', { bubbles: true }));
  });

  await page.click('button[type="submit"]');

  await new Promise(r => setTimeout(r, 1200));

  const text = await page.evaluate(() => document.getElementById('early-access').innerText);
  console.log('Early access text after 1200ms:\n', text);

  await browser.close();
}

debug().catch(console.error);
