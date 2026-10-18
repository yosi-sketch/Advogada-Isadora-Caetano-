const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildAssets() {
  const logoSrc = 'C:/Users/matheus/.gemini/antigravity/brain/d992fcfb-a18e-4c5a-8189-918a81480757/.user_uploaded/media_1792254958665_8c0dd096.png';
  const heroSrc = 'C:/Users/matheus/.gemini/antigravity/brain/d992fcfb-a18e-4c5a-8189-918a81480757/.user_uploaded/media_1792255003083_25dae002.png';
  const sobreSrc = 'C:/Users/matheus/.gemini/antigravity/brain/d992fcfb-a18e-4c5a-8189-918a81480757/.user_uploaded/media_1792255018267_db7c4c0d.png';

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  // 1. Photos
  await sharp(heroSrc).png({ quality: 95 }).toFile('public/rafaela-souza-hero.png');
  await sharp(sobreSrc).png({ quality: 95 }).toFile('public/rafaela-souza-sobre.png');
  await sharp(heroSrc).png({ quality: 95 }).toFile('public/hero.png');
  await sharp(sobreSrc).png({ quality: 95 }).toFile('public/about.png');

  // 2. Base logo: save raw transparent logo
  await sharp(logoSrc).png().toFile('public/logo.png');
  await sharp(logoSrc).png().toFile('public/logo-dark.png');

  const { data, info } = await sharp(logoSrc).raw().toBuffer({ resolveWithObject: true });

  // 3. Crisp white/ivory logo for dark headers
  const whiteData = Buffer.from(data);
  for (let i = 0; i < whiteData.length; i += 4) {
    if (whiteData[i + 3] > 0) {
      whiteData[i] = 255;
      whiteData[i + 1] = 255;
      whiteData[i + 2] = 255;
    }
  }
  await sharp(whiteData, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile('public/logo-white.png');

  // 4. Warm Champagne Gold logo
  const goldData = Buffer.from(data);
  for (let i = 0; i < goldData.length; i += 4) {
    if (goldData[i + 3] > 0) {
      goldData[i] = 218;     // R
      goldData[i + 1] = 178; // G
      goldData[i + 2] = 128; // B
    }
  }
  await sharp(goldData, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile('public/logo-gold.png');

  // 5. Monograms (crop left: 165, top: 32, width: 345, height: 285)
  const monogramCrop = { left: 165, top: 32, width: 345, height: 285 };
  await sharp(logoSrc).extract(monogramCrop).png().toFile('public/logo-monogram-dark.png');
  await sharp('public/logo-white.png').extract(monogramCrop).png().toFile('public/logo-monogram.png');
  await sharp('public/logo-white.png').extract(monogramCrop).png().toFile('public/logo-monogram-white.png');
  await sharp('public/logo-gold.png').extract(monogramCrop).png().toFile('public/logo-monogram-gold.png');

  // 6. Luxury Circular Seal Emblem (600x600)
  const monoGoldBuffer = await sharp('public/logo-monogram-gold.png')
    .resize(320, 265, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const sealSvg = Buffer.from(`
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0e234b" />
          <stop offset="65%" stop-color="#051228" />
          <stop offset="100%" stop-color="#010c21" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f5e6cf" />
          <stop offset="35%" stop-color="#dab280" />
          <stop offset="70%" stop-color="#c59d64" />
          <stop offset="100%" stop-color="#8e6b36" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" rx="56" fill="url(#bg)" />
      <rect x="18" y="18" width="564" height="564" rx="44" fill="none" stroke="url(#goldGrad)" stroke-width="1.8" stroke-opacity="0.65" />
      <circle cx="300" cy="300" r="240" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.45" />
      <circle cx="300" cy="300" r="248" fill="none" stroke="url(#goldGrad)" stroke-width="0.8" stroke-opacity="0.3" />
    </svg>
  `);

  await sharp(sealSvg)
    .composite([{ input: monoGoldBuffer, gravity: 'center' }])
    .png()
    .toFile('public/logo-seal.png');

  // Also shield placeholder pointing to monogram gold for compatibility
  await sharp('public/logo-monogram-gold.png').toFile('public/logo-shield.png');

  // Favicons and App Icons
  await sharp('public/logo-seal.png').resize(512, 512).png().toFile('app/icon.png');
  await sharp('public/logo-seal.png').resize(180, 180).png().toFile('app/apple-icon.png');
  await sharp('public/logo-seal.png').resize(32, 32).png().toFile('public/icon-32x32.png');
  await sharp('public/logo-seal.png').resize(32, 32).png().toFile('app/favicon.ico');
  await sharp('public/logo-seal.png').resize(32, 32).png().toFile('public/favicon.ico');

  console.log('All brand assets built successfully in public/ and app/!');
}

buildAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
