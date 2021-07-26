using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace Service.Interfaces
{
    public interface IPaymentsFormsService
    {

        public IEnumerable<PaymentsForms> GetAll();

        public IEnumerable<PaymentsForms> GetById(object pmnt);

    }
}
