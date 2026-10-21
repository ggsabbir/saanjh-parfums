import puppeteer from 'puppeteer-core';

async function testConsent() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  await page.evaluate(() => {
    document.getElementById('early-access').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));

  await page.type('#name', 'Amelia Vance');
  await page.type('#email', 'amelia@example.com');
  
  // Click consent label or checkbox
  const before = await page.evaluate(() => document.getElementById('consent').checked);
  console.log('Consent before click:', before);
  
  await page.click('label[for="consent"]');
  const after = await page.evaluate(() => document.getElementById('consent').checked);
  console.log('Consent after click label:', after);

  // Check form values before submit
  const vals = await page.evaluate(() => {
    const f = document.querySelector('#early-access form');
    const fd = new FormData(f);
    return {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      consent: fd.get('consent'),
      checkedProp: document.getElementById('consent').checked
    };
  });
  console.log('Form data before click submit:', vals);

  await page.click('button[type="submit"]');

  await new Promise(r => setTimeout(r, 1200));

  const text = await page.evaluate(() => document.getElementById('early-access').innerText);
  console.log('After submit text:\n', text);

  await browser.close();
}

testConsent().catch(console.error);
