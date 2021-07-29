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
    public class DocumentsReasonRejectionRepository : BaseRepository, IDocumentsReasonRejectionRepository
    {
        public DocumentsReasonRejectionRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<DocumentsReasonRejection> GetAll()
        {

            return _dbContext.Motivos_rechazo_documento;
        
        }

        public IEnumerable<DocumentsReasonRejection> GetById(object prv)
        {
            dynamic dyn = prv;
            int providerId = dyn.prv;
            IEnumerable<DocumentsReasonRejection> results = _dbContext.Motivos_rechazo_documento;
            return results;
        }

    }

}