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
    public class DocumentsRepository : BaseRepository, IDocumentsRepository
    {
        public DocumentsRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<Documents> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Documents> GetById(object prv)
        {
            dynamic dyn = prv;
            int providerId = dyn.prv;
            IEnumerable<Documents> results = _dbContext.Documentos.Where(document => document.Id_proveedor == providerId);
            return results;
        }

    }

}