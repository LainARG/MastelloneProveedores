using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IDocumentTypesRepository
    {

        public IEnumerable<DocumentTypes> GetAll();

    }
}