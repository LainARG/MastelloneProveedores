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
