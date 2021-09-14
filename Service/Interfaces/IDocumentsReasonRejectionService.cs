using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace Service.Interfaces
{
    public interface IDocumentsReasonRejectionService
    {

        public IEnumerable<DocumentsReasonRejection> GetAll();

        public IEnumerable<DocumentsReasonRejection> GetById(object prv);

    }
}
