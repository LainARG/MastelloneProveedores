using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Service.Interfaces;
using Service;
using Repository.Interfaces;
using Repository.Repository;
using Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

namespace Mhsa.Backoffice
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
            services.AddTransient<IPaymentsService, PaymentsService>();
            services.AddTransient<IPaymentsRepository, PaymentsRepository>();
            services.AddTransient<IDigitalDocumentsService, DigitalDocumentsService>();
            services.AddTransient<IDigitalDocumentsRepository, DigitalDocumentsRepository>();
            services.AddTransient<ITaxesService, TaxesService>();
            services.AddTransient<ITaxesRepository, TaxesRepository>();
            services.AddTransient<IStatesService, StatesService>();
            services.AddTransient<IStatesRepository, StatesRepository>();
            services.AddTransient<IStateTypesService, StateTypesService>();
            services.AddTransient<IStateTypesRepository, StateTypesRepository>();
            services.AddTransient<IProvidersService, ProvidersService>();
            services.AddTransient<IProvidersRepository, ProvidersRepository>();
            services.AddTransient<IPaymentDetailService, PaymentDetailService>();
            services.AddTransient<IPaymentDetailRepository, PaymentDetailRepository>(); 
            services.AddTransient<IPaymentsFormsService, PaymentsFormsService>();
            services.AddTransient<IPaymentsFormsRepository, PaymentsFormsRepository>();
            services.AddTransient<IUsersAssignmentService, UsersAssignmentService>();
            services.AddTransient<IUsersAssignmentRepository, UsersAssignmentRepository>();
            services.AddTransient<IDocumentTypesService, DocumentTypesService>();
            services.AddTransient<IDocumentTypesRepository, DocumentTypesRepository>();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {


            app.UseStaticFiles();

            app.UseRouting();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();

            app.UseCors("AllowAllOriginsPolicy");
           

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=api/users}/{action=GetAll}");
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
