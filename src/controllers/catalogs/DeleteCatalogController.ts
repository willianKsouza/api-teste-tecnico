import { DeleteCatalogDTO } from "@/DTOs/catalogs/DeleteCatalogDTO";



export class DeleteCatalogController {
  DeleteCatalogService;
  constructor(deleteCatalogService) {
    this.DeleteCatalogService = deleteCatalogService;
  }

  async index(req, res) {
    try {
      const { user } = req;
      const { id } = req.params;
        const deleteCatalogDto = new DeleteCatalogDTO(id, user);
        const Catalogs = await this.DeleteCatalogService.delete(deleteCatalogDto);

      return res.status(200).json({ success: true});
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}