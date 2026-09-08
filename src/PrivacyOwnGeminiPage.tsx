import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoMain from './img/negócio de bolso - logo.png';
import gaiaWorksLogo from './img/gaiaworks.png';

export default function PrivacyOwnGeminiPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-white">🛡️ Política de Privacidade — OwnGemini Enterprise</h1>
          <p className="text-gray-400 mb-8">Última atualização: 08 de Setembro de 2026</p>
          
          <p className="text-gray-300 mb-12 text-lg">
            O aplicativo <strong>OwnGemini Enterprise</strong>, desenvolvido por <strong>Negócio de Bolso / Gaia Works</strong>, foi projetado com foco rigoroso em privacidade, segurança corporativa e transparência no tratamento de dados.
          </p>

          <div className="space-y-10 text-gray-300">
            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">1. Coleta e Uso de Informações</h4>
              <p className="mb-4">O OwnGemini Enterprise atua como um cliente de interface para serviços de inteligência artificial (Google Cloud Discovery Engine / Gemini Enterprise) e integração de ferramentas locais do dispositivo Android.</p>
              <ul className="list-disc pl-5 space-y-4">
                <li><strong className="text-white">Dados de Autenticação:</strong> A autenticação é realizada via Google Workspace OAuth 2.0. Não armazenamos senhas em servidores próprios; apenas tokens de acesso são mantidos localmente de forma criptografada no dispositivo do usuário (<code>EncryptedSharedPreferences</code>).</li>
                <li><strong className="text-white">Permissões do Dispositivo:</strong> Permissões como Câmera, Reconhecimento de Voz, Acessibilidade e Leitura de Notificações são utilizadas exclusivamente sob demanda direta do usuário para executar comandos locais no aparelho (automação on-device). Nenhum dado dessas permissões é compartilhado com terceiros ou vendido para fins publicitários.</li>
                <li><strong className="text-white">Processamento de Consultas:</strong> Prompts, imagens e arquivos enviados pelo usuário são transmitidos diretamente para a instância corporativa configurada no Google Cloud Platform (<code>Discovery Engine API</code>) do próprio usuário ou organização.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">2. Pagamentos e Assinaturas</h4>
              <p className="mb-4">O processamento de assinaturas e compras no aplicativo é gerenciado integralmente pela infraestrutura do <strong>Google Play Billing</strong>. Não coletamos nem temos acesso a números de cartão de crédito ou dados bancários.</p>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">3. Segurança dos Dados</h4>
              <p className="mb-4">Todos os dados em trânsito são protegidos por criptografia de ponta a ponta via HTTPS/TLS. Os dados locais são isolados na sandbox de segurança do sistema operacional Android.</p>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">4. Direitos do Usuário e Exclusão de Dados</h4>
              <p className="mb-4">O usuário pode revogar permissões a qualquer momento nas configurações do sistema Android ou encerrar sua sessão pelo botão "Sair da conta", o que remove instantaneamente todos os tokens armazenados localmente.</p>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">5. Contato do Desenvolvedor</h4>
              <p className="mb-4">Para dúvidas sobre esta política de privacidade, entre em contato:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong className="text-white">E-mail:</strong> <a href="mailto:francisco@negociodebolso.com" className="text-gaia-green hover:underline">francisco@negociodebolso.com</a></li>
                <li><strong className="text-white">Organização:</strong> Negócio de Bolso / Gaia Works</li>
              </ul>
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
              OwnGemini Enterprise - Um projeto <span className="text-white font-medium">Gaia Works</span>.
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
