import payload from "payload";

export class FindCatalogByIdRepository {
  async findById(findCatalogByIdDto) {
    try {
      const catalog = await payload.findByID({
        collection: "catalogs",
        depth:0,
        id: findCatalogByIdDto.idDoc,
        overrideAccess: false,
        user: findCatalogByIdDto.user,
      });
      return catalog;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}