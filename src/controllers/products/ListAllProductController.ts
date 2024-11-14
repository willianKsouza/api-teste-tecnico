

export class ListAllProductController {
  ListAllProductService;
  constructor(listAllProductService) {
    this.ListAllProductService = listAllProductService;
  }

  async index(req, res) {
    try {
      const params = {
        userDoc: req.user,
      };

      const products = await this.ListAllProductService.list(params);

      return res.status(201).json({ success: true, data: products });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}
