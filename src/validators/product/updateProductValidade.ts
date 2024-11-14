import { z } from "zod";

export const updateProductValidate = (req) => {
  const product = z
    .object({
      nome: z.string().trim().optional(),
      descricao: z.string().trim().optional(),
      preco: z.number().optional(),
      quantidade: z.number().int().optional(),
    })
    .strict();
  return product.parse(req.body);
};
