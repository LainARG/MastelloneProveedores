using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class DocumentTypesService: IDocumentTypesRepository, IDocumentTypesService
    {
        public readonly IDocumentTypesRepository repository;

        public DocumentTypesService(IDocumentTypesRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<DocumentTypes> GetAll()
        {
            return repository.GetAll();
        }

        
    }
}
