const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;

// 1. Crop tempImagecVlCRQ - Edited.png into perfume-bottle.png with tight bounds
const bottleData = fs.readFileSync('tempImagecVlCRQ - Edited.png');
const bottlePng = PNG.sync.read(bottleData);

let minX = bottlePng.width, maxX = 0, minY = bottlePng.height, maxY = 0;
for (let y = 0; y < bottlePng.height; y++) {
  for (let x = 0; x < bottlePng.width; x++) {
    const idx = (bottlePng.width * y + x) << 2;
    if (bottlePng.data[idx + 3] > 10) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

// Add 4px padding
minX = Math.max(0, minX - 4);
maxX = Math.min(bottlePng.width - 1, maxX + 4);
minY = Math.max(0, minY - 4);
maxY = Math.min(bottlePng.height - 1, maxY + 4);

const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;
const cropped = new PNG({ width: cropW, height: cropH });

for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcIdx = ((minY + y) * bottlePng.width + (minX + x)) << 2;
    const dstIdx = (y * cropW + x) << 2;
    cropped.data[dstIdx] = bottlePng.data[srcIdx];
    cropped.data[dstIdx + 1] = bottlePng.data[srcIdx + 1];
    cropped.data[dstIdx + 2] = bottlePng.data[srcIdx + 2];
    cropped.data[dstIdx + 3] = bottlePng.data[srcIdx + 3];
  }
}

fs.writeFileSync('public/perfume-bottle.png', PNG.sync.write(cropped));
console.log('Saved public/perfume-bottle.png:', cropW, 'x', cropH);

// 2. Also crop woodmark.png tightly to public/woodmark-clean.png
const woodData = fs.readFileSync('woodmark.png');
const woodPng = PNG.sync.read(woodData);

let wMinX = woodPng.width, wMaxX = 0, wMinY = woodPng.height, wMaxY = 0;
for (let y = 0; y < woodPng.height; y++) {
  for (let x = 0; x < woodPng.width; x++) {
    const idx = (woodPng.width * y + x) << 2;
    if (woodPng.data[idx + 3] > 10) {
      if (x < wMinX) wMinX = x;
      if (x > wMaxX) wMaxX = x;
      if (y < wMinY) wMinY = y;
      if (y > wMaxY) wMaxY = y;
    }
  }
}

const wCropW = wMaxX - wMinX + 1;
const wCropH = wMaxY - wMinY + 1;
const croppedWood = new PNG({ width: wCropW, height: wCropH });

for (let y = 0; y < wCropH; y++) {
  for (let x = 0; x < wCropW; x++) {
    const srcIdx = ((wMinY + y) * woodPng.width + (wMinX + x)) << 2;
    const dstIdx = (y * wCropW + x) << 2;
    croppedWood.data[dstIdx] = woodPng.data[srcIdx];
    croppedWood.data[dstIdx + 1] = woodPng.data[srcIdx + 1];
    croppedWood.data[dstIdx + 2] = woodPng.data[srcIdx + 2];
    croppedWood.data[dstIdx + 3] = woodPng.data[srcIdx + 3];
  }
}

fs.writeFileSync('public/woodmark-clean.png', PNG.sync.write(croppedWood));
console.log('Saved public/woodmark-clean.png:', wCropW, 'x', wCropH);

// 3. Copy other files to public/
const filesToCopy = [
  'background.jpg',
  'background-2.jpg',
  'water-ripples-bg.jpg',
  'product-showcase-bg.jpg',
  'card-01-leaves.jpg',
  'card-02-window-rain.jpg',
  'card-03-velvet-petal.jpg',
  'our-story-card.jpg',
  'early-access-bg.jpg',
  'logo.png',
  'woodmark.png',
  'Sanju-2.png',
  'tempImagecVlCRQ - Edited.png'
];

filesToCopy.forEach(f => {
  if (fs.existsSync(f)) {
    fs.copyFileSync(f, path.join('public', f));
    console.log('Copied to public:', f);
  }
});
