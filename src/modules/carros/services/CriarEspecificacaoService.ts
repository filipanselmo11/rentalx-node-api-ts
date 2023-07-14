import { IEspecificacaoRepository } from '../repositories/IEspecificacaoRepository';

interface IRequest {
  nome: string;
  descricao: string;
}

export default class CriarEspecificacaoService
  implements IEspecificacaoRepository
{
  private especificacaoRepository: IEspecificacaoRepository;

  constructor(especificacaoRepository: IEspecificacaoRepository) {
    this.especificacaoRepository = especificacaoRepository;
  }

  execute({ nome, descricao }: IRequest): void {
    const especificacaoJaExiste =
      this.especificacaoRepository.procurarPorNome(nome);

    if (especificacaoJaExiste) {
      throw new Error('Especificacao Já existe');
    }
    this.especificacaoRepository.criar({
      nome,
      descricao,
    });
  }
}
