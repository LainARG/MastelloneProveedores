using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class DocumentsService: IDocumentsRepository, IDocumentsService
    {
        public readonly IDocumentsRepository repository;

        public DocumentsService(IDocumentsRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<Documents> GetAll()
        {
            return repository.GetAll();
        }

        public IEnumerable<Documents> GetById(object prv)
        {
            return repository.GetById(prv);
        }


    }
}
