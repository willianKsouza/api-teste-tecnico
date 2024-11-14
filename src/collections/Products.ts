import { canAccess } from "../payload/permissions/canAccess";
import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "products",
  auth: false,
  admin: {
    useAsTitle: "nome",
  },
  fields: [
    {
      name: "nome",
      type: "text",
    },
    {
      name: "descricao",
      type: "text",
    },
    {
      name: "preco",
      type: "number",
    },
    {
      name: "quantidade",
      type: "number",
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      saveToJWT: true,
      required: true,
    },
  ],
  access: {
    create: canAccess,
    read: canAccess,
    update: canAccess,
    delete: canAccess,
  },
};

export default Products;
