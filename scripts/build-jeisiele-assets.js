const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoUpload = 'C:/Users/matheus/.gemini/antigravity/brain/4d4e8250-e4ae-4e92-b2f8-d689bdbeebf0/.user_uploaded/media_1792830816089_d6ca3227.png';
const heroUpload = 'C:/Users/matheus/.gemini/antigravity/brain/4d4e8250-e4ae-4e92-b2f8-d689bdbeebf0/.user_uploaded/media_1792830789681_c335b4de.png';
const bioUpload = 'C:/Users/matheus/.gemini/antigravity/brain/4d4e8250-e4ae-4e92-b2f8-d689bdbeebf0/.user_uploaded/media_1792830961268_36fbcd0d.jpg';

async function buildAssets() {
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  console.log('--- Processing Logo ---');
  // 1. Full logo (trimmed to content)
  // Bounding box from earlier: minX: 34, maxX: 993, minY: 22, maxY: 485
  // width: 960, height: 464
  await sharp(logoUpload)
    .extract({ left: 30, top: 18, width: 968, height: 472 })
    .png({ quality: 100 })
    .toFile('public/logo.png');

  await sharp('public/logo.png').toFile('public/logo-dark.png');
  await sharp('public/logo.png').toFile('public/logo-gold.png');

  // 2. Extract emblem (Sword & Balance Scales)
  // minX is ~285, maxX is ~740, minY is ~20, maxY is ~382
  await sharp(logoUpload)
    .extract({ left: 285, top: 20, width: 454, height: 365 })
    .png({ quality: 100 })
    .toFile('public/logo-emblem.png');

  await sharp('public/logo-emblem.png').toFile('public/logo-monogram.png');

  // 3. Create high-luxury round Seal / Emblem for Favicon & Social Meta
  // A circular emblem with deep dark onyx / rich graphite background and brushed gold luxury rings
  const emblemBuffer = await sharp('public/logo-emblem.png')
    .resize(360, 360, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const sealSvg = Buffer.from(`
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="darkBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1f1a14" />
          <stop offset="55%" stop-color="#0e0c0a" />
          <stop offset="100%" stop-color="#060504" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffe8a8" />
          <stop offset="25%" stop-color="#e5b760" />
          <stop offset="60%" stop-color="#c89745" />
          <stop offset="100%" stop-color="#805020" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="300" r="290" fill="url(#darkBg)" />
      <circle cx="300" cy="300" r="282" fill="none" stroke="url(#goldGrad)" stroke-width="3" stroke-opacity="0.85" />
      <circle cx="300" cy="300" r="268" fill="none" stroke="url(#goldGrad)" stroke-width="1" stroke-dasharray="8 5" stroke-opacity="0.45" />
      <circle cx="300" cy="300" r="248" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.5" />
    </svg>
  `);

  await sharp(sealSvg)
    .composite([{ input: emblemBuffer, gravity: 'center' }])
    .png()
    .toFile('public/logo-seal.png');

  // Favicons & App Icons
  await sharp('public/logo-seal.png').resize(512, 512).png().toFile('app/icon.png');
  await sharp('public/logo-seal.png').resize(512, 512).png().toFile('public/icon.png');
  await sharp('public/logo-seal.png').resize(180, 180).png().toFile('app/apple-icon.png');
  await sharp('public/logo-seal.png').resize(180, 180).png().toFile('public/apple-icon.png');
  await sharp('public/logo-seal.png').resize(32, 32).png().toFile('public/icon-32x32.png');
  await sharp('public/logo-seal.png').resize(32, 32).toFormat('png').toFile('app/favicon.ico');
  await sharp('public/logo-seal.png').resize(32, 32).toFormat('png').toFile('public/favicon.ico');

  console.log('--- Processing Hero Photo ---');
  // 4. Hero Photo: Drª Jeisiele in office
  await sharp(heroUpload)
    .jpeg({ quality: 95 })
    .toFile('public/hero.jpg');
  await sharp(heroUpload)
    .png({ quality: 95 })
    .toFile('public/hero.png');
  await sharp(heroUpload)
    .jpeg({ quality: 95 })
    .toFile('public/dra-jeisiele-office.jpg');

  console.log('--- Processing Bio Portrait ---');
  // 5. Bio Photo: Drª Jeisiele smiling portrait
  // Coordinates from scan: left: 563, top: 324, width: 407, height: 546
  // Let's extract with a slight padding and rounded or clean crop
  await sharp(bioUpload)
    .extract({ left: 560, top: 320, width: 412, height: 550 })
    .jpeg({ quality: 96 })
    .toFile('public/about.jpg');

  await sharp(bioUpload)
    .extract({ left: 560, top: 320, width: 412, height: 550 })
    .png({ quality: 96 })
    .toFile('public/about.png');

  await sharp(bioUpload)
    .extract({ left: 560, top: 320, width: 412, height: 550 })
    .jpeg({ quality: 96 })
    .toFile('public/dra-jeisiele-perfil.jpg');

  // Also save the full bio card as credential graphic
  await sharp(bioUpload)
    .jpeg({ quality: 95 })
    .toFile('public/credential-card.jpg');

  console.log('Assets generation complete!');
}

buildAssets().catch(console.error);
