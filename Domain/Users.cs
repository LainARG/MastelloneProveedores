using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Users
    {

        [Key]
        public int Id_usuario { get; set; }
        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public string Tipo { get; set; }

        public string Domicilio { get; set; }

        public string Localidad { get; set; }

        public string Codigo_postal { get; set; }

        private string Telefono { get; set; }

        public string Mail { get; set; }

        public DateTime Fecha_registro { get; set; }

        public DateTime Fecha_ult_ingreso { get; set; }
    

        public Users() {

            this.Fecha_registro = DateTime.Now;

        }

    }
}
