using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace Service.Interfaces
{
    public interface IDigitalDocumentsRejectedService
    {

        public IEnumerable<DigitalDocumentsRejected> GetAll();

        public void saveDigitalDocumentRejected(List<DigitalDocumentRejectedDTO> filesToSave);


    }
}
