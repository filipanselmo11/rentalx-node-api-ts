import { Request, Response } from 'express';
import ListarCategoriasUseCase from './ListarCategoriasUseCase';

export default class ListarCategoriasController {
  private listarCategoriasUseCase: ListarCategoriasUseCase;

  constructor(listarCategoriasUseCase: ListarCategoriasUseCase) {
    this.listarCategoriasUseCase = listarCategoriasUseCase;
  }

  handle(req: Request, res: Response): Response {
    const todos = this.listarCategoriasUseCase.execute();

    return res.json(todos);
  }
}
