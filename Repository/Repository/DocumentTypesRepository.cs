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
    public class DocumentTypesRepository : BaseRepository, IDocumentTypesRepository
    {
        public DocumentTypesRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<DocumentTypes> GetAll()
        {

            return _dbContext.Tipos_documento;
        
        }

    }

}