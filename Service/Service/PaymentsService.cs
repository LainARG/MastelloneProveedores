using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class PaymentsService: IPaymentsRepository, IPaymentsService
    {
        public readonly IPaymentsRepository paymentsRepository;

        public PaymentsService(IPaymentsRepository paymentsRep)
        {
            this.paymentsRepository = paymentsRep;
        }


        public IEnumerable<Payments> GetAll()
        {
            return paymentsRepository.GetAll();
        }

        
    }
}
