export class UpdateProductService {
  UpdateProductRepository;
  constructor(updateProductRepository) {
    this.UpdateProductRepository = updateProductRepository;
  }
  async update(updateUserDto, params) {
    try {
      const filteredUpdateUserDto = Object.fromEntries(
        Object.entries(updateUserDto).filter(
          ([_, value]) => value !== undefined
        )
      );

      const product = await this.UpdateProductRepository.update(
        filteredUpdateUserDto,
        params
      );

      return product;
    } catch (error) {
      throw new Error(error);
    }
  }
}
