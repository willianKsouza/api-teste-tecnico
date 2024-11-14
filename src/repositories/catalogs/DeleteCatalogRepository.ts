import payload from "payload";

export class DeleteCatalogRepository {
    async delete(deleteCatalogDTO){
        try {
            const catalog = await payload.delete({
                collection: 'catalogs',
                id: deleteCatalogDTO.idDoc,
                depth: 0,
                user: deleteCatalogDTO.idUser,
                overrideAccess: false,
              })
              
            return catalog
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}