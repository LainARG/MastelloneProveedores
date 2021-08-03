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
    public class ProvidersRepository : BaseRepository, IProvidersRepository
    {
        public ProvidersRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<Providers> GetAll()
        {
            return _dbContext.Proveedores
                .Include(x => x.UsersAssignments);
        }

       


    }
}