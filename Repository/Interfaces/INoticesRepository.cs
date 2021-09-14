using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface INoticesRepository
    {
        public IEnumerable<Notices> GetAll();

    }
}