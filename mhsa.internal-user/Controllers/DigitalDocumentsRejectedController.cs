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
    public class DigitalDocumentsRejectedController : ControllerBase, IDigitalDocumentsRejectedService
    {

        private readonly IDigitalDocumentsRejectedService service;

        public DigitalDocumentsRejectedController(IDigitalDocumentsRejectedService service)
        {
            this.service = service;
        }


        public IEnumerable<DigitalDocumentsRejected> GetAll()
        {
            return service.GetAll();
        }


        [HttpPost]
        [Route("post")]
        public void saveDigitalDocumentRejected(object files)
        {

            List<DigitalDocumentRejectedDTO> filesToSave = JsonConvert.DeserializeObject<List<DigitalDocumentRejectedDTO>>(files.ToString());

            service.saveDigitalDocumentRejected(filesToSave);
        }

        public void saveDigitalDocumentRejected(List<DigitalDocumentRejectedDTO> filesToSave)
        {
            throw new NotImplementedException();
        }
    }

}
