export class CreateCatalogService {
  CreateCatalogRepository;
  constructor(createCatalogRepository) {
    this.CreateCatalogRepository = createCatalogRepository;
  }

  async create(createCatalogDTO) {
    try {
      const catalog =
        await this.CreateCatalogRepository.create(createCatalogDTO);
      return catalog;
    } catch (error) {
      throw new Error(error);
    }
  }
}
