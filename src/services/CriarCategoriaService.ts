// import CategoriasRepository from '../repositories/CategoriasRespository';
import { ICategoriaRepository } from '../repositories/ICategoriasRepository';

interface IRequest {
  nome: string;
  descricao: string;
}

class CriarCategoriaService {
  private categoriasRepository: ICategoriaRepository;

  constructor(categoriasRepository: ICategoriaRepository) {
    this.categoriasRepository = categoriasRepository;
  }

  // constructor(private categoriasRepository: CategoriasRepository){}

  execute({ nome, descricao }: IRequest): void {
    const categoriaJaExiste = this.categoriasRepository.procurarPorNome(nome);

    if (categoriaJaExiste) {
      throw new Error('Categoria já existe');
    }

    this.categoriasRepository.criar({ nome, descricao });
  }
}

export default CriarCategoriaService;
