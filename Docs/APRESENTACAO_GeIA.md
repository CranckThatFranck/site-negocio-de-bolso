# APRESENTACAO GeIA

## Visao Executiva

O Ge IA ja tem uma arquitetura funcional e claramente segmentada por tenant, com roteamento de modelo, permissao de ferramentas e caminho assicrono para tarefas pesadas. O backend centraliza a orquestracao no `GeminiService`, que decide contexto, politicas de tenant, ferramentas habilitadas e comandos one-shot antes de chamar o gateway de Gemini.

Hoje o sistema cobre tres linhas principais de operacao:

- `Ge Admin 999`: faixa privilegiada, com politicas mais amplas e modelos de administracao.
- `Ge MKT 998/997`: faixa de marketing, tambem privilegiada, mas separada da administracao.
- Demais usuarios: caem no modo suporte, com modelo mais leve e restricoes de comando.

O desenho geral esta maduro em tres pontos:

- A separacao de modelo/tenant nao depende apenas do prompt; ela nasce do resolver de runtime.
- Deep Research, Veo e Imagen saem do fluxo normal e podem ser delegados para tratamento assicrono.
- O front mobile e o app de suporte ja consomem push, refresh e rotas especificas para refletir o estado do backend quase em tempo real.

## Matriz de Agentes

| Perfil | Roteamento | Modelo base | Acesso a comandos | Ferramentas principais |
|---|---|---|---|---|
| Ge Admin 999 | runtime administrativo | `gemini-3.1-pro-preview-customtools` | liberado em contexto privilegiado | suporte, memoria, logs, delegacao pesada, imagem |
| Ge MKT 998/997 | runtime marketing | `gemini-3.1-pro-preview` | liberado em contexto privilegiado | memoria, delegacao pesada, imagem, fluxo de campanha |
| Suporte / demais usuarios | fallback por tenant do usuario | `gemini-3.1-flash-lite-preview` | restrito, com bloqueio explicito para comandos one-shot | abrir ticket, responder ticket, consultar status, memoria |

Leitura pratica da matriz:

- O resolver de runtime classifica a sessao antes da chamada ao modelo, e isso evita que a separacao dependa apenas do texto do prompt.
- O bloqueio de comandos one-shot e aplicado por politica, nao por convencao.
- O suporte opera em uma trilha mais conservadora, com foco em ticket e atendimento, nao em execucao de comandos experimentais.

## Capacidades Backend

### 1. Roteamento de tenant e modelo

O `GeminiService` intercepta a mensagem antes de gerar a resposta. Ele identifica comandos como `/banana`, `/veo`, `/imagen` e `/deepresearch`, consulta a politica do tenant e decide se deve:

- responder no fluxo normal,
- trocar o modelo para imagem,
- ou forcar delegacao assicrona.

O `GeRuntimeContextResolver` consolida a leitura de contexto a partir do usuario autenticado e do conversation id. Ele distingue administracao, marketing e suporte, e deriva o `routeTenantId` e o `verticalScope` corretos para cada caso.

### 2. Ferramentas expostas ao modelo

O backend ja publica um conjunto real de tools para o Gemini, com execucao server-side:

- `abrir_ticket_suporte`
- `responder_ticket_suporte`
- `consultar_status_ticket_suporte`
- `delegar_tarefa_pesada`
- `salvar_documento_mente_ge`

Em termos de comportamento, isso significa que o modelo nao esta apenas respondendo texto. Ele pode abrir ticket, seguir ticket existente, delegar acoes longas e salvar contexto estrategico para uso futuro.

### 3. Comandos one-shot

O fluxo de comandos curtos esta implementado e nao e apenas documental. O backend reconhece:

- `/banana`
- `/veo`
- `/imagen`
- `/deepresearch`

`/banana` troca o caminho para o modelo de imagem. `/veo`, `/imagen` e `/deepresearch` injetam uma instrução de background e exigem `delegar_tarefa_pesada` com o tipo correto. Quando a politica do tenant nao permite comandos one-shot, a requisicao e recusada explicitamente.

### 4. Deep Research e Interactions API

O `GoogleGeminiGateway` separa o caminho padrao do caminho de Deep Research. Quando o modelo contem o indicio `deep-research`, a chamada sai do fluxo normal e vai pelo bypass HTTP da Interactions API.

Esse desenho e importante porque:

- evita misturar o fluxo de geração comum com o fluxo de tarefa longa,
- permite polling ate estado terminal,
- e trata falhas como business exception, o que simplifica a camada superior.

