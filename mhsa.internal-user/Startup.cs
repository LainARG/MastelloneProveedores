using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Service.Interfaces;
using Service;
using Repository.Interfaces;
using Repository.Repository;
using Repository;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

namespace mhsa.internal_user
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<MastelloneDBContext>(options => options.UseSqlServer(
            Configuration.GetConnectionString("DefaultConnection")));
            services.AddTransient<IUsersService, UsersService>();
            services.AddTransient<IUsersRepository, UsersRepository>();
            services.AddTransient<IDocumentsService, DocumentsService>();
            services.AddTransient<IDocumentsRepository, DocumentsRepository>();
            services.AddTransient<IDocumentsReasonRejectionService, DocumentsReasonRejectionService>();
            services.AddTransient<IDocumentsReasonRejectionRepository, DocumentsReasonRejectionRepository>();
            services.AddTransient<IPaymentsService, PaymentsService>();
            services.AddTransient<IPaymentsRepository, PaymentsRepository>();
            services.AddTransient<IDigitalDocumentsService, DigitalDocumentsService>();
            services.AddTransient<IDigitalDocumentsRepository, DigitalDocumentsRepository>();
            services.AddTransient<IDigitalDocumentsRejectedService, DigitalDocumentsRejectedService>();
            services.AddTransient<IDigitalDocumentsRejectedRepository, DigitalDocumentsRejectedRepository>();
            services.AddTransient<IStatesService, StatesService>();
            services.AddTransient<IStatesRepository, StatesRepository>();
            services.AddTransient<IStateTypesService, StateTypesService>();
            services.AddTransient<IStateTypesRepository, StateTypesRepository>();
            services.AddTransient<IProvidersService, ProvidersService>();
            services.AddTransient<IProvidersRepository, ProvidersRepository>();
            services.AddTransient<IVisitsService, VisitsService>();
            services.AddTransient<IVisitsRepository, VisitsRepository>();
            services.AddTransient<IPaymentDetailService, PaymentDetailService>();
            services.AddTransient<IPaymentDetailRepository, PaymentDetailRepository>();
            services.AddTransient<IPaymentsFormsService, PaymentsFormsService>();
            services.AddTransient<IPaymentsFormsRepository, PaymentsFormsRepository>();
            services.AddTransient<IUsersAssignmentService, UsersAssignmentService>();
            services.AddTransient<IUsersAssignmentRepository, UsersAssignmentRepository>();
            services.AddTransient<IDocumentTypesService, DocumentTypesService>();
            services.AddTransient<IDocumentTypesRepository, DocumentTypesRepository>();
            services.AddTransient<INoticesService, NoticesService>();
            services.AddTransient<INoticesRepository, NoticesRepository>();

            var key = Encoding.ASCII.GetBytes(Configuration.GetValue<string>("Auth:SecretKey"));

            services.AddAuthentication(x => {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x => {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });


            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;
            });

            services.AddControllersWithViews().AddNewtonsoftJson(
                x => x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment() || env.EnvironmentName == "Staging")
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseSpaStaticFiles(new StaticFileOptions { RequestPath = "/clientapp/build" });


            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=home}/{action=*}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });



        }
    }
}
