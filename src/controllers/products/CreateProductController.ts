import { CreateProductDTO } from "../../DTOs/CreateProductDTO";

export class CreateProductController {
  CreateProductService;
  constructor(createProductService) {
    this.CreateProductService = createProductService;
  }

  async index(req, res) {
    
    try {
      const { nome, descricao, preco, quantidade, createdBy } = req.body;
      const createProductDTO = new CreateProductDTO(
        nome,
        descricao,
        preco,
        quantidade,
        createdBy
      );

      const product = await this.CreateProductService.createProduct(createProductDTO);
      console.log(product);
      
      return res.status(201).json({ success: true });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}
