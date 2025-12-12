# 🌌 CosmoSpace — Explorando o Universo

> "Uma nova visão do universo todos os dias."

O **CosmoSpace** é uma aplicação web interativa desenvolvida para entusiastas da astronomia. O projeto consome dados reais da **NASA** para exibir a Imagem Astronômica do Dia (APOD) e galerias de missões espaciais, oferecendo uma experiência imersiva e responsiva.

[cite_start]Este projeto foi desenvolvido como parte da **Atividade do Trainee 2025.2**[cite: 153].

---

## 📋 Índice

- [🌌 CosmoSpace — Explorando o Universo](#-cosmospace--explorando-o-universo)
  - [📋 Índice](#-índice)
  - [🔭 Sobre o Projeto](#-sobre-o-projeto)
    - [Principais Recursos](#principais-recursos)
  - [🚀 Funcionalidades](#-funcionalidades)
    - [Front-end](#front-end)
    - [Back-end](#back-end)
  - [📄 Documentação Técnica](#-documentação-técnica)
    - [User Stories](#user-stories)
    - [Requisitos Funcionais](#requisitos-funcionais)
  - [🏗 Arquitetura e Rotas](#-arquitetura-e-rotas)
    - [Diagrama de Rotas (API Interna)](#diagrama-de-rotas-api-interna)
    - [Estrutura de Pastas](#estrutura-de-pastas)
  - [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [📦 Como Rodar o Projeto](#-como-rodar-o-projeto)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a Passo](#passo-a-passo)
  - [👨‍🚀 Autores](#-autores)

---

## 🔭 Sobre o Projeto

O objetivo do CosmoSpace é conectar usuários ao vasto conteúdo disponibilizado publicamente pela NASA. O site apresenta uma interface moderna com alternância de temas (Claro/Escuro) e um sistema de contato integrado a um back-end próprio.

### Principais Recursos

- [cite_start]**Hero Section Dinâmica:** Exibe a *Astronomy Picture of the Day* (APOD) atualizada diariamente via API da NASA[cite: 159, 171].
- [cite_start]**Galeria Astronômica:** Uma página extra dedicada a explorar fotos de rovers em Marte e outras missões[cite: 176].
- [cite_start]**Interatividade:** Animações sutis, loaders de requisição e feedback visual em formulários[cite: 174, 180].
- [cite_start]**Back-end Funcional:** API própria para gerenciar o envio de mensagens de contato (GET/POST)[cite: 168].

---

## 🚀 Funcionalidades

### Front-end

- [x] **Consumo de API Externa:** Integração com NASA APIs (APOD e Mars Rover).
- [x] [cite_start]**Responsividade Total:** Layout adaptável para Mobile, Tablet e Desktop[cite: 173].
- [x] [cite_start]**Theme Switcher:** Alternância entre Modo Claro e Escuro[cite: 177].
- [x] [cite_start]**Validação de Formulário:** Verificação de campos obrigatórios no front-end antes do envio[cite: 175].

### Back-end

- [x] [cite_start]**Rota POST:** Recebimento e validação de dados do formulário de contato[cite: 168].
- [x] [cite_start]**Rota GET:** Listagem de mensagens recebidas (armazenamento em memória)[cite: 168].

---

## 📄 Documentação Técnica

O mapeamento abaixo segue os padrões definidos nos requisitos do projeto.

### User Stories

| ID | Descrição | Dependência |
| :--- | :--- | :--- |
| **US01** | Como visitante, quero visualizar a "Imagem Astronômica do Dia" ao entrar, para ver conteúdo atualizado. | None |
| **US02** | Como visitante, quero alternar entre modo claro e escuro, para ter conforto visual. | None |
| **US03** | Como entusiasta, quero visualizar uma galeria de fotos (ex: Marte), para explorar detalhes do espaço. | US01 |
| **US04** | Como usuário, quero enviar uma mensagem de contato para a equipe. | None |
| **US05** | Como administrador, quero listar as mensagens recebidas. | US04 |

### Requisitos Funcionais

| ID | Nome RF | Descrição | Rastreio |
| :--- | :--- | :--- | :--- |
| **RF01** | Integração NASA | O sistema deve consumir a API da NASA para exibir imagem e descrição. | US01 |
| **RF02** | Toggle de Tema | O sistema deve permitir a troca de temas (Light/Dark). | US02 |
| **RF03** | Envio de Contato | O sistema deve processar o envio de formulário via método POST. | US04 |
| **RF04** | Listagem de Dados | O sistema deve fornecer uma rota GET que retorne as mensagens salvas. | US05 |

---

## 🏗 Arquitetura e Rotas

### Diagrama de Rotas (API Interna)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/contact` | Recebe JSON `{nome, email, mensagem}` e salva os dados. |
| `GET` | `/api/messages` | Retorna JSON com a lista de todas as mensagens recebidas. |

### Estrutura de Pastas

```bash
CosmoSpace/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Lógica das rotas
│   │   ├── routes/        # Definição dos endpoints
│   │   └── server.js      # Entry point do servidor
│   └── package.json
├── frontend/
│   ├── assets/            # Imagens e ícones
│   ├── css/               # Estilos (global.css, themes.css)
│   ├── js/                # Scripts (api.js, main.js)
│   ├── index.html         # Página Principal (Hero)
│   └── galeria.html       # Página Extra (Galeria)
└── README.md
```

---

## 💻 Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+).
- **Back-end:** Node.js, Express.
- **APIs:** [NASA Open APIs](https://api.nasa.gov/).
- **Ferramentas:** Git, VS Code.

---

## 📦 Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado.
- Git instalado.

### Passo a Passo

1. **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/cosmospace.git](https://github.com/seu-usuario/cosmospace.git)
    cd cosmospace
    ```

2. **Configure o Back-end:**

    ```bash
    cd backend
    npm install
    npm start
    # O servidor iniciará em http://localhost:3000
    ```

3. **Inicie o Front-end:**

      - Abra a pasta `frontend` e execute o arquivo `index.html` no seu navegador (ou utilize a extensão "Live Server" do VS Code).

---

## 👨‍🚀 Autores

| Nome                  | GitHub |
| :-------------------- | ------ |
| Maria Antonia Trajano | <https://github.com/mariastrajano> |
| Letícia Silva         | <https://github.com/leticia-software-engineer> |
| Samuel Wagner         | <https://github.com/samsilveira> |

---

*Projeto desenvolvido para a Atividade Trainee 2025.2.* 🚀
