import Categoria from '../model/Categoria';

// DTO => data transfer object
export interface ICriarCategoriaDTO {
  nome: string;
  descricao: string;
}

export interface ICategoriaRepository {
  criar({ nome, descricao }: ICriarCategoriaDTO): void;
  listar(): Categoria[];
  procurarPorNome(nome: string): Categoria;
}
