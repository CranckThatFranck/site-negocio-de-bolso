import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoMain from './img/negócio de bolso - logo.png';
import gaiaWorksLogo from './img/gaiaworks.png';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-gaia-green selection:text-white">
      {/* Background radial fluid */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top left, color-mix(in srgb, #2E7D32 16%, transparent), transparent 34%), radial-gradient(circle at bottom right, rgba(248, 209, 125, 0.12), transparent 28%)'
        }}
      />

      <div className="relative z-10">
        <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-950/70 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3">
                <img src={logoMain} alt="Negócio de Bolso Logo" className="h-10 w-auto object-contain" />
                <span className="font-bold text-xl tracking-tight hidden sm:block">Negócio de Bolso 2.0</span>
              </Link>
            </div>
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>
        </header>

        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">🛡️ Política de Privacidade — Negócio de Bolso</h1>
          <p className="text-gray-400 mb-8">Versão 2.0 | Última atualização: 20 de Março de 2026</p>
          
          <p className="text-gray-300 mb-12 text-lg">
            Bem-vindo ao Negócio de Bolso. A sua privacidade e a segurança dos dados do seu negócio são os pilares da nossa tecnologia. Esta política descreve como tratamos informações em nossa plataforma (App Android, iOS e Painel Web).
          </p>

          <div className="space-y-10 text-gray-300">
            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">1. Natureza da Operação e Papéis de Dados</h3>
              <p className="mb-4">O Negócio de Bolso atua como uma ferramenta de gestão. Nos termos da Lei Geral de Proteção de Dados (LGPD):</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-white">Você (Usuário/Lojista):</strong> É o Controlador dos dados de seus clientes, produtos e vendas.</li>
                <li><strong className="text-white">Negócio de Bolso:</strong> Atua como Operador, fornecendo a infraestrutura tecnológica para o processamento dessas informações.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">2. Dados Coletados e Finalidade</h3>
              <p className="mb-4">Para o funcionamento da plataforma GAIA 2.0, coletamos os seguintes dados:</p>
              <ul className="list-disc pl-5 space-y-4">
                <li><strong className="text-white">Dados de Conta:</strong> Nome, e-mail e identificadores de login social (Google).<br /><span className="text-gray-400">Finalidade: Autenticação, criação de perfil único e controle de acesso.</span></li>
                <li><strong className="text-white">Dados de Gestão (Input do Usuário):</strong> Informações sobre vendas, estoque, fluxo de caixa e cadastro de clientes.<br /><span className="text-gray-400">Finalidade: Prestação do serviço de gestão e geração de relatórios.</span></li>
                <li><strong className="text-white">Dados de Equipe:</strong> E-mails e cargos de membros convidados para sua empresa.<br /><span className="text-gray-400">Finalidade: Gestão de permissões multi-usuário (exclusivo para Plano Premium).</span></li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">3. Segurança e Manipulação Técnica</h3>
              <p className="mb-4">Implementamos medidas rigorosas de "tecniquês" para garantir que seus dados não vazem e não se misturem:</p>
              <ul className="list-disc pl-5 space-y-4">
                <li><strong className="text-white">Isolamento Multi-tenant:</strong> Utilizamos um identificador exclusivo (X-Tenant-ID) em todas as requisições. Isso garante que os dados da Empresa A sejam física e logicamente invisíveis para a Empresa B no banco de dados.</li>
                <li><strong className="text-white">Criptografia em Trânsito:</strong> Toda comunicação entre seu dispositivo e nossos servidores ocorre via protocolo SSL/TLS (HTTPS) com criptografia de ponta.</li>
                <li><strong className="text-white">Proteção de Credenciais:</strong> Senhas são processadas utilizando algoritmos de hashing seguro (SHA-256), impedindo o armazenamento em texto plano.</li>
                <li><strong className="text-white">Segurança da Sessão:</strong> O acesso é controlado via JSON Web Tokens (JWT), com renovação automática e validação silenciosa, garantindo que apenas dispositivos autorizados acessem as informações.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">4. Armazenamento e Sincronização</h3>
              <ul className="list-disc pl-5 space-y-4">
                <li><strong className="text-white">Modo Offline (Free):</strong> Os dados são armazenados localmente no banco de dados SQLite/Room do seu dispositivo.</li>
                <li><strong className="text-white">Sincronização em Nuvem (Premium):</strong> Os dados são replicados em nossos servidores de banco de dados (PostgreSQL/JSONB) para permitir o uso em múltiplos dispositivos e acesso via Painel Web.</li>
                <li><strong className="text-white">Backups:</strong> Realizamos backups automáticos periódicos em nuvem para garantir a recuperação de desastres (Plano Premium).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">5. Compartilhamento com Terceiros</h3>
              <p className="mb-4">Nós não vendemos, não alugamos e não comercializamos seus dados ou os dados de seus clientes. O compartilhamento ocorre apenas com provedores de infraestrutura essenciais:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-white">Hospedagem e Banco de Dados:</strong> Para manutenção da plataforma online.</li>
                <li><strong className="text-white">Processamento de Pagamentos:</strong> Via Google Play Store para gestão de assinaturas.</li>
                <li><strong className="text-white">Suporte Técnico:</strong> Para resolução de tickets abertos pelo usuário.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">6. Direitos do Usuário (LGPD)</h3>
              <p className="mb-4">Você possui o controle total sobre seus dados e pode, a qualquer momento via app ou Painel Web:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Acessar e exportar seus dados.</li>
                <li>Corrigir informações incompletas ou inexatas.</li>
                <li>Solicitar a exclusão definitiva de sua conta e todos os dados associados (limpeza de banco de dados).</li>
                <li>Revogar o consentimento de uso de cookies de autenticação.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">7. Contato e Encarregado de Dados</h3>
              <p className="mb-4">Para qualquer dúvida jurídica ou técnica sobre sua privacidade, entre em contato com nosso DPO (Data Protection Officer):</p>
              <p className="flex items-center gap-2">
                <span className="text-xl">📧</span>
                <a href="mailto:contato@negociodebolso.com" className="text-gaia-green hover:underline">contato@negociodebolso.com</a>
              </p>
            </section>
          </div>
        </main>

        <footer className="border-t border-gray-900 bg-gray-950 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <img 
              src={gaiaWorksLogo} 
              alt="Gaia Works" 
              className="h-12 w-auto mb-6 opacity-80 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-gray-500 text-sm mb-6 text-center">
              Negócio de Bolso - Um projeto <span className="text-white font-medium">Gaia Works</span>.
            </p>
            <div className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} GAIA Works. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
