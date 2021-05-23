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
    public class StatesRepository : BaseRepository, IStatesRepository
    {
        public StatesRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<States> GetAll()
        {

            return _dbContext.Estados;
        
        }

    }

}