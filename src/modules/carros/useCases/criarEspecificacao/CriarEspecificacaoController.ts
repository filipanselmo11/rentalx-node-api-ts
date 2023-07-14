import { Request, Response } from 'express';
import CriarEspecificacaoUseCase from './CriarEspecificacaoUseCase';

export default class CriarEspecificacaoController {
  constructor(private criarEspecificacaoUseCase: CriarEspecificacaoUseCase) {}

  handle(req: Request, res: Response) {
    this.criarEspecificacaoUseCase.execute({ nome, descricao });

    return res.status(201).send();
  }
}
