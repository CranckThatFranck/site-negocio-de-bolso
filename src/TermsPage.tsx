import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] font-sans">
      <header className="border-b border-white/10 bg-[#09090B]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white font-semibold">
            <img src="/ic_wallet_icon_dark_512.svg" alt="Negócio de Bolso" className="h-8 w-8" />
            <span>Negócio de Bolso</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <div className="space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold">
            <FileText className="h-3.5 w-3.5" />
            Termos de Uso · Elegibilidade 18+
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Termos de Uso — Negócio de Bolso</h1>
          <p className="text-sm text-[#A1A1AA]">
            Última atualização: 28 de novembro de 2026
          </p>
          <p className="text-sm text-[#D4D4D8]">
            <strong>Oferecido por:</strong> 50.643.283 JOAO FRANCISCO DE OLIVEIRA NETO (<strong>Gaia Works</strong>) — CNPJ 50.643.283/0001-68
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Elegibilidade e Idade Mínima (18+)</h2>
          <p className="text-[#D4D4D8] leading-relaxed">
            Para criar conta, assinar o Plano Premium ou utilizar o <strong>Negócio de Bolso</strong> (app Android e
            Painel Web <code>app.negociodebolso.com</code>), você declara ter{' '}
            <strong>pelo menos 18 anos de idade</strong> e plena capacidade civil para gerir atividades comerciais ou
            profissionais. Caso identifiquemos uso indevido por menores de 18 anos sem autorização legal aplicável, a
            conta poderá ser suspensa ou encerrada.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. O Serviço e Planos</h2>
          <ul className="list-disc pl-6 space-y-2 text-[#D4D4D8] leading-relaxed">
            <li>
              <strong>Plano Gratuito (R$ 0):</strong> uso offline no Android com limite de até 100 produtos e 100
              clientes cadastrados, backup manual local e recursos essenciais de PDV, estoque e financeiro.
            </li>
            <li>
              <strong>Plano Premium:</strong> assinatura recorrente (processada via Google Play Billing) que libera
              cadastros ilimitados, sincronização multi-dispositivo em tempo real, Painel Web, templates dinâmicos,
              cobrança via WhatsApp, multiusuário (RBAC) e acesso completo ao <strong>Gê</strong>, seu copiloto de IA.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Responsabilidade pelos Dados Comerciais e Mensagens</h2>
          <p className="text-[#D4D4D8] leading-relaxed">
            Você é integralmente responsável pela veracidade dos dados fiscais/comerciais inseridos, pelas emissões de
            recibos aos seus clientes e pelo envio de mensagens de cobrança ou relacionamento via WhatsApp,
            comprometendo-se a respeitar a legislação aplicável (incluindo LGPD e normas de proteção ao consumidor).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Inteligência Artificial (O Gê)</h2>
          <p className="text-[#D4D4D8] leading-relaxed">
            <strong>O Gê</strong> oferece projeções financeiras e análises automatizadas de apoio à decisão com base
            nos dados informados no sistema. Ele não substitui assessoria contábil, jurídica ou fiscal profissional.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Cancelamento, Suporte e Foro</h2>
          <p className="text-[#D4D4D8] leading-relaxed">
            Assinaturas podem ser canceladas a qualquer momento diretamente na Google Play Store. Dúvidas e suporte:{' '}
            <a href="mailto:contato@negociodebolso.com" className="text-[#10B981] hover:underline">
              contato@negociodebolso.com
            </a>{' '}
            ou{' '}
            <a href="mailto:francisco@negociodebolso.com" className="text-[#10B981] hover:underline">
              francisco@negociodebolso.com
            </a>
            . Fica eleito o foro aplicável conforme a legislação brasileira vigente (Palhoça/SC ou domicílio do
            consumidor quando aplicável).
          </p>
        </section>

        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm text-[#A1A1AA]">
          <Link to="/privacidade" className="text-[#10B981] hover:underline">
            Ler Política de Privacidade (18+)
          </Link>
          <Link to="/ajuda" className="hover:text-white transition">
            Central de Ajuda
          </Link>
        </div>
      </main>
    </div>
  );
}
