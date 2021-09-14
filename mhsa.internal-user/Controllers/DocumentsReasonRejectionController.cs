using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Repository.Interfaces;
using Service.Interfaces;

namespace mhsa.internal_user.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/{controller}")]
    public class DocumentsReasonRejectionController : ControllerBase, IDocumentsReasonRejectionService
    {

        private readonly IDocumentsReasonRejectionService service; 
        
        public DocumentsReasonRejectionController(IDocumentsReasonRejectionService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<DocumentsReasonRejection> GetAll()
        {
            return service.GetAll();
        }

        [HttpPost]
        public IEnumerable<DocumentsReasonRejection> GetById(object prv)
        {
            throw new NotImplementedException();
        }
    }
}
