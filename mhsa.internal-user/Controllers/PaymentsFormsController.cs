using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Repository.Interfaces;
using Service.Interfaces;

namespace mhsa.internal_user.Controllers
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
    }
}
