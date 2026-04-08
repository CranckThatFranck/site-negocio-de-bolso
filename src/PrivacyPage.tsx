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
          <p className="text-gray-400 mb-8">Versão 4.0 | Última atualização: 08 de Abril de 2026</p>
          
          <p className="text-gray-300 mb-12 text-lg">
            Bem-vindo ao Negócio de Bolso (um produto do ecossistema Gaia Works). A sua privacidade e a segurança dos dados do seu negócio são os pilares da nossa tecnologia. Esta política descreve como tratamos informações em nossa plataforma (App Android e Painel Web), incluindo nossas novas integrações avançadas de Inteligência Artificial.
          </p>

          <div className="space-y-10 text-gray-300">
            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">1. Natureza da Operação e Papéis de Dados</h4>
              <p className="mb-4">O Negócio de Bolso atua como uma ferramenta de gestão e inteligência aplicada. Nos termos da Lei Geral de Proteção de Dados (<strong>LGPD</strong>):</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-white">Você (Usuário/Lojista):</strong> É o Controlador dos dados de seus clientes, produtos e vendas.</li>
                <li><strong className="text-white">Negócio de Bolso:</strong> Atua como Operador, fornecendo a infraestrutura tecnológica e de processamento (incluindo IA) dessas informações.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">2. Dados Coletados e Finalidade</h4>
              <p className="mb-4">Para o funcionamento da plataforma, coletamos e processamos os seguintes dados:</p>
              <ul className="list-disc pl-5 space-y-4">
                <li><strong className="text-white">Dados de Conta:</strong> Nome, e-mail e identificadores de login social (Google).<br /><span className="text-gray-400">Finalidade: Autenticação, criação de perfil único e controle de acesso.</span></li>
                <li><strong className="text-white">Dados de Gestão:</strong> Informações sobre vendas, estoque, fluxo de caixa e cadastro de clientes.<br /><span className="text-gray-400">Finalidade: Prestação do serviço de gestão, geração de relatórios de desempenho e sincronização em nuvem.</span></li>
                <li><strong className="text-white">Comunicação e Notificações:</strong> Preferências de recebimento de resumos e alertas.<br /><span className="text-gray-400">Finalidade: Envio de Resumos Semanais de desempenho e Alertas de Estoque Crítico via e-mail e notificações Push.</span></li>
                <li><strong className="text-white">Interações com Inteligência Artificial (Gê IA):</strong> Conteúdo de mensagens de texto, áudios e arquivos anexados (como PDFs de relatórios e prints de tela) enviados ao nosso chat inteligente.<br /><span className="text-gray-400">Finalidade: Prestação de suporte técnico automatizado, leitura de logs/erros, orientações de gestão e encaminhamento documentado de chamados para a equipe técnica humana.</span></li>
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">3. Inteligência Artificial e Suporte Técnico (Gê IA)</h4>
              <p className="mb-4">Nossa plataforma é potencializada pelo <strong>Gê IA</strong>, nosso consultor inteligente alimentado por modelos generativos de última geração.</p>
              <ul className="list-disc pl-5 space-y-4">
                <li><strong className="text-white">Privacidade no Processamento:</strong> Ao interagir com o Gê e enviar arquivos (como PDFs ou imagens), esses dados são processados por visão computacional estritamente para formular a resposta à sua solicitação ou para anexar as evidências a um ticket de suporte interno.</li>
                <li><strong className="text-white">Ponte com Equipe Humana:</strong> Caso a IA não consiga resolver uma dúvida ou identifique um bug, ela criará um ticket de suporte (ex: <em>TK-XXXX</em>) automaticamente. O histórico daquela conversa e os anexos enviados serão compartilhados de forma segura com nossa equipe humana de engenharia e atendimento para resolução do problema.</li>
                <li><strong className="text-white">Treinamento de Modelos:</strong> Os dados da sua empresa (vendas, clientes e arquivos enviados ao chat) <strong>não</strong> são utilizados para treinar modelos de inteligência artificial públicos.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">4. Segurança e Manipulação Técnica</h4>
              <p className="mb-4">Implementamos medidas rigorosas para garantir a integridade dos seus dados:</p>
              <ul className="list-disc pl-5 space-y-4">
                <li><strong className="text-white">Isolamento Multi-tenant e Contextual:</strong> Utilizamos identificadores exclusivos (como <code>X-Tenant-ID</code>) em todas as requisições. O banco de dados e a "memória de curto prazo" da Inteligência Artificial garantem que os dados e o contexto da sua empresa sejam física e logicamente invisíveis e inacessíveis para outros usuários.</li>
                <li><strong className="text-white">Criptografia:</strong> Toda comunicação ocorre via protocolo SSL/TLS (HTTPS). Senhas são processadas utilizando algoritmos de hashing seguro (BCrypt), impedindo o armazenamento em texto plano.</li>
                <li><strong className="text-white">Segurança da Sessão:</strong> O acesso é controlado via JSON Web Tokens (JWT) com assinatura RSA, garantindo que apenas dispositivos autorizados acessem as informações.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">5. Compartilhamento com Terceiros</h4>
              <p className="mb-4">Não vendemos nem comercializamos seus dados. O compartilhamento ocorre apenas com provedores de infraestrutura essenciais para o funcionamento do app:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-white">Google LLC (Google Cloud & Google AI / Gemini API):</strong> Provedor do motor de inteligência artificial e processamento em nuvem. O processamento de prompts, textos e imagens do chat ocorre sob os rígidos termos de privacidade corporativa da Google Cloud (API Data Privacy).</li>
                <li><strong className="text-white">DigitalOcean / Nginx:</strong> Para hospedagem dos servidores e manutenção da plataforma online.</li>
                <li><strong className="text-white">Brevo & Firebase:</strong> Para o envio técnico de e-mails transacionais (resumos, alertas e atualizações de tickets de suporte) e notificações push no dispositivo móvel.</li>
                <li><strong className="text-white">Google Play Store:</strong> Para a gestão e cobrança de assinaturas Premium.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">6. Direitos do Usuário e Exclusão de Dados</h4>
              <p className="mb-4">Você possui controle total sobre seus dados. Além das opções de edição diretamente no aplicativo, você pode solicitar a remoção completa, definitiva e irreversível de todos os seus registros (incluindo histórico de conversas com a IA) de nossos servidores.</p>
              
              <p className="mb-2 font-semibold text-white">Como solicitar a exclusão total:</p>
              <p className="mb-4">Envie um e-mail para <a href="mailto:deleteme@negociodebolso.com" className="text-gaia-green hover:underline">deleteme@negociodebolso.com</a> contendo:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Nome completo;</li>
                <li>E-mail de cadastro;</li>
                <li>Caso tenha utilizado o Google Login, informe o e-mail da conta Google associada;</li>
                <li>Um breve texto autorizando a remoção total e irreversível dos dados.</li>
              </ul>
              <p className="mb-4"><em className="text-gray-400">O prazo de resposta e conclusão da remoção é de até 48h úteis. Após a conclusão deste processo, os dados não poderão ser recuperados sob nenhuma hipótese.</em></p>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-3 text-white">7. Contato</h4>
              <p className="mb-4">Para dúvidas jurídicas, técnicas ou sobre como a Inteligência Artificial processa seus dados, fale conosco:</p>
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
