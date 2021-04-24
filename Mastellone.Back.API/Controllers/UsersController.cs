using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mastellone.Back.API.Controllers
{
    [Produces("application/json")]
    [EnableCors("AllowAllOriginsPolicy")]
    [Route("api/[Controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        public UsersController() { }

        [HttpGet]
        public object getAll()
        {

            return "Lain love this method";
        }



    }
}
