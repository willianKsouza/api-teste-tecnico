import { CreateCatalogController } from "@/controllers/catalogs/CreateCatalogController";
import { CreateCatalogRepository } from "@/repositories/catalogs/CreateCatalogRepository";
import { CreateCatalogService } from "@/services/catalogs/CreateCatalogService";

const repository = new CreateCatalogRepository()
const service = new CreateCatalogService(repository)
const createCatalogController = new CreateCatalogController(service)
export { createCatalogController }