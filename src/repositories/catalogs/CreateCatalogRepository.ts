import payload from "payload";

export class CreateCatalogRepository {
  async create(createCatalogDTO) {
    try {
      const formatData = createCatalogDTO.products.map((product) => ({
        product: product.id,
      }));
      await payload.create({
        collection: "catalogs",
        depth: 0,
        user: createCatalogDTO.user,
        overrideAccess: false,
        data: {
          catalog_name: createCatalogDTO.catalog_name,
          products: [...formatData],
          createdBy: createCatalogDTO.user.id,
        },
      });
    } catch (error) {
      console.log(error);
      
      throw new Error(error.message);
    }
  }
}
