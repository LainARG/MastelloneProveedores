﻿using Domain;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class MastelloneDBContext : DbContext
    {
        public DbSet<Users> Usuarios { get; set; }
        public DbSet<Documents> Documentos { get; set; }

        public DbSet<Payments> Pagos { get; set; }

        public MastelloneDBContext(DbContextOptions<MastelloneDBContext> options)
            : base(options)
        { }
    }
}
