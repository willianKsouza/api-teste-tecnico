export class DeleteProductService {
    DeleteProductRepository
    constructor(deleteProductRepository){
        this.DeleteProductRepository = deleteProductRepository
    }

    async delete(DeleteProductDTO){
        try {
          return await this.DeleteProductRepository.delete(DeleteProductDTO)
        } catch (error) {
            throw new Error(error);
        }
    }
}