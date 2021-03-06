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
    public class UsersController : ControllerBase,  IUsersService
    {

        private readonly IUsersService service; 
        
        public UsersController(IUsersService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Users> GetAll()
        {
            return service.GetAll();
        }

        [HttpPost]
        [Route("setTimeLog")]
        public void SetTimeLog(object userId)
        {
          service.SetTimeLog(userId);
        }

        [HttpPost]
        [Route("getNewness")]
        public IEnumerable<Documents> GetNewness(object userId)
        {
           return service.GetNewness(userId);
        }

        public IEnumerable<Users> GetAllWithDetails()
        {
            return service.GetAllWithDetails();
        }
    }
}
