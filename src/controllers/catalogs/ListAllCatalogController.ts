import { ListAllCatalogDTO } from "@/DTOs/catalogs/ListAllCatalogDTO";

export class ListAllCatalogController {
  ListAllCatalogService;
  constructor(listAllCatalogService) {
    this.ListAllCatalogService = listAllCatalogService;
  }

  async index(req, res) {
    try {
      const listAllCatalogDTO = new ListAllCatalogDTO(req.user);
      const catalog = await this.ListAllCatalogService.list(listAllCatalogDTO);     
      return res.status(201).json({ success: true, data: catalog });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}
