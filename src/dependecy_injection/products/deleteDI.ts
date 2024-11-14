import { DeleteProductController } from "@/controllers/products/DeleteProductController";
import { DeleteProductRepository } from "@/repositories/products/DeleteProductRepository";
import { DeleteProductService } from "@/services/products/DeleteProductService";

const repository = new DeleteProductRepository()
const service = new DeleteProductService(repository)
const deleteProductController = new DeleteProductController(service)

export { deleteProductController}