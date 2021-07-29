using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IDocumentsReasonRejectionRepository
    {

        public IEnumerable<DocumentsReasonRejection> GetAll();

        public IEnumerable<DocumentsReasonRejection> GetById(object prv);

    }
}