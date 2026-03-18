import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoMain from './img/negócio de bolso - logo.png';
import gaiaWorksLogo from './img/gaiaworks.png';

export default function HelpPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-white">Central de Ajuda</h1>
          <p className="text-gray-400 mb-12">Estamos aqui para garantir que você tenha a melhor experiência na gestão do seu negócio.</p>

          <div className="space-y-10 text-gray-300">
            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">Dúvidas Frequentes (FAQ)</h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                  <h4 className="text-lg font-medium text-white mb-2">Qual a diferença entre a versão Free e Premium?</h4>
                  <p>A versão Free é 100% offline, realizando backup manual diretamente pelo usuário. A versão Premium conta com sincronização em tempo real na nuvem, acesso a retaguarda web, múltiplos usuários simultâneos e controle avançado de fluxo de caixa.</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                  <h4 className="text-lg font-medium text-white mb-2">Como faço o backup manual?</h4>
                  <p>Na versão Free, acesse as "Configurações" no seu aplicativo Android e selecione "Backup Manual" para salvar os dados locamente no arquivo do aparelho. Para restaurá-lo em outro celular, basta importar este mesmo arquivo na tela inicial.</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                  <h4 className="text-lg font-medium text-white mb-2">Como entrar em contato com o suporte?</h4>
                  <p>Envie um e-mail para <strong>contato@negociodebolso.com</strong> detalhando seu problema ou sugestão. Para Clientes Premium, o atendimento é prioritário.</p>
                </div>
              </div>
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
