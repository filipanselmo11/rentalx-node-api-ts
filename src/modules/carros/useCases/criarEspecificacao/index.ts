import EspecificacaoRepository from '../../repositories/implementations/EspecificacaoRepository';
import CriarEspecificacaoController from './CriarEspecificacaoController';
import CriarEspecificacaoUseCase from './CriarEspecificacaoUseCase';

const criarEspecificacaoRepository = new EspecificacaoRepository();

const criarEspecificacaoUseCase = new CriarEspecificacaoUseCase(
  criarEspecificacaoRepository,
);

const criarEspecificacaoController = new CriarEspecificacaoController(
  criarEspecificacaoUseCase,
);

export default criarEspecificacaoController;
