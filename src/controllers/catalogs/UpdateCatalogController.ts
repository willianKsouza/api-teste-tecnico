import { CreateCatalogDTO } from "@/DTOs/catalogs/CreateCatalogDTO";
import { UpdateCatalogDTO } from "@/DTOs/catalogs/UpdateCatalogDTO";

export class UpdateCatalogController {
  UpdateCatalogService;
  constructor(updateCatalogService) {
    this.UpdateCatalogService = updateCatalogService;
  }

  async index(req, res) {
    try {
      console.log(req.user);
      
      const { id } = req.params
      const { products} = req.body;
      const updateCatalogDTO = new UpdateCatalogDTO(
        id,
        products,
        req.user
      );

      const catalog = await this.UpdateCatalogService.update(updateCatalogDTO)
      return res.status(201).json({ success: true });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}