using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Repository.Interfaces;
using Service.Interfaces;

namespace Mhsa.Backoffice.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class DocumentsController : ControllerBase,  IDocumentsService
    {

        private readonly IDocumentsService service; 
        
        public DocumentsController(IDocumentsService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Documents> GetAll()
        {
            return service.GetAll();
        }
    }
}
