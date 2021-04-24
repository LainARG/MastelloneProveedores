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
    public class PaymentsController : ControllerBase,  IPaymentsService
    {

        private readonly IPaymentsService paymentsService; 
        
        public PaymentsController(IPaymentsService paymentsService)
        {
            this.paymentsService = paymentsService;
        }

        [HttpGet]
        public IEnumerable<Payments> GetAll()
        {
            return paymentsService.GetAll();
        }
    }
}
