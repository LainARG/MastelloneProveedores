using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class DigitalDocumentsRejectedService : IDigitalDocumentsRejectedRepository, IDigitalDocumentsRejectedService
    {
        public readonly IDigitalDocumentsRejectedRepository repository;

        public DigitalDocumentsRejectedService(IDigitalDocumentsRejectedRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<DigitalDocumentsRejected> GetAll()
        {
            return repository.GetAll();
        }

        public void saveDigitalDocumentRejected(List<DigitalDocumentRejectedDTO> filesToSave)
        {
            repository.saveDigitalDocumentRejected(filesToSave);
        }

    
    }
}
