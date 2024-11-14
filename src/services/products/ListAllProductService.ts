export class ListAllProductService {
    ListAllProductRepository
    constructor(listAllProductRepository){
        this.ListAllProductRepository = listAllProductRepository
    }

    async list(params){
        try {
          return  await this.ListAllProductRepository.list(params)
        } catch (error) {
            throw new Error(error);
        }
    }
}