export class CreateProductService {
  CreateProductRepository;
  constructor(createProductRepository) {
    this.CreateProductRepository = createProductRepository;
  }
  async createProduct(createProductDTO) {
    try {

      const product =
        await this.CreateProductRepository.create(createProductDTO);

      return product;
    } catch (error) {
      throw new Error(error);
    }
  }
}
