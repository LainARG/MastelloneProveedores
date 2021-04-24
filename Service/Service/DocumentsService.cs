using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class DocumentsService: IDocumentsRepository, IDocumentsService
    {
        public readonly IDocumentsRepository documentsRepository;

        public DocumentsService(IDocumentsRepository documentRep)
        {
            this.documentsRepository = documentRep;
        }


        public IEnumerable<Documents> GetAll()
        {
            return documentsRepository.GetAll();
        }

        
    }
}
