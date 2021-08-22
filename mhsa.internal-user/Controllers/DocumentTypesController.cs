using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using Repository.Interfaces;
using Service.Interfaces;

namespace Mhsa.Backoffice.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class DocumentTypesController : ControllerBase,  IDocumentTypesService
    {

        private readonly IDocumentTypesService service; 
        
        public DocumentTypesController(IDocumentTypesService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<DocumentTypes> GetAll()
        {
          return service.GetAll();
        }
    }
}
