API CRUD NodeJS

Descrição: Esta API CRUD foi desenvolvida com o intuito de aprimorar e fixar o conhecimento em tecnologias backend. A API é capaz de criar, deletar, atualizar e obter cadastros de clientes em um banco de dados PostgreSQL utilizando Docker.

Tecnologias Utilizadas:
Node.js, Prisma ORM, PostgreSQL, Express.js, Docker

A Documentação também esta disponível no confluence para melhor visualização: https://breno0904.atlassian.net/wiki/external/YjBmZmM0OTQ2YTI2NDMyNjhmMDA5NDY3ZmIzOWM4NzE.

1. 🛠️ Instalação e Configuração
1.1 - Clonar o repositório:
GitHub - BrenoRosa9/apiteste 

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
http://localhost:3000/customer?page=2&limit=5

2.2 - POST
Descrição: Cria um novo registro.
Parâmetros: name (string), email (string)

Exemplo:
{"name": "teste", "email": "teste@exemplo.com"}

2.3 - DELETE
Descrição: Remove um registro.
Parâmetros: ID

Exemplo:
http://localhost:3000/customer/367907b7-54d5-4d38-bc82-38f4a415fd43

2.4 - PUT (UPDATE)
Descrição: Atualiza um registro.
Parâmetros: ID do registro a ser alterado + conteúdo a ser atualizado (name, email)

Exemplo:
http://localhost:3000/customer/367907b7-54d5-4d38-bc82-38f4a415fd43
{"name": "Breno", "email": "Breno@email.com"}


3 -🧰 Ferramentas e Recursos
Prisma Studio para inspecionar o banco de dados:
npx prisma studio
