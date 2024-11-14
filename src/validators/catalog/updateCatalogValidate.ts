import { z } from "zod";

export const updateCatalogValidate = (req) => {
  const catalogSchema = z.object({
    catalog_name: z.string().min(1).optional(),

    products: z.array(
      z.object({
        id: z.string(),
      })
    ),
  });
  return catalogSchema.parse(req.body);
};
