import puppeteer from 'puppeteer-core';

async function testForm() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  // Scroll to early access
  await page.evaluate(() => {
    document.getElementById('early-access').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  console.log('Testing empty submit...');
  await page.click('button[type="submit"]');
  const errorText = await page.evaluate(() => {
    const err = document.querySelector('#early-access p.text-\\[\\#FFAEAE\\]');
    return err ? err.innerText : null;
  });
  console.log('Empty submit error:', errorText);

  // Fill in form
  console.log('Filling form...');
  await page.type('#name', 'Amelia Vance');
  await page.type('#email', 'amelia.vance@luxuryperfume.com');
  await page.type('#phone', '+1 555 019 2834');
  await page.click('#consent');

  console.log('Submitting valid form...');
  await page.click('button[type="submit"]');

  // Wait for loading to finish and success message to show
  await page.waitForFunction(() => {
    return document.body.innerText.includes("You're on the list");
  }, { timeout: 3000 });

  console.log('Success state displayed successfully!');

  // Check localStorage
  const savedData = await page.evaluate(() => {
    return localStorage.getItem('saanjh_early_access');
  });
  console.log('Stored in localStorage:', savedData);

  // Take screenshot of confirmation state
  const earlyAccessEl = await page.$('#early-access');
  await earlyAccessEl.screenshot({ path: 'live-sec-earlyAccess-success.png' });
  console.log('Saved live-sec-earlyAccess-success.png');

  // Test reset
  await page.click('#early-access button');
  await new Promise(r => setTimeout(r, 500));
  const isFormReset = await page.evaluate(() => {
    const input = document.querySelector('#name');
    return input !== null && input.value === '';
  });
  console.log('Form reset successful:', isFormReset);

  await browser.close();
}

testForm().catch(console.error);
