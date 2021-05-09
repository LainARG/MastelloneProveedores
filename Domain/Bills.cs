using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Bills
    {

        [Key]
        public int Id_factura { get; set; }
        public int Id_proveedor { get; set; }
        public string Estado { get; set; }

        public string Tipo { get; set; }

        public string Numero_documento{ get; set; }

        public DateTime Fecha_vencimiento { get; set; }

        public DateTime Fecha_emision { get; set; }
    

        public Bills() {

            this.Fecha_emision = DateTime.Now;

        }

    }
}
