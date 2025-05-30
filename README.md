API CRUD NodeJS

Descrição: Esta API CRUD foi desenvolvida com o intuito de aprimorar e fixar o conhecimento em tecnologias backend. A API é capaz de criar, deletar, atualizar e obter cadastros de clientes em um banco de dados PostgreSQL utilizando Docker.

Tecnologias Utilizadas:
Node.js, Prisma ORM, PostgreSQL, Express.js, Docker

A Documentação também esta disponível no confluence para melhor visualização: https://breno0904.atlassian.net/wiki/external/YjBmZmM0OTQ2YTI2NDMyNjhmMDA5NDY3ZmIzOWM4NzE.


1. 🛠️ Instalação e Configuração

1.1 - Clonar o repositório:
https://github.com/BrenoRosa9/apiteste 


1.2 - Instalar dependências:
npm install


1.3 - Configurar variáveis de ambiente .env: o arquivo deve conter as seguintes chaves:
DATABASE_URL="postgresql://nomedousuario:senhadobanco@localhost:5432/nomedobanco"
PORT=3000


1.4 - Buildar/Subir o Docker com o banco de dados:
docker compose up --build


2 - 🔗 Endpoints

2.1 - GET
Descrição: Retorna a lista de usuários com paginação configurável
Parâmetros: page (int), limit (int)

Exemplo:
http://localhost:3000/customer?page=2&limit=2

Exemplo de retorno:
{
    "data": [
        {
            "id": "1673c698-0c79-4785-9d80-3fae98ca019b",
            "name": "teste7",
            "email": "teste7@hotmail.com",
            "status": true,
            "created_at": "2025-05-30T01:05:43.325Z",
            "updated_at": "2025-05-30T01:05:43.326Z"
        },
        {
            "id": "7f52ac0b-c66d-435a-aab8-d95d3e665ec4",
            "name": "teste6",
            "email": "teste6@hotmail.com",
            "status": true,
            "created_at": "2025-05-30T01:05:38.776Z",
            "updated_at": "2025-05-30T01:05:38.777Z"
        }
    ],
    "total": 10,
    "page": 2,
    "lastPage": 5
}


2.2 - POST

Descrição: Cria um novo registro.
Parâmetros: name (string), email (string)

Exemplo:
{"name": "teste", "email": "teste@exemplo.com"}

Exemplo de retorno:
{
    "id": "6e410b46-4753-4fe8-962c-3439bdb2897f",
    "name": "teste10",
    "email": "teste10@hotmail.com",
    "status": true,
    "created_at": "2025-05-30T12:04:58.623Z",
    "updated_at": "2025-05-30T12:04:58.625Z"
}


2.3 - DELETE
Descrição: Remove um registro.
Parâmetros: ID

Exemplo:
http://localhost:3000/customer/367907b7-54d5-4d38-bc82-38f4a415fd43
Retorno: 200 OK


2.4 - PUT (UPDATE)
Descrição: Atualiza um registro.
Parâmetros: ID do registro a ser alterado + conteúdo a ser atualizado (name, email)

Exemplo:
http://localhost:3000/customer/367907b7-54d5-4d38-bc82-38f4a415fd43
{"name": "Breno", "email": "Breno@email.com"}

Retorno: 200 OK


3 -🧰 Ferramentas e Recursos

Prisma Studio para inspecionar o banco de dados:
npx prisma studio

