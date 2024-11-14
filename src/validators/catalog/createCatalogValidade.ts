import { z } from "zod";

export const createCatalogValidate = (req) => {
  const catalogSchema = z.object({
    catalog_name: z.string().min(1),

    products: z.array(
      z.object({
        id: z.string(),
      })
    ),
  }).strict();
  return catalogSchema.parse(req.body);
};
