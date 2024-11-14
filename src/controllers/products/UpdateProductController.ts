import { UpdateProductDTO } from "@/DTOs/UpdateProductDTO";


export class UpdateProductController {
  UpdateProductService;
  constructor(updateProductService) {
    this.UpdateProductService = updateProductService;
  }

  async index(req, res) {
    try {
      console.log('UpdateProductController :',req.user);
      
      const { nome, descricao, preco, quantidade} = req.body;
      const { id } = req.params

      const updateProductDTO = new UpdateProductDTO(
        nome,
        descricao,
        preco,
        quantidade,
      );
      const params = {
        userDoc:req.user,
        idDoc: id
      }
      await this.UpdateProductService.update(updateProductDTO,params);

      return res.status(201).json({ success: true });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}
