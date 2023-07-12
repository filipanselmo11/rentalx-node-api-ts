import Categoria from '../model/Categoria';

// DTO => data transfer object
interface ICriarCategoriaDTO {
  nome: string;
  descricao: string;
}

class CategoriasRepository {
  private categorias: Categoria[]; // banco de dados

  constructor() {
    this.categorias = [];
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
