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
    public class PaymentsFormsController : ControllerBase, IPaymentsFormsService
    {

        private readonly IPaymentsFormsService service;

        public PaymentsFormsController(IPaymentsFormsService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<PaymentsForms> GetAll()
        {
            return service.GetAll();
        }

        [HttpPost]
        [Route("getById")]
        public IEnumerable<PaymentsForms> GetById(object pmnt)
        {
            dynamic pmntLocal = JObject.Parse(pmnt.ToString());
            return service.GetById(pmntLocal);
        }
    }
}
