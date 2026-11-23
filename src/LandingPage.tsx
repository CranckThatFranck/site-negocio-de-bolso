import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Smartphone, MonitorDot, WifiOff, Receipt,
  Users, BarChart3, ShieldCheck, Sparkles,
  CheckCircle2, Package, Wallet, CalendarClock,
  ChevronDown, ArrowRight, Mail, Instagram, Linkedin
} from 'lucide-react';

import gaiaWorksLogo from './img/gaiaworks.png';

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

const PILARES = [
  {
    icon: WifiOff,
    title: 'Funciona sem internet',
    desc: 'Venda e registre movimentações normalmente. Tudo sincroniza quando voltar a conexão.'
  },
  {
    icon: ShieldCheck,
    title: 'Pensado para ser simples',
    desc: 'Interface limpa, leitura clara e zero complexidade de sistemas tradicionais.'
  },
  {
    icon: Sparkles,
    title: 'O Gê trabalha com você',
    desc: 'Copiloto de inteligência artificial integrado para projeções, análises e suporte imediato.'
  },
  {
    icon: MonitorDot,
    title: 'Do balcão ao escritório',
    desc: 'Opere rápido no celular e acompanhe relatórios executivos pelo computador.'
  }
];

const MODULOS = [
  {
    icon: Receipt,
    title: 'Frente de Caixa (PDV) & Pedidos',
    desc: 'Vendas rápidas, cálculo de troco, recibos, estornos e múltiplos meios de pagamento (dinheiro, cartão, transferência instantânea e a prazo).'
  },
  {
    icon: Package,
    title: 'Produtos & Estoque Inteligente',
    desc: 'Preço de custo, margem de lucro, entradas, inventário e alertas automáticos de reposição.'
  },
  {
    icon: Users,
    title: 'Clientes, Crédito & Fidelidade',
    desc: 'Histórico completo, controle transparente de vendas a prazo, aniversariantes e programa de fidelidade.'
  },
  {
    icon: Wallet,
    title: 'Caixa & Financeiro Completo',
    desc: 'Abertura, fechamento, conferência de caixa, fluxo financeiro e projeções futuras.'
  },
  {
    icon: CalendarClock,
    title: 'Serviços & Agendamentos',
    desc: 'Controle de horários vinculado a clientes, serviços prestados e materiais utilizados.'
  },
  {
    icon: BarChart3,
    title: 'Relatórios & Equipe (RBAC)',
    desc: 'Desempenho por vendedor, exportação em CSV/PDF e controle de acesso por perfil de usuário.'
  }
];

