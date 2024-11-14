import payload from "payload";

export class ListAllProductRepository {
  async list(params) {
    try {
      const products = await payload.find({
        collection: "products",
        limit:params.limit || 20,
        depth:0,
        sort: "-createdAt", 
        overrideAccess:false, 
        user: params.userDoc
      });
    
      return products;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
