import CategoriasRepository from '../../repositories/implementations/CategoriasRespository';
import CriarCategoriaController from './CriarCategoriaController';
import CriarCategoriaUseCase from './CriarCategoriaUseCase';

const categoriasRepository = CategoriasRepository.getInstance();

const criarCategoriaUseCase = new CriarCategoriaUseCase(categoriasRepository);

const criarCategoriaController = new CriarCategoriaController(
  criarCategoriaUseCase,
);

export default criarCategoriaController;
