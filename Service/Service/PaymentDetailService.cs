using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class PaymentDetailService: IPaymentDetailRepository, IPaymentDetailService
    {
        public readonly IPaymentDetailRepository repository;

        public PaymentDetailService(IPaymentDetailRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<PaymentDetail> GetAll()
        {
            return repository.GetAll();
        }

        public IEnumerable<PaymentDetail> GetById(object pmnt)
        {
            return repository.GetById(pmnt);
        }

        public IEnumerable<PaymentDetail> GetByProvider(object prv)
        {
            return repository.GetByProvider(prv);
        }
    }
}
