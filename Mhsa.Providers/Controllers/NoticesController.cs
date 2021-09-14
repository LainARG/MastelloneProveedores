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
    public class NoticesController : ControllerBase,  INoticesService
    {

        private readonly INoticesService service; 
        
        public NoticesController(INoticesService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Notices> GetAll()
        {
          return service.GetAll();
        }

       
    }
}
