# Catálogo API

Esta API permite gerenciar catálogos e produtos. Ela oferece rotas para criar, listar, atualizar e deletar catálogos e produtos.

## Pré-requisitos

Antes de executar a API, você precisará:

- [Node.js](https://nodejs.org/) instalado em sua máquina.
- Uma conta no **MongoDB Atlas** para criar um banco de dados gratuito.
- [Git](https://git-scm.com/) para clonar o repositório.

## Passo a Passo para Configurar o MongoDB Atlas

1. Acesse o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) e crie uma conta gratuita.
2. Após o login, crie um novo **Projeto**.
3. Dentro do projeto, crie um **Cluster**. Escolha o plano gratuito (M0) para o banco de dados gratuito.
4. Depois que o cluster estiver criado, clique em **Connect**.
5. Selecione a opção **Connect your application**.
6. Copie a **string de conexão** fornecida
7. copie a string para o arquivo .env do projeto e setar na variavel DATABASE_URI

   ```plaintext
   mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority

## Instalação

1. Clone o repositório:

```bash
git clone git@github.com:willianKsouza/api-teste-tecnico.git

