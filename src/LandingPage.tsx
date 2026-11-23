import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Smartphone, MonitorDot, WifiOff, Receipt,
  Users, BarChart3, ShieldCheck, Sparkles,
  CheckCircle2, Package, Wallet, CalendarClock,
  ChevronDown, ArrowRight, Mail, CloudCog
} from 'lucide-react';

import gaiaWorksLogo from './img/gaiaworks.png';

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

const PILARES = [
  {
    icon: WifiOff,
    title: 'Offline-First de verdade',
    desc: 'Venda no balcão, na rua ou em eventos sem depender de sinal. Tudo sincroniza automaticamente quando a conexão voltar.'
  },
  {
    icon: CloudCog,
    title: 'Celular + Painel Web',
    desc: 'Agilidade do Android na linha de frente conectada em tempo real ao Painel Web para gestão estratégica no computador.'
  },
  {
    icon: Sparkles,
    title: 'O Gê, seu copiloto de IA',
    desc: 'Análise preditiva de caixa, alertas de estoque baixo e recomendações práticas em linguagem direta para decidir melhor.'
  },
  {
    icon: ShieldCheck,
    title: 'Segurança corporativa',
    desc: 'Arquitetura multi-tenant isolada, backup automático em nuvem e controle de permissões por usuário da equipe.'
  }
];

const MODULOS = [
  {
    icon: Receipt,
    title: 'PDV & Vendas Rápidas',
    desc: 'Feche vendas em segundos com leitor de código de barras, Pix, cartão, dinheiro, cálculo de troco e comprovante digital.'
  },
  {
    icon: Package,
    title: 'Produtos & Estoque Inteligente',
    desc: 'Controle entradas, ajustes, margem e receba alertas em âmbar antes que os itens campeões de venda acabem.'
  },
  {
    icon: Users,
    title: 'Clientes, Fidelidade & CRM',
    desc: 'Histórico completo de compras, lembretes de relacionamento, aniversariantes e programa de pontos integrado.'
  },
  {
    icon: Wallet,
    title: 'Vendas a Prazo (Fiado)',
    desc: 'Saiba exatamente quem deve, acompanhe vencimentos, registre pagamentos parciais e reduza a inadimplência.'
  },
  {
    icon: BarChart3,
    title: 'Financeiro & Fechamento de Caixa',
    desc: 'Abertura e fechamento de caixa, fluxo financeiro diário, despesas, receitas e relatórios prontos para exportar.'
  },
  {
    icon: CalendarClock,
    title: 'Serviços, Pedidos & Agenda',
    desc: 'Agende atendimentos, acompanhe pedidos por status e organize insumos de cada serviço no mesmo aplicativo.'
  }
];

