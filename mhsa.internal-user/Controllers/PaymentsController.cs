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
    public class PaymentsController : ControllerBase,  IPaymentsService
    {

        private readonly IPaymentsService service; 
        
        public PaymentsController(IPaymentsService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Payments> GetAll()
        {
            return service.GetAll();
        }

        [HttpPost]
        [Route("getById")]
        public IEnumerable<Payments> GetById(object prv)
        {
            dynamic prv1 = JObject.Parse(prv.ToString());
            return service.GetById(prv1);
        }

    }
}
