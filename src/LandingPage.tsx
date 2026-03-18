import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Smartphone, MonitorDot, WifiOff, Receipt, 
  Users, BarChart3, Lock, ShieldCheck, Fingerprint, Database,
  CheckCircle2, Instagram, Linkedin, Mail
} from 'lucide-react';

import logoMain from './img/negócio de bolso - logo.png';
import capaImagem from './img/negócio de bolso - logo (Capa para Facebook).jpg';
import gaiaWorksLogo from './img/gaiaworks.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function LandingPage() {
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
        {/* Sticky Header */}
        <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-950/70 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoMain} alt="Negócio de Bolso Logo" className="h-10 w-auto object-contain" />
              <span className="font-bold text-xl tracking-tight hidden sm:block">Negócio de Bolso 2.0</span>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
              <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
              <a href="#ecossistema" className="hover:text-white transition-colors">Ecossistema</a>
              <a href="#planos" className="hover:text-white transition-colors">Planos</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </nav>
            <a 
              href="https://app.negociodebolso.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gaia-green hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-gaia-green/20"
            >
              Acessar meu painel
            </a>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center mt-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white max-w-4xl mx-auto leading-tight">
                O controle total do seu negócio, na <span className="text-gaia-green">palma da mão</span> e na <span className="text-yellow-400">tela do computador</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Vender offline, gerenciar online. O ecossistema completo para microempreendedores.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.negociodebolso.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 text-gray-900 font-bold rounded-full hover:bg-white transition-transform hover:scale-105 shadow-xl"
                >
                  Download na Google Play Store
                </a>
                <a 
                  href="https://app.negociodebolso.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
                >
                  Acessar Painel Web (Premium)
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-gaia-green/10 border border-gray-800"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <img 
                  src={capaImagem} 
                  alt="Interface do Sistema" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>
          </section>

          {/* O Ecossistema Negócio de Bolso 2.0 */}
          <section id="ecossistema" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O Ecossistema Negócio de Bolso 2.0</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Uma arquitetura construída para funcionar em qualquer situação. Seu celular para a linha de frente, o computador para a gestão estratégica.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Android Card */}
              <motion.div variants={fadeIn} className="backdrop-blur bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:bg-gray-800/50 transition-colors">
                <div className="w-14 h-14 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20">
                  <Smartphone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">App Android</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <WifiOff className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">100% Offline-First:</strong> Venda mesmo sem internet. Sincroniza automaticamente quando houver conexão (Premium) ou funciona totalmente local integrado com backup manual (Free).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">PDV Ágil:</strong> Gestão rápida de produtos e serviços na palma da mão.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Receipt className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">Recibos de venda:</strong> Geração instantânea de recibos com o nome do seu negócio e rodapé customizado pronto para o compartilhamento.</span>
                  </li>
                </ul>
              </motion.div>

              {/* Web App Card */}
              <motion.div variants={fadeIn} className="backdrop-blur bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:bg-gray-800/50 transition-colors">
                <div className="w-14 h-14 bg-gaia-green/10 text-gaia-green rounded-2xl flex items-center justify-center mb-6 border border-gaia-green/20">
                  <MonitorDot className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  Painel Web 
                  <span className="text-xs font-semibold bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full border border-yellow-500/30">Premium</span>
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <MonitorDot className="w-5 h-5 text-gaia-green mt-0.5 shrink-0" />
                    <span><strong className="text-white">Sincronia em Tempo Real:</strong> Acompanhe as vendas da sua equipe na mesma hora.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-gaia-green mt-0.5 shrink-0" />
                    <span><strong className="text-white">Programa de Fidelidade:</strong> Sistema de Tiers e Pontos para engajar e reter clientes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-gaia-green mt-0.5 shrink-0" />
                    <span><strong className="text-white">CRM Avançado:</strong> Mensagens de aniversariantes via WhatsApp, controle de churn e clientes ausentes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-gaia-green mt-0.5 shrink-0" />
                    <span><strong className="text-white">BI e Relatórios:</strong> Radar de Fiados, Mapa de Calor de vendas e exportação em PDF/CSV.</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </section>

          {/* Segurança */}
          <section id="funcionalidades" className="py-24 border-t border-gray-800/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/2"
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <ShieldCheck className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Controle e Segurança Absoluta</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    A infraestrutura do Negócio de Bolso 2.0 foi desenhada para proteger o seu principal ativo: seus dados. Com múltiplas camadas de proteção, garantimos que apenas você e sua equipe autorizada acessem os números do seu negócio.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0">
                        <Database className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Backup Inteligente</h4>
                        <p className="text-sm text-gray-500">
                          Sincronização em nuvem automática para assinantes <strong className="text-yellow-500">Premium</strong>. Clientes <strong className="text-gray-300">Free</strong> contam com uma robusta ferramenta de backup manual para quando desejarem.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0">
                        <Fingerprint className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Bloqueio Biométrico</h4>
                        <p className="text-sm text-gray-500">Proteção com digital nativa direto no aplicativo mobile.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0">
                        <Lock className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Dados 100% Privados</h4>
                        <p className="text-sm text-gray-500">Suas vendas são suas. Criptografia end-to-end e total privacidade.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(250,204,21,0.05)_0%,transparent_60%)] -z-10" />
                   <div className="backdrop-blur bg-gray-900/60 border border-gray-800 p-8 rounded-3xl w-full max-w-sm transform rotate-2 hover:rotate-0 transition-all duration-500">
                      <div className="flex items-center justify-center mb-6">
                        <Lock className="w-12 h-12 text-yellow-400 opacity-80" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-2 w-3/4 bg-gray-800 rounded mx-auto" />
                        <div className="h-2 w-1/2 bg-gray-800 rounded mx-auto" />
                        <div className="h-10 border border-yellow-500/30 rounded-lg mt-6 bg-yellow-500/10 flex items-center justify-center text-yellow-500 text-sm font-medium">Ambiente Seguro</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="planos" className="py-24 border-t border-gray-800/50 bg-gray-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha a melhor solução para o seu momento</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  A versão Free estará sempre com você. Quando estiver pronto para expandir a equipe e acessar recursos avançados, assine o Premium.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Free Plan */}
                <div className="backdrop-blur bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-white mb-2">Plano Free</h3>
                  <div className="text-4xl font-extrabold text-white mb-6">R$ 0<span className="text-lg font-normal text-gray-500">/mês forever</span></div>
                  <p className="text-gray-400 mb-8 border-b border-gray-800 pb-8">Perfeito para quem está começando o próprio negócio offline.</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gray-500" />
                      <span>100% Offline (Não necessita internet)</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gray-500" />
                      <span>Gerador de Recibos em PDF</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gray-500" />
                      <span>Controle de Estoque e Vendas Básico</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gray-500" />
                      <span>Backup Manual Offline</span>
                    </li>
                  </ul>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-6 rounded-full border border-gray-700 text-white hover:bg-gray-800 transition-colors font-medium"
                  >
                    Baixar Agora
                  </a>
                </div>

                {/* Premium Plan */}
                <div className="backdrop-blur bg-gray-900 border-2 border-gaia-green p-8 rounded-3xl relative transform md:-translate-y-4 shadow-2xl shadow-gaia-green/20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gaia-green text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">MAIS POPULAR</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Plano Premium</h3>
                  <div className="flex items-end gap-2 mb-6">
                    <div className="text-4xl font-extrabold text-white">R$ 20,90</div>
                    <div className="text-gray-500 mb-1">/mês ou R$ 199,90 /ano</div>
                  </div>
                  <p className="text-gray-400 mb-8 border-b border-gray-800 pb-8">Acesso irrestrito a todo o poder do ecossistema GAIA.</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gaia-green" />
                      <span><strong className="text-white">Acesso Total ao Painel Web</strong></span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gaia-green" />
                      <span><strong className="text-white">Múltiplos Usuários Sincronizados</strong></span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gaia-green" />
                      <span>Funcionalidade de Caixa Avançada</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gaia-green" />
                      <span>Backup Automático em Nuvem</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gaia-green" />
                      <span>Suporte Prioritário</span>
                    </li>
                  </ul>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-6 rounded-full bg-gaia-green text-white hover:bg-green-700 transition-colors font-bold shadow-lg shadow-gaia-green/30"
                  >
                    Assinar Premium
                  </a>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    * A assinatura Premium é realizada exclusivamente pelo App via Google Play Store.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gaia-green opacity-5" />
            <div className="max-w-3xl mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para evoluir a gestão?</h2>
              <p className="text-lg text-gray-400 mb-10">Junte-se a milhares de microempreendedores que já controlam o fluxo de caixa no Negócio de Bolso.</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.negociodebolso.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gaia-green hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_40px_rgba(46,125,50,0.4)]"
              >
                Download na Google Play Store
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer id="contato" className="border-t border-gray-900 bg-gray-950 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <img 
              src={gaiaWorksLogo} 
              alt="Gaia Works" 
              className="h-12 w-auto mb-6 opacity-80 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-gray-500 text-sm mb-6 text-center max-w-lg">
              Negócio de Bolso - Um projeto <span className="text-white font-medium">Gaia Works</span>.<br />
              Entre em contato conosco para suporte, dúvidas e parcerias.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <a 
                href="mailto:contato@negociodebolso.com" 
                className="flex items-center gap-2 text-gaia-green hover:text-green-400 transition-colors bg-gray-900 px-4 py-2 rounded-full border border-gray-800"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium text-sm">contato@negociodebolso.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/neg%C3%B3cio-de-bolso/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/appnegociodebolso/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-gray-500 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">Política de Privacidade</Link>
              <Link to="/help" className="hover:text-white transition-colors">Central de Ajuda</Link>
            </div>

            <div className="text-gray-600 text-xs text-center border-t border-gray-900 pt-8 w-full max-w-3xl">
              &copy; {new Date().getFullYear()} Gaia Works. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
