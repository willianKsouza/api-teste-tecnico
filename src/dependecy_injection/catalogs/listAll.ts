import { ListAllCatalogController } from "@/controllers/catalogs/ListAllCatalogController";
import { ListAllCatalogRepository } from "@/repositories/catalogs/ListAllCatalogRepository";
import { ListAllCatalogService } from "@/services/catalogs/ListAllCatalogService";

const repository = new ListAllCatalogRepository()
const service =  new ListAllCatalogService(repository)
const listAllCatalogController = new ListAllCatalogController(service)
export { listAllCatalogController }