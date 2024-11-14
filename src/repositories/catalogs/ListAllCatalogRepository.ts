import payload from "payload";

export class ListAllCatalogRepository {
  async list(listAllCatalogDTO) {
    try {
      const catalogs = await payload.find({
        collection: "catalogs",
        depth: 1,
        sort: "-createdAt", 
        overrideAccess: false,
        user: listAllCatalogDTO.user,
      });

      return catalogs;
      
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
