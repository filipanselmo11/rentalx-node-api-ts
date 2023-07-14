import Categoria from '../../model/Categoria';
import {
  ICategoriaRepository,
  ICriarCategoriaDTO,
} from '../ICategoriasRepository';

// Design pattern Singleton

class CategoriasRepository implements ICategoriaRepository {
  private categorias: Categoria[]; // banco de dados

  private static INSTANCE: CategoriasRepository;

  private constructor() {
    this.categorias = [];
  }

  public static getInstance(): CategoriasRepository {
    if (!CategoriasRepository.INSTANCE) {
      CategoriasRepository.INSTANCE = new CategoriasRepository();
    }

    return CategoriasRepository.INSTANCE;
  }

  criar({ nome, descricao }: ICriarCategoriaDTO): void {
    // => Criar Castrado
    const categoria = new Categoria();

    Object.assign(categoria, {
      nome,
      descricao,
      createdAt: new Date(),
    });

    this.categorias.push(categoria);
  }

  listar(): Categoria[] {
    // => Listar os cadastros
    return this.categorias;
  }

  procurarPorNome(nome: string): Categoria {
    // => Função que verifica se já existe o nome de uma categoria
    const categoria = this.categorias.find(
      categoriaItem => categoriaItem.nome === nome,
    );
    return categoria;
  }
}

export default CategoriasRepository;
