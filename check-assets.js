const fs = require('fs');

const images = [
  'background.jpg',
  'background-2.jpg',
  'water-ripples-bg.jpg',
  'product-showcase-bg.jpg',
  'card-01-leaves.jpg',
  'card-02-window-rain.jpg',
  'card-03-velvet-petal.jpg',
  'our-story-card.jpg',
  'early-access-bg.jpg',
  'Sanju-2.png',
  'woodmark.png',
  'logo.png',
  'tempImagecVlCRQ - Edited.png'
];

const html = `<!DOCTYPE html>
<html>
<head><title>Assets</title></head>
<body style="background:#1a1a1a;color:#eee;font-family:sans-serif;padding:24px;">
  <h1>SAANJH PARFUMS - Assets</h1>
  <div style="display:flex;flex-wrap:wrap;gap:24px;">
    ${images.map(img => `
      <div style="background:#282828;padding:12px;border-radius:8px;width:380px;">
        <h4 style="margin:0 0 8px 0;font-size:14px;word-break:break-all;">${img}</h4>
        <div style="background:#111;display:flex;align-items:center;justify-content:center;min-height:220px;overflow:hidden;border:1px solid #444;">
          <img src="./${img}" style="max-width:100%;max-height:300px;object-fit:contain;" />
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync('preview-assets.html', html, 'utf8');
console.log('Created preview-assets.html');
