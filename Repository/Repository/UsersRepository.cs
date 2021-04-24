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
    public class UsersRepository : BaseRepository, IUsersRepository
    {
        public UsersRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<Users> GetAll()
        {

            return _dbContext.Usuarios;
        
        }

    }

}