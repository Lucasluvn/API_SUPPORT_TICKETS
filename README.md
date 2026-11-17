
# 🎫 API de Suporte de Tickets

A API de Suporte de Tickets é uma solução backend robusta desenvolvida para o gerenciamento completo de chamados de atendimento técnico. A API foi projetada para permitir a abertura, rastreamento, atualização e resolução eficiente de tickets de suporte em sistemas corporativos ou de atendimento ao cliente.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas:

- **Node.js:** Ambiente de execução JavaScript para o servidor, garantindo alta performance e escalabilidade.
- **TypeScript:** Utilização de tipagem estática para assegurar maior robustez, segurança e qualidade no desenvolvimento.
- **Zod:** Biblioteca para validação rigorosa de payloads, esquemas de dados e regras de negócio da API.
- **Git & GitHub:** Controle de versão e gerenciamento do código-fonte.

---

## 📝 Funcionalidades

A API oferece os seguintes recursos:

- **Gestão de Chamados:** Endpoints completos para criar, listar, atualizar e encerrar tickets de suporte técnico.
- **Validação de Payloads:** Assegura que os dados enviados nas requisições estejam corretos e seguros utilizando validação com Zod.
- **Arquitetura Escalável:** Organização de código limpa e estruturada, facilitando a manutenção e a comunicação com o front-end.

---

## 📚 Estrutura de Dados
- **Tickets:** ID do chamado, título, descrição, status (aberto, em andamento, resolvido), prioridade e data de criação.

---

## 🛠️ Configuração e Execução

Pré-requisitos:
- Node.js versão 16 ou superior instalado na máquina.
- npm ou yarn como gerenciador de pacotes.

Instalação:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Lucasluvn/support-tickets-api.git](https://github.com/Lucasluvn/support-tickets-api.git)

   cesse a pasta do projeto:

2. Bash
  cd support-tickets-api

3. Instale as dependências:
  Bash
  npm install

4. Rodando a aplicação:

Ambiente de desenvolvimento:

Bash
npm run dev

## 📂 Estrutura do Projeto
Plaintext
support-tickets-api/
├── src/
│   ├── controllers/     # Controladores responsáveis pela lógica dos endpoints
│   ├── routes/          # Definição das rotas e endpoints da API
│   ├── services/        # Regras de negócio da aplicação
│   └── server.ts        # Ponto de entrada e inicialização do servidor
├── package.json         # Dependências e scripts do projeto
└── tsconfig.json        # Configurações do TypeScript

## 👩‍💻 Contribuição
Este é um projeto de portfólio de código aberto. Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades! Para contribuir, siga os passos abaixo:

Faça o fork do repositório.

Crie uma branch para sua alteração (git checkout -b feature/nome-da-feature).

Realize suas modificações e faça um commit (git commit -m 'Adicionar nova feature').

Envie para o repositório remoto (git push origin feature/nome-da-feature).

Abra um Pull Request explicando suas mudanças.

## 📬 Contato
Para dúvidas ou sugestões, entre em contato com o desenvolvedor principal do projeto:

Email: animaalucas@gmail.com

GitHub: Lucasluvn
