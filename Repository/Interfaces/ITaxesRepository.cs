using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface ITaxesRepository
    {

        public IEnumerable<Taxes> GetAll();

    }
}