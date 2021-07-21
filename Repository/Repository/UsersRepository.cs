using Domain;
using Microsoft.AspNetCore.Mvc;
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
    public class UsersRepository : BaseRepository, IUsersRepository
    {
        public UsersRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public DbSet<Users> Users { get; set; }
        public DbSet<Providers> Providers { get; set; }

        public IEnumerable<Users> GetAll()
        {
            return _dbContext.Usuarios;

        }

        [Route("/details")]
        public IEnumerable<Users> GetAllWithDetails()
        {
            return _dbContext.Usuarios
                .Include(x => x.UsersAssignments)
                .ThenInclude(a => a.Providers);
        }
    }

}