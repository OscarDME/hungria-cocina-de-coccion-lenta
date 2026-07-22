// apply-country.mjs — transforma una carpeta de país (se corre DESDE la carpeta).
// Uso:
//   node scripts/apply-country.mjs \
//     --mockup "/abs/Mockups/Estonia.png" \
//     --logo   "/abs/Logos-.../X-garantia.webp"   (o "" si no hay) \
//     --slug   aeglane-kupsetamine \
//     --site   aeglane-kupsetamine
//
// Efectos (idempotente):
//   A2  src/assets/hero-mockup.webp  <- mockup del país (webp, q85, <=1200x1600)
//   A3  src/assets/garantia.webp     <- logo (si hay) + inyecta sello en FinalCta.astro
//                                       (si NO hay: revierte FinalCta y borra garantia.webp)
//   A4  src/lib/checkout.js          <- los 3 checkouts = el único slug del país
//   A5  astro.config.mjs `site` y copy.js `canonical` -> https://<site>.crearis.online
import sharp from 'sharp';
import { readFileSync, writeFileSync, copyFileSync, existsSync, rmSync } from 'node:fs';

// ---- args ----
const args = {};
for (let i = 2; i < process.argv.length; i += 2) {
  const k = process.argv[i].replace(/^--/, '');
  args[k] = process.argv[i + 1] ?? '';
}
const { mockup, logo = '', slug, site } = args;
if (!mockup || !slug || !site) {
  console.error('FALTAN args: --mockup, --slug, --site son obligatorios');
  process.exit(1);
}

const FINAL_CTA = 'src/components/FinalCta.astro';
const IMPORT_LINE = "import ctaImg from '../assets/hero-mockup.webp';";
const GAR_IMPORT = "import garantia from '../assets/garantia.webp';";
const BADGE = `
          <div class="mt-6">
            <Image
              src={garantia}
              alt="Garantie"
              widths={[160, 240, 320]}
              sizes="200px"
              formats={['avif', 'webp']}
              quality={85}
              loading="lazy"
              class="h-auto w-44"
            />
          </div>`;
// Ancla: justo después del <p> del ctaNote.
const CTANOTE_CLOSE = '{finalCta.ctaNote}\n          </p>';

// ---- A2: mockup -> hero-mockup.webp ----
await sharp(mockup)
  .resize({ width: 1200, height: 1600, fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile('src/assets/hero-mockup.webp');
console.log('A2 hero-mockup.webp OK');

// ---- A3: logo de garantía + FinalCta ----
let cta = readFileSync(FINAL_CTA, 'utf8');
// primero, dejar FinalCta en estado limpio (sin import ni badge previos)
cta = cta.replace('\n' + GAR_IMPORT, '');
cta = cta.replace(BADGE, '');

if (logo) {
  copyFileSync(logo, 'src/assets/garantia.webp');
  // inyectar import tras el import de ctaImg
  if (!cta.includes(GAR_IMPORT)) {
    cta = cta.replace(IMPORT_LINE, IMPORT_LINE + '\n' + GAR_IMPORT);
  }
  // inyectar badge tras el cierre del <p> del ctaNote
  if (!cta.includes('src={garantia}')) {
    if (!cta.includes(CTANOTE_CLOSE)) {
      console.error('A3 ERROR: no encontré el ancla del ctaNote en FinalCta.astro');
      process.exit(2);
    }
    cta = cta.replace(CTANOTE_CLOSE, CTANOTE_CLOSE + BADGE);
  }
  console.log('A3 logo garantía OK (con sello)');
} else {
  if (existsSync('src/assets/garantia.webp')) rmSync('src/assets/garantia.webp');
  console.log('A3 sin logo (país sin garantía) OK');
}
writeFileSync(FINAL_CTA, cta);

// ---- A4: checkout.js (3 URLs = mismo slug) ----
const checkoutJs = `// URLs de checkout por país (config, NO copy). Los 3 botones usan el mismo checkout.
export const CHECKOUT = {
  ebooks: 'https://www.oriopay.app/p/${slug}',
  hardcoverNL: 'https://www.oriopay.app/p/${slug}',
  hardcoverAbroad: 'https://www.oriopay.app/p/${slug}',
};
`;
writeFileSync('src/lib/checkout.js', checkoutJs);
console.log('A4 checkout.js OK ->', slug);

// ---- A5: site (astro.config) + canonical (copy.js) ----
const targetUrl = `https://${site}.crearis.online`;
let cfg = readFileSync('astro.config.mjs', 'utf8');
cfg = cfg.replace(/site:\s*'[^']*'/, `site: '${targetUrl}'`);
writeFileSync('astro.config.mjs', cfg);

let copyJs = readFileSync('src/lib/copy.js', 'utf8');
copyJs = copyJs.replace(/canonical:\s*'[^']*'/, `canonical: '${targetUrl}'`);
writeFileSync('src/lib/copy.js', copyJs);
console.log('A5 site/canonical OK ->', targetUrl);

console.log('DONE_APPLY', site);
