export class UpdateCatalogDTO {
  idDoc;
  products;
  user;
  constructor(idDoc, products, user) {
    this.idDoc = idDoc
    this.products = products;
    this.user = user;
  }
}
