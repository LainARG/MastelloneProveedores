using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IPaymentsFormsRepository
    {

        public IEnumerable<PaymentsForms> GetAll();

        public IEnumerable<PaymentsForms> GetById(object pmnt);

        public IEnumerable<PaymentsForms> GetByProviderId(object prv);

    }
}