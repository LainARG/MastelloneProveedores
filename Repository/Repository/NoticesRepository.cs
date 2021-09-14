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
    public class NoticesRepository : BaseRepository, INoticesRepository
    {
        public NoticesRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<Notices> GetAll()
        {
            return _dbContext.Avisos;
        }

        

    }

}