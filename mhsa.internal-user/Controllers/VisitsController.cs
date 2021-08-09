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
    public class VisitsController : ControllerBase,  IVisitsService
    {

        private readonly IVisitsService service; 
        
        public VisitsController(IVisitsService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Visits> GetAll()
        {
            return service.GetAll();
        }
    }
}
