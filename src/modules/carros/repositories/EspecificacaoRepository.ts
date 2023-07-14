import Especificaco from '../model/Especificacao';
import {
  ICriarEspecificacaoDTO,
  IEspecificacaoRepository,
} from './IEspecificacaoRepository';

export default class EspecificacaoRepository
  implements IEspecificacaoRepository
{
  private especificacoes: Especificaco[];

  constructor() {
    this.especificacoes = [];
  }

  criar({ descricao, nome }: ICriarEspecificacaoDTO): void {
    const especificacao = new Especificaco();

    Object.assign(especificacao, {
      nome,
      descricao,
      createdAt: new Date(),
    });

    this.especificacoes.push(especificacao);
  }

  procurarPorNome(nome: string): Especificaco {
    const especificacao = this.especificacoes.find(item => item.nome === nome);
    return especificacao;
  }
}
