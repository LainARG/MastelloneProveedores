using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IDigitalDocumentsRepository
    {

        public IEnumerable<DigitalDocuments> GetAll();

    }
}