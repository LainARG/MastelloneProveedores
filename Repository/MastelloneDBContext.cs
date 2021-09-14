using Domain;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class MastelloneDBContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UsersAssignment>()
                .HasKey(bc => new { bc.Id_usuario, bc.Id_proveedor });
            modelBuilder.Entity<UsersAssignment>()
                .HasOne(bc => bc.Users)
                .WithMany(b => b.UsersAssignments)
                .HasForeignKey(bc => bc.Id_usuario);
            modelBuilder.Entity<UsersAssignment>()
                .HasOne(bc => bc.Providers)
                .WithMany(c => c.UsersAssignments)
                .HasForeignKey(bc => bc.Id_proveedor);
        }

        public DbSet<Users> Usuarios { get; set; }

        public DbSet<UsersAssignment> Usuarios_asignacion { get; set; }

        public DbSet<Providers> Proveedores { get; set; }

        public DbSet<PaymentsForms> Pagos_formas { get; set; }

        public DbSet<PaymentDetail> Pagos_detalle { get; set; }

        public DbSet<Documents> Documentos { get; set; }

        public DbSet<DocumentsReasonRejection> Motivos_rechazo_documento { get; set; }
        
        public DbSet<DocumentTypes> Tipos_documento { get; set; }

        public DbSet<Payments> Pagos { get; set; }

        public DbSet<Notices> Avisos { get; set; }

        public DbSet<DigitalDocuments> Documentos_electronicos { get; set; }

        public DbSet<DigitalDocumentsRejected> Documentos_electronicos_rechazos { get; set; }

        public DbSet<States> Estados { get; set; }

        public DbSet<Visits> Visitas { get; set; }

        public DbSet<StateTypes> Tipos_estado { get; set; }

        public MastelloneDBContext(DbContextOptions<MastelloneDBContext> options)
            : base(options)
        { }
    }

}
