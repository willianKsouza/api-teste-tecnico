import { DeleteCatalogController } from "@/controllers/catalogs/DeleteCatalogController";
import { DeleteCatalogRepository } from "@/repositories/catalogs/DeleteCatalogRepository";
import { DeleteCatalogService } from "@/services/catalogs/DeleteCatalogService";

const repository = new DeleteCatalogRepository();
const service = new DeleteCatalogService(repository);
const deleteCatalogController = new DeleteCatalogController(service);
export { deleteCatalogController };
