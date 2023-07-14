import { v4 as uuidv4 } from 'uuid';

class Categoria {
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

export default Categoria;
