import { Router, Request, Response } from 'express';
// import CategoriasRepository from '../modules/carros/repositories/CategoriasRespository';
import criarCategoriaController from '../modules/carros/useCases/criarCategoria';
import listarCategoriasController from '../modules/carros/useCases/listarCategorias';

const categoriasRoutes = Router();
// const categoriasRepository = new CategoriasRepository();

categoriasRoutes.post('/', (req: Request, res: Response) => {
  return criarCategoriaController.handle(req, res);
});

categoriasRoutes.get('/', (req: Request, res: Response) => {
  return listarCategoriasController.handle(req, res);
});

export default categoriasRoutes;
