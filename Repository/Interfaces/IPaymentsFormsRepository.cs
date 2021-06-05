using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IPaymentsFormsRepository
    {

        public IEnumerable<PaymentsForms> GetAll();

    }
}