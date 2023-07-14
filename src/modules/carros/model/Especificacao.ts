import { v4 as uuidv4 } from 'uuid';

export default class Especificaco {
  id?: string;

  nome: string;

  descricao: string;

  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
