import payload from "payload";

export class UpdateCatalogRepository {
  FindCatalogByIdRepository;
  constructor(findCatalogByIdRepository) {
    this.FindCatalogByIdRepository = findCatalogByIdRepository;
  }
  async update(updateCatalogDto) {
    try {
      const findCatalogByIdDto = {
        idDoc: updateCatalogDto.idDoc,
        user: updateCatalogDto.user,
      };
      let formatDataCurrentValue;
      const currentCatalog =
        await this.FindCatalogByIdRepository.findById(findCatalogByIdDto);
      if (currentCatalog.products) {
        formatDataCurrentValue =
          currentCatalog.products.map((product) => ({
            product: product.product,
          })) || [];
      }
      const formatDataProducts = updateCatalogDto.products.map((product) => ({
        product: product.id,
      }));

      const product = await payload.update({
        collection: "catalogs",
        id: updateCatalogDto.idDoc,
        overrideAccess: false,
        user: updateCatalogDto.user,
        data: {
          products: [...formatDataCurrentValue, ...formatDataProducts],
        },
      });
      return product;
    } catch (error) {
      console.log(error);

      throw new Error(error.message);
    }
  }
}
