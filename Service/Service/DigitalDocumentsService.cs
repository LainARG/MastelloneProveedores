using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class DigitalDocumentsService: IDigitalDocumentsRepository, IDigitalDocumentsService
    {
        public readonly IDigitalDocumentsRepository repository;

        public DigitalDocumentsService(IDigitalDocumentsRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<DigitalDocuments> GetAll()
        {
            return repository.GetAll();
        }

        public IEnumerable<DigitalDocuments> GetById(object prv)
        {
            return repository.GetById(prv);
        }

        public void saveDigitalDocument(List<DigitalDocumentDTO> files)
        {
            repository.saveDigitalDocument(files);
        }

        public void setReceivedState(object id)
        {
            repository.setReceivedState(id);
        }

        public void setRejectedState(object id)
        {
            repository.setRejectedState(id);
        }

    }
}
