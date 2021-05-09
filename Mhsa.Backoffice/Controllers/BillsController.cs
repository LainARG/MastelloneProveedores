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
    public class BillsController : ControllerBase,  IBillsService
    {

        private readonly IBillsService service; 
        
        public BillsController(IBillsService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Bills> GetAll()
        {
            return service.GetAll();
        }
    }
}
