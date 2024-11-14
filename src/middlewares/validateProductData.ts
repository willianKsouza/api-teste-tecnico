import { createProductValidate } from "../validators/product/createProductValidate";
import { updateProductValidate } from "../validators/product/updateProductValidade";

export async function validateProductData(req, res, next) {
  try {
    if (req.path === "/create") {
      req.body = createProductValidate(req);
      next();
    }
    if (req.path.startsWith("/update")) {
      req.body = updateProductValidate(req);
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
