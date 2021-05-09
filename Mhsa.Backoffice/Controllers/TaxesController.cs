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
    public class TaxesController : ControllerBase,  ITaxesService
    {

        private readonly ITaxesService service; 
        
        public TaxesController(ITaxesService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Taxes> GetAll()
        {
            return service.GetAll();
        }
    }
}
