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
