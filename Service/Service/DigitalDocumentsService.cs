using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class DigitalDocumentsService: IDigitalDocumentsRepository, IDigitalDocumentsService
    {
        public readonly IDigitalDocumentsRepository digitalDocumentsRepository;

        public DigitalDocumentsService(IDigitalDocumentsRepository digitalDocumentRep)
        {
            this.digitalDocumentsRepository = digitalDocumentRep;
        }


        public IEnumerable<DigitalDocuments> GetAll()
        {
            return digitalDocumentsRepository.GetAll();
        }



        public void saveDigitalDocument(List<DigitalDocumentDTO> files)
        {
            digitalDocumentsRepository.saveDigitalDocument(files);
        }

    }
}
