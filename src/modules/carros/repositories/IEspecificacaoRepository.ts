import Especificaco from '../model/Especificacao';

export interface ICriarEspecificacaoDTO {
  nome: string;
  descricao: string;
}

export interface IEspecificacaoRepository {
  criar({ descricao, nome }: ICriarEspecificacaoDTO): void;
  listar(): Especificaco[];
  procurarPorNome(nome: string): Especificaco;
}
