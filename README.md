# Backend de Autenticação JWT

Este projeto é uma aplicação backend para autenticação de usuários utilizando JSON Web Tokens (JWT). Desenvolvida com Node.js, Express e MongoDB, a aplicação inclui registro, login e proteção de rotas com middleware de autenticação.

## Tecnologias Utilizadas

- **bcryptjs**: Biblioteca para hashing de senhas.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **dotenv**: Biblioteca para carregar variáveis de ambiente.
- **express**: Framework web para Node.js.
- **jsonwebtoken**: Biblioteca para criação e verificação de JSON Web Tokens.
- **mongoose**: Biblioteca para modelagem de dados no MongoDB.

## Funcionalidades

- **Registro de Usuário**: Criação de novos usuários com hash de senha.
- **Login de Usuário**: Autenticação de usuários e emissão de JWT.
- **Proteção de Rotas**: Middleware para proteger rotas que requerem autenticação.
- **Verificação de Token**: Validação de JWT para acesso a rotas protegidas.

