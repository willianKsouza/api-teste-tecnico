export class UpdateProductDTO {
    nome;
    descricao;
    preco;
    quantidade;
    constructor(nome, descricao, preco, quantidade) {
      this.nome = nome;
      this.descricao = descricao;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }
  