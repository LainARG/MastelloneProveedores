﻿using Domain;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class MastelloneDBContext : DbContext
    {
        public DbSet<Users> Usuarios { get; set; }

        public DbSet<Documents> Documentos { get; set; }

        public DbSet<Payments> Pagos { get; set; }

        public DbSet<DigitalDocuments> Documentos_electronicos { get; set; }
        public DbSet<Bills> Facturas { get; set; }
        public DbSet<Taxes> Contribuciones{ get; set; }

        public MastelloneDBContext(DbContextOptions<MastelloneDBContext> options)
            : base(options)
        { }
    }
}
