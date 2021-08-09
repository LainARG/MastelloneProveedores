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

            return _dbContext.Documentos
                .Include(x => x.Providers)
                .Include(x => x.States)
                .Include(x => x.DocumentTypes);
        }

    }

}