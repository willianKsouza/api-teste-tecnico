import { UpdateCatalogController } from "@/controllers/catalogs/UpdateCatalogController";
import { FindCatalogByIdRepository } from "@/repositories/catalogs/FindCatalogByIdRepository";
import { UpdateCatalogRepository } from "@/repositories/catalogs/UpdateCatalogByIdRepository";
import { UpdateProductService } from "@/services/products/UpdateProductService";

const repository1 = new FindCatalogByIdRepository()
const repository2 = new UpdateCatalogRepository(repository1)
const service = new UpdateProductService(repository2)
const updateCatalogController = new UpdateCatalogController(service)

export {updateCatalogController}