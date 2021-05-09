using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IBillsRepository
    {

        public IEnumerable<Bills> GetAll();

    }
}