using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IDigitalDocumentsRepository
    {

        public IEnumerable<DigitalDocuments> GetAll();

        public IEnumerable<DigitalDocuments> GetById(object prv);

        public void saveDigitalDocument(List<DigitalDocumentDTO> files);

        public void setReceivedState(object id);

        public void setRejectedState(object id);

    }
}