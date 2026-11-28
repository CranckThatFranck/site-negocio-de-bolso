import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');

const expectedFiles = [
  'index.html',
  'privacidade/index.html',
  'termos/index.html',
  'ajuda/index.html',
  'privacy/index.html',
  'help/index.html',
  'privacyOwnGemini/index.html',
  'nichos/barbearias-e-estetica/index.html',
  'nichos/assistencia-tecnica/index.html',
  'nichos/comercio-e-lojas/index.html',
  'nichos/prestadores-de-servico/index.html',
  'privacidade.html',
  'sitemap.xml',
  'robots.txt'
];

for (const rel of expectedFiles) {
  const full = path.join(DIST_DIR, rel);
  assert.ok(fs.existsSync(full), `Missing static artifact: dist/${rel}`);
  assert.ok(fs.statSync(full).size > 0, `Empty artifact: dist/${rel}`);
}

const subRouteHtml = fs.readFileSync(path.join(DIST_DIR, 'nichos/barbearias-e-estetica/index.html'), 'utf8');
assert.ok(!subRouteHtml.includes('"./assets/'), 'Sub-route HTML must use root-relative /assets/, not ./assets/');
assert.ok(subRouteHtml.includes('hreflang="pt-BR"'), 'Missing pt-BR hreflang');
assert.ok(subRouteHtml.includes('hreflang="pt-PT"'), 'Missing pt-PT hreflang');
assert.ok(subRouteHtml.includes('hreflang="pt-AO"'), 'Missing pt-AO hreflang');
assert.ok(subRouteHtml.includes('hreflang="pt-MZ"'), 'Missing pt-MZ hreflang');
assert.ok(subRouteHtml.includes('application/ld+json'), 'Missing JSON-LD SoftwareApplication');

const privacyHtml = fs.readFileSync(path.join(DIST_DIR, 'privacidade/index.html'), 'utf8');
assert.ok(privacyHtml.includes('18+'), 'Privacy HTML metadata must mention 18+');

const sitemap = fs.readFileSync(path.join(DIST_DIR, 'sitemap.xml'), 'utf8');
for (const url of [
  'https://negociodebolso.com/privacidade',
  'https://negociodebolso.com/termos',
  'https://negociodebolso.com/ajuda',
  'https://negociodebolso.com/nichos/barbearias-e-estetica',
  'https://negociodebolso.com/nichos/assistencia-tecnica',
  'https://negociodebolso.com/nichos/comercio-e-lojas',
  'https://negociodebolso.com/nichos/prestadores-de-servico'
]) {
  assert.ok(sitemap.includes(url), `sitemap.xml missing URL: ${url}`);
}

const privacySrc = fs.readFileSync(path.resolve('src/PrivacyPage.tsx'), 'utf8');
assert.ok(privacySrc.includes('maiores de 18 anos'), 'PrivacyPage.tsx missing 18+ clause');
assert.ok(privacySrc.includes('o Gê'), 'PrivacyPage.tsx missing "o Gê"');

const termsSrc = fs.readFileSync(path.resolve('src/TermsPage.tsx'), 'utf8');
assert.ok(termsSrc.includes('pelo menos 18 anos'), 'TermsPage.tsx missing 18+ clause');
assert.ok(termsSrc.includes('O Gê'), 'TermsPage.tsx missing "O Gê"');

console.log(`ALL ${expectedFiles.length} STATIC ARTIFACTS & SEO/COMPLIANCE ASSERTIONS PASSED!`);
