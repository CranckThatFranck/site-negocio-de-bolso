🛡️ Política de Privacidade — Negócio de Bolso
=============================================
**Versão 4.0 | Última atualização: 08 de Abril de 2026**

Bem-vindo ao Negócio de Bolso (um produto do ecossistema Gaia Works). A sua privacidade e a segurança dos dados do seu negócio são os pilares da nossa tecnologia. Esta política descreve como tratamos informações em nossa plataforma (App Android e Painel Web), incluindo nossas novas integrações avançadas de Inteligência Artificial.

1. Natureza da Operação e Papéis de Dados
-----------------------------------------
O Negócio de Bolso atua como uma ferramenta de gestão e inteligência aplicada. Nos termos da Lei Geral de Proteção de Dados (LGPD):
* **Você (Usuário/Lojista):** É o Controlador dos dados de seus clientes, produtos e vendas.
* **Negócio de Bolso:** Atua como Operador, fornecendo a infraestrutura tecnológica e de processamento (incluindo IA) dessas informações.

2. Dados Coletados e Finalidade
-------------------------------
Para o funcionamento da plataforma, coletamos e processamos os seguintes dados:
* **Dados de Conta:** Nome, e-mail e identificadores de login social (Google).
    * *Finalidade:* Autenticação, criação de perfil único e controle de acesso.
* **Dados de Gestão:** Informações sobre vendas, estoque, fluxo de caixa e cadastro de clientes.
    * *Finalidade:* Prestação do serviço de gestão, geração de relatórios de desempenho e sincronização em nuvem.
* **Comunicação e Notificações:** Preferências de recebimento de resumos e alertas.
    * *Finalidade:* Envio de Resumos Semanais de desempenho e Alertas de Estoque Crítico via e-mail e notificações Push.
* **Interações com Inteligência Artificial (Gê IA):** Conteúdo de mensagens de texto, áudios e arquivos anexados (como PDFs de relatórios e prints de tela) enviados ao nosso chat inteligente.
    * *Finalidade:* Prestação de suporte técnico automatizado, leitura de logs/erros, orientações de gestão e encaminhamento documentado de chamados para a equipe técnica humana.

3. Inteligência Artificial e Suporte Técnico (Gê IA)
----------------------------------------------------
Nossa plataforma é potencializada pelo **Gê IA**, nosso consultor inteligente alimentado por modelos generativos de última geração. 
* **Privacidade no Processamento:** Ao interagir com o Gê e enviar arquivos (como PDFs ou imagens), esses dados são processados por visão computacional estritamente para formular a resposta à sua solicitação ou para anexar as evidências a um ticket de suporte interno.
* **Ponte com Equipe Humana:** Caso a IA não consiga resolver uma dúvida ou identifique um bug, ela criará um ticket de suporte (ex: *TK-XXXX*) automaticamente. O histórico daquela conversa e os anexos enviados serão compartilhados de forma segura com nossa equipe humana de engenharia e atendimento para resolução do problema.
* **Treinamento de Modelos:** Os dados da sua empresa (vendas, clientes e arquivos enviados ao chat) **não** são utilizados para treinar modelos de inteligência artificial públicos.

4. Segurança e Manipulação Técnica
----------------------------------
Implementamos medidas rigorosas para garantir a integridade dos seus dados:
* **Isolamento Multi-tenant e Contextual:** Utilizamos identificadores exclusivos (como `X-Tenant-ID`) em todas as requisições. O banco de dados e a "memória de curto prazo" da Inteligência Artificial garantem que os dados e o contexto da sua empresa sejam física e logicamente invisíveis e inacessíveis para outros usuários.
* **Criptografia:** Toda comunicação ocorre via protocolo SSL/TLS (HTTPS). Senhas são processadas utilizando algoritmos de hashing seguro (BCrypt), impedindo o armazenamento em texto plano.
* **Segurança da Sessão:** O acesso é controlado via JSON Web Tokens (JWT) com assinatura RSA, garantindo que apenas dispositivos autorizados acessem as informações.

5. Compartilhamento com Terceiros
---------------------------------
Não vendemos nem comercializamos seus dados. O compartilhamento ocorre apenas com provedores de infraestrutura essenciais para o funcionamento do app:
* **Google LLC (Google Cloud & Google AI / Gemini API):** Provedor do motor de inteligência artificial e processamento em nuvem. O processamento de prompts, textos e imagens do chat ocorre sob os rígidos termos de privacidade corporativa da Google Cloud (API Data Privacy).
* **DigitalOcean / Nginx:** Para hospedagem dos servidores e manutenção da plataforma online.
* **Brevo & Firebase:** Para o envio técnico de e-mails transacionais (resumos, alertas e atualizações de tickets de suporte) e notificações push no dispositivo móvel.
* **Google Play Store:** Para a gestão e cobrança de assinaturas Premium.

6. Direitos do Usuário e Exclusão de Dados
------------------------------------------
Você possui controle total sobre seus dados. Além das opções de edição diretamente no aplicativo, você pode solicitar a remoção completa, definitiva e irreversível de todos os seus registros (incluindo histórico de conversas com a IA) de nossos servidores.

**Como solicitar a exclusão total:**
Envie um e-mail para `deleteme@negociodebolso.com` contendo:
1.  Nome completo;
2.  E-mail de cadastro;
3.  Caso tenha utilizado o Google Login, informe o e-mail da conta Google associada;
4.  Um breve texto autorizando a remoção total e irreversível dos dados.

*O prazo de resposta e conclusão da remoção é de até 48h úteis. Após a conclusão deste processo, os dados não poderão ser recuperados sob nenhuma hipótese.*

7. Contato
----------
Para dúvidas jurídicas, técnicas ou sobre como a Inteligência Artificial processa seus dados, fale conosco:
📧 contato@negociodebolso.com
