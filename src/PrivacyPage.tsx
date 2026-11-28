import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
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
            <ShieldCheck className="h-3.5 w-3.5" />
            LGPD · Marco Civil · Uso Profissional (18+)
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Política de Privacidade — Negócio de Bolso</h1>
          <p className="text-sm text-[#A1A1AA]">
            Última atualização: 28 de novembro de 2026
          </p>
          <div className="text-sm text-[#D4D4D8] space-y-1 pt-2">
            <p>
              <strong>Controlador:</strong> 50.643.283 JOAO FRANCISCO DE OLIVEIRA NETO (<strong>Gaia Works</strong>) — CNPJ 50.643.283/0001-68
            </p>
            <p>
              <strong>Endereço:</strong> Rua Arcanjo Cândido da Silva 702, Praia de Fora, Palhoça - SC, CEP 88138-300, Brasil
            </p>
            <p>
              <strong>Contato / Encarregado (DPO):</strong> Francisco Oliveira —{' '}
              <a href="mailto:francisco@negociodebolso.com" className="text-[#10B981] hover:underline">
                francisco@negociodebolso.com
              </a>{' '}
              |{' '}
              <a href="mailto:contato@negociodebolso.com" className="text-[#10B981] hover:underline">
                contato@negociodebolso.com
              </a>
            </p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Público-Alvo e Elegibilidade (18+)</h2>
          <p className="text-[#D4D4D8] leading-relaxed">
            O <strong>Negócio de Bolso</strong> é uma ferramenta profissional de gestão comercial, frente de caixa (PDV),
            estoque, finanças e relacionamento com clientes (CRM), destinada exclusivamente a{' '}
            <strong>pessoas maiores de 18 anos</strong> com capacidade civil e empresarial (microempreendedores,
            autônomos e pequenos negócios). O aplicativo e o Painel Web{' '}
            <strong>não são direcionados a crianças ou adolescentes menores de 18 anos</strong> e não realizam
            publicidade comportamental de terceiros.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Dados que Coletamos e Finalidade</h2>
          <ul className="list-disc pl-6 space-y-2 text-[#D4D4D8] leading-relaxed">
            <li>
              <strong>Dados de Conta (Plano Nuvem/Premium):</strong> nome, e-mail e identificadores de autenticação
              para sincronização multi-dispositivo e acesso ao Painel Web (<code>app.negociodebolso.com</code>).
            </li>
            <li>
              <strong>Dados Comerciais Inseridos por Você:</strong> produtos, estoque, vendas, recibos, movimentações
              financeiras, agendamentos, fichas de serviço e cadastro dos seus clientes. Você é o controlador desses
              dados perante seus próprios clientes; a Gaia Works atua como operadora de infraestrutura e armazenamento.
            </li>
            <li>
              <strong>Inteligência Artificial (O Gê):</strong> quando você utiliza <strong>o Gê</strong> (seu copiloto
              de IA), métricas e contextos operacionais autorizados da sua conta são processados para gerar análises de
              margem, alertas e projeções de fluxo de caixa. Não vendemos seus dados nem os utilizamos para treinar
              modelos públicos de terceiros.
            </li>
            <li>
              <strong>Uso Offline (Plano Gratuito):</strong> no modo local sem sincronização, seus dados permanecem
              armazenados exclusivamente no seu dispositivo.
            </li>
            <li>
              <strong>Registros Técnicos:</strong> endereço IP, logs de erro, versão do app e eventos de sincronização
              para segurança, diagnóstico e cumprimento do Marco Civil da Internet (art. 15).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Compartilhamento e Segurança</h2>
          <p className="text-[#D4D4D8] leading-relaxed">
            Não vendemos nem alugamos dados pessoais ou comerciais. Compartilhamos apenas com provedores essenciais de
            infraestrutura em nuvem, autenticação, processamento de pagamentos (Google Play Billing) e processamento de
            IA sob obrigações contratuais de confidencialidade e criptografia em trânsito (TLS) e em repouso.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Seus Direitos e Exclusão de Conta (LGPD)</h2>
          <p className="text-[#D4D4D8] leading-relaxed">
            Você pode solicitar confirmação de tratamento, acesso, correção, portabilidade ou{' '}
            <strong>exclusão definitiva da sua conta e dados</strong> diretamente nas configurações do aplicativo/Painel
            Web ou pelo e-mail{' '}
            <a href="mailto:contato@negociodebolso.com" className="text-[#10B981] hover:underline">
              contato@negociodebolso.com
            </a>{' '}
            (prazo de atendimento: até 15 dias). Registros fiscais de assinatura exigidos por lei são mantidos pelo
            prazo legal aplicável.
          </p>
        </section>

        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm text-[#A1A1AA]">
          <Link to="/termos" className="text-[#10B981] hover:underline">
            Ler Termos de Uso (18+)
          </Link>
          <Link to="/ajuda" className="hover:text-white transition">
            Central de Ajuda
          </Link>
        </div>
      </main>
    </div>
  );
}
