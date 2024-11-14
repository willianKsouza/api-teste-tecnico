import payload from "payload";

export class DeleteProductRepository {
    async delete(DeleteProductDTO){
        try {
            const product = await payload.delete({
                collection: 'products',
                id: DeleteProductDTO.idDoc,
                depth: 0,
                user: DeleteProductDTO.idUser,
                overrideAccess: false,
              })
              console.log(product);
              
            return product
        } catch (error) {
            console.log(error);
            
            throw new Error(error);
            
        }
    }
}