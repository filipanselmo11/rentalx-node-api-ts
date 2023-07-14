import express from 'express';
import categoriasRoute from './routes/categorias.routes';
import especificacoesRoutes from './routes/especificacoes.routes';

const app = express();

app.use(express.json());

app.use('/categorias', categoriasRoute);
app.use('/especificacoes', especificacoesRoutes);

app.listen(3333, () => console.log('Servidor Rodando'));
