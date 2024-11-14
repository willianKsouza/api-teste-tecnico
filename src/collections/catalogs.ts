import { canAccess } from "../payload/permissions/canAccess";
import { CollectionConfig } from "payload/types";

const Catalogs: CollectionConfig = {
  slug: "catalogs",
  auth: false,
  admin: {
    useAsTitle: 'catalog_name',
  },
  fields: [
    {
      name: "catalog_name",
      type: "text",
      required: true,
    },
    {
      name: "products",
      type: "array",
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
        },
      
      ],
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      required: true,
      saveToJWT:true
    },
  ],
  access: {
    create:canAccess,
    read: canAccess,
    update:canAccess,
    delete:canAccess
  },
};

export default Catalogs;
