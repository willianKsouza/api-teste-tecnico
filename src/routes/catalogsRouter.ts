import { createCatalogController } from "@/dependecy_injection/catalogs/createDI";
import { deleteCatalogController } from "@/dependecy_injection/catalogs/deleteDI";
import { listAllCatalogController } from "@/dependecy_injection/catalogs/listAll";
import { updateCatalogController } from "@/dependecy_injection/catalogs/updateDI";
import express from "express";
const catalogsRouter = express.Router();

catalogsRouter.post("/create", (req, res) =>
  createCatalogController.index(req, res)
);
catalogsRouter.patch("/update/:id", (req, res) =>
  updateCatalogController.index(req, res)
);
catalogsRouter.get("/list", (req, res) =>
  listAllCatalogController.index(req,res)
);
catalogsRouter.delete("/delete/:id", (req, res) =>
  deleteCatalogController.index(req, res)
);
export { catalogsRouter };
