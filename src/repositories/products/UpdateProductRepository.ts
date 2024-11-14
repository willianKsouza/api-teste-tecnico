
import payload from "payload";

export class UpdateProductRepository {
  async update(filteredUpdateUserDto,params) {
    console.log(params);
    
    try {    
      const product = await payload.update({
        collection: "products",
        id: params.idDoc,
        overrideAccess:false,
        user:params.userDoc,
        data: {
            ...filteredUpdateUserDto
        },
      });
      return product;
    } catch (error) {
      console.log(error);
      
      throw new Error(error.message);
    }
  }
}
