import { ListAllProductController } from "@/controllers/products/ListAllProductController";
import { ListAllProductRepository } from "@/repositories/products/ListAllProductRepository";
import { ListAllProductService } from "@/services/products/ListAllProductService";

const repository =  new ListAllProductRepository()
const service =  new ListAllProductService(repository)
const listAllProductController = new ListAllProductController(service)

export {listAllProductController}