using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IDocumentsRepository
    {

        public IEnumerable<Documents> GetAll();

        public IEnumerable<Documents> GetById(object prv);

    }
}