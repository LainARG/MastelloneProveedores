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

        [HttpGet]
        [Route("details")]
        public IEnumerable<Users> GetAllWithDetails()
        {
            return service.GetAllWithDetails();
        }

        public void SetTimeLog(object userId)
        {
            throw new NotImplementedException();
        }
    }
}
