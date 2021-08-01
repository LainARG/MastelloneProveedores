using Domain;
using Microsoft.EntityFrameworkCore;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;
using static System.Net.Mime.MediaTypeNames;

namespace Repository.Repository
{
    public class PaymentsFormsRepository : BaseRepository, IPaymentsFormsRepository
    {
        public PaymentsFormsRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<PaymentsForms> GetAll()
        {

            return _dbContext.Pagos_formas;

        }

        public IEnumerable<PaymentsForms> GetById(object pmnt)
        {
            dynamic dyn = pmnt;
            int paymentFormId = dyn.pmnt;
            return _dbContext.Pagos_formas.Where(payment => payment.Id_pago == paymentFormId);
        }

        public IEnumerable<PaymentsForms> GetByProviderId(object prv)
        {
            dynamic dyn = prv;
            int providerId = dyn.prv;
            IEnumerable<Payments> pays = _dbContext.Pagos.Where(payment => payment.Id_proveedor == providerId);
            IEnumerable<PaymentsForms> paymentForms = Enumerable.Empty<PaymentsForms>();
            List<PaymentsForms> results = new List<PaymentsForms>();
            foreach (var i in pays)
            {
            IEnumerable<PaymentsForms> paymentForm = _dbContext.Pagos_formas.Where(payment => payment.Id_pago == i.Id_pago);
                foreach (var j in paymentForm)
                {
                    results.Add(j);
                }
            }
            return results;
        }


    }
}