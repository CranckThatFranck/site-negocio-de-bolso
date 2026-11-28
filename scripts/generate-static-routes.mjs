import fs from 'node:fs';
import path from 'node:path';

const SITE_ORIGIN = 'https://negociodebolso.com';
const DIST_DIR = path.resolve('dist');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');

const ROUTES = [
  {
    route: '/',
    title: 'Negócio de Bolso v1.2.1 — Tecnologia executiva para o seu negócio crescer',
    description:
      'Frente de caixa, estoque, vendas a prazo com cobrança automática no WhatsApp, relatórios em PDF e o Gê — seu copiloto de IA. Comece grátis no Android.'
  },
  {
    route: '/privacidade',
    title: 'Política de Privacidade (18+) | Negócio de Bolso',
    description:
      'Política de Privacidade do Negócio de Bolso (Gaia Works): plataforma profissional para maiores de 18 anos, LGPD, segurança e uso responsável do Gê.'
  },
  {
    route: '/termos',
    title: 'Termos de Uso (18+) | Negócio de Bolso',
    description:
      'Termos de Uso do Negócio de Bolso (Gaia Works): elegibilidade 18+, Plano Gratuito e Premium, responsabilidade comercial e diretrizes do Gê.'
  },
  {
    route: '/ajuda',
    title: 'Central de Ajuda | Negócio de Bolso',
    description:
      'Dúvidas frequentes, início rápido, sincronização multi-dispositivo, cobrança no WhatsApp e suporte do Negócio de Bolso.'
  },
  {
    route: '/privacy',
    title: 'Política de Privacidade (18+) | Negócio de Bolso',
    description: 'Política de Privacidade do Negócio de Bolso (Gaia Works).'
  },
  {
    route: '/help',
    title: 'Central de Ajuda | Negócio de Bolso',
    description: 'Central de Ajuda do Negócio de Bolso.'
  },
  {
    route: '/privacyOwnGemini',
    title: 'Política de Privacidade — OwnGemini | Gaia Works',
    description: 'Política de Privacidade da extensão OwnGemini desenvolvida pela Gaia Works.'
  },
  {
    route: '/nichos/barbearias-e-estetica',
    title: 'App para Barbearia e Salão: Agenda e Caixa | Negócio de Bolso',
    description:
      'Organize agenda, ficha de anamnese e preferências do cliente, lembretes no WhatsApp e caixa no celular e computador.'
  },
  {
    route: '/nichos/assistencia-tecnica',
    title: 'Sistema para Assistência Técnica e OS | Negócio de Bolso',
    description:
      'Checklist de entrada de equipamento, controle de peças em estoque, recibo PDF executivo e sincronização entre balcão e bancada.'
  },
  {
    route: '/nichos/comercio-e-lojas',
    title: 'PDV Offline e Estoque para Lojas | Negócio de Bolso',
    description:
      'Frente de caixa offline no celular, controle de estoque, vendas a prazo com cobrança automática no WhatsApp e análises do Gê.'
  },
  {
    route: '/nichos/prestadores-de-servico',
    title: 'Gestão para Autônomos e Serviços | Negócio de Bolso',
    description:
      'Saia das planilhas: controle financeiro simples, agenda, recibos em PDF no celular e projeção de caixa com o Gê.'
  }
];

function buildSeoHeadTags(routeMeta) {
  const canonicalUrl = routeMeta.route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${routeMeta.route}`;
  const hreflangs = ['pt-BR', 'pt-PT', 'pt-AO', 'pt-MZ', 'x-default']
    .map((lang) => `    <link rel="alternate" hreflang="${lang}" href="${canonicalUrl}" />`)
    .join('\n');

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Negócio de Bolso',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, Web',
    softwareVersion: '1.2.1',
    url: canonicalUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gaia Works'
    }
  });

  return [
    `    <link rel="canonical" href="${canonicalUrl}" />`,
    hreflangs,
    `    <meta property="og:url" content="${canonicalUrl}" />`,
    `    <script type="application/ld+json">${jsonLd}</script>`
  ].join('\n');
}

function injectMeta(baseHtml, routeMeta) {
  let html = baseHtml;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${routeMeta.title}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${routeMeta.description}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${routeMeta.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${routeMeta.description}" />`
  );
  html = html.replace('</head>', `${buildSeoHeadTags(routeMeta)}\n  </head>`);
  return html;
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf8');

for (const meta of ROUTES) {
  const html = injectMeta(baseHtml, meta);
  if (meta.route === '/') {
    fs.writeFileSync(BASE_HTML_PATH, html, 'utf8');
  } else {
    const targetDir = path.join(DIST_DIR, meta.route.replace(/^\//, ''));
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  }
}

// Redirect legado para /privacidade.html -> /privacidade
const legacyPrivacyHtml = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/privacidade" />
    <link rel="canonical" href="${SITE_ORIGIN}/privacidade" />
    <title>Redirecionando — Política de Privacidade | Negócio de Bolso</title>
  </head>
  <body>
    <p>Redirecionando para <a href="/privacidade">/privacidade</a>...</p>
  </body>
</html>
`;
fs.writeFileSync(path.join(DIST_DIR, 'privacidade.html'), legacyPrivacyHtml, 'utf8');

// Gerar sitemap.xml e robots.txt atualizados
const today = '2026-11-28';
const sitemapUrls = ROUTES.filter((r) => !['/privacy', '/help'].includes(r.route))
  .map((r) => {
    const loc = r.route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${r.route}`;
    const priority = r.route === '/' ? '1.0' : r.route.startsWith('/nichos/') ? '0.8' : '0.7';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemapXml, 'utf8');

const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;
fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.join('public', 'robots.txt'), robotsTxt, 'utf8');

console.log(`Generated static SEO entrypoints for ${ROUTES.length} routes + sitemap.xml + robots.txt`);
