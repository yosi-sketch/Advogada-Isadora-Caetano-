const sharp = require('sharp');
const fs = require('fs');

async function processEmblems() {
  // Extract shield: left 38, top 54, width 173, height 224
  const shield = sharp('public/logo.png')
    .extract({ left: 38, top: 54, width: 173, height: 224 });

  await shield.clone()
    .png()
    .toFile('public/logo-shield.png');

  // Seal: 600x600 square with dark navy radial glow background and centered shield
  const resizedShield = await shield.clone()
    .resize(340, 440, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const svgBg = Buffer.from(`
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0e2240" />
          <stop offset="70%" stop-color="#060f1c" />
          <stop offset="100%" stop-color="#02060c" />
        </radialGradient>
        <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f3dfa2" />
          <stop offset="50%" stop-color="#cb902b" />
          <stop offset="100%" stop-color="#784c0a" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" rx="60" fill="url(#bg)" />
      <rect x="12" y="12" width="576" height="576" rx="50" fill="none" stroke="url(#goldBorder)" stroke-width="2" stroke-opacity="0.6" />
      <circle cx="300" cy="300" r="230" fill="none" stroke="url(#goldBorder)" stroke-width="1.5" stroke-dasharray="6 6" stroke-opacity="0.4" />
    </svg>
  `);

  await sharp(svgBg)
    .composite([
      { input: resizedShield, gravity: 'center' }
    ])
    .png()
    .toFile('public/logo-seal.png');

  // Also app icons
  await sharp('public/logo-seal.png')
    .resize(512, 512)
    .png()
    .toFile('app/icon.png');

  await sharp('public/logo-seal.png')
    .resize(180, 180)
    .png()
    .toFile('app/apple-icon.png');

  await sharp('public/logo-seal.png')
    .resize(32, 32)
    .png()
    .toFile('public/icon-32x32.png');

  console.log('Emblems and icons created successfully!');
}

processEmblems().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
