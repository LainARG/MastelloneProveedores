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
using javax.jws;
using RestSharp;
using Microsoft.AspNetCore.Authorization;

namespace mhsa.internal_user.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/{controller}")]
    public class DigitalDocumentsController : ControllerBase
    {

        private readonly IDigitalDocumentsService service;

        public DigitalDocumentsController(IDigitalDocumentsService service)
        {
            this.service = service;
        }


        public IEnumerable<DigitalDocuments> GetAll()
        {
            return service.GetAll();
        }

        [HttpPost]
        [Route("post")]
        public void saveDigitalDocument(object files)
        {

            List<DigitalDocumentDTO> filesToSave = JsonConvert.DeserializeObject<List<DigitalDocumentDTO>>(files.ToString());


            service.saveDigitalDocument(filesToSave);
        }


    }

}
