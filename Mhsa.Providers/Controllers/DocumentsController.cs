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

        [HttpPost]
        [Route("getById")]
        public IEnumerable<Documents> GetById(object prv)
        {
            dynamic prv1 = JObject.Parse(prv.ToString());
            return service.GetById(prv1);
        }
    }
}
