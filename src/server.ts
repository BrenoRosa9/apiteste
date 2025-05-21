// src/server.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Habilita CORS para todas as rotas
app.use(cors());

// Rotas da aplicação
// Se suas rotas já definem caminho completo (ex: '/customers'), use:
app.use(routes);
// Caso queira prefixo, faça: app.use('/api', routes);

// Tratamento de erros genérico
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(400).json({ message: err.message });
});

// Inicia o servidor
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
});
