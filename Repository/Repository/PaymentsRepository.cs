using Domain;
using Microsoft.EntityFrameworkCore;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;

namespace Repository.Repository
{
    public class PaymentsRepository : BaseRepository, IPaymentsRepository
    {
        public PaymentsRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<Payments> GetAll()
        {

            return _dbContext.Pagos;
        
        }

        public IEnumerable<Payments> GetById(object prv)
        {
            dynamic dyn = prv;
            int providerId = dyn.prv;
            IEnumerable<Payments> results = _dbContext.Pagos.Where(payment => payment.Id_proveedor == providerId);
            return results;

        }

    }

}