using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Abstractions;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Repository.Interfaces;
using Service.Interfaces;
using System.Diagnostics;
using Newtonsoft.Json;
using RestSharp;
using Microsoft.AspNetCore.Authorization;

namespace mhsa.internal_user.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/{controller}")]
    public class StatesController : ControllerBase
    {

        private readonly IStatesService Service;

        public StatesController(IStatesService service)
        {
            this.Service = service;
        }

        [HttpGet]
        public IEnumerable<States> GetAll()
        {
            return Service.GetAll();
        }

       


    }

}
