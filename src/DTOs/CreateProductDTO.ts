export class CreateProductDTO {
  nome;
  descricao;
  preco;
  quantidade;
  createdBy;
  constructor(nome, descricao, preco, quantidade, createdBy) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
    this.createdBy = createdBy;
  }
}
