import { Router, Request, Response } from 'express';
import CategoriasRepository from '../repositories/CategoriasRespository';

const categoriasRoutes = Router();
const categoriasRepository = new CategoriasRepository();

categoriasRoutes.post('/', (req: Request, res: Response) => {
  const { nome, descricao } = req.body;

  const categoriaJaExiste = categoriasRepository.procurarPorNome(nome);

  if (categoriaJaExiste) {
    return res.status(400).json({ error: ' Categoria já existe !!' });
  }

  categoriasRepository.criar({ nome, descricao });

  return res.status(201).send();
});

categoriasRoutes.get('/', (req: Request, res: Response) => {
  const lista = categoriasRepository.listar();
  return res.json(lista);
});

export default categoriasRoutes;
