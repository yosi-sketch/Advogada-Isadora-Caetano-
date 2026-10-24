const fs = require('fs');
const content = fs.readFileSync('app/page.tsx', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);

lines.forEach((line, idx) => {
  if (line.includes('<section') || line.includes('id="') || line.includes('function ') || line.includes('interface ')) {
    if (line.trim().length < 100) console.log(`${idx + 1}: ${line.trim()}`);
  }
});
