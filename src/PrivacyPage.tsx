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
          <h1 className="text-4xl font-bold mb-4 text-white">Política de Privacidade</h1>
          <p className="text-gray-400 mb-12">Última atualização: 05/01/2026. Transparência sobre como tratamos dados hoje e no futuro para manter sua confiança.</p>

          <div className="space-y-10 text-gray-300">
            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">1. Quem somos</h3>
              <p>Negócio de Bolso é um aplicativo de gestão de vendas e estoque para pequenos negócios.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">2. Coleta de dados</h3>
              <p className="mb-2"><strong className="text-white">Hoje:</strong> Não coletamos, armazenamos ou compartilhamos dados pessoais ou sensíveis.</p>
              <p><strong className="text-white">Futuro:</strong> Podemos vir a coletar dados para melhorar funcionalidades. Qualquer mudança será comunicada com atualização desta política e, quando necessário, novo consentimento.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">3. Uso de dados (apenas se/quando coletados)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Operação do app e melhorias de produto.</li>
                <li>Suporte e prevenção a fraudes/abuso.</li>
                <li>Estatísticas agregadas e anônimas.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">4. Armazenamento e segurança</h3>
              <p className="mb-2">Dados (quando existirem) são processados com medidas de segurança razoáveis.</p>
              <p>Caso usemos terceiros (ex.: backup em nuvem), eles serão listados e sujeitos a contratos e leis aplicáveis.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">5. Compartilhamento</h3>
              <p className="mb-2"><strong className="text-white">Hoje:</strong> Não compartilhamos dados com terceiros.</p>
              <p><strong className="text-white">Futuro:</strong> Se houver compartilhamento, será limitado a provedores de serviço essenciais (ex.: backup, analytics), conforme esta política e leis vigentes.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">6. Direitos do usuário</h3>
              <p>Quando houver dados pessoais, você poderá solicitar: acesso, correção, exclusão, portabilidade, revogação de consentimento e informação sobre uso/compartilhamento, conforme a lei (LGPD/GDPR).</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">7. Planos gratuito e assinatura</h3>
              <p>Oferecemos versão gratuita e versão com assinatura. Funcionalidades, preços e condições podem mudar sem aviso prévio, conforme termos de uso aplicáveis.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-white">8. Contato</h3>
              <p>Dúvidas ou solicitações sobre privacidade: envie um e-mail para <a href="mailto:contato@negociodebolso.com" className="text-gaia-green hover:underline">contato@negociodebolso.com</a>.</p>
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
