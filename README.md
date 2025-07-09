# NLW Agents - Server

Backend do projeto **NLW Agents** desenvolvido durante o evento NLW (Next Level Week) da Rocketseat.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Fastify** - Framework web
- **Drizzle ORM** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados (com pgvector)
- **Zod** - Validação de schemas
- **Biome** - Linter e formatter

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- pnpm (recomendado)

## ⚙️ Configuração

1. **Clone o repositório**
```bash
git clone <repository-url>
cd server
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. **Inicie o banco de dados**
```bash
docker-compose up -d
```

5. **Execute as migrações**
```bash
pnpm drizzle-kit migrate
```

6. **Popule o banco (opcional)**
```bash
pnpm db:seed
```

## 🏃‍♂️ Executando o projeto

**Desenvolvimento:**
```bash
pnpm start:dev
```

**Produção:**
```bash
pnpm start
```

O servidor estará disponível em `http://localhost:3333`

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts    # Conexão com banco
│   ├── migrations/      # Migrações do Drizzle
│   ├── schema/          # Schemas das tabelas
│   └── seed.ts          # Dados iniciais
├── http/
│   └── routes/          # Rotas da API
├── env.ts               # Configuração de variáveis
└── server.ts            # Servidor Fastify
```

## 🔧 Scripts Disponíveis

- `pnpm start` - Inicia o servidor em produção
- `pnpm start:dev` - Inicia o servidor em modo desenvolvimento
- `pnpm db:seed` - Popula o banco com dados iniciais

## 📝 Padrões de Projeto

- **Clean Architecture** - Separação clara de responsabilidades
- **Type Safety** - TypeScript + Zod para validação
- **Database First** - Drizzle ORM com migrações
- **RESTful API** - Endpoints seguindo convenções REST 