using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IDigitalDocumentsRejectedRepository
    {

        public IEnumerable<DigitalDocumentsRejected> GetAll();

        public void saveDigitalDocumentRejected(List<DigitalDocumentRejectedDTO> files);


    }
}