// Doc §3.1: la imagen fuente debe ser .webp. Este script convierte los
// archivos crudos de _raw_img/ (jpg/jpeg/png) a .webp en src/assets/,
// conservando subcarpetas. Usa sharp (ya es dependencia del proyecto).
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const RAW = '_raw_img';
const DEST = 'src/assets';
const EXT = /\.(jpe?g|png)$/i;

const jobs = [];
async function walk(sub = '') {
  let entries;
  try {
    entries = await readdir(join(RAW, sub), { withFileTypes: true });
  } catch {
    console.log(`(sin carpeta ${RAW}/) nada que convertir`);
    return;
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    if (entry.isDirectory()) await walk(join(sub, entry.name));
    else if (EXT.test(entry.name)) jobs.push(join(sub, entry.name));
  }
}
await walk();

let ok = 0;
for (const rel of jobs) {
  const src = join(RAW, rel);
  const out = join(DEST, rel.replace(EXT, '.webp'));
  await mkdir(dirname(out), { recursive: true });
  await sharp(src)
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  const s = await stat(out);
  console.log(`✓ ${out}  (${Math.round(s.size / 1024)} KB)`);
  ok++;
}
console.log(`DONE_WEBP ${ok} archivos`);
