import { pdf } from 'pdf-to-img';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'floor-plans');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const pdfs = [
  { file: 'C:/Users/ZhuanZ（无密码）/Desktop/20尺布局中英.pdf', prefix: '20ft' },
  { file: 'C:/Users/ZhuanZ（无密码）/Desktop/30尺布局中英.pdf', prefix: '30ft' },
  { file: 'C:/Users/ZhuanZ（无密码）/Desktop/40尺布局中英.pdf', prefix: '40ft' },
];

for (const { file, prefix } of pdfs) {
  console.log(`Converting ${file}...`);
  const doc = await pdf(file, { scale: 2 });
  let i = 1;
  for await (const page of doc) {
    const outFile = path.join(outDir, `${prefix}-page${i}.png`);
    fs.writeFileSync(outFile, page);
    console.log(`  Saved ${outFile}`);
    i++;
  }
}
console.log('Done!');