const FAQS = [
  {
    q: 'O aplicativo funciona mesmo sem internet?',
    a: 'Sim. O Negócio de Bolso é offline-first: você registra vendas, consulta estoque e atende clientes sem depender de conexão. No Plano Premium, os dados sincronizam automaticamente com a nuvem assim que houver internet.'
  },
  {
    q: 'O Negócio de Bolso funciona fora do Brasil?',
    a: 'Sim! O aplicativo e o Painel Web são usados por empreendedores em diversos países lusófonos, com linguagem simples e suporte a pagamentos universais (dinheiro, cartão, transferência e vendas a prazo).'
  },
  {
    q: 'O que acontece quando chego ao limite do Plano Gratuito?',
    a: 'Você nunca perde o que já cadastrou. Quando precisar de mais de 100 produtos ou 100 clientes, ou quiser acessar pelo computador e usar a nuvem, basta ativar o Plano Premium.'
  },
  {
    q: 'Existe versão para iPhone (iOS)?',
    a: 'Atualmente o aplicativo móvel é exclusivo para Android, e você pode acessar toda a gestão pelo navegador no computador ou celular através do Painel Web (app.negociodebolso.com) no Plano Premium.'
  },
  {
    q: 'Como o Gê (IA) ajuda no dia a dia?',
    a: 'O Gê é o seu copiloto de gestão: ele responde dúvidas sobre o uso do sistema, gera insights automáticos a partir das suas vendas e projeta o seu fluxo de caixa para ajudar nas decisões do negócio.'
  }
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-[#09090B] text-[#F4F4F5] selection:bg-[#F4F4F5] selection:text-[#09090B]"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* 2.1 Navbar */}
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
              href="https://app.negociodebolso.com"
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
        {/* 2.2 Hero Section */}
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
              Frente de caixa, estoque, clientes, vendas a prazo e um copiloto de IA que acompanha seus números. Comece grátis no Android e escale com o Painel Web.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F4F4F5] px-7 text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90 sm:w-auto"
              >
                Baixar na Google Play
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://app.negociodebolso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#2A2A32] bg-[#141417] px-7 text-sm font-semibold text-[#F4F4F5] transition-colors hover:border-[#3F3F46] hover:bg-[#1C1C21] sm:w-auto"
              >
                Acessar Painel Web
              </a>
            </div>

            <p className="mt-4 text-xs text-[#71717A]">
              Gratuito para começar · Funciona 100% offline · Sem cartão de crédito
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

        {/* 2.3 Faixa de Pilares */}
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

        {/* 2.4 Seção Ecossistema: Mobile + Painel Web */}
        <section id="ecossistema" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
              Ecossistema integrado
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
              Um ecossistema completo. No bolso ou na mesa.
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA]">
              O Negócio de Bolso une a agilidade do aplicativo Android offline-first com a visão estratégica do Painel Web em tempo real.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[20px] border border-[#2A2A32] bg-[#141417] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21]">
                <Smartphone className="h-6 w-6 text-[#F4F4F5]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#F4F4F5]">No ponto de venda ou em campo</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                Registre vendas em segundos, controle estoque, gerencie agendamentos e compartilhe recibos — mesmo sem sinal.
              </p>
            </div>

            <div className="rounded-[20px] border border-[#2A2A32] bg-[#141417] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21]">
                <MonitorDot className="h-6 w-6 text-[#F4F4F5]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#F4F4F5]">No computador, com visão executiva</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                Acompanhe indicadores de inadimplência, risco de perda de clientes (churn), mapa de calor de vendas e gerencie permissões da sua equipe.
              </p>
            </div>
          </div>
        </section>

        {/* 2.5 Módulos Principais (6 Cards) */}
        <section id="recursos" className="border-t border-[#2A2A32] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Módulos principais
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

        {/* 2.6 Seção O Gê — Copiloto de IA */}
        <section id="ge-ia" className="border-t border-[#2A2A32] bg-[#141417]/40 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[20px] border border-[#2A2A32] bg-[#141417] p-8 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                    <Sparkles className="h-3.5 w-3.5" />
                    INTELIGÊNCIA ARTIFICIAL INTEGRADA
                  </span>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
                    Conheça o Gê: seu copiloto de gestão.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#A1A1AA]">
                    Ele analisa suas vendas, identifica padrões e projeta o seu fluxo de caixa antes que os problemas apareçam. Tire dúvidas de operação no chat ou receba recomendações práticas direto no painel — sem precisar entender de finanças avançadas.
                  </p>
                </div>

                <div className="space-y-3 lg:col-span-5">
                  <div className="rounded-xl border border-[#2A2A32] bg-[#1C1C21] p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#10B981]">
                      Projeção de Fluxo de Caixa
                    </div>
                    <p className="mt-1.5 text-sm text-[#E4E4E7]">
                      Saiba como estará o seu caixa nos próximos dias com base no histórico real.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#2A2A32] bg-[#1C1C21] p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
                      Cartões de Insight
                    </div>
                    <p className="mt-1.5 text-sm text-[#E4E4E7]">
                      Alertas objetivos sobre produtos parados, quedas de venda e oportunidades.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#2A2A32] bg-[#1C1C21] p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      Assistência Instantânea
                    </div>
                    <p className="mt-1.5 text-sm text-[#E4E4E7]">
                      Pergunte ao Gê direto no app ou no Painel Web e resolva dúvidas em segundos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.7 Planos (Free vs. Premium) */}
        <section id="planos" className="border-t border-[#2A2A32] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Planos transparentes
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
                Comece grátis com recursos reais. Evolua quando o negócio pedir.
              </h2>
              <p className="mt-4 text-base text-[#A1A1AA]">
                Sem pegadinhas: nosso plano gratuito resolve a rotina diária. O Premium libera escala, nuvem, equipe e inteligência avançada.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {/* Plano Gratuito */}
              <div className="flex flex-col justify-between rounded-[20px] border border-[#2A2A32] bg-[#141417] p-8">
                <div>
                  <span className="inline-flex rounded-full border border-[#2A2A32] bg-[#1C1C21] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                    Plano Gratuito
                  </span>
                  <div className="mt-5 flex items-baseline gap-1 tabular-nums">
                    <span className="text-4xl font-bold text-[#F4F4F5]">R$ 0</span>
                    <span className="text-sm text-[#A1A1AA]">/ para sempre</span>
                  </div>
                  <p className="mt-3 text-sm text-[#A1A1AA]">
                    Ideal para quem está começando ou trabalha sozinho.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-[#E4E4E7]">
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Até 100 produtos e 100 clientes cadastrados</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Uso 100% offline no app Android</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Frente de Caixa (PDV), estoque e financeiro essencial</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Backup manual local</li>
                  </ul>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21] text-sm font-semibold text-[#F4F4F5] transition-colors hover:border-[#3F3F46]"
                >
                  Começar Grátis
                </a>
              </div>

              {/* Plano Premium */}
              <div className="flex flex-col justify-between rounded-[20px] border border-[#F4F4F5]/40 bg-[#141417] p-8">
                <div>
                  <span className="inline-flex rounded-full bg-[#F4F4F5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#09090B]">
                    Plano Premium
                  </span>
                  <div className="mt-5 flex items-baseline gap-1.5 tabular-nums">
                    <span className="text-4xl font-bold text-[#F4F4F5]">R$ 20,90</span>
                    <span className="text-sm text-[#A1A1AA]">/ mês</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-[#10B981] tabular-nums">
                    ou R$ 199,90/ano (economize 20% no anual)
                  </p>
                  <p className="mt-3 text-sm text-[#A1A1AA]">
                    Ideal para negócios em crescimento e equipes.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-[#E4E4E7]">
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Produtos, clientes e vendas ilimitados</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Sincronização e backup automático na nuvem</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Acesso completo ao Painel Web (app.negociodebolso.com)</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Multiusuário com controle de permissões (RBAC)</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Agendamentos avançados e relatórios executivos (Churn, Inadimplência, Heatmap)</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Acesso completo ao Gê, seu copiloto de IA e projeção de fluxo de caixa</li>
                  </ul>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#F4F4F5] text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90"
                >
                  Assinar Premium
                </a>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-[#71717A]">
              *Valores de referência em Real (BRL). Para usuários fora do Brasil, a Google Play Store exibe e converte automaticamente para a moeda local do seu país.
            </p>
          </div>
        </section>

        {/* 2.8 FAQ */}
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

        {/* 2.9 CTA Final */}
        <section className="border-t border-[#2A2A32] py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-[20px] border border-[#2A2A32] bg-[#141417] px-6 py-14 sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight text-[#F4F4F5] sm:text-4xl">
                Seu negócio merece uma gestão à altura do seu trabalho.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#A1A1AA]">
                Baixe o Negócio de Bolso gratuitamente e assuma o controle hoje.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <a
                  href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F4F4F5] px-7 text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Baixar na Google Play
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://app.negociodebolso.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#2A2A32] bg-[#1C1C21] px-7 text-sm font-semibold text-[#F4F4F5] transition-colors hover:border-[#3F3F46] sm:w-auto"
                >
                  Acessar Painel Web
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
              Negócio de Bolso · Por Gaia Works
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#A1A1AA]">
            <a href="mailto:contato@negociodebolso.com" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F4F4F5]">
              <Mail className="h-3.5 w-3.5" />
              contato@negociodebolso.com
            </a>
            <a href="https://instagram.com/appnegociodebolso" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F4F4F5]">
              <Instagram className="h-3.5 w-3.5" />
              @appnegociodebolso
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F4F4F5]">
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <Link to="/privacidade" className="transition-colors hover:text-[#F4F4F5]">Política de Privacidade</Link>
            <Link to="/ajuda" className="transition-colors hover:text-[#F4F4F5]">Termos de Uso</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
