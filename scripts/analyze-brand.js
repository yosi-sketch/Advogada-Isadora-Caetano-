const sharp = require('sharp');
const fs = require('fs');

async function analyze() {
  const logoPath = 'C:/Users/matheus/.gemini/antigravity/brain/ea7cd30a-7230-43af-b7d4-228ae632c817/.user_uploaded/media_1792319635912_11a5c81e.png';
  const heroPath = 'C:/Users/matheus/.gemini/antigravity/brain/ea7cd30a-7230-43af-b7d4-228ae632c817/.user_uploaded/media_1792319869571_66d90c81.jpg';
  
  const logoMeta = await sharp(logoPath).metadata();
  console.log('Logo:', logoMeta.width, 'x', logoMeta.height, 'format:', logoMeta.format, 'hasAlpha:', logoMeta.hasAlpha);
  
  const heroMeta = await sharp(heroPath).metadata();
  console.log('Hero:', heroMeta.width, 'x', heroMeta.height, 'format:', heroMeta.format);

  const { data, info } = await sharp(logoPath).raw().toBuffer({ resolveWithObject: true });
  
  const colorCounts = {};
  let totalOpaque = 0;
  
  for (let i = 0; i < data.length; i += info.channels) {
    const a = info.channels === 4 ? data[i + 3] : 255;
    if (a > 80) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      totalOpaque++;
      
      const qr = Math.min(255, Math.round(r / 16) * 16);
      const qg = Math.min(255, Math.round(g / 16) * 16);
      const qb = Math.min(255, Math.round(b / 16) * 16);
      const key = qr + ',' + qg + ',' + qb;
      colorCounts[key] = (colorCounts[key] || 0) + 1;
    }
  }
  
  console.log('\nTop logo colors (quantized):');
  const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);
  sorted.forEach(([c, cnt]) => {
    const hex = c.split(',').map(n => Math.min(255, parseInt(n)).toString(16).padStart(2, '0')).join('');
    console.log(`rgb(${c}) -> #${hex} (${((cnt / totalOpaque) * 100).toFixed(1)}%)`);
  });

  // Also check hero image dominant colors
  const heroThumb = await sharp(heroPath).resize(100, 100, { fit: 'cover' }).raw().toBuffer({ resolveWithObject: true });
  const heroCounts = {};
  for (let i = 0; i < heroThumb.data.length; i += heroThumb.info.channels) {
    const r = heroThumb.data[i];
    const g = heroThumb.data[i + 1];
    const b = heroThumb.data[i + 2];
    const qr = Math.min(255, Math.round(r / 20) * 20);
    const qg = Math.min(255, Math.round(g / 20) * 20);
    const qb = Math.min(255, Math.round(b / 20) * 20);
    const key = qr + ',' + qg + ',' + qb;
    heroCounts[key] = (heroCounts[key] || 0) + 1;
  }
  console.log('\nTop hero photo colors:');
  const sortedHero = Object.entries(heroCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  sortedHero.forEach(([c, cnt]) => {
    const hex = c.split(',').map(n => Math.min(255, parseInt(n)).toString(16).padStart(2, '0')).join('');
    console.log(`rgb(${c}) -> #${hex} (${((cnt / 10000) * 100).toFixed(1)}%)`);
  });
}

analyze().catch(console.error);