const FAQS = [
  {
    q: 'O Negócio de Bolso funciona sem internet?',
    a: 'Sim. O aplicativo Android foi construído com arquitetura offline-first: você registra vendas, consulta produtos, cadastra clientes e controla o fiado normalmente sem internet. No plano Premium, tudo sincroniza na nuvem assim que o aparelho reconecta.'
  },
  {
    q: 'O plano Grátis tem prazo de validade ou exige cartão?',
    a: 'Não. O plano Free é gratuito para sempre (R$ 0), sem cartão de crédito, e permite gerenciar até 100 produtos e 100 clientes no aplicativo Android.'
  },
  {
    q: 'Como funciona o acesso ao Painel Web?',
    a: 'O Painel Web (app.negociodebolso.com) faz parte do plano Premium. Basta assinar pelo app Android e entrar com a mesma conta no navegador do computador ou tablet para gerenciar relatórios, equipe e fluxo de caixa em tela grande.'
  },
  {
    q: 'O que o Gê (Copiloto de IA) faz pelo meu negócio?',
    a: 'O Gê analisa suas vendas, estoque e fluxo financeiro para gerar projeções, sinalizar produtos parados ou em falta, alertar sobre inadimplência e responder dúvidas operacionais em português claro.'
  },
  {
    q: 'Posso usar fora do Brasil? Como funciona o preço?',
    a: 'Sim. O aplicativo está disponível na Google Play Store em múltiplos países. Os valores de referência no Brasil são R$ 20,90/mês ou R$ 199,90/ano, e para outros países lusófonos a Google Play realiza a conversão automática para a moeda local no momento da assinatura.'
  }
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-[#09090B] text-[#F4F4F5] selection:bg-[#F4F4F5] selection:text-[#09090B]"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#2A2A32] bg-[#09090B]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo_horizontal_dark.svg"
              alt="Negócio de Bolso"
              className="h-9 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#A1A1AA] md:flex">
            <a href="#recursos" className="transition-colors hover:text-[#F4F4F5]">Recursos</a>
            <a href="#ge-ia" className="transition-colors hover:text-[#F4F4F5]">O Gê (IA)</a>
            <a href="#ecossistema" className="transition-colors hover:text-[#F4F4F5]">Painel Web</a>
            <a href="#planos" className="transition-colors hover:text-[#F4F4F5]">Planos</a>
            <a href="#duvidas" className="transition-colors hover:text-[#F4F4F5]">Dúvidas</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://app.negociodebolso.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl border border-[#2A2A32] bg-[#141417] px-4 py-2.5 text-sm font-medium text-[#F4F4F5] transition-colors hover:border-[#3F3F46] hover:bg-[#1C1C21] sm:inline-flex"
            >
              Entrar no Painel Web
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F4F4F5] px-4 py-2.5 text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90"
            >
              Baixar Grátis
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2A2A32] bg-[#141417] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              ANDROID + PAINEL WEB · OFFLINE-FIRST
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#F4F4F5] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Tecnologia executiva para o seu negócio crescer — no celular e na nuvem.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
              PDV rápido, controle de estoque, clientes, fiado, caixa e <strong className="font-semibold text-[#F4F4F5]">o Gê</strong>, seu copiloto de inteligência artificial. Vender, controlar, crescer — sem planilhas e sem depender de internet.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F4F4F5] px-7 text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90 sm:w-auto"
              >
                Baixar Grátis na Google Play
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://app.negociodebolso.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#2A2A32] bg-[#141417] px-7 text-sm font-semibold text-[#F4F4F5] transition-colors hover:border-[#3F3F46] hover:bg-[#1C1C21] sm:w-auto"
              >
                Entrar no Painel Web
              </a>
            </div>

            <p className="mt-4 text-xs text-[#71717A]">
              Comece grátis no Android sem cartão de crédito · Até 100 produtos e 100 clientes no plano Free.
            </p>
          </motion.div>

          {/* Visual Preview Card */}
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[20px] border border-[#2A2A32] bg-[#141417]">
            <img
              src="/opengraph_dark_1200x630.png"
              alt="Negócio de Bolso — Vender, controlar, crescer."
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* Faixa de Pilares */}
        <section className="border-y border-[#2A2A32] bg-[#141417]/50 py-16">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {PILARES.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={pilar.title}
                  className="rounded-2xl border border-[#2A2A32] bg-[#141417] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21]">
                    <Icon className="h-5 w-5 text-[#F4F4F5]" />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-[#F4F4F5]">{pilar.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{pilar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Seção Ecossistema (Mobile + Painel Web) */}
        <section id="ecossistema" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
              Ecossistema integrado
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
              Velocidade no celular. Visão executiva no computador.
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA]">
              Um único sistema conectado que acompanha o ritmo real do seu balcão e entrega controle total quando você senta para analisar resultados.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[20px] border border-[#2A2A32] bg-[#141417] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21]">
                <Smartphone className="h-6 w-6 text-[#F4F4F5]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#F4F4F5]">App Android (Linha de Frente)</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                Projetado para operar com uma só mão no dia a dia: venda em segundos mesmo sem sinal, escaneie códigos de barras, envie comprovantes e consulte clientes na hora.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-[#E4E4E7]">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> PDV rápido offline-first com cálculo de troco</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Tema Dark Obsidiana e Light Executive</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Alertas automáticos de estoque baixo e fiado</li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-[#2A2A32] bg-[#141417] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21]">
                <MonitorDot className="h-6 w-6 text-[#F4F4F5]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#F4F4F5]">Painel Web (Gestão Estratégica)</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                Acesse <span className="font-medium text-[#F4F4F5]">app.negociodebolso.com</span> no navegador para enxergar projeções de caixa, desempenho da equipe, churn, inadimplência e relatórios completos.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-[#E4E4E7]">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Sincronização contínua em nuvem com o celular</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Gestão de equipe com permissões por perfil</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Fluxo de caixa, projeções e insights do Gê</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6 Cards de Módulos */}
        <section id="recursos" className="border-t border-[#2A2A32] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Módulos completos
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
                Tudo o que a sua operação precisa em um só padrão.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MODULOS.map((mod) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.title}
                    className="rounded-2xl border border-[#2A2A32] bg-[#141417] p-6 transition-colors hover:border-[#3F3F46]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21]">
                      <Icon className="h-5 w-5 text-[#F4F4F5]" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#F4F4F5]">{mod.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{mod.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção O Gê — Copiloto de IA */}
        <section id="ge-ia" className="border-t border-[#2A2A32] bg-[#141417]/40 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[20px] border border-[#2A2A32] bg-[#141417] p-8 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                    <Sparkles className="h-3.5 w-3.5" />
                    O Gê · Copiloto de IA
                  </span>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
                    Conheça o Gê, seu copiloto executivo de inteligência artificial.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#A1A1AA]">
                    Integrado ao seu app Android e ao Painel Web, <strong className="font-semibold text-[#F4F4F5]">o Gê</strong> lê os números reais da sua empresa em tempo real para antecipar riscos, apontar oportunidades de venda e responder suas perguntas operacionais sem termos complicados.
                  </p>
                </div>

                <div className="space-y-3 lg:col-span-5">
                  <div className="rounded-xl border border-[#2A2A32] bg-[#1C1C21] p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
                      Projeção do Gê
                    </div>
                    <p className="mt-1.5 text-sm text-[#E4E4E7]">
                      Seu caixa projeta crescimento de 14% esta semana com destaque para vendas via Pix.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#2A2A32] bg-[#1C1C21] p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
                      Alerta do Gê
                    </div>
                    <p className="mt-1.5 text-sm text-[#E4E4E7]">
                      3 itens de alto giro estão abaixo do estoque mínimo. Reposição recomendada hoje.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#2A2A32] bg-[#1C1C21] p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      Insight do Gê
                    </div>
                    <p className="mt-1.5 text-sm text-[#E4E4E7]">
                      Envie lembrete amigável para 2 contas a prazo que vencem em 48 horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Planos */}
        <section id="planos" className="border-t border-[#2A2A32] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Planos transparentes
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
                Comece grátis e evolua quando o negócio pedir escala.
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {/* Plano Free */}
              <div className="flex flex-col justify-between rounded-[20px] border border-[#2A2A32] bg-[#141417] p-8">
                <div>
                  <span className="inline-flex rounded-full border border-[#2A2A32] bg-[#1C1C21] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                    Free
                  </span>
                  <div className="mt-5 flex items-baseline gap-1 tabular-nums">
                    <span className="text-4xl font-bold text-[#F4F4F5]">R$ 0</span>
                    <span className="text-sm text-[#A1A1AA]">/ para sempre</span>
                  </div>
                  <p className="mt-3 text-sm text-[#A1A1AA]">
                    Ideal para começar hoje mesmo no Android sem custo e sem cartão de crédito.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-[#E4E4E7]">
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Até 100 produtos cadastrados</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Até 100 clientes cadastrados</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> PDV offline-first, vendas e estoque</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Controle de fiado e comprovantes</li>
                  </ul>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21] text-sm font-semibold text-[#F4F4F5] transition-colors hover:border-[#3F3F46]"
                >
                  Baixar Grátis no Android
                </a>
              </div>

              {/* Plano Premium */}
              <div className="flex flex-col justify-between rounded-[20px] border border-[#F4F4F5]/40 bg-[#141417] p-8">
                <div>
                  <span className="inline-flex rounded-full bg-[#F4F4F5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#09090B]">
                    Premium
                  </span>
                  <div className="mt-5 flex items-baseline gap-1.5 tabular-nums">
                    <span className="text-4xl font-bold text-[#F4F4F5]">R$ 20,90</span>
                    <span className="text-sm text-[#A1A1AA]">/ mês</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-[#10B981] tabular-nums">
                    ou R$ 199,90/ano no plano anual (economize mais de 20%)
                  </p>
                  <p className="mt-3 text-sm text-[#A1A1AA]">
                    Ecossistema completo para quem quer escala, equipe conectada e inteligência artificial.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-[#E4E4E7]">
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Produtos, clientes e vendas ilimitados</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Acesso completo ao Painel Web na nuvem</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> O Gê (Copiloto de IA) + projeções de caixa</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Fechamento de caixa, equipe e relatórios avançados</li>
                  </ul>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#F4F4F5] text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90"
                >
                  Assinar pelo App Android
                </a>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-[#71717A]">
              * Valores exibidos em Reais (BRL) para o Brasil. Para empreendedores em Portugal, Angola, Moçambique e demais países lusófonos, a Google Play realiza a conversão automática para a moeda local no checkout.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="border-t border-[#2A2A32] py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#F4F4F5]">
                Respostas diretas antes de começar.
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-[#2A2A32] bg-[#141417]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-semibold text-[#F4F4F5] sm:text-base">{item.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[#A1A1AA] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-[#2A2A32] px-6 py-4 text-sm leading-relaxed text-[#A1A1AA]">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="border-t border-[#2A2A32] py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-[20px] border border-[#2A2A32] bg-[#141417] px-6 py-14 sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
                Pronto para profissionalizar sua gestão hoje?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#A1A1AA]">
                Baixe grátis no Android agora e leve o padrão executivo do Negócio de Bolso para cada venda.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <a
                  href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F4F4F5] px-7 text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Baixar Grátis
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://app.negociodebolso.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21] px-7 text-sm font-semibold text-[#F4F4F5] transition-colors hover:border-[#3F3F46] sm:w-auto"
                >
                  Entrar no Painel Web
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-[#2A2A32] bg-[#09090B] py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={gaiaWorksLogo} alt="Gaia Works" className="h-7 w-auto opacity-85" />
            <span className="text-xs text-[#71717A]">
              © {new Date().getFullYear()} Negócio de Bolso · Por Gaia Works. Vender, controlar, crescer.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#A1A1AA]">
            <Link to="/ajuda" className="transition-colors hover:text-[#F4F4F5]">Central de Ajuda</Link>
            <Link to="/privacidade" className="transition-colors hover:text-[#F4F4F5]">Privacidade</Link>
            <a
              href="mailto:contato@negociodebolso.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F4F4F5]"
            >
              <Mail className="h-3.5 w-3.5" />
              contato@negociodebolso.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
