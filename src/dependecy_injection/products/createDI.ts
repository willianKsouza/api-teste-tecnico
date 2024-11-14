

import { CreateProductController } from "@/controllers/products/CreateProductController";
import { CreateProductRepository } from "@/repositories/products/CreateProductRepository";
import { CreateProductService } from "@/services/products/CreateProductService";

const repository = new CreateProductRepository();
const service = new CreateProductService(repository);
const createProductController = new CreateProductController(service);

export {createProductController}