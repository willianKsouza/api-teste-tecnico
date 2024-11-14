import { CreateCatalogDTO } from "@/DTOs/catalogs/CreateCatalogDTO";

export class CreateCatalogController {
  CreateCatalogService;
  constructor(createCatalogService) {
    this.CreateCatalogService = createCatalogService;
  }

  async index(req, res) {
    try {
      const { catalog_name, products} = req.body;
      const createCatalogDTO = new CreateCatalogDTO(
        catalog_name,
        products,
        req.user
      );

      await this.CreateCatalogService.create(createCatalogDTO);
      return res.status(201).json({ success: true });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}
