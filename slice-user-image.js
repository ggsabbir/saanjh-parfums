import fs from 'fs';
import { PNG } from 'pngjs';

const imgPath = 'C:/Users/conta/.gemini/antigravity/brain/f323fb25-8eb8-4f53-98db-b2eded449e5e/.user_uploaded/media_1792570320667_f56437fa.png';
const userImg = PNG.sync.read(fs.readFileSync(imgPath));

// y = 0 to 235: Hero
// y = 235 to 325: Interlude
// y = 325 to 520: Fragrance Showcase
// y = 520 to 655: Triptych
// y = 655 to 820: Brand Story
// y = 820 to 970: Early Access
// y = 970 to 1024: Footer

const secs = [
  { name: 'user-01-hero.png', start: 0, end: 235 },
  { name: 'user-02-interlude.png', start: 235, end: 325 },
  { name: 'user-03-showcase.png', start: 325, end: 520 },
  { name: 'user-04-triptych.png', start: 520, end: 655 },
  { name: 'user-05-story.png', start: 655, end: 820 },
  { name: 'user-06-early-access.png', start: 820, end: 970 },
  { name: 'user-07-footer.png', start: 970, end: 1024 }
];

secs.forEach(s => {
  const h = s.end - s.start;
  const out = new PNG({ width: userImg.width, height: h });
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < userImg.width; x++) {
      const srcI = ((s.start + y) * userImg.width + x) * 4;
      const dstI = (y * userImg.width + x) * 4;
      out.data[dstI] = userImg.data[srcI];
      out.data[dstI + 1] = userImg.data[srcI + 1];
      out.data[dstI + 2] = userImg.data[srcI + 2];
      out.data[dstI + 3] = userImg.data[srcI + 3];
    }
  }
  fs.writeFileSync(s.name, PNG.sync.write(out));
  console.log('Saved', s.name);
});
