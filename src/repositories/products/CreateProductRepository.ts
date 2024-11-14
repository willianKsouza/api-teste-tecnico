import payload from "payload";

export class CreateProductRepository {
  async create(createProductDTO) {
    try {
   
      const product = await payload.create({
        collection: "products",
        depth:0,
        data: {
          nome: createProductDTO.nome,
          descricao: createProductDTO.descricao,
          preco: createProductDTO.preco,
          quantidade: createProductDTO.quantidade,
          createdBy: createProductDTO.createdBy
        },
      });
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
