export class DeleteProductDTO {
  idDoc;
  idUser;
  constructor(idDoc, idUser) {
    this.idDoc = idDoc;
    this.idUser = idUser;
  }
}
