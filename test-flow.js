import puppeteer from 'puppeteer-core';

async function testFullFlow() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  // Scroll to form
  await page.evaluate(() => {
    document.getElementById('early-access').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  // Fill in
  await page.type('#name', 'Amelia Vance');
  await page.type('#email', 'amelia.vance@luxuryperfume.com');
  await page.type('#phone', '+1 555 019 2834');
  await page.click('label[for="consent"]');

  // Submit
  await page.click('button[type="submit"]');

  // Wait for success screen
  await page.waitForFunction(() => {
    return document.getElementById('early-access').innerText.includes("YOU'RE ON THE LIST");
  }, { timeout: 4000 });

  // Screenshot confirmation state
  const earlyAccessSec = await page.$('#early-access');
  await earlyAccessSec.screenshot({ path: 'live-sec-earlyAccess-confirmation.png' });
  console.log('Saved live-sec-earlyAccess-confirmation.png');

  // Click reset
  await page.click('#early-access button');
  await new Promise(r => setTimeout(r, 500));

  const isReset = await page.evaluate(() => {
    const input = document.getElementById('name');
    return input !== null && input.value === '';
  });
  console.log('Reset back to pristine form:', isReset);

  await browser.close();
}

testFullFlow().catch(console.error);
