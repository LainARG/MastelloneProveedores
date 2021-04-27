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
    public class DigitalDocumentsRepository : BaseRepository, IDigitalDocumentsRepository
    {
        public DigitalDocumentsRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<DigitalDocuments> GetAll()
        {

            return _dbContext.Documentos_electronicos;
        
        }

    }

}