using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class DocumentsReasonRejectionService: IDocumentsReasonRejectionRepository, IDocumentsReasonRejectionService
    {
        public readonly IDocumentsReasonRejectionRepository repository;

        public DocumentsReasonRejectionService(IDocumentsReasonRejectionRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<DocumentsReasonRejection> GetAll()
        {
            return repository.GetAll();
        }

        public IEnumerable<DocumentsReasonRejection> GetById(object prv)
        {
            return repository.GetById(prv);
        }


    }
}
