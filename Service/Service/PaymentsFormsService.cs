using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class PaymentsFormsService: IPaymentsFormsRepository, IPaymentsFormsService
    {
        public readonly IPaymentsFormsRepository repository;

        public PaymentsFormsService(IPaymentsFormsRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<PaymentsForms> GetAll()
        {
            return repository.GetAll();
        }

        
    }
}
