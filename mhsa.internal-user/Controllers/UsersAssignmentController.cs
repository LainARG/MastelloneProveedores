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
    public class UsersAssignmentController : ControllerBase
    {

        private readonly IUsersAssignmentService service;

        public UsersAssignmentController(IUsersAssignmentService service)
        {
            this.service = service;
        }


        public IEnumerable<UsersAssignment> GetAll()
        {
            return service.GetAll();
        }


    }

}
