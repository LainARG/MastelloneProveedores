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

        private readonly IUsersService userService; 
        
        public UsersController(IUsersService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public IEnumerable<Users> GetAll()
        {
            return userService.GetAll();
        }
    }
}
