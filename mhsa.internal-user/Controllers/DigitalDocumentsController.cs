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
    public class DigitalDocumentsController : ControllerBase, IDigitalDocumentsService
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
        [Route("getById")]
        public IEnumerable<DigitalDocuments> GetById(object prv)
        {
           return service.GetById(prv);
        }

        [HttpPost]
        [Route("post")]
        public void saveDigitalDocument(object files)
        {

            List<DigitalDocumentDTO> filesToSave = JsonConvert.DeserializeObject<List<DigitalDocumentDTO>>(files.ToString());


            service.saveDigitalDocument(filesToSave);
        }

        public void saveDigitalDocument(List<DigitalDocumentDTO> files)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        [Route("updateReceive")]
        public void setReceivedState(object id)
        {
            service.setReceivedState(id);
        }

        [HttpPost]
        [Route("updateReject")]
        public void setRejectedState(object id)
        {
            service.setRejectedState(id);
        }
    }

}
