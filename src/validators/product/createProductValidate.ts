import { z } from "zod";

export const createProductValidate = (req) => {
  const product = z
    .object({
      nome: z.string().trim(),
      descricao: z.string().trim(),
      preco: z.number(),
      quantidade: z.number().int(),
      createdBy: z.string().regex(/^[a-f0-9]{24}$/),
    })
    .strict();
  return product.parse(req.body);
};
