# 🌌 CosmoSpace — Explorando o Universo

> "Uma nova visão do universo todos os dias."

O **CosmoSpace** é uma aplicação web interativa desenvolvida para entusiastas da astronomia. O projeto consome dados reais da **NASA** para exibir a Imagem Astronômica do Dia (APOD) e uma galeria dinâmica de imagens espaciais.

Além do consumo de APIs externas, o projeto conta com um **Back-end próprio** para gerenciamento de mensagens de contato.

---

## 📋 Índice

- [🌌 CosmoSpace — Explorando o Universo](#-cosmospace--explorando-o-universo)
  - [📋 Índice](#-índice)
  - [🔭 Sobre o Projeto](#-sobre-o-projeto)
    - [Destaques](#destaques)
  - [🎨 Design \& Prototipagem](#-design--prototipagem)
  - [🚀 Funcionalidades](#-funcionalidades)
    - [Front-end](#front-end)
    - [Back-end](#back-end)
  - [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [📡 APIs Integradas](#-apis-integradas)
  - [📦 Como Executar o Projeto](#-como-executar-o-projeto)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo 1: Clonar o Repositório](#passo-1-clonar-o-repositório)
    - [Passo 2: Configurar e Rodar o Back-end](#passo-2-configurar-e-rodar-o-back-end)
    - [Passo 3: Rodar o Front-end](#passo-3-rodar-o-front-end)
    - [⚠️ Configuração da API Key](#️-configuração-da-api-key)
  - [🏗 Arquitetura Backend](#-arquitetura-backend)
  - [👨‍🚀 Autores](#-autores)

---

## 🔭 Sobre o Projeto

O objetivo do CosmoSpace é conectar usuários ao vasto conteúdo disponibilizado publicamente pela NASA através de uma interface moderna e responsiva.

### Destaques

- **Hero Section Inteligente:** Exibe a *Astronomy Picture of the Day* (APOD). Se for um vídeo (YouTube), o sistema extrai automaticamente a thumbnail de alta qualidade para usar como fundo.
- **Galeria de Marte:** Integração com a *NASA Image and Video Library* para buscar fotos atualizadas de rovers e missões em Marte.
- **Back-end Funcional:** API em Node.js para receber e armazenar mensagens de contato.
- **UX/UI:** Modo Claro/Escuro persistente e feedback visual de carregamento.

## 🎨 Design & Prototipagem

O layout do projeto foi planejado inicialmente utilizando o **Figma**. Você pode visualizar o protótipo de alta fidelidade e o style guide no link abaixo:

[**🔗 Acessar Protótipo no Figma**](https://www.figma.com/site/5FtDqsKBfWHwfNiCef26yY/Untitled?node-id=0-1&t=iyLEl8AD0f3KzvNh-1)

---

## 🚀 Funcionalidades

### Front-end

- [x] **APOD (Foto do Dia):** Exibição dinâmica de imagem ou vídeo do dia.
- [x] **Galeria Infinita:** Busca de imagens reais de Marte via API pública.
- [x] **Tema:** Alternância entre Modo Claro e Escuro (salvo no LocalStorage).
- [x] **Validação:** Verificação de campos obrigatórios no formulário.
- [x] **Design Responsivo:** Adaptável para Mobile, Tablet e Desktop.

### Back-end

- [x] **Rota POST:** Recebimento e validação de dados de contato.
- [x] **Rota GET:** Listagem de mensagens recebidas (armazenamento em memória).
- [x] **CORS:** Configurado para aceitar requisições do front-end local.

---

## 💻 Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3 (Flexbox/Grid), JavaScript (Vanilla ES6+).
- **Estilização:** Fonte *Orbitron* (Google Fonts), Variáveis CSS.
- **Back-end:** Node.js, Express.
- **Ferramentas:** Git, VS Code.

---

## 📡 APIs Integradas

1. **NASA APOD (Astronomy Picture of the Day):**
    - Usada na tela inicial.
    - Requer API Key.
2. **NASA Image and Video Library:**
    - Usada na Galeria (`images-api.nasa.gov`).
    - Não requer chave (Pública).
3. **API Interna (Localhost):**
    - Usada para o formulário de contato.

---

## 📦 Como Executar o Projeto

Para rodar o projeto completo, você precisará de dois terminais (um para o servidor e outro para ver o site, ou apenas abrir o HTML).

### Pré-requisitos

- **Node.js** instalado na máquina.
- **Git** instalado.

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/samsilveira/CosmoSpace.git
cd CosmoSpace
```

### Passo 2: Configurar e Rodar o Back-end

1. Entre na pasta do servidor:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start

```

> O servidor iniciará em `http://localhost:3000`. Deixe este terminal aberto.

### Passo 3: Rodar o Front-end

1. Vá para a pasta raiz do projeto (onde estão os arquivos `.html`).

2. Você pode abrir o arquivo `index.html` diretamente no navegador.

- *Recomendação:* Se usar o VS Code, utilize a extensão **Live Server** para abrir o `pagina_inicial.html` ou `index.html`.

### ⚠️ Configuração da API Key

Para que a foto do dia (Home) apareça, você precisa de uma chave da NASA.

1. Gere sua chave em [api.nasa.gov](https://api.nasa.gov/).
2. Abra o arquivo `pagina_inicial.js`.
3. Substitua a variável `NASA_API_KEY` pela sua chave:

```javascript
const NASA_API_KEY = 'SUA_CHAVE_AQUI';
```

---

## 🏗 Arquitetura Backend

O servidor backend segue uma estrutura MVC simplificada

| Método | Endpoint | Função |
| --- | --- | --- |
| `POST` | `/api/contact` | Recebe JSON `{nome, email, mensagem}` e salva. |
| `GET` | `/api/messages` | Retorna todas as mensagens salvas (JSON). |
| `GET` | `/api/status` | Verifica se a API está online. |

---

## 👨‍🚀 Autores

| Nome | GitHub |
| --- | --- |
| **Maria Antonia Trajano** | [@mariastrajano](https://github.com/mariastrajano) |
| **Letícia Silva** | [@leticia-software-engineer](https://github.com/leticia-software-engineer) |
| **Samuel Wagner** | [@samsilveira](https://github.com/samsilveira) |

---

*Projeto desenvolvido para a Atividade Trainee 2025.2.* 🚀
