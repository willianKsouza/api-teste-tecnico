export class UpdateCatalogService {
  UpdateCatalogRepository;
  constructor(updateCatalogRepository) {
    this.UpdateCatalogRepository = updateCatalogRepository;
  }

  async update(updateCatalogDTO) {
    try {
      const catalog =
        await this.UpdateCatalogRepository.update(updateCatalogDTO);
      return catalog;
    } catch (error) {
      throw new Error(error);
    }
  }
}
