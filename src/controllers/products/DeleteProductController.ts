import { DeleteProductDTO } from "@/DTOs/DeleteProductDTO";
import { UpdateProductDTO } from "@/DTOs/UpdateProductDTO";

export class DeleteProductController {
  DeleteProductService;
  constructor(deleteProductService) {
    this.DeleteProductService = deleteProductService;
  }

  async index(req, res) {
    try {
      const { user } = req;
      const { id } = req.params;
      console.log(user, id);

      const deleteProductDto = new DeleteProductDTO(id, user);
      await this.DeleteProductService.delete(deleteProductDto);

      return res.status(200).json({ success: true });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}
