import { createCatalogValidate } from "@/validators/catalog/createCatalogValidade";
import { updateCatalogValidate } from "@/validators/catalog/updateCatalogValidate";


export async function validateCatalogData(req, res, next) {
  try {
    if (req.path === "/create") {
      req.body = createCatalogValidate(req);
      next();
    }
    if (req.path.startsWith("/update")) {
      req.body = updateCatalogValidate(req);
      next();
    }
    if (req.path === "/list") {
      next();
    }
    if (req.path.startsWith("/delete")) {
      next();
    }
  } catch (error) {
    return res.status(422).json({
      success: false,
      message: error.issues.map(({ expected, path }) => ({
        input: path[0],
        expected: expected,
      })),
    });
  }
}