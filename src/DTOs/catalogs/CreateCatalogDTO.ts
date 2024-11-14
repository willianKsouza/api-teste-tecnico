export class CreateCatalogDTO {
    catalog_name;
    products;
    user;
    constructor(catalog_name, products,  user) {
      this.catalog_name = catalog_name;
      this.products = products;
      this.user = user;
    }
  }