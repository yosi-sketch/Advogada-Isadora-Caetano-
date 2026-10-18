const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildPaixaoAssets() {
  const logoUpload = 'C:/Users/matheus/.gemini/antigravity/brain/ea7cd30a-7230-43af-b7d4-228ae632c817/.user_uploaded/media_1792319635912_11a5c81e.png';
  const heroUpload = 'C:/Users/matheus/.gemini/antigravity/brain/ea7cd30a-7230-43af-b7d4-228ae632c817/.user_uploaded/media_1792319869571_66d90c81.jpg';

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  // 1. Save original transparent full logo to public/logo.png
  await sharp(logoUpload).png({ quality: 100 }).toFile('public/logo.png');
  await sharp(logoUpload).png({ quality: 100 }).toFile('public/logo-dark.png');
  await sharp(logoUpload).png({ quality: 100 }).toFile('public/logo-gold.png');
  await sharp(logoUpload).png({ quality: 100 }).toFile('public/logo-white.png'); // for any fallback

  // 2. Extract clean AR monogram
  // Bounding box: left 38, top 24, width 385, height 266
  await sharp(logoUpload)
    .extract({ left: 38, top: 24, width: 385, height: 266 })
    .png()
    .toFile('public/logo-monogram.png');
  await sharp('public/logo-monogram.png').toFile('public/logo-monogram-gold.png');
  await sharp('public/logo-monogram.png').toFile('public/logo-monogram-dark.png');
  await sharp('public/logo-monogram.png').toFile('public/logo-monogram-white.png');
  await sharp('public/logo-monogram.png').toFile('public/logo-shield.png');

  // 3. Create high luxury circular/shield seal emblem for SEO and Favicons (600x600)
  const monoBuffer = await sharp('public/logo-monogram.png')
    .resize(360, 260, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const sealSvg = Buffer.from(`
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="navyBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#152844" />
          <stop offset="55%" stop-color="#0a1727" />
          <stop offset="100%" stop-color="#040b14" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffe8a8" />
          <stop offset="30%" stop-color="#dfb772" />
          <stop offset="65%" stop-color="#c89b53" />
          <stop offset="100%" stop-color="#805020" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" rx="64" fill="url(#navyBg)" />
      <rect x="18" y="18" width="564" height="564" rx="50" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" stroke-opacity="0.8" />
      <rect x="28" y="28" width="544" height="544" rx="42" fill="none" stroke="url(#goldGrad)" stroke-width="0.8" stroke-dasharray="6 4" stroke-opacity="0.4" />
      <circle cx="300" cy="300" r="236" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" stroke-opacity="0.45" />
    </svg>
  `);

  await sharp(sealSvg)
    .composite([{ input: monoBuffer, gravity: 'center' }])
    .png()
    .toFile('public/logo-seal.png');

  // 4. Hero Photo & About Photo
  // Hero: full portrait
  await sharp(heroUpload)
    .jpeg({ quality: 95 })
    .toFile('public/dra-hero.jpg');
  await sharp(heroUpload)
    .png({ quality: 95 })
    .toFile('public/dra-hero.png');
  await sharp(heroUpload)
    .jpeg({ quality: 95 })
    .toFile('public/hero.jpg');
  await sharp(heroUpload)
    .png({ quality: 95 })
    .toFile('public/hero.png');

  // About: focused medium crop (from top 0 down to y=680, width 682, perfect square/portrait)
  await sharp(heroUpload)
    .extract({ left: 0, top: 0, width: 682, height: 750 })
    .jpeg({ quality: 95 })
    .toFile('public/dra-sobre.jpg');
  await sharp(heroUpload)
    .extract({ left: 0, top: 0, width: 682, height: 750 })
    .png({ quality: 95 })
    .toFile('public/dra-sobre.png');
  await sharp(heroUpload)
    .extract({ left: 0, top: 0, width: 682, height: 750 })
    .jpeg({ quality: 95 })
    .toFile('public/about.jpg');
  await sharp(heroUpload)
    .extract({ left: 0, top: 0, width: 682, height: 750 })
    .png({ quality: 95 })
    .toFile('public/about.png');

  // 5. Favicons and Icons
  await sharp('public/logo-seal.png').resize(512, 512).png().toFile('app/icon.png');
  await sharp('public/logo-seal.png').resize(180, 180).png().toFile('app/apple-icon.png');
  await sharp('public/logo-seal.png').resize(32, 32).png().toFile('public/icon-32x32.png');
  await sharp('public/logo-seal.png').resize(32, 32).png().toFile('app/favicon.ico');
  await sharp('public/logo-seal.png').resize(32, 32).png().toFile('public/favicon.ico');

  console.log('All Paixão Advocacia brand assets generated successfully!');
}

buildPaixaoAssets().catch(console.error);
