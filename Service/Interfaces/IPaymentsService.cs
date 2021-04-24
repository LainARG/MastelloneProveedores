using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace Service.Interfaces
{
    public interface IPaymentsService
    {

        public IEnumerable<Payments> GetAll();

    }
}
