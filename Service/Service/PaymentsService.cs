using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class PaymentsService: IPaymentsRepository, IPaymentsService
    {
        public readonly IPaymentsRepository repository;

        public PaymentsService(IPaymentsRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<Payments> GetAll()
        {
            return repository.GetAll();
        }

        public IEnumerable<Payments> GetById(object prv)
        {
            return repository.GetById(prv);
        }

    }
}
