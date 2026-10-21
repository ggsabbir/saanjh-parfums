const fs = require('fs');
const PNG = require('pngjs').PNG;

const lp = PNG.sync.read(fs.readFileSync('landing page.png'));

// Sections:
// 1. Hero: y: 0 to 410
// 2. Interlude: y: 410 to 615
// 3. Showcase: y: 615 to 1015
// 4. Triptych: y: 1015 to 1275
// 5. Story: y: 1275 to 1585
// 6. Early Access: y: 1585 to 1910
// 7. Footer: y: 1910 to 2048

const sections = [
  { name: 'ref-01-hero.png', startY: 0, endY: 410 },
  { name: 'ref-02-interlude.png', startY: 410, endY: 615 },
  { name: 'ref-03-showcase.png', startY: 615, endY: 1015 },
  { name: 'ref-04-triptych.png', startY: 1015, endY: 1275 },
  { name: 'ref-05-story.png', startY: 1275, endY: 1585 },
  { name: 'ref-06-early-access.png', startY: 1585, endY: 1910 },
  { name: 'ref-07-footer.png', startY: 1910, endY: 2048 }
];

sections.forEach(sec => {
  const h = sec.endY - sec.startY;
  const out = new PNG({ width: lp.width, height: h });
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < lp.width; x++) {
      const srcIdx = ((sec.startY + y) * lp.width + x) * 4;
      const dstIdx = (y * lp.width + x) * 4;
      out.data[dstIdx] = lp.data[srcIdx];
      out.data[dstIdx+1] = lp.data[srcIdx+1];
      out.data[dstIdx+2] = lp.data[srcIdx+2];
      out.data[dstIdx+3] = lp.data[srcIdx+3];
    }
  }
  fs.writeFileSync(sec.name, PNG.sync.write(out));
  console.log('Saved', sec.name, lp.width, 'x', h);
});
