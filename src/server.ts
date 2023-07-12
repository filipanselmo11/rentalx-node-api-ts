import express from 'express';
import categoriasRoute from './routes/categorias.routes';

const app = express();

app.use(express.json());

app.use('/categorias', categoriasRoute);

app.listen(3333, () => console.log('Servidor Rodando'));
