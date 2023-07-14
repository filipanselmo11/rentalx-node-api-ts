import Categoria from '../../model/Categoria';
import { ICategoriaRepository } from '../../repositories/ICategoriasRepository';

export default class ListarCategoriasUseCase {
  private categoriasRepository: ICategoriaRepository;

  constructor(categoriasRepository: ICategoriaRepository) {
    this.categoriasRepository = categoriasRepository;
  }

  // constructor(private categoriasRepository: CategoriasRepository){}

  execute(): Categoria[] {
    const categorias = this.categoriasRepository.listar();

    return categorias;
  }
}
