import { Router, Request, Response } from 'express';
import CriarCategoriaService from '../modules/carros/services/CriarCategoriaService';
import EspecificacaoRepository from '../modules/carros/repositories/EspecificacaoRepository';

const especificacoesRoutes = Router();

const especificacaoRepository = new EspecificacaoRepository();

especificacoesRoutes.post('/', (req: Request, res: Response) => {
  const { nome, descricao } = req.body;
  const criarEspecificacaoService = new CriarCategoriaService(
    especificacaoRepository,
  );

  criarEspecificacaoService.execute({ nome, descricao });

  return res.status(201).send();
});

export default especificacoesRoutes;
