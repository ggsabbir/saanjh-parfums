import fs from 'fs';

const pairs = [
  { title: '1. Hero Section', ref: 'ref-01-hero.png', live: 'live-sec-hero.png' },
  { title: '2. Poetic Interlude Banner', ref: 'ref-02-interlude.png', live: 'live-sec-interlude.png' },
  { title: '3. Fragrance Showcase', ref: 'ref-03-showcase.png', live: 'live-sec-fragrance.png' },
  { title: '4. Sensory Triptych', ref: 'ref-04-triptych.png', live: 'live-sec-triptych.png' },
  { title: '5. Brand Story', ref: 'ref-05-story.png', live: 'live-sec-story.png' },
  { title: '6. Early Access Lead Capture', ref: 'ref-06-early-access.png', live: 'live-sec-earlyAccess.png' },
  { title: '7. Footer', ref: 'ref-07-footer.png', live: 'live-sec-footer.png' }
];

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SAANJH PARFUMS — Visual Comparison</title>
  <style>
    body { background: #141414; color: #eee; font-family: -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; padding: 24px; }
    h1 { color: #EFE2CF; font-family: serif; letter-spacing: 0.1em; text-align: center; margin-bottom: 30px; }
    .section-pair { background: #1f1f1f; border-radius: 8px; margin-bottom: 40px; padding: 20px; border: 1px solid #333; }
    .pair-header { display: flex; justify-content: space-between; border-bottom: 1px solid #444; padding-bottom: 10px; margin-bottom: 15px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .col { background: #0a0a0a; border: 1px solid #2a2a2a; border-radius: 4px; overflow: hidden; padding: 8px; }
    .col h3 { margin: 0 0 8px 0; font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase; color: #C9B7A2; }
    img { width: 100%; height: auto; display: block; object-fit: contain; }
  </style>
</head>
<body>
  <h1>SAANJH PARFUMS — PIXEL-PERFECT VISUAL AUDIT</h1>
  ${pairs.map(p => `
    <div class="section-pair">
      <div class="pair-header">
        <h2 style="margin:0;font-size:18px;">${p.title}</h2>
      </div>
      <div class="grid">
        <div class="col">
          <h3>Target Reference (Design)</h3>
          <img src="./${p.ref}" />
        </div>
        <div class="col">
          <h3>Live Implementation (Vite/React)</h3>
          <img src="./${p.live}" />
        </div>
      </div>
    </div>
  `).join('')}
</body>
</html>`;

fs.writeFileSync('compare.html', html, 'utf8');
console.log('Created compare.html');
