// Shrinks oversized images in public/img in place (same file names, so no code changes).
// Run after adding new images:  npm run images
//
// Rules: scale down to fit MAX_SIDE x MAX_SIDE, re-encode WebP at QUALITY,
// and only keep the result if it is at least 10% smaller than the original.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIR = "public/img";
const MAX_SIDE = 2000;
const QUALITY = 78;
const MIN_BYTES = 100 * 1024; // leave small files alone

let saved = 0;
for (const name of fs.readdirSync(DIR)) {
  if (!name.endsWith(".webp")) continue;
  const file = path.join(DIR, name);
  const before = fs.statSync(file).size;
  if (before < MIN_BYTES) continue;

  const out = await sharp(file)
    .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();

  if (out.length < before * 0.9) {
    fs.writeFileSync(file, out);
    saved += before - out.length;
    console.log(`${name}: ${Math.round(before / 1024)}KB -> ${Math.round(out.length / 1024)}KB`);
  }
}
console.log(`Saved ${(saved / 1024 / 1024).toFixed(1)}MB`);
