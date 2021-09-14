using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IPaymentsRepository
    {

        public IEnumerable<Payments> GetAll();

        public IEnumerable<Payments> GetById(object prv);

    }
}