import { UpdateProductController } from "@/controllers/products/UpdateProductController";
import { UpdateProductRepository } from "@/repositories/products/UpdateProductRepository";
import { UpdateProductService } from "@/services/products/UpdateProductService";

const repository = new UpdateProductRepository()
const service = new UpdateProductService(repository)
const updateProductController = new UpdateProductController(service)

export {updateProductController }