import Categoria from '../model/Categoria';
import {
  ICategoriaRepository,
  ICriarCategoriaDTO,
} from './ICategoriasRepository';

class PostgresCategoriasRepository implements ICategoriaRepository {
  criar({ nome, descricao }: ICriarCategoriaDTO): void {
    console.log(nome, descricao);
  }

  listar(): Categoria[] {}

  procurarPorNome(nome: string): Categoria {
    console.log(nome);
  }
}

export default PostgresCategoriasRepository;
