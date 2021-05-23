using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IStatesRepository
    {

        public IEnumerable<States> GetAll();

    }
}