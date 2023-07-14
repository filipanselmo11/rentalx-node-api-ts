import { Request, Response } from 'express';
import CriarCategoriaUseCase from './CriarCategoriaUseCase';

export default class criarCategoriaController {
  constructor(private criarCategoriaUseCase: CriarCategoriaUseCase) {}

  handle(req: Request, res: Response): Response {
    const { nome, descricao } = req.body;

    this.criarCategoriaUseCase.execute({ nome, descricao });

    return res.status(201).send();
  }
}
