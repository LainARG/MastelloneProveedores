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
            object obj = _dbContext.Usuarios;
            return _dbContext.Usuarios;

        }

        public void SetTimeLog(object userId)
        {
            dynamic dyn = userId;
            int id = dyn.id;

            IEnumerable<Users> user = _dbContext.Usuarios.Where(user => user.Id_usuario == id);

            foreach (var i in user)
            {
                i.Fecha_ult_ingreso = DateTime.Now;
            }

            _dbContext.SaveChanges();
        }

        public IEnumerable<Documents> GetNewness(object userId)
        {
            dynamic dyn = userId;
            int id = dyn.id;
            DateTime lastUserLog = new DateTime();
            IEnumerable<Users> user = _dbContext.Usuarios.Where(user => user.Id_usuario == id);
            foreach (var i in user)
            {
                lastUserLog = i.Fecha_ult_ingreso;
            }
            
            IEnumerable<Documents> docs = _dbContext.Documentos.Where(doc => doc.Fecha_documento>= lastUserLog);

            return docs;
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