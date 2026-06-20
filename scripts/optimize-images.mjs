import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = [
  { source: "public/forever-barber-depan.png", destination: "public/forever-barber-depan-desktop.webp", width: 1280 },
  { source: "public/forever-barber-depan.png", destination: "public/forever-barber-depan-mobile.webp", width: 768 },
  { source: "public/forever-barber-detail.png", destination: "public/forever-barber-detail-desktop.webp", width: 1280 },
  { source: "public/edutrack-depan.png", destination: "public/edutrack-depan-desktop.webp", width: 1280 },
  { source: "public/edutrack-depan.png", destination: "public/edutrack-depan-mobile.webp", width: 768 },
  { source: "public/edutrack-detail.png", destination: "public/edutrack-detail-desktop.webp", width: 1280 },
  { source: "public/coffe-toffe-depan.png", destination: "public/coffe-toffe-depan-desktop.webp", width: 1280 },
  { source: "public/coffe-toffe-depan.png", destination: "public/coffe-toffe-depan-mobile.webp", width: 768 },
  { source: "public/coffe-toffe-detail.png", destination: "public/coffe-toffe-detail-desktop.webp", width: 1280 },
  { source: "public/foto-profile.png", destination: "public/foto-profile.webp", width: 500 },
  { source: "assets/orbital-archive-mobile.png", destination: "public/orbital-archive-mobile.webp", width: 768, extract: { left: 0, top: 0, width: 768, height: 1280 } },
];

await Promise.all(
  assets.map(async ({ source, destination, width, extract }) => {
    const image = sharp(path.join(root, source)).rotate();

    if (extract) image.extract(extract);

    await image
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6, smartSubsample: true })
      .toFile(path.join(root, destination));
  }),
);

console.log(`Optimized ${assets.length} images.`);
