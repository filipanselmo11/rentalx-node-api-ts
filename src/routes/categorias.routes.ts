import { Router, Request, Response } from 'express';
import CategoriasRepository from '../repositories/CategoriasRespository';
import CriarCategoriaService from '../services/CriarCategoriaService';

const categoriasRoutes = Router();
const categoriasRepository = new CategoriasRepository();

categoriasRoutes.post('/', (req: Request, res: Response) => {
  const { nome, descricao } = req.body;

  const criarCategoriaService = new CriarCategoriaService(categoriasRepository);

  criarCategoriaService.execute({ nome, descricao });

  return res.status(201).send();
});

categoriasRoutes.get('/', (req: Request, res: Response) => {
  const lista = categoriasRepository.listar();
  return res.json(lista);
});

export default categoriasRoutes;
