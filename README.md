# Projeto de Arquitetura

Este projeto foi desenvolvido como parte do curso da DNC, utilizando React e Vite. Ele simula uma página de arquitetura fictícia, funcionando como uma landing page com múltiplas seções, e demonstra a aplicação de diversos conceitos fundamentais do React, como gerenciamento de estado global com Context API, reutilização de componentes, utilitários e integração com APIs.

## Visão Geral do Projeto

O projeto é uma página web para um escritório de arquitetura imaginário. Ele apresenta as seguintes seções principais:

  * **Home:** Uma introdução ao escritório.
  * **Sobre Nós:** Informações detalhadas sobre a empresa e sua filosofia.
  * **Projetos:** Uma galeria dos projetos realizados, com a funcionalidade de "curtir" cada projeto.
  * **Contato:** Formulário de contato e informações para comunicação.

### Funcionalidades Principais

  * **Sistema de Curtir Projetos:** Os usuários podem curtir projetos individuais, com o estado de "curtidas" sendo persistente.
  * **Troca de Idioma:** A página oferece a opção de alternar entre diferentes idiomas, demonstrando o uso de contextos para gerenciar o estado global da aplicação.
  * **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela para proporcionar uma boa experiência em dispositivos móveis e desktops.

## Tecnologias Utilizadas

  * **React:** Biblioteca JavaScript para construção de interfaces de usuário.
  * **Vite:** Ferramenta de build frontend que oferece uma experiência de desenvolvimento rápida.
  * **CSS:** Para estilização da aplicação.
  * **Context API (React):** Utilizada para gerenciamento de estado global, como o idioma da aplicação.
  * **Consumo de API:** Demonstração de requisições a uma API (se aplicável, para os projetos ou outros dados).

## Estrutura do Projeto

A estrutura do projeto segue as boas práticas de organização de aplicações React, facilitando a manutenção e escalabilidade:

```
├── node_modules/
├── public/
├── src/
│   ├── assets/             # Imagens, ícones e outros arquivos estáticos
│   ├── components/         # Componentes React reutilizáveis (botões, cards, etc.)
│   ├── contexts/           # Contextos React para gerenciamento de estado global (ex: LanguageContext)
│   ├── pages/              # Componentes de páginas principais (Home, About, Projects, Contact)
│   ├── services/           # Lógica de conexão com APIs externas
│   ├── utils/              # Funções utilitárias e helpers
│   ├── App.jsx             # Componente principal da aplicação
│   ├── main.css            # Estilos CSS globais
│   └── main.jsx            # Ponto de entrada da aplicação React
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
├── eslint.config.js
├── index.html
└── README.md
```

## Como Rodar o Projeto Localmente

Para configurar e rodar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/enzovalencuela/projeto-blog.git
    cd projeto-blog
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    O projeto estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## Deploy do Projeto

Você pode visualizar o projeto online através do Netlify:

[https://enzovalencuela-projeto-blog.netlify.app/](https://enzovalencuela-projeto-blog.netlify.app/)

## Screenshots do Projeto

Aqui estão algumas imagens do projeto em execução:

**Tela Inicial:**
![Home](https://github.com/user-attachments/assets/7eedda2e-e4a3-4d16-a4a8-a557c5980530)


**Seção de Projetos:**
![Projects](https://github.com/user-attachments/assets/89a20b5b-b75e-4c67-8f12-8f6fe0067dc8)


**Footer:**
![Footer](https://github.com/user-attachments/assets/b53f272e-529f-4f82-bad3-479fef6b443a)
