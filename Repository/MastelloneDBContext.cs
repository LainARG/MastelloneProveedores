using Domain;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class MastelloneDBContext : DbContext
    {
        public DbSet<Users> Usuarios { get; set; }

        public DbSet<UsersAssignment> Usuarios_asignacion { get; set; }

        public DbSet<Providers> Proveedores { get; set; }

        public DbSet<PaymentsForms> Pagos_formas { get; set; }

        public DbSet<PaymentDetail> Pagos_detalle { get; set; }

        public DbSet<Documents> Documentos { get; set; }

        public DbSet<Payments> Pagos { get; set; }

        public DbSet<DigitalDocuments> Documentos_electronicos { get; set; }
        public DbSet<Taxes> Contribuciones{ get; set; }

        public DbSet<States> Estados { get; set; }

        public DbSet<StateTypes> Tipos_estado { get; set; }

        public MastelloneDBContext(DbContextOptions<MastelloneDBContext> options)
            : base(options)
        { }
    }

}
