using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Domain
{
    public class Providers
    {
        [Key]
        public int Id_proveedor { get; set; }

        public int Tipo_proveedor { get; set; }

        public int Codigo_proveedor { get; set; }

        public decimal Cuit { get; set; }

        public string Razon_social { get; set; }

        public string Domicilio { get; set; }

        public string Localidad { get; set; }

        public string Codigo_postal { get; set; }

        public string Telefono { get; set; }

        [ForeignKey("Id_proveedor")]
        public ICollection<UsersAssignment> UsersAssignments { get; set; }

        public Providers()
        {
        }

    }
}
