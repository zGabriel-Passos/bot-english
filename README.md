# 🎙️ English Coach: No-AI Conversation Bot

Este é um agente de conversação inteligente desenvolvido com **Next.js 15**, focado na prática de inglês sem o uso de APIs externas de IA. O bot utiliza lógica de **Pattern Matching** (Correspondência de Padrões) e as **Web Speech APIs** nativas para proporcionar uma experiência de chat e VoIP (voz).

## ✨ Funcionalidades

- **🧠 Motor de Busca de Padrões**: Respostas baseadas em mais de 30 categorias e centenas de palavras-chave.
- **🎤 Modo VoIP (Voz)**: Reconhecimento de fala em tempo real utilizando a Web Speech API.
- **🔊 Text-to-Speech**: O bot responde falando com sotaque nativo americano (en-US).
- **📖 Legendas Visuais**: Tradução instantânea via hover nos balões do bot para facilitar o aprendizado.
- **⚡ Interface Moderna**: UI responsiva e sombreada feita com Tailwind CSS.

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Navegador moderno (Chrome ou Edge recomendados para suporte a voz)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd bot-english
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠️ Tecnologias Utilizadas

- **Next.js** - Framework React para produção.
- **TypeScript** - Tipagem estática para maior segurança.
- **Tailwind CSS** - Estilização moderna e rápida.
- **Web Speech API** - Para reconhecimento e síntese de voz.

## 📂 Estrutura de Pastas

- **[data/responses.ts](data/responses.ts)**: O "cérebro" do bot. Adicione novas categorias e palavras-chave aqui.
- **[components/EnglishPractice.tsx](components/EnglishPractice.tsx)**: O componente principal que gerencia o estado do chat e áudio.
- **[app/page.tsx](app/page.tsx)**: Página principal de renderização.

## 📖 Guia de Estudo e Expansão

Para evoluir este projeto, recomendamos estudar:

- **RegEx**: Para buscas de padrões mais complexas.
- **Web Audio API**: Para criar visualizadores de ondas sonoras no modo VoIP.
- **Local Storage**: Para persistir o histórico de conversas no navegador.
- **Speech Confidence**: Para validar o quão correta foi a sua pronúncia.

## 🤝 Contribuições

Este é um projeto de código aberto focado em educação. Sinta-se à vontade para abrir uma **Issue** ou enviar um **Pull Request** com novas frases e palavras-chave para o dicionário!
