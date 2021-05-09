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
    public class BillsRepository : BaseRepository, IBillsRepository
    {
        public BillsRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<Bills> GetAll()
        {

            return _dbContext.Facturas;
        
        }

    }

}