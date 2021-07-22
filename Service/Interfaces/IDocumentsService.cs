using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace Service.Interfaces
{
    public interface IDocumentsService
    {

        public IEnumerable<Documents> GetAll();

        public IEnumerable<Documents> GetById(object prv);

    }
}
