export class ListAllCatalogService {
  ListAllCatalogRepository;
    constructor(findCatalogByNameRepository) {
      this.ListAllCatalogRepository = findCatalogByNameRepository;
    }
  
    async list(listAllCatalogDTO) {
      try {
        const catalogs =
          await this.ListAllCatalogRepository.list(listAllCatalogDTO);
        return catalogs;
      } catch (error) {

        throw new Error(error);
      }
    }
  }