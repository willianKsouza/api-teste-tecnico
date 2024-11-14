export class DeleteCatalogService {
    DeleteCatalogRepository
    constructor(deleteCatalogRepository){
        this.DeleteCatalogRepository = deleteCatalogRepository
    }

    async delete(deleteCatalogDTO){
        try {
          return await this.DeleteCatalogRepository.delete(deleteCatalogDTO)
        } catch (error) {
            throw new Error(error);
        }
    }
}