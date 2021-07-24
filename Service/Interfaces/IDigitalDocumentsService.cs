using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace Service.Interfaces
{
    public interface IDigitalDocumentsService
    {

        public IEnumerable<DigitalDocuments> GetAll();

        public IEnumerable<DigitalDocuments> GetById(object prv);

        public void saveDigitalDocument(List<DigitalDocumentDTO> files);

    }
}
