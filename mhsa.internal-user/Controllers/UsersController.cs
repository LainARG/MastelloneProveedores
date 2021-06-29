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
using Microsoft.AspNetCore.Authorization;

namespace mhsa.internal_user.Controllers
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
        [Authorize]
        public IEnumerable<Users> GetAll()
        {
            return service.GetAll();
        }
    }
}
