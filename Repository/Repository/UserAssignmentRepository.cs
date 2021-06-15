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
    public class UsersAssignmentRepository : BaseRepository, IUsersAssignmentRepository
    {
        public UsersAssignmentRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<UsersAssignment> GetAll()
        {

            return _dbContext.Usuarios_asignacion;

        }

   


    }
}