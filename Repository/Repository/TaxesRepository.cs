using Domain;
using Microsoft.EntityFrameworkCore;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;

namespace Repository.Repository
{
    public class TaxesRepository : BaseRepository, ITaxesRepository
    {
        public TaxesRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<Taxes> GetAll()
        {

            return _dbContext.Contribuciones;
        
        }

    }

}