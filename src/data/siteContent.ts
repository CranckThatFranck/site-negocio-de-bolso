export interface NicheConfig {
  slug: string;
  route: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  highlights: { title: string; desc: string }[];
  ctaLabel: string;
}

export interface RouteMeta {
  route: string;
  title: string;
  description: string;
}

export const SITE_ORIGIN = 'https://negociodebolso.com';
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.negociodebolso.app';
export const WEB_APP_URL = 'https://app.negociodebolso.com';

export const NICHES: NicheConfig[] = [
  {
    slug: 'barbearias-e-estetica',
    route: '/nichos/barbearias-e-estetica',
    name: 'Barbearias, Salões & Estética',
    seoTitle: 'App para Barbearia e Salão: Agenda e Caixa | Negócio de Bolso',
    seoDescription:
      'Organize agenda, ficha de anamnese e preferências do cliente, lembretes no WhatsApp e caixa no celular e computador.',
    eyebrow: 'Barbearias, Salões & Estética',
    headline: 'Agenda organizada, ficha do cliente e caixa sob controle.',
    subheadline:
      'Registre preferências de corte e alergias na Ficha & Questionário personalizado, confirme horários via WhatsApp com Templates e acompanhe seu lucro com o Gê.',
    highlights: [
      {
        title: 'Ficha & Questionário por atendimento',
        desc: 'Anamnese, tipo de cabelo/pele, alergias e preferências salvas direto no histórico do cliente.'
      },
      {
        title: 'Confirmação e cobrança via WhatsApp',
        desc: 'Templates prontos com nome, data, hora e valor preenchidos automaticamente em 1 toque.'
      },
      {
        title: 'Fidelidade e retorno de clientes',
        desc: 'Acompanhe frequência, vendas a prazo e programas de fidelidade sem planilhas.'
      }
    ],
    ctaLabel: 'Começar grátis no Android'
  },
  {
    slug: 'assistencia-tecnica',
    route: '/nichos/assistencia-tecnica',
    name: 'Assistências Técnicas & Oficinas',
    seoTitle: 'Sistema para Assistência Técnica e OS | Negócio de Bolso',
    seoDescription:
      'Checklist de entrada de equipamento, controle de peças em estoque, recibo PDF executivo e sincronização entre balcão e bancada.',
    eyebrow: 'Assistências Técnicas & Oficinas',
    headline: 'Checklist de entrada, peças sob controle e recibo em PDF.',
    subheadline:
      'Padronize o recebimento de aparelhos com ficha técnica, controle o estoque de peças e sincronize o atendimento em tempo real entre balcão e bancada.',
    highlights: [
      {
        title: 'Checklist de entrada e defeito relatado',
        desc: 'Registre modelo, número de série, acessórios e estado físico na ficha do serviço.'
      },
      {
        title: 'Peças, materiais e alertas de reposição',
        desc: 'Controle custo real, margem e estoque mínimo de peças usadas em cada reparo.'
      },
      {
        title: 'PDF Solid & Chic + Multi-dispositivo',
        desc: 'Gere relatórios e comprovantes em PDF legíveis e acompanhe tudo no celular e na Web.'
      }
    ],
    ctaLabel: 'Testar grátis agora'
  },
  {
    slug: 'comercio-e-lojas',
    route: '/nichos/comercio-e-lojas',
    name: 'Comércio Local, Lojas & Mercadinhos',
    seoTitle: 'PDV Offline e Estoque para Lojas | Negócio de Bolso',
    seoDescription:
      'Frente de caixa offline no celular, controle de estoque, vendas a prazo com cobrança automática no WhatsApp e análises do Gê.',
    eyebrow: 'Comércio Local, Lojas & Mercadinhos',
    headline: 'Frente de caixa rápido mesmo sem internet.',
    subheadline:
      'Registre vendas em segundos, controle estoque com precisão, cobre vendas a prazo com lembretes no WhatsApp e conte com o Gê para proteger sua margem.',
    highlights: [
      {
        title: 'PDV 100% offline-first',
        desc: 'Não pare de vender quando a internet oscilar; tudo sincroniza na nuvem ao reconectar.'
      },
      {
        title: 'Cobrança amigável de vendas a prazo',
        desc: 'Fila inteligente com clientes em aberto e disparo de lembrete pelo WhatsApp em 1 toque.'
      },
      {
        title: 'O Gê analisa sua margem real',
        desc: 'Ele aponta produtos com giro lento, risco de ruptura e projeções de fluxo de caixa.'
      }
    ],
    ctaLabel: 'Baixar grátis na Play Store'
  },
  {
    slug: 'prestadores-de-servico',
    route: '/nichos/prestadores-de-servico',
    name: 'Prestadores de Serviços & Autônomos',
    seoTitle: 'Gestão para Autônomos e Serviços | Negócio de Bolso',
    seoDescription:
      'Saia das planilhas: controle financeiro simples, agenda, recibos em PDF no celular e projeção de caixa com o Gê.',
    eyebrow: 'Prestadores de Serviços & Autônomos',
    headline: 'Saia do caderninho e profissionalize seu atendimento.',
    subheadline:
      'Comece grátis com até 100 clientes e 100 produtos/serviços, envie comprovantes em PDF no padrão executivo e acompanhe suas contas a receber com clareza.',
    highlights: [
      {
        title: 'Plano Gratuito generoso para começar',
        desc: 'Use offline no Android sem custo e evolua para o Premium na nuvem quando seu negócio crescer.'
      },
      {
        title: 'Relatórios e comprovantes em PDF',
        desc: 'Exporte fechamentos, receitas e histórico de atendimentos prontos para compartilhar.'
      },
      {
        title: 'Projeção financeira com o Gê',
        desc: 'Ele ajuda você a separar entradas, custos e previsões sem complicação.'
      }
    ],
    ctaLabel: 'Começar grátis no Android'
  }
];

export const ROUTE_METAS: RouteMeta[] = [
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
    description:
      'Política de Privacidade do Negócio de Bolso (Gaia Works): plataforma profissional para maiores de 18 anos e conformidade LGPD.'
  },
  {
    route: '/help',
    title: 'Central de Ajuda | Negócio de Bolso',
    description:
      'Central de Ajuda do Negócio de Bolso para microempreendedores e pequenos negócios.'
  },
  {
    route: '/privacyOwnGemini',
    title: 'Política de Privacidade — OwnGemini | Gaia Works',
    description: 'Política de Privacidade da extensão OwnGemini desenvolvida pela Gaia Works.'
  },
  ...NICHES.map((n) => ({
    route: n.route,
    title: n.seoTitle,
    description: n.seoDescription
  }))
];
