using FluentValidation;
using mhsa.internal_user.Validators;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Service.DTOs;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace mhsa.internal_user.Controllers
{
    [Route("api/{controller}")]
    [Authorize]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration configuration;
        public static Object response;
        public static string Token;

        public AuthController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }


        [AllowAnonymous]
        [HttpPost]
        public async Task<object> Login([FromBody] UserCredentialsDTO user)
        {
            var validor = new UserValidator();
            var result = validor.Validate(user);

            if (result.Errors.Any())
                throw new ValidationException(result.Errors);

            if (result.IsValid)
            {
                dynamic loginData = new System.Dynamic.ExpandoObject();
                string resultLogin = string.Empty;
                loginData.User = user.Username;
                loginData.Password = user.Password;
                loginData.Aplicacion = configuration["Auth:Aplicacion"];
                loginData.RaizFuncion = configuration["Auth:RaizFuncion"];
                loginData.Version = configuration["Auth:Version"];
                loginData.IdAmbiente = int.Parse(configuration["Auth:IdAmbiente"]);
                loginData.Secret = configuration["Auth:SecretKey"];

            

                HttpContent httpContent = new StringContent(JsonConvert.SerializeObject(loginData), Encoding.UTF8);
                httpContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                //object obj = JsonConvert.SerializeObject(loginData); Json a enviar en caso de requerir prueba externa

                using (var httpClient = new HttpClient())
                {
                    httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                    using (var response = await httpClient.PostAsync(configuration["Auth:Endpoint"], httpContent))
                    {
                            Token = response.Content.ReadAsStringAsync().Result;
                            AuthController.response = response;
                            var key = Encoding.ASCII.GetBytes(configuration["Auth:SecretKey"]);

                            ClaimsIdentity claims = new ClaimsIdentity();

                            claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, loginData.User));

                            var tokenDescriptor = new SecurityTokenDescriptor
                            {
                                Subject = claims,
                                // Nuestro token va a durar un día
                                Expires = DateTime.UtcNow.AddDays(1),
                                // Credenciales para generar el token usando nuestro secretykey y el algoritmo hash 256
                                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                            };

                            var tokenHandler = new JwtSecurityTokenHandler();
                            var createdToken = tokenHandler.CreateToken(tokenDescriptor);

                        if (response.StatusCode != System.Net.HttpStatusCode.OK)
                        {
                            return Ok("unauthorized");
                            
                        }
                        else
                        {
                            return Ok(tokenHandler.WriteToken(createdToken));

                        }

                    }
                }
            }
            else return BadRequest();
        }

        [HttpGet]
        public async Task<string> getToken()
        {
            return Token;
        }

    }
}
