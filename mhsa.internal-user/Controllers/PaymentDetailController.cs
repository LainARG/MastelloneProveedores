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
            throw new NotImplementedException();
        }
    }
}
