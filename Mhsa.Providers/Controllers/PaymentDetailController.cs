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
    public class PaymentDetailController : ControllerBase,  IPaymentDetailService
    {

        private readonly IPaymentDetailService service; 
        
        public PaymentDetailController(IPaymentDetailService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<PaymentDetail> GetAll()
        {
            return service.GetAll();
        }

        public IEnumerable<PaymentDetail> GetById(object pmnt)
        {
            dynamic pmntLocal = JObject.Parse(pmnt.ToString());
            return service.GetById(pmntLocal);
        }
    }
}
