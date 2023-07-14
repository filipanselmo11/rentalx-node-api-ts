import { Router, Request, Response } from 'express';
import criarEspecificacaoController from '../modules/carros/useCases/criarEspecificacao';

const especificacoesRoutes = Router();

especificacoesRoutes.post('/', (req: Request, res: Response) => {
  return criarEspecificacaoController.handle(req, res);
});

export default especificacoesRoutes;
