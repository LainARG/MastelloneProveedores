using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Repository.Interfaces;
using Service.Interfaces;

namespace Mhsa.Backoffice.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class AuthController : ControllerBase
    {
        static string Token = "";

        public AuthController(){}

        [HttpGet]
        public IActionResult GetAuth()
        {

            string token = "";
            string url = "https://localhost:44380/auth";
            token = HttpContext.Request.Query["token"];
            if (!String.IsNullOrEmpty(HttpContext.Request.Query["token"])) { }
            Token = token;
            return Redirect(url);

        }

        [HttpGet("token")]
        public string GetToken()
        {

        return Token;

        }


}
}
