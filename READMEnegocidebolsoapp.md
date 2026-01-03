# Negócio de Bolso

**Vender, controlar, crescer.**

O **Negócio de Bolso** é um aplicativo Android **Offline-First** projetado para microempreendedores que precisam gerenciar suas vendas, estoque, clientes e serviços de forma prática, segura e sem depender de internet.

---

## 🚀 Capacidades e Funcionalidades

O aplicativo oferece um conjunto completo de ferramentas para gestão de pequenos negócios:

### 🛒 Gestão de Vendas e Pedidos
- **Vendas Rápidas**: Registre vendas com cálculo automático de troco e baixa de estoque.
- **Pedidos/Encomendas**: Gerencie encomendas com status (Pendente, Em Preparo, Pronto, Entregue).
- **Recibos Digitais**: Gere e compartilhe recibos (imagem) via WhatsApp ou outros apps.
- **Histórico Completo**: Consulte todas as vendas realizadas e canceladas (com auditoria).
- **Custo Histórico**: O lucro é calculado com base no custo do produto *no momento da venda*, garantindo relatórios precisos mesmo se o preço de custo mudar depois.

### 📦 Controle de Estoque e Produtos
- **Cadastro Completo**: Produtos com foto, preço de custo, preço de venda, categoria e unidade de medida (un, kg, L, m, etc.).
- **Alerta de Estoque Baixo**: Saiba o que precisa ser reposto com uma lista dedicada de itens com estoque crítico.
- **Categorização**: Organize seus produtos por categorias personalizáveis.
- **Busca Inteligente**: Encontre produtos rapidamente digitando nome ou categoria.

### 👥 Gestão de Clientes
- **Cadastro Detalhado**: Nome, telefone, endereço e observações.
- **Integração com WhatsApp**: Botão direto para iniciar conversa com mensagem personalizada ("Olá [Nome], ...").
- **Histórico de Compras**: (Em breve) Veja o que cada cliente já comprou.
- **Fiado/Dívidas**: (Em breve) Controle de vendas a prazo.

### 🛠️ Gestão de Serviços
- **Catálogo de Serviços**: Cadastre serviços com preço e descrição.
- **Agendamentos**: (Em breve) Agenda integrada para marcar horários.
- **Materiais**: (Em breve) Vincule produtos consumidos na execução de serviços.

### 📊 Relatórios e Financeiro
- **Dashboard**: Visão geral de vendas do dia, semana e mês.
- **Lucratividade**: Relatórios precisos de lucro bruto (Venda - Custo Histórico).
- **Curva ABC**: (Em breve) Saiba quais produtos vendem mais.

### 🔒 Segurança e Privacidade
- **100% Offline**: Seus dados ficam no seu aparelho. Nenhuma informação é enviada para servidores externos sem sua permissão.
- **Bloqueio Biométrico**: Proteja o acesso ao app usando a senha, padrão ou impressão digital do seu celular.
- **Backup**: (Em breve) Backup local e em nuvem (Google Drive) para não perder seus dados.

---

## 🛠️ Visão Técnica

Projeto open-source focado em arquitetura limpa, escalabilidade e boas práticas de desenvolvimento Android moderno.

- **Linguagem**: Kotlin 100%
- **UI**: Jetpack Compose (Material 3)
- **Arquitetura**: Clean Architecture (Modularização por camadas: `app`, `core/domain`, `core/data`) + MVVM
- **Banco de Dados**: Room (SQLite) com migrações versionadas e suporte a FTS (Full Text Search)
- **Injeção de Dependência**: Manual (ServiceLocator) para simplicidade e leveza
- **Assincronismo**: Kotlin Coroutines & Flow

### Estrutura do Projeto
- `app/`: Módulo principal (UI, ViewModels, DI, Navegação)
- `core/domain/`: Regras de negócio, Modelos, Interfaces de Repositório (Puro Kotlin)
- `core/data/`: Implementação de Repositórios, Room DAO, DataSources
- `scripts/`: Utilitários de build e instalação (`launch-app.sh`)

---

## 📚 Documentação

- **[PREMIUM1step.md](PREMIUM1step.md)**: Guia mestre da estratégia de monetização e funcionalidades Premium.
- **[PREMIUMbackup.md](PREMIUMbackup.md)**: Detalhes técnicos da implementação de Backup em Nuvem (Google Drive).
- **[FREEMIUMbackup.md](FREEMIUMbackup.md)**: Configuração do Backup Automático Nativo do Android.
- **[RELEASE_NOTES_v0.2.1.md](RELEASE_NOTES_v0.2.1.md)**: Notas da versão atual (Melhorias de UX, WhatsApp, Busca).
- **[RELEASE_NOTES_v0.2.0.md](RELEASE_NOTES_v0.2.0.md)**: Notas da versão anterior (Módulo de Serviços).

---

## 🚀 Como Rodar (Desenvolvimento)

### Pré-requisitos
- JDK 17 ou superior
- Android SDK (API 34)
- Dispositivo Android ou Emulador configurado

### Build e Instalação
Para facilitar, use o script incluso:
```bash
./scripts/launch-app.sh
```
Ou manualmente via Gradle:
```bash
./gradlew :app:assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

### Gerar Release (Assinado)
1. Configure `keystore.properties` na raiz (veja `keystore.properties.example` se houver).
2. Execute:
```bash
./gradlew :app:assembleRelease
```
O APK otimizado (R8 ativado) será gerado em `app/build/outputs/apk/release/app-release.apk`.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir Issues ou Pull Requests.
- **Branch Principal**: `main`
- **Padrão de Commits**: Conventional Commits (feat, fix, docs, style, refactor...)

---

## 📄 Licença

Este projeto é distribuído sob a licença [MIT](LICENSE).

---
*Versão Atual: v0.2.1 (19/11/2025)*