O `GeminiInteractionsClient` valida o input antes de criar a interaction. Ele exige agente, conteúdo nao vazio e `store=true` quando o modo background esta ativo. Tambem restringe o bypass a texto e midia referenciada por URI.

### 5. Delegacao de tarefa pesada

A `GeHeavyTaskDelegationService` sustenta o caminho assicrono para Deep Research, Veo e Imagen. O ponto arquitetural relevante aqui e que a tarefa pesada nao fica presa ao request-response da conversa principal. Ela pode ser roteada, persistida e processada com artefatos proprios.

### 6. SSE, thinking e telemetria

O backend possui streams SSE dedicados para pensamento, chat-thinking, sentinel e telemetria. O comportamento importante nao e so a emissao do evento, mas a tolerancia a desconexao normal do cliente.

O sistema trata `ClientAbortException`, `IOException` e `IllegalStateException` como encerramento esperado de stream, com limpeza de assinaturas e sem transformar isso em erro de negocio.

### 7. Sanitizacao e seguranca

Nao encontrei uma classe literal chamada `TranscriptValidator`. O ponto mais proximo de sanitizacao concreta no que foi inspecionado e `EmailBodySanitizer`, que indica que a limpeza de conteudo existe, embora o nome exato da validacao de transcript possa estar distribuido em outra camada.

Ainda assim, o backend ja mostra dois controles relevantes:

- normalizacao de texto antes de roteamento e persistencia,
- filtragem de partes do retorno do modelo para excluir conteudo tecnico de pensamento quando apropriado.

## Integracao Frontend

### Android principal

O app `sales-manager-android` ja esta conectado ao fluxo do Ge IA por meio de `MyFirebaseMessagingService` e `AiChatUiBridge`.

O que o mobile faz hoje:

- recebe push para chat de IA e resposta de suporte,
- decide se o chat esta visivel ou em foreground,
- marca mensagens como vistas quando necessario,
- dispara refresh sem precisar reiniciar a tela,
- abre a conversa correta via intent quando o usuario toca na notificacao.

O `MainActivity` le os extras de push e injeta o estado no bridge. O `NegocioDeBolsoApplication` registra o estado de foreground e inicializa o armazenamento de dismiss do chat. Isso fecha o ciclo entre notificacao, estado global e UI.

Na UI, `AiChatScreen` e `AiChatViewModel` ja suportam conversa, anexos temporarios, respostas de suporte e refresh assicrono. O chat nao e uma tela isolada; ele participa do fluxo de suporte, inclusive com contexto de resposta reutilizavel.

### App de suporte

No `app-suporteNegocioDeBolso`, o fluxo relevante esta distribuido em notificacao, realtime, lista e detalhe de ticket.

O app ja contem:

- `SupportFirebaseMessagingService` para push,
- `SupportNotificationManager` para exibicao local,
- `PushTokenSyncManager` para sincronizar token,
- `SupportRealtimeManager` para eventos em tempo real,
- `TicketListScreen` e `TicketDetailScreen` para inbox e conversa,
- use cases de reply, criacao, consulta e atualizacao de tickets.

Esse conjunto mostra que o suporte nao depende apenas de atualizacao manual. Ele recebe evento, reconcilia estado e reabre a conversa certo quando necessario.

## Arquitetura de Resiliencia

A resiliencia do Ge IA hoje e boa no plano operacional e ainda tem pontos a formalizar no plano de governanca.

O que ja existe:

- SSE com cleanup de assinaturas e heartbeat.
- Tratamento de desconexao normal do cliente como evento esperado.
- Gateway com fail fast quando a chave da Gemini esta ausente.
- Validacao forte para Deep Research via Interactions API.
- Split entre chamada direta e bypass HTTP para tarefas longas.
- Push mobile e suporte com refresh e reconstrucao de estado.

Riscos ou lacunas que ainda merecem atencao:

- O nome exato da camada de sanitizacao de transcript ainda nao esta totalmente evidente.
- O comportamento de policy por tenant depende de constantes centrais; qualquer novo tenant precisa entrar nesse mapa sem ambiguidade.
- O caminho assicrono e robusto, mas vale documentar melhor o contrato entre tool-call, delegacao e retorno final para evitar drift de prompt.

## Conclusao

O estado atual do Ge IA e de uma plataforma ja funcional, com arquitetura coerente entre backend, mobile e suporte. O diferencial real esta no roteamento por tenant, no offload de tarefas pesadas e no uso de push e SSE para manter a experiencia sincronizada sem acoplamento excessivo.

O proximo passo natural e consolidar essa base em documentacao operacional e em testes de regressao para os caminhos de one-shot, Deep Research e desconexao SSE.