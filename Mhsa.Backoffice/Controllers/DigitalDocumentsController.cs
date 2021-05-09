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
    public class DigitalDocumentsController : ControllerBase,  IDigitalDocumentsService
    {

        private readonly IDigitalDocumentsService service; 
        
        public DigitalDocumentsController(IDigitalDocumentsService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<DigitalDocuments> GetAll()
        {
            return service.GetAll();
        }
    }
}
