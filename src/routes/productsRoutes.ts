import { createProductController } from "@/dependecy_injection/products/createDI";
import { deleteProductController } from "@/dependecy_injection/products/deleteDI";
import { listAllProductController } from "@/dependecy_injection/products/listAllDI";
import { updateProductController } from "@/dependecy_injection/products/updateDI";
import express from "express";

const productRouter = express.Router();

productRouter.post("/create", (req, res) =>
  createProductController.index(req, res)
);
productRouter.patch("/update/:id", (req, res) =>
  updateProductController.index(req, res)
);
productRouter.get("/list", (req, res) =>
  listAllProductController.index(req, res)
);
productRouter.delete("/delete/:id", (req, res) =>
  deleteProductController.index(req, res)
);

export default productRouter;
