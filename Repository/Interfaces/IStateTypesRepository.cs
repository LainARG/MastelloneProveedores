using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IStateTypesRepository
    {

        public IEnumerable<StateTypes> GetAll();

    }
}