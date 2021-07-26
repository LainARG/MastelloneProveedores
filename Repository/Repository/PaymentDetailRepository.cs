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
    public class PaymentDetailRepository : BaseRepository, IPaymentDetailRepository
    {
        public PaymentDetailRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<PaymentDetail> GetAll()
        {

            return _dbContext.Pagos_detalle;

        }

        public IEnumerable<PaymentDetail> GetById(object pmnt)
        {
            dynamic dyn = pmnt;
            int paymentDetailId = dyn.pmnt;
            IEnumerable<PaymentDetail> results = _dbContext.Pagos_detalle.Where(payment => payment.Id_pago == paymentDetailId);
           return results;
        }



    }
}