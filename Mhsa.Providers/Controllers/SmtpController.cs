using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;


namespace Mhsa.Backoffice.Controllers
{

    [ApiController]
    [Route("api/{controller}")]
    public class SmtpController : Controller
    {

        public string EmailOrigen;
        public string EmailDestino;
        public string EmailSubject;
        public string AccountPassword;
        public string SmtpServiceHost;
        public int SmtpServicePort;
        public NetworkCredential SmtpServiceCredential;
        public IConfiguration configuration;

        public SmtpController(IConfiguration cfg)
        {
            this.configuration = cfg;
            this.EmailOrigen = this.configuration.GetValue<string>("SmtpService:SmtpOriginAddress");
            this.EmailDestino = this.configuration.GetValue<string>("SmtpService:SmtpDestinationAddress");
            this.EmailSubject = this.configuration.GetValue<string>("SmtpService:SmtpEmailSubject");
            this.AccountPassword = this.configuration.GetValue<string>("SmtpService:SmtpAccountPassword");
            this.SmtpServiceHost = this.configuration.GetValue<string>("SmtpService:SmtpServiceHost");
            this.SmtpServicePort = this.configuration.GetValue<int>("SmtpService:SmtpServicePort");
            this.SmtpServiceCredential= new NetworkCredential(this.EmailOrigen, this.AccountPassword);
        }

        [HttpPost]
        [Route("send")]
        public IActionResult MailSender([FromBody]object msg)
        {
            
            string message = msg.ToString().Replace('}', ' ');
            message = message.Replace("{\"msg\":\"","");
            message = message.Replace("\"", "");
            MailMessage Message = new MailMessage(this.EmailOrigen, this.EmailDestino, this.EmailSubject, message);

            SmtpClient client = new SmtpClient(this.SmtpServiceHost);
            client.EnableSsl = true;
            client.UseDefaultCredentials = false;
            client.Host = this.SmtpServiceHost;
            client.Port = this.SmtpServicePort;
            client.Credentials = this.SmtpServiceCredential;

            client.Send(Message);
            client.Dispose();

            return Ok("nopo");
        }


    }

}
