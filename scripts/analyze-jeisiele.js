const sharp = require('sharp');
const fs = require('fs');

const logoPath = 'C:/Users/matheus/.gemini/antigravity/brain/4d4e8250-e4ae-4e92-b2f8-d689bdbeebf0/.user_uploaded/media_1792830816089_d6ca3227.png';
const heroPath = 'C:/Users/matheus/.gemini/antigravity/brain/4d4e8250-e4ae-4e92-b2f8-d689bdbeebf0/.user_uploaded/media_1792830789681_c335b4de.png';
const bioCardPath = 'C:/Users/matheus/.gemini/antigravity/brain/4d4e8250-e4ae-4e92-b2f8-d689bdbeebf0/.user_uploaded/media_1792830961268_36fbcd0d.jpg';

async function main() {
  const img = sharp(logoPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  const colorCounts = {};
  let opaqueCount = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const a = data[idx + 3];
      if (a > 40) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        opaqueCount++;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const qr = Math.round(r / 16) * 16;
        const qg = Math.round(g / 16) * 16;
        const qb = Math.round(b / 16) * 16;
        const key = qr + ',' + qg + ',' + qb;
        colorCounts[key] = (colorCounts[key] || 0) + 1;
      }
    }
  }

  console.log('Logo Bounding box:', { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 });
  console.log('Opaque pixels:', opaqueCount);
  console.log('Top Logo Colors:');
  const sorted = Object.entries(colorCounts).sort((a,b) => b[1] - a[1]).slice(0, 15);
  sorted.forEach(([c, cnt]) => {
    const hex = c.split(',').map(n => Math.min(255, parseInt(n)).toString(16).padStart(2, '0')).join('');
    console.log('rgb(' + c + ') -> #' + hex + ' (' + ((cnt / opaqueCount) * 100).toFixed(2) + '%)');
  });

  // Find emblem bounding box (the top sword + scale icon) and text box (OLIVEIRA E MEGDA / ADVOCACIA...)
  // Let's inspect vertical projection of opacity
  const rowCounts = new Array(info.height).fill(0);
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const a = data[(y * info.width + x) * info.channels + 3];
      if (a > 40) rowCounts[y]++;
    }
  }
  
  // print rows with low count between emblem and text
  let inEmblem = false;
  let emblemEnd = 0;
  for (let y = minY; y <= maxY; y++) {
    if (rowCounts[y] > 0 && !inEmblem) inEmblem = true;
    if (inEmblem && rowCounts[y] === 0) {
      emblemEnd = y - 1;
      break;
    }
  }
  console.log('Emblem likely vertical range:', minY, 'to', emblemEnd);
  
  let textStart = 0;
  for (let y = emblemEnd + 1; y <= maxY; y++) {
    if (rowCounts[y] > 0) {
      textStart = y;
      break;
    }
  }
  console.log('Text vertical range:', textStart, 'to', maxY);
}

main().catch(console.error);
